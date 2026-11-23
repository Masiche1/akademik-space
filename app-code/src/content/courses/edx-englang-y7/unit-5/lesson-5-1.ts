import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "el7-u5-lesson-5-1",
  code: "5-1",
  title: "Spelling Rules and Patterns",
  goal: "I CAN apply core English spelling rules and use strategies to spell unfamiliar words accurately.",
  standards: ["Edexcel KS3 English Language — Spelling and vocabulary", "Key Stage 3 writing: accuracy"],
  
  vocabulary: [
    { term: "Homophone", definition: "Words that sound the same but have different spellings and meanings (their/there)." },
    { term: "Silent letter", definition: "A letter written but not pronounced (knight, gnome, island)." },
    { term: "Doubling rule", definition: "Doubling the final consonant before a suffix (run → running)." },
    { term: "Mnemonic", definition: "A memory aid for remembering spelling or facts." },
    { term: "Word family", definition: "Words sharing a root or pattern (sign, signal, signature)." },
  ],
  concepts: [
    {
      id: "el7-u5-spell-rules",
      title: "Core spelling rules",
      skill: "Apply rules for i before e, consonant doubling, silent letters and common suffix patterns.",
      lesson: {
        sections: [
          {
            heading: "I before E and friends",
            body: "The famous rule: **i before e except after c** — 'believe', 'receive'. But there are many exceptions ('weird', 'seize', 'science'), so treat it as a guideline.\n\n**Consonant doubling**: in a one-syllable word ending consonant-vowel-consonant, double the final consonant before -ed/-ing: run → running, stop → stopped. Don't double after a long vowel sound: 'read' → 'reading' (no extra d).",
          },
          {
            heading: "Silent letters and suffixes",
            body: "**Silent letters**: k in 'knight', w in 'sword', b in 'lamb', gh in 'through'. Learn them as part of the word.\n\n**Suffix patterns**: -ible often follows a complete base word (visible, sensible); -able often after a full word too but check each word. -ance/-ence (importance/independence), -ant/-ent (important/independent) follow similar logic — learn them word by word.\n\n**Plural and verb endings**: -es after s, sh, ch, x, o (boxes, goes); -s otherwise (cats). Verb -ies: 'carry' → 'carried' (y→i before -ed/-ing).",
          },
        ],
        keyFormulas: [
          { name: "I before E", statement: "i before e except after c (with exceptions: weird, seize)." },
          { name: "Doubling", statement: "CVC short-vowel words double final consonant: run → running." },
          { name: "Plural -es", statement: "After s, sh, ch, x, o: add -es." },
          { name: "Y to I", statement: "Consonant + y → ies/ied before suffix." },
        ],
        workedExample: {
          problem: "Spell the plurals: baby, box, church, potato.",
          solution: "babies (y→i+es), boxes (x→es), churches (ch→es), potatoes (o→es).",
        },
      },
      questions: [
        {
          id: "el7-u5-sr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which spelling is correct?",
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
                              "text": "receve"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "I before E",
                              "statement": "After c, use 'ei': receive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Receive' follows 'i before e except after c'.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** receive",
          "commonErrors": [
                    "'recieve' — the most common misspelling of this rule."
          ]
},
        },
        {
          id: "el7-u5-sr-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Why do we double the 'p' in 'stopped' but not in 'opened'?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Doubling rule",
                              "statement": "Double final consonant in short-vowel CVC words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Stop' is a one-syllable CVC word with a short vowel → double 'p'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Open' ends in vowel-consonant but the 'e' makes a long vowel sound → no doubling.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Doubling keeps the short vowel sound short before the suffix.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Short-vowel CVC words double the consonant; 'open' has a long vowel sound so no doubling.",
          "commonErrors": [
                    "Doubling after long vowels: 'openning'."
          ]
},
        },
        {
          id: "el7-u5-sr-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Spell correctly: 'The babys were playing with theyre toyes in the gardin.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Spelling correction",
                              "statement": "Apply y→ies, their/there/they're, -en endings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'babys' → 'babies' (y→ies after consonant).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'theyre' → 'their' (possession).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'toyes' → 'toys' (no e needed); 'gardin' → 'garden' (silent e).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Full corrected sentence produced.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "'The babies were playing with their toys in the garden.'",
          "commonErrors": [
                    "'babys' not changed to 'babies'."
          ]
},
        },
        {
          id: "el7-u5-sr-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Correct all spelling errors in: 'The writter beleived the knoledge was completly unecessary.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Spelling pattern application",
                              "statement": "Doubling, ie/ei, silent k, -ely endings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'writter' → 'writer' — hmm, actually 'writer' has one t (write + er, drop e). Correct: 'writer'.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'beleived' → 'believed' (ie after b, not c).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'knoledge' → 'knowledge' (silent k).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'completly' → 'completely' (drop e? no — complete → completely keeps e: completely).",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "'The writer believed the knowledge was completely unnecessary.'",
          "commonErrors": [
                    "Doubling 't' in 'writter' — 'write' keeps single t.",
                    "'compleatly' vs 'completely'."
          ]
},
        },
        {
          id: "el7-u5-sr-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply spelling rules: (a) Spell the -ing form of 'run', 'hope', 'write'. (b) Spell the plural of 'church', 'toy', 'hero'. (c) Explain the rule for each group.",
          parts: [
          {
                    "label": "a",
                    "prompt": "-ing forms.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Plurals.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the rules.",
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
                              "name": "Rule application",
                              "statement": "Doubling, silent-e drop, -es plurals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "running (double n), hoping (drop e), writing (drop e).",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "churches, toys, heroes (o→es for hero).",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Rules stated: CVC doubling; silent e dropped before -ing; -es after sibilants and some o-words.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All three -ing forms correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than two correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "All three plurals correct.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Errors in plurals.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Rules broadly stated.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No explanation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "running, hoping, writing; churches, toys, heroes.",
          "commonErrors": [
                    "'runing' without double n.",
                    "'hopeing' keeping the e."
          ]
},
        },
        {
          id: "el7-u5-sr-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Spelling audit: find and correct every error in 'The goverment decided to bye the feild and build a new librery.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify all misspelled words.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give the correct spelling of each.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain the pattern or rule for two of the corrections.",
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
                              "name": "Spelling audit",
                              "statement": "Spot, correct and justify spelling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Errors identified: goverment, bye, feild, librery.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Corrections: government, buy, field, library.",
                              "marks": 4,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Rule explanations, e.g. 'government' keeps the e from govern; 'buy' has silent u; 'field' uses ei after f (i before e except after c — f counts as 'c-like'); 'library' has -ary not -ery.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All four errors identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Three identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than three.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "All four spellings corrected.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Three corrected.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two corrected.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than two.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Two accurate rule/pattern explanations.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One explanation.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No explanation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "'The government decided to buy the field and build a new library.'",
          "commonErrors": [
                    "'feild' — the classic ie/ei trap.",
                    "'librery' vs 'library'."
          ]
},
        },
      ],
    },
    {
      id: "el7-u5-spell-strategy",
      title: "Spelling strategies and word families",
      skill: "Use mnemonics, morphemes and word-family patterns to learn and check spellings.",
      lesson: {
        sections: [
          {
            heading: "Memory strategies",
            body: "**Mnemonics**: create silly phrases — 'Because Evil Artists Like Artwork, These Artists Draw Smugly' → 'necessary' (one c, two s's).\n\n**Look-cover-write-check**: see the word, hide it, write it, check. Repeat for problem words.\n\n**Dictionary and spell-check**: use them — but remember spell-check can't tell 'their' from 'there'. Homophones need a dictionary or careful reading.",
          },
          {
            heading: "Word families and morphemes",
            body: "Many spellings make sense once you know the **root**:\n\n- sign → signal, signature, design, assign\n- spect (look) → inspect, respect, prospect, spectator\n- port (carry) → transport, import, export, support\n\nA **morpheme** is the smallest meaning unit: 'un-' (not), '-ful' (full of), '-less' (without), '-ment' (act/result). Breaking words into morphemes both aids spelling and vocabulary growth.\n\n**Homophone families** to memorise as a set: their/there/they're, your/you're, to/too/two, hear/here, week/weak.",
          },
        ],
        keyFormulas: [
          { name: "Mnemonic", statement: "Memory phrase linking letters to a story." },
          { name: "Morpheme", statement: "Smallest unit of meaning: un-, -ful, -less, -ment." },
          { name: "Word family", statement: "Words sharing a root: sign → signal, signature." },
        ],
        workedExample: {
          problem: "Break 'transportation' into morphemes.",
          solution: "trans- (across) + port (carry) + -ation (act/process) = 'the act of carrying across'. Knowing 'port' = carry helps spell it: trans-port-ation.",
        },
      },
      questions: [
        {
          id: "el7-u5-strat-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a mnemonic?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of dictionary"
                    },
                    {
                              "id": "b",
                              "text": "A memory aid for remembering spelling or facts"
                    },
                    {
                              "id": "c",
                              "text": "A spelling rule"
                    },
                    {
                              "id": "d",
                              "text": "A word's root"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mnemonic",
                              "statement": "Memory aid — phrase or image aiding recall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mnemonic = memory aid, not a rule or dictionary.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A memory aid for remembering spelling or facts",
          "commonErrors": [
                    "Confusing mnemonic with morpheme."
          ]
},
        },
        {
          id: "el7-u5-strat-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What do 'transport', 'import' and 'export' have in common?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Word family",
                              "statement": "Shared root 'port' = carry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All share the root 'port' meaning carry.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Prefixes change meaning: trans- = across, im- = into, ex- = out.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Knowing the root helps spelling and meaning.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "They share the Latin root 'port' (carry) with different prefixes.",
          "commonErrors": [
                    "Saying they're rhymes only."
          ]
},
        },
        {
          id: "el7-u5-strat-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Create a mnemonic to remember 'necessary' (one c, two s's) and explain how it works.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Mnemonic creation",
                              "statement": "Phrase whose initials or story encode the spelling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mnemonic created with a phrase covering the letters, e.g. 'Never Eat Soggy Wheatcakes; Every Rice Crispie Tastes...' or simpler 'NECESSARY has one C and two S's — remember the shirt collar and two sleeves.'",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Mnemonic links to the tricky part (one c, two s).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explanation of how recall works.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. 'One Collar, Two Sleeves' — 'necessary' has one c and two s's.",
          "commonErrors": [
                    "Mnemonic that doesn't encode the tricky letters."
          ]
},
        },
        {
          id: "el7-u5-strat-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse this student's spelling strategy: 'I always use spell-check, so I never make spelling mistakes.' What's wrong with this approach?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Limits of spell-check",
                              "statement": "Spell-check can't catch homophones or wrong-word errors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies flaw: spell-check only catches non-words.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Homophones (their/there) pass spell-check.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Correct but wrong words (e.g. 'form' vs 'from') pass.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Suggests better strategy: read aloud, dictionary, word families.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Spell-check can't catch real-word errors like their/there — combine it with reading aloud and dictionary checks.",
          "commonErrors": [
                    "Agreeing with the student."
          ]
},
        },
        {
          id: "el7-u5-strat-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Word family work: (a) List three words from the 'spect' family. (b) List three from 'sign'. (c) Explain how knowing roots helps both spelling and vocabulary.",
          parts: [
          {
                    "label": "a",
                    "prompt": "spect family (3 words).",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "sign family (3 words).",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the benefit.",
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
                              "name": "Word families",
                              "statement": "Roots unlock spelling and meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three correct spect- words (inspect, respect, prospect, spectator, expect...).",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Three correct sign- words (signal, signature, design, assign, signpost...).",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "Roots aid spelling (predictable letters) and meaning (deduce definitions).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Three correct spect- words.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than three.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Three correct sign- words.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than three.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Both spelling and meaning benefits explained.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "One benefit or none.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. inspect, respect, prospect / signal, signature, design.",
          "commonErrors": [
                    "Words that don't contain the root (e.g. 'special' for spect)."
          ]
},
        },
        {
          id: "el7-u5-strat-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Strategy design: create a personal spelling toolkit for the ten most misspelled words in your writing.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List your five most misspelled words.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Create a mnemonic or word-family note for three of them.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain your checking routine before submitting work.",
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
                              "name": "Personal spelling strategy",
                              "statement": "Identify patterns, create aids, build routine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Five genuine personal error words listed (any real words).",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Mnemonics or root notes created for three words, each targeting the tricky letters.",
                              "marks": 4,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Routine described: spell-check, read aloud, dictionary for homophones, word-family check.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Five real error-prone words listed.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Three or four listed.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than three.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Three effective memory aids targeting tricky spellings.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Two effective aids.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One effective aid.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No effective aids.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Thorough routine covering homophones and spell-check limits.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Basic routine mentioned.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No routine.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. Words: receive, necessary, separate, accommodation, rhythm — aids per word; routine: spell-check → read aloud → dictionary → word families.",
          "commonErrors": [
                    "Generic routine with no personalisation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u5-spelling-notes",
      title: "Spelling rules and strategies — notes",
      summary: "I before e except after c; double consonants in CVC words; use mnemonics and word families for tricky spellings.",
      sections: [
        { heading: "Rule reminders", body: "i before e except after c (exceptions: weird, seize). Double final consonant in short-vowel CVC words: run→running. Silent e drops before -ing/-ed: hope→hoping." },
        { heading: "Plural endings", body: "-s usually; -es after s, sh, ch, x, o (churches, potatoes, heroes); consonant+y → ies (babies)." },
        { heading: "Memory tools", body: "Mnemonics encode tricky letters; word families share roots (spect=look, port=carry, sign=mark)." },
        { heading: "Spell-check limits", body: "It can't catch their/there/they're — always read aloud and check homophones." },
      ],
    },
  ],
};
