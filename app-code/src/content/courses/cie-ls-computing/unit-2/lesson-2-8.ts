import type { Lesson } from "../../../types.ts";

export const lesson28: Lesson = {
  id: "cils-c-u2-lesson-2-8",
  code: "2-8",
  title: "Stage 9 — Digital Communication and Footprint",
  goal: "I CAN evaluate digital communication tools and manage my digital footprint responsibly.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 9: networks and digital communication", "Cambridge Lower Secondary Computing 0860 strand: Networks and digital communication"],
  stage: 9,
  vocabulary: [
    { term: "Digital footprint", definition: "The trail of data you leave online." },
    { term: "Metadata", definition: "Data about data — who, when, where." },
    { term: "Privacy settings", definition: "Controls deciding who sees your content." },
    { term: "Encryption", definition: "Protecting message content from others." },
    { term: "Netiquette", definition: "Rules of polite online behaviour." },
    { term: "Data broker", definition: "Company collecting and selling personal data." },
  ],
  concepts: [
    {
      id: "cils-c-u2-s8-foot",
      title: "Digital footprint and communication",
      skill: "Manage online presence and choose tools responsibly at Stage 9 level.",
      lesson: {
        sections: [
          {
            heading: "Your footprint",
            body: "Every post, like, search and location creates data. This footprint persists — colleges and employers may check it. Metadata (who/when/where) is often collected even when content is private.",
          },
          {
            heading: "Responsible use",
            body: "Choose tools wisely: encrypted messaging for sensitive chats, privacy settings to limit visibility, think before posting permanently. Understand data brokers collect and sell your information.",
          },
        ],
        keyFormulas: [
          { name: "Footprint", statement: "everything you post/like/search" },
          { name: "Metadata", statement: "who/when/where data" },
          { name: "Privacy settings", statement: "control visibility" },
        ],
        workedExample: {
          problem: "Should you post a photo with location tag? What are the risks?",
          solution: "Location reveals where you live/go — privacy risk. Remove tag or blur location before posting. Footprint is permanent.",
        },
      },
      questions: [
        {
          id: "cils-c-u2-df-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a digital footprint?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The trail of data you leave online"
                    },
                    {
                              "id": "b",
                              "text": "A type of shoe"
                    },
                    {
                              "id": "c",
                              "text": "A computer virus"
                    },
                    {
                              "id": "d",
                              "text": "A network cable"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Digital footprint",
                              "statement": "Online data trail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Footprint = accumulated online activity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Online data trail"
},
        },
        {
          id: "cils-c-u2-df-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is metadata and why does it matter?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Metadata",
                              "statement": "Data about data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data about data — who, when, where.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reveals patterns even when content private.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Context data; privacy implications"
},
        },
        {
          id: "cils-c-u2-df-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'delete' not fully remove online content? What persists?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Footprint permanence",
                              "statement": "Copies and caches persist."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Copies/screenshots/caches may exist.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Other people's shares keep it alive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Treat posts as permanent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Content can persist despite deletion"
},
        },
        {
          id: "cils-c-u2-df-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define digital footprint, metadata, privacy settings, encryption, netiquette, data broker. (b) How does footprint affect future opportunities? (c) What is metadata on a photo? (d) Why use encrypted messaging? (e) What are data brokers? (f) List 5 footprint-reducing habits. (g) How do privacy settings work? (h) Design a 'digital hygiene' checklist.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Digital footprint",
                              "statement": "Privacy, metadata, habits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Colleges/employers may check online.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Who/when/where/GPS data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Only sender/receiver can read.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Companies collecting/selling personal data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Five valid habits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Control who sees posts/profile.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid hygiene checklist.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Digital footprint management and privacy."
},
        },
        {
          id: "cils-c-u2-df-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do privacy settings on a social media account control?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The colour of the app"
                    },
                    {
                              "id": "b",
                              "text": "Your internet speed"
                    },
                    {
                              "id": "c",
                              "text": "Who can see your posts and profile"
                    },
                    {
                              "id": "d",
                              "text": "How many photos you can upload"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Privacy settings",
                              "statement": "Control visibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Privacy settings decide who sees your content.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Who sees your content"
},
        },
        {
          id: "cils-c-u2-df-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A photo's metadata includes its location, timestamp and the device used. How many types of metadata are listed?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Metadata",
                              "statement": "Data about data."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Location, timestamp, device = 3.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "cils-c-u2-df-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A user posts 5 photos per week for 10 weeks. How many photos are posted in total?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 50 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Footprint",
                              "statement": "Posts accumulate over time."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "5 × 10 = 50 posts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "50"
},
        },
        {
          id: "cils-c-u2-df-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might deleting a post not fully remove it from the internet? Give two reasons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Footprint permanence",
                              "statement": "Copies and caches persist."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Others may have screenshotted or shared it.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Search engines and caches may keep copies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Treat everything posted as permanent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Content can persist"
},
        },
        {
          id: "cils-c-u2-df-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'metadata'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of virus"
                    },
                    {
                              "id": "b",
                              "text": "A programming language"
                    },
                    {
                              "id": "c",
                              "text": "Data about data — e.g. who, when, where"
                    },
                    {
                              "id": "d",
                              "text": "The main content of a file"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Metadata",
                              "statement": "Data about data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Metadata describes context: who, when, where.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Data about data"
},
        },
        {
          id: "cils-c-u2-df-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An account has 200 posts, and half are set to public. How many posts are public?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 100 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Privacy",
                              "statement": "Half of 200."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "200 / 2 = 100 public posts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "100"
},
        },
        {
          id: "cils-c-u2-df-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is a 'data broker'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An internet provider"
                    },
                    {
                              "id": "b",
                              "text": "A type of firewall"
                    },
                    {
                              "id": "c",
                              "text": "A company that collects and sells personal data"
                    },
                    {
                              "id": "d",
                              "text": "A shop selling computers"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Data broker",
                              "statement": "Collects/sells personal data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data brokers trade in collected personal information.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Collects/sells personal data"
},
        },
        {
          id: "cils-c-u2-df-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define digital footprint, metadata, privacy settings, netiquette, data broker. (b) How can a digital footprint affect future opportunities? (c) Why is location metadata risky to share? (d) When should you choose encrypted messaging? (e) List four habits that reduce your digital footprint.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Digital footprint",
                              "statement": "Privacy, metadata, habits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All five definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Colleges/employers may check online presence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Reveals home/school locations and routines.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) For sensitive personal or confidential conversations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) e.g. check privacy settings, think before posting, limit location tags, use strong passwords.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Footprint, metadata, privacy habits."
},
        },
        {
          id: "cils-c-u2-df-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'netiquette'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A programming language"
                    },
                    {
                              "id": "b",
                              "text": "A type of network cable"
                    },
                    {
                              "id": "c",
                              "text": "A privacy setting"
                    },
                    {
                              "id": "d",
                              "text": "Rules of polite and respectful online behaviour"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Netiquette",
                              "statement": "Online manners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Netiquette = etiquette for the internet.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Polite online behaviour"
},
        },
        {
          id: "cils-c-u2-df-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "An app has 5 privacy settings. The user has enabled 3 of them. How many are still off?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Privacy settings",
                              "statement": "5 - 3 = 2 off."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "5 - 3 = 2 settings off.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "cils-c-u2-df-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does end-to-end encryption in messaging apps protect?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Your contact list from yourself"
                    },
                    {
                              "id": "b",
                              "text": "Your internet speed"
                    },
                    {
                              "id": "c",
                              "text": "Message content so only sender and receiver can read it"
                    },
                    {
                              "id": "d",
                              "text": "The app's colour scheme"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Encryption",
                              "statement": "Only endpoints can read."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "End-to-end encryption keeps messages private from intermediaries.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Only sender/receiver read"
},
        },
        {
          id: "cils-c-u2-df-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define digital footprint, metadata, privacy settings, encryption, netiquette, data broker. (b) Why do people say 'the internet never forgets'? (c) What metadata does a social media post typically carry? (d) Give two situations where encrypted messaging is the right choice. (e) How do data brokers get your information? (f) Write a 'digital hygiene' checklist of 5 items.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Digital footprint",
                              "statement": "Privacy, metadata, habits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Content persists via copies, caches, screenshots, archives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) e.g. timestamp, location, device, account ID.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) e.g. confidential chats, sharing personal documents.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Collected from apps, purchases, public records, other data sales.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid 5-item checklist e.g. review privacy settings, think before posting, limit location, use 2FA, delete old accounts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Footprint management and privacy."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u2-df-notes",
      title: "Digital footprint — notes",
      summary: "Footprint=online trail; metadata reveals context. Privacy settings + encrypted tools protect you.",
      sections: [
        { heading: "Key idea", body: "Everything online leaves traces — manage them deliberately." },
        { heading: "Habits", body: "Check privacy settings, think before posting, limit location tags." },
      ],
    },
  ],
};
