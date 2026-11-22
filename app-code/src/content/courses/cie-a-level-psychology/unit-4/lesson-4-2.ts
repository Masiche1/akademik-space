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
                              "text": "All behaviour caused"
                    },
                    {
                              "id": "b",
                              "text": "Ability to choose behaviour independently"
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
          "correctChoiceId": "b"
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
        {
          id: "ciealpsy-u4-fw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Free will is the idea that:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "People can choose their behaviour independently of prior causes"
                    },
                    {
                              "id": "b",
                              "text": "All behaviour is caused by prior events"
                    },
                    {
                              "id": "c",
                              "text": "The environment determines all behaviour"
                    },
                    {
                              "id": "d",
                              "text": "Genes determine all behaviour"
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
                              "reasoning": "Free will holds that individuals can make genuine choices rather than being wholly determined by prior causes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Independent choice of behaviour"
},
        },
        {
          id: "ciealpsy-u4-fw-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many positions are outlined in the free will versus determinism debate?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Debate",
                              "statement": "Free will, hard, soft determinism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson outlines free will, hard determinism and soft determinism.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u4-fw-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Hard determinism claims that:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only the environment determines behaviour"
                    },
                    {
                              "id": "b",
                              "text": "All behaviour is caused by prior events and there is no free will"
                    },
                    {
                              "id": "c",
                              "text": "Behaviour is partly chosen by the individual"
                    },
                    {
                              "id": "d",
                              "text": "Only genes determine behaviour"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hard determinism",
                              "statement": "All behaviour caused."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hard determinism holds that every behaviour has a prior cause, leaving no room for free will — like a physics-like causal chain.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "All behaviour is caused; no free will"
},
        },
        {
          id: "ciealpsy-u4-fw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many types of determinism are described in the lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Determinism",
                              "statement": "Biological, environmental, reciprocal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson describes biological, environmental and reciprocal determinism.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u4-fw-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Soft determinism argues that:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only biology determines behaviour"
                    },
                    {
                              "id": "b",
                              "text": "There is no causation at all"
                    },
                    {
                              "id": "c",
                              "text": "Behaviour is determined but people can still choose how to respond"
                    },
                    {
                              "id": "d",
                              "text": "Free will is an illusion with no compromise"
                    }
          ],
          "correctChoiceId": "c"
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
                              "reasoning": "Soft determinism accepts that behaviour has causes but maintains that individuals retain some capacity to choose their responses.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Determined but choose responses"
},
        },
        {
          id: "ciealpsy-u4-fw-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many areas of life are identified as affected by the determinism debate?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Implications",
                              "statement": "Legal system and therapy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The debate affects the legal system and therapy/treatment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u4-fw-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Reciprocal determinism, associated with Bandura, proposes that:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The person, their behaviour and the environment all interact to influence each other"
                    },
                    {
                              "id": "b",
                              "text": "Determinism is impossible"
                    },
                    {
                              "id": "c",
                              "text": "Only the environment determines behaviour"
                    },
                    {
                              "id": "d",
                              "text": "Only genes determine behaviour"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reciprocal determinism",
                              "statement": "Person-behaviour-environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reciprocal determinism sees cognition, behaviour and environment as mutually influencing one another.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Person, behaviour and environment interact"
},
        },
        {
          id: "ciealpsy-u4-fw-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "State the number of (a) types of determinism described and (b) areas of life affected by the debate.",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 },
                    { "label": "b", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Determinism",
                              "statement": "3 types; 2 areas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Biological, environmental and reciprocal determinism = 3.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) The legal system and therapy = 2.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "3 and 2"
},
        },
        {
          id: "ciealpsy-u4-fw-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If criminal behaviour is viewed as determined rather than freely chosen, the legal system is more likely to emphasise:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Treatment and rehabilitation rather than blame and punishment"
                    },
                    {
                              "id": "b",
                              "text": "Harsher punitive measures"
                    },
                    {
                              "id": "c",
                              "text": "Longer prison sentences"
                    },
                    {
                              "id": "d",
                              "text": "Ignoring the offender's mental state"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Legal implications",
                              "statement": "Treatment vs punishment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If behaviour is seen as caused by factors beyond the person's control, emphasis shifts from blame and punishment towards treatment and rehabilitation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Treatment and rehabilitation"
},
        },
        {
          id: "ciealpsy-u4-fw-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between hard determinism and soft determinism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hard vs soft",
                              "statement": "All caused vs choose responses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hard determinism claims all behaviour is caused by prior events, leaving no free will.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Soft determinism accepts that behaviour has causes but argues people can still choose how to respond.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Soft determinism acts as a middle ground, preserving some human agency.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Hard = all caused; soft = choose responses"
},
        },
        {
          id: "ciealpsy-u4-fw-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the determinism debate affects the treatment of offenders.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Legal implications",
                              "statement": "Blame vs treatment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A free will view emphasises personal responsibility, blame and punishment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A determinist view emphasises the causes of offending — biological or environmental — and favours treatment and rehabilitation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different determinist views suggest different treatments, e.g. biological causes may point to medical intervention while environmental causes suggest behavioural therapy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Most psychological approaches are deterministic, yet the debate remains unresolved because responsibility and treatment both have merit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Determined offenders → treatment; free will → punishment"
},
        },
        {
          id: "ciealpsy-u4-fw-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define free will, hard determinism, soft determinism, biological determinism, environmental determinism and reciprocal determinism. (b) What is free will? (c) What is hard determinism? (d) What is soft determinism? (e) What is biological determinism? (f) What is reciprocal determinism? (g) How does determinism affect the legal system? (h) Evaluate the free will versus determinism debate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Free will",
                              "statement": "Debate and evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Independent choice of behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) All behaviour caused by prior events.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Behaviour determined but responses can be chosen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Genes and brain structure determine behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Person, behaviour and environment interact.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Determinism shifts emphasis from blame and punishment towards causes, treatment and rehabilitation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Soft determinism offers the best compromise — acknowledging causes while preserving some agency and responsibility.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Free will and determinism analysis."
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
