import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "satrw-u3-lesson-3-4",
  code: "3-4",
  title: "Boundaries and Precision in Writing",
  goal: "I CAN revise for precise, boundary-aware language.",
  standards: ["SAT RW 8.x"],
  vocabulary: [
    { term: "Precision", definition: "Exact word choice conveying intended meaning." },
    { term: "Boundary", definition: "Logical limits of a claim." },
    { term: "Overgeneralization", definition: "Claiming more than evidence supports." },
    { term: "Hedging", definition: "Qualifying claims appropriately." },
    { term: "Scope", definition: "What a statement covers — and doesn't." },
    { term: "Logical consistency", definition: "Claims that don't contradict each other." },
  ],
  concepts: [
    {
      id: "satrw-u3-boundaries",
      title: "Boundaries and precision",
      skill: "Use precise language and respect logical boundaries.",
      lesson: {
        sections: [
          {
            heading: "Precision in claims",
            body: "SAT Writing tests whether you respect logical boundaries — 'all students' vs 'most students', 'always' vs 'often', 'proves' vs 'suggests'. Overgeneralizing ('everyone knows', 'always works') exceeds evidence; hedging appropriately ('many', 'often', 'suggests') matches it. The skill: match claim strength to evidence strength.",
          },
          {
            heading: "Logical consistency",
            body: "Claims within a passage must not contradict — if a text says 'the policy failed' then 'the policy succeeded', that's inconsistent. Watch for absolutes ('never', 'always', 'all') — they're easy to disprove and often wrong; precise qualifiers ('rarely', 'generally', 'most') are safer and more accurate.",
          },
        ],
        keyFormulas: [
          { name: "Claim strength", statement: "Match to evidence — don't overclaim" },
          { name: "Qualifier test", statement: "Does 'all/always/never' survive scrutiny?" },
        ],
        workedExample: {
          problem: "Fix: 'The treatment always works for everyone.'",
          solution: "Overgeneralized — no treatment works universally. Precise: 'The treatment is effective for most patients' or 'clinical trials show the treatment works in X% of cases' — bounded claims match evidence.",
        },
      },
      questions: [
        {
          id: "satrw-u3-boundaries-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'All students passed' vs 'most students passed' differ in ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "grammar"
                    },
                    {
                              "id": "b",
                              "text": "scope/boundary of claim"
                    },
                    {
                              "id": "c",
                              "text": "length"
                    },
                    {
                              "id": "d",
                              "text": "formality"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Claim scope",
                              "statement": "How much it covers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'All' vs 'most' changes the claim's scope — absolutes are stronger claims requiring stronger evidence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Scope",
          "commonErrors": [
                    "Missing the logical difference."
          ]
},
        },
        {
          id: "satrw-u3-boundaries-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'The study proves X' should be 'the study suggests X' when ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the study is old"
                    },
                    {
                              "id": "b",
                              "text": "the evidence is correlational, not experimental"
                    },
                    {
                              "id": "c",
                              "text": "X is controversial"
                    },
                    {
                              "id": "d",
                              "text": "the study is long"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Evidence strength",
                              "statement": "Correlation can't 'prove'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correlational evidence can 'suggest' but not 'prove' — proof requires experimental/causal evidence; matching verb to evidence strength is precision.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Correlational evidence",
          "commonErrors": [
                    "Using 'proves' for weak evidence."
          ]
},
        },
        {
          id: "satrw-u3-boundaries-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Is 'the treatment always works' a precise claim? Answer 1 for yes, 0 for no.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Precise?",
                              "answer": 0
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Overgeneralization",
                              "statement": "'Always' exceeds typical evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Always' is an absolute — almost never supported by evidence; should be qualified ('usually', 'in most cases'). Not precise → 0.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "0",
          "commonErrors": [
                    "Accepting absolutes as precise."
          ]
},
        },
        {
          id: "satrw-u3-boundaries-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'hedging' isn't weakness — when is it actually stronger writing?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Appropriate qualification",
                              "statement": "Match claim to evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hedging ('suggests', 'may', 'in most cases') isn't weakness — it's ACCURACY; a claim matching its evidence is stronger than an overreaching one that can be disproven.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'The data suggests a correlation' is honest; 'the data proves causation' overclaims and invites refutation — precision builds credibility.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The SAT rewards recognizing when qualifiers are appropriate — 'always/never' should trigger scrutiny.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Hedging = accuracy; overclaiming = vulnerability",
          "commonErrors": [
                    "Thinking strong claims are always better."
          ]
},
        },
        {
          id: "satrw-u3-boundaries-q5",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A passage says 'this is the best solution' then later 'other approaches have merit.' Is this contradictory? How to fix?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Logical consistency",
                              "statement": "Reconciling apparent contradiction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Apparent contradiction — 'best' (absolute) vs 'others have merit' (relative); fix by qualifying: 'this is A strong solution, though others have merit' or 'among the options considered, this is strongest'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The issue is absolutes vs qualifiers — 'best' claims superiority over all; 'has merit' acknowledges alternatives; precise language reconciles them.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strategy: watch for absolute words (best, worst, always, never) — they're most likely to create logical inconsistency.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Qualify absolutes to reconcile with alternatives",
          "commonErrors": [
                    "Missing the absolute-vs-relative tension."
          ]
},
        },
      ],
    },
  ],
};
