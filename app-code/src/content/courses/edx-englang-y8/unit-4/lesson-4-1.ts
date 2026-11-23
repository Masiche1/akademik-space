import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "el8-u4-lesson-4-1",
  code: "4-1",
  title: "Active Listening and Discussion",
  goal: "I CAN listen actively, respond constructively and take part in a balanced discussion.",
  standards: ["KS3 Spoken Language", "KS3 AO1", "KS3 AO3"],
  
  vocabulary: [
    { term: "Active listening", definition: "Fully concentrating on a speaker, processing the meaning and responding appropriately." },
    { term: "Paraphrase", definition: "Restating someone else's point in your own words to show you understand it." },
    { term: "Turn-taking", definition: "The rules that decide when each speaker contributes." },
    { term: "Constructive response", definition: "A reply that builds on, questions or evaluates an idea without attacking the speaker." },
    { term: "Consensus", definition: "A shared agreement reached after discussion." },
    { term: "Interrupting", definition: "Speaking before the current speaker has finished." },
  ],
  concepts: [
    {
      id: "el8-u4-active-listening",
      title: "Active listening",
      skill: "Use verbal and non-verbal signals to understand a speaker and respond accurately.",
      lesson: {
        sections: [
          {
            heading: "Hearing is not listening",
            body: "Hearing is automatic; listening is a skill. Active listening means following the argument, noticing key details and deciding what response is needed.",
          },
          {
            heading: "Signals of good listening",
            body: "Good listeners make eye contact, nod, keep an open posture and avoid interrupting. They paraphrase ('So you are saying...'), ask clarifying questions and refer back to earlier points.",
          },
        ],
        keyFormulas: [
          { name: "Paraphrase", statement: "Restate the speaker's point in your own words before responding." },
          { name: "Clarifying question", statement: "A question that checks understanding, such as 'Do you mean...?'." },
          { name: "Active listening", statement: "Attend, understand, remember and respond appropriately." },
        ],
        workedExample: {
          problem: "A classmate says the library should open earlier. Give a constructive listening response.",
          solution: "'You think earlier opening would help students who cannot study before school. Is the main problem access or quiet space? A one-month trial with a suggestion box would test your idea fairly.'",
        },
      },
      questions: [
        {
          id: "el8-u4-active-listening-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which action shows active listening?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Nodding, making eye contact and asking a clarifying question"
                    },
                    {
                              "id": "b",
                              "text": "Preparing your own speech while the speaker talks"
                    },
                    {
                              "id": "c",
                              "text": "Interrupting to give your opinion"
                    },
                    {
                              "id": "d",
                              "text": "Looking at your phone and smiling"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Active listening",
                              "statement": "Listening involves attention and an appropriate response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Active listening requires attention to the speaker and a response that shows understanding.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "Nodding, making eye contact"
                    }
          ],
          "finalAnswer": "**(a)** Nodding, eye contact and a clarifying question.",
          "commonErrors": [
                    "Choosing (b): preparing a reply can mean missing the speaker's point."
          ]
},
        },
        {
          id: "el8-u4-active-listening-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two non-verbal signals that show you are listening carefully.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Listening signals",
                              "statement": "Body language communicates attention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Eye contact or an open posture shows attention.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Nodding or leaning slightly forward shows engagement.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Eye contact and nodding, or another clear non-verbal signal such as an open posture.",
          "commonErrors": [
                    "Naming verbal responses only."
          ]
},
        },
        {
          id: "el8-u4-active-listening-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between hearing and listening, and why both matter in a discussion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hearing and listening",
                              "statement": "Hearing is automatic; listening is deliberate."
                    },
                    {
                              "kind": "skill",
                              "name": "Discussion",
                              "statement": "Understanding others improves the quality of a discussion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hearing means sound reaches your ears; listening means processing meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Active listening helps you understand, remember and respond accurately.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "It also shows respect and reduces misunderstandings.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Hearing is receiving sound; listening is understanding it. Listening matters because it supports accurate responses and respectful discussion."
},
        },
        {
          id: "el8-u4-active-listening-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
          "title": "School council discussion",
          "author": "Written for Akademik Space",
          "text": "Maya: I think the library should open at seven thirty because many students cannot study before school.\n\nTom: That is pointless. Nobody reads before school anyway.\n\nSam: So you are saying opening earlier would not help students? I am not sure I agree, because some of us revise on the bus. What if we trial it for one month and ask students?\n\nMaya: A trial sounds fair. We could put a suggestion box by the door."
},
          stem: "How effective is Tom's response in the school council discussion? Refer to the extract.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Discussion response",
                              "statement": "Evaluate how a speaker contributes to discussion."
                    },
                    {
                              "kind": "technique",
                              "name": "Language choice",
                              "statement": "Word choice affects whether a response is constructive or dismissive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tom dismisses Maya's idea immediately with 'That is pointless'.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "That is pointless."
                    },
                    {
                              "reasoning": "His claim 'Nobody reads before school anyway' is an unsupported sweeping statement.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "Nobody reads before school anyway."
                    },
                    {
                              "reasoning": "He does not paraphrase or ask a question, so he may misunderstand the proposal.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "His response weakens collaboration and may make Maya defensive.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Tom's response is ineffective: it dismisses the idea, makes an unsupported generalisation and does not show understanding before disagreeing.",
          "commonErrors": [
                    "Only saying Tom is rude without explaining why."
          ]
},
        },
        {
          id: "el8-u4-active-listening-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "School council discussion",
          "author": "Written for Akademik Space",
          "text": "Maya: I think the library should open at seven thirty because many students cannot study before school.\n\nTom: That is pointless. Nobody reads before school anyway.\n\nSam: So you are saying opening earlier would not help students? I am not sure I agree, because some of us revise on the bus. What if we trial it for one month and ask students?\n\nMaya: A trial sounds fair. We could put a suggestion box by the door."
},
          stem: "Write a short constructive response to Maya's suggestion. Use paraphrasing, one question and one practical proposal.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Constructive response",
                              "statement": "Acknowledge, clarify and build on an idea."
                    },
                    {
                              "kind": "convention",
                              "name": "Discussion language",
                              "statement": "Polite, precise language supports collaboration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Paraphrases Maya's point accurately.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Asks a clarifying question.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Offers a practical proposal or compromise.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'You think opening at seven thirty would help students who cannot study before school. Is the main problem access or quiet space? A one-month trial with a suggestion box would test the idea fairly.'",
          "commonErrors": [
                    "Attacking Tom instead of responding to Maya.",
                    "Agreeing without checking understanding."
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
          id: "el8-u4-active-listening-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "School council discussion",
          "author": "Written for Akademik Space",
          "text": "Maya: I think the library should open at seven thirty because many students cannot study before school.\n\nTom: That is pointless. Nobody reads before school anyway.\n\nSam: So you are saying opening earlier would not help students? I am not sure I agree, because some of us revise on the bus. What if we trial it for one month and ask students?\n\nMaya: A trial sounds fair. We could put a suggestion box by the door."
},
          stem: "Answer all parts of this question about the school council discussion.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down two practical details from the discussion.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how Sam shows active listening.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how effectively the group reaches agreement.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Discussion analysis",
                              "statement": "Identify contributions, listening behaviours and outcomes."
                    },
                    {
                              "kind": "context",
                              "name": "Group decision-making",
                              "statement": "Evaluate whether a discussion produces a workable agreement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The library could open at seven thirty.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "open at seven thirty"
                    },
                    {
                              "reasoning": "A one-month trial with a suggestion box is proposed.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "trial it for one month"
                    },
                    {
                              "reasoning": "Sam paraphrases Tom's point before responding.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b",
                              "evidence": "So you are saying opening earlier would not help students?"
                    },
                    {
                              "reasoning": "Sam challenges the claim politely rather than attacking Tom.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b",
                              "evidence": "I am not sure I agree"
                    },
                    {
                              "reasoning": "Sam offers a constructive compromise: a trial and student feedback.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b",
                              "evidence": "What if we trial it for one month"
                    },
                    {
                              "reasoning": "The group moves from disagreement to a shared next step.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c",
                              "evidence": "A trial sounds fair."
                    },
                    {
                              "reasoning": "Maya accepts the proposal, showing the discussion has produced consensus.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c",
                              "evidence": "A trial sounds fair."
                    },
                    {
                              "reasoning": "The suggestion box gives students a voice and makes the trial measurable.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c",
                              "evidence": "suggestion box by the door"
                    }
          ],
          "finalAnswer": "(a) Opening at seven thirty; a one-month trial with a suggestion box. (b) Sam paraphrases Tom, disagrees politely and proposes a trial. (c) The discussion is effective because it moves from opposing views to a fair trial with student feedback.",
          "commonErrors": [
                    "Treating paraphrasing as agreement.",
                    "Ignoring Maya's final acceptance."
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
      id: "el8-u4-constructive-discussion",
      title: "Constructive discussion",
      skill: "Contribute to discussion using turn-taking, respectful disagreement and evidence.",
      lesson: {
        sections: [
          {
            heading: "Taking turns",
            body: "In discussion, speakers take turns so everyone can be heard. Signals such as 'May I come in here?' or waiting for a pause show respect. Interrupting can make an important point seem dismissive.",
          },
          {
            heading: "Agreeing and disagreeing",
            body: "Strong discussion is not about winning. Use phrases such as 'I see your point, but...' or 'That may be true; however...'. Support a disagreement with a reason or example, and acknowledge the other side where possible.",
          },
        ],
        keyFormulas: [
          { name: "Turn-taking", statement: "Wait for a pause or invitation before speaking." },
          { name: "Disagree constructively", statement: "Acknowledge the other view, then give a reason or counter-example." },
          { name: "Evidence in discussion", statement: "Support a point with an example, fact or experience." },
        ],
        workedExample: {
          problem: "Rewrite this rude disagreement: 'Your idea is wrong because phones are bad.'",
          solution: "'I can see why phones might help in some lessons, but notifications can split attention. Perhaps we could allow them for research only.'",
        },
      },
      questions: [
        {
          id: "el8-u4-constructive-discussion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the most constructive way to disagree?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Say the other person is wrong and move on"
                    },
                    {
                              "id": "b",
                              "text": "Acknowledge the point, then give a reason or counter-example"
                    },
                    {
                              "id": "c",
                              "text": "Stay silent so nobody argues"
                    },
                    {
                              "id": "d",
                              "text": "Change the subject immediately"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Disagreement",
                              "statement": "Respectful disagreement includes acknowledgement and reasoning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constructive disagreement acknowledges the other view and supports a different position with reasoning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Acknowledge, then give a reason or counter-example.",
          "commonErrors": [
                    "Choosing (a): it attacks rather than argues."
          ]
},
        },
        {
          id: "el8-u4-constructive-discussion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two rules of turn-taking in a discussion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Turn-taking",
                              "statement": "Speakers should contribute without dominating or interrupting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wait for the current speaker to finish or pause before contributing.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Use a signal such as 'May I come in here?' when joining a heated discussion.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Wait for a pause and signal politely before speaking."
},
        },
        {
          id: "el8-u4-constructive-discussion-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this sentence so it disagrees politely: 'Homework is useless and anyone who likes it is lazy.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Polite disagreement",
                              "statement": "Replace attack with acknowledgement and reasoning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Removes the personal attack on people who like homework.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Acknowledges a possible benefit of homework.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Gives a reason for the disagreement.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'Homework can help some students revise, but too much can reduce free time. Perhaps a smaller amount with clearer purpose would work better.'",
          "commonErrors": [
                    "Keeping 'lazy' or 'useless'."
          ]
},
        },
        {
          id: "el8-u4-constructive-discussion-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
          "title": "Class debate: Phones in lessons",
          "author": "Written for Akademik Space",
          "text": "Aisha: Phones can support learning. A calculator app helps with maths, and a dictionary is quicker than flicking through pages. Banning them completely removes useful tools.\n\nBen: But the evidence shows that notifications split attention even when students are trying to work. One glance can turn into ten minutes of scrolling. If the rules are not enforced, the policy becomes meaningless."
},
          stem: "Identify two conventions of effective discussion used in the debate extract.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Discussion conventions",
                              "statement": "Effective discussion uses evidence, acknowledgement and reasoned disagreement."
                    },
                    {
                              "kind": "context",
                              "name": "Class debate",
                              "statement": "Formal discussion has expectations about contribution and evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Aisha supports her point with examples such as calculator and dictionary apps.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "A calculator app helps with maths"
                    },
                    {
                              "reasoning": "Ben acknowledges the opposing view before challenging it.",
                              "marks": 1,
                              "markCode": "AO3",
                              "evidence": "But the evidence shows"
                    },
                    {
                              "reasoning": "Ben gives evidence about notifications splitting attention.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "notifications split attention"
                    },
                    {
                              "reasoning": "Both speakers keep their points focused on the issue of phones in lessons.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Both use evidence and reasons; Ben also acknowledges Aisha's point before disagreeing.",
          "commonErrors": [
                    "Listing topics rather than discussion conventions."
          ]
},
        },
        {
          id: "el8-u4-constructive-discussion-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Class debate: Phones in lessons",
          "author": "Written for Akademik Space",
          "text": "Aisha: Phones can support learning. A calculator app helps with maths, and a dictionary is quicker than flicking through pages. Banning them completely removes useful tools.\n\nBen: But the evidence shows that notifications split attention even when students are trying to work. One glance can turn into ten minutes of scrolling. If the rules are not enforced, the policy becomes meaningless."
},
          stem: "Write a short response to Ben's argument. Acknowledge his point, disagree with a reason, and suggest a compromise.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Responding to an argument",
                              "statement": "Acknowledge, reason and compromise."
                    },
                    {
                              "kind": "convention",
                              "name": "Formal discussion",
                              "statement": "Use measured language suitable for a class debate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Acknowledges that notifications can distract students.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Disagrees with a clear reason rather than attacking Ben.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Suggests a practical compromise such as phones for research only.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'You are right that notifications can split attention. However, banning every useful tool may be too broad. A compromise could allow phones for research tasks while keeping them away during written work.'",
          "commonErrors": [
                    "Repeating Aisha's argument without answering Ben.",
                    "Suggesting no solution."
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
          id: "el8-u4-constructive-discussion-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "Class debate: Phones in lessons",
          "author": "Written for Akademik Space",
          "text": "Aisha: Phones can support learning. A calculator app helps with maths, and a dictionary is quicker than flicking through pages. Banning them completely removes useful tools.\n\nBen: But the evidence shows that notifications split attention even when students are trying to work. One glance can turn into ten minutes of scrolling. If the rules are not enforced, the policy becomes meaningless."
},
          stem: "Answer all parts of this question about the debate extract.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down two arguments made for allowing phones in lessons.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how Ben responds to Aisha's argument.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how effectively the two speakers use discussion conventions.",
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
                              "name": "Debate analysis",
                              "statement": "Compare viewpoints and evaluate discussion methods."
                    },
                    {
                              "kind": "technique",
                              "name": "Evidence and acknowledgement",
                              "statement": "Strong discussion uses examples and respectful engagement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phones can support learning, such as a calculator app.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "calculator app helps with maths"
                    },
                    {
                              "reasoning": "A dictionary app is quicker than searching pages.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "dictionary is quicker"
                    },
                    {
                              "reasoning": "Ben does not dismiss Aisha; he begins with 'But the evidence shows'.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b",
                              "evidence": "But the evidence shows"
                    },
                    {
                              "reasoning": "He challenges the claim with evidence about notifications.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "notifications split attention"
                    },
                    {
                              "reasoning": "He strengthens his point with an example of scrolling.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "ten minutes of scrolling"
                    },
                    {
                              "reasoning": "He links his argument to the policy issue of enforcement.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b",
                              "evidence": "the policy becomes meaningless"
                    },
                    {
                              "reasoning": "Aisha uses concrete examples, making her argument clear.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c",
                              "evidence": "calculator app"
                    },
                    {
                              "reasoning": "Ben uses evidence and acknowledges the opposing view before challenging it.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "But the evidence shows"
                    },
                    {
                              "reasoning": "Both stay focused on the issue, which makes the discussion purposeful.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) Phones can support learning and dictionaries are quicker. (b) Ben acknowledges the claim, then challenges it with evidence about notifications and enforcement. (c) Both speakers use relevant evidence and stay focused; Ben also acknowledges Aisha before disagreeing, making the discussion constructive.",
          "commonErrors": [
                    "Summarising without evaluating conventions.",
                    "Claiming one speaker wins without criteria."
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
      id: "el8-u4-discussion-notes",
      title: "Active listening and discussion — notes",
      summary: "Listen to understand, respond constructively and use evidence in discussion.",
      sections: [
        { heading: "Key idea", body: "Active listening means attending, understanding and responding; turn-taking keeps discussion fair." },
        { heading: "Constructive disagreement", body: "Acknowledge the other view, give a reason and suggest a compromise where possible." },
        { heading: "Evidence", body: "Use examples, facts and experience to support points rather than attacking people." },
      ],
    },
  ],
};
