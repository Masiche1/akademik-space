import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "el10-u10-lesson-10-3",
  code: "10-3",
  title: "Revising and Polishing Your Writing",
  goal: "I CAN revise drafts for ambitious vocabulary, appropriate register and AO5 accuracy.",
  standards: ["4EA1 Paper 2 Section B", "4EA1 AO4", "4EA1 AO5"],
  
  vocabulary: [
    { term: "Register", definition: "The level of formality in writing, matched to audience and purpose." },
    { term: "Cliché", definition: "An overused phrase that has lost its impact through repetition." },
    { term: "Editing", definition: "Improving content and style — word choice, imagery, structure." },
    { term: "Proofreading", definition: "Checking for mechanical errors — spelling, punctuation, grammar." },
    { term: "Homophone", definition: "Words that sound alike but differ in meaning and spelling (their/there/they’re)." },
    { term: "Tense consistency", definition: "Keeping the same time frame throughout a piece of writing." },
  ],
  concepts: [
    {
      id: "el10-u10-vocabulary-register",
      title: "Ambitious vocabulary and register",
      skill: "Replace vague words and clichés with precise, ambitious vocabulary suited to the register.",
      lesson: {
        sections: [
          {
            heading: "Precise verbs and adjectives",
            body: "Weak writing leans on ‘said’, ‘went’, ‘nice’, ‘bad’, ‘very’. **Precise verbs** carry the action: not ‘he went’ but ‘he slouched’, ‘he crept’, ‘he marched’. Precise adjectives carry judgement: not ‘bad storm’ but ‘a screaming gale’. One well-chosen verb can replace an adverb and a whole clause — ‘whispered’ beats ‘said quietly’.",
          },
          {
            heading: "Connotation and register",
            body: "Every upgrade must check **connotation** and **register**. ‘Slender’ flatters where ‘scrawny’ insults; ‘kids’ suits informal narrative but not a formal report. Ambitious vocabulary is not the rarest word — it is the most precise word. If a simpler word says exactly what you mean, keep it; precision beats obscurity every time.",
          },
          {
            heading: "Killing clichés",
            body: "Clichés — ‘busy as a bee’, ‘dark as night’, ‘at the end of the day’ — are tired images the reader has already seen. They signal lazy writing. Replace them with fresh, specific comparisons drawn from your own scene. If you notice a phrase you have heard before, it probably does not belong in your draft.",
          },
        ],
        keyFormulas: [
          { name: "Precise verb", statement: "A specific action word that replaces ‘said/went’ and often removes the need for an adverb." },
          { name: "Connotation", statement: "The emotional colouring of a word; must match the intended impression." },
          { name: "Register", statement: "The level of formality matched to audience and purpose." },
          { name: "Cliché", statement: "An overused expression that weakens description through familiarity." },
        ],
        workedExample: {
          problem: "Revise: ‘The city was big and busy.’",
          solution: "Skyscrapers shoulder each other above a river of headlights, and the pavement hums with a thousand voices. — ‘Big and busy’ becomes scale (skyscrapers), conflict (shoulder) and sound (hums), in a register that matches an energetic scene.",
        },
      },
      questions: [
        {
          id: "el10-u10-vocabreg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In ‘The old man moved slowly into the room’, which verb is most precise if he enters nervously?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "crept"
                    },
                    {
                              "id": "b",
                              "text": "strolled"
                    },
                    {
                              "id": "c",
                              "text": "marched"
                    },
                    {
                              "id": "d",
                              "text": "sprinted"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Precise verb",
                              "statement": "The verb must match the intended connotation — nervousness here."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only ‘crept’ conveys nervous, hesitant movement; the others imply confidence, leisure or panic.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "**(a)** ‘Crept’ — it alone carries nervous connotation.",
          "commonErrors": [
                    "Choosing the rarest word rather than the most fitting."
          ]
},
        },
        {
          id: "el10-u10-vocabreg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Improve these weak phrases with stronger alternatives: ‘The food was nice’ and ‘He said he was sad.’",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Upgrading weak language",
                              "statement": "Replace telling adjectives and ‘said/sad’ with precise, connotative alternatives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both phrases are improved with precise, connotative language.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "The improvements keep the original meaning and suit the register.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "e.g. ‘The stew simmered with thyme and dark beer’ and ‘His shoulders sagged; he traced the rim of his cup without drinking.’",
          "commonErrors": [
                    "Swapping ‘nice’ for a different vague word like ‘good’.",
                    "Losing the meaning while reaching for sophistication."
          ]
},
        },
        {
          id: "el10-u10-vocabreg-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite ‘The dog ran across the field’ using a precise verb and one adjective chosen deliberately for its connotation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Connotation",
                              "statement": "The adjective’s emotional colouring must serve the scene’s mood."
                    },
                    {
                              "kind": "skill",
                              "name": "Precision",
                              "statement": "One precise word can replace several weak ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A precise verb replaces ‘ran’ (e.g. bounded, sprinted, careered).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "The adjective’s connotation is deliberate and explained by the image.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The sentence gains sensory or figurative detail.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The sentence is accurate and controlled.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "e.g. ‘The dog bounded across the wind-bruised field, ears flat against the approaching storm.’",
          "commonErrors": [
                    "Choosing a ‘posh’ word whose connotation fights the scene.",
                    "Overloading the sentence until it loses clarity."
          ]
},
        },
        {
          id: "el10-u10-vocabreg-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Revise the flat sentence ‘The city was big and busy’ into an ambitious sentence of your own.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Imagery over abstraction",
                              "statement": "Replace abstract size/energy with concrete, sensory scale."
                    },
                    {
                              "kind": "skill",
                              "name": "Register match",
                              "statement": "Ambition must suit the voice and purpose of the piece."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "‘Big and busy’ is replaced by concrete imagery rather than synonyms.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "At least one figurative or sensory choice sharpens the image.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The sentence has controlled rhythm.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "The result is original, not a recycled cliché.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The sentence is accurate and punctuated correctly.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "e.g. ‘Skyscrapers shoulder each other above a river of headlights, and the pavement hums with a thousand voices.’",
          "commonErrors": [
                    "Replacing with ‘enormous and hectic’ — still abstract."
          ],
          "commonErrorsFix": null
},
        },
        {
          id: "el10-u10-vocabreg-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Revise this weak paragraph: ‘It was a nice day. The sun was hot. We went to the park. It was fun.’",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three weak or vague words/phrases and say why each is weak.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Replace two of them with ambitious alternatives.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Rewrite the whole sentence set as one polished sentence or two.",
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
                              "name": "Diagnosing weak prose",
                              "statement": "Vague evaluative words are the enemy of description."
                    },
                    {
                              "kind": "technique",
                              "name": "Compression",
                              "statement": "Polished prose often merges weak sentences into one strong one."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "At least two genuinely vague items are identified (‘nice’, ‘hot’, ‘fun’).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each is explained as vague rather than merely listed.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two replacements are precise and connotatively apt.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "The replacements suit the register of a sunny park scene.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The rewrite is compressed into one or two strong sentences.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sensory or figurative detail replaces the vague evaluations.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The result is accurate and well punctuated.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear, effective use of the required technique with some developed detail; mostly accurate."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Limited or partial attempt; technique present but underdeveloped or inaccurate."
                    }
          ],
          "finalAnswer": "e.g. ‘The sun beat down on the park, and we sprawled across the grass, too warm and too happy to move.’ — vague evaluations become heat, posture and feeling.",
          "commonErrors": [
                    "Identifying weak words but unable to replace them.",
                    "Rewriting into something longer rather than stronger."
          ]
},
        },
        {
          id: "el10-u10-vocabreg-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Revise this paragraph for ambitious vocabulary and register: ‘It was a bad storm. The wind was very strong. Things broke. We were scared. It was loud.’",
          parts: [
          {
                    "label": "a",
                    "prompt": "List five weak words/phrases and give a stronger replacement for each.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Rewrite two of the sentences with figurative or sensory detail.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Write the complete revised paragraph.",
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
                              "name": "Full-paragraph revision",
                              "statement": "Weak evaluative prose must become specific, sensory, connotative writing."
                    },
                    {
                              "kind": "skill",
                              "name": "Register consistency",
                              "statement": "The revised register must stay consistent with a storm narrative."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "At least three genuinely weak items are identified with apt replacements.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "a",
                              "reasoning": "Replacements show connotative awareness, not just synonyms.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "The list covers both adjectives and verbs.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "At least one sentence gains figurative detail.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "At least one sentence gains sensory detail.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The rewrites keep the original information.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The paragraph has a consistent narrative register.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Precise verbs and adjectives replace all weak evaluations.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Figurative or sensory detail is sustained.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sentence variety controls pace.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Clichés are avoided.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The revised paragraph is coherent and accurate.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Assured, imaginative and well-controlled writing; techniques sustained and integrated; virtually error-free."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Effective writing with several well-chosen techniques; mostly controlled and accurate."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited writing; few techniques and frequent errors."
                    }
          ],
          "finalAnswer": "A revised paragraph where ‘bad’, ‘very strong’, ‘things broke’, ‘scared’, ‘loud’ become connotative, sensory, precise language — e.g. ‘The storm came like a fist: slates screamed off the roof, the fence bowed double, and we pressed ourselves flat against the wall, counting seconds between thunderclaps.’",
          "commonErrors": [
                    "Using bigger words that are less precise.",
                    "Inconsistent register or surviving clichés."
          ]
},
        },
      ],
    },
    {
      id: "el10-u10-accuracy-editing",
      title: "Editing and proofreading for AO5",
      skill: "Identify and correct errors in spelling, punctuation, grammar and tense to maximise AO5 accuracy marks.",
      lesson: {
        sections: [
          {
            heading: "Editing versus proofreading",
            body: "**Editing** improves content — word choice, imagery, structure. **Proofreading** is the mechanical final check: spelling, punctuation, grammar, tense consistency. In the exam, leave five minutes specifically for proofreading; AO5 is a separate assessment objective worth real marks, and errors in dialogue punctuation or apostrophes are the most visible.",
          },
          {
            heading: "The usual suspects",
            body: "The errors that recur most: **apostrophes** (its/it’s, their/there/they’re, childrens/children’s), **commas** (after opening clauses, around parenthesis), **homophones** (your/you’re, to/too/two, hear/here), **tense slips** (was/were, begun/began) and **double negatives or agreement slips** (me and him → he and I). Learn the checklist; most errors are one of five types.",
          },
          {
            heading: "A reliable proofreading routine",
            body: "Read the draft once for sense, then once **aloud** — your ear catches what your eye skips. Check one error type at a time: apostrophes first, then commas, then homophones, then tense. Finally, verify every capital letter and full stop. A clean final pass is worth more than a rushed first draft ever was.",
          },
        ],
        keyFormulas: [
          { name: "Editing", statement: "Improving content and style before the mechanical check." },
          { name: "Proofreading", statement: "The final mechanical check for spelling, punctuation, grammar and tense." },
          { name: "Homophone", statement: "Sound-alike words needing context to distinguish: their/there/they’re, its/it’s." },
          { name: "AO5 checklist", statement: "Vocabulary, sentence structure, spelling, punctuation and grammar — checked separately." },
        ],
        workedExample: {
          problem: "Correct this sentence: ‘The childs’ toys are over their.’",
          solution: "The children’s toys are over there. — ‘childs’ needs an apostrophe before the s (children’s); ‘their’ is a homophone error for ‘there’.",
        },
      },
      questions: [
        {
          id: "el10-u10-accuracy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses apostrophes correctly?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The childrens’ toys are over their."
                    },
                    {
                              "id": "b",
                              "text": "The children’s toys are over there."
                    },
                    {
                              "id": "c",
                              "text": "The childrens toys are over they’re."
                    },
                    {
                              "id": "d",
                              "text": "The children’s toy’s are over there."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Apostrophe of possession",
                              "statement": "Possessive plural takes apostrophe after the s; ‘there’ is not ‘their/they’re’."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only (b) gets both the possessive ‘children’s’ and the place adverb ‘there’ right.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "**(b)** children’s toys / over there.",
          "commonErrors": [
                    "Confusing there/their/they’re — the classic homophone trap."
          ]
},
        },
        {
          id: "el10-u10-accuracy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct the errors in this sentence: ‘The dogs were chasing it’s tail in they’re garden.’",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "its versus it’s",
                              "statement": "‘Its’ is possessive; ‘it’s’ means ‘it is’. ‘Their’ is possessive; ‘they’re’ means ‘they are’."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "‘It’s tail’ should be ‘its tail’ — possession, not ‘it is’.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "‘They’re garden’ should be ‘their garden’ — possession, not ‘they are’.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "The dogs were chasing its tail in their garden.",
          "commonErrors": [
                    "Correcting only one of the two homophone errors."
          ]
},
        },
        {
          id: "el10-u10-accuracy-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Identify and correct four errors in this sentence: ‘After the bell rang we ran to are classrooms but its to late to line up.’",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Comma after opening clause",
                              "statement": "A subordinate clause before the main clause takes a comma."
                    },
                    {
                              "kind": "definition",
                              "name": "Homophones and agreement",
                              "statement": "our/are, it’s/its, too/to are tested constantly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A comma is needed after ‘rang’ to close the opening clause.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "‘Are classrooms’ should be ‘our classrooms’ — wrong word.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "‘Its to late’ should be ‘it’s too late’ — contraction and too/to.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "The fourth error — e.g. the missing comma or any other slip in the sentence — is identified and corrected.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "After the bell rang, we ran to our classrooms, but it’s too late to line up. (Errors: comma after ‘rang’, are→our, its→it’s, to→too.)",
          "commonErrors": [
                    "Fixing the words but forgetting the comma.",
                    "Changing meaning while correcting errors."
          ]
},
        },
        {
          id: "el10-u10-accuracy-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "This paragraph contains five errors. Identify and correct each one: ‘When we arrived at the cabin, it’s roof was leaking. Me and my cousin fixed it with are tarpaulin. The rain stoped by noon. Their was a fox in the trees.’",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Systematic proofreading",
                              "statement": "Check one error type at a time across the whole paragraph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "‘It’s roof’ should be ‘its roof’ — possession.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "‘Me and my cousin’ should be ‘My cousin and I’ — formal subject order and case.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "‘Are tarpaulin’ should be ‘a tarpaulin’ — wrong word.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "‘Stoped’ should be ‘stopped’ — spelling.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "‘Their was a fox’ should be ‘There was a fox’ — homophone.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "When we arrived at the cabin, its roof was leaking. My cousin and I fixed it with a tarpaulin. The rain stopped by noon. There was a fox in the trees.",
          "commonErrors": [
                    "Finding four errors and missing the fifth.",
                    "Over-correcting: changing words that were already right."
          ]
},
        },
        {
          id: "el10-u10-accuracy-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Edit the following writing for accuracy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct the errors in: ‘The childs’ toys are over their.’",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Add the missing commas in: ‘The dog which was old and grey slept in the sun.’",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two reasons why checking accuracy matters in imaginative writing.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Relative clause commas",
                              "statement": "Commas bracket a non-defining relative clause."
                    },
                    {
                              "kind": "skill",
                              "name": "Why AO5 matters",
                              "statement": "Accuracy protects clarity and earns its own marks."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "‘Childs’ becomes ‘children’s’ — possessive plural apostrophe.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "a",
                              "reasoning": "‘Their’ becomes ‘there’ — homophone.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "A comma is added before ‘which’ and after ‘grey’ to bracket the clause.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both commas are placed correctly.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Errors distract the reader and break immersion in the narrative.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "AO5 is a separately assessed objective — accuracy directly earns marks.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "A third valid reason — e.g. errors can change meaning or look careless — is given.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear, effective use of the required technique with some developed detail; mostly accurate."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Limited or partial attempt; technique present but underdeveloped or inaccurate."
                    }
          ],
          "finalAnswer": "(a) The children’s toys are over there. (b) The dog, which was old and grey, slept in the sun. (c) Errors break immersion; AO5 is separately marked; careless errors can change meaning.",
          "commonErrors": [
                    "Adding only one comma around the relative clause.",
                    "Listing generic reasons without linking to imaginative writing."
          ]
},
        },
        {
          id: "el10-u10-accuracy-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "You have written a first draft of an imaginative piece. Plan and carry out a final accuracy check.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify and correct three errors in: ‘She dont no were going.’",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Correct three punctuation/capitalisation errors in: ‘the dog ran fast its tail wagging’",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Describe three checks you would make to an imaginative draft and why each matters.",
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
                              "name": "Accuracy checklist",
                              "statement": "Systematic checks catch different error types."
                    },
                    {
                              "kind": "technique",
                              "name": "Proofreading routine",
                              "statement": "Reading aloud and one-type-at-a-time checks are most reliable."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "‘Dont’ becomes ‘don’t’ — apostrophe.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "a",
                              "reasoning": "‘No’ becomes ‘know’ — homophone.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "a",
                              "reasoning": "‘Were going’ becomes ‘we’re going’ — homophone.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "A capital ‘T’ is needed for ‘The’.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "A comma is needed after ‘fast’ before the participle clause.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "‘Its’ becomes ‘it’s’ — contraction.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Check apostrophes and homophones — most frequent errors.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Read aloud for sense and tense consistency.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Check commas, capitals and full stops in a separate pass.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Verify dialogue punctuation specifically.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Each check is justified by the error type it catches.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "The routine is described as systematic rather than random.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Assured, imaginative and well-controlled writing; techniques sustained and integrated; virtually error-free."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Effective writing with several well-chosen techniques; mostly controlled and accurate."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited writing; few techniques and frequent errors."
                    }
          ],
          "finalAnswer": "(a) She don’t know we’re going → She doesn’t know we’re going. (b) The dog ran fast, it’s tail wagging → The dog ran fast, its tail wagging. (c) A systematic routine: homophones/apostrophes, read-aloud for tense and sense, punctuation pass, dialogue check — each targeting a distinct error type.",
          "commonErrors": [
                    "Listing checks without explaining what each catches.",
                    "Random proofreading rather than a systematic routine."
          ],
          "examinerNote": "Part (b) accepts equivalent valid corrections; the comma placement may vary."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u10-l13-notes",
      title: "Revising and proofreading — notes",
      summary: "Ambitious vocabulary means precise, connotative words; AO5 accuracy is earned through systematic proofreading.",
      sections: [
        { heading: "Key idea", body: "Editing improves content; proofreading fixes mechanics. Leave exam time for a separate mechanical pass." },
        { heading: "Exam technique", body: "Work through one error type at a time — apostrophes, commas, homophones, tense — and read dialogue punctuation extra carefully." },
      ],
    },
  ],
};
