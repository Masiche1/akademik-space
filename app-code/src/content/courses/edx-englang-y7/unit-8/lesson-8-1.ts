import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "el7-u8-lesson-8-1",
  code: "8-1",
  title: "Word Building: Roots, Affixes and Word Families",
  goal: "I CAN break words into roots, prefixes and suffixes and use word families to expand vocabulary.",
  standards: ["Edexcel KS3 English Language — Vocabulary and Spelling"],
  
  vocabulary: [
    { term: "Root", definition: "The core part of a word carrying its main meaning." },
    { term: "Prefix", definition: "A letter group added before a root to change meaning (un-, re-, dis-)." },
    { term: "Suffix", definition: "A letter group added after a root, often changing word class (-ful, -ness, -ly)." },
    { term: "Word family", definition: "A group of words sharing the same root, e.g. act, action, active, actor." },
    { term: "Affix", definition: "A prefix or suffix attached to a root." },
    { term: "Etymology", definition: "The origin and history of a word." },
  ],
  concepts: [
    {
      id: "el7-u8-affixes",
      title: "Roots, Prefixes and Suffixes",
      skill: "Decompose words into root and affixes and use affixes to build and understand new words.",
      lesson: {
        sections: [
          {
            heading: "Roots and affixes",
            body: "The **root** carries the core meaning: *happy* in *unhappiness*. A **prefix** goes before (*un-*, *re-*, *dis-*, *pre-*); a **suffix** goes after (*-ful*, *-ness*, *-ly*, *-er*). Suffixes often change the word class: *happy* (adjective) → *happiness* (noun), *quick* (adjective) → *quickly* (adverb).",
          },
          {
            heading: "Using word families",
            body: "Words in a **family** share a root and related meanings: *act, action, active, actor, react*. Learning families multiplies vocabulary — from one root you can often build a noun, verb, adjective and adverb. Knowing common prefixes and suffixes also helps you decode unfamiliar words in exams.",
          },
        ],
        keyFormulas: [
          { name: "Unpacking a word", statement: "prefix + root + suffix = word meaning" },
          { name: "Common prefixes", statement: "un- (not), re- (again), dis- (not/opposite), pre- (before), mis- (wrongly)" },
          { name: "Common suffixes", statement: "-ful (full of), -less (without), -ness (state), -ly (manner), -er (doer)" },
        ],
        workedExample: {
          problem: "Break down 'unhappiness' and explain each part.",
          solution: "un- (not) + happy (root, contentment) + -ness (state of being) = the state of not being happy.",
        },
      },
      questions: [
        {
          id: "el7-u8-af-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the prefix 'un-' usually mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Again"
                    },
                    {
                              "id": "b",
                              "text": "Not / opposite"
                    },
                    {
                              "id": "c",
                              "text": "Before"
                    },
                    {
                              "id": "d",
                              "text": "Under"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Prefix un-",
                              "statement": "un- reverses or negates a word: happy → unhappy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "un- means 'not' or 'opposite' — unhappy = not happy.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "b",
          "commonErrors": [
                    "Confusing un- with re- (again)."
          ]
},
        },
        {
          id: "el7-u8-af-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Break 'unhappiness' into its root and affixes, and state the meaning of each part.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Word deconstruction",
                              "statement": "prefix + root + suffix carries the meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Root: 'happy'; prefix: 'un-' (not); suffix: '-ness' (state of being).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Overall meaning: the state of not being happy.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "un- + happy + -ness = state of not being happy."
},
        },
        {
          id: "el7-u8-af-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Use the suffix '-ness' to turn 'kind' into a noun, then use '-ly' to make an adverb from 'gentle'. Explain what the suffixes did.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Suffix word-class change",
                              "statement": "-ness forms nouns; -ly forms adverbs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'kind' + -ness = 'kindness' (a noun naming a quality).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'gentle' + -ly = 'gently' (an adverb describing how something is done).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Both suffixes changed the word class while keeping the root meaning.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "kindness (noun), gently (adverb) — suffixes change word class.",
          "commonErrors": [
                    "Doubling letters incorrectly ('kinddness')."
          ]
},
        },
        {
          id: "el7-u8-af-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Define root, prefix, suffix and affix, and give one example of each (prefix or suffix where relevant).",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Define root and prefix with examples.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(b) Define suffix and affix with examples.",
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
                              "name": "Word parts",
                              "statement": "Root = core meaning; prefix/suffix = affixes that modify meaning or class."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Root: core meaning carrier, e.g. 'happy'. Prefix: added before root, e.g. 'un-' in 'unhappy'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Suffix: added after root, e.g. '-ness' in 'happiness'. Affix: the umbrella term for prefix or suffix.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Root=core; prefix=before; suffix=after; affix=prefix or suffix."
},
        },
        {
          id: "el7-u8-af-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Build a word family from the root 'act' and explain the meaning of each word you create.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Create at least four words using 'act' as the root.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "(b) Explain the meaning of each and identify its word class.",
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
                              "name": "Word families",
                              "statement": "Shared roots generate related words across classes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Four+ valid family words, e.g. act, action, active, actor, react, activity.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) All words genuinely share the root 'act'.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Meanings and classes correct: act (verb), action (noun), active (adjective), actor (noun, doer).",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Four+ valid family words all sharing the root.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two or three words, or some not sharing the root.",
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
                              "descriptor": "Meanings and word classes accurate for all words.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Some meanings or classes wrong.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. act (verb), action (noun), active (adjective), actor (noun — doer).",
          "commonErrors": [
                    "Words that merely contain the letters 'act' without the meaning (e.g. 'contact' arguable).",
                    "Wrong word classes."
          ]
},
        },
        {
          id: "el7-u8-af-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract: 'The teacher asked the class to react to the painting. Their reactions varied: some were active in discussion, while others seemed inactive and disinterested.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Identify the root shared by the underlined family words and explain what each prefix or suffix contributes.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "(b) Write two more words from the same family and use each in a sentence about the painting.",
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
                              "name": "Word family analysis",
                              "statement": "Shared root + affixes = related meanings across classes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Shared root: 'act'.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'react' = re- (back/again) + act → respond; 'reactions' = noun form.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'active' = adjective 'doing/taking part'; 'inactive' = in- + active → not active; 'disinterested' carries a negative prefix but is a different root (interest).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Notes that 'disinterested' is from 'interest', not 'act' — precise observation.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Two valid family words used correctly in sentences, e.g. 'The painting inspired action.' / 'She acted surprised.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Sentences are grammatical and contextually appropriate.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Root identified and every affix explained accurately, including the 'disinterested' nuance.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Most affixes explained correctly.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Root only or vague affix comments.",
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
                              "descriptor": "Two correct words in grammatical, apt sentences.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Words correct, sentences adequate.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. (b) 'The bold colours demanded a reaction.' / 'He acted as if unimpressed.'",
          "commonErrors": [
                    "Treating 'disinterested' as part of the act family.",
                    "Words used incorrectly in sentences."
          ]
},
        },
      ],
    },
    {
      id: "el7-u8-roots",
      title: "Greek and Latin Roots",
      skill: "Use Greek and Latin roots to decode and build vocabulary.",
      lesson: {
        sections: [
          {
            heading: "Why roots matter",
            body: "Much English vocabulary comes from **Greek and Latin**. One root generates a family of words: *spect* (look) gives inspect, respect, spectator, spectacle. Learning roots lets you decode unfamiliar words in exams and texts — e.g. *biology* = bio (life) + logy (study of).",
          },
          {
            heading: "High-frequency roots",
            body: "**bio** = life, **geo** = earth, **graph** = write, **phone** = sound, **tele** = far, **port** = carry, **dict** = say, **spect** = look. Roots often combine with other roots or suffixes: *telephone* = tele (far) + phone (sound) = sound from far away.",
          },
        ],
        keyFormulas: [
          { name: "bio", statement: "life — biology, biography" },
          { name: "graph", statement: "write — photograph, paragraph" },
          { name: "spect", statement: "look — inspect, respect, spectator" },
          { name: "port", statement: "carry — transport, portable, import" },
        ],
        workedExample: {
          problem: "Decode 'transport' using its Latin root.",
          solution: "trans- (across) + port (carry) = carry across — to move goods or people from one place to another.",
        },
      },
      questions: [
        {
          id: "el7-u8-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the root 'spect' mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hear"
                    },
                    {
                              "id": "b",
                              "text": "Look"
                    },
                    {
                              "id": "c",
                              "text": "Write"
                    },
                    {
                              "id": "d",
                              "text": "Carry"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Root spect",
                              "statement": "spect = look: inspect, respect, spectator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "spect means 'look' — an inspector looks, a spectator watches.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "b",
          "commonErrors": [
                    "Confusing spect (look) with phon (sound)."
          ]
},
        },
        {
          id: "el7-u8-gr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain how the shared root 'tele' links 'telephone' and 'television'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Root tele",
                              "statement": "tele = far/distant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "tele means 'far' or 'distant'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Telephone = sound (phone) from far away; television = sight/vision from far away — both transmit over distance.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "tele = far; both devices send sound/images over distance."
},
        },
        {
          id: "el7-u8-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Match these roots to their meanings: bio, geo, graph, dict.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Latin/Greek roots",
                              "statement": "bio=life, geo=earth, graph=write, dict=say."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "bio = life (biology); geo = earth (geography); graph = write (paragraph); dict = say (dictionary, predict).",
                              "marks": 3,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "bio=1 life; geo=2 earth; graph=3 write; dict=4 say.",
          "commonErrors": [
                    "Confusing graph (write) with phon (sound)."
          ]
},
        },
        {
          id: "el7-u8-gr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Define 'root' in the etymological sense and give two examples each of a Greek root and a Latin root with a derived word.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Definition of etymological root.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "(b) Two Greek root examples.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "(c) Two Latin root examples.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Etymological root",
                              "statement": "Core element carrying meaning, often from Greek or Latin."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Root = the basic element of a word carrying its core meaning, often borrowed from Greek or Latin.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) e.g. 'spect' (look) → spectator; 'phon' (sound) → telephone. (Or bio, graph, tele.)",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) e.g. 'port' (carry) → transport; 'dict' (say) → predict.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Root carries core meaning from Greek/Latin; e.g. spect→spectator, port→transport."
},
        },
        {
          id: "el7-u8-gr-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Build a word family from the root 'port' and explain how each word's meaning relates to 'carry'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Create at least four words containing 'port'.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "(b) Explain each word's meaning and its link to 'carry'.",
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
                              "name": "Root families",
                              "statement": "port = carry: transport, portable, import, export, porter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Four+ valid words: transport, portable, import, export, porter, report.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) All genuinely derive from port = carry.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) transport = carry across; portable = can be carried; import = carry in; export = carry out.",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Four+ valid port-family words.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two or three words.",
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
                              "descriptor": "All meanings accurately linked to 'carry'.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial links.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. transport (carry across), portable (carry-able), import (carry in), export (carry out).",
          "commonErrors": [
                    "Words like 'portion' treated as port-family without the carry sense."
          ]
},
        },
        {
          id: "el7-u8-gr-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the science extract: 'The biologist studied the geography of the island, photographing its geology and classifying each specimen.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Identify the Greek/Latin root in each technical word and its meaning.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "(b) Decode 'geology' and 'photograph' for a younger reader, then use 'bio' to create one new science word and define it.",
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
                              "name": "Decoding technical vocabulary",
                              "statement": "Roots reveal meaning: bio=life, geo=earth, graph=write, photo=light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) biologist = bio (life) + -logist (student of) → one who studies life.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) geography = geo (earth) + graphy (description/writing about) → study of the earth.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) photographing = photo (light) + graph (write) → recording with light.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) geology = geo (earth) + logy (study) → study of the earth's rocks.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Plain-English decodings are accurate: geology = study of rocks/earth; photograph = picture made by light.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) New bio word correctly formed and defined, e.g. 'biosphere' = the zone of Earth containing life.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "All four roots identified and meanings accurate.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Most roots correct.",
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
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Clear decodings plus a correct new bio word and definition.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Decodings adequate, new word partially correct.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Weak decodings or missing new word.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. (b) geology = 'study of the Earth and its rocks'; new word 'biography' = the life story of a person.",
          "commonErrors": [
                    "Roots identified but meanings wrong.",
                    "New word not actually built on 'bio'."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u8-wordbuilding-notes",
      title: "Word building — notes",
      summary: "Roots carry meaning; prefixes and suffixes modify it or change word class. Greek and Latin roots unlock technical vocabulary.",
      sections: [
        { heading: "Key prefixes", body: "un- (not), re- (again), dis- (opposite/not), pre- (before), mis- (wrongly)." },
        { heading: "Key suffixes", body: "-ful, -less, -ness, -ly, -er, -ist, -tion." },
        { heading: "High-value roots", body: "bio=life, geo=earth, graph=write, spect=look, port=carry, dict=say, tele=far." },
      ],
    },
  ],
};
