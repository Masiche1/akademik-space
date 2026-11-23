import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "el11-u4-lesson-4-1",
  code: "4-1",
  title: "Register and Audience: Formal and Informal Language",
  goal: "I CAN identify how writers adjust register to audience and purpose, and analyse the features that signal formality.",
  standards: ["4EA1 AO1", "4EA1 AO3", "4EA1 Paper 1"],
  
  vocabulary: [
    { term: "Register", definition: "The level of formality a writer chooses, shaped by audience and purpose." },
    { term: "Audience", definition: "The intended reader or listeners; the main force shaping register." },
    { term: "Purpose", definition: "What the writer wants the text to achieve: inform, persuade, entertain or instruct." },
    { term: "Contraction", definition: "A shortened form of two words, e.g. 'can't' for 'cannot'; informal." },
    { term: "Discourse marker", definition: "A linking word or phrase such as 'furthermore' or 'anyway' that signals relationships between ideas." },
    { term: "Passive voice", definition: "A sentence structure where the subject receives the action, e.g. 'the decision was made'; often formal." },
  ],
  concepts: [
    {
      id: "el11-u4-register-audience",
      title: "Register, audience and purpose",
      skill: "Deduce how a writer's choice of register is shaped by who the text is for and what it must do.",
      lesson: {
        sections: [
          {
            heading: "What register is",
            body: "Register is the degree of formality in a text. The same content can be written formally ('The council has approved the scheme') or informally ('The council's said yes to the plan'). Register is never accidental: writers choose it to suit their **audience** (who will read) and their **purpose** (what the text must achieve). A formal letter to a head teacher and a text to a friend can convey identical news in very different registers.",
          },
          {
            heading: "Reading register clues",
            body: "To analyse register, look at lexis (formal words like 'purchase' vs informal 'buy'), grammar (passive constructions, complex sentences vs contractions and fragments) and conventions (headings, salutations, emoji, slang). Then ask: why this register for this audience? 'Dear Sir or Madam' signals distance and officialdom; 'Hey!' signals intimacy.",
          },
          {
            heading: "Purpose shapes register too",
            body: "A text written to **persuade** often uses formal, authoritative register to command respect. A text written to **entertain** may use informal, playful register. A text to **inform** sits between. When analysing, always link register to both audience and purpose, not audience alone.",
          },
        ],
        keyFormulas: [
          { name: "Register equation", statement: "Audience + purpose = chosen level of formality." },
          { name: "Formality signals", statement: "Formal vocabulary, complex sentences, passive voice, standard conventions = formal register." },
          { name: "Informality signals", statement: "Contractions, slang, fragments, direct address, emojis = informal register." },
        ],
        workedExample: {
          problem: "Two texts announce the same school trip. Text A: 'Pupils are reminded that permission slips must be returned by Friday.' Text B: 'Don't forget your permission slip — Friday or you're not coming!' Analyse how register differs and why.",
          solution: "Text A uses formal register: passive 'are reminded', formal lexis 'permission slips must be returned', and an institutional voice suitable for a notice read by parents and staff. Text B uses informal register: contraction 'Don't', direct imperative, colloquial 'or you're not coming', and a playful threat suited to a message to friends. Both inform, but A distances the writer (an institution), while B creates urgency through familiarity. The difference shows how register serves audience: officialdom vs peer group.",
        },
      },
      questions: [
        {
          id: "el11-u4-register-audience-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is the BEST definition of 'register'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The topic of a text"
                    },
                    {
                              "id": "b",
                              "text": "The level of formality chosen to suit audience and purpose"
                    },
                    {
                              "id": "c",
                              "text": "The number of paragraphs in a text"
                    },
                    {
                              "id": "d",
                              "text": "The handwriting style of the writer"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Register",
                              "statement": "The degree of formality of language, shaped by audience and purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Register concerns formality, not topic, length or handwriting.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Level of formality suited to audience and purpose.",
          "commonErrors": [
                    "Confusing register with genre or topic (a, d)."
          ]
},
        },
        {
          id: "el11-u4-register-audience-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain, in one or two sentences, why a writer would choose an informal register when writing to close friends.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Audience shaping register",
                              "statement": "Intimate audiences invite informal, personal language."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Friends share context and expectations, so formality would create unnatural distance.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Contractions, slang and direct address build rapport and signal the relationship.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Informal register suits friends because it builds closeness and matches shared expectations.",
          "commonErrors": [
                    "Saying informal is 'easier' rather than more appropriate for the audience."
          ]
},
        },
        {
          id: "el11-u4-register-audience-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Two messages about the same event",
          "author": "Written for Akademik Space",
          "source": "Text messages between friends",
          "text": "MUM: Your cousin's wedding is on Saturday 14th June at 2pm in the church hall. Transport will be provided from the school car park. Formal attire is requested but not required.\n\nJAE: ok so saturday thing — my cousin's getting married!! u coming? it's at 2 in the church hall, we'll sort a lift from school if u want. wear nice stuff but no pressure lol"
},
          stem: "Compare the register of the two messages and explain how each suits its audience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Register features",
                              "statement": "Formal vocabulary and conventions vs contractions and slang."
                    },
                    {
                              "kind": "skill",
                              "name": "Audience analysis",
                              "statement": "Each message is shaped by who will read it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mum's message uses formal register: full date format 'Saturday 14th June', 'Formal attire is requested', passive 'Transport will be provided'.",
                              "evidence": "Formal attire is requested but not required",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This suits a family announcement read by mixed generations, needing clarity and authority.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Jae's message uses informal register: 'u', 'lol', 'sort a lift', exclamation marks and elision 'ok'.",
                              "evidence": "we'll sort a lift from school if u want",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Mum writes formally with precise details for a general family audience; Jae writes informally with slang and contractions for a close friend, where familiarity carries the meaning.",
          "commonErrors": [
                    "Describing only one message.",
                    "Listing features without linking to audience."
          ]
},
        },
        {
          id: "el11-u4-register-audience-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Two openings to a letter about a broken park bench",
          "author": "Written for Akademik Space",
          "source": "Model transactional openings",
          "text": "TEXT A (to the council): 'I am writing to bring to your attention a matter of some urgency: the bench on the north side of Victoria Park has been broken for several weeks and presents a hazard to residents.'\n\nTEXT B (to a neighbour): 'Have you seen the bench in the park? It's been falling apart for ages — someone could get hurt.'"
},
          stem: "Analyse how each writer adapts register to audience and purpose, and evaluate which is more likely to achieve its aim.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Formal vs informal features",
                              "statement": "Politeness markers and precise detail vs contractions and shared knowledge."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluative judgement",
                              "statement": "Weighing effectiveness against purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Text A uses formal register: 'I am writing to bring to your attention', 'a matter of some urgency', 'presents a hazard'.",
                              "evidence": "I am writing to bring to your attention",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This suits a council, which processes formal complaints; it is respectful and gives actionable detail.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Text B uses informal register: question opening, 'It's been falling apart for ages', shared assumption 'Have you seen'.",
                              "evidence": "Have you seen the bench in the park?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This suits a neighbour but is less likely to prompt official action because it lacks formality and precise detail.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Judgement: Text A is more effective for the purpose of obtaining council action; Text B is effective only for raising awareness informally.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Text A's formal register commands official attention and fits the council audience; Text B's informal register suits a neighbour but would not achieve the same practical result.",
          "commonErrors": [
                    "Judging without reference to audience or purpose.",
                    "Treating informal as simply 'worse'."
          ]
},
        },
        {
          id: "el11-u4-register-audience-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rewrite the following informal sentence in a formal register suitable for a letter to the head teacher: 'The science lab is totally busted — the sink's leaking and we can't do experiments.' Then explain two language changes you made and why they suit the new audience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Register transformation",
                              "statement": "Replacing informal lexis and contractions with formal equivalents."
                    },
                    {
                              "kind": "skill",
                              "name": "Audience-aware writing",
                              "statement": "Adjusting language to suit a formal institutional reader."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Formal rewrite, e.g. 'I am writing to report that the science laboratory is currently out of service: the sink is leaking and practical experiments cannot be conducted.'",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Explains removal of slang/emphasis 'totally busted' replaced by measured phrasing 'out of service'.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Explains contraction 'can't' expanded and 'we' framed more objectively ('experiments cannot be conducted').",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Links both changes to the head teacher's need for clear, professional, actionable information.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
                    "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-6",
                              "descriptor": "Fluent, genuinely formal rewrite; both language changes explained precisely and linked to the head teacher's need for clear, professional information."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Mostly formal rewrite with some explanation of changes; the link to audience is partial or one change is unexplained."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Rewrite remains largely informal, or changes are listed without explanation or audience awareness."
                    }
          ],
"finalAnswer": "A formal rewrite removes slang and contractions, adds a clear statement of impact, and respects the institutional audience.",
          "commonErrors": [
                    "Changing only vocabulary but keeping informal contractions.",
                    "Over-formalising into vague language."
          ]
},
        },
        {
          id: "el11-u4-register-audience-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Two accounts of a school garden project",
          "author": "Written for Akademik Space",
          "source": "School newsletter and student blog",
          "text": "NEWSLETTER: 'The gardening club has successfully completed its term of work. Over twelve weeks, members cultivated herbs and vegetables in the raised beds behind the dining hall, and the produce was donated to the local food bank. The project was funded by a grant from the town council and supervised by Mrs Adeyemi from the science department.'\n\nBLOG: 'Honestly, the gardening club was the best thing this term. Twelve weeks of getting our hands dirty, no exams, no pressure — and at the end we got to give all the veg we grew to the food bank. Mrs Adeyemi was so chill about everything. Wish every subject was like this.'"
},
          stem: "Read both accounts and answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two features of formal register in the newsletter.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the blogger's informal register creates a different impression of the same project.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Analyse how each writer's purpose shapes their choice of register.",
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
                              "name": "Register features",
                              "statement": "Formal lexis and passive voice vs slang and direct address."
                    },
                    {
                              "kind": "skill",
                              "name": "Purpose-driven analysis",
                              "statement": "Register follows what the text must achieve for its audience."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Formal vocabulary and measured verbs such as 'successfully completed', 'cultivated', 'donated'.",
                              "evidence": "successfully completed its term of work",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Passive/impersonal construction 'was funded by a grant' and 'supervised by Mrs Adeyemi'.",
                              "evidence": "was funded by a grant from the town council",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Slang and colloquial lexis ('so chill', 'best thing', 'honestly') create a personal, enthusiastic tone.",
                              "evidence": "Mrs Adeyemi was so chill about everything",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Informal contractions and dashes ('no exams, no pressure') mimic speech and create intimacy.",
                              "evidence": "no exams, no pressure",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Direct appeal 'Wish every subject was like this' positions the reader as a peer, not an official.",
                              "evidence": "Wish every subject was like this",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Overall effect: the same facts feel warmer, funnier and more personal in the blog.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Newsletter purpose is to inform and build institutional credibility, so formal register and precise detail serve parents and governors.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Blog purpose is to entertain and persuade peers, so informal register creates shared enthusiasm and relatability.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) Formal lexis ('successfully completed', 'cultivated') and passive, impersonal constructions ('was funded', 'supervised by'). (b) The blogger's slang, contractions and direct address make the project feel personal, relaxed and fun rather than official. (c) The newsletter informs an institutional audience formally; the blog entertains peers informally.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "9-10",
                              "descriptor": "Perceptive comparison of both registers, precise evidence, clear links to purpose and audience."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-8",
                              "descriptor": "Sound comparison with relevant evidence; some links to purpose."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Some relevant points; limited evidence or links to audience/purpose."
                    }
          ],
          "commonErrors": [
                    "Analysing only one text.",
                    "Listing features without explaining effect or purpose."
          ]
},
        },
      ],
    },
    {
      id: "el11-u4-formal-informal-features",
      title: "Features that signal formality and informality",
      skill: "Spot the concrete language features that mark a text as formal or informal and explain their effect.",
      lesson: {
        sections: [
          {
            heading: "Grammar and sentence features",
            body: "Formal writing favours complex sentences, subordinate clauses, passive voice ('the results were published') and standard punctuation. Informal writing favours contractions ('it's', 'won't'), fragments ('Long day.'), direct address ('you know what I mean?'), discourse markers like 'so', 'anyway', 'like' and non-standard grammar.",
          },
          {
            heading: "Lexis: the word choices",
            body: "Formal texts choose Latinate, precise vocabulary: 'purchase', 'approximately', 'terminate'. Informal texts choose Anglo-Saxon, everyday words: 'buy', 'about', 'end'. Slang, idioms ('piece of cake'), intensifiers ('really', 'totally') and taboo language all signal informality.",
          },
          {
            heading: "Conventions of presentation",
            body: "Text messages, blogs and social posts use emojis, initials ('u', 'lol'), hashtags and casual spelling ('cos', 'nite'). Formal texts use salutations ('Dear Sir'), headings, bullet points, full stops and standard spelling. Even layout carries register.",
          },
        ],
        keyFormulas: [
          { name: "Formal lexis", statement: "Precise, Latinate vocabulary: 'purchase', 'approximately', 'terminate'." },
          { name: "Informal lexis", statement: "Slang, idioms, intensifiers: 'buy', 'piece of cake', 'totally'." },
          { name: "Contraction test", statement: "Contractions and fragments signal informal register." },
        ],
        workedExample: {
          problem: "Identify the formal and informal features in: 'The results will be published on Friday. The kids will be over the moon — totally made our day.'",
          solution: "Formal features: passive 'will be published', standard spelling, full sentence with subject. Informal features: slang 'over the moon', intensifier 'totally', dash, and the colloquial 'made our day'. The sentence deliberately mixes registers: a formal announcement followed by a personal reaction, which is common in informal online writing that quotes official language.",
        },
      },
      questions: [
        {
          id: "el11-u4-formal-informal-features-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is most likely to appear in a FORMAL text?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "buy"
                    },
                    {
                              "id": "b",
                              "text": "purchase"
                    },
                    {
                              "id": "c",
                              "text": "grab"
                    },
                    {
                              "id": "d",
                              "text": "nick"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Register lexis",
                              "statement": "Formal texts use precise, Latinate vocabulary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Purchase' is the formal equivalent of 'buy'; 'grab' and 'nick' are informal.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** purchase.",
          "commonErrors": [
                    "Choosing a common word without checking its formality (a)."
          ]
},
        },
        {
          id: "el11-u4-formal-informal-features-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "List two features that signal an INFORMAL register in writing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Informal features",
                              "statement": "Contractions, slang, fragments, direct address."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two valid features, e.g. contractions ('can't').",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "And slang/idioms or fragments/direct address ('piece of cake', 'Long day.').",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "E.g. contractions and slang (or fragments, direct address, emojis).",
          "commonErrors": [
                    "Listing features of formal register by mistake."
          ]
},
        },
        {
          id: "el11-u4-formal-informal-features-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the effect of using the passive voice in the formal sentence 'The decision was announced on Monday.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Passive voice",
                              "statement": "Foregrounds the action/result and distances the agent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The passive puts 'the decision' first, emphasising the outcome rather than who made it.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It removes the agent, creating an impersonal, official tone appropriate to institutional contexts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This contributes to formal register and can suggest objectivity or authority.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The passive creates an impersonal, authoritative tone by emphasising the result and concealing the agent — a hallmark of formal register.",
          "commonErrors": [
                    "Calling the passive 'wrong' rather than analysing its effect."
          ]
},
        },
        {
          id: "el11-u4-formal-informal-features-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Two comments on a new app",
          "author": "Written for Akademik Space",
          "source": "App store reviews",
          "text": "REVIEW A (verified purchase): 'This application demonstrates considerable utility; however, its interface presents a steep learning curve for novice users. I would nonetheless recommend it to experienced users.'\n\nREVIEW B: 'this app is the BEST. took me 2 mins to figure out and it's so easy. 5 stars no notes.'"
},
          stem: "Analyse the language features that distinguish the two reviews and explain what each register suggests about the reviewer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Formal vs informal features",
                              "statement": "Latinate lexis and hedging vs slang, capitals and fragments."
                    },
                    {
                              "kind": "skill",
                              "name": "Register and identity",
                              "statement": "Register choices can signal the writer's persona and context."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Review A uses formal register: 'demonstrates considerable utility', 'presents a steep learning curve', 'nevertheless recommend'.",
                              "evidence": "demonstrates considerable utility",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Hedged, balanced judgement ('however', 'nevertheless') suggests a measured, analytical reviewer.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Review B uses informal register: capitals 'BEST', slang 'no notes', fragments 'took me 2 mins', colloquial 'it's so easy'.",
                              "evidence": "5 stars no notes",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The casual style suggests an enthusiastic, time-poor consumer writing for peers, not analysts.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Synthesis: identical purpose (recommendation) achieved through opposite registers, each matching a different implied audience.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Review A's Latinate, hedged formal register conveys measured expertise; Review B's slang, capitals and fragments convey casual enthusiasm. Both recommend the app but address different implied readers.",
          "commonErrors": [
                    "Describing features without linking them to the reviewer's persona or audience."
          ]
},
        },
        {
          id: "el11-u4-formal-informal-features-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Rewrite this informal sentence in formal register: 'The meeting got moved to Friday, so don't bother coming Thursday.'",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two specific changes you made and why they increase formality.",
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
                              "name": "Register transformation",
                              "statement": "Formal equivalents replace slang, contractions and casual grammar."
                    },
                    {
                              "kind": "skill",
                              "name": "Audience-aware rewriting",
                              "statement": "Adjusting language to suit a formal reader."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "E.g. 'Please note that the meeting has been rescheduled to Friday; attendance on Thursday is no longer required.'",
                              "marks": 3,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Got moved' replaced by 'has been rescheduled' — passive, precise formal verb.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Don't bother coming' replaced by 'attendance ... is no longer required' — removes contraction and casual imperative, adds politeness marker 'Please note'.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both changes distance and formalise the message for an institutional audience.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Accurate formal rewrite with most informal features removed."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Rewrite partially formal; informal contractions or slang remain."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Two specific changes identified, each with a clear reason linked to formality."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Changes listed but reasons missing, vague or incorrect."
                    }
          ],
"finalAnswer": "A formal rewrite uses precise verbs, removes contractions and slang, and adds a polite framing device.",
          "commonErrors": [
                    "Only partially formalising (keeping 'don't' or 'bother').",
                    "Adding unnecessary words without improving precision."
          ]
},
        },
        {
          id: "el11-u4-formal-informal-features-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student claims: 'Formal writing is always better than informal writing.' Write a response of about 200 words evaluating this claim, using examples of when each register is appropriate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Register appropriateness",
                              "statement": "Neither register is inherently superior; appropriateness depends on audience and purpose."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluative argument",
                              "statement": "Building a reasoned judgement with examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear position: register should match context; formal is not universally better.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Examples of formal appropriateness: official letters, legal documents, academic essays.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Examples of informal appropriateness: messages to friends, casual blogs, creative writing where voice matters.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Nuanced point: deliberate register mixing can be effective (formal report with informal quotation).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Conclusion links back to audience and purpose as the true test of 'better'.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Formal writing suits official, distant audiences; informal suits intimate ones. 'Better' means 'appropriate to audience and purpose', not more formal.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Balanced, well-argued evaluation with apt examples and a clear conclusion."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Mostly sound argument; some examples or limited nuance."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Simple agreement or disagreement with thin support."
                    }
          ],
          "commonErrors": [
                    "One-sided argument with no counterpoint.",
                    "Examples that do not illustrate register."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el11-u4-register-notes",
      title: "Register and audience — notes",
      summary: "Register = formality shaped by audience and purpose. Formal lexis/grammar vs contractions, slang, fragments.",
      sections: [
        { heading: "Key idea", body: "Always ask: who is this for, and what must it achieve? Register follows from both." },
        { heading: "Feature checklist", body: "Formal: Latinate lexis, passive voice, complex sentences, standard conventions. Informal: contractions, slang, fragments, direct address, emojis." },
        { heading: "Exam tip", body: "When analysing, name the feature, quote it, then explain the effect on the audience." },
      ],
    },
  ],
};
