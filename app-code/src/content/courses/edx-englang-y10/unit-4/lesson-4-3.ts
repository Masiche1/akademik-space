import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "el10-u4-lesson-4-3",
  code: "4-3",
  title: "Analysing and Presenting Spoken Language",
  goal: "I CAN analyse spoken language transcripts and plan, deliver and evaluate a formal oral presentation.",
  standards: ["4EA1 Paper 1", "4EA1 Spoken Language", "4EA1 AO1", "4EA1 AO2", "4EA1 AO4", "4EA1 AO5"],
  
  vocabulary: [
    { term: "Transcript", definition: "A written record of spoken language, including fillers and hesitations." },
    { term: "Hesitation", definition: "A pause or false start showing the speaker is thinking, such as 'um' or 'er'." },
    { term: "Colloquialism", definition: "Informal everyday wording, such as 'kids' or 'rubbish'." },
    { term: "Presentation", definition: "A formal spoken delivery to an audience, often with visual support." },
    { term: "Rehearsal", definition: "Practising a presentation before delivery to improve timing and confidence." },
    { term: "Self-evaluation", definition: "Reviewing one's own performance to identify strengths and improvements." },
  ],
  concepts: [
    {
      id: "el10-u4-transcripts",
      title: "Reading spoken language transcripts",
      skill: "Analyse how transcripts represent speech, including fillers, hesitations and colloquialisms.",
      lesson: {
        sections: [
          {
            heading: "What transcripts show",
            body: "A **transcript** is a written record of speech. Unlike edited writing, it preserves **fillers** ('um', 'er'), **hesitations** ('I was, I dunno'), **repetition** ('like, really hard') and **false starts**. These features are not mistakes; they are evidence of how speech is actually produced.",
          },
          {
            heading: "Spoken versus written features",
            body: "Speech tends to be **spontaneous**, **context-dependent** and **interactive**: speakers respond to listeners, use pronouns freely, and rely on shared context. Writing is planned, explicit and self-contained. Colloquialisms ('kids', 'rubbish', 'loads') mark informal spoken register.",
          },
          {
            heading: "Speaker labels and turns",
            body: "Transcripts label turns ('Interviewer:', 'Guest:') so readers can track who speaks. Analyzing a transcript means noting **who** speaks, **what** they say, and **how** the features (fillers, colloquialisms, repetition) shape tone and meaning.",
          },
        ],
        keyFormulas: [
          { name: "Filler", statement: "'um', 'er', 'like' — marks thinking time in spontaneous speech." },
          { name: "Hesitation", statement: "False starts and pauses showing the speaker is formulating ideas." },
          { name: "Colloquialism", statement: "Informal spoken wording such as 'kids' or 'loads'." },
        ],
        workedExample: {
          problem: "How does the interviewer's opening question in the podcast transcript reveal spontaneous speech?",
          solution: "'So, um, how did you start writing?' contains the filler 'um', showing the interviewer is thinking in real time rather than reading a script. The short, direct question is typical of conversational interview style. The guest's answer is even more revealing: 'I was, I dunno, maybe eleven?' shows a false start and self-correction, features impossible in planned writing but natural in speech.",
        },
      },
      questions: [
        {
          id: "el10-u4-transcripts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Interview with a teenage author",
          "author": "School podcast recording",
          "source": "Spoken language transcript",
          "text": "Interviewer: So, um, how did you start writing?\nGuest: Well, like, I started when I was, I dunno, maybe eleven? My gran used to read to me and I just, you know, wanted to try it myself.\nInterviewer: Was it difficult?\nGuest: Yeah, at first, like, really hard. I wrote this whole story and it was rubbish — honestly, proper rubbish. But my teacher said, 'keep going', so I did.\nInterviewer: What is your advice for people starting out?\nGuest: Erm, just write every day, even if it's rubbish. And read loads — like, way more than you think you need to."
},
          stem: "What does the word 'um' in the interviewer's first question indicate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The interviewer is reading from a script"
                    },
                    {
                              "id": "b",
                              "text": "The interviewer is hesitating or thinking"
                    },
                    {
                              "id": "c",
                              "text": "The interviewer is angry"
                    },
                    {
                              "id": "d",
                              "text": "The interviewer is formal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Filler",
                              "statement": "A word marking thinking time in spontaneous speech."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'um' is a hesitation showing the speaker is formulating the question.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The interviewer is hesitating or thinking.",
          "commonErrors": [
                    "Treating 'um' as a scripted or formal feature."
          ]
},
        },
        {
          id: "el10-u4-transcripts-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
          "title": "Interview with a teenage author",
          "author": "School podcast recording",
          "source": "Spoken language transcript",
          "text": "Interviewer: So, um, how did you start writing?\nGuest: Well, like, I started when I was, I dunno, maybe eleven? My gran used to read to me and I just, you know, wanted to try it myself.\nInterviewer: Was it difficult?\nGuest: Yeah, at first, like, really hard. I wrote this whole story and it was rubbish — honestly, proper rubbish. But my teacher said, 'keep going', so I did.\nInterviewer: What is your advice for people starting out?\nGuest: Erm, just write every day, even if it's rubbish. And read loads — like, way more than you think you need to."
},
          stem: "Explain the effect of the guest's false start 'I was, I dunno, maybe eleven?' in the transcript.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "False start",
                              "statement": "A speaker begins, abandons and restarts an utterance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The false start shows the guest is recalling the memory in real time, making the answer feel honest and spontaneous.",
                              "evidence": "I was, I dunno, maybe eleven?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It contrasts with polished writing, where such hesitation would be edited out.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The false start makes the guest sound genuine and unscripted, as real speech is.",
          "commonErrors": [
                    "Calling it an error rather than a natural spoken feature."
          ]
},
        },
        {
          id: "el10-u4-transcripts-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Interview with a teenage author",
          "author": "School podcast recording",
          "source": "Spoken language transcript",
          "text": "Interviewer: So, um, how did you start writing?\nGuest: Well, like, I started when I was, I dunno, maybe eleven? My gran used to read to me and I just, you know, wanted to try it myself.\nInterviewer: Was it difficult?\nGuest: Yeah, at first, like, really hard. I wrote this whole story and it was rubbish — honestly, proper rubbish. But my teacher said, 'keep going', so I did.\nInterviewer: What is your advice for people starting out?\nGuest: Erm, just write every day, even if it's rubbish. And read loads — like, way more than you think you need to."
},
          stem: "Identify three features of informal spoken language in the guest's final answer and explain their effect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Colloquial register",
                              "statement": "Informal wording marks casual spoken language."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Colloquialisms: 'just write every day', 'loads', 'rubbish' are informal.",
                              "evidence": "just write every day, even if it's rubbish",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The filler 'Erm' at the start shows thinking time.",
                              "evidence": "Erm, just write every day",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The emphatic 'like, way more' is informal intensification typical of speech.",
                              "evidence": "like, way more than you think",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Colloquialisms, fillers and emphatic informal phrasing create a friendly, accessible tone.",
          "commonErrors": [
                    "Identifying features without explaining their effect on tone."
          ]
},
        },
        {
          id: "el10-u4-transcripts-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Interview with a teenage author",
          "author": "School podcast recording",
          "source": "Spoken language transcript",
          "text": "Interviewer: So, um, how did you start writing?\nGuest: Well, like, I started when I was, I dunno, maybe eleven? My gran used to read to me and I just, you know, wanted to try it myself.\nInterviewer: Was it difficult?\nGuest: Yeah, at first, like, really hard. I wrote this whole story and it was rubbish — honestly, proper rubbish. But my teacher said, 'keep going', so I did.\nInterviewer: What is your advice for people starting out?\nGuest: Erm, just write every day, even if it's rubbish. And read loads — like, way more than you think you need to."
},
          stem: "Analyse how the transcript shows the difference between spontaneous speech and planned writing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Spontaneity",
                              "statement": "Speech contains hesitations and self-correction absent from writing."
                    },
                    {
                              "kind": "context",
                              "name": "Spoken vs written",
                              "statement": "Speech is interactive and unrehearsed; writing is planned."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fillers and hesitations ('um', 'I dunno', 'Erm') show real-time formulation impossible in edited writing.",
                              "evidence": "So, um, how did you start writing?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "False starts and repetition ('like, really hard') reveal thinking aloud rather than a finished text.",
                              "evidence": "Yeah, at first, like, really hard",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The guest's quoted speech ('keep going') shows direct, informal reporting typical of conversation.",
                              "evidence": "my teacher said, 'keep going'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Colloquialisms ('rubbish', 'loads') mark the casual register of speech.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The overall impression is of two people thinking together, not a polished written exchange.",
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
          "finalAnswer": "Fillers, false starts, repetition and colloquialisms mark the transcript as spontaneous speech, unlike planned writing.",
          "commonErrors": [
                    "Treating spoken features as errors rather than evidence of spontaneity."
          ]
},
        },
        {
          id: "el10-u4-transcripts-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Interview with a teenage author",
          "author": "School podcast recording",
          "source": "Spoken language transcript",
          "text": "Interviewer: So, um, how did you start writing?\nGuest: Well, like, I started when I was, I dunno, maybe eleven? My gran used to read to me and I just, you know, wanted to try it myself.\nInterviewer: Was it difficult?\nGuest: Yeah, at first, like, really hard. I wrote this whole story and it was rubbish — honestly, proper rubbish. But my teacher said, 'keep going', so I did.\nInterviewer: What is your advice for people starting out?\nGuest: Erm, just write every day, even if it's rubbish. And read loads — like, way more than you think you need to."
},
          stem: "How do the speaker labels ('Interviewer:', 'Guest:') and turn-taking in the transcript shape the reader's understanding? What might be lost in transcription?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Turn-taking",
                              "statement": "Transcripts label speakers to show who holds the floor."
                    },
                    {
                              "kind": "context",
                              "name": "Transcription limits",
                              "statement": "Written records cannot fully capture delivery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Labels make clear who asks and who answers, so the reader can track the exchange.",
                              "evidence": "Interviewer:",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The alternating short questions and longer answers show an interview format, not a monologue.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "What is lost: tone of voice, pace, pauses, gesture and facial expression — all part of the original speech.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The transcript preserves words but not performance, so analysis must infer delivery from features like fillers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This is why spoken-language analysis focuses on word choice and fillers as evidence of delivery.",
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
          "finalAnswer": "Labels reveal the interview structure; transcription preserves words but loses tone, pace and gesture, which must be inferred.",
          "commonErrors": [
                    "Assuming the transcript captures everything about the speech."
          ]
},
        },
        {
          id: "el10-u4-transcripts-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Interview with a teenage author",
          "author": "School podcast recording",
          "source": "Spoken language transcript",
          "text": "Interviewer: So, um, how did you start writing?\nGuest: Well, like, I started when I was, I dunno, maybe eleven? My gran used to read to me and I just, you know, wanted to try it myself.\nInterviewer: Was it difficult?\nGuest: Yeah, at first, like, really hard. I wrote this whole story and it was rubbish — honestly, proper rubbish. But my teacher said, 'keep going', so I did.\nInterviewer: What is your advice for people starting out?\nGuest: Erm, just write every day, even if it's rubbish. And read loads — like, way more than you think you need to."
},
          stem: "Read the podcast transcript and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two features of spontaneous speech in the guest's first answer.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the guest's language creates a friendly, approachable tone.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Analyse how the interviewer's questions shape the guest's responses.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate what a transcript cannot show about this conversation.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Spontaneous features",
                              "statement": "Fillers, false starts and colloquialisms mark unrehearsed speech."
                    },
                    {
                              "kind": "context",
                              "name": "Transcription limits",
                              "statement": "Written records capture words, not full performance."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "False start: 'I was, I dunno, maybe eleven?'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Repetition/emphasis: 'like, really hard'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Colloquialisms ('rubbish', 'loads') make the guest sound relaxed and honest.",
                              "evidence": "it was rubbish — honestly, proper rubbish",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Self-deprecating honesty ('proper rubbish') builds rapport with listeners.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Direct quoted speech ('keep going') adds vivid, personal detail.",
                              "evidence": "my teacher said, 'keep going'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Short, open questions ('how did you start', 'was it difficult') invite long, personal answers.",
                              "evidence": "Was it difficult?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The interviewer prompts with 'and how do you fund it' style follow-ups that keep the guest talking.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The neutral, non-leading questions let the guest's voice dominate the transcript.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "The transcript cannot show tone of voice, pace, pauses, gesture or facial expression.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "It also cannot show the listeners' reactions or the original audio's emphasis.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "1-2",
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
                              "marks": "1-3",
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
          "finalAnswer": "(a) False start and repetition. (b) Colloquialisms, self-deprecating honesty and quoted speech create approachability. (c) Short open questions invite personal, extended answers. (d) Transcripts lose tone, pace, gesture and listener reaction.",
          "commonErrors": [
                    "Ignoring what transcription cannot capture.",
                    "Treating fillers as errors."
          ]
},
        },
      ],
    },
    {
      id: "el10-u4-presentation",
      title: "Delivering a formal oral presentation",
      skill: "Plan, deliver and evaluate a formal presentation to a live audience.",
      lesson: {
        sections: [
          {
            heading: "Planning a presentation",
            body: "A good presentation starts with **clear objectives**: what should the audience know or feel by the end? Choose a **structure** (introduction, three points, conclusion), prepare **visual support** that aids rather than distracts, and **rehearse** to check timing. Aim for the allotted time, not under or over.",
          },
          {
            heading: "Engaging the audience",
            body: "Engagement comes from **direct address**, **rhetorical questions**, **anecdotes** and **varying pace and voice**. Look at the audience, use gestures, and pause before key points. Respond to the room: if listeners look confused, slow down or clarify. The plastic-pollution speech shows how signposting and a statistic on a slide work together.",
          },
          {
            heading: "Evaluating your own delivery",
            body: "After delivering, **self-evaluate**: Did I finish on time? Did I use signposting? Did I make eye contact? Did the audience respond? Use criteria such as clarity, engagement, timing and structure. Recording yourself or getting feedback helps identify improvements for next time.",
          },
        ],
        keyFormulas: [
          { name: "Presentation structure", statement: "Introduction, three signposted points, conclusion and recap." },
          { name: "Timing", statement: "Rehearse to finish at exactly the allotted time." },
          { name: "Engagement", statement: "Direct address, rhetorical questions, varied delivery and eye contact." },
        ],
        workedExample: {
          problem: "A student finishes a five-minute presentation in three minutes with no eye contact. What should they evaluate and improve?",
          solution: "The student should note three problems: (1) finishing early suggests too little content or poor pacing — add depth or slow down; (2) no eye contact disengages the audience — practise looking up from notes; (3) the short length suggests the structure was too thin — expand each of the three points. For next time, rehearse aloud with a timer, mark signposts in the script, and record a practice run to check delivery.",
        },
      },
      questions: [
        {
          id: "el10-u4-presentation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in planning a good presentation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Choosing a costume"
                    },
                    {
                              "id": "b",
                              "text": "Deciding what the audience should know or feel by the end"
                    },
                    {
                              "id": "c",
                              "text": "Writing as much as possible"
                    },
                    {
                              "id": "d",
                              "text": "Practising gestures only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Planning",
                              "statement": "Clear objectives come before content and delivery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defining the audience outcome shapes everything else in the presentation.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "**(b)** Deciding the audience outcome.",
          "commonErrors": [
                    "Starting with content before clarifying purpose."
          ]
},
        },
        {
          id: "el10-u4-presentation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why rehearsing a presentation is important.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rehearsal",
                              "statement": "Practice improves timing, confidence and delivery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rehearsal reveals timing problems before the real audience, so the speaker can adjust content.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "It builds familiarity with the material, reducing dependence on notes and increasing confidence.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Rehearsal checks timing, builds confidence and reduces reliance on notes.",
          "commonErrors": [
                    "Saying rehearsal is only about memorising words."
          ]
},
        },
        {
          id: "el10-u4-presentation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three techniques a speaker can use to engage a live audience during a presentation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Audience engagement",
                              "statement": "Techniques that involve listeners keep attention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Direct address ('you') makes listeners feel personally involved.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Rhetorical questions prompt listeners to think and respond mentally.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Varying pace, voice and using gestures prevents monotony and holds attention.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Direct address, rhetorical questions and varied delivery engage the audience.",
          "commonErrors": [
                    "Listing techniques without explaining their effect."
          ]
},
        },
        {
          id: "el10-u4-presentation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A speaker finishes a five-minute presentation in three minutes and rarely looks up from their notes. Analyse what this suggests about the delivery and what should be improved.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Delivery cues",
                              "statement": "Timing and eye contact signal preparation and engagement."
                    },
                    {
                              "kind": "skill",
                              "name": "Self-evaluation",
                              "statement": "Identifying weaknesses guides improvement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finishing early suggests the content was too thin or the pacing too fast; more depth or slower delivery is needed.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Rarely looking up breaks eye contact, making the delivery feel distant and disengaging the audience.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Dependence on notes suggests under-rehearsal; the speaker should practise until the structure is internalised.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "The short length also suggests the promised structure may not have been fully delivered.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Improvements: add depth to each point, rehearse with a timer, practise looking up, and record a run to check engagement.",
                              "marks": 1,
                              "markCode": "AO5"
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
          "finalAnswer": "The delivery suggests thin content, poor pacing and low confidence; the speaker should deepen points, rehearse timing and practise eye contact.",
          "commonErrors": [
                    "Criticising without offering concrete improvements."
          ]
},
        },
        {
          id: "el10-u4-presentation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how a speaker should respond if the audience looks confused during a presentation. Use examples of adjustments they could make.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Audience awareness",
                              "statement": "Speakers should adapt delivery to audience reactions."
                    },
                    {
                              "kind": "technique",
                              "name": "Clarification",
                              "statement": "Slowing down, repeating and simplifying aid understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Slow the pace and pause; confusion often comes from information delivered too quickly.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Repeat or rephrase the key point in simpler terms rather than pressing on.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Use an example or analogy to make an abstract point concrete.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Check understanding with a rhetorical question or a brief pause for questions.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Adjusting to the room shows confidence and responsiveness, not weakness.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "A speaker who monitors the audience delivers a more effective presentation than one who ignores reactions.",
                              "marks": 1,
                              "markCode": "AO5"
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
          "finalAnswer": "Slow down, rephrase, use examples and check understanding; adapting to confusion shows confidence and improves delivery.",
          "commonErrors": [
                    "Ignoring audience cues or continuing regardless."
          ]
},
        },
        {
          id: "el10-u4-presentation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You have been asked to give a five-minute presentation to your class on a topic of your choice. Plan and evaluate your approach.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the objective you would set for the audience.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe the structure you would use, including signposting.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain three techniques you would use to engage the audience.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Describe how you would evaluate your own delivery afterwards.",
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
                              "name": "Presentation planning",
                              "statement": "Objectives, structure, engagement and evaluation form a complete approach."
                    },
                    {
                              "kind": "technique",
                              "name": "Delivery",
                              "statement": "Engagement techniques involve the live audience."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A clear objective, e.g. 'by the end the class will understand three causes of climate change'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "a",
                              "reasoning": "The objective must be audience-focused and measurable.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Introduction with greeting and topic; three signposted points; conclusion with recap.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Signposting such as 'first', 'now', 'finally' guides listeners.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "The structure mirrors the plastic-pollution model: promise, deliver, recap.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Direct address and rhetorical questions to involve listeners.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Varied pace, voice and gestures to prevent monotony.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Visual support (slides/images) that aids rather than distracts.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "d",
                              "reasoning": "Check timing, signposting, eye contact and audience response against criteria.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "Use feedback or a recording to identify improvements for next time.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "1-2",
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
                              "marks": "1-3",
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
          "finalAnswer": "(a) A clear audience outcome. (b) Introduction, three signposted points, conclusion and recap. (c) Direct address, rhetorical questions, varied delivery and visuals. (d) Evaluate timing, structure, engagement and response; use feedback to improve.",
          "commonErrors": [
                    "Planning content without an audience objective.",
                    "Forgetting to evaluate after delivery."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u4-transcript-presentation-notes",
      title: "Transcripts and presentations — notes",
      summary: "Transcripts preserve spoken features (fillers, false starts, colloquialisms); presentations need objectives, structure, engagement and evaluation.",
      sections: [
        { heading: "Key idea", body: "Spoken language is spontaneous and interactive; transcripts capture words but not full performance." },
        { heading: "Spoken features", body: "Fillers, hesitations, repetition and colloquialisms are normal features of speech, not errors." },
        { heading: "Presentations", body: "Plan objectives, signpost structure, engage with direct address and varied delivery, then self-evaluate." },
      ],
    },
  ],
};
