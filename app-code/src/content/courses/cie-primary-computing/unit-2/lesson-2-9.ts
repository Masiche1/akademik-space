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
                              "text": "A type of shoe"
                    },
                    {
                              "id": "b",
                              "text": "A network cable"
                    },
                    {
                              "id": "c",
                              "text": "The trail of data you leave online"
                    },
                    {
                              "id": "d",
                              "text": "A computer virus"
                    }
          ],
          "correctChoiceId": "c"
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
        {
          id: "cipc-u2-dc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a digital footprint?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A footprint in the sand" },
            { id: "b", text: "A computer virus" },
            { id: "c", text: "A type of cookie" },
            { id: "d", text: "The trail of data you leave online" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Digital footprint", statement: "Online data trail." }],
            steps: [
              { reasoning: "Digital footprint = all the data/trace you leave when using the internet.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** The trail of data you leave online",
          },
        },
        {
          id: "cipc-u2-dc-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two digital communication tools.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Comms tools", statement: "Email, messaging, video calls." }],
            steps: [
              { reasoning: "First valid tool: email, instant messaging, video call, social media.", marks: 1, markCode: "M" },
              { reasoning: "Second valid tool.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "e.g. email and video calls.",
          },
        },
        {
          id: "cipc-u2-dc-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A post gets 5 likes, 3 comments and 2 shares. How many total interactions does it have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Interactions", statement: "5 + 3 + 2." }],
            steps: [
              { reasoning: "5 + 3 + 2 = 10 interactions.", marks: 1, markCode: "M" },
              { reasoning: "10 total interactions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipc-u2-dc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is netiquette?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rules of polite behaviour online" },
            { id: "b", text: "A spam filter" },
            { id: "c", text: "A type of network cable" },
            { id: "d", text: "A password rule" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Netiquette", statement: "Online politeness rules." }],
            steps: [
              { reasoning: "Netiquette = accepted rules of polite/respectful online behaviour.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Rules of polite behaviour online",
          },
        },
        {
          id: "cipc-u2-dc-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare email and instant messaging in one sentence each. When is messaging better?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Comms comparison", statement: "Email formal/async; messaging instant." }],
            steps: [
              { reasoning: "Email = formal, longer messages, asynchronous.", marks: 1, markCode: "M" },
              { reasoning: "Messaging = instant short exchanges.", marks: 1, markCode: "M" },
              { reasoning: "Messaging better for quick real-time chat; email for formal/long content.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Email formal/async; messaging instant/short.",
          },
        },
        {
          id: "cipc-u2-dc-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why doesn't 'delete' fully remove online content?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It removes everything instantly" },
            { id: "b", text: "Only photos can be deleted" },
            { id: "c", text: "Delete buttons are broken" },
            { id: "d", text: "Copies may exist on servers, other devices, or screenshots" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Persistence of data", statement: "Deleted ≠ gone." }],
            steps: [
              { reasoning: "Deleted content can persist on servers, backups, other devices, screenshots.", marks: 1, markCode: "M" },
              { reasoning: "Once shared, you cannot fully control copies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Copies persist elsewhere",
          },
        },
        {
          id: "cipc-u2-dc-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What do privacy settings control on social media? Give two examples.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Privacy settings", statement: "Control who sees your content." }],
            steps: [
              { reasoning: "They control who can see your posts/profile.", marks: 1, markCode: "M" },
              { reasoning: "Example 1: public vs friends-only posts.", marks: 1, markCode: "M" },
              { reasoning: "Example 2: who can message/comment, or hide personal info.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Who sees posts/profile; e.g. friends-only, message controls.",
          },
        },
        {
          id: "cipc-u2-dc-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why should you 'think before you post'? Give one reason.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Think before posting", statement: "Posts are permanent and public." }],
            steps: [
              { reasoning: "Posts can be seen by many people and may be hard to remove.", marks: 1, markCode: "M" },
              { reasoning: "Something posted carelessly could upset others or damage your reputation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Posts are hard to undo and affect others.",
          },
        },
        {
          id: "cipc-u2-dc-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is cyberbullying and what are two ways to respond?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cyberbullying", statement: "Online harassment." }],
            steps: [
              { reasoning: "Cyberbullying = using digital means to bully/hurt someone.", marks: 1, markCode: "M" },
              { reasoning: "Respond: don't retaliate; save evidence; block/report; tell a trusted adult.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Online bullying; block, save evidence, tell adult.",
          },
        },
        {
          id: "cipc-u2-dc-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which action best protects your digital footprint?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Share passwords with friends" },
            { id: "b", text: "Post everything publicly" },
            { id: "c", text: "Review privacy settings and think before posting" },
            { id: "d", text: "Never delete anything" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Footprint protection", statement: "Control visibility and content." }],
            steps: [
              { reasoning: "Privacy settings control who sees you; thinking before posting limits bad content.", marks: 1, markCode: "M" },
              { reasoning: "Public posting, shared passwords and hoarding content all increase risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Review privacy settings and think before posting",
          },
        },
        {
          id: "cipc-u2-dc-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe a responsible social media post. What makes it good?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Responsible posting", statement: "Kind, private, truthful." }],
            steps: [
              { reasoning: "Content is kind/respectful — no meanness or personal attacks.", marks: 1, markCode: "M" },
              { reasoning: "Doesn't share private info (address, passwords, others' photos).", marks: 1, markCode: "M" },
              { reasoning: "Audience-appropriate and accurate — good netiquette.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Kind, private, accurate post.",
          },
        },
        {
          id: "cipc-u2-dc-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define digital footprint and netiquette. (b) Compare email vs instant messaging. (c) What are privacy settings? (d) Why think before posting? (e) Describe a responsible social media post. (f) What is cyberbullying and how respond? (g) How does your footprint affect future opportunities? (h) Design rules for a class group chat.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Digital communication", statement: "Footprint, tools, privacy, posting, bullying." }],
            steps: [
              { reasoning: "(a) Footprint=online data trail; netiquette=polite online rules.", marks: 1, markCode: "M" },
              { reasoning: "(b) Email formal/async; messaging instant/short.", marks: 1, markCode: "M" },
              { reasoning: "(c) Controls who sees your content/profile.", marks: 1, markCode: "M" },
              { reasoning: "(d) Posts are public and hard to remove.", marks: 1, markCode: "M" },
              { reasoning: "(e) Kind, private, accurate post.", marks: 1, markCode: "M" },
              { reasoning: "(f) Online bullying; block/report/tell adult.", marks: 1, markCode: "M" },
              { reasoning: "(g) Employers/schools may check it — affects reputation.", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. be kind, keep info private, tell adult if worried.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Footprint, netiquette, email vs messaging, privacy settings, posting, responsible post, cyberbullying, footprint impact, chat rules.",
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
