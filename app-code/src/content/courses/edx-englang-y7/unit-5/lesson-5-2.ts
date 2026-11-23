import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "el7-u5-lesson-5-2",
  code: "5-2",
  title: "Building Words: Prefixes, Suffixes and Roots",
  goal: "I CAN use prefixes, suffixes and word roots to decode, spell and expand my vocabulary.",
  standards: ["Edexcel KS3 English Language — Spelling and vocabulary", "Key Stage 3 vocabulary: morphology"],
  
  vocabulary: [
    { term: "Prefix", definition: "A morpheme added before a root to change meaning (un-, re-, pre-)." },
    { term: "Suffix", definition: "A morpheme added after a root to change meaning or word class (-ful, -less, -ly)." },
    { term: "Root", definition: "The core part of a word carrying its main meaning, often from Latin or Greek." },
    { term: "Morpheme", definition: "The smallest unit of meaning in a word." },
    { term: "Antonym", definition: "A word opposite in meaning to another." },
  ],
  concepts: [
    {
      id: "el7-u5-affixes",
      title: "Prefixes and suffixes",
      skill: "Use prefixes and suffixes to change meaning and word class.",
      lesson: {
        sections: [
          {
            heading: "Prefixes change meaning",
            body: "Prefixes attach to the front of a root and alter meaning — often creating an **antonym**:\n\n- **un-**: unhappy, unlock, unfair\n- **re-**: redo, rewrite, return (again/back)\n- **dis-**: disagree, disappear, dislike\n- **pre-**: preview, prehistoric, predict (before)\n- **mis-**: misunderstand, misbehave (wrongly)\n\nSome prefixes change spelling slightly: 'in-' becomes 'im-' before p/b/m ('impossible'), 'il-' before l ('illegal'), 'ir-' before r ('irregular').",
          },
          {
            heading: "Suffixes change word class",
            body: "Suffixes at the end can turn words into different classes:\n\n- Noun → adjective: -ful (hopeful), -less (hopeless), -ous (famous), -ive (active)\n- Verb → noun: -tion/-sion (celebrate → celebration), -ment (govern → government), -er (teach → teacher)\n- Adjective → adverb: -ly (quick → quickly)\n\nSuffixes can change spelling: drop silent e (hope → hopeful), double consonant (run → runner), y → i (happy → happily).",
          },
        ],
        keyFormulas: [
          { name: "un-", statement: "not/reverse: unhappy, unlock" },
          { name: "re-", statement: "again/back: redo, return" },
          { name: "-ful/-less", statement: "full of / without: hopeful, hopeless" },
          { name: "-tion", statement: "verb → noun: celebrate → celebration" },
        ],
        workedExample: {
          problem: "Change 'happy' into an adverb and explain the spelling change.",
          solution: "happy → happily. The y changes to i before -ly (consonant + y → i + suffix). 'Happly' is wrong.",
        },
      },
      questions: [
        {
          id: "el7-u5-af-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the prefix 'un-' usually mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "again"
                    },
                    {
                              "id": "b",
                              "text": "not or opposite"
                    },
                    {
                              "id": "c",
                              "text": "before"
                    },
                    {
                              "id": "d",
                              "text": "wrongly"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Prefix un-",
                              "statement": "Adds 'not' or reverses meaning: unhappy, unlock."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "un- = not/opposite (unhappy, unfair); re- = again; pre- = before; mis- = wrongly.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** not or opposite",
          "commonErrors": [
                    "Confusing un- with re- or mis-."
          ]
},
        },
        {
          id: "el7-u5-af-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What word class is 'quickly'? How was it formed?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Suffix -ly",
                              "statement": "Adjective → adverb."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Quickly' is an adverb.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Formed from adjective 'quick' + suffix -ly.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "-ly tells how an action is done.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Adverb — adjective 'quick' + suffix '-ly'.",
          "commonErrors": [
                    "Calling it an adjective."
          ]
},
        },
        {
          id: "el7-u5-af-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Add a prefix to 'appear' to mean 'appear again', and a suffix to 'hope' to mean 'without hope'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Affix application",
                              "statement": "re- = again; -less = without."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "re- + appear = 'reappear' (appear again).",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "hope + -less = 'hopeless' (without hope).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Spelling: 'reappear' keeps double p? No — 'reappear' is correct; 'hopeless' drops silent e.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "reappear; hopeless.",
          "commonErrors": [
                    "'reapear' spelling.",
                    "'hopeles' missing silent-e rule."
          ]
},
        },
        {
          id: "el7-u5-af-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why 'impossible' is spelled with 'im-' not 'in-', and give two more examples of prefix assimilation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Prefix assimilation",
                              "statement": "Prefix final consonant assimilates to following sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'in-' becomes 'im-' before p, b, m for easier pronunciation.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Two more examples: 'illegal' (il- before l), 'irregular' (ir- before r), 'immature' (im- before m).",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Assimilation = sound-based spelling change.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "in- → im- before labial sounds (p, b, m); also il- before l, ir- before r.",
          "commonErrors": [
                    "Writing 'inpossible'."
          ]
},
        },
        {
          id: "el7-u5-af-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Word-class transformation: convert 'success' into (a) a verb, (b) an adjective meaning 'having success', (c) an adverb.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Verb form.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Adjective form.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Adverb form.",
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
                              "name": "Word-class change",
                              "statement": "Suffixes convert nouns to verbs, adjectives, adverbs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Verb: 'succeed' (or 'be successful') — accept 'succeed'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "Adjective: 'successful' (noun + -ful).",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Adverb: 'successfully' (adjective + -ly).",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Correct verb form.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No verb or wrong form.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "'successful' correct.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Wrong form.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "'successfully' correct.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Wrong form.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "succeed; successful; successfully.",
          "commonErrors": [
                    "'successly' missing a syllable.",
                    "'successfuly' spelling."
          ]
},
        },
        {
          id: "el7-u5-af-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Affix analysis of the word family around 'act'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give the adjective and adverb forms of 'act'.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give three words with prefixes added to 'act'.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain how the suffix -tion changes a verb into a noun, with an example.",
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
                              "name": "Affix mastery",
                              "statement": "Suffixes and prefixes systematically change word class and meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adjective 'active' or 'acted'; adverb 'actively'.",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "Three prefix words: react, enact, interact, actor? — need verbs: react, enact, interact, transact.",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "-tion converts verbs to nouns naming the action/result: act → action; celebrate → celebration; educate → education.",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Both adjective and adverb forms correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One form correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Neither correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Three valid prefixed forms.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two valid forms.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than two.",
                              "part": "b"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "-tion rule explained with accurate example.",
                              "part": "c"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Rule explained, example slightly off.",
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
                              "descriptor": "No explanation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "active/acted, actively; react, enact, interact; -tion: act → action.",
          "commonErrors": [
                    "'actly' instead of 'actively'."
          ]
},
        },
      ],
    },
    {
      id: "el7-u5-roots",
      title: "Roots and word origins",
      skill: "Use Latin and Greek roots to decode unfamiliar words and grow vocabulary.",
      lesson: {
        sections: [
          {
            heading: "Why roots matter",
            body: "English borrows heavily from **Latin** and **Greek**. A **root** carries the core meaning; prefixes and suffixes modify it. Learning roots lets you decode words you've never seen and guess their meanings.\n\nOver 60% of English words have Latin or Greek origins — this is the fastest vocabulary-expansion strategy there is.",
          },
          {
            heading: "High-value roots",
            body: "- **spect** (look): inspect, respect, prospect, spectator\n- **port** (carry): transport, import, export, support, portable\n- **dict** (say): predict, dictate, contradict, verdict\n- **bio** (life): biology, biography, antibiotic, biography\n- **graph** (write): photograph, paragraph, biography, autograph\n- **tele** (far): telephone, television, telescope, teleport\n- **chron** (time): chronology, chronic, anachronism\n- **phil** (love): philosophy, bibliophile, philanthropy\n\nPattern: same root, different prefix/suffix = related meaning. 'Transport' = carry across; 'import' = carry in; 'export' = carry out.",
          },
        ],
        keyFormulas: [
          { name: "spect", statement: "look: inspect, respect, prospect" },
          { name: "port", statement: "carry: transport, import, export" },
          { name: "dict", statement: "say: predict, dictate, contradict" },
          { name: "graph", statement: "write: photograph, paragraph, autograph" },
        ],
        workedExample: {
          problem: "Decode 'television' using roots.",
          solution: "tele- (far) + vis (see) + -ion (noun ending) = 'seeing far' — literally 'far-seeing'. Knowing tele- = far and vis = see unlocks the meaning.",
        },
      },
      questions: [
        {
          id: "el7-u5-rt-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the root 'spect' mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "carry"
                    },
                    {
                              "id": "b",
                              "text": "look"
                    },
                    {
                              "id": "c",
                              "text": "write"
                    },
                    {
                              "id": "d",
                              "text": "say"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Root spect",
                              "statement": "Latin root meaning 'look'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "spect = look (inspect, respect, prospect); port = carry; graph = write; dict = say.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** look",
          "commonErrors": [
                    "Confusing spect with port."
          ]
},
        },
        {
          id: "el7-u5-rt-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Decode the word 'transport' using its root and prefix.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Root decoding",
                              "statement": "Break word into prefix + root + suffix."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "trans- = across, port = carry.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Transport' = carry across.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Meaning matches: transport moves things across distances.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "trans- (across) + port (carry) = carry across.",
          "commonErrors": [
                    "Treating 'port' as 'harbour' only."
          ]
},
        },
        {
          id: "el7-u5-rt-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "What do 'predict', 'contradict' and 'dictate' have in common? Give the root and its meaning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Root dict",
                              "statement": "Latin root meaning 'say'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All contain the root 'dict' (say).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Root meaning: say/speak.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Prefix meanings: pre- = before, contra- = against, de-? no — dictate is dict + ate.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Meanings follow: predict = say before, contradict = say against.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Root 'dict' = say; predict = say before, contradict = say against.",
          "commonErrors": [
                    "Missing 'dictate' doesn't use pre-/contra-."
          ]
},
        },
        {
          id: "el7-u5-rt-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student reads 'The biography was fascinating' but doesn't know 'biography'. Decode it and guess the meaning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vocabulary decoding",
                              "statement": "bio = life, graph = write → life-writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "bio- = life, -graphy/-graph = write.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Biography = writing about someone's life.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Context 'fascinating' supports a life-story interpretation.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "bio (life) + graph (write) = a written account of someone's life.",
          "commonErrors": [
                    "Guessing 'biology' — check the -graph ending."
          ]
},
        },
        {
          id: "el7-u5-rt-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Root matching: match each root to its meaning and give one example word.",
          parts: [
          {
                    "label": "a",
                    "prompt": "chron — time, far, write, life",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "tele — time, far, write, life",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one example word for each.",
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
                              "name": "Root identification",
                              "statement": "chron = time; tele = far."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "chron = time.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "tele = far/distant.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "Examples: chronology/chronic; telephone/television/telescope.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "chron = time correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Wrong meaning.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "tele = far correct.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Wrong meaning.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "One valid example for each root.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Examples missing or wrong.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "chron = time (chronology); tele = far (telephone).",
          "commonErrors": [
                    "Confusing chron (time) with tele (far)."
          ]
},
        },
        {
          id: "el7-u5-rt-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Decode and analyse these words: 'inspect', 'portable', 'predict', 'autograph'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Break each into root + affixes.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "State the meaning of each root.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Guess and verify the meaning of each word.",
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
                              "name": "Root analysis",
                              "statement": "Decompose, identify root meaning, deduce word meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "inspect = in- + spect; portable = port + -able; predict = pre- + dict; autograph = auto- + graph.",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "spect = look; port = carry; dict = say; graph = write.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "Meanings: look into, able to be carried, say before, self-writing/signature.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "All four words correctly decomposed.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Three decomposed.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two decomposed.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than two.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All four root meanings correct.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two or three correct.",
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
                              "descriptor": "All four meanings accurately deduced.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two or three deduced.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than two.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "inspect = look into; portable = able to be carried; predict = say before; autograph = self-write/signature.",
          "commonErrors": [
                    "'port' as 'airport' only — it means carry."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u5-morphology-notes",
      title: "Prefixes, suffixes and roots — notes",
      summary: "Prefixes change meaning (un-, re-, pre-); suffixes change word class (-ful, -ly, -tion); roots unlock meaning (spect=look, port=carry, dict=say).",
      sections: [
        { heading: "Prefix cheatsheet", body: "un-=not, re-=again, dis-=opposite, pre-=before, mis-=wrongly. Assimilation: im-/il-/ir- before labials, l, r." },
        { heading: "Suffix cheatsheet", body: "-ful/-less (adjectives), -ly (adverbs), -tion/-sion (nouns), -ment (nouns). Watch spelling: happy→happily, hope→hopeless." },
        { heading: "Root bank", body: "spect=look, port=carry, dict=say, graph=write, bio=life, tele=far, chron=time, phil=love." },
        { heading: "Strategy", body: "Break unknown words into morphemes, identify the root, guess meaning from parts, verify with a dictionary." },
      ],
    },
  ],
};
