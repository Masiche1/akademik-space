import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "el8-u9-lesson-9-3",
  code: "9-3",
  title: "Listening and Responding",
  goal: "I CAN listen actively by paraphrasing, clarifying and tracking key points, and give constructive feedback on spoken work.",
  standards: ["KS3 Spoken Language", "KS3 AO1", "KS3 AO3"],
  
  vocabulary: [
    { term: "Active listening", definition: "Fully concentrating on a speaker, showing understanding through response." },
    { term: "Paraphrase", definition: "Restating someone's point in your own words to check understanding." },
    { term: "Clarifying question", definition: "A question that checks meaning, e.g. 'Do you mean...?'" },
    { term: "Non-verbal listening", definition: "Nodding, eye contact and facial expression that show attention." },
    { term: "Constructive feedback", definition: "Specific, balanced comments that help someone improve." },
    { term: "Success criteria", definition: "The agreed features a piece of work or performance must show." },
  ],
  concepts: [
    {
      id: "el8-u9-active-listening",
      title: "Active listening",
      skill: "Listen actively by paraphrasing, asking clarifying questions and tracking key points without interrupting.",
      lesson: {
        sections: [
          {
            heading: "What active listening looks like",
            body: "Active listeners give the speaker their full attention: eyes on the speaker, no phone, no planning your reply while they talk. They respond with **non-verbal** cues — nods, 'mm-hm', leaning in — and **verbal** ones — paraphrases and questions. The goal is understanding before responding.",
          },
          {
            heading: "Paraphrasing and clarifying",
            body: "Paraphrase the main point in your own words: 'So you're saying the trip was worth it despite the rain?' If unsure, ask a clarifying question: 'When you say 'it was chaotic', do you mean badly organised or just very busy?' This prevents misunderstanding better than guessing. Only after understanding should you agree, disagree or add.",
          },
          {
            heading: "Tracking key points",
            body: "In longer talks, mentally note the main points — or jot quick keywords if allowed. When the speaker finishes, you can summarise: 'Your three points were cost, safety and educational value.' Tracking points helps you respond to the whole talk, not just the last sentence.",
          },
        ],
        keyFormulas: [
          { name: "Listen-then-respond", statement: "Understand first; react second." },
          { name: "Paraphrase frame", statement: "'So you're saying...' / 'It sounds like...'" },
          { name: "Clarify frame", statement: "'Do you mean...?' / 'When you say X, do you mean Y?'" },
        ],
        workedExample: {
          problem: "A classmate says: 'The new homework policy is pointless because nobody reads the feedback anyway.' Respond as an active listener.",
          solution: "Paraphrase first: 'So your point is that feedback only matters if teachers actually read it — is that right?' Clarify if needed: 'Do you mean students don't read it, or teachers don't respond to it?' Then respond to the clarified point.",
        },
      },
      questions: [
        {
          id: "el8-u9-active-listening-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A speaker says something you do not fully understand. What is the best first response?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Interrupt and give your own opinion"
                    },
                    {
                              "id": "b",
                              "text": "Ask a clarifying question"
                    },
                    {
                              "id": "c",
                              "text": "Wait until they finish, then change the subject"
                    },
                    {
                              "id": "d",
                              "text": "Nod and pretend you understood"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Active listening",
                              "statement": "Check understanding before responding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A clarifying question checks meaning; the other options either interrupt, avoid the issue or fake understanding.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Ask a clarifying question.",
          "commonErrors": [
                    "Choosing to wait silently; the misunderstanding then goes uncorrected."
          ]
},
        },
        {
          id: "el8-u9-active-listening-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Paraphrase this statement in your own words: 'I reckon the school trip was worth every penny, even though it chucked it down the whole time.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Paraphrasing",
                              "statement": "Restate the meaning without copying the words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Captures the main point: the trip was good value despite the bad weather.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Uses different wording and removes slang ('reckon', 'chucked it down').",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'You're saying the trip was good value for money even though the weather was terrible.'",
          "commonErrors": [
                    "Copying the original sentence with small changes.",
                    "Adding your own opinion about trips."
          ]
},
        },
        {
          id: "el8-u9-active-listening-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three techniques an active listener uses while someone else is speaking.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Active listening",
                              "statement": "Attention plus responsive cues."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives full attention: eyes on speaker, no phone or side conversations.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Uses non-verbal cues such as nodding, 'mm-hm' and appropriate facial expression.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Waits for the speaker to finish before responding, or asks a clarifying question rather than interrupting.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Full attention, non-verbal encouragement (nodding, 'mm-hm'), and not interrupting — waiting or clarifying instead.",
          "commonErrors": [
                    "Listing 'listening' without specific behaviours.",
                    "Suggesting interrupting to agree."
          ]
},
        },
        {
          id: "el8-u9-active-listening-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A classmate gives a two-minute talk about their favourite book, then asks 'What do you think?' Analyse what went wrong if the listener replies 'I preferred the film version, it was more exciting.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Responding to talks",
                              "statement": "Respond to what was actually said."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The reply ignores the talk's content entirely, comparing to a film the speaker did not mention.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It sounds like the listener was not paying attention, which discourages the speaker.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It introduces a new topic instead of engaging with the book discussion.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A better response paraphrases a point then comments on it, showing the talk was heard.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The listener failed to engage with the talk — the reply ignores its content, suggests inattention and changes the subject; a paraphrase-plus-comment would have worked.",
          "commonErrors": [
                    "Saying only 'it is rude' without explaining why it fails as listening."
          ]
},
        },
        {
          id: "el8-u9-active-listening-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Group project talk",
          "author": "Written for Akademik Space",
          "text": "Maya: I think we should split the presentation into three parts — I'll do the introduction and conclusion, Sam does the middle, and Dev does the visuals.\nSam: Okay, but I want to do the conclusion — I worked hardest on the research.\nDev: Honestly? None of this matters until we know if the PowerPoint template works on the hall screen. Last time the colours went all weird.\nMaya: Good point — I'll test it tomorrow. So: Dev tests the screen, I do intro and conclusion, Sam does the middle?"
},
          stem: "Evaluate this exchange between two students discussing a group project. How well does each act as a listener?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Listening in discussion",
                              "statement": "Track points, respond to content, resolve fairly."
                    },
                    {
                              "kind": "technique",
                              "name": "Paraphrase and summarise",
                              "statement": "Restating confirms understanding and moves things on."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Maya listens and paraphrases the emerging plan accurately at the end.",
                              "evidence": "Dev tests the screen, I do intro and conclusion",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Dev redirects to a practical problem, showing he heard but prioritised a different issue.",
                              "evidence": "None of this matters until we know if the PowerPoint template works",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sam's objection is heard but he does not build on Maya's proposal; tension remains partly unresolved.",
                              "evidence": "I want to do the conclusion",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Maya's final summary integrates everyone's point — testing the screen, roles — showing effective tracking.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall the group listens reasonably well, though Sam's complaint is only half-addressed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Judgement: mostly effective listening; the unresolved role dispute shows a gap.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Evaluates each listener with evidence and a balanced judgement."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Evaluates most speakers; partial judgement."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple comments; little evidence."
                    }
          ],
          "finalAnswer": "Maya paraphrases and summarises well; Dev raises a valid practical point; Sam's objection is heard but unresolved — listening is mostly effective with one gap.",
          "commonErrors": [
                    "Judging the plan rather than the listening.",
                    "No evidence quoted."
          ]
},
        },
        {
          id: "el8-u9-active-listening-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "Group project talk",
          "author": "Written for Akademik Space",
          "text": "Maya: I think we should split the presentation into three parts — I'll do the introduction and conclusion, Sam does the middle, and Dev does the visuals.\nSam: Okay, but I want to do the conclusion — I worked hardest on the research.\nDev: Honestly? None of this matters until we know if the PowerPoint template works on the hall screen. Last time the colours went all weird.\nMaya: Good point — I'll test it tomorrow. So: Dev tests the screen, I do intro and conclusion, Sam does the middle?"
},
          stem: "Answer all parts of this question about active listening.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two differences between hearing and active listening.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Analyse how Maya shows she has been listening in her final line.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a response Sam could give that shows active listening before he continues arguing about roles.",
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
                              "name": "Active listening",
                              "statement": "Attention plus responsive understanding."
                    },
                    {
                              "kind": "skill",
                              "name": "Responsive speaking",
                              "statement": "Paraphrase or clarify before adding your view."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Hearing is passive sound; active listening involves attention and response.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Active listening includes paraphrasing, clarifying and tracking points; hearing does not.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Her summary includes Dev's new point about testing the screen, showing she tracked the whole talk.",
                              "evidence": "Dev tests the screen",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "She restates the role allocation in her own order, confirming her understanding of Maya's original plan.",
                              "evidence": "I do intro and conclusion, Sam does the middle",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "She resolves Dev's objection by assigning him a concrete task, showing she heard the substance.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Effect: the paraphrase keeps everyone aligned and lets Sam's dispute stand out clearly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Paraphrases or acknowledges Maya's proposed roles before objecting.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Gives his reason for wanting the conclusion (his research).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Offers a compromise or alternative rather than just repeating his demand.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Responds to Dev's screen-testing point or accepts it.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Language is natural for speech and sentences accurate.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Paraphrases first, states reason, offers compromise; fully responsive."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Acknowledges then argues; partial responsiveness."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Repeats the demand without engaging."
                    }
          ],
          "finalAnswer": "(a) Passive hearing vs attention plus response. (b) Maya's summary tracks all points including Dev's and assigns tasks. (c) Sam paraphrases the plan, states his reason and offers a compromise.",
          "commonErrors": [
                    "Confusing paraphrase with repeating verbatim.",
                    "A response that ignores what Maya said."
          ],
          "examinerNote": "Part (c) is marked for responsive speaking (AO4)."
},
        },
      ],
    },
    {
      id: "el8-u9-feedback-evaluation",
      title: "Feedback and evaluation",
      skill: "Give constructive feedback that is specific, balanced and actionable, and evaluate spoken work against success criteria.",
      lesson: {
        sections: [
          {
            heading: "What good feedback does",
            body: "Constructive feedback is **specific** ('your opening hooked me, but the middle lost focus'), **balanced** (strengths and improvements), and **actionable** (the listener knows exactly what to change). Vague comments — 'it was good', 'you could be louder' — help nobody. Anchor feedback to **success criteria**: did the talk have a hook? clear structure? audience-appropriate language?",
          },
          {
            heading: "The feedback sandwich",
            body: "A reliable pattern: **strength → improvement → encouragement**. 'Your hook was great (strength). The middle section jumped between three ideas — signposting them would help (improvement). With that fix this will be excellent (encouragement).' Avoid backhanded comments: 'Good, but...' often lands as only 'but'.",
          },
          {
            heading: "Evaluating against criteria",
            body: "When assessing a presentation or debate, work through the agreed criteria one at a time: content, structure, language, delivery. Quote or point to specific moments as evidence. A judgement ('effective because...') is stronger than a score alone.",
          },
        ],
        keyFormulas: [
          { name: "Feedback formula", statement: "Specific + balanced + actionable." },
          { name: "Sandwich", statement: "Strength → improvement → encouragement." },
          { name: "Criteria checklist", statement: "Content, structure, language, delivery." },
        ],
        workedExample: {
          problem: "Give feedback on a classmate's talk that had a strong opening but lost focus halfway and spoke too quietly at the end.",
          solution: "'Your opening question really hooked the audience, and your examples were memorable. The middle section covered too many points without signposts, so listeners lost the thread — pick two key ideas and signpost them. Your voice faded in the last minute; project to the back row. Fix those two things and this will be excellent.'",
        },
      },
      questions: [
        {
          id: "el8-u9-feedback-evaluation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the most useful feedback for a speaker?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'It was fine.'"
                    },
                    {
                              "id": "b",
                              "text": "'You were really loud and annoying.'"
                    },
                    {
                              "id": "c",
                              "text": "'Your hook was strong; signpost your middle points so listeners can follow.'"
                    },
                    {
                              "id": "d",
                              "text": "'I would never give a talk like that.'"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Constructive feedback",
                              "statement": "Specific, balanced, actionable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(c) is specific, balanced and tells the speaker exactly what to improve; the others are vague or purely negative.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** The specific, actionable comment.",
          "commonErrors": [
                    "Choosing (b) because it is 'honest'; honesty without specificity is not useful feedback."
          ]
},
        },
        {
          id: "el8-u9-feedback-evaluation-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rewrite this unhelpful feedback so it is constructive: 'Your talk was boring and you mumbled.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Constructive feedback",
                              "statement": "Replace judgements with specific, kind, actionable points."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Replaces the judgement 'boring' with a specific observation, e.g. 'the middle lost focus'.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Replaces 'mumbled' with an actionable suggestion, e.g. 'project your voice to the back row'.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'Your opening was strong, but the middle section moved between too many ideas — signpost two key points. Also, your voice faded towards the end; project to the back of the room.'",
          "commonErrors": [
                    "Keeping the judgement words 'boring' or 'mumbled'.",
                    "Giving only criticism with no strength."
          ]
},
        },
        {
          id: "el8-u9-feedback-evaluation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'feedback sandwich' and why the order of comments matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Feedback sandwich",
                              "statement": "Strength → improvement → encouragement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The pattern is: genuine strength, then improvement, then encouragement.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Starting positive keeps the listener receptive; ending positive leaves them motivated.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The improvement sits in the middle where it is heard as a fixable issue, not an attack.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Strength first opens the listener, improvement in the middle is heard constructively, encouragement last rebuilds confidence.",
          "commonErrors": [
                    "Describing it as 'nice comments only'.",
                    "Ignoring why order matters."
          ]
},
        },
        {
          id: "el8-u9-feedback-evaluation-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student evaluates a classmate's debate speech and writes: 'It was 7 out of 10.' Explain what is missing and rewrite it as useful evaluative feedback.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluative feedback",
                              "statement": "Scores need reasons linked to criteria."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The score has no evidence or reasons, so neither speaker nor listener learns anything.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Missing: which criteria were met — claim clarity, evidence, rebuttal, delivery.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Missing: specific moments or quotes as evidence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Rewritten feedback links judgement to criteria, e.g. 'strong claim and evidence, but no rebuttal; delivery rushed the close'.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "A bare score is empty; useful feedback names criteria met, cites evidence, and suggests improvements.",
          "commonErrors": [
                    "Suggesting a different number instead of reasons.",
                    "Feedback that is all praise or all criticism."
          ]
},
        },
        {
          id: "el8-u9-feedback-evaluation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Two feedback comments",
          "author": "Written for Akademik Space",
          "text": "Student A: 'Your talk was good. You seemed nervous but you knew your stuff. Maybe try to relax more.'\n\nStudent B: 'Your opening question hooked me straight away. The middle section covered three different ideas, so I lost track — signposting them would help. Your voice also dropped in the last paragraph; project to the back row. With those two fixes it would be excellent.'"
},
          stem: "Two students give feedback on the same talk. Analyse which is more useful and why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Feedback quality",
                              "statement": "Specific, balanced, actionable beats vague."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Link comments to observable features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Student A's comments are vague: 'good', 'knew your stuff', 'relax more' give no actionable detail.",
                              "evidence": "Maybe try to relax more",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Student B identifies a specific strength (the opening hook) with evidence.",
                              "evidence": "Your opening question hooked me straight away",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "B pinpoints a precise problem (three ideas without signposts) and the fix.",
                              "evidence": "signposting them would help",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "B adds a second specific issue (voice dropping) with a delivery solution.",
                              "evidence": "project to the back row",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "B ends with encouragement, keeping the speaker motivated.",
                              "evidence": "With those two fixes it would be excellent",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall B is far more useful because it is specific, balanced and actionable.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Compares both fully with evidence and a clear judgement."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Identifies B as better with some reasons."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple preference without analysis."
                    }
          ],
          "finalAnswer": "Student B's feedback is more useful: specific strengths, precise problems with fixes, and encouragement.",
          "commonErrors": [
                    "Saying both are 'fine' without analysis.",
                    "Quoting without comparing usefulness."
          ]
},
        },
        {
          id: "el8-u9-feedback-evaluation-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "Two feedback comments",
          "author": "Written for Akademik Space",
          "text": "Student A: 'Your talk was good. You seemed nervous but you knew your stuff. Maybe try to relax more.'\n\nStudent B: 'Your opening question hooked me straight away. The middle section covered three different ideas, so I lost track — signposting them would help. Your voice also dropped in the last paragraph; project to the back row. With those two fixes it would be excellent.'"
},
          stem: "Answer all parts of this question about feedback and evaluation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the three features of constructive feedback.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how Student B's feedback follows the feedback sandwich.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write feedback on a classmate's presentation, giving one strength, two improvements and one encouragement, each with a reason.",
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
                              "name": "Constructive feedback",
                              "statement": "Specific, balanced, actionable."
                    },
                    {
                              "kind": "technique",
                              "name": "Feedback sandwich",
                              "statement": "Strength, improvement, encouragement."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Specific: points to exact features, not general judgements.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Balanced and actionable: includes improvements the listener can act on.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Strength first: the opening hook is praised before criticism.",
                              "evidence": "Your opening question hooked me straight away",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Improvements in the middle: signposting and voice projection are the 'fixable' issues.",
                              "evidence": "signposting them would help",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each improvement comes with a reason or effect (lost track, back row).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Encouragement last: 'it would be excellent' ends positively.",
                              "evidence": "With those two fixes it would be excellent",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Gives a genuine, specific strength with a reason.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Gives two improvements, each specific and actionable.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Ends with encouragement that motivates improvement.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Feedback is kind in tone even when critical.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "All elements present, specific, balanced and kind."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Most elements present; some generic."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Vague or incomplete feedback."
                    }
          ],
          "finalAnswer": "(a) Specific, balanced, actionable. (b) Strength → improvements with reasons → encouragement. (c) A complete sandwich-structured feedback comment.",
          "commonErrors": [
                    "Feedback that is all praise or all criticism.",
                    "Improvements without reasons or actions."
          ],
          "examinerNote": "Part (c) is marked for effective feedback writing (AO4)."
},
        },
      ],
    },
  ],

};
