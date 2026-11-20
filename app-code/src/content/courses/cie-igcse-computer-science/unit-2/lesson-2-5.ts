import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "ciecs-u2-lesson-2-5",
  code: "2-5",
  title: "The Internet and Its Uses",
  goal: "I CAN describe internet applications including e-commerce, cloud computing and social media.",
  standards: ["Cambridge IGCSE Computer Science 0478: the internet and its uses", "0478 section 5: internet uses"],
  
  vocabulary: [
    { term: "E-commerce", definition: "Buying/selling goods online." },
    { term: "Cloud computing", definition: "Storing/processing data on remote servers." },
    { term: "Social media", definition: "Platforms for sharing content and connecting." },
    { term: "IPTV", definition: "Television delivered over internet protocol." },
    { term: "VoIP", definition: "Voice calls over internet." },
    { term: "IoT", definition: "Internet of Things — connected smart devices." },
  ],
  concepts: [
    {
      id: "ciecs-u2-s5-inet",
      title: "Internet applications",
      skill: "Describe internet services and their implications at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Internet applications",
            body: "E-commerce (online shopping, banking), cloud computing (remote storage/processing), social media (sharing/connecting), IPTV (streaming TV), VoIP (internet calls), IoT (connected devices).",
          },
          {
            heading: "Implications",
            body: "Benefits: convenience, access, communication. Concerns: privacy, security, digital divide, misinformation, dependency on connectivity.",
          },
        ],
        keyFormulas: [
          { name: "E-commerce", statement: "online buying/selling" },
          { name: "Cloud", statement: "remote storage/processing" },
          { name: "IoT", statement: "connected smart devices" },
        ],
        workedExample: {
          problem: "Compare cloud storage vs local storage for a school.",
          solution: "Cloud: accessible anywhere, automatic backup, but needs internet + privacy concerns. Local: private, fast, but limited capacity + no remote access.",
        },
      },
      questions: [
        {
          id: "ciecs-u2-iu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is e-commerce?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Buying/selling goods online"
                    },
                    {
                              "id": "b",
                              "text": "A type of computer"
                    },
                    {
                              "id": "c",
                              "text": "A network cable"
                    },
                    {
                              "id": "d",
                              "text": "A programming language"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "E-commerce",
                              "statement": "Online trade."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "E-commerce = internet-based buying/selling.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Online buying/selling"
},
        },
        {
          id: "ciecs-u2-iu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cloud computing? Give one benefit and one concern.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cloud computing",
                              "statement": "Remote storage/processing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data stored/processed on remote servers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Benefit: accessibility; concern: privacy/security.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Remote servers; access vs privacy"
},
        },
        {
          id: "ciecs-u2-iu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three internet applications and describe one benefit and one risk of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Internet uses",
                              "statement": "Applications + implications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. social media: connects people but privacy risks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. cloud: accessible but security concerns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. e-commerce: convenient but fraud risk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Three applications with implications"
},
        },
        {
          id: "ciecs-u2-iu-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define e-commerce, cloud computing, social media, IPTV, VoIP, IoT. (b) What is the digital divide? (c) What is IPTV vs traditional TV? (d) What is VoIP? (e) What is the Internet of Things? (f) Give 3 benefits of internet use. (g) Give 3 risks of internet use. (h) Should schools provide laptops or rely on students' own devices? Evaluate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Internet uses",
                              "statement": "Applications and implications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Gap between those with/without access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Internet-delivered vs broadcast TV.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Voice calls over internet.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Connected smart devices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Three valid benefits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Three valid risks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Internet applications and societal implications."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u2-iu-notes",
      title: "Internet uses — notes",
      summary: "E-commerce, cloud, social media, IPTV, VoIP, IoT — each with benefits and risks.",
      sections: [
        { heading: "Key idea", body: "Internet transforms communication, commerce and access to information." },
        { heading: "Implications", body: "Weigh convenience against privacy, security and equity." },
      ],
    },
  ],
};
