import type { Lesson } from "../../../types.ts";

export const lesson742: Lesson = {
  id: "ciealpsy-u4-lesson-4-2",
  code: "4-2",
  title: "Issues and Debates: Free Will and Determinism",
  goal: "I CAN explain the free will vs determinism debate.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 3: issues & debates"],
  
  vocabulary: [
    { term: "Free will", definition: "Ability to choose behaviour independently." },
    { term: "Hard determinism", definition: "All behaviour caused by prior events." },
    { term: "Soft determinism", definition: "Behaviour determined but we can choose responses." },
    { term: "Biological determinism", definition: "Genes/brain determine behaviour." },
    { term: "Environmental determinism", definition: "Experience determines behaviour." },
    { term: "Reciprocal determinism", definition: "Person, behaviour, environment interact." },
  ],
  concepts: [
    {
      id: "ciealpsy-u4-s2-freewill",
      title: "Free will & determinism",
      skill: "Explain the determinism debate.",
      lesson: {
        sections: [
          {
            heading: "The debate",
            body: "Free will: we choose our behaviour. Hard determinism: all behaviour caused by prior events (physics-like). Soft determinism: behaviour determined but we choose responses. Most psychology is deterministic.",
          },
          {
            heading: "Types",
            body: "Biological: genes/brain → behaviour. Environmental: conditioning → behaviour. Reciprocal: person-behaviour-environment interact (Bandura).",
          },
          {
            heading: "Implications",
            body: "Free will → responsibility, blame, punishment. Determinism → treatment, rehabilitation, no blame. Affects legal system, therapy.",
          },
        ],
        keyFormulas: [
          { name: "Free will", statement: "choice" },
          { name: "Hard determinism", statement: "all caused" },
          { name: "Soft determinism", statement: "choose responses" },
        ],
        workedExample: {
          problem: "Is criminal behaviour free will or determined?",
          solution: "Both views — some argue choice (free will), others argue genetics/upbringing (determinism). Affects punishment vs rehabilitation.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u4-fw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is free will?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ability to choose behaviour independently"
                    },
                    {
                              "id": "b",
                              "text": "All behaviour caused"
                    },
                    {
                              "id": "c",
                              "text": "A type of memory"
                    },
                    {
                              "id": "d",
                              "text": "A brain structure"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Free will",
                              "statement": "Independent choice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Free will = independent choice.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Independent choice"
},
        },
        {
          id: "ciealpsy-u4-fw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is hard determinism?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hard determinism",
                              "statement": "All caused."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All behaviour caused by prior events.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "No free will — physics-like causation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "All behaviour determined"
},
        },
        {
          id: "ciealpsy-u4-fw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is soft determinism?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Soft determinism",
                              "statement": "Choose responses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Behaviour determined but we choose responses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Middle ground between free will and hard determinism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Preserves some agency.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Determined but choose responses"
},
        },
        {
          id: "ciealpsy-u4-fw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define free will, hard determinism, soft determinism, biological determinism, environmental determinism, reciprocal determinism. (b) What is free will? (c) What is hard determinism? (d) What is soft determinism? (e) What is biological determinism? (f) What is reciprocal determinism? (g) How does determinism affect legal system? (h) Evaluate free will vs determinism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Free will",
                              "statement": "Debate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Independent choice.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) All caused.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Choose responses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Genes determine.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Person-behaviour-environment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Blame vs treatment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Soft determinism most accepted.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Free will/determinism analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u4-fw-notes",
      title: "Free will — notes",
      summary: "Free will=choice; determinism=caused. Soft determinism middle ground.",
      sections: [
        { heading: "Key idea", body: "Affects blame, punishment, treatment, legal system." },
        { heading: "Types", body: "Biological, environmental, reciprocal determinism." },
      ],
    },
  ],
};
