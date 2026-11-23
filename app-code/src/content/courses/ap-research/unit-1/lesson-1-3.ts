import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apr-u1-lesson-1-3",
  code: "1-3",
  title: "Literature Review",
  goal: "I CAN synthesize existing research and identify gaps.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Literature review", definition: "Synthesis of existing scholarship on topic — establishes context and identifies gaps." },
    { term: "Research gap", definition: "Area needing further investigation — opportunity for new research." },
    { term: "Theoretical framework", definition: "Lenses/theories used to interpret findings — organizes analysis." },
    { term: "Citation analysis", definition: "Tracing how ideas develop through scholarly conversation." },
    { term: "Systematic review", definition: "Comprehensive, methodical review of all relevant literature." },
    { term: "Meta-analysis", definition: "Statistical combination of study results — quantifies overall effect." },
  ],
  concepts: [
    {
      id: "apr-u1-literature-review",
      title: "Synthesizing scholarship",
      skill: "Review literature to contextualize and justify research.",
      lesson: {
        sections: [
          {
            heading: "Literature review functions",
            body: "Establish context, identify what is known, reveal gaps, justify research question, situate within scholarly conversation.",
          },
          {
            heading: "Synthesis vs. summary",
            body: "Summary lists what each source says; synthesis identifies patterns, debates, and evolution of ideas across sources.",
          },
        ],
        keyFormulas: [
          { name: "Literature review", statement: "Context + synthesis + gap identification + justification" },
          { name: "Systematic review", statement: "Comprehensive search + inclusion criteria + synthesis" },
        ],
        workedExample: {
          problem: "Write literature review intro for 'AI in education'",
          solution: "Establish context (AI growing in education), summarize key findings (personalized learning benefits), identify debate (equity concerns), gap (long-term outcomes understudied), justify research (need longitudinal data).",
        },
      },
      questions: [
        {
          id: "apr-u1-literature-review-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A literature review's primary purpose is to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "list all sources"
                    },
                    {
                              "id": "b",
                              "text": "synthesize existing research and identify gaps"
                    },
                    {
                              "id": "c",
                              "text": "prove you're smart"
                    },
                    {
                              "id": "d",
                              "text": "copy others' work"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Literature review",
                              "statement": "Synthesize + identify gaps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Literature review synthesizes existing scholarship — establishes what's known, identifies debates and gaps, justifies new research contribution.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Synthesize + identify gaps",
          "commonErrors": [
                    "Thinking it's just a bibliography."
          ]
},
        },
        {
          id: "apr-u1-literature-review-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A research gap is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "missing pages"
                    },
                    {
                              "id": "b",
                              "text": "area where existing research is insufficient for answering question"
                    },
                    {
                              "id": "c",
                              "text": "error in literature"
                    },
                    {
                              "id": "d",
                              "text": "unpopular topic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Research gap",
                              "statement": "Insufficient existing research."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Research gap is where existing literature doesn't adequately answer the question — either understudied topic, contradictory findings needing resolution, or new context requiring investigation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifying gaps justifies new research — filling them is the contribution.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Insufficient existing research area",
          "commonErrors": [
                    "Confusing with error or unpopular topic."
          ]
},
        },
        {
          id: "apr-u1-literature-review-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a literature review examines 45 sources and organizes them into 3 themes, average sources per theme? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sources per theme",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Divide",
                              "statement": "$45 / 3 = 15$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$45 / 3 = 15$ sources per theme on average.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $15$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "15",
          "commonErrors": [
                    "Using wrong numbers."
          ]
},
        },
        {
          id: "apr-u1-literature-review-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between summarizing and synthesizing literature. Why is synthesis more valuable?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Literature review",
                              "statement": "Summary vs. synthesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Summary: describes what each source says individually — 'Smith found X, Jones found Y' — lists without connecting.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Synthesis: identifies patterns, debates, evolution across sources — 'While Smith and Jones agree on X, Lee challenges this, suggesting Y; this debate reveals gap in...'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Synthesis is more valuable because it reveals the scholarly conversation — where consensus exists, where debates rage, where gaps lie — guiding new research.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Summary lists; Synthesis reveals conversation and gaps",
          "commonErrors": [
                    "Confusing the two — synthesis builds understanding."
          ]
},
        },
        {
          id: "apr-u1-literature-review-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how literature review position affects research credibility. What happens when researchers ignore contrary evidence?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Literature review integrity",
                              "statement": "Honest engagement with scholarship."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Literature review position shapes research justification — ignoring contrary evidence suggests confirmation bias; reviewers/committees expect engagement with all relevant scholarship.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Ignoring contrary evidence: weakens credibility (appears unaware or dismissive); misses opportunity to address objections; risks replicating flawed approaches; violates scholarly norms of comprehensive review.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Honest engagement: acknowledges limitations, addresses counterarguments, positions research within debate — strengthens contribution by showing awareness of complexity.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: literature review must engage honestly with all relevant scholarship — ignoring contrary evidence undermines credibility and misses opportunities to strengthen research through addressing objections.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Ignoring contrary evidence undermines credibility",
          "commonErrors": [
                    "Cherry-picking supporting sources — dishonest scholarship."
          ]
},
        },
      ],
    },
  ],
};
