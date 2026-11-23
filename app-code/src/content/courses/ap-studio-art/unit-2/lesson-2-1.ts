import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apsa-u2-lesson-2-1",
  code: "2-1",
  title: "Sustained Investigation",
  goal: "I CAN develop sustained investigations exploring ideas across multiple works.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Sustained investigation", definition: "Extended exploration of theme/idea across 12+ works — conceptual depth." },
    { term: "Concept vs. theme", definition: "Concept = idea driving work; theme = subject matter (identity, environment, memory)." },
    { term: "Series", definition: "Related works exploring same concept — shows development and range." },
    { term: "Experimentation", definition: "Trying different approaches/media within investigation — finding what works." },
    { term: "Development", definition: "How works evolve — sketches to final, failures to successes." },
    { term: "Synthesis", definition: "Combining insights from investigation into coherent body of work." },
  ],
  concepts: [
    {
      id: "apsa-u2-sustained-investigation",
      title: "Building sustained investigations",
      skill: "Develop and sustain conceptual investigations across multiple works.",
      lesson: {
        sections: [
          {
            heading: "Investigation structure",
            body: "Concept (core idea) → exploration (multiple approaches) → development (refining works) → synthesis (coherent body) — sustained means extended engagement.",
          },
          {
            heading: "Range vs. depth",
            body: "12+ required works show range; sustained investigation shows depth — exploring concept from multiple angles, media, scales.",
          },
        ],
        keyFormulas: [
          { name: "Investigation structure", statement: "Concept → Exploration → Development → Synthesis" },
          { name: "Requirements", statement: "12+ sustained works + 5 selected works" },
        ],
        workedExample: {
          problem: "Develop 'identity' investigation",
          solution: "Concept: identity as constructed/performed; explore: self-portraits, masks, fragmented figures, cultural symbols; develop: refine strongest approaches; synthesize: cohesive series showing identity's complexity.",
        },
      },
      questions: [
        {
          id: "apsa-u2-sustained-investigation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sustained investigation requires ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "12+ works exploring one concept"
                    },
                    {
                              "id": "b",
                              "text": "one perfect artwork"
                    },
                    {
                              "id": "c",
                              "text": "only drawings"
                    },
                    {
                              "id": "d",
                              "text": "commercial success"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sustained investigation",
                              "statement": "Extended conceptual exploration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sustained investigation requires 12+ works exploring one concept — shows depth and range over time, not single masterpiece.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "12+ works, one concept",
          "commonErrors": [
                    "Thinking it's about quantity alone — it's conceptual depth."
          ]
},
        },
        {
          id: "apsa-u2-sustained-investigation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Concept differs from theme because concept ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is the subject"
                    },
                    {
                              "id": "b",
                              "text": "is the underlying idea driving the work"
                    },
                    {
                              "id": "c",
                              "text": "is visual style"
                    },
                    {
                              "id": "d",
                              "text": "is the medium"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Concept",
                              "statement": "Underlying driving idea."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Concept is underlying idea/meaning ('identity as performance'); theme is subject matter ('identity', 'nature') — concept deeper, theme surface.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Good art has concept — 'what it's about' beyond 'what it depicts.'",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Underlying driving idea",
          "commonErrors": [
                    "Confusing with theme (subject matter)."
          ]
},
        },
        {
          id: "apsa-u2-sustained-investigation-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "AP Studio Art portfolio requires 12 sustained investigation works + 5 selected works. Total works? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Total works",
                              "answer": 17
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Add",
                              "statement": "$12 + 5 = 17$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$12 + 5 = 17$ total works (though some overlap possible).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $17$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "17",
          "commonErrors": [
                    "Adding wrong or assuming overlap."
          ]
},
        },
        {
          id: "apsa-u2-sustained-investigation-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how experimentation strengthens sustained investigations. Why try multiple approaches?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Experimentation",
                              "statement": "Finding what works."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Experimentation tries different media, techniques, compositions within concept — discovers unexpected possibilities; prevents settling for first idea.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Multiple approaches reveal concept's range — 'identity' might work as fragmented self-portrait, mask series, or abstract color field; each approach illuminates different aspect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Experimentation also builds skills — trying unfamiliar media expands technical range; failures teach as much as successes; process is learning.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Experimentation discovers range + builds skills",
          "commonErrors": [
                    "Thinking first idea is best — exploration reveals possibilities."
          ]
},
        },
        {
          id: "apsa-u2-sustained-investigation-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze what makes a sustained investigation 'sustained' vs. just a series of unrelated works. What provides coherence?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Sustained coherence",
                              "statement": "Conceptual unity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sustained = unified by concept — all works explore same underlying idea, even if visual styles differ; coherence comes from conceptual thread, not visual similarity.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Unrelated works: same subject but no deeper connection — '12 portraits' isn't investigation unless exploring specific concept (e.g., 'identity through portraiture').",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cohesion strategies: recurring motif, consistent palette, related compositions, progressive development — but concept is primary unifier.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: sustained investigation requires conceptual unity — works must collectively explore and develop an idea; variety within unity shows depth.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Sustained = conceptually unified, not just same subject",
          "commonErrors": [
                    "Confusing quantity with depth — need conceptual thread."
          ]
},
        },
      ],
    },
  ],
};
