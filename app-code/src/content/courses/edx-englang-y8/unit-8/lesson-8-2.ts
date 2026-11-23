import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "el8-u8-lesson-8-2",
  code: "8-2",
  title: "Listening and Discussion",
  goal: "I CAN listen actively, respond to others' points and take part in a balanced discussion.",
  standards: ["KS3 English Language", "KS3 Spoken Language and Audience"],
  
  vocabulary: [
    { term: "Active listening", definition: "Listening attentively and responding to what is actually said." },
    { term: "Paraphrase", definition: "Restating someone's point in your own words to show understanding." },
    { term: "Turn-taking", definition: "Sharing speaking time fairly in a discussion." },
    { term: "Interrupting", definition: "Speaking over someone else before they have finished." },
    { term: "Summarise", definition: "Briefly restate the main points of a discussion." },
    { term: "Open question", definition: "A question that invites a full answer rather than yes or no." },
    { term: "Building on", definition: "Adding to or developing someone else's point rather than replacing it." },
    { term: "Non-verbal listening", definition: "Signals such as nodding and eye contact that show you are listening." },
  ],
  concepts: [
    {
      id: "el8-u8-active-listening",
      title: "Active listening",
      skill: "Listen attentively, paraphrase and ask questions to show genuine understanding.",
      lesson: {
        sections: [
          {
            heading: "Hearing vs listening",
            body: "**Hearing** is automatic; **listening** is active and deliberate. Active listening means giving the speaker your attention, processing what they say and responding to it. It involves **non-verbal signals** — nodding, eye contact, an open posture — and verbal responses that show you have taken in the point.",
          },
          {
            heading: "Paraphrase and clarify",
            body: "**Paraphrasing** restates someone's point in your own words: 'So you're saying the trip should be free?' This checks you understood and lets the speaker correct you. **Clarifying questions** ask for more detail: 'What do you mean by too expensive?' Both show respect and prevent misunderstandings.",
          },
          {
            heading: "Asking good questions",
            body: "**Open questions** (starting with what, why, how, tell me about) invite full answers; closed questions (yes/no) end conversation. Good listeners ask questions that move a discussion forward, not just questions that show off. Summarising at the end — 'So we agreed X and Y' — confirms shared understanding.",
          },
        ],
        keyFormulas: [
          { name: "Active listening", statement: "Attentive listening plus a response that shows understanding." },
          { name: "Paraphrase", statement: "Restating a point in your own words to check understanding." },
          { name: "Open question", statement: "Invites a full answer: what, why, how, describe." },
          { name: "Summarise", statement: "Briefly restate main points to confirm agreement." },
        ],
        workedExample: {
          problem: "A classmate says: 'The school trip costs too much for families.' Show two active-listening responses.",
          solution: "Paraphrase: 'So you're saying the cost is putting families off coming?' Clarifying question: 'Which part is the problem — the price itself or the payment deadline?' Both responses show the listener has processed the point rather than just waiting to speak.",
        },
      },
      questions: [
        {
          id: "el8-u8-active-listening-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'active listening'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hearing sounds without thinking about them"
                    },
                    {
                              "id": "b",
                              "text": "Listening attentively and responding to show understanding"
                    },
                    {
                              "id": "c",
                              "text": "Talking while someone else is speaking"
                    },
                    {
                              "id": "d",
                              "text": "Remembering everything word for word"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Active listening",
                              "statement": "Attentive listening plus a response showing understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Active listening combines attention with a response that demonstrates the point was understood.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Listening attentively and responding to show understanding.",
          "commonErrors": [
                    "Confusing it with passive hearing — active listening requires a response."
          ]
},
        },
        {
          id: "el8-u8-active-listening-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Your friend says: 'I think the new canteen menu is rubbish.' Give one paraphrase and one clarifying question that shows active listening.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Paraphrase and clarify",
                              "statement": "Restate the point and ask for detail to show understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Paraphrase example: 'So you think the canteen food isn't very good?' — restates the point in new words.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Clarifying question example: 'Which meals do you think are the worst?' or 'What would you change?'",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Paraphrase: 'So you think the canteen food isn't very good?' Question: 'Which meals do you think are the worst?'",
          "commonErrors": [
                    "Repeating the exact words instead of paraphrasing in your own words."
          ]
},
        },
        {
          id: "el8-u8-active-listening-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between an open question and a closed question, and give one example of each for a discussion about school uniforms.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Open vs closed questions",
                              "statement": "Open questions invite full answers; closed questions invite yes/no."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Open question invites explanation: 'What do you think about school uniforms?' or 'Why should we keep them?'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Closed question invites yes/no: 'Do you like school uniforms?' or 'Should we scrap them?'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Open questions generate discussion and detail; closed questions can end it quickly.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Open: 'What do you think about school uniforms?' Closed: 'Do you like school uniforms?' Open questions invite fuller answers and keep discussion going.",
          "commonErrors": [
                    "Labeling a 'why' question as closed — it is open because it demands explanation."
          ]
},
        },
        {
          id: "el8-u8-active-listening-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "During a group discussion, one student keeps interrupting others and checking their phone. Explain two ways this behaviour affects the discussion, and suggest two improvements for that student.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Listening behaviour",
                              "statement": "Interrupting and inattention break the flow of discussion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effect 1: interrupting means others' points are cut off, so the group loses ideas and the interrupted speakers disengage.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect 2: phone-checking signals disinterest; speakers feel unheard and discussion quality drops.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Improvement 1: wait for the speaker to finish, then respond or build on their point.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Improvement 2: put the phone away and give visible listening signals — nodding, eye contact, a relevant question.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Interrupting cuts off others' ideas and checking phones signals disinterest; improvements are waiting to finish before responding and giving visible listening signals like nodding and eye contact.",
          "commonErrors": [
                    "Suggesting 'listen harder' without concrete behaviour changes."
          ]
},
        },
        {
          id: "el8-u8-active-listening-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain why summarising at the end of a discussion is useful, and describe how you would summarise a discussion about whether homework should be reduced.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Summarising",
                              "statement": "Briefly restating main points confirms shared understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point: a summary confirms what was actually agreed or decided, preventing misunderstandings.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Point: it gives quiet participants a record of the discussion and checks nothing was missed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example summary: 'We agreed homework should be reduced on weekends but kept on school nights, with a review in a term.' — captures both sides and the decision.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The example is brief, neutral and includes the actual conclusion, not just a list of everything said.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Purpose clearly explained plus an accurate, selective summary."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Purpose partly explained or summary too detailed/vague."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Little explanation or inaccurate summary."
                    }
          ],
          "finalAnswer": "Summarising confirms agreement and records decisions; e.g. 'We agreed homework should be reduced at weekends but kept on school nights.'",
          "commonErrors": [
                    "Listing every point instead of selecting the main ones.",
                    "Adding opinions not expressed in the discussion."
          ]
},
        },
        {
          id: "el8-u8-active-listening-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question about active listening.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define 'active listening', 'paraphrase' and 'open question'.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Your friend says: 'School trips are a waste of time because we just walk around.' Give one paraphrase and one clarifying question.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain three non-verbal signals that show you are listening, and describe how a good listener would respond after someone finishes speaking.",
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
                              "name": "Listening terms",
                              "statement": "Active listening, paraphrase and open questions are key discussion skills."
                    },
                    {
                              "kind": "technique",
                              "name": "Non-verbal listening",
                              "statement": "Nodding, eye contact and posture signal attention."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Active listening: attentive listening plus a response showing understanding.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Paraphrase: restating a point in your own words to check understanding.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Open question: invites a full answer rather than yes/no.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Paraphrase: 'So you think school trips aren't worth the time?' or similar restatement.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Clarifying question: 'Which trips do you mean?' or 'What would make them worthwhile?'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Three non-verbal signals: nodding, maintaining eye contact, open/forward posture (or still hands).",
                              "marks": 3,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "After someone finishes: respond to their actual point — paraphrase it, ask a follow-up question, or build on it — rather than launching into a prepared speech.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The response shows the listener processed what was said rather than just waiting for a turn.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Three accurate signals plus a response clearly linked to the speaker's point."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Signals given but response is generic."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Few signals or no meaningful response described."
                    }
          ],
          "finalAnswer": "(a) Three accurate definitions. (b) Paraphrase and clarifying question as above. (c) Nodding, eye contact, open posture; respond by paraphrasing, questioning or building on the point.",
          "commonErrors": [
                    "In (b), repeating the friend's exact words instead of paraphrasing.",
                    "In (c), listing signals without explaining their effect."
          ]
},
        },
      ],
    },
    {
      id: "el8-u8-discussion-skills",
      title: "Discussion skills",
      skill: "Take part in discussions with turn-taking, building on points and polite disagreement.",
      lesson: {
        sections: [
          {
            heading: "Turn-taking",
            body: "A good discussion shares speaking time fairly. **Turn-taking** means waiting for others to finish, not dominating the conversation, and inviting quieter members in: 'What do you think, Amara?' Interrupting is acceptable only for a brief clarification, and even then it should be polite: 'Sorry, can I just check what you meant by that?'",
          },
          {
            heading: "Building and disagreeing",
            body: "**Building on** a point means adding to it rather than replacing it: 'That's a good point — and it also means we could...' **Disagreeing politely** focuses on the idea, not the person: 'I see it differently because...' rather than 'You're wrong.' Acknowledge the other side before giving yours — it makes discussion productive rather than combative.",
          },
          {
            heading: "Contributing well",
            body: "Make contributions relevant and concise. Support points with reasons or examples rather than just opinions. If you change your mind during a discussion, say so — it shows flexible thinking. Summarise where the discussion has got to if it begins to drift, and help the group reach a conclusion or next step.",
          },
        ],
        keyFormulas: [
          { name: "Turn-taking", statement: "Sharing speaking time fairly; waiting for others to finish." },
          { name: "Building on", statement: "Adding to someone else's point rather than replacing it." },
          { name: "Polite disagreement", statement: "Challenge the idea, not the person." },
          { name: "Summarise", statement: "Restate progress to keep the discussion on track." },
        ],
        workedExample: {
          problem: "In a debate about school phones, Dev says 'Phones should be banned.' Write a response that builds on his point and then disagrees politely with a reason.",
          solution: "'That's a fair point about distraction — it's true phones do break concentration. But I think a ban goes too far, because phones are how we contact parents in an emergency. Maybe the answer is phones allowed at break times only.' This builds on the point, disagrees on the idea with a reason, and offers a middle position.",
        },
      },
      questions: [
        {
          id: "el8-u8-discussion-skills-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'turn-taking' in a discussion?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Taking turns to shout the loudest"
                    },
                    {
                              "id": "b",
                              "text": "Sharing speaking time fairly by waiting for others to finish"
                    },
                    {
                              "id": "c",
                              "text": "Finishing other people's sentences"
                    },
                    {
                              "id": "d",
                              "text": "Agreeing with everything said"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Turn-taking",
                              "statement": "Sharing speaking time fairly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Turn-taking means letting each speaker finish and sharing time, not dominating or competing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Sharing speaking time fairly by waiting for others to finish.",
          "commonErrors": [
                    "Thinking turn-taking means only speaking in order — it also means giving others space."
          ]
},
        },
        {
          id: "el8-u8-discussion-skills-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rewrite this rude interruption politely: 'Shut up, you're not listening to me.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Polite interruption",
                              "statement": "A brief, courteous request for the floor is acceptable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The polite version acknowledges the other speaker and asks briefly, e.g. 'Sorry, can I come in for a second?' or 'Sorry, I didn't catch your last point.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It removes the aggression ('shut up') and the accusation ('you're not listening').",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "'Sorry, can I come in for a second?' or 'Sorry, I didn't quite catch that — could you say it again?'",
          "commonErrors": [
                    "Softening the wording but keeping the accusation, e.g. 'Sorry but you're wrong.'"
          ]
},
        },
        {
          id: "el8-u8-discussion-skills-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'building on' someone's point and simply disagreeing with it. Give an example of each for the statement 'We should have longer lunch breaks.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Building vs disagreeing",
                              "statement": "Building adds to a point; disagreeing challenges it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Building on: accept the point and extend it, e.g. 'Longer breaks would help — we could use the time for clubs.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Disagreeing: challenge with a reason, e.g. 'I see it differently — longer breaks would mean a shorter afternoon.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The difference: building treats the point as a foundation; disagreeing treats it as a claim to test.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Building: 'Longer breaks would help — we could use the time for clubs.' Disagreeing: 'I see it differently — longer breaks would mean a shorter afternoon.'",
          "commonErrors": [
                    "Calling a flat contradiction 'building on' — adding requires extending the original idea."
          ]
},
        },
        {
          id: "el8-u8-discussion-skills-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "In a class debate, one student has spoken for ten minutes without pause while others wait. Explain two problems this causes, and describe how a chairperson or the group could respond.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Fair turn-taking",
                              "statement": "Dominating discussion excludes others and reduces idea quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem 1: others are denied a chance to speak, so their ideas are lost and they disengage.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Problem 2: a single long contribution often drifts or repeats, reducing the discussion's focus.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Response: the chairperson politely signals time ('Thank you — let's hear from someone else') or invites quieter members in.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Response: group members can use a brief polite interruption or ask a question that opens the floor.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Long monologues exclude others and lose focus; the chair or group should politely manage time and invite others to contribute.",
          "commonErrors": [
                    "Suggesting the student should 'just stop' without a polite mechanism for doing so."
          ]
},
        },
        {
          id: "el8-u8-discussion-skills-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how to disagree with someone politely in a discussion. Give three techniques, with an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Polite disagreement",
                              "statement": "Challenge the idea, not the person."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Technique 1: acknowledge the other point first — 'That's a fair point, but...' — shows respect.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Technique 2: use 'I' statements focused on the idea — 'I see it differently because...' — not 'you're wrong'.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Technique 3: give a reason or example for your view so the disagreement is substantive, not just oppositional.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Examples are accurate and clearly polite rather than combative.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Three distinct techniques with clear examples."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Two techniques or examples lacking clarity."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Vague advice or combative examples."
                    }
          ],
          "finalAnswer": "Acknowledge first ('That's fair, but...'), use 'I' statements ('I see it differently because...'), and support your view with a reason — all aimed at the idea, not the person.",
          "commonErrors": [
                    "Examples that attack the person rather than the idea."
          ]
},
        },
        {
          id: "el8-u8-discussion-skills-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question about discussion skills.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define 'turn-taking', 'building on' and 'summarise'.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "In a debate about whether phones should be allowed in class, write one contribution that builds on a previous point and one that disagrees politely with a reason.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain three skills a good discussion participant needs, and describe how you would behave in the last minute of a discussion that has gone off-topic.",
                    "marks": 5
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Discussion terms",
                              "statement": "Turn-taking, building on and summarising are core discussion skills."
                    },
                    {
                              "kind": "technique",
                              "name": "Contributing",
                              "statement": "Good participants listen, build, disagree politely and steer the discussion."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Turn-taking: sharing speaking time fairly; building on: adding to someone's point; summarise: restating main points.",
                              "marks": 3,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Building contribution, e.g. 'Phones do distract — and they also tempt students to cheat, which is another problem.'",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Disagreeing contribution, e.g. 'I see it differently — phones are needed for safety, so a total ban could be risky.'",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Three skills: listening actively, contributing relevant points with reasons, and steering/summarising.",
                              "marks": 3,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Off-topic response: politely summarise where the discussion has got to and propose returning to the question or reaching a conclusion.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Three accurate skills plus a specific, polite steering action."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Skills listed but steering advice vague."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Few skills or no steering advice."
                    }
          ],
          "finalAnswer": "(a) Three accurate definitions. (b) Build by extending a point; disagree politely with a reason. (c) Listen, contribute with reasons, steer; summarise and refocus when off-topic.",
          "commonErrors": [
                    "In (b), writing a contribution that ignores the previous speaker's point.",
                    "In (c), suggesting the group should 'just stop talking' rather than steering politely."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el8-u8-listening-notes",
      title: "Listening and discussion — notes",
      summary: "Active listening = attention + response. Good discussion = fair turns, building on points, polite disagreement, and steering when needed.",
      sections: [
        { heading: "Listening", body: "Paraphrase to check understanding; ask open questions; summarise to confirm agreement." },
        { heading: "Discussing", body: "Wait your turn; build on points; disagree with 'I see it differently because...' and give reasons." },
        { heading: "Steering", body: "Summarise progress when the discussion drifts and help the group reach a conclusion." },
      ],
    },
  ],
};
