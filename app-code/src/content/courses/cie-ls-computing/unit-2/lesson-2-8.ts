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
                              "text": "A network cable"
                    },
                    {
                              "id": "d",
                              "text": "A computer virus"
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
