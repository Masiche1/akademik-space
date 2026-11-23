import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "el11-u4-lesson-4-2",
  code: "4-2",
  title: "Language Change Over Time",
  goal: "I CAN explain how English has changed historically and through technology, and analyse examples of language change in texts.",
  standards: ["4EA1 AO3", "4EA1 AO1", "4EA1 Paper 1"],
  
  vocabulary: [
    { term: "Language change", definition: "The gradual, inevitable evolution of a language's sounds, words, grammar and meanings." },
    { term: "Neologism", definition: "A newly coined word or phrase, often driven by technology or culture." },
    { term: "Semantic shift", definition: "A change in a word's meaning over time, e.g. 'literally' acquiring an informal emphatic sense." },
    { term: "Archaic language", definition: "Words or forms no longer in general use, such as 'thou' or '-eth' verb endings." },
    { term: "Standardisation", definition: "The process by which one variety of a language becomes the accepted norm, especially in spelling and grammar." },
    { term: "Borrowing", definition: "Adoption of words from another language, e.g. 'rendezvous' from French." },
  ],
  concepts: [
    {
      id: "el11-u4-historical-change",
      title: "Historical change in English",
      skill: "Identify and explain how English grammar, vocabulary and spelling have changed over time.",
      lesson: {
        sections: [
          {
            heading: "Grammar and pronouns",
            body: "Early Modern English used 'thou/thee/thy' for singular address and '-eth' verb endings ('goeth', 'saith'). Modern English uses 'you' for all second persons and '-s' endings ('goes', 'says'). The loss of grammatical gender in nouns ('he', 'she', 'it' replacing 'he', 'heo', 'hit') is another major shift.",
          },
          {
            heading: "Spelling standardisation",
            body: "Before dictionaries existed, spelling varied wildly: 'musick', 'publick', 'honour' all once standard. The Great Vowel Shift changed pronunciation while spellings fossilised old sounds — which is why English spelling often does not match pronunciation ('knight', 'through', 'colonel').",
          },
          {
            heading: "Why change happens",
            body: "Change is driven by contact between speakers, trade, migration, technology and simply by children acquiring slightly different patterns from their parents. No single authority 'decides' change; dictionaries and grammars try to record and stabilise it, but usage always leads.",
          },
        ],
        keyFormulas: [
          { name: "Thou -> you", statement: "Second-person singular forms disappeared; 'you' became universal." },
          { name: "-eth -> -s", statement: "'Goeth' became 'goes'; '-eth' was an older third-person ending." },
          { name: "Great Vowel Shift", statement: "Pronunciation changed while spellings stayed, creating modern mismatches." },
        ],
        workedExample: {
          problem: "Explain two features of this line from an old text that mark it as historical English: 'Wherefore art thou Romeo?'",
          solution: "'Wherefore' means 'why' in older English (it does not mean 'for what reason' today in the same way, and students often misread it as 'where'). 'Thou' is the old second-person singular pronoun, now replaced by 'you', and 'art' is the old form of 'are'. Both features signal Early Modern English and would need glossing for a modern reader.",
        },
      },
      questions: [
        {
          id: "el11-u4-historical-change-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pronoun was used in older English for singular 'you'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ye"
                    },
                    {
                              "id": "b",
                              "text": "thou"
                    },
                    {
                              "id": "c",
                              "text": "it"
                    },
                    {
                              "id": "d",
                              "text": "we"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Archaic pronouns",
                              "statement": "'Thou/thee/thy' were Early Modern English singular forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Thou' was the nominative singular; 'ye' was plural/polite.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**(b)** thou.",
          "commonErrors": [
                    "Confusing 'thou' with 'ye' (a)."
          ]
},
        },
        {
          id: "el11-u4-historical-change-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain what is meant by 'semantic shift' and give one example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Semantic shift",
                              "statement": "Change in a word's meaning over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines semantic shift as a word's meaning changing across time.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Valid example, e.g. 'literally' now used for emphasis, or 'sick' meaning 'impressive'.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Semantic shift = a word's meaning changes over time; e.g. 'literally' used informally for emphasis.",
          "commonErrors": [
                    "Confusing semantic shift with spelling change."
          ]
},
        },
        {
          id: "el11-u4-historical-change-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "From an old play",
          "author": "William Shakespeare",
          "source": "Romeo and Juliet, Act 3 Scene 2 (adapted)",
          "text": "Gallop apace, you fire-ey'd steeds!\nAcross the dark Adria to the west;\nAnd in the bag a mouse, even a mouse,\nShall chance the better as she flees before you."
},
          stem: "Identify two features that mark this as Early Modern English and explain what each tells us about language change.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Archaic features",
                              "statement": "Old spellings and word forms signal a historical stage of English."
                    },
                    {
                              "kind": "skill",
                              "name": "Change analysis",
                              "statement": "Explaining what archaic features reveal about language evolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'fire-ey'd' uses an archaic spelling and hyphenation now standardised differently ('fiery').",
                              "evidence": "fire-ey'd",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Adria' is an old name for the Adriatic Sea — vocabulary has since changed or fallen out of use.",
                              "evidence": "the dark Adria",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Both show that vocabulary and spelling were less fixed; standardisation came later.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Archaic spellings ('fire-ey'd') and outdated vocabulary ('Adria') show that spelling and word meanings were still evolving toward modern standard English.",
          "commonErrors": [
                    "Identifying features without linking to language change."
          ]
},
        },
        {
          id: "el11-u4-historical-change-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why English spelling often does not match pronunciation today, using the concept of the Great Vowel Shift and standardisation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Great Vowel Shift",
                              "statement": "A historical change in vowel pronunciation."
                    },
                    {
                              "kind": "skill",
                              "name": "Standardisation",
                              "statement": "Spelling was fixed by printing and dictionaries after pronunciation had already changed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Great Vowel Shift changed how vowels were pronounced between roughly 1400 and 1700.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Spellings had already become conventional and did not change with the new pronunciations.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Printing and dictionaries later standardised spellings, 'fossilising' the older forms.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Examples: 'knight' (the k was once pronounced), 'through', 'colonel'.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Synthesis: pronunciation changed faster than spelling, producing modern mismatches.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Pronunciation shifted while spellings stayed fixed and were later standardised, so many spellings record older sounds rather than modern pronunciation.",
          "commonErrors": [
                    "Saying spelling 'changed' rather than stayed fixed.",
                    "No examples given."
          ]
},
        },
        {
          id: "el11-u4-historical-change-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Give the modern equivalents of: 'thou', 'art', 'goeth', '-est' endings.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why 'wherefore' is often misunderstood by modern readers.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Archaic forms",
                              "statement": "Old pronouns, verb forms and endings no longer current."
                    },
                    {
                              "kind": "skill",
                              "name": "Semantic change",
                              "statement": "Words can shift meaning, causing misreading."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "'thou' -> 'you'; 'art' -> 'are'; 'goeth' -> 'goes'.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "'-est' endings (e.g. 'goest', 'sayest') -> '-s' endings ('goes', 'says').",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Wherefore' originally meant 'why' or 'for what reason'.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Modern readers parse it as 'where' + 'for', misreading the meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Example of semantic shift: the word's meaning narrowed or became opaque over time.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Most modern equivalents accurate, including the '-est' ending pattern."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Few equivalents correct or meanings confused."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clearly explains the semantic-shift/'false friend' problem with apt examples."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Identifies that the meaning has changed but explains it vaguely or inaccurately."
                    }
          ],
"finalAnswer": "(a) thou=you, art=are, goeth=goes, -est=-s. (b) 'Wherefore' meant 'why'; modern readers misparse it because the word has changed meaning.",
          "commonErrors": [
                    "Leaving 'thou' unexplained.",
                    "Assuming 'wherefore' always meant 'where'."
          ]
},
        },
        {
          id: "el11-u4-historical-change-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words explaining how English has changed over the last 500 years, using at least three specific examples (pronouns, verbs, spelling, vocabulary).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Historical language knowledge",
                              "statement": "Concrete examples of change across grammar, lexis and spelling."
                    },
                    {
                              "kind": "skill",
                              "name": "Explanatory writing",
                              "statement": "Organised account of change and its causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Covers pronoun change: thou/thee/thy replaced by you.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Covers verb endings: -eth/-est replaced by -s/-es.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Covers spelling/standardisation: Great Vowel Shift, dictionaries fixing spellings.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Covers vocabulary: borrowing, neologisms, semantic shift.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Explains causes: contact, trade, printing, education.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear organisation and coherent paragraphing.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Introduces with a clear overview and concludes with a judgement about change.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "English changed through pronoun loss, verb-ending simplification, spelling standardisation after the Great Vowel Shift, and continuous vocabulary borrowing and semantic shift.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Three or more accurate examples, clear causes, well organised."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Some accurate examples with explanation; less organisation."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Few or vague examples; limited explanation."
                    }
          ],
          "commonErrors": [
                    "Only one type of change discussed.",
                    "No specific examples."
          ]
},
        },
      ],
    },
    {
      id: "el11-u4-neologisms-shift",
      title: "Technology, neologisms and semantic shift",
      skill: "Analyse how technology and culture create new words and shift meanings, and evaluate attitudes to language change.",
      lesson: {
        sections: [
          {
            heading: "Technology-driven neologisms",
            body: "New inventions create new words: 'selfie', 'blog', 'unfriend', 'vlog', 'crowdfund'. Many started as slang or blends and entered mainstream use within a decade — far faster than older words like 'telephone'. Blends ('brunch'), acronyms ('FOMO') and conversions ('to Google') are common modern formation patterns.",
          },
          {
            heading: "Semantic shift in action",
            body: "Words constantly shift meaning. 'Awesome' once meant 'inspiring awe', now means 'excellent'. 'Sick' shifted from 'ill' to 'impressive'. 'Literally' is increasingly used for emphasis even when untrue — a shift some people condemn. Pejoration ('silly' once meant 'blessed') and amelioration ('nice' once meant 'foolish') are technical names for downward and upward shifts.",
          },
          {
            heading: "Attitudes to change",
            body: "Prescriptivists argue change 'degrades' English; descriptivists argue change is natural and inevitable. Most educated commentary takes a middle path: acknowledging change while noting that some shifts cause genuine ambiguity. In exams, analyse how a writer's attitude to change reveals their values.",
          },
        ],
        keyFormulas: [
          { name: "Neologism drivers", statement: "Technology, social media, youth culture and global contact create new words." },
          { name: "Pejoration", statement: "A word's meaning shifts to something more negative over time." },
          { name: "Amelioration", statement: "A word's meaning shifts to something more positive over time." },
        ],
        workedExample: {
          problem: "Analyse the word 'unfriend' as an example of modern language change.",
          solution: "'Unfriend' is a conversion and prefixation: the social media term 'friend' (itself a verb on platforms) gained the negative prefix 'un-'. It entered mainstream English within years — a speed impossible before digital communication. Its spread shows how technology creates vocabulary that then generalises beyond its origin ('we unfriended at the party'). Some older speakers resist it as slang, but descriptively it is now standard informal English.",
        },
      },
      questions: [
        {
          id: "el11-u4-neologisms-shift-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a neologism?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A word borrowed from Latin"
                    },
                    {
                              "id": "b",
                              "text": "A newly coined word or phrase"
                    },
                    {
                              "id": "c",
                              "text": "A word that has disappeared from use"
                    },
                    {
                              "id": "d",
                              "text": "An old spelling of a word"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Neologism",
                              "statement": "A newly coined word or phrase."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Neologisms are new coinages, often technology-driven ('selfie', 'unfriend').",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**(b)** A newly coined word or phrase.",
          "commonErrors": [
                    "Confusing neologism with archaism (c)."
          ]
},
        },
        {
          id: "el11-u4-neologisms-shift-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain what 'semantic shift' means, using the word 'awesome' as an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Semantic shift",
                              "statement": "A change in a word's meaning over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines semantic shift as meaning change.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "'Awesome' originally meant 'inspiring awe' (reverence); now commonly means 'excellent' — a broadening/weakening shift.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Semantic shift is a change in meaning; 'awesome' moved from 'awe-inspiring' to 'very good'.",
          "commonErrors": [
                    "Describing spelling change instead of meaning change."
          ]
},
        },
        {
          id: "el11-u4-neologisms-shift-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "From a tech magazine",
          "author": "Written for Akademik Space",
          "source": "Article on new words",
          "text": "Within five years, 'unfriend' went from a piece of Silicon Valley jargon to a word your gran uses without thinking. 'Selfie', 'hashtag' and 'vlog' followed the same path — born online, absorbed into everyday speech, then into dictionaries. Linguists call this acceleration remarkable: words that once took a century to settle now colonise English in a single news cycle."
},
          stem: "Explain how this extract shows language change happening faster than in the past.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Neologism diffusion",
                              "statement": "New words spread from jargon to mainstream quickly."
                    },
                    {
                              "kind": "skill",
                              "name": "Change analysis",
                              "statement": "Explaining the acceleration of modern language change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Words move 'from jargon to everyday speech' within 'five years' — much faster than historical change.",
                              "evidence": "within five years",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Technology (the internet) is identified as the driver accelerating diffusion.",
                              "evidence": "colonise English in a single news cycle",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Dictionary acceptance ('then into dictionaries') shows how quickly neologisms become standard.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The extract shows neologisms moving from jargon to mainstream use and into dictionaries within years, driven by digital technology — a much faster rate than older language change.",
          "commonErrors": [
                    "Listing words without explaining the speed of change."
          ]
},
        },
        {
          id: "el11-u4-neologisms-shift-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the difference between pejoration and amelioration, and give an example of each (one may be debatable — justify your choice).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pejoration",
                              "statement": "Meaning shifts in a negative direction."
                    },
                    {
                              "kind": "definition",
                              "name": "Amelioration",
                              "statement": "Meaning shifts in a positive direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines pejoration: a word becomes more negative over time.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Valid pejoration example, e.g. 'silly' (once 'blessed/happy', now 'foolish') or 'villain' (once 'farm worker').",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Defines amelioration: a word becomes more positive over time.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Valid amelioration example, e.g. 'nice' (once 'foolish/ignorant', now 'pleasant') or 'sick' ('impressive').",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Justifies why the example fits the direction of shift.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Pejoration = meaning becomes more negative ('silly': blessed -> foolish); amelioration = more positive ('nice': foolish -> pleasant).",
          "commonErrors": [
                    "Examples given without historical justification.",
                    "Reversing the two terms."
          ]
},
        },
        {
          id: "el11-u4-neologisms-shift-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A teacher writes: 'Young people are ruining English with words like 'selfie' and 'vibe'.' Write a response evaluating this view, considering both prescriptivist and descriptivist attitudes to language change.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Prescriptivism vs descriptivism",
                              "statement": "One camp defends fixed standards; the other records actual usage."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluative response",
                              "statement": "Balancing the teacher's concern against evidence of natural change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies the teacher's view as prescriptivist: language has fixed correct forms.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Counters with descriptivist view: change is natural and every generation coins new words.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Notes that 'selfie'/'vibe' already entered dictionaries — evidence of acceptance, not 'ruin'.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Acknowledges legitimate concern: slang can be inappropriate in formal contexts, but register, not vocabulary, is the real issue.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Reaches a balanced judgement: change is inevitable; competence means choosing register appropriately.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
                    "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-6",
                              "descriptor": "Balances prescriptivist and descriptivist positions with reasoned evidence and reaches a nuanced judgement on language change."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Presents both sides but with thin evidence or a judgement that only partly follows from the argument."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "One-sided response, or assertion without engagement with how English actually changes."
                    }
          ],
"finalAnswer": "The teacher's view is prescriptivist; descriptively, new words are normal and these are now dictionary-recognised. The real skill is choosing register for context, not resisting change.",
          "commonErrors": [
                    "Fully endorsing or fully dismissing the teacher without balance.",
                    "No mention of register/context."
          ]
},
        },
        {
          id: "el11-u4-neologisms-shift-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words on how technology has changed the English language, covering at least two mechanisms (new words, semantic shift, abbreviations/acronyms) and evaluating whether this is a positive or negative development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Language change knowledge",
                              "statement": "Mechanisms of technological language change with examples."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluative writing",
                              "statement": "Balanced judgement supported by evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Covers at least one mechanism with examples (neologisms: 'selfie', 'unfriend'; acronyms: 'FOMO', 'LOL').",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Covers semantic shift or conversion ('to Google', 'vibe').",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Explains why digital communication accelerates diffusion (speed, global reach).",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Evaluates positively (expressiveness, efficiency) and/or negatively (ambiguity, informality creep).",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Reaches a clear, balanced conclusion.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Clear paragraphing and coherent organisation.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Technology drives neologisms, acronyms and semantic shifts at unprecedented speed; whether this is positive depends on whether speakers can still control register for context.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Two mechanisms with apt examples, clear causes, balanced evaluation."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "One or two mechanisms explained; partial evaluation."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague account with few examples."
                    }
          ],
          "commonErrors": [
                    "Only listing words with no analysis.",
                    "One-sided evaluation with no nuance."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el11-u4-language-change-notes",
      title: "Language change — notes",
      summary: "English changed through pronoun loss, verb endings, the Great Vowel Shift and modern technology-driven neologisms.",
      sections: [
        { heading: "Historical milestones", body: "Thou->you, -eth->-s, Great Vowel Shift changed pronunciation while spellings stayed fixed." },
        { heading: "Modern drivers", body: "Technology, social media and global contact create neologisms that spread in months, not centuries." },
        { heading: "Key terms", body: "Neologism, semantic shift, pejoration, amelioration, standardisation, borrowing." },
        { heading: "Exam tip", body: "Always link a language feature to what it reveals about the speaker, era or context." },
      ],
    },
  ],
};
