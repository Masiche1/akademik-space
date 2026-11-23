import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "el11-u6-lesson-6-3",
  code: "6-3",
  title: "Spelling and Proofreading",
  goal: "I CAN apply spelling rules and patterns accurately and use systematic proofreading strategies to eliminate errors.",
  standards: ["4EA1 AO4", "4EA1 AO5", "4EA1 Paper 1"],
  
  vocabulary: [
    { term: "Homophone", definition: "Words that sound alike but differ in meaning/spelling: their/there/they're." },
    { term: "Silent letter", definition: "Letter not pronounced but required in spelling: 'knight', 'wrist', 'debt'." },
    { term: "Suffix rules", definition: "Patterns for adding endings: drop 'e' before vowel suffix, double consonant after short vowel." },
    { term: "Proofreading", definition: "Systematic final check for errors before submission." },
    { term: "Editing", definition: "Revising content and structure — different from proofreading (surface errors)." },
    { term: "Mnemonics", definition: "Memory aids for tricky spellings, e.g. 'because = big elephants can always understand small elephants'." },
  ],
  concepts: [
    {
      id: "el11-u6-spelling-patterns",
      title: "Spelling patterns and rules",
      skill: "Apply spelling rules for suffixes, silent letters and common patterns, and distinguish homophones.",
      lesson: {
        sections: [
          {
            heading: "Suffix rules",
            body: "Adding endings follows patterns: drop silent 'e' before vowel suffix ('hope' -> 'hoping', not 'hopeing'); keep 'e' before consonant suffix ('hopeful', 'safely'); double final consonant after short vowel + stressed syllable ('run' -> 'running', 'prefer' -> 'preferred'). 'I before E except after C' has exceptions ('weird', 'seize', 'height').",
          },
          {
            heading: "Silent letters and patterns",
            body: "Silent letters are common: 'kn-' ('knife', 'knee'), 'wr-' ('write', 'wrong'), 'mb' ('lamb', 'climb'), 'gh' ('night', 'thought'). Patterns help: 'i before e' ('believe', 'receive'), 'ough' has multiple sounds ('though', 'through', 'cough').",
          },
          {
            heading: "Homophones",
            body: "Homophones cause most errors: **their/there/they're**, **your/you're**, **its/it's**, **to/too/two**, **affect/effect**, **practice/practise** (noun/verb in British English), **accept/except**. No spelling rule helps — only careful checking. Read sentences aloud and expand contractions mentally.",
          },
        ],
        keyFormulas: [
          { name: "Suffix rule", statement: "Drop 'e' before vowel suffix; double consonant after short stressed vowel." },
          { name: "I before E", statement: "'I before E except after C' — with exceptions." },
          { name: "Homophone test", statement: "Read aloud and expand contractions to check meaning." },
        ],
        workedExample: {
          problem: "Correct these: 'I hopeing to recieve the package tomorow; their going to be late.'",
          solution: "'I hoping to receive the package tomorrow; they're going to be late.' — 'hopeing' -> 'hoping' (drop e before -ing); 'recieve' -> 'receive' (i before e after c); 'tomorow' -> 'tomorrow' (double r); 'their' -> 'they're' (they are). Four different spelling error types in one sentence.",
        },
      },
      questions: [
        {
          id: "el11-u6-spelling-patterns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which spelling is correct: 'hopeing' or 'hoping'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hopeing"
                    },
                    {
                              "id": "b",
                              "text": "hoping"
                    },
                    {
                              "id": "c",
                              "text": "hopping"
                    },
                    {
                              "id": "d",
                              "text": "hoppeing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Suffix rule",
                              "statement": "Drop silent 'e' before vowel suffix."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Hope' + 'ing' -> drop 'e' -> 'hoping'. 'Hopping' is from 'hop'.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "**(b)** hoping.",
          "commonErrors": [
                    "Keeping 'e' before vowel suffix (a)."
          ]
},
        },
        {
          id: "el11-u6-spelling-patterns-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Choose the correct homophone: '___ going to the park.' (their/there/they're)",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Homophones",
                              "statement": "their=possessive, there=place, they're=they are."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct: 'They're going to the park' = 'They are going'.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Explains 'their' = possession, 'there' = place — both wrong here.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "They're — contraction of 'they are'.",
          "commonErrors": [
                    "Using 'their' for 'they are'."
          ]
},
        },
        {
          id: "el11-u6-spelling-patterns-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'i before e except after c' rule and give one exception.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "I before E rule",
                              "statement": "Spelling pattern with exceptions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States rule: 'i' before 'e' ('believe', 'field') except after 'c' ('receive', 'ceiling').",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Gives valid exception: 'weird', 'seize', 'height', 'neighbour', 'either'.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Notes the rule is a guideline, not absolute — many exceptions exist.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "'I before E except after C' — e.g. 'believe' but 'receive'; exceptions include 'weird', 'seize', 'height'.",
          "commonErrors": [
                    "No exceptions given."
          ]
},
        },
        {
          id: "el11-u6-spelling-patterns-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Correct all spelling errors in this sentence and identify the type of each: 'The goverment recieves alot of complaints becuase the service is to bad.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Error identification",
                              "statement": "Recognising spelling error types."
                    },
                    {
                              "kind": "skill",
                              "name": "Spelling correction",
                              "statement": "Applying rules and patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'goverment' -> 'government' (missing 'n' — pattern: -ment suffix).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "'recieves' -> 'receives' (i before e after c).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "'alot' -> 'a lot' (two words — common error).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "'becuase' -> 'because' (transposition error).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "'to bad' -> 'too bad' (homophone/meaning error).",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "'The government receives a lot of complaints because the service is too bad.' — five different error types.",
          "commonErrors": [
                    "Missing some errors.",
                    "Not identifying error types."
          ]
},
        },
        {
          id: "el11-u6-spelling-patterns-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct: 'She writting a letter to her freind tomorow.'",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the spelling rules or patterns behind two of the errors.",
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
                              "name": "Spelling correction",
                              "statement": "Applying rules accurately."
                    },
                    {
                              "kind": "definition",
                              "name": "Spelling patterns",
                              "statement": "Rules for suffixes, doubling, homophones."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Correct: 'She is writing a letter to her friend tomorrow.' (or 'She wrote...')",
                              "marks": 3,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "'writting' -> 'writing' — drop 'e' before -ing ('write' -> 'writing').",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "'freind' -> 'friend' — 'i before e' rule (no 'c', so 'ie').",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "'tomorow' -> 'tomorrow' — double 'r' pattern.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "All three errors corrected accurately."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "One or more errors remain."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Explains the spelling rule/pattern behind at least two errors."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Rules unexplained or incorrectly stated."
                    }
          ],
"finalAnswer": "(a) 'She is writing a letter to her friend tomorrow.' (b) 'Writing' drops 'e'; 'friend' follows i-before-e; 'tomorrow' doubles 'r'.",
          "commonErrors": [
                    "'Writeing' with 'e' kept; 'freind' with wrong vowel order."
          ]
},
        },
        {
          id: "el11-u6-spelling-patterns-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words on strategies for improving spelling accuracy. Cover at least two methods (rules, patterns, mnemonics, proofreading) and explain why spelling matters in exams.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Spelling strategies",
                              "statement": "Rules, patterns, mnemonics, checking."
                    },
                    {
                              "kind": "skill",
                              "name": "Exam awareness",
                              "statement": "Why accuracy affects marks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two or more strategies explained.",
                              "marks": 3,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Examples given for at least one strategy.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Explains exam impact (credibility, marks, clarity).",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Improve spelling through rules (suffixes), patterns (i-before-e), mnemonics and proofreading; errors undermine credibility and cost marks.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Two strategies explained with examples and exam relevance."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Strategies present, partial examples."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague account."
                    }
          ],
          "commonErrors": [
                    "No strategies named.",
                    "No exam relevance."
          ]
},
        },
      ],
    },
    {
      id: "el11-u6-proofreading",
      title: "Proofreading and editing strategies",
      skill: "Use systematic proofreading techniques to catch and correct errors before submitting work.",
      lesson: {
        sections: [
          {
            heading: "Proofreading vs editing",
            body: "**Editing** revises content, structure and style — big-picture changes. **Proofreading** checks surface errors — spelling, punctuation, grammar — after editing is done. Do editing first (does it say what you want?), then proofreading (is it error-free?).",
          },
          {
            heading: "Systematic proofreading techniques",
            body: "Don't just re-read quickly — you see what you expect, not what's there. Techniques: (1) read **aloud** — your ear catches errors your eye misses; (2) read **backwards** — forces focus on individual words; (3) check **one error type at a time** — spellings, then punctuation, then agreement; (4) leave a **time gap** — fresh eyes see more; (5) use a **checklist** — your common errors.",
          },
          {
            heading: "Common exam errors",
            body: "The most frequent errors in exams: its/it's, their/there/they're, your/you're, to/too/two, affect/effect, missing apostrophes, comma splices, tense slips, subject-verb disagreement. Build a personal 'error list' — the mistakes YOU make — and check for those specifically.",
          },
        ],
        keyFormulas: [
          { name: "Edit then proofread", statement: "Content/structure first, surface errors last." },
          { name: "Read aloud", statement: "Ear catches what eye misses." },
          { name: "One error type at a time", statement: "Systematic checking beats general re-reading." },
          { name: "Personal error list", statement: "Check for YOUR recurring mistakes specifically." },
        ],
        workedExample: {
          problem: "You have 5 minutes left in an exam. What's your proofreading strategy?",
          solution: "Don't try to proofread everything — prioritise: (1) check your most common errors (your personal list), (2) read the introduction and conclusion carefully (first impressions and final thoughts), (3) scan for its/it's, their/there, your/you're, to/too, affect/effect, (4) check question numbers match answers, (5) if time remains, read aloud the first paragraph of each section.",
        },
      },
      questions: [
        {
          id: "el11-u6-proofreading-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between editing and proofreading?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They're the same thing"
                    },
                    {
                              "id": "b",
                              "text": "Editing = content/structure; proofreading = surface errors"
                    },
                    {
                              "id": "c",
                              "text": "Editing = spelling; proofreading = ideas"
                    },
                    {
                              "id": "d",
                              "text": "Proofreading comes first"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Editing vs proofreading",
                              "statement": "Content revision vs surface error check."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Editing is big-picture (content, structure); proofreading is surface (spelling, punctuation, grammar).",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "**(b)** Editing = content/structure; proofreading = surface errors.",
          "commonErrors": [
                    "Confusing the two (c, d)."
          ]
},
        },
        {
          id: "el11-u6-proofreading-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two proofreading techniques.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Proofreading techniques",
                              "statement": "Systematic error-catching methods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two valid: read aloud, read backwards, one error type at a time, time gap, checklist, spell-check.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Second valid technique.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "E.g. read aloud and check one error type at a time (or read backwards, time gap, checklist).",
          "commonErrors": [
                    "Saying 'read it again' — not a technique."
          ]
},
        },
        {
          id: "el11-u6-proofreading-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why reading your work aloud helps catch errors that silent reading misses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reading aloud",
                              "statement": "Auditory processing catches different errors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Silent reading often 'autocorrects' — you see what you expect, not what's written.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Reading aloud engages hearing — awkward phrasing, missing words, wrong punctuation become audible.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Grammar errors that 'sound wrong' are caught by ear but missed by eye.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Reading aloud bypasses visual autocorrection — your ear catches awkward grammar, missing words and punctuation errors your eye skips.",
          "commonErrors": [
                    "Saying it's just 'easier' without explaining mechanism."
          ]
},
        },
        {
          id: "el11-u6-proofreading-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "A paragraph with hidden errors",
          "author": "Written for Akademik Space",
          "source": "Student draft",
          "text": "The students' project was a great sucess. They're results impressed the judges, and its clear that the team worked hard. The goverment should of supported them more."
},
          stem: "Find and correct ALL errors in this paragraph.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Error detection",
                              "statement": "Systematic identification of all error types."
                    },
                    {
                              "kind": "skill",
                              "name": "Proofreading application",
                              "statement": "Applying knowledge to real text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'sucess' -> 'success' (double c pattern).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "'They're results' -> 'Their results' (possessive, not 'they are').",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "'its clear' -> 'it's clear' (it is).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "'goverment' -> 'government' (missing n).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "'should of' -> 'should have' (common error — 'of' vs 'have').",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "'The students' project was a great success. Their results impressed the judges, and it's clear that the team worked hard. The government should have supported them more.' — five errors.",
          "commonErrors": [
                    "Missing 'should of'.",
                    "Missing its/it's distinction."
          ]
},
        },
        {
          id: "el11-u6-proofreading-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "You have 5 minutes left in an exam. Outline your proofreading priorities.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why checking your personal 'error list' is more effective than general re-reading.",
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
                              "name": "Exam proofreading strategy",
                              "statement": "Prioritising limited time."
                    },
                    {
                              "kind": "skill",
                              "name": "Targeted checking",
                              "statement": "Personal errors beat general review."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Priorities: check most common errors, intro/conclusion, question numbers, key homophones (its/it's, their/there).",
                              "marks": 3,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Personal error list targets YOUR recurring mistakes — you know them, so you check specifically.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "General re-reading sees what you expect; targeted checking looks for known problems.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "More efficient — you spend time where errors actually occur.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Sensible prioritised proofreading strategy suited to five minutes."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Unprioritised or impractical list."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Explains clearly why a personal error list targets likely mistakes better than general re-reading."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Assertion without explanation of the mechanism."
                    }
          ],
"finalAnswer": "(a) Prioritise common errors, intro/conclusion, question numbers. (b) Personal error list targets known weaknesses — more efficient than general re-reading.",
          "commonErrors": [
                    "Trying to proofread everything equally."
          ]
},
        },
        {
          id: "el11-u6-proofreading-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words on effective proofreading strategies for exam conditions. Cover at least two techniques and explain how to prioritise when time is short.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Proofreading strategies",
                              "statement": "Techniques for catching errors."
                    },
                    {
                              "kind": "skill",
                              "name": "Time management",
                              "statement": "Prioritising under pressure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two or more techniques explained.",
                              "marks": 3,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Time-short prioritisation explained.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Personal error list mentioned.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 3,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Effective proofreading uses targeted techniques (read aloud, error checklist, one-type-at-a-time) and prioritises common errors and key sections when time is short.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Two techniques explained, prioritisation clear."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Techniques present, partial prioritisation."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague account."
                    }
          ],
          "commonErrors": [
                    "No prioritisation.",
                    "Generic 'check carefully' advice."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el11-u6-proofreading-notes",
      title: "Spelling and proofreading — notes",
      summary: "Suffix rules, i-before-e, homophones. Edit content first, then proofread surface errors using targeted techniques.",
      sections: [
        { heading: "Spelling rules", body: "Drop 'e' before vowel suffix; double consonant after short vowel; 'i before e except after c' (with exceptions)." },
        { heading: "Proofreading order", body: "Edit (content) → proofread (errors). Read aloud, one error type at a time, personal error list." },
        { heading: "Exam errors", body: "its/it's, their/there/they're, your/you're, to/too/two, should of->should have, affect/effect." },
      ],
    },
  ],
};
