import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "el10-u8-lesson-8-1",
  code: "8-1",
  title: "Planning a Presentation",
  goal: "I CAN plan a spoken presentation with a clear purpose, audience awareness and effective structure.",
  standards: ["4EA1 Spoken Language Endorsement", "4EA1 AO1", "4EA1 AO3", "4EA1 AO5"],
  
  vocabulary: [
    { term: "Purpose", definition: "What the presentation is meant to achieve — to inform, persuade, entertain or argue." },
    { term: "Audience", definition: "The people listening; their age, knowledge and expectations shape everything you say." },
    { term: "Signposting", definition: "Verbal cues that tell listeners where you are: 'first', 'now', 'finally'." },
    { term: "Register", definition: "The level of formality of language — casual for friends, formal for officials." },
    { term: "Rhetorical question", definition: "A question asked for effect, not expecting an answer." },
    { term: "Hook", definition: "An opening designed to grab attention immediately." },
  ],
  concepts: [
    {
      id: "el10-u8-purpose-audience",
      title: "Purpose, audience and structure",
      skill: "Plan a presentation's purpose, analyse the audience and organise its structure.",
      lesson: {
        sections: [
          {
            heading: "Start with purpose and audience",
            body: "Before writing anything, answer two questions: **what is this presentation for?** (to inform, persuade, entertain, argue) and **who is listening?** A talk to Year 7 about library habits needs different language, examples and tone from the same topic to the school governors. Audience awareness is the single biggest factor in a successful presentation.",
          },
          {
            heading: "Structuring a presentation",
            body: "A spoken text needs a clear arc: **hook** (grab attention), **orientation** (what you'll cover), **development** (two or three points, each signposted), **conclusion** (summarise and end strongly). Unlike essays, listeners cannot re-read — so each point must be announced ('The second thing I noticed was...') and each section must feel complete before you move on.",
          },
          {
            heading: "Signposting and pacing",
            body: "Listeners rely on **signposts** to follow you: 'first', 'now', 'by contrast', 'finally'. Plan transitions deliberately. Also plan pauses: a silence before a key point lets it land. A presentation of five to seven minutes usually supports three main points — more and the audience loses the thread.",
          },
        ],
        keyFormulas: [
          { name: "Purpose", statement: "Inform, persuade, entertain or argue — decide before you plan." },
          { name: "Structure", statement: "Hook → orientation → signposted points → strong conclusion." },
          { name: "Signposting", statement: "Verbal cues ('first', 'now', 'finally') that guide listeners." },
        ],
        workedExample: {
          problem: "Plan the structure for a five-minute presentation arguing that the school library should stay open at lunch.",
          solution: "Purpose: persuade. Audience: students and staff. Structure: (1) Hook — '214 students borrowed zero books last month' (surprising statistic). (2) Orientation — 'the library isn't dying, it's changing'. (3) Point 1 — evidence of new uses (homework, essays). (4) Point 2 — what closing would lose. (5) Conclusion — reopen, reframed as a community hub. Each point signposted; ~60 seconds each.",
        },
      },
      questions: [
        {
          id: "el10-u8-purpose-audience-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first question you should answer when planning a presentation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What font should the slides use?"
                    },
                    {
                              "id": "b",
                              "text": "What is the presentation's purpose?"
                    },
                    {
                              "id": "c",
                              "text": "How long is the average word?"
                    },
                    {
                              "id": "d",
                              "text": "What time does it start?"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Purpose",
                              "statement": "Every presentation begins with its intended effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purpose determines content, tone and structure.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "**(b)** What its purpose is."
},
        },
        {
          id: "el10-u8-purpose-audience-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two ways a presentation to Year 7 students should differ from the same presentation to school governors.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Audience awareness",
                              "statement": "Language, examples and tone adapt to listeners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Language/register: simpler, more informal words for Year 7; more formal, precise terms for governors.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Examples and tone: relatable, vivid examples for students; evidence, data and implications for governors.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Simpler, informal language and relatable examples for Year 7; formal register, evidence and strategic implications for governors."
},
        },
        {
          id: "el10-u8-purpose-audience-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'signposting' matters more in a spoken presentation than in a written essay.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Signposting",
                              "statement": "Listeners cannot re-read, so they need verbal directions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Listeners cannot flick back; they need to know where they are.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Signposts ('first', 'now', 'finally') mark structure in real time.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "They also give the audience moments to absorb each point.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Listeners cannot re-read, so verbal signposts orient them in real time, mark each point and give them moments to absorb."
},
        },
        {
          id: "el10-u8-purpose-audience-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student plans a six-minute presentation on plastic pollution with nine main points. Identify three problems with this plan and suggest improvements.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Pacing and selection",
                              "statement": "Too many points overwhelm listeners; select and prioritise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nine points cannot each get meaningful time — roughly 40 seconds each, too shallow.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Listeners lose the thread without signposted groupings.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Improvement: select three strongest points, group related ideas, signpost each.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Nine points are too many for six minutes — each gets ~40 seconds and listeners lose the thread; group into three signposted points instead.",
          "commonErrors": [
                    "Listing problems without improvements."
          ]
},
        },
        {
          id: "el10-u8-purpose-audience-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Plan the structure of a five-minute presentation arguing that your school should start a lunchtime gardening club. Include purpose, audience, hook, points and conclusion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Presentation planning",
                              "statement": "Purpose + audience → hook → signposted points → conclusion."
                    },
                    {
                              "kind": "technique",
                              "name": "Hook",
                              "statement": "An opening statistic, question or image grabs attention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purpose and audience identified: persuade students/staff; appropriate register.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Hook planned (e.g. 'Our school throws away enough food for a garden').",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Two or three signposted points (food waste, wellbeing, skill-building) with evidence.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear conclusion with a call to action.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "7",
                              "descriptor": "Complete, audience-aware plan with hook, signposted points and strong conclusion."
                    },
                    {
                              "level": "Level 2",
                              "marks": "4-6",
                              "descriptor": "Workable plan missing one element such as the hook or signposts."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-3",
                              "descriptor": "Partial plan or topic list."
                    }
          ],
          "finalAnswer": "Purpose: persuade; audience: students/staff. Hook on food waste; three signposted points (waste, wellbeing, skills); conclusion calling for action.",
          "commonErrors": [
                    "Planning content without audience awareness.",
                    "No hook or weak conclusion."
          ]
},
        },
        {
          id: "el10-u8-purpose-audience-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "Excerpt from a class presentation",
          "author": "Year 10 student",
          "source": "Spoken Language practice transcript",
          "text": "Good morning everyone. Today I want to talk about something most of us use every day but never really think about: our school library.\n\nNow, I know what you're thinking — 'books, shhh, due dates.' But stay with me. Last month I counted: 214 students borrowed zero books. Zero. And yet the library was full every lunch. Full of people doing homework, meeting friends, and — and this is the part that surprised me — asking the librarian for help with essays.\n\nSo the library isn't dying. It's changing. And honestly? I think that's rather exciting."
},
          stem: "Read the scenario and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the purpose and audience for the library presentation described in the transcript.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Identify the hook and the two signposts used in the transcript.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain how the speaker adapts the presentation to the audience and purpose.",
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
                              "name": "Purpose and audience",
                              "statement": "Adaptation to listeners is the core of effective speaking."
                    },
                    {
                              "kind": "technique",
                              "name": "Hook and signposts",
                              "statement": "Opening devices and verbal cues structure a speech."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Purpose: to argue/inform that the library is changing, not dying — likely to persuade listeners of its value.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "a",
                              "reasoning": "Audience: classmates — informal, relatable framing ('I know what you're thinking').",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hook: the surprising statistic '214 students borrowed zero books'.",
                              "evidence": "214 students borrowed zero books",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Signposts/orientation: 'stay with me', 'the part that surprised me', 'that's rather exciting'.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Contractions, direct address and imagined objections ('books, shhh, due dates') suit classmates.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evidence is gathered personally ('I counted'), making it credible and audience-appropriate.",
                              "marks": 2,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with relevant application and terminology.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding with partial application.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with relevant application and terminology.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding with partial application.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with relevant application and terminology.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding with partial application.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) Purpose: persuade/inform about the library's changing role; audience: classmates. (b) Hook: the 'zero books' statistic; signposts: 'stay with me', 'the part that surprised me'. (c) Informal register, direct address, imagined audience objections and first-hand evidence suit the peer audience and persuasive purpose.",
          "commonErrors": [
                    "(a) Missing the persuasive purpose.",
                    "(b) Confusing hook with signpost."
          ]
},
        },
      ],
    },
    {
      id: "el10-u8-speech-language",
      title: "Language and register for speech",
      skill: "Choose vocabulary, rhetorical devices and register appropriate to a spoken presentation.",
      lesson: {
        sections: [
          {
            heading: "Spoken versus written language",
            body: "Speech is heard once, so it needs shorter sentences, concrete nouns and verbal signposts. Avoid dense subordinate clauses and unexplained jargon. Repetition is your friend: key phrases can be repeated for emphasis in a way that would feel heavy in an essay. Direct address — 'you', 'we', 'our' — builds inclusion.",
          },
          {
            heading: "Rhetorical devices for speeches",
            body: "Speeches thrive on **rhetorical questions** ('And is that acceptable?'), **triads** ('faster, cheaper, better'), **repetition** ('We said we would. We did not.'), **contrast** ('They promised change; we got concrete.') and **direct address**. These devices exist to be heard — rhythm matters as much as meaning.",
          },
          {
            heading: "Register and tone",
            body: "Match register to audience: informal for peers ('loads of', 'honestly'), formal for officials. Tone should match purpose — passionate for persuasion, measured for information. Read your sentences aloud during planning: if you stumble, the audience will too.",
          },
        ],
        keyFormulas: [
          { name: "Register", statement: "Formality level matched to audience — informal, neutral or formal." },
          { name: "Rhetorical question", statement: "A question asked for effect that prompts listeners to think, not answer." },
          { name: "Triad", statement: "A group of three for rhythm and memorability — 'faster, cheaper, better'." },
        ],
        workedExample: {
          problem: "Improve this written-style sentence for a speech: 'The utilisation of single-use plastics by the institution necessitates immediate reconsideration.'",
          solution: "Spoken version: 'We use throwaway plastic every single day — and we need to stop.' Shorter clauses, concrete 'plastic', direct 'we', repetition of 'single/stop'. Same meaning, but it can be heard and felt.",
        },
      },
      questions: [
        {
          id: "el10-u8-speech-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is most appropriate for a spoken presentation to classmates?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The utilisation of resources necessitates reconsideration."
                    },
                    {
                              "id": "b",
                              "text": "We need to talk about what we're doing with our stuff."
                    },
                    {
                              "id": "c",
                              "text": "Notwithstanding aforementioned factors, conclusions remain indeterminate."
                    },
                    {
                              "id": "d",
                              "text": "One must perambulate circumspectly whilst endeavouring to ascertain."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Spoken register",
                              "statement": "Speech needs short, concrete, direct sentences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Option (b) is short, concrete and direct — hearable once.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "**(b)** 'We need to talk about what we're doing with our stuff.'"
},
        },
        {
          id: "el10-u8-speech-language-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two reasons why repetition is more effective in a speech than in an essay.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Repetition in speech",
                              "statement": "Listeners cannot re-read, so repetition reinforces key ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Listeners hear once; repetition ensures the key phrase is not missed.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Rhythm and emphasis make repeated phrases memorable.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Listeners cannot re-read, so repetition ensures key ideas land and adds rhythm and emphasis."
},
        },
        {
          id: "el10-u8-speech-language-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this sentence as speech for Year 7 listeners, using a rhetorical question and direct address: 'Students should reduce their use of disposable water bottles.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Rhetorical devices",
                              "statement": "Questions and direct address engage listeners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Direct address: 'you' or 'we' — e.g. 'How many of you bought a water bottle this week?'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Concrete, spoken phrasing — 'throwaway bottles' rather than 'disposable water bottles'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Clear, hearable sentence a listener can follow once.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Model: 'How many bottles did you throw away this week? We buy them, we use them once, and we bin them — let's stop.'"
},
        },
        {
          id: "el10-u8-speech-language-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the effect of these two openings for a persuasive speech and explain which is stronger for a live audience: (A) 'It is a well-documented fact that adolescent sleep deprivation correlates with diminished cognitive performance.' (B) 'Last night, most of you got about six hours' sleep. Six. And tomorrow you've got tests.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Audience engagement",
                              "statement": "Concrete, direct openings engage listeners; abstract ones do not."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(A) is written-register: nominalised, impersonal, hard to hear once.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "(B) uses direct address, a concrete statistic, repetition ('Six.') and stakes ('tests').",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "(B) is stronger for a live audience because it is hearable, personal and urgent.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "(B) is stronger: direct address, a concrete personal statistic, repetition and immediate stakes engage a live audience; (A) is impersonal written-style language.",
          "commonErrors": [
                    "Choosing (A) for sounding 'sophisticated'."
          ]
},
        },
        {
          id: "el10-u8-speech-language-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a 60-second spoken introduction (about 120 words) for a presentation arguing that homework should be reduced. Use at least two rhetorical devices.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Rhetorical devices",
                              "statement": "Triads, repetition, rhetorical questions and direct address engage listeners."
                    },
                    {
                              "kind": "skill",
                              "name": "Spoken style",
                              "statement": "Short sentences, concrete language, spoken register."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opening hook addressing the audience directly.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Two rhetorical devices used effectively (e.g. rhetorical question, repetition, triad).",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Clear persuasive purpose signposted; spoken-style sentences.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Appropriate length and register for a live audience.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "7",
                              "descriptor": "Engaging, audience-aware spoken introduction with effective rhetorical devices."
                    },
                    {
                              "level": "Level 2",
                              "marks": "4-6",
                              "descriptor": "Workable introduction with some devices or audience awareness."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-3",
                              "descriptor": "Limited or written-style opening."
                    }
          ],
          "finalAnswer": "A ~120-word spoken introduction with a hook, two rhetorical devices, clear persuasive purpose and informal register.",
          "commonErrors": [
                    "Written-style density.",
                    "Devices used mechanically without effect."
          ]
},
        },
        {
          id: "el10-u8-speech-language-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "Excerpt from a class presentation",
          "author": "Year 10 student",
          "source": "Spoken Language practice transcript",
          "text": "Good morning everyone. Today I want to talk about something most of us use every day but never really think about: our school library.\n\nNow, I know what you're thinking — 'books, shhh, due dates.' But stay with me. Last month I counted: 214 students borrowed zero books. Zero. And yet the library was full every lunch. Full of people doing homework, meeting friends, and — and this is the part that surprised me — asking the librarian for help with essays.\n\nSo the library isn't dying. It's changing. And honestly? I think that's rather exciting."
},
          stem: "Read the presentation excerpt and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the register used and give two features that show it.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Find two rhetorical or spoken devices used and explain their effect.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "How does the speaker's language adapt the presentation to its audience? Support your answer with reference to the text.",
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
                              "name": "Register and devices",
                              "statement": "Spoken language adapts to audience through register and rhetorical devices."
                    },
                    {
                              "kind": "technique",
                              "name": "Direct address and statistics",
                              "statement": "'You', 'we' and concrete figures engage listeners."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Informal register suited to classmates.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "a",
                              "reasoning": "Features: contractions ('what you're thinking'), colloquial 'stayed with me', imagined audience voice.",
                              "marks": 3,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Direct address / imagined objection: 'I know what you're thinking — books, shhh, due dates'.",
                              "evidence": "books, shhh, due dates",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Repetition and emphasis: 'Full of people... Full of'; statistic '214... Zero. And yet'.",
                              "evidence": "Zero. And yet",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Peer audience addressed as 'you'/'we'; topic made personal through 'I counted'.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Anticipates and voices listeners' objections, then reframes ('rather exciting') to persuade.",
                              "marks": 2,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with relevant application and terminology.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding with partial application.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with relevant application and terminology.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding with partial application.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with relevant application and terminology.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding with partial application.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) Informal register: contractions, colloquialisms, imagined audience voice. (b) Imagined objection 'books, shhh, due dates'; emphatic repetition and the 'Zero' statistic. (c) Direct address, first-hand evidence and anticipating objections adapt the speech to classmates and its persuasive purpose.",
          "commonErrors": [
                    "(a) Not linking features to audience.",
                    "(b) Naming devices without effect."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u8-planning-notes",
      title: "Planning presentations — notes",
      summary: "Purpose and audience first; hook, signposted points, strong conclusion. Speech needs short sentences, repetition and rhetorical devices.",
      sections: [
        { heading: "Plan", body: "Purpose → audience → hook → points → conclusion; signpost every move." },
        { heading: "Language", body: "Short sentences, direct address, repetition, rhetorical questions; read aloud to test." },
      ],
    },
  ],
};
