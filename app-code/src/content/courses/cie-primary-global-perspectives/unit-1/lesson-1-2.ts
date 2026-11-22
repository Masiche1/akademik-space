import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cipg-u1-lesson-1-2",
  code: "1-2",
  title: "Stage 1 — Talking About What You Found",
  goal: "I CAN talk about information I found and share simple findings with others.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 1: communication",
    "Cambridge Primary Global Perspectives 0838 strand: Communication",
  ],
  stage: 1,
  vocabulary: [
    { term: "Share", definition: "To tell others what you found out." },
    {
      term: "Finding",
      definition: "Something you discovered through research.",
    },
    {
      term: "Explain",
      definition: "To tell what something means in simple words.",
    },
    { term: "Show", definition: "To display your work or pictures." },
    { term: "Listener", definition: "The person hearing what you share." },
    { term: "Clear", definition: "Easy to understand." },
  ],
  concepts: [
    {
      id: "cipg-u1-s1-share",
      title: "Sharing findings",
      skill: "Communicate simple research findings clearly at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Sharing what you found",
            body: "After researching, share your findings — tell friends, show pictures, draw what you learned. Use simple sentences: 'I found out that pandas eat bamboo.'",
          },
          {
            heading: "Being clear",
            body: "Speak slowly, face your listener, and use your pictures or objects to help. If someone asks a question, try to answer simply. Sharing helps others learn what you discovered.",
          },
        ],
        keyFormulas: [
          { name: "Share", statement: "tell/show others your findings" },
          { name: "Clear", statement: "slow, simple, face the listener" },
        ],
        workedExample: {
          problem:
            "You researched frogs. Share one finding in a simple sentence.",
          solution: "'I found out that frogs start life as tadpoles in water.'",
        },
      },
      questions: [
        {
          id: "cipg-u1-sh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean to share your findings?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Keep it secret",
              },
              {
                id: "b",
                text: "Delete your notes",
              },
              {
                id: "c",
                text: "Hide your work",
              },
              {
                id: "d",
                text: "Tell others what you discovered",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Share",
                statement: "Communicate findings.",
              },
            ],
            steps: [
              {
                reasoning: "Sharing = telling/showing others your discoveries.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Tell others your findings",
          },
        },
        {
          id: "cipg-u1-sh-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two ways to share research findings at Stage 1.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sharing",
                statement: "Verbal, visual, written.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. talk to the class / show pictures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. draw findings / simple chart.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. talk + show pictures",
          },
        },
        {
          id: "cipg-u1-sh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write one clear sentence to share a finding about weather. Then explain why clear sharing helps others.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clear communication",
                statement: "Simple accurate sentences.",
              },
            ],
            steps: [
              {
                reasoning: "Valid clear sentence about weather.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear = easy for listener to understand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Others learn from your findings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Clear sentence; helps others learn",
          },
        },
        {
          id: "cipg-u1-sh-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define share and finding. (b) Name three ways to share findings. (c) Write a sentence sharing a finding about animals. (d) Why face your listener when talking? (e) What helps make sharing clear? (f) What could you use to show your findings visually? (g) How do you respond if someone asks a question? (h) Design a 30-second 'show and tell' about your research.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Communication",
                statement: "Sharing methods, clarity.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Share=tell others; finding=discovery.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Talk, pictures, drawings, charts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid animal finding sentence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Shows respect; helps listener focus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Slow, simple words, visual aids.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Pictures, charts, real objects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Answer simply or say 'let me check'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Structured mini-presentation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sharing methods, clarity, visual aids, responding.",
          },
        },
        {
          id: "cipg-u1-sh-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best way to share a finding clearly?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Use very long words",
              },
              {
                id: "b",
                text: "Speak slowly in simple words",
              },
              {
                id: "c",
                text: "Whisper very quietly",
              },
              {
                id: "d",
                text: "Say nothing and run away",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clear sharing",
                statement: "Slow, simple, face listener.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Clear sharing means simple words and a steady pace.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Speak slowly in simple words",
          },
        },
        {
          id: "cipg-u1-sh-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two objects or pictures you could use to help share your research findings.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Visual aids",
                statement: "Pictures support sharing.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. pictures from your research.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. a simple chart or drawing of findings.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. pictures + chart",
          },
        },
        {
          id: "cipg-u1-sh-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a 'finding'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A book you read",
              },
              {
                id: "b",
                text: "Something you discovered through research",
              },
              {
                id: "c",
                text: "A toy you found on the floor",
              },
              {
                id: "d",
                text: "A question you asked",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Finding",
                statement: "Something discovered.",
              },
            ],
            steps: [
              {
                reasoning: "A finding is what research discovers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Something discovered through research",
          },
        },
        {
          id: "cipg-u1-sh-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "You researched the ocean. Write one sentence sharing a finding, then explain why simple sentences help your listeners.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clear communication",
                statement: "Simple accurate sentences.",
              },
            ],
            steps: [
              {
                reasoning: "Valid ocean finding sentence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simple sentences are easy to understand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Listeners can follow and remember clearly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Valid sentence; simple = easy to follow",
          },
        },
        {
          id: "cipg-u1-sh-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is it helpful to face your listener when you share findings?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is a rule with no reason",
              },
              {
                id: "b",
                text: "It makes your voice louder",
              },
              {
                id: "c",
                text: "It shows respect and helps them focus on you",
              },
              {
                id: "d",
                text: "It stops them asking questions",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Respectful sharing",
                statement: "Face listeners.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Facing listeners shows respect and helps attention.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Shows respect and helps them focus",
          },
        },
        {
          id: "cipg-u1-sh-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "You researched plants. Plan how you will share your findings: (a) what you will say first, (b) one picture or object to show, (c) one question you might be asked and your answer, (d) how you will end.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sharing plan",
                statement: "Say, show, answer, end.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Clear opening about plant research.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Suitable visual/object, e.g. leaf or plant picture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid question + simple answer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Clear ending, e.g. thank you or summary.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Opening, visual, Q&A, ending.",
          },
        },
        {
          id: "cipg-u1-sh-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways to share research findings besides talking.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sharing",
                statement: "Verbal, visual, written.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. show pictures or drawings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. make a simple chart or poster.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. pictures + chart",
          },
        },
        {
          id: "cipg-u1-sh-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A friend shares findings but mumbles and looks at the floor. Give two ways they could share more clearly.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clear communication",
                statement: "Slow, simple, face listener.",
              },
            ],
            steps: [
              {
                reasoning: "Speak louder and more slowly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Look at the listeners instead of the floor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Suggestions directly fix the problem.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Speak clearly; look at listeners",
          },
        },
        {
          id: "cipg-u1-sh-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is sharing your research findings important?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It means you can stop researching",
              },
              {
                id: "b",
                text: "It helps others learn what you discovered",
              },
              {
                id: "c",
                text: "It is only for showing off",
              },
              {
                id: "d",
                text: "It has no purpose",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Purpose of sharing",
                statement: "Others learn from findings.",
              },
            ],
            steps: [
              {
                reasoning: "Sharing spreads knowledge to the audience.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "It helps others learn what you discovered",
          },
        },
        {
          id: "cipg-u1-sh-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You researched 'Our favourite sports'. Write: (a) one finding sentence, (b) one visual to show it, (c) how you would answer 'Which sport is most popular?' if you do not know for sure, (d) one polite way to end your sharing.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sharing findings",
                statement: "Sentence, visual, honesty, ending.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Valid sport finding sentence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Suitable visual, e.g. pictogram of votes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Honest answer, e.g. 'I will check my notes/chart.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Polite ending, e.g. 'Thank you for listening.'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Finding, visual, honest answer, polite end.",
          },
        },
        {
          id: "cipg-u1-sh-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should you do if someone asks you a question while you are sharing?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Get angry",
              },
              {
                id: "b",
                text: "Ignore them completely",
              },
              {
                id: "c",
                text: "Stop sharing forever",
              },
              {
                id: "d",
                text: "Try to answer simply or say you will check",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Responding to questions",
                statement: "Answer simply or check.",
              },
            ],
            steps: [
              {
                reasoning: "Answer simply, or honestly say you will check.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Try to answer simply or say you will check",
          },
        },
        {
          id: "cipg-u1-sh-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare two ways of sharing findings: (a) talking to the class and (b) making a poster. Which is better for a big audience and why? Give two reasons.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Choosing a method",
                statement: "Match method to audience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Clear choice with reason (either may be justified).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reason 1, e.g. talking reaches everyone at once / poster can be viewed repeatedly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reason 2, e.g. poster helps those who learn visually / talk allows questions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reasons are explained clearly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Justified judgement linked to audience needs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reasoned comparison of talk vs poster",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-sh-notes",
      title: "Sharing — notes",
      summary:
        "Share findings by talking, showing pictures, drawing. Be clear: slow, simple, face listeners.",
      sections: [
        {
          heading: "Key idea",
          body: "Good sharing helps everyone learn from your research.",
        },
        { heading: "Tips", body: "Use visuals; answer questions simply." },
      ],
    },
  ],
};
