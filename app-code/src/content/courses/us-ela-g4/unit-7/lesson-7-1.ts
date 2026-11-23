import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ela4-u7-lesson-7-1",
  code: "7-1",
  title: "Introducing Informative Topics",
  goal: "I CAN introduce a topic clearly with focus and purpose.",
  standards: ["W.4.2a"],
  vocabulary: [
    { term: "Informative", definition: "Teaching writing." },
    { term: "Topic", definition: "What it's about." },
    { term: "Introduce", definition: "Start with." },
    { term: "Focus", definition: "Main point." },
    { term: "Purpose", definition: "Why write it." },
    { term: "Preview", definition: "Show what's coming." },
    { term: "Organize", definition: "Arrange information." },
    { term: "Clear", definition: "Easy to understand." },
  ],
  concepts: [
    {
      id: "ela4-u7-informative-intro",
      title: "Introducing informative topics",
      skill: "Introduce a topic clearly with focus and preview the structure.",
      lesson: {
        sections: [
          {
            heading: "Clear intro",
            body: "**Introduce** the **topic** clearly and **preview** what you'll cover: 'This report explains how volcanoes form, why they erupt, and what happens during an eruption.'",
          },
          {
            heading: "Focus",
            body: "Keep the **focus** narrow — one clear **topic** with a **purpose** (inform, explain, describe).",
          },
        ],
        keyFormulas: [
          { name: "Intro", statement: "Topic + focus + preview = clear introduction." },
        ],
        workedExample: {
          problem: "Write an introduction for a report on dolphins.",
          solution: "'This report describes where dolphins live, how they communicate, and why they are important to ocean ecosystems.'",
        },
      },
      questions: [
        {
          id: "ela4-u7-informative-intro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A good informative introduction should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "be vague"
                    },
                    {
                              "id": "b",
                              "text": "name topic + preview content"
                    },
                    {
                              "id": "c",
                              "text": "skip the topic"
                    },
                    {
                              "id": "d",
                              "text": "tell a story"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Topic + preview."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Topic + preview.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**name topic + preview content**",
          "commonErrors": [
                    "Vague or missing topic."
          ]
},
        },
        {
          id: "ela4-u7-informative-intro-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Focus' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "many topics"
                    },
                    {
                              "id": "b",
                              "text": "one clear topic"
                    },
                    {
                              "id": "c",
                              "text": "no topic"
                    },
                    {
                              "id": "d",
                              "text": "random info"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Focus = one topic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Focus = one topic.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**one clear topic**",
          "commonErrors": [
                    "Too broad."
          ]
},
        },
        {
          id: "ela4-u7-informative-intro-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a 2-sentence introduction that names the topic and previews the content.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Intro",
                              "statement": "Topic + preview."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes clear intro.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'This report explains how bees make honey, why they are important, and how they communicate.'**",
          "commonErrors": [
                    "Vague.",
                    "No preview."
          ]
},
        },
        {
          id: "ela4-u7-informative-intro-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Purpose' in informative writing is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the topic"
                    },
                    {
                              "id": "b",
                              "text": "why you're writing it (inform/explain)"
                    },
                    {
                              "id": "c",
                              "text": "the ending"
                    },
                    {
                              "id": "d",
                              "text": "the audience"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Purpose = why write."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purpose = why write.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**why you're writing it (inform/explain)**",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela4-u7-informative-intro-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write introductions for two different informative topics. Which is clearer? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Intro",
                              "statement": "Two intros + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes two intros.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Argues clearer.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Intro A: 'This report describes X, Y, Z' (clear); Intro B: 'This is about stuff' (vague).'**",
          "commonErrors": [
                    "One intro only.",
                    "No argument."
          ]
},
        },
        {
          id: "ela4-u7-informative-intro-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it's about."
                    },
                    {
                              "id": "b",
                              "text": "Teaching writing."
                    },
                    {
                              "id": "c",
                              "text": "Start with."
                    },
                    {
                              "id": "d",
                              "text": "Main point."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Informative\" means Teaching writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Informative\" means Teaching writing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Informative** = Teaching writing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u7-informative-intro-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Topic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Start with."
                    },
                    {
                              "id": "b",
                              "text": "Main point."
                    },
                    {
                              "id": "c",
                              "text": "Why write it."
                    },
                    {
                              "id": "d",
                              "text": "What it's about."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Topic\" means What it's about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Topic\" means What it's about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Topic** = What it's about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u7-informative-intro-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Introduce\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Main point."
                    },
                    {
                              "id": "b",
                              "text": "Start with."
                    },
                    {
                              "id": "c",
                              "text": "Why write it."
                    },
                    {
                              "id": "d",
                              "text": "Show what's coming."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Introduce\" means Start with."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Introduce\" means Start with.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Introduce** = Start with.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
