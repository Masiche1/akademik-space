import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "el10-u5-lesson-5-3",
  code: "5-3",
  title: "Editing and Improving Writing",
  goal: "I CAN identify and correct errors and improve clarity, concision and sentence variety in writing.",
  standards: ["4EA1 Paper 1", "4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO5"],
  
  vocabulary: [
    { term: "Editing", definition: "Reviewing and improving a draft for accuracy, clarity and style." },
    { term: "Concision", definition: "Expressing ideas in the fewest necessary words." },
    { term: "Active voice", definition: "Sentence where the subject performs the action: 'She wrote the essay.'" },
    { term: "Passive voice", definition: "Sentence where the subject receives the action: 'The essay was written by her.'" },
    { term: "Ambiguity", definition: "A sentence that can be understood in more than one way." },
    { term: "Sentence variety", definition: "Mixing simple, compound and complex sentences for rhythm and emphasis." },
  ],
  concepts: [
    {
      id: "el10-u5-error-correction",
      title: "Identifying and correcting errors",
      skill: "Systematically identify and correct errors in drafts.",
      lesson: {
        sections: [
          {
            heading: "A systematic editing approach",
            body: "Edit in **passes**, not all at once: (1) read for **meaning** — does it say what you intend? (2) check **spelling**; (3) check **grammar and punctuation**; (4) check **word choice**; (5) check **structure and flow**. Each pass focuses on one thing, so errors are not missed.",
          },
          {
            heading: "Common error types",
            body: "Recognise categories: **spelling** ('seperate'), **homophones** ('their/there'), **grammar** ('was wrote', 'me and him'), **punctuation** (comma splices, missing apostrophes), **word choice** (repetition, vague words) and **sentence structure** (fragments, run-ons). Naming the error type helps correct it accurately.",
          },
          {
            heading: "Using feedback",
            body: "When a teacher marks errors, don't just fix them — **categorise** them. If you keep making 'their/there' mistakes, add that pair to your personal checklist. Track recurring errors across essays; patterns reveal your weak spots.",
          },
        ],
        keyFormulas: [
          { name: "Editing passes", statement: "Meaning → spelling → grammar/punctuation → word choice → structure." },
          { name: "Error categories", statement: "Spelling, homophones, grammar, punctuation, word choice, structure." },
          { name: "Recurring errors", statement: "Track repeated mistakes to target your weaknesses." },
        ],
        workedExample: {
          problem: "A draft contains 'The essay was wrote by me and me and my friend we went to the library.' Identify the error types and correct.",
          solution: "Errors: passive construction error ('was wrote' → 'was written' or active 'I wrote'), pronoun case ('me and my friend' → 'my friend and I'), comma splice (two sentences joined without punctuation). Corrected: 'I wrote the essay last week, and my friend and I went to the library.' Naming each error type ensures each is fixed properly.",
        },
      },
      questions: [
        {
          id: "el10-u5-error-correction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first pass in systematic editing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Checking spelling"
                    },
                    {
                              "id": "b",
                              "text": "Reading for meaning"
                    },
                    {
                              "id": "c",
                              "text": "Checking punctuation"
                    },
                    {
                              "id": "d",
                              "text": "Adding detail"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Editing passes",
                              "statement": "Start with meaning, then work through accuracy checks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Meaning comes first: if the draft does not say what you intend, later fixes are wasted.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "**(b)** Reading for meaning.",
          "commonErrors": [
                    "Starting with spelling rather than meaning."
          ]
},
        },
        {
          id: "el10-u5-error-correction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Correct this sentence and name the error: 'Their going to revise they're notes.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Homophone error",
                              "statement": "Sound-alike words confused: their/there/they're."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Their' should be 'They're' (they are); 'they're' should be 'their' (possessive).",
                              "evidence": "Their going to revise they're notes",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Corrected: 'They're going to revise their notes.'",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "'They're going to revise their notes.' Homophone error.",
          "commonErrors": [
                    "Swapping the two homophones incorrectly."
          ]
},
        },
        {
          id: "el10-u5-error-correction-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "A student's draft paragraph",
          "author": "Year 10 student",
          "source": "Editing exercise",
          "text": "The essay was wrote by me last week and it was very good. Me and my friend we went to the library and done some research. Their going to help me with the presentation. Its important to revise you're notes before hand."
},
          stem: "List three distinct error types in the flawed paragraph and give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Error identification",
                              "statement": "Naming error types aids accurate correction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grammar/verb error: 'was wrote' (should be 'was written' or 'I wrote').",
                              "evidence": "The essay was wrote by me",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Pronoun case: 'Me and my friend' (should be 'my friend and I').",
                              "evidence": "Me and my friend we went",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Homophone/apostrophe errors: 'Their'/'Its'/'you're' misused.",
                              "evidence": "Its important to revise you're notes",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Verb error, pronoun case error, and homophone/apostrophe errors.",
          "commonErrors": [
                    "Listing errors without categorising them."
          ]
},
        },
        {
          id: "el10-u5-error-correction-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "A student's draft paragraph",
          "author": "Year 10 student",
          "source": "Editing exercise",
          "text": "The essay was wrote by me last week and it was very good. Me and my friend we went to the library and done some research. Their going to help me with the presentation. Its important to revise you're notes before hand."
},
          stem: "Analyse the flawed paragraph: identify the main error patterns and explain how they affect readability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Error analysis",
                              "statement": "Patterns of errors reveal systematic weaknesses."
                    },
                    {
                              "kind": "context",
                              "name": "Readability",
                              "statement": "Errors force the reader to work harder."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Verb errors ('was wrote', 'done') suggest tense and participle confusion.",
                              "evidence": "was wrote by me",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Pronoun errors ('Me and my friend we') suggest case and agreement problems.",
                              "evidence": "Me and my friend we went",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Homophone errors ('Their', 'Its', 'you're') suggest weak word-level checking.",
                              "evidence": "Its important to revise you're notes",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Together these patterns make the paragraph hard to read and undermine credibility.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The errors are systematic, not random, so targeted proofreading would fix most.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "The paragraph shows systematic verb, pronoun and homophone errors that hamper readability and credibility; targeted editing would help.",
          "commonErrors": [
                    "Listing errors without analysing the patterns."
          ]
},
        },
        {
          id: "el10-u5-error-correction-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A teacher marks the same three errors on every essay you submit. Explain why this happens and describe a strategy to eliminate them permanently.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Error tracking",
                              "statement": "Recurring errors reveal personal weaknesses."
                    },
                    {
                              "kind": "context",
                              "name": "Habit formation",
                              "statement": "Targeted practice fixes systematic mistakes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Recurring errors mean the mistakes are habitual, not accidental — the writer has not internalised the rule.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Simply fixing them on the marked essay does not address the underlying habit.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Create a personal checklist of your recurring errors (e.g., their/there/they're).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Proofread specifically for those errors in every draft, in a dedicated pass.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Study the rule and find examples until the correct form becomes automatic.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Over time, targeted attention converts conscious checking into habit.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "Recurring errors are habitual; build a personal checklist, proofread for them specifically and study until automatic.",
          "commonErrors": [
                    "Fixing errors only on the marked essay without addressing the habit."
          ]
},
        },
        {
          id: "el10-u5-error-correction-q6",
          difficulty: "challenge",
          totalMarks: 11,
          extract: {
          "title": "A student's draft paragraph",
          "author": "Year 10 student",
          "source": "Editing exercise",
          "text": "The essay was wrote by me last week and it was very good. Me and my friend we went to the library and done some research. Their going to help me with the presentation. Its important to revise you're notes before hand."
},
          stem: "Read the flawed paragraph and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify four errors in the paragraph, naming each type.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Correct the paragraph fully.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why systematic editing is more effective than one read-through.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Describe one proofreading habit that would prevent these errors.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Editing",
                              "statement": "Systematic passes catch errors a single read misses."
                    },
                    {
                              "kind": "context",
                              "name": "Accuracy",
                              "statement": "Corrected writing protects credibility."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Verb error: 'was wrote' → 'was written' or 'I wrote'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Pronoun case: 'Me and my friend' → 'My friend and I'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Homophone: 'Their' → 'They're'; 'Its' → 'It's'; 'you're' → 'your'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Comma splice / run-on: sentences joined without punctuation.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'I wrote the essay last week, and it was very good.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "'My friend and I went to the library and did some research.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "'They're going to help me with the presentation.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "'It's important to revise your notes beforehand.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "One read-through tries to catch everything at once; separate passes focus attention on one error type at a time.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "This prevents overlooking errors because each pass has a single, clear target.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "Proofread in separate passes and keep a personal checklist of recurring errors.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "1-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "1-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "d",
                              "level": "Level 2",
                              "marks": "1-1",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) Verb error, pronoun case, homophone errors, comma splice. (b) Fully corrected paragraph. (c) Separate passes focus attention and catch more errors. (d) Proofread in passes and keep a personal error checklist.",
          "commonErrors": [
                    "Correcting without naming error types.",
                    "Trying to fix everything in one pass."
          ]
},
        },
      ],
    },
    {
      id: "el10-u5-clarity-precision",
      title: "Improving clarity and precision",
      skill: "Improve writing through concision, sentence variety, active voice and removing ambiguity.",
      lesson: {
        sections: [
          {
            heading: "Concision and active voice",
            body: "**Concision** means using the fewest words needed. Cut filler ('very', 'really', 'in order to' → 'to'), redundant pairs ('past history', 'future plans') and weak phrases. **Active voice** ('She wrote the essay') is clearer and more direct than passive ('The essay was written by her'), though passive is useful when the doer is unknown or unimportant.",
          },
          {
            heading: "Removing ambiguity",
            body: "Ambiguous sentences can mean two things. 'Students should hand in essays when they are finished' — who is finished, students or essays? Clarify: 'Students should hand in their essays when the students have finished writing.' Check every sentence for who does what.",
          },
          {
            heading: "Sentence variety",
            body: "Monotonous writing uses only simple sentences. Mix **simple** ('She ran'), **compound** ('She ran, and he walked') and **complex** ('Because she ran, she was late') sentences. Variety creates rhythm and emphasis; all long sentences or all short sentences both fatigue the reader.",
          },
        ],
        keyFormulas: [
          { name: "Concision", statement: "Fewest necessary words; cut filler and redundancy." },
          { name: "Active voice", statement: "Subject performs the action — clearer and more direct." },
          { name: "Sentence variety", statement: "Mix simple, compound and complex sentences for rhythm." },
          { name: "Ambiguity", statement: "A sentence with more than one possible meaning must be clarified." },
        ],
        workedExample: {
          problem: "Improve this ambiguous sentence: 'Students should hand in their essays to the teacher when they are finished so they can be marked.'",
          solution: "The sentence is ambiguous — 'they' could refer to students or essays. Clarify: 'When students have finished writing their essays, they should hand them to the teacher so the teacher can mark them.' This removes ambiguity by making each pronoun's referent clear.",
        },
      },
      questions: [
        {
          id: "el10-u5-clarity-precision-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is clearest?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The essay was written by me in a very quick way."
                    },
                    {
                              "id": "b",
                              "text": "I quickly wrote the essay."
                    },
                    {
                              "id": "c",
                              "text": "The writing of the essay by me was done quickly."
                    },
                    {
                              "id": "d",
                              "text": "It was written by me quickly."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Clarity",
                              "statement": "Active voice and concise phrasing are clearest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'I quickly wrote the essay' is active, concise and unambiguous.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** I quickly wrote the essay.",
          "commonErrors": [
                    "Choosing a passive or wordy option."
          ]
},
        },
        {
          id: "el10-u5-clarity-precision-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what concision means and give one example of cutting filler words.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Concision",
                              "statement": "Expressing ideas in the fewest necessary words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Concision removes words that add no meaning, making writing tighter.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: 'in order to' → 'to'; 'very big' → 'enormous'; 'at this point in time' → 'now'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Concision cuts filler; 'in order to' becomes 'to', 'very big' becomes 'enormous'.",
          "commonErrors": [
                    "Confusing concision with simply writing shorter sentences."
          ]
},
        },
        {
          id: "el10-u5-clarity-precision-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between active and passive voice and when each is appropriate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Active vs passive voice",
                              "statement": "Who performs the action determines the voice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Active: subject performs the action ('She wrote the essay'); clearer and more direct.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Passive: subject receives the action ('The essay was written'); useful when the doer is unknown or unimportant.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Active is generally preferred in formal writing for clarity and energy.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Active voice is direct and clear; passive is useful when the doer is unknown or unimportant.",
          "commonErrors": [
                    "Saying passive is always wrong; it has legitimate uses."
          ]
},
        },
        {
          id: "el10-u5-clarity-precision-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "An ambiguous instruction",
          "author": "Language exercise",
          "source": "Clarity exercise",
          "text": "Students should hand in their essays to the teacher when they are finished so they can be marked."
},
          stem: "Explain the ambiguity in the extract's sentence and rewrite it to remove the ambiguity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Ambiguity",
                              "statement": "Unclear pronoun reference creates multiple meanings."
                    },
                    {
                              "kind": "skill",
                              "name": "Clarification",
                              "statement": "Rewriting with explicit subjects removes ambiguity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'they are finished' is ambiguous: does it mean the students are finished or the essays are finished?",
                              "evidence": "when they are finished",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'so they can be marked' adds another unclear 'they' — essays or students?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Rewrite: 'When students have finished writing their essays, they should hand them to the teacher so the teacher can mark them.'",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explicit subjects ('students', 'the teacher') remove all pronoun ambiguity.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "The pronoun 'they' is ambiguous; rewrite with explicit subjects: 'When students have finished writing their essays, they should hand them to the teacher so the teacher can mark them.'",
          "commonErrors": [
                    "Identifying ambiguity without rewriting the sentence."
          ]
},
        },
        {
          id: "el10-u5-clarity-precision-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student's essay uses only short simple sentences: 'She ran. She was fast. She won. She was happy.' Analyse the effect and explain how sentence variety would improve it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sentence variety",
                              "statement": "Mixing sentence types creates rhythm and emphasis."
                    },
                    {
                              "kind": "skill",
                              "name": "Style",
                              "statement": "Monotonous structure bores the reader."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The repeated simple sentences create a monotonous, childish rhythm.",
                              "evidence": "She ran. She was fast. She won. She was happy.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "All sentences are similar length and structure, so nothing stands out.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Combine with compound/complex: 'Because she was fast, she ran ahead and won; she was delighted.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Variety creates rhythm: a longer sentence builds, a short one lands with emphasis.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It also allows causal links ('because') to show relationships between ideas.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effective writing alternates sentence types to guide the reader's pace and attention.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "Uniform simple sentences are monotonous; mixing compound and complex sentences creates rhythm, emphasis and clearer relationships.",
          "commonErrors": [
                    "Suggesting only longer sentences; variety means mixing types."
          ]
},
        },
        {
          id: "el10-u5-clarity-precision-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "An ambiguous instruction",
          "author": "Language exercise",
          "source": "Clarity exercise",
          "text": "Students should hand in their essays to the teacher when they are finished so they can be marked."
},
          stem: "Read the ambiguous sentence and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the two possible meanings of the sentence.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Rewrite the sentence to remove the ambiguity.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two techniques you used to clarify it.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Describe how you would check a whole essay for ambiguity.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Ambiguity",
                              "statement": "Unclear pronoun reference creates multiple readings."
                    },
                    {
                              "kind": "skill",
                              "name": "Editing for clarity",
                              "statement": "Explicit subjects and careful pronouns prevent ambiguity."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Meaning 1: students hand in essays when the students have finished writing.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Meaning 2: students hand in essays when the essays are finished (already written).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The pronoun 'they' could refer to students or essays.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Rewrite: 'When students have finished writing their essays, they should hand them to the teacher so the teacher can mark them.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Explicit subject 'students' replaces ambiguous 'they'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "'the teacher can mark them' clarifies who marks.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Technique 1: replaced ambiguous pronouns with explicit subjects.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Technique 2: split the sentence to make the sequence of actions clear.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "Read each sentence asking 'who does what?'; check every pronoun's referent.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "d",
                              "reasoning": "If a sentence has two possible meanings, rewrite with explicit subjects.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "d",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) 'they' = students or essays. (b) 'When students have finished writing their essays, they should hand them to the teacher so the teacher can mark them.' (c) Explicit subjects and sentence splitting. (d) Check each pronoun's referent.",
          "commonErrors": [
                    "Identifying ambiguity without a clean rewrite.",
                    "Leaving pronouns that could still confuse."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u5-editing-notes",
      title: "Editing and improving writing — notes",
      summary: "Edit in passes (meaning, spelling, grammar, word choice, structure); improve clarity with concision, active voice, sentence variety and unambiguous pronouns.",
      sections: [
        { heading: "Key idea", body: "Systematic editing in passes catches more errors than one read-through." },
        { heading: "Error types", body: "Spelling, homophones, grammar, punctuation, word choice and structure each need separate attention." },
        { heading: "Improvement", body: "Concision, active voice, sentence variety and clear pronoun reference strengthen writing." },
      ],
    },
  ],
};
