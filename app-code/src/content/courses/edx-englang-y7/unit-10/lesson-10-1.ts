import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "el7-u10-lesson-10-1",
  code: "10-1",
  title: "Vocabulary and Word Meaning",
  goal: "I CAN analyse word meaning, connotation and word origins to choose vocabulary precisely.",
  standards: ["Edexcel KS3 English Language — Vocabulary and word study"],
  
  vocabulary: [
    { term: "Denotation", definition: "The dictionary, literal meaning of a word." },
    { term: "Connotation", definition: "The associations and feelings a word carries beyond its literal meaning." },
    { term: "Synonym", definition: "A word with a similar meaning, though connotations may differ." },
    { term: "Root", definition: "The core part of a word carrying its main meaning." },
    { term: "Prefix", definition: "A word part added before the root, e.g. 'un-' in 'unhappy'." },
    { term: "Suffix", definition: "A word part added after the root, e.g. '-ness' in 'happiness'." },
  ],
  concepts: [
    {
      id: "el7-u10-connot",
      title: "Denotation, Connotation and Shades of Meaning",
      skill: "Distinguish literal and implied meaning and analyse word choice for effect.",
      lesson: {
        sections: [
          {
            heading: "Denotation vs connotation",
            body: "**Denotation** is what a word literally means — 'home' denotes a place where someone lives. **Connotation** is what it suggests — 'home' connotes warmth and belonging, while 'house' is more neutral.\n\nWriters exploit connotation: 'slim' and 'skinny' both mean thin, but 'slim' sounds positive while 'skinny' can sound critical. Choosing between near-synonyms is a deliberate effect.",
          },
          {
            heading: "Shades of meaning and loaded words",
            body: "No two synonyms are identical — each carries slightly different **shades of meaning**. 'Frugal' (positive) versus 'stingy' (negative) versus 'careful' (neutral) describe the same trait differently.\n\n**Emotive or loaded words** are chosen to trigger feelings: 'regime' (negative) versus 'government' (neutral); 'squandered' versus 'spent'. Analysing them reveals the writer's attitude.",
          },
        ],
        keyFormulas: [
          { name: "Denotation", statement: "Literal, dictionary meaning." },
          { name: "Connotation", statement: "Associations and feelings beyond the literal meaning." },
          { name: "Emotive language", statement: "Word choice designed to provoke a response." },
        ],
        workedExample: {
          problem: "Compare the connotations of 'thrifty' and 'mean'.",
          solution: "Both mean careful with money. 'Thrifty' connotes wise saving (positive); 'mean' connotes unwillingness to share (negative).",
        },
      },
      questions: [
        {
          id: "el7-u10-connot-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is denotation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The feelings a word carries"
                    },
                    {
                              "id": "b",
                              "text": "The literal, dictionary meaning of a word"
                    },
                    {
                              "id": "c",
                              "text": "A word's spelling pattern"
                    },
                    {
                              "id": "d",
                              "text": "The origin of a word"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Denotation",
                              "statement": "The literal, dictionary meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Denotation = literal meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The literal, dictionary meaning",
          "commonErrors": [
                    "Confusing with connotation."
          ]
},
        },
        {
          id: "el7-u10-connot-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain the difference between denotation and connotation, using 'home' and 'house' as your example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Denotation vs connotation",
                              "statement": "Literal meaning versus associated feelings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Denotation and connotation distinguished.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example shows 'home' connotes warmth while 'house' is neutral.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Denotation is literal meaning; connotation is associated feeling — 'home' feels warm, 'house' neutral.",
          "commonErrors": [
                    "Giving definitions without the example."
          ]
},
        },
        {
          id: "el7-u10-connot-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do 'slim' and 'skinny' differ in connotation, even though both mean thin?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Shades of meaning",
                              "statement": "Near-synonyms carry different attitudes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Slim' connotes attractiveness or health (positive).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Skinny' can connote weakness or criticism (negative).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains why writers choose between them deliberately.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "'Slim' sounds positive/attractive; 'skinny' sounds critical — same denotation, different connotation.",
          "commonErrors": [
                    "Claiming they are identical."
          ]
},
        },
        {
          id: "el7-u10-connot-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the effect of word choice in this sentence: 'The dictator's regime squandered the nation's wealth.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Emotive language",
                              "statement": "Loaded words reveal and shape the writer's attitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Dictator' and 'regime' carry strongly negative connotations.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Squandered' implies wastefulness and blame.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Neutral alternatives exist ('leader', 'government', 'spent').",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall effect: condemns the subject and persuades the reader.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Every key word is loaded negatively — the writer condemns the subject and invites the reader to agree.",
          "commonErrors": [
                    "Listing words without discussing effect."
          ]
},
        },
        {
          id: "el7-u10-connot-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rewrite this neutral sentence to make it persuasive: 'The new library opens next week.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Rewrite using at least two emotive or persuasive word choices.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how each word choice changes the reader's response.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Persuasive word choice",
                              "statement": "Emotive vocabulary shapes attitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At least two effective word choices added.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "First word choice's connotation explained.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Second word choice's connotation explained.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Overall persuasive effect explained.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Explanation links clearly to the original sentence.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Two effective word choices used.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No effective changes.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Clear explanation of both connotations and overall effect.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Good explanation of effect.",
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
          "finalAnswer": "e.g. 'The exciting new library opens next week — a wonderful gift for our community.'",
          "commonErrors": [
                    "Changing words without explaining connotation."
          ]
},
        },
        {
          id: "el7-u10-connot-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Campaign leaflet",
          "author": "Written for Akademik Space",
          "text": "Don't let the greedy developers destroy our beautiful green space. They want to build on our precious parkland — but we say NO."
},
          stem: "Using the leaflet above, complete each task.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three emotive words in the leaflet.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the connotation of each word you chose.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Rewrite the leaflet's message in neutral language.",
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
                              "name": "Emotive language analysis",
                              "statement": "Identify loaded words, decode connotations, then neutralise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three emotive words correctly identified (e.g. greedy, beautiful, precious).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "A fourth emotive word identified.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Connotations of at least two words explained accurately.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "All three chosen connotations explained.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Neutral rewrite keeps the message but removes loading.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "Neutral version is grammatical and balanced.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Three or more emotive words identified.",
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
                              "descriptor": "Connotations accurately explained for all chosen words.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Most connotations explained.",
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
                              "descriptor": "Accurate neutral rewrite.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partially neutralised.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Still loaded or inaccurate.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. 'Developers plan to build on the parkland; local people oppose the development.'",
          "commonErrors": [
                    "Identifying neutral words as emotive."
          ]
},
        },
      ],
    },
    {
      id: "el7-u10-origins",
      title: "Word Origins, Roots and Affixes",
      skill: "Break words into roots, prefixes and suffixes to unlock meaning and spelling.",
      lesson: {
        sections: [
          {
            heading: "Roots, prefixes and suffixes",
            body: "A **root** is the core of a word carrying its main meaning — 'port' means carry ('transport', 'portable', 'import'). **Prefixes** attach before the root ('un-', 're-', 'dis-', 'pre-'); **suffixes** attach after ('-tion', '-ness', '-ful', '-ly').\n\nMany roots come from Latin and Greek: 'bio' = life (biology, biography), 'graph' = write (paragraph, autograph), 'tele' = far (telephone, television). Knowing roots unlocks whole word families.",
          },
          {
            heading: "Using word knowledge strategically",
            body: "Breaking words into parts helps both **meaning** and **spelling**: knowing 'international' = inter- + nation + -al makes 'internationalisation' manageable.\n\nSpelling rules connect too: when a suffix beginning with a vowel follows a root ending in 'e', the 'e' is often dropped ('hope' → 'hoping', but 'hopeful' keeps it). When a suffix beginning with a consonant follows, the 'e' stays.",
          },
        ],
        keyFormulas: [
          { name: "Root", statement: "Core part carrying the main meaning." },
          { name: "Prefix", statement: "Added before the root (un-, re-, dis-)." },
          { name: "Suffix", statement: "Added after the root (-tion, -ness, -ly)." },
          { name: "Silent-e rule", statement: "Drop 'e' before vowel suffix; keep before consonant suffix." },
        ],
        workedExample: {
          problem: "Break 'unhappiness' into its parts and define each.",
          solution: "un- (not) + happy (feeling content) + -ness (state of being) = the state of not being happy.",
        },
      },
      questions: [
        {
          id: "el7-u10-origins-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a prefix?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A word part added before the root"
                    },
                    {
                              "id": "b",
                              "text": "A word part added after the root"
                    },
                    {
                              "id": "c",
                              "text": "The core meaning of a word"
                    },
                    {
                              "id": "d",
                              "text": "A joining word"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Prefix",
                              "statement": "Added before the root, e.g. 'un-'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Prefix = before the root.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** A word part added before the root",
          "commonErrors": [
                    "Confusing prefix with suffix."
          ]
},
        },
        {
          id: "el7-u10-origins-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Break the word 'unhappiness' into its root and affixes, and define each part.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Word structure",
                              "statement": "un- + happy + -ness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Root 'happy' and affixes 'un-' and '-ness' identified.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Each part's meaning explained.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "un- (not) + happy (content) + -ness (state) = state of not being happy.",
          "commonErrors": [
                    "Treating 'unhappiness' as having no breakable parts."
          ]
},
        },
        {
          id: "el7-u10-origins-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how knowing Greek and Latin roots helps with both spelling and understanding words.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Root knowledge",
                              "statement": "Roots unlock word families and spelling patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roots reveal meaning across word families.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Roots provide consistent spelling anchors.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A valid example given (e.g. 'bio' = life).",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Roots like 'bio' (life) unlock biology, biography, biography — meaning and spelling at once.",
          "commonErrors": [
                    "Only discussing meaning, not spelling."
          ]
},
        },
        {
          id: "el7-u10-origins-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Break 'internationalisation' into its root and affixes, then explain the meaning of the whole word.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Complex word analysis",
                              "statement": "inter- + nation + -al + -ise + -ation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Root 'nation' identified.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "At least three affixes correctly identified.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "All affixes listed accurately.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Whole-word meaning explained clearly.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "inter- (between) + nation + -al + -ise (make) + -ation (process) = the process of making something international.",
          "commonErrors": [
                    "Missing the root 'nation'."
          ]
},
        },
        {
          id: "el7-u10-origins-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Match these words to their roots and explain how the affixes change the meaning: 'reappear', 'disagree', 'careless', 'preview'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the root in each word.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what each prefix or suffix adds to the meaning.",
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
                              "name": "Affix analysis",
                              "statement": "re-=again, dis-=not, -less=without, pre-=before."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roots identified: appear, agree, care, view.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "'re-' (again) and 'dis-' (not/opposite) explained.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "'-less' (without) and 'pre-' (before) explained.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Roots correctly identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Roots not identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "All affix meanings accurately explained.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Most affixes explained.",
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
          "finalAnswer": "re+appear (appear again), dis+agree (not agree), care+less (without care), pre+view (view before).",
          "commonErrors": [
                    "Confusing 'pre-' (before) with 're-' (again)."
          ]
},
        },
        {
          id: "el7-u10-origins-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyse and extend this word family based on the root 'spect' (meaning 'look').",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what 'spect' means and give two English words containing it.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Break 'inspection' into root and affixes and define it.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Create and define one new word using 'spect' with a prefix or suffix.",
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
                              "name": "Root family building",
                              "statement": "Roots generate word families; affixes modify meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Spect' = look/see stated correctly.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Two valid words given (e.g. inspect, spectator, respect).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "'Inspection' correctly broken into in- + spect + -ion.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "'Inspection' defined accurately (examination/looking closely).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "A valid new word formed with a real affix.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "The new word is defined correctly using the root meaning.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Root meaning and two words correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial.",
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
                              "descriptor": "Correct breakdown and definition.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial breakdown.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Valid new word formed and defined.",
                              "part": "c"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "New word formed, definition loose.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Attempted word.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. a: 'spect' = look (inspect, spectator); b: in- + spect + -ion = close looking/examination; c: 'perspective' = a way of looking at things.",
          "commonErrors": [
                    "Inventing non-existent affixes."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u10-wordmeaning-notes",
      title: "Vocabulary and word meaning — notes",
      summary: "Denotation = literal meaning; connotation = feelings. Roots (bio, spect, port) unlock word families and spelling.",
      sections: [
        { heading: "Key idea", body: "Every word has a dictionary meaning and a set of associations — skilled writers exploit both." },
        { heading: "Word building", body: "Root + prefixes + suffixes = meaning and spelling in one system." },
      ],
    },
  ],
};
