import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "el8-u4-lesson-4-3",
  code: "4-3",
  title: "Media Texts and Digital Language",
  goal: "I CAN analyse how media and online texts use conventions, language and layout to reach an audience.",
  standards: ["KS3 Reading", "KS3 Spoken Language", "KS3 AO2", "KS3 AO3"],
  
  vocabulary: [
    { term: "Media text", definition: "A text produced for a mass audience, such as an advert, article, poster or post." },
    { term: "Headline", definition: "A short, attention-grabbing title, often at the top of a media text." },
    { term: "Slogan", definition: "A memorable phrase that sums up a product, event or idea." },
    { term: "Call to action", definition: "Words that tell the audience what to do next." },
    { term: "Hashtag", definition: "A word or phrase beginning with # used to link posts on a topic." },
    { term: "Digital register", definition: "The level of formality suitable for online communication." },
  ],
  concepts: [
    {
      id: "el8-u4-media-conventions",
      title: "Media conventions",
      skill: "Identify how headlines, slogans, layout and direct address shape a media text's purpose.",
      lesson: {
        sections: [
          {
            heading: "Conventions of media texts",
            body: "Media texts use attention-grabbing headlines, short sentences, slogans, images and clear calls to action. Layout matters: the biggest or boldest words usually carry the most important message.",
          },
          {
            heading: "Purpose and audience",
            body: "An advert for a cinema might aim to entertain and persuade families to visit. Its language is friendly, exciting and direct: 'Bring your family, your friends and your curiosity.' Ask who the text is for and what it wants them to do.",
          },
        ],
        keyFormulas: [
          { name: "Headline", statement: "A short title designed to attract attention." },
          { name: "Slogan", statement: "A memorable phrase that expresses the main message." },
          { name: "Call to action", statement: "An instruction telling the audience what to do next." },
        ],
        workedExample: {
          problem: "What is the purpose of 'Tickets are free, but places are limited. Reserve yours today'?",
          solution: "It is a call to action: it tells readers to reserve tickets now, using scarcity ('places are limited') to create urgency.",
        },
      },
      questions: [
        {
          id: "el8-u4-media-conventions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main function of a headline in a media text?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To give every detail in one sentence"
                    },
                    {
                              "id": "b",
                              "text": "To attract attention and signal the topic"
                    },
                    {
                              "id": "c",
                              "text": "To list the prices"
                    },
                    {
                              "id": "d",
                              "text": "To replace the call to action"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Headline",
                              "statement": "A headline is designed to attract attention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A headline is short and attention-grabbing so readers know the topic and want to read on.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** To attract attention and signal the topic.",
          "commonErrors": [
                    "Choosing (a): headlines are brief, not detailed."
          ]
},
        },
        {
          id: "el8-u4-media-conventions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two conventions commonly found in adverts or posters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Media conventions",
                              "statement": "Adverts use attention-grabbing and action-oriented features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A headline or slogan.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "A call to action or direct address.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Headline/slogan and call to action/direct address."
},
        },
        {
          id: "el8-u4-media-conventions-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Old Cinema Reopens",
          "author": "Written for Akademik Space",
          "text": "COMING SOON\n\nThe Old Cinema Reopens Saturday\n\nFor one weekend only, the old picture house on Mill Lane will screen classic adventures, live organ music and a free ice-cream for children under twelve. Doors open at two o'clock. Bring your family, your friends and your curiosity.\n\nTickets are free, but places are limited. Reserve yours today at the box office or online."
},
          stem: "Explain the effect of the slogan-like phrase 'Bring your family, your friends and your curiosity.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Inclusive language",
                              "statement": "Listing groups makes the event feel welcoming."
                    },
                    {
                              "kind": "convention",
                              "name": "Slogan",
                              "statement": "A rhythmic, memorable phrase carries the message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The list of three creates a rhythm and makes the invitation feel generous.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "your family, your friends and your curiosity"
                    },
                    {
                              "reasoning": "'Curiosity' adds an appealing, adventurous idea beyond just attending.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "your curiosity"
                    },
                    {
                              "reasoning": "The direct 'your' involves the reader personally.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "Bring your"
                    }
          ],
          "finalAnswer": "The phrase is memorable and inclusive, making the event sound welcoming and exciting.",
          "commonErrors": [
                    "Only saying it is a slogan without explaining effect."
          ]
},
        },
        {
          id: "el8-u4-media-conventions-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
          "title": "The Old Cinema Reopens",
          "author": "Written for Akademik Space",
          "text": "COMING SOON\n\nThe Old Cinema Reopens Saturday\n\nFor one weekend only, the old picture house on Mill Lane will screen classic adventures, live organ music and a free ice-cream for children under twelve. Doors open at two o'clock. Bring your family, your friends and your curiosity.\n\nTickets are free, but places are limited. Reserve yours today at the box office or online."
},
          stem: "How can you tell who the audience is for this media text? Refer to two features.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Audience",
                              "statement": "Language and content reveal the intended audience."
                    },
                    {
                              "kind": "convention",
                              "name": "Media text",
                              "statement": "Features such as free tickets and family wording target particular readers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Bring your family' suggests families are welcome.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "Bring your family"
                    },
                    {
                              "reasoning": "Free ice-cream for children under twelve appeals to parents and children.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "free ice-cream for children under twelve"
                    },
                    {
                              "reasoning": "'Classic adventures' and 'live organ music' suggest an audience interested in heritage events.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "classic adventures"
                    },
                    {
                              "reasoning": "The friendly, exciting tone is informal rather than formal.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The audience is likely local families and people interested in classic cinema; free tickets, children's ice-cream and friendly language all point to that.",
          "commonErrors": [
                    "Saying 'everyone' without evidence."
          ]
},
        },
        {
          id: "el8-u4-media-conventions-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Old Cinema Reopens",
          "author": "Written for Akademik Space",
          "text": "COMING SOON\n\nThe Old Cinema Reopens Saturday\n\nFor one weekend only, the old picture house on Mill Lane will screen classic adventures, live organ music and a free ice-cream for children under twelve. Doors open at two o'clock. Bring your family, your friends and your curiosity.\n\nTickets are free, but places are limited. Reserve yours today at the box office or online."
},
          stem: "Write a headline and a slogan for a school fun day. Make the slogan memorable and include a call to action.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Creating media language",
                              "statement": "Use concise, appealing language for a specific audience."
                    },
                    {
                              "kind": "convention",
                              "name": "Headline and slogan",
                              "statement": "Headlines attract; slogans are memorable and persuasive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Headline is short and attention-grabbing.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Slogan is memorable and relevant to the event.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Includes a clear call to action.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model headline: 'Fun Day Friday!' Slogan: 'Games, music and memories—be there!' Call to action: 'Sign up by Wednesday.'",
          "commonErrors": [
                    "Too long or generic.",
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
          id: "el8-u4-media-conventions-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Old Cinema Reopens",
          "author": "Written for Akademik Space",
          "text": "COMING SOON\n\nThe Old Cinema Reopens Saturday\n\nFor one weekend only, the old picture house on Mill Lane will screen classic adventures, live organ music and a free ice-cream for children under twelve. Doors open at two o'clock. Bring your family, your friends and your curiosity.\n\nTickets are free, but places are limited. Reserve yours today at the box office or online."
},
          stem: "Answer all parts of this question about the cinema advert.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down two factual details from the advert.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the writer uses persuasive language.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the effectiveness of the advert's media conventions.",
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
                              "name": "Media analysis",
                              "statement": "Distinguish facts from persuasion and evaluate conventions."
                    },
                    {
                              "kind": "technique",
                              "name": "Persuasive media language",
                              "statement": "Headlines, slogans and calls to action aim to influence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The cinema reopens on Saturday.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "Reopens Saturday"
                    },
                    {
                              "reasoning": "Tickets are free and places are limited.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "Tickets are free"
                    },
                    {
                              "reasoning": "Direct address ('Bring your family') involves the reader.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "Bring your family"
                    },
                    {
                              "reasoning": "The phrase 'places are limited' creates urgency.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "places are limited"
                    },
                    {
                              "reasoning": "'Classic adventures' and 'live organ music' create excitement and curiosity.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "live organ music"
                    },
                    {
                              "reasoning": "The call to action 'Reserve yours today' tells readers what to do.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "Reserve yours today"
                    },
                    {
                              "reasoning": "The headline 'COMING SOON' is short and attention-grabbing.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c",
                              "evidence": "COMING SOON"
                    },
                    {
                              "reasoning": "The headline 'The Old Cinema Reopens Saturday' gives clear information quickly.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c",
                              "evidence": "The Old Cinema Reopens Saturday"
                    },
                    {
                              "reasoning": "The combination of free tickets, limited places and a call to action makes the advert persuasive.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "places are limited"
                    }
          ],
          "finalAnswer": "(a) Reopens Saturday; tickets are free and places limited. (b) Direct address, urgency and exciting details persuade readers. (c) The advert is effective because the headline attracts attention, the details create appeal and the call to action is clear.",
          "commonErrors": [
                    "Treating every detail as persuasion.",
                    "Ignoring the headline."
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
      id: "el8-u4-digital-language",
      title: "Digital language",
      skill: "Analyse informal online conventions such as hashtags, abbreviations and direct address.",
      lesson: {
        sections: [
          {
            heading: "Online conventions",
            body: "Digital texts often use informal register, short sentences, exclamation marks, emojis, hashtags and direct address. Hashtags group posts by topic; abbreviations save time; emojis add tone.",
          },
          {
            heading: "Audience and purpose online",
            body: "A school garden post aims to inform and encourage participation. It is addressed to students, parents and staff who follow the school account. The casual tone suits social media but would not suit a formal letter to the head teacher.",
          },
        ],
        keyFormulas: [
          { name: "Hashtag", statement: "A # symbol followed by a word or phrase linking posts on a topic." },
          { name: "Digital register", statement: "Often informal, brief and direct." },
          { name: "Call to action online", statement: "Telling readers what to do next, such as 'bring gloves'." },
        ],
        workedExample: {
          problem: "What does '#GrowTogether' do in a school garden post?",
          solution: "It groups the post with others about growing and community, helping people find related posts.",
        },
      },
      questions: [
        {
          id: "el8-u4-digital-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the function of a hashtag?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To make a post private"
                    },
                    {
                              "id": "b",
                              "text": "To link posts on the same topic"
                    },
                    {
                              "id": "c",
                              "text": "To correct spelling"
                    },
                    {
                              "id": "d",
                              "text": "To add a formal title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hashtag",
                              "statement": "A symbol that links posts by topic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hashtags group posts so readers can find content on the same subject.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** To link posts on the same topic.",
          "commonErrors": [
                    "Choosing (a): hashtags do not control privacy."
          ]
},
        },
        {
          id: "el8-u4-digital-language-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two features of informal digital writing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Digital register",
                              "statement": "Online writing is often brief, casual and direct."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Short sentences and exclamation marks.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Hashtags, emojis or abbreviations.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Short sentences/exclamation marks and hashtags/emojis/abbreviations."
},
        },
        {
          id: "el8-u4-digital-language-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "School garden update",
          "author": "Written for Akademik Space",
          "text": "BREAKING: our school garden now has 12 raised beds! Huge thanks to everyone who dug, planted and watered. Next workday: Friday at 3:30, bring gloves and a water bottle. #SchoolGarden #GrowTogether"
},
          stem: "How does the tone of the post differ from a formal letter to the head teacher? Refer to the post.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Register",
                              "statement": "Audience and purpose determine formality."
                    },
                    {
                              "kind": "technique",
                              "name": "Tone",
                              "statement": "Word choice and punctuation create tone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The post is excited and casual ('BREAKING', 'Huge thanks'), while a letter would be measured.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "BREAKING"
                    },
                    {
                              "reasoning": "It uses informal details such as 'bring gloves and a water bottle'.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "bring gloves"
                    },
                    {
                              "reasoning": "Hashtags and direct address suit social media but would be inappropriate in a formal letter.",
                              "marks": 1,
                              "markCode": "AO3",
                              "evidence": "#GrowTogether"
                    }
          ],
          "finalAnswer": "The post is enthusiastic and informal, using hashtags and direct instructions, unlike the measured tone of a formal letter.",
          "commonErrors": [
                    "Saying only 'it is informal' without examples."
          ]
},
        },
        {
          id: "el8-u4-digital-language-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
          "title": "School garden update",
          "author": "Written for Akademik Space",
          "text": "BREAKING: our school garden now has 12 raised beds! Huge thanks to everyone who dug, planted and watered. Next workday: Friday at 3:30, bring gloves and a water bottle. #SchoolGarden #GrowTogether"
},
          stem: "Why is this post likely to be effective for its audience? Refer to two features.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Digital audience",
                              "statement": "Posts reach people who already follow the school."
                    },
                    {
                              "kind": "technique",
                              "name": "Call to action",
                              "statement": "Clear instructions encourage participation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It announces a clear update: twelve raised beds.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "12 raised beds"
                    },
                    {
                              "reasoning": "It thanks volunteers, which builds community goodwill.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "Huge thanks"
                    },
                    {
                              "reasoning": "It gives a specific next step: Friday at 3:30 and what to bring.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "Friday at 3:30"
                    },
                    {
                              "reasoning": "Hashtags help the post reach people interested in gardening and school life.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "#SchoolGarden"
                    }
          ],
          "finalAnswer": "The post is effective because it shares good news, thanks volunteers, gives clear next steps and uses hashtags to reach the right audience.",
          "commonErrors": [
                    "Describing the post without linking features to effect."
          ]
},
        },
        {
          id: "el8-u4-digital-language-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "School garden update",
          "author": "Written for Akademik Space",
          "text": "BREAKING: our school garden now has 12 raised beds! Huge thanks to everyone who dug, planted and watered. Next workday: Friday at 3:30, bring gloves and a water bottle. #SchoolGarden #GrowTogether"
},
          stem: "Rewrite the post as a formal paragraph for the school newsletter. Keep the key information but change the register.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Changing register",
                              "statement": "Adapt language and tone for a formal audience."
                    },
                    {
                              "kind": "convention",
                              "name": "Formal writing",
                              "statement": "Use complete sentences, measured tone and no hashtags."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts the casual opening into a measured statement.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Keeps the key facts: twelve beds, thanks, workday details.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Removes hashtags and informal phrasing.",
                              "marks": 2,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Model: 'The school garden now has twelve raised beds. We thank everyone who helped dig, plant and water. The next workday is Friday at 3:30; volunteers should bring gloves and a water bottle.'",
          "commonErrors": [
                    "Leaving 'BREAKING' or hashtags.",
                    "Losing the workday details."
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
          id: "el8-u4-digital-language-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "School garden update",
          "author": "Written for Akademik Space",
          "text": "BREAKING: our school garden now has 12 raised beds! Huge thanks to everyone who dug, planted and watered. Next workday: Friday at 3:30, bring gloves and a water bottle. #SchoolGarden #GrowTogether"
},
          stem: "Answer all parts of this question about the school garden post.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Who is the likely audience for the post? Give two clues.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain three digital language features used.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the post successfully encourages participation.",
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
                              "name": "Digital audience",
                              "statement": "Infer audience from language and purpose."
                    },
                    {
                              "kind": "technique",
                              "name": "Online conventions",
                              "statement": "Hashtags, direct address and informal tone shape response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Students and parents who follow the school account.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "our school garden"
                    },
                    {
                              "reasoning": "People interested in gardening or volunteering.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "#GrowTogether"
                    },
                    {
                              "reasoning": "'BREAKING' grabs attention in an informal way.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "BREAKING"
                    },
                    {
                              "reasoning": "Hashtags link the post to related topics.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "#SchoolGarden"
                    },
                    {
                              "reasoning": "Direct instructions ('bring gloves') tell readers what to do.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "bring gloves"
                    },
                    {
                              "reasoning": "The casual tone ('Huge thanks') builds friendliness.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "Huge thanks"
                    },
                    {
                              "reasoning": "The post clearly states the benefit and progress (twelve raised beds).",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "12 raised beds"
                    },
                    {
                              "reasoning": "It thanks volunteers, making people feel valued.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "Huge thanks"
                    },
                    {
                              "reasoning": "It gives specific participation details, making action easy.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "Friday at 3:30"
                    }
          ],
          "finalAnswer": "(a) Students, parents and school followers interested in gardening or volunteering. (b) Informal opening, hashtags, direct instructions and friendly tone. (c) The post is persuasive because it shares progress, thanks volunteers and gives clear next steps.",
          "commonErrors": [
                    "Listing features without effect.",
                    "Ignoring the call to action."
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
      id: "el8-u4-media-notes",
      title: "Media and digital texts — notes",
      summary: "Media texts use headlines, slogans and calls to action; online posts use hashtags, direct address and informal register.",
      sections: [
        { heading: "Key idea", body: "Ask who the text is for and what it wants them to do." },
        { heading: "Media conventions", body: "Headlines attract, slogans are memorable, calls to action tell readers what to do." },
        { heading: "Digital language", body: "Hashtags, emojis, abbreviations and casual tone suit online audiences but not formal writing." },
      ],
    },
  ],
};
