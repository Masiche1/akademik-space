import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "satrw-u1-lesson-1-6",
  code: "1-6",
  title: "Synthesizing Multiple Sources",
  goal: "I CAN combine information from paired passages or texts.",
  standards: ["SAT RW 4.x"],
  vocabulary: [
    { term: "Synthesis", definition: "Combining information from multiple sources." },
    { term: "Paired passages", definition: "Two related texts on the same topic." },
    { term: "Agreement", definition: "Where sources align." },
    { term: "Disagreement", definition: "Where sources differ — analyze why." },
    { term: "Complementary", definition: "Sources adding different aspects." },
    { term: "Source evaluation", definition: "Assessing reliability and perspective." },
  ],
  concepts: [
    {
      id: "satrw-u1-synthesis",
      title: "Synthesis",
      skill: "Compare and combine information from multiple passages.",
      lesson: {
        sections: [
          {
            heading: "Paired passage strategy",
            body: "SAT paired passages present two texts on the same topic — possibly agreeing, disagreeing, or approaching differently. Read BOTH before answering; questions ask how they relate, where they differ, and what each contributes. Don't assume one is 'right' — analyze the relationship.",
          },
          {
            heading: "Types of relationships",
            body: "**Agreement**: both support the same claim (possibly different evidence). **Disagreement**: they contradict — analyze WHY (different assumptions, methods, values). **Complementary**: they address different aspects — together they give fuller picture. The relationship type determines the best answer.",
          },
        ],
        keyFormulas: [
          { name: "Paired passages", statement: "Read both fully → identify relationship → answer accordingly" },
          { name: "Relationship types", statement: "Agreement / disagreement / complementary" },
        ],
        workedExample: {
          problem: "Passage A supports policy X with economic data; Passage B opposes it with social concerns. How do they relate?",
          solution: "They address DIFFERENT dimensions — economics vs social impact — complementary perspectives on the same policy; neither is 'wrong', they evaluate different criteria. The synthesis recognizes both dimensions matter.",
        },
      },
      questions: [
        {
          id: "satrw-u1-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Paired passages on SAT typically ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "contradict each other"
                    },
                    {
                              "id": "b",
                              "text": "present related perspectives needing comparison"
                    },
                    {
                              "id": "c",
                              "text": "are identical"
                    },
                    {
                              "id": "d",
                              "text": "are unrelated"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Paired passages",
                              "statement": "Related texts to compare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Paired passages present related texts — the task is analyzing their relationship, not finding which is correct.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Related perspectives",
          "commonErrors": [
                    "Assuming one must be wrong."
          ]
},
        },
        {
          id: "satrw-u1-synthesis-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When two passages disagree, the best analysis focuses on ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "which author is smarter"
                    },
                    {
                              "id": "b",
                              "text": "WHY they disagree — assumptions, methods, values"
                    },
                    {
                              "id": "c",
                              "text": "which is longer"
                    },
                    {
                              "id": "d",
                              "text": "which is more recent"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Disagreement analysis",
                              "statement": "Trace the source of difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Disagreement analysis asks WHY — different assumptions, evidence types, or values explain the conflict better than declaring a winner.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Why they differ",
          "commonErrors": [
                    "Picking sides instead of analyzing cause."
          ]
},
        },
        {
          id: "satrw-u1-synthesis-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'complementary' and 'disagreeing' passages, with examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Relationship types",
                              "statement": "Different vs conflicting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complementary passages address DIFFERENT aspects — one covers economics, another covers social impact — together fuller picture; disagreeing passages make CONTRADICTORY claims about the same thing — one says X works, other says it doesn't.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: complementary = 'policy reduces costs' + 'policy improves equity' (different benefits); disagreeing = 'policy reduces costs' + 'policy increases costs' (contradiction).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The distinction matters — complementary invites synthesis, disagreement invites analysis of why.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Complementary=different aspects; disagreeing=contradictory claims",
          "commonErrors": [
                    "Treating all differences as disagreement."
          ]
},
        },
        {
          id: "satrw-u1-synthesis-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two passages use different methodologies — one cites controlled studies, one cites expert opinion. How does this affect evaluating their claims?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Methodology evaluation",
                              "statement": "Evidence quality differs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different methodologies produce different reliability — controlled studies offer stronger causal evidence than expert opinion (valuable but more subjective); evaluating claims requires weighing the method behind them.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Neither is automatically wrong — expert opinion may be the best available for some questions; but for causal claims, experimental evidence typically outweighs anecdotal or opinion-based support.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strong analysis evaluates evidence QUALITY, not just conclusions — the method determines how much weight a claim can bear.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Methodology determines evidence weight — studies > opinion for causation",
          "commonErrors": [
                    "Evaluating conclusions without considering methods."
          ]
},
        },
      ],
    },
  ],
};
