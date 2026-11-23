import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "el8-u4-lesson-4-2",
  code: "4-2",
  title: "Planning and Delivering a Presentation",
  goal: "I CAN structure a presentation clearly and deliver it with confident voice, pace and body language.",
  standards: ["KS3 Spoken Language", "KS3 AO4", "KS3 AO5"],
  
  vocabulary: [
    { term: "Presentation", definition: "A structured spoken text designed for an audience." },
    { term: "Signposting", definition: "Verbal cues that guide listeners through the structure." },
    { term: "Paralanguage", definition: "Non-verbal vocal features such as pace, volume, pitch and pauses." },
    { term: "Eye contact", definition: "Looking at different members of the audience to build connection." },
    { term: "Filler", definition: "Repeated words such as 'um' or 'like' used when thinking." },
    { term: "Rehearsal", definition: "Practising a presentation before delivery." },
  ],
  concepts: [
    {
      id: "el8-u4-structuring-presentation",
      title: "Structuring a presentation",
      skill: "Plan an introduction, developed points and conclusion with clear signposting.",
      lesson: {
        sections: [
          {
            heading: "Purpose and audience",
            body: "Before planning, decide what the audience should know, think or do. A presentation to younger students needs simpler words and more examples than one to teachers.",
          },
          {
            heading: "Introduction, body and conclusion",
            body: "Open with a hook and your purpose. Develop two or three main points with examples. Conclude by summarising and giving a clear next step. Use signposts such as 'first', 'second' and 'finally' so listeners can follow.",
          },
        ],
        keyFormulas: [
          { name: "Three-part structure", statement: "Introduction, developed points, conclusion." },
          { name: "Signpost", statement: "A cue such as 'first', 'another point' or 'to conclude'." },
          { name: "Purpose statement", statement: "Tell the audience what they will learn or do." },
        ],
        workedExample: {
          problem: "Plan the structure for a presentation about a school garden.",
          solution: "Introduction: why the garden matters. Point 1: how it was built. Point 2: what it has changed. Point 3: how students can help. Conclusion: invite volunteering and recap the benefits.",
        },
      },
      questions: [
        {
          id: "el8-u4-structuring-presentation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of signposting in a presentation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To prove the speaker has memorised the script"
                    },
                    {
                              "id": "b",
                              "text": "To guide listeners through the structure"
                    },
                    {
                              "id": "c",
                              "text": "To make the presentation longer"
                    },
                    {
                              "id": "d",
                              "text": "To replace evidence with opinions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Signposting",
                              "statement": "Signposts help listeners follow spoken structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Signposts such as 'first' and 'finally' help listeners know where they are in the presentation.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** To guide listeners through the structure.",
          "commonErrors": [
                    "Choosing (a): signposting is for the audience, not the speaker."
          ]
},
        },
        {
          id: "el8-u4-structuring-presentation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three main parts of a presentation and give one feature of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Presentation structure",
                              "statement": "Introductions orient, bodies develop, conclusions resolve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Introduction includes a hook and purpose.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Body develops points with examples; conclusion summarises and gives a next step.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Introduction, developed points and conclusion."
},
        },
        {
          id: "el8-u4-structuring-presentation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is signposting especially important in speech rather than writing?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Spoken language",
                              "statement": "Listeners cannot re-read as easily as readers."
                    },
                    {
                              "kind": "convention",
                              "name": "Signposting",
                              "statement": "Cues make structure audible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Listeners cannot look back easily to check structure.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Signposts give spoken structure a clear audible shape.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "They help the audience know what is coming and what has been covered.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Because listeners cannot re-read, signposts make the structure clear and help them follow."
},
        },
        {
          id: "el8-u4-structuring-presentation-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
          "title": "Presentation opening: The school garden",
          "author": "Written for Akademik Space",
          "text": "Good morning everyone. Last term our school garden was a pile of empty pots and a broken fence. Today it has twelve raised beds, a worm farm and a small herb garden that the cooking club already uses.\n\nI am going to show you three things: first, how the garden was built; second, what it has changed for students; and third, what we need next to keep it growing.\n\nBy the end, you will know how to volunteer, what the garden needs and why a few afternoons of digging can make the whole school feel different."
},
          stem: "How does the speaker structure the opening of the presentation? Refer to the extract.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Presentation opening",
                              "statement": "A strong opening states context, purpose and structure."
                    },
                    {
                              "kind": "convention",
                              "name": "Signposting",
                              "statement": "Numbered points guide the audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The speaker uses a contrast between before and now to hook interest.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "a pile of empty pots"
                    },
                    {
                              "reasoning": "The speaker states the purpose by listing three points.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "I am going to show you three things"
                    },
                    {
                              "reasoning": "Signposts such as 'first', 'second' and 'third' make the structure clear.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "first, how the garden was built"
                    },
                    {
                              "reasoning": "The final sentence tells the audience what they will gain.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "you will know how to volunteer"
                    }
          ],
          "finalAnswer": "The opening hooks with contrast, states three points and uses signposts so listeners know what to expect.",
          "commonErrors": [
                    "Describing the garden rather than the speaker's structure."
          ]
},
        },
        {
          id: "el8-u4-structuring-presentation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a four-part outline for a five-minute presentation called 'Why our school should have a quiet room'. Include a hook, two main points and a call to action.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Planning a presentation",
                              "statement": "Organise ideas for a clear spoken purpose."
                    },
                    {
                              "kind": "convention",
                              "name": "Presentation structure",
                              "statement": "Use introduction, points, evidence and conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Includes a hook that interests the audience.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "States the purpose clearly.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Develops two main points with support.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Ends with a clear call to action or summary.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: Hook: 'Imagine finishing a difficult test while phones ring and chairs scrape.' Purpose: persuade the school to create a quiet room. Point 1: stress affects concentration. Point 2: a quiet room would be low-cost and useful. Conclusion: ask students to sign a petition or speak to the head of year.",
          "commonErrors": [
                    "Listing points with no order or purpose.",
                    "No call to action."
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear, relevant explanation supported by well-chosen evidence and developed evaluation."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Some understanding with some relevant evidence."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comment with few references."
                    }
          ]
},
        },
        {
          id: "el8-u4-structuring-presentation-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "Presentation opening: The school garden",
          "author": "Written for Akademik Space",
          "text": "Good morning everyone. Last term our school garden was a pile of empty pots and a broken fence. Today it has twelve raised beds, a worm farm and a small herb garden that the cooking club already uses.\n\nI am going to show you three things: first, how the garden was built; second, what it has changed for students; and third, what we need next to keep it growing.\n\nBy the end, you will know how to volunteer, what the garden needs and why a few afternoons of digging can make the whole school feel different."
},
          stem: "Answer all parts of this question about the presentation opening.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down two details about the school garden now.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the speaker uses structure to guide the audience.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the effectiveness of the opening.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Presentation analysis",
                              "statement": "Assess how structure and language affect an audience."
                    },
                    {
                              "kind": "technique",
                              "name": "Hook and signposting",
                              "statement": "Openings create interest and orient listeners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It has twelve raised beds.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "twelve raised beds"
                    },
                    {
                              "reasoning": "It includes a worm farm and herb garden.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "worm farm"
                    },
                    {
                              "reasoning": "The speaker lists three numbered points, giving a clear map.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "three things"
                    },
                    {
                              "reasoning": "Signposts such as 'first', 'second' and 'third' guide listeners.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "first, how the garden was built"
                    },
                    {
                              "reasoning": "The final paragraph states what the audience will know or do.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "you will know how to volunteer"
                    },
                    {
                              "reasoning": "The before-and-after contrast creates interest.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "was a pile of empty pots"
                    },
                    {
                              "reasoning": "The opening is effective because it creates curiosity with contrast.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "was a pile of empty pots"
                    },
                    {
                              "reasoning": "The three-point structure makes the presentation easy to follow.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "first, how the garden was built"
                    },
                    {
                              "reasoning": "The clear outcome ('you will know how to volunteer') gives listeners a reason to listen.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "you will know how to volunteer"
                    }
          ],
          "finalAnswer": "(a) Twelve raised beds; a worm farm and herb garden. (b) The speaker uses three numbered points and signposts to guide listeners, ending with a clear outcome. (c) The opening is effective because the contrast hooks interest, the structure is clear and the audience knows what they will gain.",
          "commonErrors": [
                    "Quoting without explaining effect.",
                    "Ignoring the final purpose statement."
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear, relevant explanation supported by well-chosen evidence and developed evaluation."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Some understanding with some relevant evidence."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comment with few references."
                    }
          ]
},
        },
      ],
    },
    {
      id: "el8-u4-delivery-confidence",
      title: "Delivery and confidence",
      skill: "Use voice, pace, eye contact and posture to deliver a presentation confidently.",
      lesson: {
        sections: [
          {
            heading: "Voice and pace",
            body: "Vary pace for emphasis, pause before key points and project your voice. Speaking too quickly can make ideas hard to follow; speaking too slowly can lose attention. Pauses let important words land.",
          },
          {
            heading: "Body language and fillers",
            body: "Stand upright, use open gestures and make eye contact with different parts of the audience. Avoid filling pauses with 'um' or 'like'; a silent pause sounds more confident. Manage nerves by preparing, rehearsing and focusing on the message rather than yourself.",
          },
        ],
        keyFormulas: [
          { name: "Paralanguage", statement: "Tone, pace, volume, pitch and pauses." },
          { name: "Eye contact", statement: "Looking at audience members to build trust and connection." },
          { name: "Filler", statement: "A hesitation word such as 'um' that can weaken delivery." },
        ],
        workedExample: {
          problem: "A speaker rushes through the ending. How could they improve it?",
          solution: "Slow down, pause before the final point, look at the audience and lower their voice slightly for emphasis rather than dropping to a whisper.",
        },
      },
      questions: [
        {
          id: "el8-u4-delivery-confidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is paralanguage?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The words written on slides"
                    },
                    {
                              "id": "b",
                              "text": "Non-verbal vocal features such as pace, tone and pauses"
                    },
                    {
                              "id": "c",
                              "text": "The topic of a presentation"
                    },
                    {
                              "id": "d",
                              "text": "A type of microphone"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Paralanguage",
                              "statement": "How something is said rather than what is said."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Paralanguage covers vocal delivery such as pace, tone, volume and pauses.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Non-verbal vocal features.",
          "commonErrors": [
                    "Choosing (a): slides are visual support, not paralanguage."
          ]
},
        },
        {
          id: "el8-u4-delivery-confidence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two ways a speaker can use pace and pauses effectively.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Delivery",
                              "statement": "Pace and pauses control emphasis and clarity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Slow down for important points so they are clear.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Pause before a key idea to let it land or signal a transition.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Slow for emphasis and pause before key points."
},
        },
        {
          id: "el8-u4-delivery-confidence-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this spoken sentence to remove fillers: 'Um, so, like, the garden, um, helps students, like, relax.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fluent speech",
                              "statement": "Remove hesitation fillers and use precise wording."
                    },
                    {
                              "kind": "convention",
                              "name": "Spoken clarity",
                              "statement": "Clear phrasing helps listeners follow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Removes 'um' and 'like'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Uses a clearer sentence structure.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Keeps the meaning: the garden helps students relax.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Model: 'The garden helps students relax.' or 'Our school garden gives students a calm place to relax.'",
          "commonErrors": [
                    "Leaving fillers or changing the meaning."
          ]
},
        },
        {
          id: "el8-u4-delivery-confidence-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
          "title": "Teacher's notes on a rehearsal",
          "author": "Written for Akademik Space",
          "text": "The speaker read most of the slides word for word. At the beginning the voice was clear, but by the final section the pace became very fast and several words were swallowed. The speaker kept both hands in pockets and looked only at the screen. When describing the new garden, the voice dropped almost to a whisper. There were long pauses in the wrong places, but the audience leaned forward whenever the speaker pointed at the photograph."
},
          stem: "Identify two weaknesses in the rehearsal and explain their effect on the audience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Presentation delivery",
                              "statement": "Evaluate how vocal and physical choices affect listeners."
                    },
                    {
                              "kind": "technique",
                              "name": "Paralanguage",
                              "statement": "Pace, volume and eye contact shape meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The speaker reads slides word for word, which can make the audience feel excluded.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "read most of the slides word for word"
                    },
                    {
                              "reasoning": "The fast final pace and swallowed words reduce clarity.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "the pace became very fast"
                    },
                    {
                              "reasoning": "Looking only at the screen and keeping hands in pockets reduces connection.",
                              "marks": 1,
                              "markCode": "AO3",
                              "evidence": "looked only at the screen"
                    },
                    {
                              "reasoning": "Dropping to a whisper at a key point makes it hard to hear.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "voice dropped almost to a whisper"
                    }
          ],
          "finalAnswer": "Reading slides, rushing, avoiding eye contact and dropping volume all weaken the audience's ability to follow and engage.",
          "commonErrors": [
                    "Listing weaknesses without explaining effect."
          ]
},
        },
        {
          id: "el8-u4-delivery-confidence-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short delivery plan for a presentation. Include pace, eye contact, gesture and one strategy for managing nerves.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Delivery planning",
                              "statement": "Plan vocal and physical choices before speaking."
                    },
                    {
                              "kind": "convention",
                              "name": "Presentation delivery",
                              "statement": "Confident delivery uses controlled paralanguage and posture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plans pace, including slowing for key points.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Plans eye contact with different audience sections.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Plans gestures or posture to support meaning.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Includes a nerve-management strategy such as rehearsal or pauses.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Keeps the plan specific to the presentation purpose.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'I will speak slowly at the opening, pause before the main argument, look at three sections of the audience and use open hand gestures. I will rehearse twice and use silent pauses instead of fillers if I feel nervous.'",
          "commonErrors": [
                    "Generic advice not linked to the task.",
                    "No nerve strategy."
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear, relevant explanation supported by well-chosen evidence and developed evaluation."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Some understanding with some relevant evidence."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comment with few references."
                    }
          ]
},
        },
        {
          id: "el8-u4-delivery-confidence-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "Teacher's notes on a rehearsal",
          "author": "Written for Akademik Space",
          "text": "The speaker read most of the slides word for word. At the beginning the voice was clear, but by the final section the pace became very fast and several words were swallowed. The speaker kept both hands in pockets and looked only at the screen. When describing the new garden, the voice dropped almost to a whisper. There were long pauses in the wrong places, but the audience leaned forward whenever the speaker pointed at the photograph."
},
          stem: "Answer all parts of this question about the rehearsal notes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down two delivery strengths or positive moments.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how two weaknesses could affect the audience.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the rehearsal notes as feedback and suggest improvements.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Evaluating feedback",
                              "statement": "Use evidence to judge delivery and plan improvement."
                    },
                    {
                              "kind": "technique",
                              "name": "Paralanguage and body language",
                              "statement": "Voice, pace, posture and eye contact shape audience response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The voice was clear at the beginning.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "the voice was clear"
                    },
                    {
                              "reasoning": "The audience leaned forward at the photograph, showing engagement.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "leaned forward"
                    },
                    {
                              "reasoning": "Reading slides word for word can make listeners feel the speaker is not connecting with them.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b",
                              "evidence": "read most of the slides word for word"
                    },
                    {
                              "reasoning": "The fast pace and swallowed words make the ending hard to follow.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b",
                              "evidence": "several words were swallowed"
                    },
                    {
                              "reasoning": "The notes are useful because they identify specific, observable behaviours.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c",
                              "evidence": "read most of the slides"
                    },
                    {
                              "reasoning": "They balance strengths and weaknesses rather than only criticising.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c",
                              "evidence": "the voice was clear"
                    },
                    {
                              "reasoning": "Useful improvements include rehearsing without reading, slowing the ending and practising eye contact.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) Clear voice at the start; audience leaned forward at the photograph. (b) Reading slides reduces connection; rushing and swallowed words reduce clarity. (c) The feedback is specific and balanced; the speaker should rehearse without reading, slow the ending and practise eye contact.",
          "commonErrors": [
                    "Ignoring positive moments.",
                    "Suggesting vague improvements."
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear, relevant explanation supported by well-chosen evidence and developed evaluation."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Some understanding with some relevant evidence."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comment with few references."
                    }
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el8-u4-presentation-notes",
      title: "Presentations — notes",
      summary: "Structure with introduction, points and conclusion; deliver with controlled pace, eye contact and confidence.",
      sections: [
        { heading: "Key idea", body: "A presentation needs a clear purpose, ordered points and signposts so listeners can follow." },
        { heading: "Delivery", body: "Vary pace, pause for emphasis, project your voice and make eye contact." },
        { heading: "Confidence", body: "Rehearse, replace fillers with pauses and focus on the message rather than nerves." },
      ],
    },
  ],
};
