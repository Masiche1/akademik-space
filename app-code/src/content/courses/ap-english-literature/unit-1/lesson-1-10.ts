import type { Lesson } from "../../../types.ts";

export const lesson110: Lesson = {
  id: "apelit-u1-lesson-1-10",
  code: "1-10",
  title: "Literary Periods and Movements",
  goal: "I CAN situate texts within literary periods and identify movement characteristics.",
  standards: ["AP Lit 10.x"],
  vocabulary: [
    { term: "Romanticism", definition: "Emphasis on emotion, nature, individualism — late 18th-early 19th century." },
    { term: "Realism", definition: "Objective depiction of ordinary life — mid-late 19th century." },
    { term: "Modernism", definition: "Experimentation, fragmentation, disillusionment — early 20th century." },
    { term: "Postmodernism", definition: "Skepticism of grand narratives, playfulness, intertextuality — late 20th century." },
    { term: "Gothic", definition: "Dark, mysterious, supernatural elements — 18th-19th century." },
    { term: "Transcendentalism", definition: "Nature as spiritual teacher, individual intuition — American 19th century." },
  ],
  concepts: [
    {
      id: "apelit-u1-lit-history",
      title: "Literary periods",
      skill: "Identify period characteristics and how they shape texts.",
      lesson: {
        sections: [
          {
            heading: "Period awareness",
            body: "Literary movements reflect their moments: **Romanticism** prized emotion and nature over reason; **Realism** turned to ordinary life and objective detail; **Modernism** fractured form to express disillusionment; **Postmodernism** questioned all narratives including its own.",
          },
          {
            heading: "Why periods matter",
            body: "Period context explains stylistic choices — a fragmented modernist poem isn't 'confusing', it's enacting modern dislocation; a gothic novel's storms aren't just weather, they're the genre's vocabulary for dread. Period knowledge deepens analysis rather than replacing it.",
          },
        ],
        keyFormulas: [
          { name: "Period signals", statement: "Style + themes + concerns → movement" },
          { name: "Context rule", statement: "Period explains choices, doesn't excuse skipping analysis" },
        ],
        workedExample: {
          problem: "A poem uses fragmented lines, allusions to myth, and a tone of exhaustion. Which movement?",
          solution: "Fragmented form + mythic allusion + disillusioned tone suggests Modernism — the form enacts the era's sense of broken meaning and lost certainty.",
        },
      },
      questions: [
        {
          id: "apelit-u1-lit-history-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Modernism is characterized by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "orderly form and optimism"
                    },
                    {
                              "id": "b",
                              "text": "experimentation, fragmentation, disillusionment"
                    },
                    {
                              "id": "c",
                              "text": "strict rhyme and regular meter"
                    },
                    {
                              "id": "d",
                              "text": "realistic depictions of daily life"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Modernism",
                              "statement": "Form-breaking, disillusioned early 20th century."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Modernism rejected Victorian order — fragmented forms, mythic methods, and disillusionment with progress define it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Fragmentation and disillusionment",
          "commonErrors": [
                    "Confusing modernism with realism."
          ]
},
        },
        {
          id: "apelit-u1-lit-history-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A novel depicting ordinary middle-class life with objective detail is likely ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Romantic"
                    },
                    {
                              "id": "b",
                              "text": "Realist"
                    },
                    {
                              "id": "c",
                              "text": "Gothic"
                    },
                    {
                              "id": "d",
                              "text": "Modernist"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Realism",
                              "statement": "Ordinary life, objective detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Realism turned from romance and heroism to the ordinary — middle-class life, social problems, objective presentation.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Realism",
          "commonErrors": [
                    "Assuming all 19th-century fiction is Romantic."
          ]
},
        },
        {
          id: "apelit-u1-lit-history-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why knowing a text's literary period improves analysis — without letting it replace analysis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Contextual analysis",
                              "statement": "Period explains stylistic choices."
                    },
                    {
                              "kind": "skill",
                              "name": "Balanced argument",
                              "statement": "Context aids, doesn't substitute."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Period knowledge explains WHY choices were made — a modernist's fragmentation isn't confusion but method; knowing this lets you analyze the choice rather than dismiss it.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "But context is a lens, not an answer — 'it's modernist so it's about disillusionment' skips the work of showing HOW the text creates that meaning through specific choices.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Best essays use period as hypothesis then prove it through textual evidence.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Period explains choices; analysis still must show how the text works",
          "commonErrors": [
                    "Using period as a substitute for analysis."
          ]
},
        },
        {
          id: "apelit-u1-lit-history-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare Romantic and Realist approaches to nature in literature. How does each period's worldview shape its depiction?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Period worldviews",
                              "statement": "Romantic nature = spiritual; Realist nature = material."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparative analysis",
                              "statement": "Weigh different treatments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Romanticism treats nature as a spiritual teacher — wild, sublime, a source of truth and renewal; the individual finds meaning in communion with the natural world.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Realism treats nature more materially — as setting, environment, or force acting on ordinary lives; less symbolic, more observed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The difference reflects worldviews: Romanticism's faith in intuition and the natural vs Realism's commitment to objective observation.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Romantic nature is spiritual teacher; Realist nature is material setting",
          "commonErrors": [
                    "Listing period traits without comparing how they shape depiction."
          ]
},
        },
      ],
    },
  ],
};
