import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "ecs11-u11-lesson-11-3",
  code: "11-3",
  title: "Digital Citizenship and Staying Safe Online",
  goal: "I CAN explain digital footprints, manage privacy settings, respond to cyberbullying and identify misinformation.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — The wider world: digital citizenship and online safety"],
  
  vocabulary: [
    { term: "Digital footprint", definition: "The trail of data a person leaves online through posts, searches and activity." },
    { term: "Privacy settings", definition: "Controls that limit who can see a user's profile, posts and data." },
    { term: "Cyberbullying", definition: "Using digital technology to deliberately harm, threaten or harass someone." },
    { term: "Misinformation", definition: "False or inaccurate information spread, whether deliberately or not." },
    { term: "Phishing", definition: "Fraudulent messages designed to trick users into revealing personal data." },
    { term: "Digital citizenship", definition: "Responsible, ethical and safe behaviour when using digital technology." },
  ],
  concepts: [
    {
      id: "ecs11-u11-footprint-privacy",
      title: "Digital footprint and privacy",
      skill: "Explain what a digital footprint is, its permanence, and how privacy settings protect users.",
      lesson: {
        sections: [
          {
            heading: "Digital footprint",
            body: "A digital footprint is everything recorded about a person online: posts, photos, comments, likes, searches, location data and account activity. It has two parts — the active footprint (what you deliberately post) and the passive footprint (data collected automatically, e.g. by cookies and apps).\n\nFootprints are persistent: deleted posts can survive in screenshots, caches and other people's accounts. Employers, universities and advertisers may review online histories, so careless posts can have long-term consequences.",
          },
          {
            heading: "Privacy and settings",
            body: "Privacy settings control who can see profiles, posts and personal data — on social media, apps and devices. Strong passwords, two-factor authentication and limiting location sharing reduce risk.\n\nCookies and tracking let sites and advertisers build profiles of users. Reviewing permissions regularly and using private browsing where appropriate limits data collection. Legal protections such as data protection laws give users rights over their personal data.",
          },
        ],
        keyFormulas: [
          { name: "Digital footprint", statement: "Active (posted) + passive (collected) online data" },
          { name: "Privacy controls", statement: "Settings limit visibility; authentication secures access" },
        ],
        workedExample: {
          problem: "A student posts a rude comment, deletes it an hour later, and assumes it is gone. Is it?",
          solution: "Not necessarily — others may have screenshotted it, and platforms and search engines may retain copies. Deleted content can resurface.",
        },
      },
      questions: [
        {
          id: "ecs11-u11-citizen-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a digital footprint?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A shoe print left on a keyboard"
                    },
                    {
                              "id": "b",
                              "text": "The trail of data a person leaves online through posts, searches and activity"
                    },
                    {
                              "id": "c",
                              "text": "A type of internet cookie"
                    },
                    {
                              "id": "d",
                              "text": "A security certificate"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Digital footprint",
                              "statement": "Recorded online activity and data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A digital footprint is the data trail a user leaves online.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "The data trail a person leaves online"
},
        },
        {
          id: "ecs11-u11-citizen-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define digital footprint and give two examples of what contributes to it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Digital footprint",
                              "statement": "Active and passive online data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The digital footprint is all data recorded about a person online.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Active examples: posts, photos, comments, likes.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Passive examples: search history, location data, cookies.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Recorded online data — posts/photos (active) and tracking/locations (passive)."
},
        },
        {
          id: "ecs11-u11-citizen-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways privacy settings protect a social media user.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Privacy settings",
                              "statement": "Controls limit who sees data and who can contact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "They restrict who can view posts and profile information.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "This reduces exposure to strangers and potential attackers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They can limit who can send messages or friend requests.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "They reduce the risk of harassment and unwanted contact.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Limit audience for posts and limit who can contact — reducing exposure and harassment."
},
        },
        {
          id: "ecs11-u11-citizen-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A teenager wants to reduce their digital footprint before applying for jobs.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why old posts can still affect them even after deletion.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give three steps they could take to manage their footprint.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Footprint permanence",
                              "statement": "Copies survive deletion."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Others may have saved or shared the content before deletion.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Platforms, caches and search engines can retain copies of deleted material.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Review and delete old posts, photos and tags on all accounts.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Tighten privacy settings so only approved contacts can see content.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Search their own name and request removal of unwanted results.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) copies persist elsewhere (b) delete old content, tighten settings, audit search results"
},
        },
        {
          id: "ecs11-u11-citizen-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An employer rejects a candidate after finding offensive posts from five years ago.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Footprint consequences",
                              "statement": "Online history can be reviewed and judged."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The posts remained part of the candidate's digital footprint.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Employers may legitimately review public online information before hiring.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Old content can still shape first impressions despite changed behaviour.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Deletion does not guarantee removal from copies or archives.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The candidate should have managed their footprint earlier with privacy settings.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Lesson: think before posting — content may outlive its context.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Footprints are permanent and reviewable; manage privacy early and think before posting."
},
        },
        {
          id: "ecs11-u11-citizen-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school is writing its online safety policy for students.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Distinguish active and passive parts of a digital footprint.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain three privacy settings or habits students should use.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Give three steps students can take to reduce risks from data collection.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Digital self-protection",
                              "statement": "Control what you post; limit what is collected."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Active: content deliberately posted — comments, photos, likes, shares.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Passive: data collected automatically — searches, location, cookies, app usage.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both can be viewed by platforms, advertisers or others.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Set profiles to private or contacts-only.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Review and limit app permissions, especially location and contacts.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use strong unique passwords and two-factor authentication.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Turn off location services when not needed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Clear cookies and browsing data regularly; use private browsing for sensitive sessions.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Read privacy policies and decline unnecessary data sharing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Be cautious about public Wi-Fi and check app permissions periodically.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) posted vs collected (b) private profiles, app permissions, strong auth (c) limit location, clear data, review policies"
},
        },
      ],
    },
    {
      id: "ecs11-u11-safe-online",
      title: "Cyberbullying, misinformation and responsible use",
      skill: "Describe cyberbullying, explain how to respond, identify misinformation and practise responsible online behaviour.",
      lesson: {
        sections: [
          {
            heading: "Cyberbullying and misinformation",
            body: "Cyberbullying is deliberate, repeated harm using digital technology — hurtful messages, sharing private images, exclusion from groups or impersonation. Unlike school bullying it can follow the victim home and content can spread widely. Responses: do not retaliate, save evidence, block the bully, report to the platform and a trusted adult.\n\nMisinformation is false information spread online, often designed to mislead. Warning signs: sensational headlines, no named sources, emotional language, recent domain names, and claims that cannot be verified. Verify by checking reputable sources, the publication date and whether multiple independent outlets agree.",
          },
          {
            heading: "Responsible digital citizenship",
            body: "Digital citizenship means using technology lawfully, ethically and safely: respecting others' privacy, crediting sources, not sharing others' content without permission, and standing up to harm.\n\nPhishing emails and fake websites try to steal passwords and card details — check sender addresses, avoid clicking unexpected links and never share credentials. Good citizens also know when to log off and balance screen time.",
          },
        ],
        keyFormulas: [
          { name: "Cyberbullying", statement: "Repeated deliberate harm via digital technology" },
          { name: "Misinformation checks", statement: "Source, date, corroboration, tone" },
          { name: "Response", statement: "Save evidence → block → report → tell a trusted adult" },
        ],
        workedExample: {
          problem: "A classmate receives repeated nasty messages and humiliating photos shared in a group chat. What should they do?",
          solution: "Do not reply or retaliate; save screenshots as evidence; block the sender; report to the platform; tell a parent, teacher or school counsellor.",
        },
      },
      questions: [
        {
          id: "ecs11-u11-safe-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cyberbullying?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Any disagreement online"
                    },
                    {
                              "id": "b",
                              "text": "Deliberate, repeated harm to someone using digital technology"
                    },
                    {
                              "id": "c",
                              "text": "Sharing funny videos"
                    },
                    {
                              "id": "d",
                              "text": "A type of computer virus"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cyberbullying",
                              "statement": "Repeated deliberate digital harm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cyberbullying is repeated, intentional harm via digital means.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Deliberate repeated harm using digital technology"
},
        },
        {
          id: "ecs11-u11-safe-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define cyberbullying and describe one way it differs from traditional bullying.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cyberbullying",
                              "statement": "Digital harm that can follow the victim anywhere."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cyberbullying is deliberate, repeated harm using digital technology.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Examples include hurtful messages, sharing private images or impersonation.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It can reach the victim anywhere at any time, and content can spread widely and permanently.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Repeated digital harm; unlike school bullying it follows the victim home and spreads fast."
},
        },
        {
          id: "ecs11-u11-safe-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe three checks a user should make before believing a shocking news story online.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Verifying information",
                              "statement": "Source, date, corroboration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Check the source — is it a reputable news organisation or an unknown site?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Check the date — old stories are often recirculated as new.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cross-check with other independent reliable sources.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Be suspicious of sensational language and claims with no evidence or named sources.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Source reputation, publication date, corroboration, tone."
},
        },
        {
          id: "ecs11-u11-safe-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student is being cyberbullied by classmates in a group chat.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two steps the student should take immediately.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe the full process for dealing with the situation.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Cyberbullying response",
                              "statement": "Evidence → block → report → support."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Save screenshots of the messages as evidence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Block the senders and do not reply or retaliate.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Report the content to the platform using its reporting tools.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Tell a trusted adult — parent, teacher or school counsellor.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The school can investigate and apply its bullying policy; keep the evidence.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) save evidence, block (b) report to platform, tell trusted adult, involve school"
},
        },
        {
          id: "ecs11-u11-safe-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A fake story claiming a school closure spreads through students' group chats minutes before a real announcement.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Misinformation response",
                              "statement": "Verify before sharing; correct calmly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Students should check official school channels before believing or sharing it.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The story likely exploited urgency — a classic misinformation tactic.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sharing unverified claims causes panic and wastes emergency resources.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Correcting with a calm message linking to the official source helps more than arguing.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The school should post verified information quickly on official channels.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Longer term, media literacy education reduces susceptibility to fake news.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Verify via official sources; urgency signals fake news; correct calmly and educate."
},
        },
        {
          id: "ecs11-u11-safe-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school wants to promote responsible digital citizenship among its students.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give three responsibilities of a good digital citizen.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two harms caused by the spread of misinformation.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Design a short plan of four rules the school could promote for safe, responsible online behaviour.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Digital citizenship",
                              "statement": "Rights come with responsibilities online."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Respect others — no harassment, bullying or sharing private content.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit sources and share accurate information.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Protect personal data and respect others' privacy.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Misinformation can cause panic, bad decisions and harm to reputations.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "It erodes trust in genuine news and institutions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "In emergencies it can delay people from seeking real help.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Rule 1: think before posting — consider the long-term footprint.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Rule 2: verify before sharing — check sources and dates.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Rule 3: protect accounts — strong passwords, privacy settings, never share credentials.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Rule 4: report harm — block, save evidence and tell a trusted adult.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) respect, accuracy, privacy (b) panic, eroded trust, delayed help (c) footprint, verify, secure accounts, report"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u11-citizenship-notes",
      title: "Digital Citizenship and Staying Safe Online — notes",
      summary: "Footprints persist; privacy settings limit exposure; respond to bullying with evidence and reporting; verify before believing or sharing.",
      sections: [
        { heading: "Footprint", body: "Active posts + passive tracking = permanent record; manage it before it manages you." },
        { heading: "Safety", body: "Evidence, block, report, tell an adult — never retaliate to cyberbullying." },
        { heading: "Misinformation", body: "Check source, date and corroboration; urgency and emotion are red flags." },
      ],
    },
  ],
};
