import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "el8-u7-lesson-7-3",
  code: "7-3",
  title: "Formal and Informal English",
  goal: "I CAN choose an appropriate register for an audience and explain how language varies in different contexts.",
  standards: ["KS3 English Language", "KS3 Spoken Language and Audience"],
  
  vocabulary: [
    { term: "Register", definition: "The level of formality chosen to suit an audience and purpose." },
    { term: "Formal English", definition: "Language used in official or respectful situations: full forms, precise vocabulary, careful structure." },
    { term: "Informal English", definition: "Relaxed language used with friends: contractions, slang, short sentences." },
    { term: "Standard English", definition: "The widely accepted form of English used in education, media and official contexts." },
    { term: "Dialect", definition: "A regional variety of language with its own vocabulary and grammar features." },
    { term: "Slang", definition: "Very informal words and phrases used in particular groups, often short-lived." },
    { term: "Idiolect", definition: "An individual's personal way of using language." },
    { term: "Audience", definition: "The person or group a piece of language is intended for." },
  ],
  concepts: [
    {
      id: "el8-u7-register",
      title: "Register and audience",
      skill: "Match formality to audience and purpose, and explain how writers signal register.",
      lesson: {
        sections: [
          {
            heading: "What register means",
            body: "**Register** is the level of formality a speaker or writer chooses. The same message can be delivered formally or informally depending on the **audience** and **purpose**. 'I would be grateful if you could send the report' is formal; 'send me the report, yeah?' is informal. Neither is 'wrong' — the question is whether it fits the situation.",
          },
          {
            heading: "Features of formality",
            body: "Formal English tends to use full forms ('do not' not 'don't'), precise vocabulary ('purchase' not 'buy'), longer sentences, no slang or exclamation marks, and respectful address ('Dear Sir or Madam'). Informal English uses contractions, colloquial phrases ('gonna', 'wanna'), shorter sentences, jokes and first names.",
          },
          {
            heading: "Choosing the register",
            body: "Ask three questions: Who is the audience? What is the purpose? What relationship do I have with them? A job application needs formal register; a message to a friend does not. Using the wrong register can confuse or offend — a slang-filled email to a head teacher will not be taken seriously.",
          },
        ],
        keyFormulas: [
          { name: "Register", statement: "Level of formality chosen to suit audience and purpose." },
          { name: "Formal markers", statement: "Full forms, precise vocabulary, longer sentences, no slang." },
          { name: "Informal markers", statement: "Contractions, colloquialisms, slang, short sentences." },
        ],
        workedExample: {
          problem: "Rewrite informally for a friend: 'I am writing to inform you that the meeting has been cancelled.'",
          solution: "An informal version might read: 'Hey, the meeting's off — see you next week!' It uses a contraction, a dash, a friendly opener and casual phrasing, all suitable for a friend but not for a formal notice.",
        },
      },
      questions: [
        {
          id: "el8-u7-register-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is the most formal way to ask someone to send a document?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Send me the doc, yeah?"
                    },
                    {
                              "id": "b",
                              "text": "Could you please send me the document?"
                    },
                    {
                              "id": "c",
                              "text": "I need that paper thing now."
                    },
                    {
                              "id": "d",
                              "text": "Gimme the file when you get a sec."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Register",
                              "statement": "Formality chosen to suit audience and purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Option (b) uses a polite full-form request and precise noun 'document' with no slang — clearly the most formal.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** 'Could you please send me the document?'",
          "commonErrors": [
                    "Choosing (c) because it 'sounds polite' — 'paper thing' is vague and informal."
          ]
},
        },
        {
          id: "el8-u7-register-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rewrite this sentence in formal English: 'I can't come to the thing on Friday, sorry.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Register change",
                              "statement": "Replace contractions, slang and vague words with full, precise forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Expand the contraction and use formal vocabulary: 'I am unable to attend the event on Friday.' or 'I will not be able to attend Friday's meeting.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Remove the casual apology or keep a polite one; 'the thing' must become a precise noun such as 'event', 'meeting' or 'function'.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "'I am unable to attend the event on Friday.' (Accept other accurate formal versions.)",
          "commonErrors": [
                    "Keeping 'can't' — contractions are informal.",
                    "Leaving 'the thing' vague instead of naming what is meant."
          ]
},
        },
        {
          id: "el8-u7-register-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a writer must think about their audience when choosing register, using one example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Audience and register",
                              "statement": "Register must match who will read or hear the language."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point: the same message needs different wording for different audiences because expectations differ.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: a letter to a head teacher needs formal register — full forms, polite phrasing, precise vocabulary.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explanation: informal language would confuse or offend and could make the writer seem disrespectful or unprofessional.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Audience determines register: a formal letter to a head teacher needs full forms and precise vocabulary, while slang would seem disrespectful and undermine the writer's purpose.",
          "commonErrors": [
                    "Saying 'people understand both' without explaining the risk of the wrong register."
          ]
},
        },
        {
          id: "el8-u7-register-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Rewrite the message 'We are holding a meeting about the new uniform on Tuesday at 3pm in Room 4' for two audiences: (a) a formal letter to parents, (b) a post on the school noticeboard for students.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Adapting register",
                              "statement": "Same message, different formality for different audiences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Formal version uses full forms and polite structure, e.g. 'Dear Parents, We are writing to inform you that a meeting regarding the new school uniform will take place on Tuesday at 3pm in Room 4.'",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "(b) Informal/noticeboard version is shorter and direct, e.g. 'Uniform meeting! Tuesday, 3pm, Room 4. Come along if you have questions.'",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both versions keep all key information (meeting, uniform, Tuesday, 3pm, Room 4) while matching their audience.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) 'Dear Parents, We are writing to inform you that a meeting about the new uniform will take place on Tuesday at 3pm in Room 4.' (b) 'Uniform meeting — Tuesday 3pm, Room 4. All welcome.'",
          "commonErrors": [
                    "Using the same wording for both audiences.",
                    "Losing key details (day, time, room) in one version."
          ]
},
        },
        {
          id: "el8-u7-register-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how a writer can signal that their writing is formal. Give four features and an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Signalling register",
                              "statement": "Word choice, contractions, sentence length and tone mark formality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Feature: full forms instead of contractions — 'do not' rather than 'don't'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Feature: precise, Latinate vocabulary — 'purchase' or 'commence' rather than 'buy' or 'start'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Feature: longer, well-structured sentences and no slang or exclamation marks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Feature: respectful, impersonal tone — 'It is requested that...' rather than direct commands.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Examples are accurate and clearly linked to each feature.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Four accurate features each with a clear example."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Three features with examples, or four features without examples."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Features listed vaguely or inaccurately."
                    }
          ],
          "finalAnswer": "Full forms ('do not'), precise vocabulary ('purchase'), longer structured sentences, and an impersonal respectful tone all signal formal register.",
          "commonErrors": [
                    "Listing features without examples.",
                    "Confusing formal with 'complicated' — formal is about appropriateness, not difficulty."
          ]
},
        },
        {
          id: "el8-u7-register-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question about register.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define 'register' and name the two main levels of formality.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Rewrite this text message as a formal email to a teacher: 'hey miss u got the hw?? its due tmrw lol'",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "A student argues: 'Formal English is always better than informal English.' Discuss this view, giving reasons for and against.",
                    "marks": 6
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
                              "statement": "The level of formality chosen to suit audience and purpose."
                    },
                    {
                              "kind": "skill",
                              "name": "Register judgement",
                              "statement": "No register is inherently better; appropriateness decides."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Register is the level of formality chosen to suit audience and purpose.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The two levels are formal and informal.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Accurate formal rewrite, e.g. 'Dear Miss [name], I was wondering whether you could confirm the deadline for the homework, as I believe it is due tomorrow. Kind regards, [name].'",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "All informal elements removed: no 'hey', 'u', 'hw', 'tmrw', 'lol'; polite full forms and clear request used.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "For the view: formal English suits official and professional contexts and shows respect.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Against the view: informal English is natural between friends and can build rapport; over-formality can seem cold or confusing.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Conclusion weighs both sides: appropriateness to audience matters more than a blanket rule.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Balanced discussion with clear reasons and a reasoned conclusion."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Some points for and against but limited development."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "One-sided or vague response."
                    }
          ],
          "finalAnswer": "(a) Register is the level of formality for audience and purpose; formal and informal are the two levels. (b) A polite full-form email asking for the homework deadline. (c) Formal English suits professional contexts, but informal suits friends; appropriateness decides.",
          "commonErrors": [
                    "In (b), keeping abbreviations like 'hw' or 'tmrw' in the formal version.",
                    "In (c), arguing one side only without engaging with the statement."
          ]
},
        },
      ],
    },
    {
      id: "el8-u7-language-variation",
      title: "Standard English, dialect and slang",
      skill: "Distinguish standard English, dialect and slang, and explain when each is appropriate.",
      lesson: {
        sections: [
          {
            heading: "Standard English and dialect",
            body: "**Standard English** is the widely accepted variety used in education, the media and official writing. **Dialect** is a regional variety of English with its own vocabulary, grammar and accent features — for example 'we was' or 'I done it' in some dialects. Dialect is not 'wrong' English; it is a legitimate variety that marks where and by whom someone comes from.",
          },
          {
            heading: "Slang and idiolect",
            body: "**Slang** is very informal vocabulary used within particular groups — 'bare', 'salty', 'ghost' — and it changes quickly. **Idiolect** is an individual's unique way of speaking. Both are appropriate in casual contexts but not in formal writing, where they can confuse readers or seem unprofessional.",
          },
          {
            heading: "Language change",
            body: "Language is always changing: new words enter, meanings shift, and slang sometimes becomes standard. 'Cool' and 'wicked' were once slang but are now ordinary words. Writers need to be aware of whether a word is current slang, dated slang, or fully accepted — using dated slang can make writing sound old-fashioned.",
          },
        ],
        keyFormulas: [
          { name: "Standard English", statement: "The accepted variety used in education, media and official contexts." },
          { name: "Dialect", statement: "A regional variety of English with its own features." },
          { name: "Slang", statement: "Informal group vocabulary that changes quickly." },
          { name: "Idiolect", statement: "An individual's personal way of using language." },
        ],
        workedExample: {
          problem: "Is 'I ain't going' acceptable in a formal letter? Explain.",
          solution: "No. 'Ain't' is non-standard and informal; it belongs to dialect or casual speech. A formal letter would use 'I am not going' or 'I will not be attending'. The meaning is clear, but the register does not suit the context.",
        },
      },
      questions: [
        {
          id: "el8-u7-language-variation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Standard English?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The only correct form of English"
                    },
                    {
                              "id": "b",
                              "text": "The widely accepted variety used in education and official contexts"
                    },
                    {
                              "id": "c",
                              "text": "English spoken with a particular accent"
                    },
                    {
                              "id": "d",
                              "text": "Old-fashioned English no longer used"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Standard English",
                              "statement": "The accepted variety used in education, media and official contexts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Standard English is defined by widespread acceptance in formal contexts, not by being the 'only correct' form.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The widely accepted variety used in education and official contexts.",
          "commonErrors": [
                    "Choosing (a) — Standard English is a convention, not a claim that other varieties are wrong."
          ]
},
        },
        {
          id: "el8-u7-language-variation-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give one example of slang and rewrite it in Standard English: 'That film was bare jokes.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Slang",
                              "statement": "Very informal group vocabulary that changes quickly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Bare' is slang meaning 'very' or 'extremely'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Standard English rewrite: 'That film was extremely funny.'",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "'Bare' is slang for 'very/extremely'; the sentence becomes 'That film was extremely funny.'",
          "commonErrors": [
                    "Translating 'bare' as 'naked' — slang meaning depends on context."
          ]
},
        },
        {
          id: "el8-u7-language-variation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain when it is appropriate to use slang and when it is not. Give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Slang appropriateness",
                              "statement": "Slang suits informal contexts with people who share the usage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Appropriate: casual conversation with friends or peers who understand the slang.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example of appropriate use: 'That goal was sick' among football-mad friends.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Inappropriate: formal writing, official letters or mixed audiences who may not understand or may be offended.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Slang is appropriate in informal talk with people who share it, like 'That goal was sick' among friends; it is inappropriate in formal writing where it confuses or alienates readers.",
          "commonErrors": [
                    "Saying slang is 'always wrong' — it is a legitimate variety in the right context."
          ]
},
        },
        {
          id: "el8-u7-language-variation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student writes in a formal essay: 'The character was proper gutted when it all kicked off.' Discuss whether this is effective writing. What might the writer achieve, and what might they lose?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Register in analytical writing",
                              "statement": "Slang in formal analysis risks confusing the reader."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluating language choices",
                              "statement": "Weigh the effect of a choice against its context."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "What it might achieve: the slang captures the character's voice or the informal tone of the source, and can add vividness.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "What it might lose: a formal essay's audience expects precise analysis; 'gutted' and 'kicked off' may be unclear or seem unprofessional.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Balanced judgement: effective only if the writer signals it deliberately (e.g. quoting the character) rather than using it as their own analytical voice.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The slang may capture the character's voice but risks confusing the formal essay's audience. It works only if clearly marked as quotation rather than the writer's own analysis.",
          "commonErrors": [
                    "Saying it is simply 'wrong' without considering the possible voice effect.",
                    "Ignoring that 'gutted' and 'kicked off' have specific informal meanings."
          ]
},
        },
        {
          id: "el8-u7-language-variation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain the difference between dialect, slang and idiolect, and give one example of each. Then explain why all three are valid forms of language.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dialect",
                              "statement": "A regional variety of English."
                    },
                    {
                              "kind": "definition",
                              "name": "Slang",
                              "statement": "Informal group vocabulary that changes quickly."
                    },
                    {
                              "kind": "definition",
                              "name": "Idiolect",
                              "statement": "An individual's personal way of using language."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dialect: regional variety, e.g. 'we was' or 'nowt' in Northern English.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Slang: group-based informal words, e.g. 'fam' or 'salty'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Idiolect: personal usage, e.g. one person's habit of saying 'anyway' or 'like' at the start of sentences.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "They are valid because language varies by region, group and individual; none is 'broken' English.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "All three differ from Standard English mainly in context of use, not in being errors.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Three accurate definitions with examples and a clear argument for validity."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Definitions mostly correct with some examples and limited argument."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Terms confused or no examples."
                    }
          ],
          "finalAnswer": "Dialect = regional variety ('we was'); slang = group informal words ('fam'); idiolect = personal usage ('like, anyway'). All are valid because language naturally varies.",
          "commonErrors": [
                    "Confusing dialect with accent — dialect includes grammar and vocabulary, not just sound."
          ]
},
        },
        {
          id: "el8-u7-language-variation-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question about language variation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define 'Standard English', 'dialect', 'slang' and 'idiolect'.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why a dialect form like 'we was going' is not necessarily 'wrong' English.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Discuss the view that 'slang should never be used in school writing'. Give reasons for and against.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Language varieties",
                              "statement": "Standard English, dialect, slang and idiolect each mark a different kind of variety."
                    },
                    {
                              "kind": "context",
                              "name": "Appropriateness",
                              "statement": "A variety's acceptability depends on context."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Standard English: the accepted variety used in education and official contexts.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Dialect: a regional variety with its own grammar and vocabulary.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Slang: informal group vocabulary that changes quickly.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Idiolect: an individual's personal way of using language.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Dialect is systematic within its community — 'we was' follows dialect grammar rules; it is a different variety, not a mistake.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "It signals regional or social identity and is appropriate in informal contexts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "For the view: school writing is often formal; slang can confuse markers and seem unprofessional.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Against the view: creative writing may need slang for voice; banning it removes a legitimate expressive tool.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Conclusion: slang is inappropriate in formal/analytical writing but may be justified in creative contexts when used deliberately.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Balanced argument with clear reasons and a nuanced conclusion."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Points for and against but limited development."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "One-sided or vague response."
                    }
          ],
          "finalAnswer": "(a) Definitions as above. (b) Dialect is systematic and legitimate, not an error. (c) Slang is unsuitable for formal writing but may serve voice in creative writing; context decides.",
          "commonErrors": [
                    "Treating dialect as 'bad grammar' rather than a different variety.",
                    "In (c), arguing absolutely without acknowledging context."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el8-u7-register-notes",
      title: "Register and language variation — notes",
      summary: "Register = formality for audience. Standard English is a convention; dialect, slang and idiolect are legitimate varieties whose acceptability depends on context.",
      sections: [
        { heading: "Register", body: "Match formality to audience: full forms and precise vocabulary for formal, contractions and slang for informal." },
        { heading: "Varieties", body: "Dialect = regional; slang = group-based and fast-changing; idiolect = personal." },
        { heading: "Key point", body: "No variety is 'wrong'; inappropriateness to context is the only issue." },
      ],
    },
  ],
};
