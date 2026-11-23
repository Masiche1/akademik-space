import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "el7-u8-lesson-8-3",
  code: "8-3",
  title: "Precision in Word Choice",
  goal: "I CAN choose precise words, understand connotation and adapt vocabulary to audience and purpose.",
  standards: ["Edexcel KS3 English Language — Vocabulary"],
  
  vocabulary: [
    { term: "Denotation", definition: "The dictionary definition of a word." },
    { term: "Connotation", definition: "The feelings or associations a word carries beyond its definition." },
    { term: "Register", definition: "Level of formality — slang, informal, neutral, formal." },
    { term: "Precision", definition: "Choosing the exact word for the meaning intended." },
    { term: "Synonym", definition: "A word with a similar meaning, though connotations may differ." },
    { term: "Collocation", definition: "Words that naturally go together, e.g. 'heavy rain', 'make a decision'." },
  ],
  concepts: [
    {
      id: "el7-u8-connotation",
      title: "Synonyms, Connotation and Register",
      skill: "Distinguish denotation from connotation and match word choice to register.",
      lesson: {
        sections: [
          {
            heading: "Denotation vs connotation",
            body: "**Denotation** is what a word literally means; **connotation** is what it suggests. 'Slim' and 'skinny' both mean thin — but 'slim' sounds positive, 'skinny' negative. 'Frugal' (positive thrift) vs 'stingy' (negative) vs 'cheap' (negative quality). Writers exploit these shades deliberately.",
          },
          {
            heading: "Register matching",
            body: "**Slang/informal**: 'kids', ' Loads of ', 'awesome'. **Neutral**: 'children', 'many', 'good'. **Formal**: 'offspring', 'numerous', 'excellent'. Match register to audience: a text to a friend can be informal; a letter to a headteacher must be formal. Wrong register undermines credibility.",
          },
        ],
        keyFormulas: [
          { name: "Denotation", statement: "Dictionary meaning — what the word is." },
          { name: "Connotation", statement: "Associations and feelings — what the word suggests." },
          { name: "Register", statement: "Formality level: slang < informal < neutral < formal." },
        ],
        workedExample: {
          problem: "Compare 'slim' and 'skinny' for describing a person.",
          solution: "Both denote 'thin'. 'Slim' connotes attractiveness and health; 'skinny' connotes weakness or criticism. Same denotation, opposite connotation.",
        },
      },
      questions: [
        {
          id: "el7-u8-cn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word has the most negative connotation for describing a house?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cosy"
                    },
                    {
                              "id": "b",
                              "text": "Modest"
                    },
                    {
                              "id": "c",
                              "text": "Cramped"
                    },
                    {
                              "id": "d",
                              "text": "Compact"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Connotation",
                              "statement": "Words carry emotional associations beyond their dictionary meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All four can describe a small house, but 'cramped' connotes discomfort and negativity; the others are neutral or positive.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "c",
          "commonErrors": [
                    "Choosing by denotation (size) rather than connotation (feeling)."
          ]
},
        },
        {
          id: "el7-u8-cn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish denotation from connotation using 'cheap' and 'economical'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Denotation vs connotation",
                              "statement": "Denotation = dictionary meaning; connotation = emotional association."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both denote 'low cost' — denotation is nearly identical.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "'Cheap' connotes poor quality; 'economical' connotes wise saving — opposite feelings.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Same denotation (low cost); 'cheap' negative, 'economical' positive."
},
        },
        {
          id: "el7-u8-cn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rank these words for describing food from most to least positive connotation: 'scrummy', 'tasty', 'edible', 'nourishing'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Connotation scale",
                              "statement": "Words occupy a scale from enthusiastic to clinical."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Most positive: 'scrummy' (delightful, informal enthusiasm).",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Middle: 'tasty' (pleasant, mild praise) then 'nourishing' (health-positive but clinical).",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Least positive/most neutral: 'edible' — merely 'safe to eat', faint praise.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "scrummy > tasty > nourishing > edible.",
          "commonErrors": [
                    "Ranking by dictionary meaning rather than feeling."
          ]
},
        },
        {
          id: "el7-u8-cn-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Match each word to the register it belongs in: slang, informal, neutral, formal.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) 'mate', 'friend', 'associate', 'bro'",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(b) 'kids', 'children', 'youngsters', 'offspring'",
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
                              "name": "Register",
                              "statement": "Formality scale: slang < informal < neutral < formal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'bro' = slang; 'mate' = informal; 'friend' = neutral; 'associate' = formal.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 'kids' = slang/informal; 'children' = neutral; 'youngsters' = informal/journalistic; 'offspring' = formal/clinical.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) bro=slang, mate=informal, friend=neutral, associate=formal. (b) kids=slang, children=neutral, youngsters=informal, offspring=formal.",
          "commonErrors": [
                    "Placing 'youngsters' as formal — it's journalistic/informal."
          ]
},
        },
        {
          id: "el7-u8-cn-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rewrite this informal sentence in formal register, then explain the word-level changes: 'Loads of kids think homework is a pain and teachers are bossy.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Formal rewrite.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "(b) Explain three word-level changes and their register effect.",
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
                              "name": "Register shift",
                              "statement": "Formal writing replaces slang/informal words with neutral or formal equivalents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) e.g. 'Many students believe that homework is tedious and teachers are strict.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Grammar and meaning preserved.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 'loads of' → 'many' (informal quantifier → neutral); 'kids' → 'students' (slang → formal); 'pain' → 'tedious' (colloquial → formal adjective); 'bossy' → 'strict' (negative informal → neutral/formal).",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Consistently formal rewrite preserving meaning.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partially formal or meaning drift.",
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
                              "descriptor": "Three accurate word-level explanations.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Some explanations.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "'Many students believe that homework is tedious and that teachers are strict.'",
          "commonErrors": [
                    "Changing grammar but not vocabulary.",
                    "Formal rewrite that becomes unnatural."
          ]
},
        },
        {
          id: "el7-u8-cn-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract: 'The politician called the policy \"a bold step forward\" while critics labelled it \"a reckless gamble\".'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Analyse the connotation of 'bold', 'step forward' and 'reckless gamble'.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "(b) Rewrite both phrases neutrally, then decide which original framing is more persuasive for a general audience and why.",
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
                              "name": "Connotation in persuasion",
                              "statement": "Loaded words frame the same event positively or negatively."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'Bold' connotes courage and vision — positive for the politician.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'Step forward' connotes progress — upbeat, purposeful.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'Reckless' connotes dangerous impulsiveness; 'gamble' connotes chance and possible loss — both negative.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Same policy, opposite emotional framing — the words carry the argument.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Neutral versions, e.g. 'a new policy' / 'a risky policy' or 'an uncertain policy'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Judgement justified: the positive framing likely persuades undecided audiences; critics' framing persuades the already doubtful.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "All three phrases analysed with accurate connotations.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Most phrases analysed.",
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
                              "descriptor": "Neutral rewrites plus justified persuasive judgement.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Rewrites neutral, judgement weak.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Rewrites still loaded or no judgement.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. 'bold' = courageous (positive); 'reckless gamble' = dangerous chance (negative). Positive framing persuades the undecided.",
          "commonErrors": [
                    "Describing words without connotation.",
                    "Neutral rewrite that stays loaded."
          ]
},
        },
      ],
    },
    {
      id: "el7-u8-precision",
      title: "Choosing Precise Words for Audience and Purpose",
      skill: "Replace vague language with precise words suited to audience and purpose.",
      lesson: {
        sections: [
          {
            heading: "Vague vs precise",
            body: "Vague words ('nice', 'good', 'thing', 'stuff') force the reader to guess. Precise words specify: instead of 'a nice day' write 'a crisp, sunny morning'; instead of 'she walked' choose 'she strode' (purposeful), 'she shuffled' (reluctant), or 'she tiptoed' (quietly). Verb choice alone can carry character and mood.",
          },
          {
            heading: "Audience and purpose",
            body: "Precision serves the audience: technical terms for experts ('mitochondria'), plain equivalents for beginners ('the cell's energy factory'). Purpose decides detail — a scientist needs exact measurements, a poet needs evocative images. Ambiguity is a flaw in instructions and reports but a tool in poetry.",
          },
        ],
        keyFormulas: [
          { name: "Vague → precise", statement: "good → excellent/adequate; walked → strode/shuffled/tiptoed; thing → object/item." },
          { name: "Verb precision", statement: "One precise verb beats an adverb: 'sprinted' > 'ran fast'." },
          { name: "Audience match", statement: "Technical for experts; plain for beginners; evocative for readers." },
        ],
        workedExample: {
          problem: "Improve 'The food was nice and the room was nice too.'",
          solution: "'The food was delicious and the room was cosy.' — precise adjectives replace the vague 'nice' twice, each with a distinct quality.",
        },
      },
      questions: [
        {
          id: "el7-u8-px-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which verb is the most precise replacement for 'walked' when someone moves reluctantly?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Strode"
                    },
                    {
                              "id": "b",
                              "text": "Shuffled"
                    },
                    {
                              "id": "c",
                              "text": "Marched"
                    },
                    {
                              "id": "d",
                              "text": "Rushed"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Verb precision",
                              "statement": "Precise verbs encode manner: shuffle = slow, reluctant steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Shuffled' specifically means walking slowly and without enthusiasm — reluctant. Strode = confident, marched = military, rushed = fast.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "b"
},
        },
        {
          id: "el7-u8-px-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Improve this vague sentence with two precise words: 'The man went to the shop and got some food.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Replacing vague words",
                              "statement": "Precise nouns and verbs specify what generic words leave open."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'went' → precise verb (e.g. 'hurried', 'strolled'); 'food' → specific noun (e.g. 'groceries', 'bread').",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Sentence grammatical and more informative, e.g. 'The man hurried to the shop and bought bread.'",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "e.g. 'The man hurried to the shop and bought bread.'"
},
        },
        {
          id: "el7-u8-px-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'sprinted' is more precise than 'ran fast', and give one more example of a precise verb replacing an adverb.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Verb over adverb",
                              "statement": "A precise verb packs meaning into one word; adverbs often just patch a weak verb."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Sprinted' encodes speed + manner + urgency in one word; 'ran fast' needs two words and 'fast' is vague about how.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Example given, e.g. 'whispered' > 'spoke quietly', 'devoured' > 'ate quickly'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Explanation connects precision to economy and vividness.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Precise verbs carry manner and intensity in one word; e.g. whispered > spoke quietly."
},
        },
        {
          id: "el7-u8-px-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Replace each vague phrase with a precise alternative.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) 'a nice car'",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "(b) 'a big house'",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "(c) 'she said something bad about him'",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "(d) 'it was very hot'",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Precision examples",
                              "statement": "Each vague word has a spectrum of precise alternatives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) e.g. 'a sleek car', 'a vintage car' — specifies kind/quality.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) e.g. 'a sprawling mansion', 'a roomy semi-detached' — specifies scale/type.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) e.g. 'she criticised him', 'she insulted him' — specifies speech act.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) e.g. 'it was sweltering', 'it was scorching' — precise temperature adjective.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "d"
                    }
          ],
          "finalAnswer": "Each vague phrase replaced by a specific, defensible alternative.",
          "commonErrors": [
                    "Synonyms that are equally vague ('good car')."
          ]
},
        },
        {
          id: "el7-u8-px-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rewrite this paragraph replacing vague words with precise ones: 'The weather was bad. We went to a place and saw some things. It was a good day because we had fun.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Rewrite with at least four precise replacements.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "(b) Explain why precision matters in descriptive writing.",
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
                              "name": "Precision in description",
                              "statement": "Specific words let readers see exactly what the writer means."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Four+ precise replacements, e.g. 'bad' → 'stormy'; 'went to a place' → 'hiked to the reservoir'; 'saw some things' → 'watched herons nesting'; 'good/fun' → 'memorable/enjoyable'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Rewrite grammatical and coherent.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Precision creates clear mental images, avoids ambiguity, and shows the writer's observation.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Four+ genuinely precise replacements, coherent rewrite.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Some replacements, weak coherence.",
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
                              "descriptor": "Clear, developed explanation of precision's value.",
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
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. 'The storm broke suddenly. We hiked to the reservoir and watched herons nesting. It was a memorable day.'",
          "commonErrors": [
                    "'Precise' words that are still vague ('nice place')."
          ]
},
        },
        {
          id: "el7-u8-px-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract: 'The old man walked slowly down the street. He looked at things and said stuff to people.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Identify four vague words and explain what precision each lacks.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "(b) Rewrite the extract with precise verbs and nouns, then explain how your choices change the reader's picture of the man.",
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
                              "name": "Precision analysis",
                              "statement": "Vague words give the reader nothing to picture; precise words direct the imagination."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'walked' — no manner specified; 'slowly' — tells pace but not quality; 'things' — unspecified objects; 'stuff' — unspecified speech; 'people' — generic.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Each identified as vague with reason.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Precise rewrite, e.g. 'The elderly man shuffled down the street, pausing to study shopfronts and greet neighbours.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Explains picture change: 'shuffled' suggests weariness/age; 'study shopfronts' gives purpose; 'greet neighbours' replaces vague 'said stuff' with warmth.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Four vague words identified with clear reasons.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Three identified.",
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
                              "descriptor": "No creditable response.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Genuinely precise rewrite plus linked explanation of changed picture.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Rewrite precise, explanation general.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Rewrite still vague or no explanation.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. 'The elderly man shuffled past, pausing to study shopfronts and greet neighbours.'",
          "commonErrors": [
                    "Listing vague words without explaining lack of precision."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u8-precision-notes",
      title: "Precision in word choice — notes",
      summary: "Denotation is literal meaning; connotation is feeling. Precise words for the right audience and purpose make writing clear and vivid.",
      sections: [
        { heading: "Connotation pairs", body: "slim/skinny; economical/stingy; bold/reckless; frugal/miserly." },
        { heading: "Register ladder", body: "slang → informal → neutral → formal. Match to audience." },
        { heading: "Verb precision", body: "One precise verb beats verb + adverb: sprinted > ran fast." },
      ],
    },
  ],
};
