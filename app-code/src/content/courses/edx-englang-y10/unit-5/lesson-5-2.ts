import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "el10-u5-lesson-5-2",
  code: "5-2",
  title: "Vocabulary, Spelling and Language Change",
  goal: "I CAN choose precise vocabulary, spell accurately and explain how English changes over time.",
  standards: ["4EA1 Paper 1", "4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO4"],
  
  vocabulary: [
    { term: "Precise vocabulary", definition: "Specific, exact word choice that conveys meaning clearly." },
    { term: "Weak vocabulary", definition: "Vague or overused words such as 'good', 'nice' or 'very' that dull writing." },
    { term: "Homophone", definition: "Words that sound alike but differ in meaning and spelling, such as 'their' and 'there'." },
    { term: "Neologism", definition: "A newly coined word, often from technology, such as 'selfie' or 'hashtag'." },
    { term: "Semantic shift", definition: "A change in a word's meaning over time, such as 'sick' meaning 'excellent'." },
    { term: "Borrowing", definition: "Taking words from another language, such as 'rendezvous' from French." },
  ],
  concepts: [
    {
      id: "el10-u5-vocabulary-spelling",
      title: "Vocabulary choice and spelling",
      skill: "Select precise vocabulary and spell accurately in formal writing.",
      lesson: {
        sections: [
          {
            heading: "Why vocabulary matters",
            body: "Precise words convey meaning efficiently. 'The old building was very big and scary' is weaker than 'The dilapidated mansion loomed menacingly'. Vague words ('very', 'nice', 'good', 'a lot of') pad sentences without adding meaning. Strong writing replaces them with specific adjectives, powerful verbs and varied nouns.",
          },
          {
            heading: "Spelling strategies",
            body: "Common pitfalls include **homophones** ('their/there/they're', 'your/you're', 'its/it's'), **-ible/-able** endings and doubled letters. Strategies: learn the most common confusions, use mnemonics ('because = Big Elephants Can Always Understand Small Elephants'), break words into syllables, and always proofread spelling separately.",
          },
          {
            heading: "Improving word choice",
            body: "Replace weak phrases: 'very big' → 'enormous' or 'colossal'; 'nice' → 'delightful', 'charming', 'pleasant'; 'a lot of' → 'numerous', 'countless', 'a swarm of'. Strong verbs beat adverbs: 'ran quickly' → 'sprinted', 'dashed'. Choose words that fit the register — formal writing needs formal vocabulary.",
          },
        ],
        keyFormulas: [
          { name: "Precise vocabulary", statement: "Specific word choice that conveys exact meaning." },
          { name: "Homophone", statement: "Sound-alike words with different spellings: their/there/they're." },
          { name: "Weak to strong", statement: "'very big' → 'enormous'; 'nice' → 'delightful'." },
        ],
        workedExample: {
          problem: "Improve this sentence: 'The old building was very big and it looked very old and scary.'",
          solution: "Replace weak vocabulary with precise words: 'The dilapidated mansion loomed menacingly over the street.' This removes 'very' twice, upgrades 'big' to 'mansion'/'loomed', and makes 'scary' more specific as 'menacingly'. The sentence is shorter, clearer and more vivid.",
        },
      },
      questions: [
        {
          id: "el10-u5-vocabulary-spelling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses the correct homophone?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Their going to the park over their."
                    },
                    {
                              "id": "b",
                              "text": "They're going to the park over there."
                    },
                    {
                              "id": "c",
                              "text": "There going to the park over their."
                    },
                    {
                              "id": "d",
                              "text": "They're going to the park over their."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Homophone",
                              "statement": "Sound-alike words with different meanings: they're = they are, there = place, their = belonging."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'They're' = they are; 'there' = place. The sentence needs both.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "**(b)** They're going to the park over there.",
          "commonErrors": [
                    "Confusing 'their' (possession), 'there' (place) and 'they're' (they are)."
          ]
},
        },
        {
          id: "el10-u5-vocabulary-spelling-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two strategies for improving spelling accuracy in formal writing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Spelling strategies",
                              "statement": "Systematic approaches reduce errors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Learn the most common homophone confusions (their/there/they're) and check them deliberately.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Proofread spelling in a separate pass, reading slowly or aloud, rather than relying on the first draft.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Learn common confusions and proofread spelling separately.",
          "commonErrors": [
                    "Relying on spellcheck alone, which misses homophones."
          ]
},
        },
        {
          id: "el10-u5-vocabulary-spelling-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "A student's descriptive paragraph",
          "author": "Year 10 student",
          "source": "Vocabulary exercise",
          "text": "The old building was very big and it looked very old and scary. There were a lot of dark corridors and the rooms were very big and empty. It made me feel very scared and I wanted to get out very quickly."
},
          stem: "Identify three weak vocabulary choices in the extract and suggest stronger alternatives.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Weak vocabulary",
                              "statement": "Vague words like 'very', 'nice', 'big' dull writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'very big' → 'enormous' or 'colossal'; the intensifier 'very' is weak padding.",
                              "evidence": "it was very big",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'very old and scary' → 'dilapidated' and 'menacing' or 'foreboding'.",
                              "evidence": "it looked very old and scary",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'very scared' and 'very quickly' → 'terrified' and 'fled' — strong verbs beat adverbs.",
                              "evidence": "I wanted to get out very quickly",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Replace 'very big/old/scared/quickly' with 'enormous', 'dilapidated', 'terrified' and 'fled'.",
          "commonErrors": [
                    "Adding more 'very' phrases instead of replacing weak words."
          ]
},
        },
        {
          id: "el10-u5-vocabulary-spelling-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "A student's descriptive paragraph",
          "author": "Year 10 student",
          "source": "Vocabulary exercise",
          "text": "The old building was very big and it looked very old and scary. There were a lot of dark corridors and the rooms were very big and empty. It made me feel very scared and I wanted to get out very quickly."
},
          stem: "Rewrite the extract using precise vocabulary and explain how the improved version creates a stronger effect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Precise vocabulary",
                              "statement": "Specific words create vivid, efficient writing."
                    },
                    {
                              "kind": "skill",
                              "name": "Style",
                              "statement": "Word choice shapes tone and atmosphere."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'old building' → 'dilapidated mansion' adds decay and scale.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'very big and scary' → 'loomed menacingly' uses a powerful verb and precise adverb.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'dark corridors' and 'empty rooms' → 'shadowed corridors' and 'deserted chambers' for atmosphere.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'very scared... get out quickly' → 'terrified... fled' uses strong verbs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The rewrite is shorter yet more vivid, creating a clearer sense of fear.",
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
          "finalAnswer": "Replacing weak words with precise vocabulary ('dilapidated mansion', 'loomed menacingly', 'fled') makes the writing shorter, clearer and more atmospheric.",
          "commonErrors": [
                    "Keeping 'very' phrases while adding synonyms elsewhere."
          ]
},
        },
        {
          id: "el10-u5-vocabulary-spelling-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain why spelling errors in words like 'their/there/they're' are particularly damaging in formal writing, and describe how to avoid them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Homophone errors",
                              "statement": "Sound-alike errors are common and noticeable."
                    },
                    {
                              "kind": "skill",
                              "name": "Accuracy",
                              "statement": "Formal writing requires careful word-level accuracy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Homophones sound correct when read aloud, so they slip past ear-based proofreading.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "They are highly noticeable to readers and signal carelessness.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "They change meaning: 'their going' vs 'they're going' alters the sentence entirely.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Avoid by learning the small set of common confusions and checking each deliberately.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Use a checklist (their = possession, there = place, they're = they are) during proofreading.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "In exams, such errors lower the accuracy mark even when ideas are strong.",
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
          "finalAnswer": "Homophone errors are subtle, change meaning and damage credibility; learn the confusions and check them deliberately.",
          "commonErrors": [
                    "Relying on spellcheck, which cannot detect homophones."
          ]
},
        },
        {
          id: "el10-u5-vocabulary-spelling-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "A student's descriptive paragraph",
          "author": "Year 10 student",
          "source": "Vocabulary exercise",
          "text": "The old building was very big and it looked very old and scary. There were a lot of dark corridors and the rooms were very big and empty. It made me feel very scared and I wanted to get out very quickly."
},
          stem: "Read the student's paragraph and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three weak vocabulary choices.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Rewrite two sentences using precise vocabulary.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain how the rewrite improves the writing.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Describe a proofreading habit that would catch spelling errors like 'seperate'.",
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
                              "name": "Precise vocabulary",
                              "statement": "Specific words create vivid, efficient writing."
                    },
                    {
                              "kind": "skill",
                              "name": "Proofreading",
                              "statement": "Systematic checking catches word-level errors."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "'very big' is weak padding.",
                              "evidence": "it was very big",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'very old and scary' is vague.",
                              "evidence": "it looked very old and scary",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'very scared' and 'very quickly' are weak intensifiers.",
                              "evidence": "I was very scared",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'The dilapidated mansion loomed menacingly over the street.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "'The deserted corridors and empty chambers filled me with terror, and I fled.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Precise words replace every 'very' phrase.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "The rewrite is shorter yet more vivid, creating clearer atmosphere.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Strong verbs ('loomed', 'fled') replace weak adverb phrases.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "Learn common misspellings and check them in a separate spelling pass.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "d",
                              "reasoning": "Reading aloud catches errors spellcheck misses; keep a personal error list.",
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
          "finalAnswer": "(a) 'very big', 'very old and scary', 'very scared/quickly'. (b) Rewritten with 'dilapidated mansion', 'loomed menacingly', 'fled'. (c) Shorter, more vivid, clearer atmosphere. (d) Learn common errors, proofread separately, read aloud.",
          "commonErrors": [
                    "Keeping 'very' phrases while adding synonyms.",
                    "Ignoring spelling in the editing task."
          ]
},
        },
      ],
    },
    {
      id: "el10-u5-language-change",
      title: "Language change and new words",
      skill: "Explain how English changes through neologisms, semantic shift and borrowing.",
      lesson: {
        sections: [
          {
            heading: "How English changes",
            body: "English is constantly changing. New words (**neologisms**) enter through technology ('selfie', 'hashtag', 'influencer'), social change and contact with other languages (**borrowing**, e.g. 'rendezvous' from French, 'bungalow' from Hindi). Words also change meaning (**semantic shift**): 'sick' once meant ill, now can mean excellent; 'gay' shifted from 'happy' to its current meaning.",
          },
          {
            heading: "Slang and informal varieties",
            body: "**Slang** is informal, often temporary vocabulary shared by a group ('fire', 'mid', 'no cap'). It spreads fast through media and music but is usually inappropriate in formal writing. Some slang eventually enters mainstream usage; most fades. 'Lowkey' and 'no cap' in the podcast comments are current slang.",
          },
          {
            heading: "Standard English and change",
            body: "Change is natural and inevitable; 'Standard English' itself was once a dialect. The question is not whether language changes but whether a particular form suits a particular context. Formal writing still expects established Standard English; informal contexts welcome innovation.",
          },
        ],
        keyFormulas: [
          { name: "Neologism", statement: "A newly coined word, often from technology or social change." },
          { name: "Semantic shift", statement: "A word's meaning changes over time ('sick' = excellent)." },
          { name: "Borrowing", statement: "Taking words from other languages ('rendezvous', 'bungalow')." },
          { name: "Slang", statement: "Informal group vocabulary; often temporary and context-bound." },
        ],
        workedExample: {
          problem: "Explain how 'selfie' and 'sick' illustrate different types of language change.",
          solution: "'Selfie' is a neologism — a newly coined word created for the digital camera era. 'Sick' illustrates semantic shift — its meaning changed from 'ill' to 'excellent' through informal usage. Both show English adapting to new technologies and social attitudes, though 'sick' changed meaning while 'selfie' added a new word.",
        },
      },
      questions: [
        {
          id: "el10-u5-language-change-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a neologism?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A word borrowed from another language"
                    },
                    {
                              "id": "b",
                              "text": "A newly coined word"
                    },
                    {
                              "id": "c",
                              "text": "A word whose meaning has changed"
                    },
                    {
                              "id": "d",
                              "text": "An old-fashioned word"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Neologism",
                              "statement": "A newly coined word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Selfie' and 'hashtag' are examples of newly created words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A newly coined word.",
          "commonErrors": [
                    "Confusing neologism with borrowing or semantic shift."
          ]
},
        },
        {
          id: "el10-u5-language-change-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one example of semantic shift and explain what changed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Semantic shift",
                              "statement": "A word's meaning changes over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Example: 'sick' meant 'ill' but now can mean 'excellent' in informal English.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The meaning shifted through social usage, especially among younger speakers.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "'Sick' shifted from 'ill' to 'excellent' through informal usage.",
          "commonErrors": [
                    "Giving a neologism example instead of a meaning change."
          ]
},
        },
        {
          id: "el10-u5-language-change-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two reasons why new words enter the English language.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Language change",
                              "statement": "New words arise from technology, social change and contact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Technology creates new concepts needing names: 'selfie', 'hashtag', 'influencer'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Contact with other languages borrows words: 'rendezvous' (French), 'bungalow' (Hindi).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Social groups invent slang that may spread: 'no cap', 'lowkey'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Technology, borrowing from other languages, and social slang drive new words.",
          "commonErrors": [
                    "Listing reasons without examples."
          ]
},
        },
        {
          id: "el10-u5-language-change-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Comments on a school podcast",
          "author": "Student listeners",
          "source": "Digital communication extract",
          "text": "That episode was lowkey fire, the guest was so real. No cap, the ending gave me chills. We stan the new series, it is mid at worst."
},
          stem: "Analyse the slang in the podcast comments and explain its effect on tone and audience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Slang",
                              "statement": "Informal group vocabulary creates in-group identity."
                    },
                    {
                              "kind": "context",
                              "name": "Audience",
                              "statement": "Slang suits peers but not formal contexts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'lowkey fire', 'no cap', 'gave me chills' are current slang expressing enthusiasm informally.",
                              "evidence": "That episode was lowkey fire",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'We stan' and 'it is mid' show in-group vocabulary that signals shared youth culture.",
                              "evidence": "We stan the new series",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The slang creates a casual, peer-to-peer tone, as if listeners are chatting with friends.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It also dates the comments — these words may fade as slang changes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The effect is friendly and contemporary, but inappropriate for formal review or exam writing.",
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
          "finalAnswer": "The slang creates a casual, in-group tone suited to peers but inappropriate for formal contexts; it also dates the comments.",
          "commonErrors": [
                    "Treating slang as simply wrong rather than context-bound."
          ]
},
        },
        {
          id: "el10-u5-language-change-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Discuss whether slang and neologisms belong in formal transactional writing (e.g., a letter of complaint or job application).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Register and change",
                              "statement": "New words may enter formal English over time, but not instantly."
                    },
                    {
                              "kind": "skill",
                              "name": "Judgement",
                              "statement": "Formal writing requires established Standard English."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Most slang is too informal and temporary for formal writing; it undermines credibility.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Neologisms like 'selfie' may eventually enter dictionaries, but many remain too new or niche.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Formal contexts expect established vocabulary that all readers understand.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "However, some once-informal words have become standard ('cool', 'OK'), showing change is gradual.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The safe approach: use established Standard English in formal writing, reserve slang for informal contexts.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Judgement depends on audience: younger audiences may accept some informal words that older formal readers would not.",
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
          "finalAnswer": "Slang and most neologisms are inappropriate in formal writing; only established words belong, though language change gradually admits new terms.",
          "commonErrors": [
                    "Arguing all new words are always wrong, ignoring gradual standardisation."
          ]
},
        },
        {
          id: "el10-u5-language-change-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Comments on a school podcast",
          "author": "Student listeners",
          "source": "Digital communication extract",
          "text": "That episode was lowkey fire, the guest was so real. No cap, the ending gave me chills. We stan the new series, it is mid at worst."
},
          stem: "Read the podcast comments and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three slang or informal expressions in the comments.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what 'semantic shift' is and give an example.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Analyse how the slang creates a particular tone for the audience.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether the comments would be suitable for a formal review of the podcast.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Slang and semantic shift",
                              "statement": "Informal group words and words whose meanings change."
                    },
                    {
                              "kind": "context",
                              "name": "Register",
                              "statement": "Slang suits informal audiences, not formal contexts."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "'lowkey fire', 'no cap', 'gave me chills' are slang.",
                              "evidence": "That episode was lowkey fire",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'We stan' and 'it is mid' are in-group informal expressions.",
                              "evidence": "We stan the new series",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'so real' is informal intensification.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Semantic shift = a word's meaning changes over time.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Example: 'sick' changed from 'ill' to 'excellent'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "The slang creates a casual, excited, peer-to-peer tone.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "In-group vocabulary signals shared youth culture and belonging.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "It makes the comments feel spontaneous and enthusiastic rather than measured.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "The comments are unsuitable for a formal review: slang undermines objectivity and credibility.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "A formal review requires precise, established vocabulary; the slang would seem unprofessional.",
                              "marks": 1,
                              "markCode": "AO4"
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
                              "marks": "1-2",
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
                              "marks": "1-3",
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
          "finalAnswer": "(a) 'lowkey fire', 'no cap', 'gave me chills', 'stan', 'mid', 'so real'. (b) Meaning changes over time; 'sick' = excellent. (c) Casual, in-group, enthusiastic tone. (d) Unsuitable for formal review.",
          "commonErrors": [
                    "Listing slang without analysing tone.",
                    "Ignoring why slang fails in formal contexts."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u5-vocab-change-notes",
      title: "Vocabulary, spelling and language change — notes",
      summary: "Precise vocabulary strengthens writing; homophones need careful checking. English changes via neologisms, semantic shift and borrowing.",
      sections: [
        { heading: "Key idea", body: "Replace weak words ('very', 'nice') with precise vocabulary; check homophones deliberately." },
        { heading: "Spelling", body: "Learn common confusions (their/there/they're) and proofread spelling separately." },
        { heading: "Language change", body: "Neologisms, semantic shift and borrowing constantly update English; slang suits informal contexts only." },
      ],
    },
  ],
};
