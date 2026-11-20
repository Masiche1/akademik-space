import type { Lesson } from "../../../types.ts";

export const lesson29: Lesson = {
  id: "cipc-u2-lesson-2-9",
  code: "2-9",
  title: "Stage 5 — Digital Communication and Social Media",
  goal: "I CAN describe digital communication tools and use them responsibly.",
  standards: ["Cambridge Primary Computing 0059 Stage 5: networks and digital communication", "Cambridge Primary Computing 0059 framework strands: Networks and digital communication"],
  stage: 5,
  vocabulary: [
    { term: "Email", definition: "Electronic mail — messages sent over the internet." },
    { term: "Instant messaging", definition: "Real-time text chat between users." },
    { term: "Social media", definition: "Online platforms for sharing content and connecting." },
    { term: "Digital footprint", definition: "The trail of data you leave online." },
    { term: "Netiquette", definition: "Rules of polite behaviour online." },
    { term: "Privacy settings", definition: "Controls deciding who sees your content." },
  ],
  concepts: [
    {
      id: "cipc-u2-s5-comm",
      title: "Digital communication",
      skill: "Use communication tools responsibly and manage digital footprint at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Communication tools",
            body: "Email for formal messages, instant messaging for quick chats, social media for sharing. Each has etiquette: clear subjects, polite language, appropriate tone. Think before posting — content can spread fast and be hard to remove.",
          },
          {
            heading: "Footprint and privacy",
            body: "Your digital footprint is everything you've posted, liked or shared — it can affect future opportunities. Manage privacy settings, think before sharing personal info, and remember posts may be permanent even if deleted.",
          },
        ],
        keyFormulas: [
          { name: "Footprint", statement: "everything you post/like/share online" },
          { name: "Privacy", statement: "control who sees your content" },
        ],
        workedExample: {
          problem: "Should you post a photo of your school trip with friends' faces visible? Why or why not?",
          solution: "Consider privacy — others may not want to be tagged. Check permissions, blur faces or ask first. Once posted, it's part of your digital footprint.",
        },
      },
      questions: [
        {
          id: "cipc-u2-dc-q1",
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
                              "reasoning": "Footprint = accumulated online activity data.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Online data trail"
},
        },
        {
          id: "cipc-u2-dc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two digital communication tools and one rule of netiquette.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Communication",
                              "statement": "Tools and etiquette."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Email, messaging, social media.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Polite, clear, think before posting.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. email+chat; be polite/think first"
},
        },
        {
          id: "cipc-u2-dc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'delete' doesn't fully remove online content, and what privacy settings control.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Footprint",
                              "statement": "Permanence and controls."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Copies/screenshots/caches may persist.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Privacy settings control who sees posts/profile.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Think before posting — permanence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Content can persist; settings control visibility"
},
        },
        {
          id: "cipc-u2-dc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define digital footprint and netiquette. (b) Compare email vs instant messaging. (c) What are privacy settings? (d) Why think before posting? (e) Describe a responsible social media post. (f) What is cyberbullying and how respond? (g) How does your footprint affect future opportunities? (h) Design rules for a class group chat.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Digital communication",
                              "statement": "Footprint, privacy, etiquette."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Footprint=online trail; netiquette=online manners.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Email=formal/async; messaging=instant/informal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Controls for who sees content.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Posts persist and spread; affect reputation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Kind, appropriate, no private info.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Online harassment; don't respond, save evidence, tell adult.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Colleges/employers may check online presence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid rules: respect, no sharing, adult supervision.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Footprint, tools, privacy, responsible posting, cyberbullying."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-dc-notes",
      title: "Digital communication — notes",
      summary: "Footprint = online trail. Privacy settings control visibility. Think before posting; it can persist.",
      sections: [
        { heading: "Key idea", body: "Your online activity is permanent and public — manage it carefully." },
        { heading: "Tools", body: "Email=formal; messaging=instant; social=sharing." },
      ],
    },
  ],
};
