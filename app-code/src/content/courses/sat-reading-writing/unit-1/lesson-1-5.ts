import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "satrw-u1-lesson-1-5",
  code: "1-5",
  title: "Rhetorical Situation in Exposition",
  goal: "I CAN analyze how audience and purpose shape informational texts.",
  standards: ["SAT RW 3.x"],
  vocabulary: [
    { term: "Rhetorical situation", definition: "Speaker, audience, purpose, context." },
    { term: "Audience", definition: "Who the text is for — shapes content and tone." },
    { term: "Purpose", definition: "What the text aims to do — inform, persuade, explain." },
    { term: "Exposition", definition: "Informational writing — facts, explanations." },
    { term: "Tone", definition: "Author's attitude toward subject." },
    { term: "Context", definition: "Historical/cultural circumstances shaping the text." },
  ],
  concepts: [
    {
      id: "satrw-u1-rhetorical-situation",
      title: "Rhetorical situation",
      skill: "Analyze how audience and purpose shape informational texts.",
      lesson: {
        sections: [
          {
            heading: "Audience shapes everything",
            body: "The same information is presented differently for different audiences — a medical study for scientists uses jargon and data; for the public, it uses analogies and reassurance. SAT questions ask how the text is shaped FOR its audience — word choice, assumed knowledge, and tone all reflect who the writer expects to read.",
          },
          {
            heading: "Purpose drives structure",
            body: "Informational texts aim to EXPLAIN or INFORM — structure follows purpose: definitions early, examples to clarify, conclusions that synthesize. Recognizing the purpose helps predict what details matter and how claims are supported.",
          },
        ],
        keyFormulas: [
          { name: "Audience test", statement: "What does this text assume readers already know?" },
          { name: "Purpose check", statement: "Is this informing, explaining, or persuading?" },
        ],
        workedExample: {
          problem: "A text explains photosynthesis twice — once for scientists, once for children. What changes?",
          solution: "Vocabulary (technical terms vs analogies), assumed knowledge (none vs basic biology), examples (data vs familiar objects), tone (formal vs playful). Audience determines EVERYTHING about presentation, not just simplification.",
        },
      },
      questions: [
        {
          id: "satrw-u1-rhetorical-situation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The rhetorical situation includes ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only the author"
                    },
                    {
                              "id": "b",
                              "text": "speaker, audience, purpose, context"
                    },
                    {
                              "id": "c",
                              "text": "just the topic"
                    },
                    {
                              "id": "d",
                              "text": "grammar rules"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rhetorical situation",
                              "statement": "Full context of communication."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rhetorical situation = speaker + audience + purpose + context — all four shape every text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Speaker, audience, purpose, context",
          "commonErrors": [
                    "Thinking only author matters."
          ]
},
        },
        {
          id: "satrw-u1-rhetorical-situation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A text using heavy jargon assumes its audience ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is children"
                    },
                    {
                              "id": "b",
                              "text": "has specialized knowledge"
                    },
                    {
                              "id": "c",
                              "text": "is confused"
                    },
                    {
                              "id": "d",
                              "text": "needs simplification"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Assumed knowledge",
                              "statement": "Jargon signals expertise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Technical vocabulary assumes a knowledgeable audience — jargon is a signal of who the writer expects to read.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Specialized knowledge",
          "commonErrors": [
                    "Thinking jargon is always bad."
          ]
},
        },
        {
          id: "satrw-u1-rhetorical-situation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the same information might be presented differently for expert vs general audiences.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Audience adaptation",
                              "statement": "Same content, different packaging."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Experts get technical terms, data, and minimal explanation — they can process density; general audiences get analogies, examples, and step-by-step explanation — they need scaffolding.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The INFORMATION is identical; the PRESENTATION differs — vocabulary, assumed knowledge, examples, and tone all shift to match what the audience can handle.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "SAT questions ask 'how is this text shaped for its audience' — recognizing the adaptation is the skill.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Same info, different vocabulary/examples/assumptions",
          "commonErrors": [
                    "Thinking content must change, not just presentation."
          ]
},
        },
        {
          id: "satrw-u1-rhetorical-situation-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A science passage uses the phrase 'as we all know' repeatedly. What does this signal about audience and tone?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Inclusive language",
                              "statement": "'We all know' flatters audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'As we all know' assumes shared knowledge — it flatters the audience by presuming expertise AND creates an in-group feeling; the tone is collegial, treating readers as insiders.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It's also a rhetorical move — making readers feel included makes them more receptive to the argument; the phrase positions the audience as already agreeing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Recognizing such moves is key — the phrase does double duty: assumes knowledge AND builds rapport.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Assumes expertise + builds in-group rapport",
          "commonErrors": [
                    "Reading it as neutral filler."
          ]
},
        },
      ],
    },
  ],
};
