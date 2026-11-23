import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "el7-u8-lesson-8-2",
  code: "8-2",
  title: "Spelling Strategies and Proof-reading",
  goal: "I CAN apply spelling rules, avoid common errors and proof-read accurately.",
  standards: ["Edexcel KS3 English Language — Spelling"],
  
  vocabulary: [
    { term: "Homophone", definition: "Words that sound the same but have different spellings and meanings (their/there/they're)." },
    { term: "Proof-reading", definition: "Checking writing for errors after drafting." },
    { term: "Spelling rule", definition: "A pattern that predicts correct spelling, e.g. 'i before e except after c'." },
    { term: "Mnemonic", definition: "A memory aid for spelling, e.g. 'because = big elephants can always understand small elephants'." },
    { term: "Double consonant", definition: "Doubling a final consonant before -ing/-ed in short-vowel words (run → running)." },
    { term: "Silent letter", definition: "A letter written but not pronounced, e.g. 'knee', 'write'." },
  ],
  concepts: [
    {
      id: "el7-u8-rules",
      title: "Spelling Rules and Patterns",
      skill: "Apply common spelling rules and patterns to spell accurately.",
      lesson: {
        sections: [
          {
            heading: "Reliable patterns",
            body: "**I before e except after c**: receive, ceiling, deceive — but exceptions exist (weird, seize). **Doubling**: short-vowel words double the final consonant before -ing/-ed (run→running, stop→stopped) but not long-vowel words (hoping, hoping→hope). **-ible vs -able**: -ible often for complete roots (visible), -able for full words (washable).",
          },
          {
            heading: "Silent letters and mnemonics",
            body: "Silent letters mark origin: 'knee', 'write', 'gnome', 'island'. Mnemonics help: 'there = here with t', 'their = possessive h'. When rules fail, learn the word visually — write it, say it, use it in a sentence.",
          },
        ],
        keyFormulas: [
          { name: "I before e", statement: "i before e except after c — receive, believe (with exceptions)." },
          { name: "Doubling rule", statement: "Short vowel + single consonant doubles before -ing/-ed: run → running." },
          { name: "-able vs -ible", statement: "-able after full words; -ible often after bound roots: washable, visible." },
        ],
        workedExample: {
          problem: "Spell the -ing form of 'run' and explain the spelling.",
          solution: "running — short vowel 'u' + single consonant 'n' doubles before -ing to keep the vowel short.",
        },
      },
      questions: [
        {
          id: "el7-u8-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct spelling?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "definately"
                    },
                    {
                              "id": "b",
                              "text": "definetly"
                    },
                    {
                              "id": "c",
                              "text": "definitely"
                    },
                    {
                              "id": "d",
                              "text": "definitly"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Common misspelling",
                              "statement": "'definitely' has no 'a' — a frequent error."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The correct spelling is 'definitely' — no 'a' after 'defin'.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "c",
          "commonErrors": [
                    "Inserting 'a' after 'defin'."
          ]
},
        },
        {
          id: "el7-u8-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Apply 'i before e except after c': spell the words for 'to get' (past) and 'a ruler'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "I before e",
                              "statement": "i before e except after c: receive, receipt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "After 'c' use 'ei': recei-ved, recei-pt.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Both spellings correct: 'received', 'receipt'.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "received; receipt.",
          "commonErrors": [
                    "Writing 'recieved' or 'reciept'."
          ]
},
        },
        {
          id: "el7-u8-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the doubling rule and spell the -ing forms of 'run', 'hop' and 'write'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Consonant doubling",
                              "statement": "Short vowel + single consonant doubles before -ing/-ed to preserve the short vowel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rule: CVC words double the final consonant — run → running.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'hop' has short vowel + single consonant → hopping; 'write' has long vowel sound → writing (no doubling).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "All three spellings correct.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "running, hopping, writing — doubling keeps the short vowel short.",
          "commonErrors": [
                    "Doubling in 'write' → 'writting' (wrong — long vowel)."
          ]
},
        },
        {
          id: "el7-u8-sp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Correct each misspelling and state the rule or pattern that fixes it.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) 'Their going to the library tomorow.'",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(b) 'The wierd stain on the ceiling was definately not paint.'",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Common errors",
                              "statement": "Homophones (their/there/they're) and i-before-e words cause most errors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'They're' (they are) for 'Their'; 'tomorrow' has double m + double r.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 'weird' is an i-before-e exception (ei); 'ceiling' follows i-before-e after c; 'definitely' has no 'a'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 'They're going to the library tomorrow.' (b) 'The weird stain on the ceiling was definitely not paint.'",
          "commonErrors": [
                    "Fixing spelling without explaining the rule."
          ]
},
        },
        {
          id: "el7-u8-sp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Proof-read and correct this sentence, then explain each correction: 'The childrens recieved thier gifts tomorow.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Correct all errors.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "(b) Explain the rule behind each correction.",
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
                              "name": "Proof-reading",
                              "statement": "Check homophones, i-before-e words and common misspellings systematically."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Corrected: 'The children's received their gifts tomorrow.'",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Apostrophe added for possession (children's); all spellings fixed.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) All four errors identified.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) children's = apostrophe of possession for plural; received = ei after c (i before e except after c); their = possessive homophone; tomorrow = double m + double r.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All errors corrected accurately.",
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
                              "descriptor": "No creditable response.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Each correction explained with the correct rule/pattern.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial explanations.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "'The children's received their gifts tomorrow.'",
          "commonErrors": [
                    "Correcting spelling but not the apostrophe.",
                    "Explanations that are vague ('it just looks right')."
          ]
},
        },
        {
          id: "el7-u8-sp-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student wrote: 'I beleive the plan will definately work becuase we have suport from the comunity.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Correct all four spelling errors and identify the pattern for each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "(b) Explain why 'i before e except after c' is a helpful but imperfect rule, using 'weird' and 'seize' as examples.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Spelling patterns",
                              "statement": "Rules guide but don't guarantee; exceptions must be learned."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'believe' — i before e, no c, so 'ie'.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'definitely' — no 'a' after 'defin'.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'because' — 'au' not 'ua'/'eu' (common error).",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'support' and 'community' — double consonants after short vowels.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) The rule works for 'believe' (ie) but 'weird' and 'seize' break it (ei without a preceding c) — exceptions must be memorised.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Concludes that rules reduce errors but visual learning is still needed.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "All corrections with accurate pattern for each.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Most corrections with patterns.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Corrections only, few patterns.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Clear explanation of rule limits using both exceptions.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Rule explained with one exception.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Vague on exceptions.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "'I believe the plan will definitely work because we have support from the community.'",
          "commonErrors": [
                    "Missing 'suport'/'comunity' doubling.",
                    "Claiming the rule has no exceptions."
          ]
},
        },
      ],
    },
    {
      id: "el7-u8-homophones",
      title: "Homophones and Proof-reading",
      skill: "Distinguish homophones, correct common errors and proof-read systematically.",
      lesson: {
        sections: [
          {
            heading: "Homophone traps",
            body: "Homophones sound identical but differ in spelling and meaning: **their/there/they're**, **your/you're**, **to/too/two**, **its/it's**, **whose/who's**, **then/than**. The fix is always meaning: 'their' = belonging to them, 'there' = place, 'they're' = they are. Read the sentence aloud and substitute each option.",
          },
          {
            heading: "Proof-reading technique",
            body: "Read **backwards** sentence by sentence to catch errors your brain auto-corrects. Check homophones by meaning, spelling by pattern, punctuation by function. Read aloud — your ear catches what your eye skips. Keep a personal list of your common errors and check for those specifically.",
          },
        ],
        keyFormulas: [
          { name: "their/there/they're", statement: "belonging / place / they are" },
          { name: "your/you're", statement: "belonging to you / you are" },
          { name: "to/too/two", statement: "direction / also / number" },
          { name: "its/it's", statement: "belonging to it / it is" },
        ],
        workedExample: {
          problem: "Correct: 'Your going to love they're new house over their.'",
          solution: "'You're going to love their new house over there.' — you're = you are; their = belonging; there = place.",
        },
      },
      questions: [
        {
          id: "el7-u8-hp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses 'their', 'there' and 'they're' correctly?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Their going to put there books over they're."
                    },
                    {
                              "id": "b",
                              "text": "They're going to put their books over there."
                    },
                    {
                              "id": "c",
                              "text": "There going to put they're books over their."
                    },
                    {
                              "id": "d",
                              "text": "They're going to put there books over their."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "their/there/they're",
                              "statement": "they're = they are; their = possession; there = place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only option b uses all three correctly: they're (they are), their (belonging), there (place).",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "b",
          "commonErrors": [
                    "Using 'their' where 'there' (place) is needed."
          ]
},
        },
        {
          id: "el7-u8-hp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct the homophone errors: 'Your going to need you're coat, its to cold.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "your/you're and its/it's",
                              "statement": "you're = you are; its = possession; it's = it is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Your' → 'You're' (you are) before 'going'; 'its' → 'it's' (it is) before 'to cold' (meaning it is).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Final: 'You're going to need your coat, it's too cold.' — note 'your' (possession) stays.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "'You're going to need your coat, it's too cold.'",
          "commonErrors": [
                    "Changing 'your' (possession) to 'you're' by mistake."
          ]
},
        },
        {
          id: "el7-u8-hp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why homophones cause spelling errors, and list three homophone pairs with a memory aid for one of them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Homophones",
                              "statement": "Same sound, different spelling and meaning — sound alone can't guide spelling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Homophones sound identical, so spelling must be decided by meaning, not pronunciation.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Three pairs listed, e.g. their/there/they're, your/you're, to/too/two.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Memory aid given for one, e.g. 'there = here with a t' or 'their = possessive h'.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Homophones force meaning-based spelling; e.g. there = here + t."
},
        },
        {
          id: "el7-u8-hp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Correct each homophone error and explain the meaning that fixes it.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) 'We should of left earlier, then we would of missed it.'",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(b) 'Its to late to change you're mind.'",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Homophone meaning test",
                              "statement": "Substitute the alternative: 'would have' not 'would of'; it's = it is; your = possession."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'should have' and 'would have' — 'of' is a mishearing of the weak 'have'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 'It's' (it is) before 'to late'; 'your' (belonging to you) before 'mind'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 'We should have left earlier, then we would have missed it.' (b) 'It's too late to change your mind.'",
          "commonErrors": [
                    "Correcting 'of' to 'have' without explanation."
          ]
},
        },
        {
          id: "el7-u8-hp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Proof-read this message and correct all errors: 'Hey, your not going to believe were going to the concert. Its to expensive but were going anyway.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Correct all errors in the message.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "(b) Explain your proof-reading method and the rule behind two of the corrections.",
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
                              "name": "Systematic proof-reading",
                              "statement": "Read for meaning, check homophones by substitution, check spelling by pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Corrected: 'Hey, you're not going to believe we're going to the concert. It's too expensive but we're going anyway.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) All homophone errors fixed: your→you're, were→we're (x2), Its→It's.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Describes a method (read aloud, substitute options, check meaning).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Explains two corrections accurately, e.g. 'you're = you are', 'we're = we are', 'it's = it is'.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All errors corrected accurately.",
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
                              "descriptor": "No creditable response.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Clear method plus accurate rule explanations.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial method or explanations.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "'Hey, you're not going to believe we're going to the concert. It's too expensive but we're going anyway.'",
          "commonErrors": [
                    "Missing 'were' → 'we're'.",
                    "No method described."
          ]
},
        },
        {
          id: "el7-u8-hp-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the ambiguous sign: 'Please collect you're parcels from the office. Its open until five.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Correct the sign and explain why each correction was needed.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "(b) Rewrite the sign so it cannot be misread, using clearer wording rather than just fixing the homophones.",
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
                              "name": "Clarity in public writing",
                              "statement": "Homophone errors change meaning; clearer phrasing removes ambiguity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'you're' → 'your' (belonging to you — the parcels are yours).",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'Its' → 'It's' (it is open) — meaning requires 'it is'.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Corrected: 'Please collect your parcels from the office. It's open until five.'",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Explanations link each fix to meaning.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Clearer rewrite, e.g. 'Please collect your parcels from the office. The office is open until 5 pm.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Explains that spelling out 'The office is' removes the its/it's trap entirely for readers.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Both corrections with meaning-based explanations.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Corrections with partial explanation.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Corrections only.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Clear rewrite plus explanation of ambiguity removal.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Rewrite clear, explanation general.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Rewrite still ambiguous.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "'Please collect your parcels from the office. The office is open until 5 pm.'",
          "commonErrors": [
                    "Fixing homophones but leaving ambiguity.",
                    "Rewrite that introduces new errors."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u8-spelling-notes",
      title: "Spelling and proof-reading — notes",
      summary: "Rules like i-before-e and consonant doubling help, but exceptions and homophones need meaning-based checks.",
      sections: [
        { heading: "Top homophones", body: "their/there/they're; your/you're; to/too/two; its/it's; then/than; whose/who's." },
        { heading: "Proof-read backwards", body: "Sentence-by-sentence backwards catches what your brain auto-corrects." },
        { heading: "Personal error list", body: "Track your own frequent mistakes and check for them deliberately." },
      ],
    },
  ],
};
