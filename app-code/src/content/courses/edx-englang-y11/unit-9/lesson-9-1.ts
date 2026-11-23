import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "el11-u9-lesson-9-1",
  code: "9-1",
  title: "Purpose, Audience and Context",
  goal: "I CAN identify a writer's purpose and intended audience, and explain how context and formality shape their language.",
  standards: ["4EA1 Paper 1 Section B", "4EA1 AO1", "4EA1 AO2"],
  
  vocabulary: [
    { term: "Purpose", definition: "The overall aim a writer has for a text, such as to inform, persuade, advise or entertain." },
    { term: "Audience", definition: "The group of readers a writer is addressing, which shapes every choice they make." },
    { term: "Register", definition: "The level of formality in language, chosen to suit the audience and context." },
    { term: "Tone", definition: "The writer's attitude towards the subject or reader, created through word choice and style." },
    { term: "Context", definition: "The situation in which a text is produced and read, including where, when and why." },
    { term: "Inclusive pronoun", definition: "A pronoun such as 'we' or 'us' that positions the writer and reader as a group." },
  ],
  concepts: [
    {
      id: "el11-u9-purpose-audience",
      title: "Purpose and audience in non-fiction",
      skill: "Identify a writer's purpose and intended audience, and explain how language is adapted to them.",
      lesson: {
        sections: [
          {
            heading: "Reading for purpose and audience",
            body: "Before analysing any non-fiction text, ask two questions: **what is the writer trying to do?** (inform, persuade, advise, entertain) and **who are they writing for?** The form gives it away: a letter has a salutation and a formal close, a blog post is conversational and invites comment. The audience then explains the register: the same issue will be argued very differently in a council letter and a local blog.",
          },
          {
            heading: "Adapting language to the reader",
            body: "Writers adapt **vocabulary** (formal nouns versus colloquialisms), **grammar** (full formal sentences versus contractions and fragments), **tone** (detached versus personal) and **structure** (numbered points versus rambling paragraphs). When you analyse, always link a language choice to the audience it is designed to reach: 'proper annoying' would fail in a formal report but builds rapport with blog readers.",
          },
          {
            heading: "Building the answer",
            body: "Use the chain: **purpose** (what the writer wants), **audience** (who they are addressing) and **evidence** (a quotation showing adaptation). For comparison questions, keep the two texts strictly parallel: same point about each before moving to the next.",
          },
        ],
        keyFormulas: [
          { name: "Purpose", statement: "The overall aim of a text: to inform, persuade, advise, argue or entertain a particular readership." },
          { name: "Audience adaptation", statement: "Choices of register, vocabulary, tone and structure made to suit the intended reader." },
          { name: "Form signals", statement: "Salutation and 'Yours faithfully' signal a formal letter; contractions, direct address and invitations to comment signal an informal digital text." },
        ],
        workedExample: {
          problem: "How does the writer of 'The Cycle Lane Conundrum' adapt her language to her audience?",
          solution: "The blogger writes for neighbours she expects to know the issue already, so she skips formal explanation and opens with 'Right, so the council wants to build a cycle lane' — a spoken-style summary rather than a structured introduction. She uses contractions and colloquialisms ('proper annoying', 'a moan in the survey', '8.55 on a Tuesday') that assume shared local knowledge and a relaxed relationship with readers. She also anticipates objection directly ('Before you all lose your minds') and ends by inviting comment, treating the audience as equals in a conversation rather than recipients of instruction.",
        },
      },
      questions: [
        {
          id: "el11-u9-purpose-audience-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "A Letter to Residents",
          "author": "Priya Shah, Chair of the Marsh Lane Residents' Association",
          "source": "Original letter to residents",
          "text": "Dear Resident,\n\nWe are writing on behalf of the Marsh Lane Residents' Association regarding the proposed cycle lane on Marsh Lane, and we would be grateful for your support.\n\nMany of you have told us that you find the current road dangerous, particularly outside the primary school between 8.15 and 9.00. A segregated cycle lane would provide a safe route for children and encourage healthier journeys. It would also reduce congestion at the school gates, where parents currently queue for several minutes each morning.\n\nWe acknowledge that some residents have concerns about the loss of parking spaces. However, the consultation documents show that only fourteen spaces would be affected, and the council has proposed alternative provision on Stanley Street. We therefore ask you to complete the survey by Friday 14 March and to indicate whether you support the proposal.\n\nYours faithfully,\nPriya Shah\nChair, Marsh Lane Residents' Association"
},
          stem: "Read 'A Letter to Residents'. What is the writer's main purpose?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To advertise the work of the Residents' Association."
                    },
                    {
                              "id": "b",
                              "text": "To persuade residents to support the proposed cycle lane."
                    },
                    {
                              "id": "c",
                              "text": "To explain the rules for completing a council survey."
                    },
                    {
                              "id": "d",
                              "text": "To complain about parking on Marsh Lane."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Purpose",
                              "statement": "A writer's purpose is the overall aim of the text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The letter presents arguments for the cycle lane and ends by asking residents to complete the survey 'to indicate whether you support the proposal', so its aim is to win support.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** To persuade residents to support the proposed cycle lane.",
          "commonErrors": [
                    "Choosing (c) because the letter mentions a survey; the survey is a means, not the purpose.",
                    "Choosing (d) because parking is discussed; the parking point is acknowledged then answered, not the aim."
          ]
},
        },
        {
          id: "el11-u9-purpose-audience-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "A Letter to Residents",
          "author": "Priya Shah, Chair of the Marsh Lane Residents' Association",
          "source": "Original letter to residents",
          "text": "Dear Resident,\n\nWe are writing on behalf of the Marsh Lane Residents' Association regarding the proposed cycle lane on Marsh Lane, and we would be grateful for your support.\n\nMany of you have told us that you find the current road dangerous, particularly outside the primary school between 8.15 and 9.00. A segregated cycle lane would provide a safe route for children and encourage healthier journeys. It would also reduce congestion at the school gates, where parents currently queue for several minutes each morning.\n\nWe acknowledge that some residents have concerns about the loss of parking spaces. However, the consultation documents show that only fourteen spaces would be affected, and the council has proposed alternative provision on Stanley Street. We therefore ask you to complete the survey by Friday 14 March and to indicate whether you support the proposal.\n\nYours faithfully,\nPriya Shah\nChair, Marsh Lane Residents' Association"
},
          stem: "Who is the intended audience of the letter, and what feature of the text shows this? Give two points.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Audience identification",
                              "statement": "Identify who a text addresses, then prove it with a feature of the writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The audience is residents living on or near Marsh Lane, adults with a stake in the road.",
                              "evidence": "Dear Resident",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The formal structure — salutation, collective 'we', courteous request and 'Yours faithfully' — shows the writer expects a formal adult readership.",
                              "evidence": "Yours faithfully",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The audience is adult residents of Marsh Lane; the formal letter format, 'Dear Resident' and the close 'Yours faithfully' show it.",
          "commonErrors": [
                    "Naming 'the council' as the audience — the council is the subject, not the reader.",
                    "Describing the letter as informal because it is about a local issue."
          ]
},
        },
        {
          id: "el11-u9-purpose-audience-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Cycle Lane Conundrum",
          "author": "M. Okafor",
          "source": "Original local blog post",
          "text": "Right, so the council wants to build a cycle lane on Marsh Lane. Before you all lose your minds in the comments, hear me out.\n\nLook, I get it. Parking is already a nightmare round here and the idea of losing spaces near the shops is proper annoying. But my kid cycles to school and honestly the road feels dodgy at drop-off. Loads of parents just sit in their cars because they don't feel safe letting the little ones out.\n\nThe council says only a few spaces would go. Fourteen, whatever that means when you're trying to park at 8.55 on a Tuesday. Still, maybe it's worth a moan in the survey and seeing what actually happens. What's everyone else think?"
},
          stem: "Explain how the blogger's language shows she is writing for people she knows.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Colloquial register",
                              "statement": "Informal vocabulary and contractions signal a familiar, conversational relationship with the reader."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "She uses spoken-style openings and contractions ('Right, so', \"don't\", \"you're\"), as if talking rather than writing formally.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "She assumes shared local knowledge — '8.55 on a Tuesday' — which only neighbours would fully recognise.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "She ends by inviting comment ('What's everyone else think?'), treating readers as equals in an ongoing local conversation.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The blogger uses contractions, colloquialisms like 'proper annoying' and 'a moan', assumes readers share her local experience of parking, and invites comment — all signs she writes for neighbours she knows.",
          "commonErrors": [
                    "Listing informal features without linking them to an audience.",
                    "Claiming the blog is formal because it discusses a council proposal."
          ]
},
        },
        {
          id: "el11-u9-purpose-audience-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Two Views on the Cycle Lane",
          "author": "Written for Akademik Space",
          "source": "Original texts for comparison",
          "text": "Text 1 - 'A Letter to Residents' (formal letter)\nDear Resident,\n\nWe are writing on behalf of the Marsh Lane Residents' Association regarding the proposed cycle lane on Marsh Lane, and we would be grateful for your support. Many of you have told us that you find the current road dangerous, particularly outside the primary school between 8.15 and 9.00. A segregated cycle lane would provide a safe route for children and encourage healthier journeys. It would also reduce congestion at the school gates. We acknowledge that some residents have concerns about the loss of parking spaces. However, the consultation documents show that only fourteen spaces would be affected, and the council has proposed alternative provision on Stanley Street. We therefore ask you to complete the survey by Friday 14 March and to indicate whether you support the proposal.\n\nYours faithfully,\nPriya Shah\n\nText 2 - 'The Cycle Lane Conundrum' (blog post)\nRight, so the council wants to build a cycle lane on Marsh Lane. Before you all lose your minds in the comments, hear me out. Look, I get it. Parking is already a nightmare round here and the idea of losing spaces near the shops is proper annoying. But my kid cycles to school and honestly the road feels dodgy at drop-off. Loads of parents just sit in their cars because they don't feel safe letting the little ones out. The council says only a few spaces would go. Fourteen, whatever that means when you're trying to park at 8.55 on a Tuesday. Still, maybe it's worth a moan in the survey and seeing what actually happens. What's everyone else think?"
},
          stem: "Compare how the letter writer and the blogger adapt their language to their audiences.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Parallel comparison",
                              "statement": "Keep the two texts strictly parallel: same point about each before moving on."
                    },
                    {
                              "kind": "technique",
                              "name": "Register",
                              "statement": "The level of formality is the clearest marker of audience adaptation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The letter writer uses a formal collective voice ('We are writing on behalf of') suited to adult residents and officialdom.",
                              "evidence": "We would be grateful for your support",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "She acknowledges the opposing concern politely and answers it with evidence, suiting an audience she cannot assume agrees with her.",
                              "evidence": "We acknowledge that some residents have concerns",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The blogger opens conversationally ('Right, so') and assumes the audience already knows the issue, suiting neighbours.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "She voices the readers' objection herself ('proper annoying', 'lose your minds'), showing she shares their concerns.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The blogger ends by asking for views, treating the audience as participants; the letter ends with a formal request and deadline, treating them as respondents to be organised.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Both adapt to their audience: the letter writer chooses formal, evidence-led, collective persuasion for adult residents, while the blogger chooses conversational, opinion-led, inclusive address for neighbours she expects to reply.",
          "commonErrors": [
                    "Comparing content rather than language and audience.",
                    "Writing two separate analyses without linking the texts."
          ]
},
        },
        {
          id: "el11-u9-purpose-audience-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Cycle Lane Conundrum",
          "author": "M. Okafor",
          "source": "Original local blog post",
          "text": "Right, so the council wants to build a cycle lane on Marsh Lane. Before you all lose your minds in the comments, hear me out.\n\nLook, I get it. Parking is already a nightmare round here and the idea of losing spaces near the shops is proper annoying. But my kid cycles to school and honestly the road feels dodgy at drop-off. Loads of parents just sit in their cars because they don't feel safe letting the little ones out.\n\nThe council says only a few spaces would go. Fourteen, whatever that means when you're trying to park at 8.55 on a Tuesday. Still, maybe it's worth a moan in the survey and seeing what actually happens. What's everyone else think?"
},
          stem: "How does the blogger present herself as a member of the community rather than an outsider? Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Inclusive voice",
                              "statement": "Sharing personal experience and local knowledge positions the writer as one of the community."
                    },
                    {
                              "kind": "skill",
                              "name": "Evidence-led comment",
                              "statement": "Every claim about the writer's stance should be tied to a precise quotation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "She speaks from personal stake — 'my kid cycles to school' — so her view comes from inside the community, not authority.",
                              "evidence": "my kid cycles to school",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "She shares specific local experience ('8.55 on a Tuesday'), proving she lives with the problem.",
                              "evidence": "trying to park at 8.55 on a Tuesday",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "She voices residents' frustration fairly before weighing it, showing she shares rather than dismisses their view.",
                              "evidence": "proper annoying",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "She treats the issue as undecided — 'seeing what actually happens' — avoiding the certainty of an outsider lecturing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "She closes by inviting others' views, confirming she sees herself as part of the discussion, not above it.",
                              "evidence": "What's everyone else think?",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The blogger grounds her argument in personal and local experience ('my kid', '8.55 on a Tuesday'), voices the community's own objections, stays uncertain rather than dogmatic, and invites comment — all of which place her inside the community.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating comment on how the writer positions herself for her audience; judicious, well-chosen evidence"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant comment on how the writer positions herself for her audience; appropriate references"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comment on how the writer positions herself for her audience; few or unselective references"
                    }
          ],
          "commonErrors": [
                    "Saying she is 'relatable' without evidence.",
                    "Ignoring the balance of her argument and calling her simply biased."
          ]
},
        },
        {
          id: "el11-u9-purpose-audience-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Two Views on the Cycle Lane",
          "author": "Written for Akademik Space",
          "source": "Original texts for comparison",
          "text": "Text 1 - 'A Letter to Residents' (formal letter)\nDear Resident,\n\nWe are writing on behalf of the Marsh Lane Residents' Association regarding the proposed cycle lane on Marsh Lane, and we would be grateful for your support. Many of you have told us that you find the current road dangerous, particularly outside the primary school between 8.15 and 9.00. A segregated cycle lane would provide a safe route for children and encourage healthier journeys. It would also reduce congestion at the school gates. We acknowledge that some residents have concerns about the loss of parking spaces. However, the consultation documents show that only fourteen spaces would be affected, and the council has proposed alternative provision on Stanley Street. We therefore ask you to complete the survey by Friday 14 March and to indicate whether you support the proposal.\n\nYours faithfully,\nPriya Shah\n\nText 2 - 'The Cycle Lane Conundrum' (blog post)\nRight, so the council wants to build a cycle lane on Marsh Lane. Before you all lose your minds in the comments, hear me out. Look, I get it. Parking is already a nightmare round here and the idea of losing spaces near the shops is proper annoying. But my kid cycles to school and honestly the road feels dodgy at drop-off. Loads of parents just sit in their cars because they don't feel safe letting the little ones out. The council says only a few spaces would go. Fourteen, whatever that means when you're trying to park at 8.55 on a Tuesday. Still, maybe it's worth a moan in the survey and seeing what actually happens. What's everyone else think?"
},
          stem: "Read both texts on the proposed cycle lane.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the main purpose of each text.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how the formality of each text affects its likely impact on its audience.",
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
                              "name": "Purpose",
                              "statement": "The overall aim a writer has for a text."
                    },
                    {
                              "kind": "technique",
                              "name": "Register and impact",
                              "statement": "Formality can create authority or distance; informality can create rapport or seem unserious, depending on audience."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The letter aims to persuade residents to support the cycle lane; the blog aims to share a view and invite comment.",
                              "evidence": "indicate whether you support the proposal",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit a precise contrast: persuasion versus discussion; the letter requests action, the blog opens a conversation.",
                              "evidence": "What's everyone else think?",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The formal register gives the letter authority and credibility with adult residents and official bodies.",
                              "evidence": "We are writing on behalf of the Marsh Lane Residents' Association",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The informal register builds rapport and makes readers feel the blogger is one of them.",
                              "evidence": "Right, so the council wants to build a cycle lane",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "A top answer weighs the trade-off: formality persuades by sounding official but can feel distant; informality engages but may seem less authoritative.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) The letter persuades residents to support the cycle lane; the blog shares a personal view and invites comment. (b) Formal register lends the letter authority and suits official persuasion; informal register builds rapport and suits a neighbourly audience, though it may carry less weight with officials.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating evaluation of formality and its effect on the reader; judicious, well-chosen evidence",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluation of formality and its effect on the reader; appropriate references",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited evaluation of formality and its effect on the reader; few or unselective references",
                              "part": "b"
                    }
          ],
          "commonErrors": [
                    "In (a) giving purposes that are too vague ('to talk about the lane').",
                    "In (b) describing register without discussing its effect on readers."
          ]
},
        },
      ],
    },
    {
      id: "el11-u9-context-register",
      title: "Context and register",
      skill: "Explain how context and formality shape a writer's tone and choice of language.",
      lesson: {
        sections: [
          {
            heading: "What context does",
            body: "Context is everything around the text: where it appears (a letter, a blog, a speech), when it is written and why. The same writer will sound different in each. A council press release is formal and impersonal; the same issue on social media is personal and fast. Always ask: **what situation produced this text, and what situation will it be read in?**",
          },
          {
            heading: "Register in practice",
            body: "Formal register uses full forms ('do not', 'cannot'), Latinate vocabulary ('approximately', 'regarding'), passive constructions and complete sentences. Informal register uses contractions, colloquialisms, fragments and direct questions. Neither is 'better' — each fits its context. The skill is to name the register precisely and show the evidence for it.",
          },
          {
            heading: "Tone follows context",
            body: "Register and tone are linked but not identical: register is how formal the language is; tone is the attitude behind it. A formal text can be warm or cold; an informal text can be jokey or bitter. When analysing, separate them: identify the register first, then the tone it carries.",
          },
        ],
        keyFormulas: [
          { name: "Register", statement: "The level of formality chosen to suit context and audience, from colloquial to official." },
          { name: "Formal markers", statement: "Full forms, Latinate vocabulary, passive voice, formal address and close." },
          { name: "Tone versus register", statement: "Register describes formality; tone describes attitude. A text can be formal in register and warm or critical in tone." },
        ],
        workedExample: {
          problem: "How does context shape the tone of 'A Letter to Residents'?",
          solution: "The letter exists in a formal civic context: it is sent by an association to residents about a council proposal, so the writer must sound official, fair and convincing. That context produces a formal register — 'We are writing on behalf of', 'we would be grateful', 'Yours faithfully' — and a measured, diplomatic tone. Even the disagreement about parking is handled politely: 'We acknowledge that some residents have concerns', which suits an audience that may not agree and an issue that affects the writer's own credibility.",
        },
      },
      questions: [
        {
          id: "el11-u9-context-register-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "A Letter to Residents",
          "author": "Priya Shah, Chair of the Marsh Lane Residents' Association",
          "source": "Original letter to residents",
          "text": "Dear Resident,\n\nWe are writing on behalf of the Marsh Lane Residents' Association regarding the proposed cycle lane on Marsh Lane, and we would be grateful for your support.\n\nMany of you have told us that you find the current road dangerous, particularly outside the primary school between 8.15 and 9.00. A segregated cycle lane would provide a safe route for children and encourage healthier journeys. It would also reduce congestion at the school gates, where parents currently queue for several minutes each morning.\n\nWe acknowledge that some residents have concerns about the loss of parking spaces. However, the consultation documents show that only fourteen spaces would be affected, and the council has proposed alternative provision on Stanley Street. We therefore ask you to complete the survey by Friday 14 March and to indicate whether you support the proposal.\n\nYours faithfully,\nPriya Shah\nChair, Marsh Lane Residents' Association"
},
          stem: "Which phrase from 'A Letter to Residents' best shows the formal register of the letter?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'hear me out'"
                    },
                    {
                              "id": "b",
                              "text": "'proper annoying'"
                    },
                    {
                              "id": "c",
                              "text": "'we would be grateful for your support'"
                    },
                    {
                              "id": "d",
                              "text": "'What's everyone else think?'"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Register",
                              "statement": "Register is the level of formality in language."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'We would be grateful for your support' uses a formal modal construction and courteous phrasing typical of official letters; the other options are colloquial.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(c)** 'we would be grateful for your support' — a polite, formal construction suited to an official letter.",
          "commonErrors": [
                    "Picking a phrase about the issue rather than one showing formality."
          ]
},
        },
        {
          id: "el11-u9-context-register-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "A Letter to Residents",
          "author": "Priya Shah, Chair of the Marsh Lane Residents' Association",
          "source": "Original letter to residents",
          "text": "Dear Resident,\n\nWe are writing on behalf of the Marsh Lane Residents' Association regarding the proposed cycle lane on Marsh Lane, and we would be grateful for your support.\n\nMany of you have told us that you find the current road dangerous, particularly outside the primary school between 8.15 and 9.00. A segregated cycle lane would provide a safe route for children and encourage healthier journeys. It would also reduce congestion at the school gates, where parents currently queue for several minutes each morning.\n\nWe acknowledge that some residents have concerns about the loss of parking spaces. However, the consultation documents show that only fourteen spaces would be affected, and the council has proposed alternative provision on Stanley Street. We therefore ask you to complete the survey by Friday 14 March and to indicate whether you support the proposal.\n\nYours faithfully,\nPriya Shah\nChair, Marsh Lane Residents' Association"
},
          stem: "Give two features of formal register in the letter.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Formal markers",
                              "statement": "Full forms, formal vocabulary, collective pronouns and formal openers and closes mark formal register."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Credit any two: formal salutation 'Dear Resident' and close 'Yours faithfully'; courteous modal 'would be grateful'; formal vocabulary 'regarding', 'proposed', 'segregated'; collective 'we' representing the association.",
                              "evidence": "Yours faithfully",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Credit a second distinct feature with evidence.",
                              "evidence": "regarding the proposed cycle lane",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Any two of: 'Dear Resident'/'Yours faithfully' frame; 'would be grateful' courteous modal; formal vocabulary such as 'regarding' and 'segregated'; collective 'we' as the association.",
          "commonErrors": [
                    "Listing features without quotation or explanation.",
                    "Calling the letter 'chatty' because it mentions school-run times."
          ]
},
        },
        {
          id: "el11-u9-context-register-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Cycle Lane Conundrum",
          "author": "M. Okafor",
          "source": "Original local blog post",
          "text": "Right, so the council wants to build a cycle lane on Marsh Lane. Before you all lose your minds in the comments, hear me out.\n\nLook, I get it. Parking is already a nightmare round here and the idea of losing spaces near the shops is proper annoying. But my kid cycles to school and honestly the road feels dodgy at drop-off. Loads of parents just sit in their cars because they don't feel safe letting the little ones out.\n\nThe council says only a few spaces would go. Fourteen, whatever that means when you're trying to park at 8.55 on a Tuesday. Still, maybe it's worth a moan in the survey and seeing what actually happens. What's everyone else think?"
},
          stem: "How does the context of a local blog affect the blogger's tone and word choice?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Digital local context",
                              "statement": "A blog post invites informal, personal, conversational writing addressed to a known community."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The blog context allows personal anecdote ('my kid') that a formal letter would exclude.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Colloquial vocabulary — 'nightmare', 'proper annoying', 'dodgy', 'a moan' — suits a relaxed local readership.",
                              "evidence": "proper annoying",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Contractions, fragments and a closing question ('What's everyone else think?') create a conversational tone appropriate to comments and replies.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The blog context produces an informal, conversational tone: personal anecdote, colloquialisms like 'proper annoying' and 'dodgy', contractions, and a direct invitation to comment.",
          "commonErrors": [
                    "Describing the context vaguely as 'online' without linking it to language choices."
          ]
},
        },
        {
          id: "el11-u9-context-register-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Two Views on the Cycle Lane",
          "author": "Written for Akademik Space",
          "source": "Original texts for comparison",
          "text": "Text 1 - 'A Letter to Residents' (formal letter)\nDear Resident,\n\nWe are writing on behalf of the Marsh Lane Residents' Association regarding the proposed cycle lane on Marsh Lane, and we would be grateful for your support. Many of you have told us that you find the current road dangerous, particularly outside the primary school between 8.15 and 9.00. A segregated cycle lane would provide a safe route for children and encourage healthier journeys. It would also reduce congestion at the school gates. We acknowledge that some residents have concerns about the loss of parking spaces. However, the consultation documents show that only fourteen spaces would be affected, and the council has proposed alternative provision on Stanley Street. We therefore ask you to complete the survey by Friday 14 March and to indicate whether you support the proposal.\n\nYours faithfully,\nPriya Shah\n\nText 2 - 'The Cycle Lane Conundrum' (blog post)\nRight, so the council wants to build a cycle lane on Marsh Lane. Before you all lose your minds in the comments, hear me out. Look, I get it. Parking is already a nightmare round here and the idea of losing spaces near the shops is proper annoying. But my kid cycles to school and honestly the road feels dodgy at drop-off. Loads of parents just sit in their cars because they don't feel safe letting the little ones out. The council says only a few spaces would go. Fourteen, whatever that means when you're trying to park at 8.55 on a Tuesday. Still, maybe it's worth a moan in the survey and seeing what actually happens. What's everyone else think?"
},
          stem: "How does tone differ between the two texts, and how do the writers create it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tone creation",
                              "statement": "Tone is built from word choice, sentence shape, rhythm and the writer's attitude to the reader."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The letter's tone is measured and diplomatic: it acknowledges disagreement ('We acknowledge that some residents have concerns') before answering it.",
                              "evidence": "We acknowledge that some residents have concerns",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Formal phrasing — 'we would be grateful', 'we therefore ask' — keeps the letter courteous even while persuading.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The blogger's tone is warm but combative: 'Right, so' and 'hear me out' sound confrontational yet friendly.",
                              "evidence": "hear me out",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Her exaggeration — 'a nightmare', 'proper annoying', 'lose your minds' — creates a jokey, exasperated tone.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The blogger ends unsure ('maybe it's worth a moan'), softening her tone; the letter ends certain and directive ('We therefore ask you').",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "The letter is measured, courteous and authoritative; the blog is exasperated, jokey and uncertain. The letter builds tone through formal phrasing and polite concession; the blog through colloquialisms, exaggeration and a conversational close.",
          "commonErrors": [
                    "Saying one tone is 'better' rather than analysing how each is created.",
                    "Confusing tone with register — describe attitude, not just formality."
          ]
},
        },
        {
          id: "el11-u9-context-register-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Two Views on the Cycle Lane",
          "author": "Written for Akademik Space",
          "source": "Original texts for comparison",
          "text": "Text 1 - 'A Letter to Residents' (formal letter)\nDear Resident,\n\nWe are writing on behalf of the Marsh Lane Residents' Association regarding the proposed cycle lane on Marsh Lane, and we would be grateful for your support. Many of you have told us that you find the current road dangerous, particularly outside the primary school between 8.15 and 9.00. A segregated cycle lane would provide a safe route for children and encourage healthier journeys. It would also reduce congestion at the school gates. We acknowledge that some residents have concerns about the loss of parking spaces. However, the consultation documents show that only fourteen spaces would be affected, and the council has proposed alternative provision on Stanley Street. We therefore ask you to complete the survey by Friday 14 March and to indicate whether you support the proposal.\n\nYours faithfully,\nPriya Shah\n\nText 2 - 'The Cycle Lane Conundrum' (blog post)\nRight, so the council wants to build a cycle lane on Marsh Lane. Before you all lose your minds in the comments, hear me out. Look, I get it. Parking is already a nightmare round here and the idea of losing spaces near the shops is proper annoying. But my kid cycles to school and honestly the road feels dodgy at drop-off. Loads of parents just sit in their cars because they don't feel safe letting the little ones out. The council says only a few spaces would go. Fourteen, whatever that means when you're trying to park at 8.55 on a Tuesday. Still, maybe it's worth a moan in the survey and seeing what actually happens. What's everyone else think?"
},
          stem: "Explain how the same issue — the proposed cycle lane — is framed differently because of each writer's context.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Context shapes framing",
                              "statement": "The situation a text is written for determines what counts as relevant evidence and persuasive language."
                    },
                    {
                              "kind": "technique",
                              "name": "Framing",
                              "statement": "The same facts can be presented as a safety benefit, a parking loss, or a community choice depending on the writer's purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The letter writer frames the lane as a safety and congestion benefit for children, suiting an official persuasive context.",
                              "evidence": "provide a safe route for children",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "She must answer the parking objection because her formal context demands fairness: 'We acknowledge that some residents have concerns'.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "She cites official evidence — 'the consultation documents show that only fourteen spaces' — which formal persuasion requires.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The blogger frames the same issue around daily inconvenience — 'proper annoying', '8.55 on a Tuesday' — suiting an informal local context.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "She treats the council's figure skeptically ('Fourteen, whatever that means'), which is acceptable in a blog but would undermine a formal letter.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Context determines framing: the letter presents the lane as a formal, evidence-based safety proposal that must answer objections fairly, while the blog presents it as a local inconvenience and open question voiced in everyday language.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating comment on how context shapes the presentation of the issue; judicious, well-chosen evidence"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant comment on how context shapes the presentation of the issue; appropriate references"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comment on how context shapes the presentation of the issue; few or unselective references"
                    }
          ],
          "commonErrors": [
                    "Saying the writers 'disagree' without analysing how context produces the disagreement.",
                    "Ignoring the formal requirement to acknowledge the opposing view."
          ]
},
        },
        {
          id: "el11-u9-context-register-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Two Views on the Cycle Lane",
          "author": "Written for Akademik Space",
          "source": "Original texts for comparison",
          "text": "Text 1 - 'A Letter to Residents' (formal letter)\nDear Resident,\n\nWe are writing on behalf of the Marsh Lane Residents' Association regarding the proposed cycle lane on Marsh Lane, and we would be grateful for your support. Many of you have told us that you find the current road dangerous, particularly outside the primary school between 8.15 and 9.00. A segregated cycle lane would provide a safe route for children and encourage healthier journeys. It would also reduce congestion at the school gates. We acknowledge that some residents have concerns about the loss of parking spaces. However, the consultation documents show that only fourteen spaces would be affected, and the council has proposed alternative provision on Stanley Street. We therefore ask you to complete the survey by Friday 14 March and to indicate whether you support the proposal.\n\nYours faithfully,\nPriya Shah\n\nText 2 - 'The Cycle Lane Conundrum' (blog post)\nRight, so the council wants to build a cycle lane on Marsh Lane. Before you all lose your minds in the comments, hear me out. Look, I get it. Parking is already a nightmare round here and the idea of losing spaces near the shops is proper annoying. But my kid cycles to school and honestly the road feels dodgy at drop-off. Loads of parents just sit in their cars because they don't feel safe letting the little ones out. The council says only a few spaces would go. Fourteen, whatever that means when you're trying to park at 8.55 on a Tuesday. Still, maybe it's worth a moan in the survey and seeing what actually happens. What's everyone else think?"
},
          stem: "Read both texts on the proposed cycle lane.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the register of each text and give one piece of evidence for each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Analyse how each writer's register shapes the reader's likely response.",
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
                              "statement": "The level of formality in language, chosen to suit context."
                    },
                    {
                              "kind": "skill",
                              "name": "Effect of register",
                              "statement": "Link the register to a specific likely response: trust, distance, rapport or scepticism."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The letter is formal: evidence — 'Dear Resident', 'We are writing on behalf of', 'Yours faithfully'.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "The blog is informal: evidence — 'Right, so', 'proper annoying', 'What's everyone else think?'.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The formal register may make readers trust the letter's facts and fairness but feel it is distant or official.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The informal register may make readers feel the blogger shares their frustrations, building rapport and inviting agreement.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "A top answer weighs the limits: informality can seem unserious to officials; formality can seem remote to neighbours.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) Text 1 is formal ('Dear Resident', 'Yours faithfully'); Text 2 is informal ('Right, so', 'proper annoying'). (b) The formal register earns trust and authority but may feel distant; the informal register earns rapport and engagement but may seem less authoritative.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating analysis of register and its effect on readers; judicious, well-chosen evidence",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant analysis of register and its effect on readers; appropriate references",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited analysis of register and its effect on readers; few or unselective references",
                              "part": "b"
                    }
          ],
          "commonErrors": [
                    "In (a) naming the register without evidence.",
                    "In (b) asserting effects without explaining how the register produces them."
          ]
},
        },
      ],
    },
  ],

};
