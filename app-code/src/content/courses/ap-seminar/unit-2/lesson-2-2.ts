import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apsm-u2-lesson-2-2",
  code: "2-2",
  title: "Source Synthesis",
  goal: "I CAN combine multiple sources to build comprehensive arguments.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Synthesis", definition: "Combining information from multiple sources to create new understanding." },
    { term: "Corroboration", definition: "Independent sources agreeing — strengthens confidence in claims." },
    { term: "Contradiction", definition: "Sources disagreeing — requires investigation or acknowledgment." },
    { term: "Source triangulation", definition: "Using multiple source types/perspectives to verify claims." },
    { term: "Integration", definition: "Weaving sources into argument naturally — not just listing." },
    { term: "Citation", definition: "Attributing sources properly — academic integrity requirement." },
  ],
  concepts: [
    {
      id: "apsm-u2-source-synthesis",
      title: "Combining sources",
      skill: "Synthesize multiple sources into coherent arguments.",
      lesson: {
        sections: [
          {
            heading: "Synthesis process",
            body: "Find sources on topic → identify agreements/disagreements → corroborate with independent sources → resolve contradictions → integrate into argument with citations.",
          },
          {
            heading: "Source relationships",
            body: "Corroboration (independent agreement) strengthens; contradiction requires investigation; complementary sources fill gaps; conflicting sources reveal complexity.",
          },
        ],
        keyFormulas: [
          { name: "Triangulation", statement: "Multiple sources/perspectives verify claims" },
          { name: "Synthesis", statement: "Combine sources → identify patterns → integrate into argument" },
        ],
        workedExample: {
          problem: "Synthesize sources on 'remote work productivity'",
          solution: "Source A (study): +15% productivity; Source B (survey): mixed results; Source C (meta-analysis): +5% average; synthesis: modest gains, context-dependent — not universal.",
        },
      },
      questions: [
        {
          id: "apsm-u2-source-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Synthesis in research means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "copying sources"
                    },
                    {
                              "id": "b",
                              "text": "combining sources to create new understanding"
                    },
                    {
                              "id": "c",
                              "text": "summarizing one source"
                    },
                    {
                              "id": "d",
                              "text": "listing sources"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synthesis",
                              "statement": "Combining sources for new understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Synthesis combines information from multiple sources to create new understanding — not just summarizing but integrating perspectives into coherent argument.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Combining for new understanding",
          "commonErrors": [
                    "Confusing with summary — synthesis is integration."
          ]
},
        },
        {
          id: "apsm-u2-source-synthesis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Corroboration strengthens arguments because ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "more sources always better"
                    },
                    {
                              "id": "b",
                              "text": "independent sources agreeing increases confidence in claims"
                    },
                    {
                              "id": "c",
                              "text": "it shows popularity"
                    },
                    {
                              "id": "d",
                              "text": "it avoids contradictions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Source triangulation",
                              "statement": "Independent agreement = confidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Corroboration — independent sources reaching same conclusion — increases confidence because errors/ biases are less likely to coincide; it's stronger than any single source.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Contradictions don't weaken — they reveal complexity requiring investigation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Independent agreement increases confidence",
          "commonErrors": [
                    "Equating quantity with quality — independence matters."
          ]
},
        },
        {
          id: "apsm-u2-source-synthesis-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If you have 5 sources on a topic and 3 corroborate a claim while 2 contradict, what percentage corroborate? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Percent",
                              "answer": 60
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Divide",
                              "statement": "$3/5 \\times 100 = 60\\%$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$3/5 = 0.6 = 60\\%$ corroborate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $60$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "60",
          "commonErrors": [
                    "Using wrong total or format."
          ]
},
        },
        {
          id: "apsm-u2-source-synthesis-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between summarizing sources and synthesizing them. Why is synthesis more valuable for arguments?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Summary vs. synthesis",
                              "statement": "Integration vs. recap."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Summarizing: restating what each source says — 'Source A says X, Source B says Y'; describes sources separately without connecting them.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Synthesizing: combining sources to create new understanding — 'Sources A and B agree on X, but C complicates this by showing Y' — integrates perspectives into coherent argument.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Synthesis is more valuable because it builds arguments — shows how evidence converges, where it diverges, and what the combined picture reveals — beyond any single source.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Summary = describe sources; Synthesis = integrate into argument",
          "commonErrors": [
                    "Confusing the two — synthesis creates new understanding."
          ]
},
        },
        {
          id: "apsm-u2-source-synthesis-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how source contradictions should be handled in academic writing. When is disagreement a weakness vs. a strength?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Handling contradictions",
                              "statement": "Complexity vs. confusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Contradictions reveal complexity — 'Study A shows X, but Study B shows Y under different conditions' — acknowledging them demonstrates thoroughness and intellectual honesty.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Weakness: unexplained contradictions confuse readers; ignoring inconvenient evidence undermines credibility; cherry-picking only agreeing sources is dishonest.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strength: explaining contradictions (different methods, contexts, populations) enriches argument; shows you've engaged with complexity; 'evidence suggests X in context A but Y in context B' is more sophisticated than claiming universal X.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: contradictions strengthen arguments when explained — they reveal nuance; unexplained contradictions weaken — require either resolution or acknowledgment of limits.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Explained contradictions strengthen; unexplained weaken",
          "commonErrors": [
                    "Ignoring contradictions — engagement reveals sophistication."
          ]
},
        },
      ],
    },
  ],
};
