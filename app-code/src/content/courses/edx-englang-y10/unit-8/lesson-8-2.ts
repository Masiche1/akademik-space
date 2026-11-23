import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "el10-u8-lesson-8-2",
  code: "8-2",
  title: "Delivering a Presentation",
  goal: "I CAN deliver a presentation confidently using voice, pace, body language and response skills.",
  standards: ["4EA1 Spoken Language Endorsement", "4EA1 AO1", "4EA1 AO5"],
  
  vocabulary: [
    { term: "Projection", definition: "Speaking loudly and clearly enough for the whole room to hear." },
    { term: "Pace", definition: "The speed of delivery; slower for key points, varied to hold attention." },
    { term: "Pause", definition: "A deliberate silence that lets a point land or marks a transition." },
    { term: "Eye contact", definition: "Looking at listeners to engage them and gauge understanding." },
    { term: "Open posture", definition: "Standing upright and facing the audience, signalling confidence." },
    { term: "Clarification", definition: "Asking a listener to repeat or explain a question before answering." },
  ],
  concepts: [
    {
      id: "el10-u8-delivery-technique",
      title: "Voice, pace and body language",
      skill: "Use vocal and physical techniques to deliver a presentation effectively.",
      lesson: {
        sections: [
          {
            heading: "Voice and pace",
            body: "**Project** so the back row hears you; vary pitch and volume to avoid monotone. Control **pace**: slower for key points, slightly faster for familiar material, and pause before and after important statements. A pause is not dead air — it is emphasis. Breathe before you start; nervous speakers rush.",
          },
          {
            heading: "Body language",
            body: "Stand with **open posture**, feet planted, facing the audience. Use **eye contact** by sweeping the room rather than staring at one person or your notes. Gestures should be purposeful — open hands for inclusion, a pointed finger for emphasis — and none at all is better than fidgeting. Move with intention; pacing randomly signals nerves.",
          },
          {
            heading: "Managing nerves",
            body: "Nerves are normal; channel them. Prepare thoroughly, practise aloud, arrive early, and remember the audience wants you to succeed. If you lose your place, pause, breathe, and continue from your last signpost rather than apologising repeatedly.",
          },
        ],
        keyFormulas: [
          { name: "Projection", statement: "Speak loudly and clearly enough for every listener." },
          { name: "Pace and pause", statement: "Slow for key points; pause before and after them." },
          { name: "Eye contact", statement: "Sweep the room; hold each section of the audience briefly." },
        ],
        workedExample: {
          problem: "A speaker rushes through their final point and is inaudible at the back. Diagnose and fix.",
          solution: "Problems: no projection, rushed pace, no pause before the key point. Fixes: breathe and project to the back row; slow down for the final point; pause before stating it so it lands; use a deliberate gesture and eye contact with the back of the room.",
        },
      },
      questions: [
        {
          id: "el10-u8-delivery-technique-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'projection' mean in presentation delivery?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Showing slides on a projector"
                    },
                    {
                              "id": "b",
                              "text": "Speaking loudly and clearly enough for everyone to hear"
                    },
                    {
                              "id": "c",
                              "text": "Memorising your script perfectly"
                    },
                    {
                              "id": "d",
                              "text": "Standing very still"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Projection",
                              "statement": "Vocal volume and clarity reaching every listener."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Projection is about being heard by the whole room.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "**(b)** Speaking loudly and clearly enough for everyone."
},
        },
        {
          id: "el10-u8-delivery-technique-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two reasons a deliberate pause improves a presentation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Pause",
                              "statement": "Silence marks emphasis and lets points land."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It lets a key point sink in before you move on.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "It signals a transition or builds anticipation.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "A pause lets key points land and signals transitions or builds anticipation."
},
        },
        {
          id: "el10-u8-delivery-technique-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three ways eye contact improves a presentation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Eye contact",
                              "statement": "Visual engagement connects speaker and audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It engages listeners, making them feel addressed.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "It lets you gauge understanding and adjust.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Sweeping the room includes everyone; staring at notes excludes them.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Eye contact engages listeners, lets you gauge understanding and — when swept across the room — includes everyone."
},
        },
        {
          id: "el10-u8-delivery-technique-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A speaker delivers a well-planned presentation but speaks too fast, looks at their notes constantly, and stands rigidly behind the desk. Explain how each problem affects the audience and how to fix it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Delivery diagnosis",
                              "statement": "Vocal and physical habits directly shape audience reception."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Too fast: listeners cannot absorb; fix by slowing for key points and pausing.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Constant note-reading: loses audience and sounds unprepared; fix with signposted memory triggers and eye contact.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Rigid behind desk: signals nervousness and blocks presence; fix with open posture and purposeful movement.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Rushing loses comprehension; note-reading loses engagement; rigidity signals nerves. Fix with paced delivery, pauses, eye contact and open posture.",
          "commonErrors": [
                    "Listing fixes without explaining audience effect."
          ]
},
        },
        {
          id: "el10-u8-delivery-technique-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write delivery notes for yourself for the final 60 seconds of a persuasive presentation. Include pace, pause, eye contact, gesture and voice.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Delivery planning",
                              "statement": "Rehearse not just words but how they will be delivered."
                    },
                    {
                              "kind": "technique",
                              "name": "Vocal and physical emphasis",
                              "statement": "Slow, pause, gesture and eye contact make the ending land."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pace plan: slow deliberately for the final point.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Pause before the key statement and after it.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Eye contact with different sections of the room.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Gesture and voice: open gesture, projected final line, firm tone.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Overall notes are specific and actionable, not generic ('be confident').",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "7",
                              "descriptor": "Specific, actionable delivery notes covering all five elements."
                    },
                    {
                              "level": "Level 2",
                              "marks": "4-6",
                              "descriptor": "Covers most elements with some detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-3",
                              "descriptor": "Generic or incomplete notes."
                    }
          ],
          "finalAnswer": "Specific notes: slow the final point, pause before and after the key line, sweep eye contact, open gesture, projected firm final line.",
          "commonErrors": [
                    "Generic advice like 'speak clearly'."
          ]
},
        },
        {
          id: "el10-u8-delivery-technique-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "A speaker is delivering a presentation and encounters three moments: (1) they lose their place, (2) someone at the back cannot hear them, (3) a listener looks confused. Answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "What should the speaker do when they lose their place?",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "What should the speaker do about the listener who cannot hear?",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "What should the speaker do when a listener looks confused?",
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
                              "name": "Recovery techniques",
                              "statement": "Composure under difficulty is part of effective delivery."
                    },
                    {
                              "kind": "technique",
                              "name": "Audience feedback",
                              "statement": "Reading the room lets you adapt in real time."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pause calmly, breathe, find the last signpost and continue.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "a",
                              "reasoning": "Avoid repeated apologies; resume confidently.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Project more, slow slightly, articulate key words.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Move toward the back or reposition; repeat the point clearly.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Slow down, repeat or rephrase the point in simpler terms.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Check understanding ('Does that make sense?') or use an example.",
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
          "finalAnswer": "(a) Pause, breathe, resume from the last signpost without repeated apology. (b) Project, slow, articulate, reposition, repeat the point. (c) Slow, rephrase simply, check understanding or give an example.",
          "commonErrors": [
                    "Panicking or over-apologising.",
                    "Ignoring non-verbal feedback."
          ]
},
        },
      ],
    },
    {
      id: "el10-u8-qa-skills",
      title: "Responding to questions and discussion",
      skill: "Handle questions, contribute to discussion and evaluate performance effectively.",
      lesson: {
        sections: [
          {
            heading: "Handling questions",
            body: "Listen to the whole question before answering. If unsure of a term, ask for **clarification** ('Do you mean X or Y?'). Answer directly, then expand. If you do not know, say so honestly and offer to follow up — bluffing damages credibility. For hostile or off-topic questions, acknowledge briefly and steer back: 'That's interesting; my focus today was...'.",
          },
          {
            heading: "Contributing to discussion",
            body: "Good discussion contributions **build** on others ('Building on what Amara said...'), **disagree respectfully** ('I see it differently because...'), and **evidence** points ('In the text, the writer...'). Keep contributions concise; a discussion is not a series of mini-speeches. Ask questions as well as answering them.",
          },
          {
            heading: "Evaluating performance",
            body: "Evaluation means judging against criteria: purpose met? audience adapted? structure clear? delivery effective? Be specific — 'the pace was too fast in the middle' beats 'it was okay'. Peer evaluation should be honest but constructive, always suggesting an improvement alongside a criticism.",
          },
        ],
        keyFormulas: [
          { name: "Clarification", statement: "Ask the listener to repeat or define before answering." },
          { name: "Building", statement: "Contributions that extend others' points strengthen discussion." },
          { name: "Criteria-based evaluation", statement: "Judge against purpose, audience, structure and delivery." },
        ],
        workedExample: {
          problem: "A speaker is asked 'But isn't homework actually good for you?' after arguing homework should be reduced. How should they respond?",
          solution: "Acknowledge the point, clarify if needed, then answer with evidence: 'Fair point — some homework consolidates learning. My argument is about quantity and quality: the issue isn't homework itself but excessive, repetitive tasks that displace sleep and wellbeing.' This concedes partially while holding the position.",
        },
      },
      questions: [
        {
          id: "el10-u8-qa-skills-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do first when asked a question you are unsure about?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bluff confidently"
                    },
                    {
                              "id": "b",
                              "text": "Ask the questioner to clarify or repeat"
                    },
                    {
                              "id": "c",
                              "text": "Change the subject immediately"
                    },
                    {
                              "id": "d",
                              "text": "Say nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Clarification",
                              "statement": "Ensure you understand the question before answering."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clarifying prevents answering the wrong question.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "**(b)** Ask for clarification or a repeat."
},
        },
        {
          id: "el10-u8-qa-skills-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two features of a strong discussion contribution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Discussion skills",
                              "statement": "Contributions should build, evidence and stay concise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Builds on others' points or disagrees respectfully with reasoning.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Supported by evidence and kept concise.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Building on or respectfully challenging others' points, supported by evidence and kept concise."
},
        },
        {
          id: "el10-u8-qa-skills-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A speaker does not know the answer to a question. What is the most credible response, and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Honesty in Q&A",
                              "statement": "Credibility is preserved by honesty plus a follow-up offer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Admit not knowing directly rather than bluffing.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Offer to find out or follow up after the session.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Optionally relate it to what you do know to stay helpful.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Say honestly that you don't know, offer to follow up, and if possible connect it to what you do know — honesty preserves credibility."
},
        },
        {
          id: "el10-u8-qa-skills-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "During a discussion, a classmate makes a point you disagree with. Explain how to disagree respectfully and effectively.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Respectful disagreement",
                              "statement": "Challenge ideas, not people; give reasons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Acknowledge the point first ('That's a fair point, but...').",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Give reasoning or evidence for your view ('I see it differently because...').",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Keep it about the idea, not the person; invite response.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Acknowledge their point, disagree with reasons or evidence ('I see it differently because...'), keep it about the idea and invite response.",
          "commonErrors": [
                    "Personal attacks or dismissive language."
          ]
},
        },
        {
          id: "el10-u8-qa-skills-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write peer feedback for a classmate's presentation. It should include one strength, one improvement and one specific suggestion, judged against purpose, audience, structure and delivery.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Peer evaluation",
                              "statement": "Feedback judges against criteria and suggests improvements."
                    },
                    {
                              "kind": "skill",
                              "name": "Constructive criticism",
                              "statement": "Honest but supportive; always pair criticism with a suggestion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specific strength linked to a criterion (e.g. 'Your hook statistic grabbed attention immediately').",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Specific improvement ('The middle section lost pace; three points were rushed').",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Actionable suggestion ('Slow down and pause before your final point').",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Tone is constructive, not harsh.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "7",
                              "descriptor": "Balanced, criteria-based feedback with specific strength, improvement and suggestion."
                    },
                    {
                              "level": "Level 2",
                              "marks": "4-6",
                              "descriptor": "Feedback covers most elements but may be less specific."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-3",
                              "descriptor": "Vague or one-sided feedback."
                    }
          ],
          "finalAnswer": "Specific strength (e.g. effective hook), specific improvement (e.g. rushed middle), actionable suggestion (e.g. pause before the final point) — judged against criteria constructively.",
          "commonErrors": [
                    "Vague praise or criticism.",
                    "Only negative or only positive feedback."
          ]
},
        },
        {
          id: "el10-u8-qa-skills-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "During a presentation Q&A, three situations occur. Answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "A listener asks a question using a term you are unsure they mean. What do you do?",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "A listener challenges your main argument. How do you respond?",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "After the presentation, how do you evaluate your own performance against the criteria of purpose, audience, structure and delivery?",
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
                              "name": "Q&A handling",
                              "statement": "Clarify, answer honestly and engage challenges with evidence."
                    },
                    {
                              "kind": "skill",
                              "name": "Self-evaluation",
                              "statement": "Judge performance against explicit criteria."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ask for clarification: 'Do you mean X or Y?' before answering.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ensures you answer the intended question.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Acknowledge the challenge respectfully.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Respond with reasoning or evidence; concede partially if valid.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hold your position where the evidence supports it.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Assess each criterion specifically: purpose met, audience adapted, structure clear, delivery effective.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Identify one strength and one improvement for next time.",
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
          "finalAnswer": "(a) Ask for clarification before answering. (b) Acknowledge, respond with evidence, concede where valid, hold position where supported. (c) Assess purpose, audience, structure and delivery specifically; note one strength and one improvement.",
          "commonErrors": [
                    "Answering without clarifying.",
                    "Becoming defensive under challenge.",
                    "Vague self-evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u8-delivery-notes",
      title: "Delivery and Q&A — notes",
      summary: "Project, pace, pause, eye contact and open posture deliver the words; clarification, honesty and evidence handle questions.",
      sections: [
        { heading: "Delivery", body: "Voice reaches the back; pace varies; pauses emphasise; eyes engage; posture signals confidence." },
        { heading: "Q&A", body: "Clarify unclear questions, answer honestly, challenge ideas not people, evaluate against criteria." },
      ],
    },
  ],
};
