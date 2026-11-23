import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "apsa-u2-lesson-2-3",
  code: "2-3",
  title: "Critique and Reflection",
  goal: "I CAN engage in constructive critique and self-assessment of artwork.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Formal critique", definition: "Structured feedback — describe, analyze, interpret, evaluate artwork." },
    { term: "Peer critique", definition: "Feedback from classmates — multiple perspectives improve work." },
    { term: "Self-critique", definition: "Honest assessment of own work — strengths, weaknesses, growth." },
    { term: "Revision", definition: "Using critique to improve — art is iterative process." },
    { term: "Reflective practice", definition: "Journaling process, documenting decisions — metacognition." },
  ],
  concepts: [
    {
      id: "apsa-u2-critique-reflection",
      title: "Critique and growth",
      skill: "Engage in constructive critique and self-assessment.",
      lesson: {
        sections: [
          {
            heading: "Critique structure",
            body: "Describe (what) → Analyze (how) → Interpret (meaning) → Evaluate (effective?) — moves from observation to judgment.",
          },
          {
            heading: "Growth mindset",
            body: "Critique identifies improvement areas — not failure but roadmap; revision based on feedback strengthens work; art improves through iteration.",
          },
        ],
        keyFormulas: [
          { name: "Critique steps", statement: "Describe → Analyze → Interpret → Evaluate" },
          { name: "Growth process", statement: "Create → Critique → Reflect → Revise → Improve" },
        ],
        workedExample: {
          problem: "Self-critique a weak composition",
          solution: "Describe: elements present but scattered; Analyze: no clear focal point, weak balance; Interpret: viewer doesn't know where to look; Evaluate: concept unclear — needs stronger composition.",
        },
      },
      questions: [
        {
          id: "apsa-u2-critique-reflection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Effective critique begins with ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "judgment"
                    },
                    {
                              "id": "b",
                              "text": "description of what you see"
                    },
                    {
                              "id": "c",
                              "text": "praise"
                    },
                    {
                              "id": "d",
                              "text": "biography"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Critique structure",
                              "statement": "Describe first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effective critique starts with description — what you literally see; grounds feedback in evidence before interpretation/judgment.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Description first",
          "commonErrors": [
                    "Jumping to judgment without evidence."
          ]
},
        },
        {
          id: "apsa-u2-critique-reflection-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Constructive critique differs from destructive because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is harsher"
                    },
                    {
                              "id": "b",
                              "text": "identifies specific improvements rather than just flaws"
                    },
                    {
                              "id": "c",
                              "text": "avoids all criticism"
                    },
                    {
                              "id": "d",
                              "text": "only praises"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Constructive critique",
                              "statement": "Specific + actionable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constructive critique identifies specific, actionable improvements — 'focal point unclear because value contrast weak' vs. destructive 'this is bad' — guides growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Good critique balances strengths and weaknesses with specific suggestions.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Specific improvements",
          "commonErrors": [
                    "Confusing criticism with critique — critique guides."
          ]
},
        },
        {
          id: "apsa-u2-critique-reflection-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If critique has 4 steps and you complete 3, what percentage done? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Percent",
                              "answer": 75
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Divide",
                              "statement": "$3/4 \\times 100 = 75\\%$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$3/4 = 75\\%$ complete.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $75$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "75",
          "commonErrors": [
                    "Math errors."
          ]
},
        },
        {
          id: "apsa-u2-critique-reflection-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why revision is essential to artistic growth. How does critique enable improvement?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Critique → revision",
                              "statement": "Feedback loop."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Art improves through iteration — first drafts rarely perfect; critique identifies specific issues; revision addresses them; repeated cycles strengthen work.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Critique enables improvement by providing external perspective — artist too close to work to see problems; peers/teachers spot what creator misses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Revision isn't failure — it's process; professional artists revise extensively; accepting critique as roadmap accelerates growth.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Revision = iterative improvement via feedback",
          "commonErrors": [
                    "Seeing critique as judgment — it's roadmap."
          ]
},
        },
        {
          id: "apsa-u2-critique-reflection-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how self-critique differs from peer critique. What unique value does each provide?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Critique types",
                              "statement": "Self vs. others."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Self-critique: artist knows intent/context — can evaluate whether work achieves vision; but blind spots (can't see own work objectively); develops evaluative judgment.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Peer critique: fresh eyes see what creator misses; multiple perspectives reveal different readings; but may lack context/intent understanding; builds community.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ideal: combine both — self-critique for intent alignment, peer critique for objective gaps; professional artists use both plus mentor feedback.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: self-critique aligns with intent; peer critique reveals blind spots — both essential for growth; art improves through multiple perspectives.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Self=intent; Peers=blind spots; both essential",
          "commonErrors": [
                    "Relying on only one — need both perspectives."
          ]
},
        },
      ],
    },
  ],
};
