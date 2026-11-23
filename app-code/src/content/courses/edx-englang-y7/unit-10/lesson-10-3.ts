import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "el7-u10-lesson-10-3",
  code: "10-3",
  title: "Language Change and Register",
  goal: "I CAN explain how language changes over time and adapt register to audience and purpose.",
  standards: ["Edexcel KS3 English Language — Language change", "Edexcel KS3 English Language — Audience and purpose"],
  
  vocabulary: [
    { term: "Language change", definition: "The gradual evolution of vocabulary, grammar and pronunciation over time." },
    { term: "Neologism", definition: "A newly coined word or phrase, e.g. 'selfie', 'ghosting'." },
    { term: "Register", definition: "Level of formality matched to audience and purpose." },
    { term: "Formal register", definition: "Full forms, precise vocabulary, complex sentences — essays, official letters." },
    { term: "Informal register", definition: "Contractions, slang, short sentences — texts, conversations." },
    { term: "Semantic shift", definition: "When a word's meaning changes over time, e.g. 'sick' meaning 'great'." },
  ],
  concepts: [
    {
      id: "el7-u10-change",
      title: "How Language Changes Over Time",
      skill: "Explain the causes and patterns of language change and analyse new words.",
      lesson: {
        sections: [
          {
            heading: "Why language changes",
            body: "Language changes constantly through **social contact**, **technology**, **globalisation** and **generational use**. New inventions create **neologisms** ('selfie', 'hashtag', 'vlog'); contact between languages borrows words; social media accelerates spread.\n\nMeanings shift too (**semantic shift**): 'sick' meant ill, now means excellent among young speakers; 'literally' is increasingly used for emphasis. Grammar changes as well — 'you' replaced 'thou', and 'they' is increasingly used as a singular pronoun.",
          },
          {
            heading: "Analysing language change",
            body: "Words move through stages: a neologism is coined, spreads through a community, and may enter mainstream dictionaries. Some changes are resisted by older speakers or formal institutions — dictionaries and exams often lag behind actual usage.\n\nChange isn't decay — it's how language stays useful. Analysing it means asking: Who uses this word? Why now? What need does it meet? This is how linguists track English evolving.",
          },
        ],
        keyFormulas: [
          { name: "Neologism", statement: "A newly coined word or phrase." },
          { name: "Semantic shift", statement: "A word's meaning changes over time." },
          { name: "Drivers of change", statement: "Technology, social contact, globalisation, generations." },
        ],
        workedExample: {
          problem: "Explain why 'selfie' entered the dictionary.",
          solution: "Smartphone cameras made self-portraits common; the word spread rapidly through social media until it became mainstream vocabulary.",
        },
      },
      questions: [
        {
          id: "el7-u10-change-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is language change?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The gradual evolution of vocabulary, grammar and pronunciation over time"
                    },
                    {
                              "id": "b",
                              "text": "Learning a foreign language"
                    },
                    {
                              "id": "c",
                              "text": "Correcting spelling mistakes"
                    },
                    {
                              "id": "d",
                              "text": "Speaking more loudly"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Language change",
                              "statement": "Gradual evolution of language over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Change = evolution of vocabulary/grammar/pronunciation.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Gradual evolution of language over time",
          "commonErrors": [
                    "Confusing with language learning."
          ]
},
        },
        {
          id: "el7-u10-change-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two examples of words whose meanings have changed over time.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Semantic shift",
                              "statement": "Meanings evolve — e.g. 'sick' = ill → excellent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two valid examples given with both meanings.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Examples show genuine meaning change.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "e.g. 'sick' (ill → excellent), 'literally' (exactly → used for emphasis), 'cool' (temperature → fashionable).",
          "commonErrors": [
                    "Examples without both meanings."
          ]
},
        },
        {
          id: "el7-u10-change-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how technology drives language change, giving one example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Technology and language",
                              "statement": "New tech creates new words and spreads them fast."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "New inventions create neologisms.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Digital platforms spread words rapidly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A valid example given (e.g. 'selfie', 'hashtag', 'vlog').",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Technology creates neologisms ('selfie', 'hashtag') and social media spreads them globally and fast.",
          "commonErrors": [
                    "No example given."
          ]
},
        },
        {
          id: "el7-u10-change-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why the word 'selfie' was added to dictionaries, using what you know about how language changes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Neologism analysis",
                              "statement": "A word enters dictionaries when it becomes widespread and stable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Selfie' coined to describe a new common practice.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Smartphone culture made the concept ubiquitous.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Social media accelerated its spread.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Widespread stable usage justified dictionary inclusion.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Links to broader pattern of technology-driven change.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "'Selfie' named a new common practice; smartphones and social media spread it until it became mainstream vocabulary.",
          "commonErrors": [
                    "Claiming dictionaries cause language change."
          ]
},
        },
        {
          id: "el7-u10-change-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A classmate says: 'Language change is just young people ruining English.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify one flaw in this view.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two legitimate reasons language changes.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Language change attitudes",
                              "statement": "Change is natural and driven by many factors, not just youth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Flaw identified: change isn't only young people's fault/doing.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "Reason 1 explained (e.g. technology, social contact).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Reason 2 explained (e.g. need for new words, efficiency).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Valid flaw identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No valid flaw.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Two reasons explained with examples.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Two reasons explained briefly.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One reason explained.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable reasons.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. 'Language change is natural — driven by technology, contact and need, not just young people.'",
          "commonErrors": [
                    "Agreeing that change is 'ruining' English."
          ]
},
        },
        {
          id: "el7-u10-change-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Grandparent's letter",
          "author": "Written for Akademik Space",
          "text": "Your generation seems to have invented 'selfie', 'vlog' and 'ghosting'. When I was young we had no need for such words. Language seems to change faster now than ever."
},
          stem: "Using the letter above, complete each task.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three neologisms mentioned and define each.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the grandparent believes language changes faster now.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether faster change is a problem, giving a balanced view.",
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
                              "name": "Language change analysis",
                              "statement": "Identify neologisms, explain acceleration, evaluate impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three neologisms identified with accurate definitions.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "All three correctly defined.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Technology and social media cited as acceleration drivers.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Global spread of words explained.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Generational difference acknowledged.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Balanced evaluation: change is natural but raises questions about standards.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c"
                    },
                    {
                              "reasoning": "Conclusion is reasoned, not one-sided.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Three neologisms correctly defined.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial definitions.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable definitions.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Clear, evidenced explanation of acceleration.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Good explanation.",
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
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Balanced, reasoned evaluation.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One-sided or thin evaluation.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable evaluation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. 'selfie' = self-portrait photo, 'vlog' = video blog, 'ghosting' = cutting off contact suddenly.",
          "commonErrors": [
                    "Defining words incorrectly."
          ]
},
        },
      ],
    },
    {
      id: "el7-u10-register",
      title: "Register and Adapting Language to Audience",
      skill: "Adapt vocabulary, tone and sentence structure to suit audience and purpose.",
      lesson: {
        sections: [
          {
            heading: "What is register?",
            body: "**Register** is the level of formality in language, matched to audience and purpose. **Formal register** uses full forms ('do not' not 'don't'), precise vocabulary, complex sentences — essays, official letters, interviews. **Informal register** uses contractions, slang, short sentences — texts, conversations, social media.\n\nBetween them sits **neutral register** for everyday writing where clarity matters more than ceremony.",
          },
          {
            heading: "Adapting register deliberately",
            body: "Adapting register means changing multiple features at once: vocabulary ('kids' → 'children'), contractions ('can't' → 'cannot'), sentence length (short choppy → varied), and tone (casual → respectful).\n\nThe test: would this sound right to the intended reader? A text to a friend ('u up for the match?') would fail in a letter to the headteacher ('I am writing to enquire about the fixture'). Mismatched register undermines credibility.",
          },
        ],
        keyFormulas: [
          { name: "Formal register", statement: "Full forms, precise vocabulary, complex sentences." },
          { name: "Informal register", statement: "Contractions, slang, short sentences." },
          { name: "Register test", statement: "Would this sound right to the intended reader?" },
        ],
        workedExample: {
          problem: "Rewrite informally for a friend: 'I am writing to inform you that I will be unable to attend.'",
          solution: "'Sorry, can't make it — something's come up. Catch you next time!'",
        },
      },
      questions: [
        {
          id: "el7-u10-register-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which context requires formal register?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A text message to a friend"
                    },
                    {
                              "id": "b",
                              "text": "An essay for school"
                    },
                    {
                              "id": "c",
                              "text": "A social media comment"
                    },
                    {
                              "id": "d",
                              "text": "A note to a sibling"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Formal register contexts",
                              "statement": "Essays, official letters, formal presentations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Essays require formal register.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** An essay for school",
          "commonErrors": [
                    "Choosing any informal context."
          ]
},
        },
        {
          id: "el7-u10-register-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define register and name three levels of formality.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Register",
                              "statement": "Level of formality matched to context."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Register defined as formality level.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Three levels named (formal, neutral, informal).",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Register = level of formality; levels: formal, neutral, informal.",
          "commonErrors": [
                    "Only naming two levels."
          ]
},
        },
        {
          id: "el7-u10-register-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this informal sentence formally: 'Hey, I'm gonna be late for class, so don't wait up.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Register shift",
                              "statement": "Replace informal features with formal equivalents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Greeting removed or formalised.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Gonna' replaced with 'am going to' or 'will'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sentence grammatical and appropriately formal.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. 'I am afraid I will be late for class, so please do not wait for me.'",
          "commonErrors": [
                    "Keeping contractions or slang."
          ]
},
        },
        {
          id: "el7-u10-register-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Adapt this text message into the opening of a formal letter to the headteacher: 'Hi, just writing to ask if we can have an extra art lesson next week. My class really needs it. Cheers!'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Audience adaptation",
                              "statement": "Formal letter needs polite structure, full forms, respectful tone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Salutation formalised ('Dear Headteacher' or 'Dear Mrs/Mr...').",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Casual phrases replaced with polite formal language.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Full forms used (no contractions or slang).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Request phrased respectfully with clear purpose.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "e.g. 'Dear Headteacher, I am writing to request an additional art lesson next week. My class would benefit greatly from the extra time. Yours sincerely, ...'",
          "commonErrors": [
                    "Keeping 'Hi' or 'Cheers'."
          ]
},
        },
        {
          id: "el7-u10-register-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rewrite this formal sentence informally for a text to a friend: 'I regret to inform you that I will be unable to attend the gathering.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Rewrite in casual, friendly language.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Identify three formal features you changed and why.",
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
                              "name": "Informal adaptation",
                              "statement": "Casual register uses contractions, direct phrasing, friendly tone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sentence rewritten casually and grammatically.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Formal vocabulary identified and replaced (e.g. 'regret to inform').",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Formal structure/contractions addressed.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Reasons for changes clearly explained.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Casual rewrite appropriate for friend.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Still formal or inappropriate.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Three formal features identified with reasons.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Two features identified.",
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
                    }
          ],
          "finalAnswer": "e.g. 'Sorry, can't make it to the gathering — something's come up.'",
          "commonErrors": [
                    "Too casual — slang inappropriate even for friends."
          ]
},
        },
        {
          id: "el7-u10-register-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Social media post",
          "author": "Written for Akademik Space",
          "text": "yo fam, we totally smashed the quiz today!! our team was on fire, no cap. anyway hmu if you wanna celebrate tonight"
},
          stem: "Using the post above, complete each task.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three informal features in the post.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Rewrite the post in formal register for a school newsletter.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why register must match audience and purpose.",
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
                              "name": "Register transformation",
                              "statement": "Decode informal features, then re-encode formally."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three informal features identified (slang, abbreviations, tone).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "All three accurately identified.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Formal rewrite is grammatical and appropriately toned.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "All slang/abbreviations removed or formalised.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Newsletter-appropriate vocabulary used.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Why register matters explained with audience/purpose link.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Clear conclusion about credibility or clarity.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Three informal features identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One or two identified.",
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
                              "descriptor": "Fully formal, appropriate newsletter version.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Mostly formal.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partially formal.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Still informal.",
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
          "finalAnswer": "e.g. 'Our team performed exceptionally well in today's quiz. We would like to invite everyone to a celebration this evening.'",
          "commonErrors": [
                    "Keeping slang in the formal rewrite."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u10-languagechange-notes",
      title: "Language change and register — notes",
      summary: "Language evolves through technology, contact and need. Register = formality level matched to audience — formal for essays, informal for texts.",
      sections: [
        { heading: "Key idea", body: "Language change is natural and constant; neologisms like 'selfie' show how fast new words spread." },
        { heading: "Register", body: "Match vocabulary, contractions and tone to the reader — mismatched register undermines credibility." },
      ],
    },
  ],
};
