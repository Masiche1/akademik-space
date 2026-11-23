import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "el10-u4-lesson-4-1",
  code: "4-1",
  title: "Audience, Purpose and Tone in Speech",
  goal: "I CAN analyse how speakers adapt language, tone and register to different audiences and purposes.",
  standards: ["4EA1 Paper 1", "4EA1 Spoken Language", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],
  
  vocabulary: [
    { term: "Audience", definition: "The people a speaker is addressing; shape their knowledge, expectations and reactions." },
    { term: "Purpose", definition: "The reason for speaking: to inform, persuade, entertain or instruct." },
    { term: "Register", definition: "The level of formality chosen to suit the audience and occasion." },
    { term: "Tone", definition: "The speaker's attitude towards the subject and audience, such as friendly, serious or urgent." },
    { term: "Direct address", definition: "Speaking directly to the listener using 'you' and 'your'." },
    { term: "Inclusive language", definition: "Wording that includes everyone, such as 'everyone' or 'we', rather than excluding groups." },
  ],
  concepts: [
    {
      id: "el10-u4-audience-purpose",
      title: "Audience and purpose in speech",
      skill: "Explain how speakers choose language to suit a particular audience and purpose.",
      lesson: {
        sections: [
          {
            heading: "Why audience matters",
            body: "A speaker who knows their audience adapts three things: the **vocabulary** (simple or specialist), the **examples** (familiar or unfamiliar), and the **level of detail** (basic or in-depth). A Year 10 speaker addressing Year 7 students must explain GCSE options from scratch; the same speaker addressing parents can assume knowledge of qualifications.",
          },
          {
            heading: "Signs of audience adaptation",
            body: "Look for **direct address** ('you will know', 'come find me'), **inclusive pronouns** ('we', 'everyone'), **rhetorical questions** that check understanding, and **shared references** ('assembly', 'lunch'). Formal vocabulary and complete sentences signal a formal register; contractions and slang signal an informal one.",
          },
          {
            heading: "Purpose shapes language",
            body: "The speaker's purpose decides what the language must do. To **inform**, use clear sequencing and definitions. To **persuade**, use emotive words, rhetorical questions and direct appeals. To **entertain**, use humour, anecdotes and a lively tone. In the assembly speech, the purpose is to inform and advise, so the speaker uses simple structures and a friendly tone.",
          },
        ],
        keyFormulas: [
          { name: "Audience", statement: "Speakers adapt vocabulary, examples and detail to what the audience knows and expects." },
          { name: "Purpose", statement: "Inform, persuade or entertain — the purpose determines the language choices." },
          { name: "Direct address", statement: "Using 'you' and 'your' builds a personal link between speaker and listeners." },
        ],
        workedExample: {
          problem: "How does the speaker in the assembly speech adapt the language to the audience?",
          solution: "The speaker uses informal, friendly language suited to students: contractions and casual phrases such as 'you lot' and 'no way around that one' keep the tone relaxed. Direct address ('you will know', 'come find me at lunch') makes the speech personal, and 'my top tip' creates the feel of advice from a peer rather than an authority. Examples are school-based and familiar, such as Art, Drama and choosing three GCSE options, so listeners need no outside knowledge.",
        },
      },
      questions: [
        {
          id: "el10-u4-audience-purpose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "A whole-school assembly speech",
          "author": "Year 10 student speaker",
          "source": "Spoken language transcript",
          "text": "Good morning everyone, and thanks for staying back — I know lunch is usually when you lot get to relax, so I will keep this quick.\n\nBy the end of today you will know exactly which GCSE options you can pick and how to choose the three that suit you best. Let's get into it.\n\nEnglish Language and English Literature are compulsory — no way around that one. After that, you have got real choice. If you are into numbers and problem-solving, Maths and the sciences are solid. If you would rather create than calculate, Art, Drama or Music could be your thing. And if you want to work with people, Business or Psychology might fit.\n\nHere is my top tip: pick subjects you enjoy, not subjects you think sound clever. You will be studying them for two years, so enjoyment matters more than prestige.\n\nAny questions? Come find me at lunch — I brought biscuits."
},
          stem: "Who is the primary audience of this speech?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Year 7 and Year 8 students"
                    },
                    {
                              "id": "b",
                              "text": "Parents of students"
                    },
                    {
                              "id": "c",
                              "text": "Ofsted inspectors"
                    },
                    {
                              "id": "d",
                              "text": "University lecturers"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Audience",
                              "statement": "The people the speaker is addressing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "References to 'assembly', 'lunch' and choosing GCSE options show school students are being addressed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** School students, because the content and language assume they are choosing GCSE options.",
          "commonErrors": [
                    "Choosing parents because advice is given; the speaker addresses students directly."
          ]
},
        },
        {
          id: "el10-u4-audience-purpose-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
          "title": "A whole-school assembly speech",
          "author": "Year 10 student speaker",
          "source": "Spoken language transcript",
          "text": "Good morning everyone, and thanks for staying back — I know lunch is usually when you lot get to relax, so I will keep this quick.\n\nBy the end of today you will know exactly which GCSE options you can pick and how to choose the three that suit you best. Let's get into it.\n\nEnglish Language and English Literature are compulsory — no way around that one. After that, you have got real choice. If you are into numbers and problem-solving, Maths and the sciences are solid. If you would rather create than calculate, Art, Drama or Music could be your thing. And if you want to work with people, Business or Psychology might fit.\n\nHere is my top tip: pick subjects you enjoy, not subjects you think sound clever. You will be studying them for two years, so enjoyment matters more than prestige.\n\nAny questions? Come find me at lunch — I brought biscuits."
},
          stem: "Explain two ways the speaker shows awareness of the audience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Audience adaptation",
                              "statement": "Speakers adjust language to what listeners know and expect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The speaker explains GCSE choices from basics ('compulsory', 'real choice'), assuming no prior knowledge.",
                              "evidence": "English Language and English Literature are compulsory",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Casual references to school life ('lunch', 'biscuits') match a student audience.",
                              "evidence": "Come find me at lunch — I brought biscuits",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The speaker explains options from scratch and uses familiar school references, showing the language is pitched to students.",
          "commonErrors": [
                    "Listing features without explaining how they suit the audience."
          ]
},
        },
        {
          id: "el10-u4-audience-purpose-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "A whole-school assembly speech",
          "author": "Year 10 student speaker",
          "source": "Spoken language transcript",
          "text": "Good morning everyone, and thanks for staying back — I know lunch is usually when you lot get to relax, so I will keep this quick.\n\nBy the end of today you will know exactly which GCSE options you can pick and how to choose the three that suit you best. Let's get into it.\n\nEnglish Language and English Literature are compulsory — no way around that one. After that, you have got real choice. If you are into numbers and problem-solving, Maths and the sciences are solid. If you would rather create than calculate, Art, Drama or Music could be your thing. And if you want to work with people, Business or Psychology might fit.\n\nHere is my top tip: pick subjects you enjoy, not subjects you think sound clever. You will be studying them for two years, so enjoyment matters more than prestige.\n\nAny questions? Come find me at lunch — I brought biscuits."
},
          stem: "How does the speaker use direct address and inclusive language to engage the audience?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Direct address",
                              "statement": "'You' and inclusive pronouns create a personal connection with listeners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Repeated 'you' forms ('you will know', 'you are into') make each listener feel addressed personally.",
                              "evidence": "you will know exactly which GCSE options",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Everyone' and 'let's' create a shared group feeling, as if speaker and listeners are on the same side.",
                              "evidence": "Good morning everyone",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The closing invitation 'Come find me at lunch' is a direct appeal that keeps the connection going after the speech.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Direct address and inclusive pronouns make the speech feel personal and build rapport with student listeners.",
          "commonErrors": [
                    "Describing the features without linking them to engagement."
          ]
},
        },
        {
          id: "el10-u4-audience-purpose-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "A whole-school assembly speech",
          "author": "Year 10 student speaker",
          "source": "Spoken language transcript",
          "text": "Good morning everyone, and thanks for staying back — I know lunch is usually when you lot get to relax, so I will keep this quick.\n\nBy the end of today you will know exactly which GCSE options you can pick and how to choose the three that suit you best. Let's get into it.\n\nEnglish Language and English Literature are compulsory — no way around that one. After that, you have got real choice. If you are into numbers and problem-solving, Maths and the sciences are solid. If you would rather create than calculate, Art, Drama or Music could be your thing. And if you want to work with people, Business or Psychology might fit.\n\nHere is my top tip: pick subjects you enjoy, not subjects you think sound clever. You will be studying them for two years, so enjoyment matters more than prestige.\n\nAny questions? Come find me at lunch — I brought biscuits."
},
          stem: "Analyse how the speaker adapts the language and examples to a student audience rather than a formal or adult audience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Register",
                              "statement": "Informal vocabulary and contractions signal a relaxed, peer-to-peer register."
                    },
                    {
                              "kind": "context",
                              "name": "Shared knowledge",
                              "statement": "Examples drawn from school life assume the audience's experience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Casual, spoken phrases such as 'you lot' and 'no way around that one' are informal, avoiding stiff formal vocabulary.",
                              "evidence": "no way around that one",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Contractions and colloquial phrasing ('it's', 'would rather') imitate natural speech rather than written prose.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Examples are all school-based — Art, Drama, Music, choosing three options — so no specialist knowledge is needed.",
                              "evidence": "Art, Drama or Music could be your thing",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The 'top tip' is framed as friendly peer advice ('enjoyment matters more than prestige'), not official guidance.",
                              "evidence": "Here is my top tip",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The overall effect is that a fellow student is speaking, which makes the advice feel trustworthy and accessible.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "The informal register, contractions, school-based examples and peer-advice tone all show the speech is pitched precisely to students.",
          "commonErrors": [
                    "Identifying informal features but not explaining how they suit the audience."
          ]
},
        },
        {
          id: "el10-u4-audience-purpose-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "A whole-school assembly speech",
          "author": "Year 10 student speaker",
          "source": "Spoken language transcript",
          "text": "Good morning everyone, and thanks for staying back — I know lunch is usually when you lot get to relax, so I will keep this quick.\n\nBy the end of today you will know exactly which GCSE options you can pick and how to choose the three that suit you best. Let's get into it.\n\nEnglish Language and English Literature are compulsory — no way around that one. After that, you have got real choice. If you are into numbers and problem-solving, Maths and the sciences are solid. If you would rather create than calculate, Art, Drama or Music could be your thing. And if you want to work with people, Business or Psychology might fit.\n\nHere is my top tip: pick subjects you enjoy, not subjects you think sound clever. You will be studying them for two years, so enjoyment matters more than prestige.\n\nAny questions? Come find me at lunch — I brought biscuits."
},
          stem: "Compare the tone of the opening ('thanks for staying back — I know lunch is usually when you lot get to relax') with the tone of the advice ('pick subjects you enjoy'). Explain the effect of this shift.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tone shift",
                              "statement": "A change in tone can move listeners from relaxed to attentive."
                    },
                    {
                              "kind": "skill",
                              "name": "Tone analysis",
                              "statement": "Describing attitude precisely shows understanding of effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The opening is playful and conspiratorial: 'you lot' and the joke about lunch position the speaker as a friendly peer.",
                              "evidence": "you lot get to relax",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The dash and casual aside ('I'll keep this quick') signal the speaker respects the audience's time.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The advice section becomes more serious and sincere: 'top tip', 'enjoyment matters more than prestige' carry weight.",
                              "evidence": "enjoyment matters more than prestige",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The shift earns attention: listeners who were relaxed are now primed to take genuine advice seriously.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The contrast prevents the speech sounding preachy; sincerity lands because it is set against humour.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "The tone moves from playful peer banter to sincere advice; the contrast earns the audience's attention and makes the key message persuasive.",
          "commonErrors": [
                    "Describing both tones without explaining the effect of the contrast."
          ]
},
        },
        {
          id: "el10-u4-audience-purpose-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "A whole-school assembly speech",
          "author": "Year 10 student speaker",
          "source": "Spoken language transcript",
          "text": "Good morning everyone, and thanks for staying back — I know lunch is usually when you lot get to relax, so I will keep this quick.\n\nBy the end of today you will know exactly which GCSE options you can pick and how to choose the three that suit you best. Let's get into it.\n\nEnglish Language and English Literature are compulsory — no way around that one. After that, you have got real choice. If you are into numbers and problem-solving, Maths and the sciences are solid. If you would rather create than calculate, Art, Drama or Music could be your thing. And if you want to work with people, Business or Psychology might fit.\n\nHere is my top tip: pick subjects you enjoy, not subjects you think sound clever. You will be studying them for two years, so enjoyment matters more than prestige.\n\nAny questions? Come find me at lunch — I brought biscuits."
},
          stem: "Read the assembly speech and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the main purpose of the speech.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain two features of the language that show the audience is students.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Analyse how the speaker's tone changes during the speech and the effect of this.",
                    "marks": 4
          },
          {
                    "label": "d",
                    "prompt": "Evaluate how effectively the speaker engages the audience overall.",
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
                              "name": "Purpose and audience",
                              "statement": "Language choices reveal purpose and the intended listeners."
                    },
                    {
                              "kind": "technique",
                              "name": "Tone",
                              "statement": "The speaker's attitude shifts to serve the message."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "To inform and advise students about choosing GCSE options.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Casual register with colloquialisms ('you lot', 'no way around that one') suits students.",
                              "evidence": "no way around that one",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Direct address ('you will know') and inclusive 'let's' create rapport.",
                              "evidence": "let's get into it",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Familiar examples such as 'biscuits' and school subjects assume shared experience.",
                              "evidence": "I brought biscuits",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The opening is humorous and relaxed ('thanks for staying back', the lunch joke).",
                              "evidence": "when you lot get to relax",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The middle is informative with a clear list structure and simple sequencing.",
                              "evidence": "If you are into numbers",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The 'top tip' marks a shift to sincere persuasion, giving the advice weight.",
                              "evidence": "Here is my top tip",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The closing returns to informality ('I brought biscuits'), ending on warmth rather than formality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "Engagement is strong: humour, direct address, relatable examples and a memorable ending all suit the audience.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "The speech stays focused on its purpose; nothing distracts from the advice about choosing subjects.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "1-1",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "1-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "d",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) To inform and advise students about GCSE options. (b) Colloquial register, direct address and familiar examples all target students. (c) The tone moves from humorous to informative to sincere and back to warm. (d) The speaker engages effectively through humour, rapport and a clear, audience-focused message.",
          "commonErrors": [
                    "Retelling the speech rather than analysing language.",
                    "Describing tone without linking it to audience or purpose."
          ]
},
        },
      ],
    },
    {
      id: "el10-u4-tone-register",
      title: "Tone, register and voice in speech",
      skill: "Analyse tone, register and the speaker's voice in spoken language.",
      lesson: {
        sections: [
          {
            heading: "Register: formal and informal",
            body: "**Register** is the level of formality. A formal register uses complete sentences, precise vocabulary and respectful phrasing ('Could you tell us...'). An informal register uses contractions, fillers ('yeah', 'erm', 'like') and everyday vocabulary. Speakers often mix registers deliberately.",
          },
          {
            heading: "Tone and voice",
            body: "**Tone** is the attitude: friendly, serious, urgent, humorous. **Voice** is the distinctive quality of how someone speaks — word choice, rhythm, favourite phrases. In the youth-centre interview, the manager's voice is warm and down-to-earth, which suits a community project talking to local listeners.",
          },
          {
            heading: "Fillers and spoken features",
            body: "Spoken transcripts show **fillers** ('um', 'er', 'like', 'you know') that mark hesitation or thinking time, **repetition** for emphasis ('it is, it is been great'), and **tag questions** ('d'you know?') that invite agreement. These features are not errors in speech; they are part of how spoken language works.",
          },
        ],
        keyFormulas: [
          { name: "Register", statement: "The level of formality chosen to suit audience and occasion." },
          { name: "Tone", statement: "The speaker's attitude towards subject and audience." },
          { name: "Fillers", statement: "Spoken hesitations such as 'um' and 'like' that mark thinking time." },
        ],
        workedExample: {
          problem: "How does the manager's language in the youth-centre interview create an informal, approachable tone?",
          solution: "The manager mixes registers: answering the interviewer's formal question with relaxed, conversational speech. Fillers ('yeah', 'like', 'erm') and repetition ('it is, it is been great') make the delivery sound spontaneous and honest. The informal 'd'you know?' tag invites listeners to agree, while the modest detail 'two pounds a session' makes the project feel real and grounded rather than boastful.",
        },
      },
      questions: [
        {
          id: "el10-u4-tone-register-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Interview with a youth centre manager",
          "author": "Local radio interview",
          "source": "Spoken language transcript",
          "text": "Interviewer: So, tell us about the new youth centre.\nManager: Yeah, it is, it is been great, honestly. Like, kids come in, they do their homework, there is a kitchen — they can actually cook, which, you know, most of them have never done before.\nInterviewer: And how do you fund it?\nManager: Bit of everything — council grant, local businesses, and the kids themselves pay like two pounds a session. Keeps them invested, d'you know?\nInterviewer: What is next for the centre?\nManager: Erm, well, we are hoping to open the cafe properly next term, so watch this space."
},
          stem: "What does the phrase 'd'you know?' at the end of the manager's answer suggest about their register?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The register is formal and official"
                    },
                    {
                              "id": "b",
                              "text": "The register is informal and conversational"
                    },
                    {
                              "id": "c",
                              "text": "The manager is unsure of the facts"
                    },
                    {
                              "id": "d",
                              "text": "The manager is addressing a written audience"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Register",
                              "statement": "The level of formality in language."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The contracted tag question is typical of informal spoken English.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The phrase is informal and conversational.",
          "commonErrors": [
                    "Reading 'd'you know?' as genuine uncertainty; it is a conversational tag."
          ]
},
        },
        {
          id: "el10-u4-tone-register-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
          "title": "Interview with a youth centre manager",
          "author": "Local radio interview",
          "source": "Spoken language transcript",
          "text": "Interviewer: So, tell us about the new youth centre.\nManager: Yeah, it is, it is been great, honestly. Like, kids come in, they do their homework, there is a kitchen — they can actually cook, which, you know, most of them have never done before.\nInterviewer: And how do you fund it?\nManager: Bit of everything — council grant, local businesses, and the kids themselves pay like two pounds a session. Keeps them invested, d'you know?\nInterviewer: What is next for the centre?\nManager: Erm, well, we are hoping to open the cafe properly next term, so watch this space."
},
          stem: "Explain the effect of the fillers 'yeah', 'like' and 'erm' in the manager's answers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Fillers",
                              "statement": "Spoken hesitations that mark thinking time and create spontaneity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fillers make the speech sound spontaneous and unscripted, as real speech is.",
                              "evidence": "Yeah, it is, it is been great",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They create an honest, relaxed tone, making the manager seem approachable rather than rehearsed.",
                              "evidence": " Erm, well, we are hoping",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The fillers make the delivery sound natural and spontaneous, creating an honest, approachable tone.",
          "commonErrors": [
                    "Calling fillers mistakes; they are normal features of speech."
          ]
},
        },
        {
          id: "el10-u4-tone-register-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Interview with a youth centre manager",
          "author": "Local radio interview",
          "source": "Spoken language transcript",
          "text": "Interviewer: So, tell us about the new youth centre.\nManager: Yeah, it is, it is been great, honestly. Like, kids come in, they do their homework, there is a kitchen — they can actually cook, which, you know, most of them have never done before.\nInterviewer: And how do you fund it?\nManager: Bit of everything — council grant, local businesses, and the kids themselves pay like two pounds a session. Keeps them invested, d'you know?\nInterviewer: What is next for the centre?\nManager: Erm, well, we are hoping to open the cafe properly next term, so watch this space."
},
          stem: "Compare the interviewer's register with the manager's register and explain why the difference is appropriate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Register contrast",
                              "statement": "Different speakers in the same exchange can use different registers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The interviewer's questions are short, neutral and formulaic ('tell us about', 'what is next'), a professional broadcasting register.",
                              "evidence": "And how do you fund it?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The manager's answers are conversational, with fillers, contractions and the tag 'd'you know?'.",
                              "evidence": "Keeps them invested, d'you know?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The contrast is appropriate: the interviewer represents the formal medium while the manager represents the community voice.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The interviewer's professional register contrasts with the manager's informal, friendly voice, which suits a community project.",
          "commonErrors": [
                    "Describing registers without explaining why the contrast works."
          ]
},
        },
        {
          id: "el10-u4-tone-register-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Interview with a youth centre manager",
          "author": "Local radio interview",
          "source": "Spoken language transcript",
          "text": "Interviewer: So, tell us about the new youth centre.\nManager: Yeah, it is, it is been great, honestly. Like, kids come in, they do their homework, there is a kitchen — they can actually cook, which, you know, most of them have never done before.\nInterviewer: And how do you fund it?\nManager: Bit of everything — council grant, local businesses, and the kids themselves pay like two pounds a session. Keeps them invested, d'you know?\nInterviewer: What is next for the centre?\nManager: Erm, well, we are hoping to open the cafe properly next term, so watch this space."
},
          stem: "Analyse how the manager's language choices create an approachable and trustworthy tone.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tone",
                              "statement": "Word choice and phrasing convey the speaker's attitude."
                    },
                    {
                              "kind": "context",
                              "name": "Community voice",
                              "statement": "Down-to-earth language suits a local, youth-focused project."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Enthusiasm is shown through repetition and informal emphasis: 'it is, it is been great, honestly'.",
                              "evidence": "it is, it is been great, honestly",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Concrete, modest details ('two pounds a session', 'a kitchen') make the project feel genuine rather than promotional.",
                              "evidence": "pay like two pounds a session",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The inclusive 'kids themselves' credits the young people, building goodwill.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The tag question 'd'you know?' invites listener agreement, drawing them into the conversation.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "Enthusiastic repetition, modest concrete detail and inclusive phrasing create a warm, trustworthy community voice.",
          "commonErrors": [
                    "Listing informal features without linking them to approachability."
          ]
},
        },
        {
          id: "el10-u4-tone-register-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Interview with a youth centre manager",
          "author": "Local radio interview",
          "source": "Spoken language transcript",
          "text": "Interviewer: So, tell us about the new youth centre.\nManager: Yeah, it is, it is been great, honestly. Like, kids come in, they do their homework, there is a kitchen — they can actually cook, which, you know, most of them have never done before.\nInterviewer: And how do you fund it?\nManager: Bit of everything — council grant, local businesses, and the kids themselves pay like two pounds a session. Keeps them invested, d'you know?\nInterviewer: What is next for the centre?\nManager: Erm, well, we are hoping to open the cafe properly next term, so watch this space."
},
          stem: "How does the manager balance authority about the project with an informal, friendly manner? Refer to specific language choices.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Register mixing",
                              "statement": "Speakers can move between formal and informal levels within one exchange."
                    },
                    {
                              "kind": "skill",
                              "name": "Voice analysis",
                              "statement": "The speaker's distinctive way of expressing ideas shapes credibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Authority comes from concrete facts: funding sources listed precisely ('council grant, local businesses').",
                              "evidence": "council grant, local businesses",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The confident, declarative explanation of how the centre works signals competence despite informal phrasing.",
                              "evidence": "Keeps them invested",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Friendliness comes from fillers, contractions and the tag 'd'you know?', which soften the authority.",
                              "evidence": "which, you know, most of them have never done before",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The balance works because listeners trust a manager who sounds like a real person, not a spokesperson.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Hedging in the final answer ('Erm, well, hoping to') keeps the tone honest about uncertainty.",
                              "evidence": "we are hoping to open the cafe properly",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "The manager pairs precise factual knowledge with informal fillers and phrasing, making authority feel warm and credible.",
          "commonErrors": [
                    "Treating informality as a lack of authority rather than a deliberate balance."
          ]
},
        },
        {
          id: "el10-u4-tone-register-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Interview with a youth centre manager",
          "author": "Local radio interview",
          "source": "Spoken language transcript",
          "text": "Interviewer: So, tell us about the new youth centre.\nManager: Yeah, it is, it is been great, honestly. Like, kids come in, they do their homework, there is a kitchen — they can actually cook, which, you know, most of them have never done before.\nInterviewer: And how do you fund it?\nManager: Bit of everything — council grant, local businesses, and the kids themselves pay like two pounds a session. Keeps them invested, d'you know?\nInterviewer: What is next for the centre?\nManager: Erm, well, we are hoping to open the cafe properly next term, so watch this space."
},
          stem: "Read the interview transcript and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three features of informal spoken language in the manager's answers.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how the interviewer's register differs from the manager's.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Analyse how the manager's tone creates a particular impression of the youth centre.",
                    "marks": 4
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether the informal tone is effective for this audience.",
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
                              "name": "Spoken features",
                              "statement": "Fillers, contractions and tags mark informal speech."
                    },
                    {
                              "kind": "context",
                              "name": "Audience suitability",
                              "statement": "Informal language suits a community radio audience."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Fillers: 'yeah', 'like', 'erm', 'you know'.",
                              "evidence": "it is, it is been great, honestly",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Contractions and colloquialisms: 'd'you know?', 'kids', 'properly'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Repetition for emphasis: 'it is, it is been great'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The interviewer uses short, neutral, formulaic questions — a professional broadcasting register.",
                              "evidence": "So, tell us about the new youth centre",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The manager answers in relaxed conversational speech with fillers and tags.",
                              "evidence": "Bit of everything",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Enthusiasm: 'it is been great, honestly' conveys pride in the project.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Modest detail ('two pounds a session') makes the centre sound accessible and genuine.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Inclusive credit to 'the kids themselves' portrays the centre as youth-led and empowering.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Hedged optimism ('watch this space') ends on a warm, hopeful note.",
                              "evidence": "so watch this space",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "The informal tone is effective: it makes the manager trustworthy and the project feel community-rooted.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "1-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "d",
                              "level": "Level 2",
                              "marks": "1-1",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) Fillers, contractions/colloquialisms and repetition. (b) The interviewer is formal and formulaic; the manager is informal and conversational. (c) The warm, modest, inclusive tone portrays the centre as genuine and youth-led. (d) The tone is effective for a community audience.",
          "commonErrors": [
                    "Listing spoken features without effect.",
                    "Ignoring the contrast between the two speakers."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u4-audience-tone-notes",
      title: "Audience, purpose and tone — notes",
      summary: "Speakers adapt vocabulary, examples and register to the audience; tone shifts serve the message.",
      sections: [
        { heading: "Key idea", body: "Analyse how language suits the audience: vocabulary level, examples, formality and direct address." },
        { heading: "Register", body: "Formal = complete sentences and precise vocabulary; informal = contractions, fillers and colloquialisms." },
        { heading: "Tone", body: "Name the attitude precisely — friendly, urgent, humorous — and link it to effect." },
      ],
    },
  ],
};
