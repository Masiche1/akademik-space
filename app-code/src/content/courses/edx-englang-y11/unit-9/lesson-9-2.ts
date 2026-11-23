import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "el11-u9-lesson-9-2",
  code: "9-2",
  title: "Language of Persuasion",
  goal: "I CAN identify and explain persuasive techniques such as rhetorical questions, the rule of three, emotive language and inclusive pronouns, in analysis and in my own writing.",
  standards: ["4EA1 Paper 1 Section B", "4EA1 Paper 2", "4EA1 AO2", "4EA1 AO4"],
  
  vocabulary: [
    { term: "Rhetorical question", definition: "A question asked for effect rather than to get an answer; it guides the reader to the writer's intended conclusion." },
    { term: "Rule of three", definition: "Grouping ideas or words in threes, which feels complete and memorable." },
    { term: "Emotive language", definition: "Words chosen to trigger an emotional response, such as 'crisis', 'nightmare' or 'future'." },
    { term: "Inclusive pronoun", definition: "'We', 'us' and 'our', used to bind writer and reader into one group." },
    { term: "Ethos", definition: "Persuasion through credibility and authority: qualifications, track record, audited status." },
    { term: "Pathos", definition: "Persuasion through emotion: stories, vivid detail and appeals to sympathy." },
    { term: "Logos", definition: "Persuasion through reason and evidence: statistics, facts and logic." },
  ],
  concepts: [
    {
      id: "el11-u9-rhetorical-devices",
      title: "Rhetorical devices in persuasion",
      skill: "Identify rhetorical questions, the rule of three, anaphora and short sentences, and explain their persuasive effect.",
      lesson: {
        sections: [
          {
            heading: "The writer's toolkit",
            body: "Persuasive writers use recurring devices: the **rhetorical question** (to make readers think the writer's thought), the **rule of three** (three items feel complete), **anaphora** (repeated openings create rhythm and insistence) and **short sentences** (to punch a point home). In analysis, name the device, quote it, then explain the effect on the reader.",
          },
          {
            heading: "Statistics and emotion together",
            body: "Strong persuasion rarely uses one appeal alone. A statistic gives the claim weight ('eight million tonnes'), while emotive framing gives it urgency ('a crisis we are choosing to ignore'). When analysing, ask what each element contributes: numbers convince the head, emotion moves the heart, and together they are hard to resist.",
          },
          {
            heading: "Spotting the device",
            body: "Do not just spot devices — explain them. 'The writer uses a rhetorical question' earns little; 'the rhetorical question \"How long will we wait?\" makes delay feel absurd and pushes the reader toward action' earns the mark. Always finish with the effect.",
          },
        ],
        keyFormulas: [
          { name: "Rhetorical question", statement: "A question asked for effect; the answer is assumed, so the reader is led to the writer's conclusion." },
          { name: "Rule of three", statement: "Three parallel items create a sense of completeness and are easier to remember." },
          { name: "Anaphora", statement: "Repetition of the same opening words in successive sentences, creating rhythm and emphasis." },
        ],
        workedExample: {
          problem: "How does the writer of 'The Case for Action' use the rule of three in the second paragraph?",
          solution: "The writer lists three government measures — 'a national deposit scheme', 'refill stations on every site' and 'community recycling hubs' — so the proposed action feels comprehensive and achievable rather than vague. The same paragraph repeats the pattern with three promised benefits: 'transform our high streets, create thousands of green jobs and cut household waste'. The triple structure gives the argument momentum: each trio feels complete, and the parallel grammar makes the benefits sound like a package deal the reader cannot easily refuse.",
        },
      },
      questions: [
        {
          id: "el11-u9-rhetorical-devices-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "The Case for Action",
          "author": "Written for Akademik Space",
          "source": "Original newspaper opinion article",
          "text": "Every year, eight million tonnes of plastic enter our oceans. That is not a statistic; it is a crisis we are choosing to ignore. We have the technology. We have the knowledge. What more do we need?\n\nThe Government must introduce a national deposit scheme, require supermarkets to offer refill stations on every site, and fund community recycling hubs in every borough. These measures would transform our high streets, create thousands of green jobs and cut household waste within a single parliament.\n\nHow long will we wait? I urge every reader to write to their MP this week. Together, we can turn this tide."
},
          stem: "Which of the following is a rhetorical question in 'The Case for Action'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'Every year, eight million tonnes of plastic enter our oceans.'"
                    },
                    {
                              "id": "b",
                              "text": "'What more do we need?'"
                    },
                    {
                              "id": "c",
                              "text": "'The Government must introduce a national deposit scheme.'"
                    },
                    {
                              "id": "d",
                              "text": "'Together, we can turn this tide.'"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rhetorical question",
                              "statement": "A question asked for effect, not to obtain an answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'What more do we need?' is a question the writer answers himself — nothing more is needed — so it is rhetorical.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** 'What more do we need?'",
          "commonErrors": [
                    "Choosing any sentence with 'must' or 'we' rather than an actual question form."
          ]
},
        },
        {
          id: "el11-u9-rhetorical-devices-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Case for Action",
          "author": "Written for Akademik Space",
          "source": "Original newspaper opinion article",
          "text": "Every year, eight million tonnes of plastic enter our oceans. That is not a statistic; it is a crisis we are choosing to ignore. We have the technology. We have the knowledge. What more do we need?\n\nThe Government must introduce a national deposit scheme, require supermarkets to offer refill stations on every site, and fund community recycling hubs in every borough. These measures would transform our high streets, create thousands of green jobs and cut household waste within a single parliament.\n\nHow long will we wait? I urge every reader to write to their MP this week. Together, we can turn this tide."
},
          stem: "How many rhetorical questions appear in the whole extract? Give your answer as a number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Accurate counting",
                              "statement": "Identify every question form, then check each is rhetorical rather than information-seeking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two question forms appear: 'What more do we need?' and 'How long will we wait?' Both are answered by the writer's own argument, so both are rhetorical.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "2",
          "commonErrors": [
                    "Counting 'That is not a statistic' as a question.",
                    "Missing 'What more do we need?' because it lacks a question mark feel."
          ]
},
        },
        {
          id: "el11-u9-rhetorical-devices-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Case for Action",
          "author": "Written for Akademik Space",
          "source": "Original newspaper opinion article",
          "text": "Every year, eight million tonnes of plastic enter our oceans. That is not a statistic; it is a crisis we are choosing to ignore. We have the technology. We have the knowledge. What more do we need?\n\nThe Government must introduce a national deposit scheme, require supermarkets to offer refill stations on every site, and fund community recycling hubs in every borough. These measures would transform our high streets, create thousands of green jobs and cut household waste within a single parliament.\n\nHow long will we wait? I urge every reader to write to their MP this week. Together, we can turn this tide."
},
          stem: "Explain how the writer uses the rule of three in the second paragraph.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Rule of three",
                              "statement": "Three parallel items feel complete and memorable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The writer lists three measures the Government 'must' take: deposit scheme, refill stations, recycling hubs.",
                              "evidence": "a national deposit scheme, require supermarkets to offer refill stations on every site, and fund community recycling hubs",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The same paragraph lists three benefits: transform high streets, create jobs, cut waste.",
                              "evidence": "transform our high streets, create thousands of green jobs and cut household waste",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The triple pattern makes the action feel comprehensive and the rewards feel like a package, strengthening persuasion.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The writer uses two rules of three — three government measures and three promised benefits — so the proposal feels complete, achievable and rewarding.",
          "commonErrors": [
                    "Spotting 'three' without quoting the parallel items.",
                    "Saying it 'sounds good' without explaining why three works."
          ]
},
        },
        {
          id: "el11-u9-rhetorical-devices-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Case for Action",
          "author": "Written for Akademik Space",
          "source": "Original newspaper opinion article",
          "text": "Every year, eight million tonnes of plastic enter our oceans. That is not a statistic; it is a crisis we are choosing to ignore. We have the technology. We have the knowledge. What more do we need?\n\nThe Government must introduce a national deposit scheme, require supermarkets to offer refill stations on every site, and fund community recycling hubs in every borough. These measures would transform our high streets, create thousands of green jobs and cut household waste within a single parliament.\n\nHow long will we wait? I urge every reader to write to their MP this week. Together, we can turn this tide."
},
          stem: "Analyse the effect of the short sentences in the first paragraph.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sentence length for effect",
                              "statement": "Short sentences slow the reader down or punch a point home; they create emphasis and urgency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'That is not a statistic; it is a crisis' uses a short, balanced contrast to deflate the number and inflate the threat.",
                              "evidence": "That is not a statistic; it is a crisis we are choosing to ignore",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'We have the technology. We have the knowledge.' repeats a short opening (anaphora), building insistence.",
                              "evidence": "We have the technology. We have the knowledge.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'What more do we need?' is a short question that makes the reader feel the answer is obvious.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Together the short sentences create urgency and momentum, pushing the reader toward agreement before the argument even begins.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The short sentences — 'That is not a statistic; it is a crisis', 'We have the technology. We have the knowledge.' and 'What more do we need?' — use contrast, repetition and a clipped question to create urgency and make the writer's point feel inevitable.",
          "commonErrors": [
                    "Listing short sentences without explaining their effect.",
                    "Ignoring the anaphora in 'We have...'"
          ]
},
        },
        {
          id: "el11-u9-rhetorical-devices-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Case for Action",
          "author": "Written for Akademik Space",
          "source": "Original newspaper opinion article",
          "text": "Every year, eight million tonnes of plastic enter our oceans. That is not a statistic; it is a crisis we are choosing to ignore. We have the technology. We have the knowledge. What more do we need?\n\nThe Government must introduce a national deposit scheme, require supermarkets to offer refill stations on every site, and fund community recycling hubs in every borough. These measures would transform our high streets, create thousands of green jobs and cut household waste within a single parliament.\n\nHow long will we wait? I urge every reader to write to their MP this week. Together, we can turn this tide."
},
          stem: "How does the writer use inclusive pronouns to involve the reader? Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Inclusive pronouns",
                              "statement": "'We', 'us' and 'our' bind writer and reader into one group with shared responsibility."
                    },
                    {
                              "kind": "skill",
                              "name": "Effect-led analysis",
                              "statement": "Explain what the pronoun makes the reader feel or do, not just that it appears."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'we are choosing to ignore' makes the reader complicit in the crisis, so inaction feels like their own failure.",
                              "evidence": "a crisis we are choosing to ignore",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'our oceans' and 'our high streets' extend ownership of the problem to everyone.",
                              "evidence": "enter our oceans",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'I urge every reader' briefly separates the writer as leader, then 'we can turn this tide' reunites everyone in a shared mission.",
                              "evidence": "Together, we can turn this tide",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The shift from accusation ('we are choosing') to shared hope ('we can turn') gives the reader a role in the solution.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "The writer uses 'we' to make the reader complicit ('we are choosing to ignore'), to share ownership ('our oceans'), and finally to offer a shared mission ('Together, we can turn this tide'), moving the reader from guilt to participation.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating comment on how pronouns involve the reader; judicious, well-chosen evidence"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant comment on how pronouns involve the reader; appropriate references"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comment on how pronouns involve the reader; few or unselective references"
                    }
          ],
          "commonErrors": [
                    "Listing 'we' without explaining its effect.",
                    "Missing the shift from blame to shared purpose."
          ]
},
        },
        {
          id: "el11-u9-rhetorical-devices-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "The Case for Action",
          "author": "Written for Akademik Space",
          "source": "Original newspaper opinion article",
          "text": "Every year, eight million tonnes of plastic enter our oceans. That is not a statistic; it is a crisis we are choosing to ignore. We have the technology. We have the knowledge. What more do we need?\n\nThe Government must introduce a national deposit scheme, require supermarkets to offer refill stations on every site, and fund community recycling hubs in every borough. These measures would transform our high streets, create thousands of green jobs and cut household waste within a single parliament.\n\nHow long will we wait? I urge every reader to write to their MP this week. Together, we can turn this tide."
},
          stem: "Read 'The Case for Action'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two persuasive devices used in the extract and give an example of each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how the writer combines statistics with emotional appeal to persuade.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Persuasive devices",
                              "statement": "Name the device precisely and quote it before explaining its effect."
                    },
                    {
                              "kind": "context",
                              "name": "Dual appeal",
                              "statement": "Statistics convince the head; emotive framing moves the heart; together they are stronger than either alone."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Credit any two devices with an accurate quotation: rhetorical question ('How long will we wait?'), rule of three ('a national deposit scheme ... refill stations ... recycling hubs'), anaphora ('We have the technology. We have the knowledge.'), short sentences, inclusive pronouns.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit a second distinct device with evidence.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The statistic 'eight million tonnes' gives the claim scale and credibility (logos).",
                              "evidence": "eight million tonnes of plastic",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The emotional framing — 'a crisis we are choosing to ignore' — turns the number into guilt and urgency (pathos).",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "A top answer explains the combination: the number convinces, the emotion compels, and the reader cannot easily dismiss either.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) Any two of: rhetorical question, rule of three, anaphora, short sentences, inclusive pronouns — each with a quotation. (b) The writer pairs the statistic 'eight million tonnes' with emotive framing ('a crisis we are choosing to ignore') so the argument convinces logically and moves emotionally at once.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating analysis of how statistics and emotion combine; judicious, well-chosen evidence",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant analysis of how statistics and emotion combine; appropriate references",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited analysis of how statistics and emotion combine; few or unselective references",
                              "part": "b"
                    }
          ],
          "commonErrors": [
                    "In (a) naming devices without quotations.",
                    "In (b) treating statistics and emotion as separate rather than combined."
          ]
},
        },
      ],
    },
    {
      id: "el11-u9-emotive-appeal",
      title: "Emotive language, ethos and the reader's role",
      skill: "Analyse how writers combine emotional stories, statistics and credibility to persuade, and position the reader.",
      lesson: {
        sections: [
          {
            heading: "Three appeals",
            body: "Classical rhetoric names three ways to persuade: **logos** (reason and evidence — statistics, facts), **pathos** (emotion — stories, vivid detail, sympathy) and **ethos** (credibility — qualifications, audited status, 'we are a registered charity'). The strongest texts weave all three. In analysis, identify which appeal each quotation serves and how they reinforce each other.",
          },
          {
            heading: "The case study technique",
            body: "A single named person ('Meet Amina') turns an abstract statistic into a human story. The writer gives her a concrete detail — four kilometres, no books, reading to her brother — so the reader feels the donation's effect personally. This is pathos at its most economical: one story can outweigh a page of figures.",
          },
          {
            heading: "Positioning the reader",
            body: "Persuasive writers assign the reader a role: hero ('supporters like you'), culprit ('without you'), or partner ('Together, we can'). Notice how the charity appeal moves from gratitude ('your donations helped') to responsibility ('none of this happens without you') to urgency ('Please give today').",
          },
        ],
        keyFormulas: [
          { name: "Logos", statement: "Persuasion through reason: statistics, facts, expert evidence." },
          { name: "Pathos", statement: "Persuasion through emotion: stories, vivid detail, appeals to sympathy or guilt." },
          { name: "Ethos", statement: "Persuasion through credibility: qualifications, track record, transparency." },
        ],
        workedExample: {
          problem: "How does 'Give a Child a Future' combine emotional and factual persuasion?",
          solution: "The appeal opens with a statistic — '12,400 children' — and a small concrete cost, 'the price of a coffee each month', making giving feel easy (logos). It then humanises the cause with 'Meet Amina', whose story — four kilometres, no books, reading to her brother — makes the abstract figure felt personally (pathos). Finally it establishes trust with 'a registered charity, audited annually and partnered with local councils' (ethos), so the reader believes the money will do good. The three appeals are layered: reason makes it sensible, emotion makes it urgent, credibility makes it safe.",
        },
      },
      questions: [
        {
          id: "el11-u9-emotive-appeal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Give a Child a Future",
          "author": "The Bright Futures Trust",
          "source": "Original charity appeal",
          "text": "Give a child a future. Last year, your donations helped 12,400 children stay in school across three regions. For just the price of a coffee each month, you can provide books, meals and a safe place to learn.\n\nMeet Amina. At nine, she walked four kilometres to a school with no books. Because of supporters like you, she now reads to her younger brother every evening. Her teacher says she dreams of becoming a doctor.\n\nWe are a registered charity, audited annually and partnered with local councils. But none of this happens without you. Please give today."
},
          stem: "Which quotation from 'Give a Child a Future' best shows an appeal to emotion (pathos)?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'your donations helped 12,400 children stay in school'"
                    },
                    {
                              "id": "b",
                              "text": "'she now reads to her younger brother every evening'"
                    },
                    {
                              "id": "c",
                              "text": "'We are a registered charity, audited annually'"
                    },
                    {
                              "id": "d",
                              "text": "'partnered with local councils'"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pathos",
                              "statement": "Persuasion through emotion, usually via human stories and vivid detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The image of Amina reading to her brother is a warm human detail designed to move the reader; the others are statistics or credibility.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** 'she now reads to her younger brother every evening' — an emotional human detail.",
          "commonErrors": [
                    "Choosing the statistic (logos) or the charity status (ethos) as emotional."
          ]
},
        },
        {
          id: "el11-u9-emotive-appeal-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "Give a Child a Future",
          "author": "The Bright Futures Trust",
          "source": "Original charity appeal",
          "text": "Give a child a future. Last year, your donations helped 12,400 children stay in school across three regions. For just the price of a coffee each month, you can provide books, meals and a safe place to learn.\n\nMeet Amina. At nine, she walked four kilometres to a school with no books. Because of supporters like you, she now reads to her younger brother every evening. Her teacher says she dreams of becoming a doctor.\n\nWe are a registered charity, audited annually and partnered with local councils. But none of this happens without you. Please give today."
},
          stem: "Identify one statistic in the extract and explain how it persuades.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Statistical persuasion",
                              "statement": "A precise figure makes a claim feel measured, proven and significant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Credit '12,400 children' or 'four kilometres' or 'three regions' as the statistic.",
                              "evidence": "12,400 children",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Explain the effect: precision makes the charity's impact seem real and accountable rather than vague.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "'12,400 children' (or 'four kilometres') gives the appeal factual weight: the precise figure makes the charity's work feel measurable and trustworthy.",
          "commonErrors": [
                    "Quoting without explaining the persuasive effect."
          ]
},
        },
        {
          id: "el11-u9-emotive-appeal-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Give a Child a Future",
          "author": "The Bright Futures Trust",
          "source": "Original charity appeal",
          "text": "Give a child a future. Last year, your donations helped 12,400 children stay in school across three regions. For just the price of a coffee each month, you can provide books, meals and a safe place to learn.\n\nMeet Amina. At nine, she walked four kilometres to a school with no books. Because of supporters like you, she now reads to her younger brother every evening. Her teacher says she dreams of becoming a doctor.\n\nWe are a registered charity, audited annually and partnered with local councils. But none of this happens without you. Please give today."
},
          stem: "How does the writer establish credibility (ethos)?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Ethos",
                              "statement": "Credibility is built through verifiable claims: registration, audits, partnerships."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The writer states the charity is 'registered' and 'audited annually' — claims a donor can verify.",
                              "evidence": "a registered charity, audited annually",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Mention of partnerships with 'local councils' suggests official approval and reach.",
                              "evidence": "partnered with local councils",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Framing past success as 'your donations helped' credits the reader, building trust and goodwill before the new request.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Ethos is built through 'a registered charity, audited annually', partnerships with 'local councils', and by crediting the reader's past donations, all of which make the organisation seem accountable and trustworthy.",
          "commonErrors": [
                    "Confusing ethos with emotion; ethos is about credibility, not feeling."
          ]
},
        },
        {
          id: "el11-u9-emotive-appeal-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Give a Child a Future",
          "author": "The Bright Futures Trust",
          "source": "Original charity appeal",
          "text": "Give a child a future. Last year, your donations helped 12,400 children stay in school across three regions. For just the price of a coffee each month, you can provide books, meals and a safe place to learn.\n\nMeet Amina. At nine, she walked four kilometres to a school with no books. Because of supporters like you, she now reads to her younger brother every evening. Her teacher says she dreams of becoming a doctor.\n\nWe are a registered charity, audited annually and partnered with local councils. But none of this happens without you. Please give today."
},
          stem: "How does the writer balance emotional and factual persuasion?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Balanced appeal",
                              "statement": "Emotion draws the reader in; facts and credibility convince them the cause is real and safe to support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Emotion opens the appeal: 'Give a child a future' and the story of Amina make the cause personal.",
                              "evidence": "Meet Amina",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Facts follow quickly: '12,400 children' and 'four kilometres' ground the emotion in measurable reality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The emotional peak — 'reads to her younger brother', 'dreams of becoming a doctor' — is immediately followed by credibility ('registered charity, audited').",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The balance prevents manipulation: feeling is checked by accountability, so the reader trusts rather than resents the appeal.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The writer alternates: emotion opens ('Give a child a future', Amina's story), facts and figures ground it ('12,400 children'), and credibility closes the loop ('audited annually'). The balance makes the appeal feel both moving and trustworthy.",
          "commonErrors": [
                    "Describing only the emotional or only the factual elements.",
                    "Saying the writer is 'manipulative' without weighing the credibility checks."
          ]
},
        },
        {
          id: "el11-u9-emotive-appeal-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Give a Child a Future",
          "author": "The Bright Futures Trust",
          "source": "Original charity appeal",
          "text": "Give a child a future. Last year, your donations helped 12,400 children stay in school across three regions. For just the price of a coffee each month, you can provide books, meals and a safe place to learn.\n\nMeet Amina. At nine, she walked four kilometres to a school with no books. Because of supporters like you, she now reads to her younger brother every evening. Her teacher says she dreams of becoming a doctor.\n\nWe are a registered charity, audited annually and partnered with local councils. But none of this happens without you. Please give today."
},
          stem: "How does the writer position the reader's responsibilities? Support your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Reader positioning",
                              "statement": "Writers assign the reader a role — hero, culprit or partner — through pronouns and direct address."
                    },
                    {
                              "kind": "skill",
                              "name": "Tracing the shift",
                              "statement": "Track how the reader's role changes across the text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First the reader is the hero: 'your donations helped 12,400 children' credits them for past good.",
                              "evidence": "your donations helped",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Then Amina's story makes inaction feel like abandonment — the reader is positioned as someone who can change her life.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The phrase 'supporters like you' flatters the reader into identifying with the solution.",
                              "evidence": "supporters like you",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Finally responsibility is stated plainly: 'none of this happens without you' assigns the outcome to the reader.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The progression — gratitude, opportunity, obligation — makes giving feel like the natural next step.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The writer moves the reader from credited hero ('your donations helped') to potential rescuer ('supporters like you') to responsible agent ('none of this happens without you'), so giving feels like continuing a role the reader already plays.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating comment on how the reader is positioned; judicious, well-chosen evidence"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant comment on how the reader is positioned; appropriate references"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comment on how the reader is positioned; few or unselective references"
                    }
          ],
          "commonErrors": [
                    "Saying the writer 'asks for money' without analysing the assigned role.",
                    "Missing the shift from praise to obligation."
          ]
},
        },
        {
          id: "el11-u9-emotive-appeal-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Give a Child a Future",
          "author": "The Bright Futures Trust",
          "source": "Original charity appeal",
          "text": "Give a child a future. Last year, your donations helped 12,400 children stay in school across three regions. For just the price of a coffee each month, you can provide books, meals and a safe place to learn.\n\nMeet Amina. At nine, she walked four kilometres to a school with no books. Because of supporters like you, she now reads to her younger brother every evening. Her teacher says she dreams of becoming a doctor.\n\nWe are a registered charity, audited annually and partnered with local councils. But none of this happens without you. Please give today."
},
          stem: "Read 'Give a Child a Future'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two pieces of evidence in the extract and explain whether each persuades through emotion or through authority and fact.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Evaluate how effectively the appeal persuades its audience.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Classify the appeal",
                              "statement": "Sort each quotation into pathos (emotion), logos (fact) or ethos (credibility)."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Judge effectiveness by audience, balance and likely response — not by personal taste."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Credit one emotion example ('Meet Amina', 'reads to her younger brother') correctly classified as pathos.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit one fact/authority example ('12,400 children', 'audited annually', 'partnered with local councils') correctly classified as logos or ethos.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Effective: the layered appeals (emotion + statistic + credibility) cover different reader concerns.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Effective: the small concrete cost ('price of a coffee') lowers the barrier to giving.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "A critical answer might note the single case study (Amina) could be seen as unrepresentative, or that urgency is mild — balanced judgement earns credit.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) e.g. 'Meet Amina' is pathos; '12,400 children' or 'audited annually' is logos/ethos. (b) The appeal is highly effective: it combines emotion, a concrete small cost and verifiable credibility, though a critical reader might question whether one child's story represents the whole cause.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating evaluation of the appeal's effectiveness; judicious, well-chosen evidence",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluation of the appeal's effectiveness; appropriate references",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited evaluation of the appeal's effectiveness; few or unselective references",
                              "part": "b"
                    }
          ],
          "commonErrors": [
                    "In (a) misclassifying statistics as emotional or stories as factual.",
                    "In (b) giving an unsupported verdict of 'effective' or 'not effective'."
          ]
},
        },
      ],
    },
  ],

};
