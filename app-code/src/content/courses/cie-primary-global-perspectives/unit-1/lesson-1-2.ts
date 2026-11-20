import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cipg-u1-lesson-1-2",
  code: "1-2",
  title: "Stage 1 — Talking About What You Found",
  goal: "I CAN talk about information I found and share simple findings with others.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 1: communication", "Cambridge Primary Global Perspectives 0838 strand: Communication"],
  stage: 1,
  vocabulary: [
    { term: "Share", definition: "To tell others what you found out." },
    { term: "Finding", definition: "Something you discovered through research." },
    { term: "Explain", definition: "To tell what something means in simple words." },
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
          problem: "You researched frogs. Share one finding in a simple sentence.",
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
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tell others what you discovered"
                    },
                    {
                              "id": "b",
                              "text": "Hide your work"
                    },
                    {
                              "id": "c",
                              "text": "Delete your notes"
                    },
                    {
                              "id": "d",
                              "text": "Keep it secret"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Share",
                              "statement": "Communicate findings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sharing = telling/showing others your discoveries.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Tell others your findings"
},
        },
        {
          id: "cipg-u1-sh-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two ways to share research findings at Stage 1.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sharing",
                              "statement": "Verbal, visual, written."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. talk to the class / show pictures.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. draw findings / simple chart.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. talk + show pictures"
},
        },
        {
          id: "cipg-u1-sh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write one clear sentence to share a finding about weather. Then explain why clear sharing helps others.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Clear communication",
                              "statement": "Simple accurate sentences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Valid clear sentence about weather.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Clear = easy for listener to understand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Others learn from your findings.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Clear sentence; helps others learn"
},
        },
        {
          id: "cipg-u1-sh-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define share and finding. (b) Name three ways to share findings. (c) Write a sentence sharing a finding about animals. (d) Why face your listener when talking? (e) What helps make sharing clear? (f) What could you use to show your findings visually? (g) How do you respond if someone asks a question? (h) Design a 30-second 'show and tell' about your research.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Communication",
                              "statement": "Sharing methods, clarity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Share=tell others; finding=discovery.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Talk, pictures, drawings, charts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid animal finding sentence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Shows respect; helps listener focus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Slow, simple words, visual aids.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Pictures, charts, real objects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Answer simply or say 'let me check'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Structured mini-presentation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sharing methods, clarity, visual aids, responding."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-sh-notes",
      title: "Sharing — notes",
      summary: "Share findings by talking, showing pictures, drawing. Be clear: slow, simple, face listeners.",
      sections: [
        { heading: "Key idea", body: "Good sharing helps everyone learn from your research." },
        { heading: "Tips", body: "Use visuals; answer questions simply." },
      ],
    },
  ],
};
