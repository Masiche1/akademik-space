import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "el7-u10-lesson-10-2",
  code: "10-2",
  title: "Spelling and Word Study",
  goal: "I CAN apply spelling rules and strategies to spell accurately.",
  standards: ["Edexcel KS3 English Language — Spelling"],
  
  vocabulary: [
    { term: "Homophone", definition: "Words that sound the same but have different spellings and meanings." },
    { term: "Silent-e rule", definition: "Drop 'e' before a vowel suffix; keep it before a consonant suffix." },
    { term: "Doubling rule", definition: "Double the final consonant before a vowel suffix in short stressed syllables." },
    { term: "Mnemonic", definition: "A memory aid for spelling tricky words." },
    { term: "Look-cover-write-check", definition: "A spelling practice method: look, cover, write, check." },
  ],
  concepts: [
    {
      id: "el7-u10-spell",
      title: "Spelling Patterns and Rules",
      skill: "Apply spelling rules and patterns to spell accurately.",
      lesson: {
        sections: [
          {
            heading: "Core spelling rules",
            body: "**i before e except after c**: 'believe', 'receive' — but exceptions exist ('weird', 'seize', 'protein'). **Silent-e rule**: drop 'e' before a vowel suffix ('hope' → 'hoping') but keep before a consonant suffix ('hope' → 'hopeful'). **Doubling rule**: double the final consonant in short stressed syllables before a vowel suffix ('run' → 'running', 'stop' → 'stopped'; but 'open' → 'opening' because the stress isn't final).",
          },
          {
            heading: "Patterns and mnemonics",
            body: "Many spellings follow patterns: '-tion', '-sion', '-cious', '-tious'. Words ending in '-ible' versus '-able' often depend on word origin.\n\nFor irregular words, use **mnemonics** ('because' = 'Big Elephants Can Always Understand Small Elephants') and the **look-cover-write-check** method. Reading widely exposes you to correct spellings in context, which builds visual memory.",
          },
        ],
        keyFormulas: [
          { name: "i before e", statement: "I before E except after C (with exceptions)." },
          { name: "Silent-e rule", statement: "Drop e before vowel suffix; keep before consonant." },
          { name: "Doubling rule", statement: "Double final consonant in short stressed syllable + vowel suffix." },
        ],
        workedExample: {
          problem: "Spell the -ing form of 'hope', 'write' and 'run'.",
          solution: "hoping (drop e), writing (drop e), running (double n — short stressed syllable).",
        },
      },
      questions: [
        {
          id: "el7-u10-spell-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct spelling?",
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
                              "text": "receeve"
                    },
                    {
                              "id": "d",
                              "text": "riceive"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "i before e",
                              "statement": "After 'c', use 'ei' — 'receive'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Receive' follows the after-c exception.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** receive",
          "commonErrors": [
                    "Applying 'ie' after 'c'."
          ]
},
        },
        {
          id: "el7-u10-spell-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain the 'i before e except after c' rule and name one common exception.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "i before e rule",
                              "statement": "ie normally; ei after c — exceptions exist."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rule stated accurately.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A valid exception named (e.g. 'weird', 'seize').",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Use 'ie' normally, 'ei' after 'c' — exceptions: 'weird', 'seize', 'protein'.",
          "commonErrors": [
                    "No exception given."
          ]
},
        },
        {
          id: "el7-u10-spell-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the silent-e rule with two examples showing when the 'e' is dropped and when it is kept.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Silent-e rule",
                              "statement": "Drop before vowel suffix, keep before consonant suffix."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rule explained: e dropped before vowel suffixes.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example of dropping: 'hope' → 'hoping'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example of keeping: 'hope' → 'hopeful' or 'safe' → 'safely'.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Drop 'e' before vowel suffix (hoping), keep before consonant (hopeful).",
          "commonErrors": [
                    "Applying the rule without examples."
          ]
},
        },
        {
          id: "el7-u10-spell-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why 'running' has two n's but 'opening' has only one, using the doubling rule.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Doubling rule",
                              "statement": "Double final consonant after short stressed syllable before vowel suffix."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Doubling rule stated accurately.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Run' is a short stressed syllable → double n.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Open' has stress on first syllable → no doubling.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Clear contrast between the two cases explained.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "'Run' ends in a short stressed syllable so doubles; 'open' is stressed on the first syllable so doesn't.",
          "commonErrors": [
                    "Doubling in 'openning'."
          ]
},
        },
        {
          id: "el7-u10-spell-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Correct the spelling errors in this sentence: 'I definately beleive we should of gone too the seperate class.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the sentence with all spellings corrected.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain which rule or pattern helped you correct two of the words.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Spelling correction",
                              "statement": "definitely, believe, should have, to, separate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Definitely' and 'believe' corrected.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "'Should of' corrected to 'should have'; 'too' to 'to'; 'seperate' to 'separate'.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Two corrections explained using rules or patterns.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Explanations reference the relevant spelling pattern.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All spellings corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Some corrected.",
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
                              "descriptor": "Two corrections explained with patterns.",
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
          "finalAnswer": "I definitely believe we should have gone to the separate class.",
          "commonErrors": [
                    "'Should of' left unchanged."
          ]
},
        },
        {
          id: "el7-u10-spell-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Letter to a friend",
          "author": "Written for Akademik Space",
          "text": "Hi Sam, thankyou for youre invite to the party. I will definately come. Do you want me to oferr to bring anything? See you saturday!"
},
          stem: "Using the letter above, complete each task.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify four spelling or word errors.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Rewrite the letter correcting all errors.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Describe one strategy you would use to remember the trickiest word you corrected.",
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
                              "name": "Spelling proofreading",
                              "statement": "Identify, correct, then plan retention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Four errors identified (thankyou, youre, definately, oferr/saturday).",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "A fifth error identified or all located accurately.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Corrected letter is fully accurate.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "No new errors introduced.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "A valid strategy described (mnemonic, look-cover-write-check, root knowledge).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Strategy is specific to a corrected word.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Four or more errors identified.",
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
                              "descriptor": "Fully corrected letter.",
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
                              "descriptor": "Some corrections.",
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
                              "descriptor": "Valid, specific strategy described.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable strategy.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. 'Hi Sam, thank you for your invite to the party. I will definitely come. Do you want me to offer to bring anything? See you on Saturday!'",
          "commonErrors": [
                    "Missing 'on' before 'Saturday'."
          ]
},
        },
      ],
    },
    {
      id: "el7-u10-homo",
      title: "Homophones and Tricky Words",
      skill: "Distinguish and correctly use homophones and commonly confused words.",
      lesson: {
        sections: [
          {
            heading: "What are homophones?",
            body: "**Homophones** sound the same but have different spellings and meanings: 'there/their/they're', 'to/too/two', 'your/you're', 'its/it's', 'where/wear', 'whole/hole', 'plain/plane', 'their/there'.\n\nThey cause errors because spellcheck can't catch them — both spellings are real words. The fix is knowing each word's meaning: 'their' shows possession, 'there' shows place, 'they're' = they are.",
          },
          {
            heading: "Strategies for tricky words",
            body: "Test each homophone by substituting its meaning: if 'they are' fits, use 'they're'; if possession fits, use 'their'; if place fits, use 'there'.\n\nFor commonly confused words ('affect/effect', 'accept/except', 'principal/principle'), learn them as pairs with a memory hook. Reading widely and proofreading aloud build the habit of catching these errors.",
          },
        ],
        keyFormulas: [
          { name: "Homophone", statement: "Same sound, different spelling and meaning." },
          { name: "their/there/they're", statement: "Possession / place / they are." },
          { name: "to/too/two", statement: "Direction / also / number." },
          { name: "its/it's", statement: "Possessive / it is." },
        ],
        workedExample: {
          problem: "Choose the correct word: '___ going to love ___ new house.'",
          solution: "They're going to love their new house. ('They are' = they're; possession = their.)",
        },
      },
      questions: [
        {
          id: "el7-u10-homo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct word: '___ going to win the match.'",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Their"
                    },
                    {
                              "id": "b",
                              "text": "There"
                    },
                    {
                              "id": "c",
                              "text": "They're"
                    },
                    {
                              "id": "d",
                              "text": "Theirs"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Homophone choice",
                              "statement": "'They're' = they are."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'They are going' fits — they're.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** They're",
          "commonErrors": [
                    "Choosing 'their' or 'there'."
          ]
},
        },
        {
          id: "el7-u10-homo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain why homophones cause spelling errors and how to check which one is correct.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Homophone errors",
                              "statement": "Same sound → spellcheck fails; meaning test needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Homophones sound identical so sound-based spelling fails.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Substitute the meaning of each option to check.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Homophones sound the same so spellcheck can't help; substitute each meaning to test.",
          "commonErrors": [
                    "Relying on spellcheck for homophones."
          ]
},
        },
        {
          id: "el7-u10-homo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Choose the correct homophone and explain your choice: 'The knight rode through the dark ___.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "knight/night",
                              "statement": "Knight = warrior; night = dark time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct choice: 'night' (dark time).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explanation: context is darkness/time, not a person.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sentence remains grammatical and sensible.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "'night' — the context is darkness, not a medieval warrior.",
          "commonErrors": [
                    "Choosing 'knight' despite the context."
          ]
},
        },
        {
          id: "el7-u10-homo-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Correct the homophone errors in these sentences: 'Their going to the park later. Your welcome to come two.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Homophone correction",
                              "statement": "They're/your/too."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Their' corrected to 'They're' (they are).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Your' corrected to 'You're' (you are).",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Two' corrected to 'too' (also).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both sentences fully corrected and grammatical.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "They're going to the park later. You're welcome to come too.",
          "commonErrors": [
                    "'Your welcome' left unchanged."
          ]
},
        },
        {
          id: "el7-u10-homo-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Complete this passage with the correct homophones: '___ going to love ___ new house. Its got a big garden, and were going to plant ___ own vegetables.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Fill in all four gaps correctly.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the meaning test you used for each choice.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Homophone set",
                              "statement": "They're/its/we're/our or their."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All four gaps filled correctly.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Meaning test explained for at least two gaps.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "All four meaning tests explained.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All four gaps correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two or three correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than two correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Meaning tests explained for all gaps.",
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
          "finalAnswer": "They're going to love their new house. It's got a big garden, and we're going to plant our own vegetables.",
          "commonErrors": [
                    "'Its' used where 'it's' is needed."
          ]
},
        },
        {
          id: "el7-u10-homo-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Text message",
          "author": "Written for Akademik Space",
          "text": "Their going to the concert tomorrow. Your going to love it — the band is they're best. Were meeting at 7, so be on time!"
},
          stem: "Using the text message above, complete each task.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct all homophone errors.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "List each correction and the meaning test you used.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why homophone errors are harder to spot than ordinary spelling errors.",
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
                              "name": "Homophone proofreading",
                              "statement": "Correct by meaning test, then explain why spellcheck fails."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Their' → 'They're' corrected.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "'Your' → 'You're' corrected.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "'They're' → 'their' corrected (possessive).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "'Were' → 'We're' corrected.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Corrections listed with meaning tests.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "All four corrections listed accurately.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Explains spellcheck can't detect real-word homophone errors.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Meaning-based checking described.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "All four homophones corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Three corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One or two corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Errors remain.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "All corrections listed with tests.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Most listed with tests.",
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
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear explanation of why homophones evade spellcheck.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable explanation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. 'They're going to the concert tomorrow. You're going to love it — the band is their best. We're meeting at 7.'",
          "commonErrors": [
                    "Correcting 'they're best' to 'they're' again — it should be 'their'."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u10-spelling-notes",
      title: "Spelling and tricky words — notes",
      summary: "i-before-e, silent-e and doubling rules cover most cases; homophones need meaning tests since spellcheck can't catch them.",
      sections: [
        { heading: "Key idea", body: "Spelling rules give patterns; mnemonics and look-cover-write-check handle exceptions." },
        { heading: "Homophones", body: "Same sound, different meaning — substitute the meaning to choose correctly." },
      ],
    },
  ],
};
