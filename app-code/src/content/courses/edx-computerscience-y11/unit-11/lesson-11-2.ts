import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "ecs11-u11-lesson-11-2",
  code: "11-2",
  title: "Online Services and E-Commerce",
  goal: "I CAN describe how search engines, social media, online shopping, cloud storage and streaming services work and evaluate their benefits and risks.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — The wider world: online services and e-commerce"],
  
  vocabulary: [
    { term: "Search engine", definition: "A service that indexes web pages and returns ranked results for queries." },
    { term: "Crawler", definition: "Software that automatically visits web pages to build a search index." },
    { term: "Social media", definition: "Online platforms where users create profiles and share content." },
    { term: "E-commerce", definition: "Buying and selling goods or services over the internet." },
    { term: "Cloud storage", definition: "Storing files on remote servers accessed over the internet." },
    { term: "Streaming", definition: "Playing media content continuously as it is downloaded, without full download." },
  ],
  concepts: [
    {
      id: "ecs11-u11-online-services",
      title: "Search engines and social media",
      skill: "Explain how search engines and social media platforms work and evaluate their benefits and risks.",
      lesson: {
        sections: [
          {
            heading: "How search engines work",
            body: "Search engines use software called crawlers (or spiders) that automatically visit web pages and follow links, building a huge index of page content. When a user enters a query, the engine matches it against the index and ranks results using algorithms that consider relevance, popularity and freshness.\n\nSearch engines personalise results based on location, history and cookies, which can create filter bubbles where users only see confirming views.",
          },
          {
            heading: "Social media",
            body: "Social media platforms let users create profiles, post content and interact. Benefits include staying connected, sharing information quickly and building communities. Risks include privacy exposure, cyberbullying, misinformation spread and addiction-like usage patterns.\n\nContent is often targeted using algorithms that maximise engagement, which can amplify extreme or misleading material.",
          },
        ],
        keyFormulas: [
          { name: "Search engine", statement: "Crawl → index → match query → rank results" },
          { name: "Personalisation", statement: "Results shaped by location, history and cookies" },
        ],
        workedExample: {
          problem: "Why might two people searching the same question see different first results?",
          solution: "Personalisation — location, past searches and cookies cause the ranking algorithm to order results differently for each user.",
        },
      },
      questions: [
        {
          id: "ecs11-u11-search-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a search engine?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Software that stores a user's files online"
                    },
                    {
                              "id": "b",
                              "text": "A service that indexes web pages and returns ranked results for queries"
                    },
                    {
                              "id": "c",
                              "text": "A type of social media platform"
                    },
                    {
                              "id": "d",
                              "text": "A protocol for sending emails"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Search engine",
                              "statement": "Indexes pages and ranks results."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Search engines index the web and return ranked results for queries.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Service that indexes pages and returns ranked results"
},
        },
        {
          id: "ecs11-u11-search-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe the three main stages a search engine uses to answer a query.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Search engine pipeline",
                              "statement": "Crawl, index, rank."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Crawlers visit web pages and follow links to collect content.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The collected data is stored in a searchable index.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "When a query is entered, matching pages are ranked and returned.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Crawl → index → rank."
},
        },
        {
          id: "ecs11-u11-search-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give two benefits and two risks of using social media.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Social media",
                              "statement": "Connection vs exposure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefit: staying connected with friends, family and communities.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Benefit: sharing information and news quickly.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Risk: personal information and posts can be exposed or misused.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Risk: enables cyberbullying and the spread of misinformation.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Connection and fast sharing vs privacy exposure and harm risks."
},
        },
        {
          id: "ecs11-u11-search-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A small bakery wants to attract customers through social media.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two ways social media could help the bakery.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two risks and a mitigation for each.",
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
                              "name": "Social media for business",
                              "statement": "Reach vs reputation risk."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Post photos of products and daily specials to attract local customers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Interact with customers and run promotions cheaply.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Risk: negative reviews or complaints go public — respond promptly and professionally.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Risk: account hacking or impersonation — use strong passwords and two-factor authentication.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Risk: sharing too much business information — control what is posted and who can see it.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) promotion, customer interaction (b) reputation, hacking, oversharing — each needs mitigation"
},
        },
        {
          id: "ecs11-u11-search-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare search engines and social media as sources of news.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Information sources",
                              "statement": "Search returns indexed pages; social spreads user content."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Search engines return ranked pages from a broad index of websites.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Users actively choose what to search for, giving some control over sources.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Social media delivers content passively through feeds and shares by contacts.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Content spreads fast and can be unverified or misleading.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Algorithms amplify engaging content, not necessarily accurate content.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Search results can also be personalised, creating similar echo-chamber effects.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Search = user-driven indexed pages; social = contact-driven fast spread; both risk bias and misinformation."
},
        },
        {
          id: "ecs11-u11-search-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student group runs a social media page sharing exam tips.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how a search engine ranks web pages and why results differ between users.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what a filter bubble is and one way it could affect the group.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Give three checks the group should use before trusting exam advice found online.",
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
                              "name": "Online information quality",
                              "statement": "Ranking, personalisation and verification."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ranking algorithms weigh relevance to the query, page quality and popularity signals.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "They also use personalisation signals such as location and search history.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "So two users with different histories see differently ordered results.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "A filter bubble is when algorithms show users mainly content matching their existing views.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "It can reinforce wrong exam advice because corrections never reach them.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The group may become overconfident in unverified tips.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Check the source — is it an official exam board or qualified educator?",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Check the date — outdated advice may not match the current syllabus.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Cross-check claims against at least two independent reliable sources.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Be wary of sensational language, missing citations and unverifiable claims.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) relevance + personalisation signals (b) algorithmic echo chamber reinforces beliefs (c) source, date, corroboration, tone"
},
        },
      ],
    },
    {
      id: "ecs11-u11-commerce-cloud",
      title: "E-commerce, cloud storage and streaming",
      skill: "Describe online shopping, cloud storage and streaming, and evaluate their advantages and risks.",
      lesson: {
        sections: [
          {
            heading: "E-commerce and cloud storage",
            body: "E-commerce lets businesses sell online through websites and apps. A typical transaction: the customer browses, adds items to a basket, enters payment details, and the payment is processed securely (often via HTTPS and payment gateways). Benefits include 24/7 selling, lower overheads and wider reach; risks include fraud, security breaches and disputes over delivery or refunds.\n\nCloud storage keeps files on remote servers accessed over the internet. Advantages: access anywhere, automatic backup, easy sharing, no local hardware needed. Disadvantages: needs internet, monthly costs, and privacy/security concerns if the provider is compromised.",
          },
          {
            heading: "Streaming",
            body: "Streaming delivers media (video, music, games) continuously as it is downloaded, so content plays without waiting for a full download. Buffering stores a few seconds of content ahead to smooth out network fluctuations.\n\nBenefits: instant access to huge libraries, no storage needed, works on many devices. Drawbacks: needs reliable fast internet, ongoing subscription costs, and quality drops on slow connections. Unlike downloading, streamed content is usually licensed and cannot be kept permanently.",
          },
        ],
        keyFormulas: [
          { name: "E-commerce flow", statement: "Browse → basket → payment → fulfilment" },
          { name: "Cloud storage", statement: "Files on remote servers, accessed online" },
          { name: "Streaming", statement: "Continuous download + playback; needs bandwidth" },
        ],
        workedExample: {
          problem: "Why does a video stall briefly at the start of a stream but then play smoothly?",
          solution: "Buffering — the player downloads a few seconds ahead so temporary network slowdowns do not interrupt playback.",
        },
      },
      questions: [
        {
          id: "ecs11-u11-shop-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cloud storage?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Storing files only on your own device"
                    },
                    {
                              "id": "b",
                              "text": "Storing files on remote servers accessed over the internet"
                    },
                    {
                              "id": "c",
                              "text": "A type of web browser"
                    },
                    {
                              "id": "d",
                              "text": "Downloading software updates"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cloud storage",
                              "statement": "Remote file storage accessed online."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cloud storage keeps files on remote servers reached via the internet.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Files on remote servers accessed over the internet"
},
        },
        {
          id: "ecs11-u11-shop-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe the main steps in an online purchase.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "E-commerce transaction",
                              "statement": "Browse → pay → fulfil."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The customer browses products and adds items to a basket or cart.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "They enter delivery and payment details at checkout.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Payment is processed and the order is confirmed and fulfilled.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Browse → basket → checkout/payment → confirmation and delivery."
},
        },
        {
          id: "ecs11-u11-shop-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give two advantages and two disadvantages of cloud storage.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Cloud storage",
                              "statement": "Access vs dependence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage: files can be accessed from any internet-connected device.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Advantage: easy sharing and automatic backup.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Disadvantage: requires a reliable internet connection to reach files.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Disadvantage: privacy and security depend on the provider; ongoing subscription cost.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Anywhere access + backup vs internet dependence + provider trust/cost."
},
        },
        {
          id: "ecs11-u11-shop-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A bakery considers moving from a market stall to selling online.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two benefits of e-commerce for the bakery.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two risks for customers buying food online and how the bakery can reduce them.",
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
                              "name": "E-commerce trade-offs",
                              "statement": "Reach and convenience vs trust and quality risk."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sells 24/7 to customers beyond the local area.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Lower overheads than a physical shop for some products.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Risk: customers cannot inspect freshness — show clear photos and dates.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Risk: payment fraud — use a reputable payment gateway over HTTPS.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Risk: delivery damage or disputes — use reliable delivery and clear refund policy.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) reach, lower costs (b) quality trust, payment security, delivery disputes"
},
        },
        {
          id: "ecs11-u11-shop-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare streaming a film with downloading it first.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Streaming vs downloading",
                              "statement": "Continuous vs stored playback."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Streaming plays content as it downloads, needing no large storage space.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It gives instant access to large libraries without waiting for downloads.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Downloading stores the whole file, allowing offline playback.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Streaming quality depends on current bandwidth; buffering smooths interruptions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Downloading needs storage space and a one-time wait but works offline.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Streaming content is typically licensed — it cannot be kept or shared permanently.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Streaming = instant, no storage, needs bandwidth; download = offline-ready, needs space and time."
},
        },
        {
          id: "ecs11-u11-shop-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A family uses cloud storage for photos and subscribes to a streaming service.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give three benefits of e-commerce and online services for a small business.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two security concerns when paying online and how to reduce each.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Give two privacy considerations for storing family photos in the cloud.",
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
                              "name": "Digital services trade-offs",
                              "statement": "Convenience vs security and privacy."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sell to customers 24/7 without geographic limits.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Lower running costs than a physical premises for many goods.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Collect customer data and feedback to improve the business.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Concern: card details intercepted — only pay on HTTPS sites with padlock.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use a trusted payment gateway rather than entering card details on unknown sites.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Concern: fake shops stealing money — check reviews, contact details and domain.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Keep devices updated and avoid public Wi-Fi for payments.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Photos are stored on third-party servers — check the provider's security and privacy policy.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use strong passwords and two-factor authentication on the account.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sensitive photos may be exposed in a breach — avoid storing highly private images or encrypt them.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) reach, cost, feedback (b) interception + fake shops — HTTPS, gateways, checks (c) provider trust, strong auth, sensitive content"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u11-online-notes",
      title: "Online Services and E-Commerce — notes",
      summary: "Search engines crawl-index-rank; social media connects but exposes; e-commerce sells online; cloud stores remotely; streaming plays on demand.",
      sections: [
        { heading: "Search and social", body: "Search is query-driven and indexed; social is feed-driven and social. Both personalise and can mislead." },
        { heading: "Commerce", body: "E-commerce trades reach and convenience for fraud and trust risks." },
        { heading: "Storage and streaming", body: "Cloud = remote access, internet-dependent. Streaming = instant playback, bandwidth-dependent." },
      ],
    },
  ],
};
