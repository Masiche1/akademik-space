import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apsm-u2-lesson-2-1",
  code: "2-1",
  title: "Argument Structure",
  goal: "I CAN construct clear, evidence-based arguments with proper reasoning.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Claim", definition: "Assertion requiring evidence — the thesis of an argument." },
    { term: "Evidence", definition: "Data, facts, examples supporting claims." },
    { term: "Reasoning", definition: "Logical connection between evidence and claim — the 'because' linking them." },
    { term: "Warrant", definition: "Underlying assumption connecting evidence to claim — often unstated." },
    { term: "Counterargument", definition: "Opposing viewpoint — addressing it strengthens argument." },
    { term: "Synthesis", definition: "Combining multiple sources to build comprehensive argument." },
  ],
  concepts: [
    {
      id: "apsm-u2-argument-structure",
      title: "Building arguments",
      skill: "Construct evidence-based arguments with logical structure.",
      lesson: {
        sections: [
          {
            heading: "Argument components",
            body: "Claim (assertion) + Evidence (support) + Reasoning (connection) + Warrant (assumption) = complete argument; counterarguments acknowledge opposing views.",
          },
          {
            heading: "Evidence types",
            body: "Statistical data, case studies, expert testimony, primary sources, logical examples — each has strengths/limitations for different claims.",
          },
        ],
        keyFormulas: [
          { name: "Argument structure", statement: "Claim + Evidence + Reasoning + Warrant" },
          { name: "Strong argument", statement: "Clear claim, credible evidence, logical reasoning, acknowledged counterarguments" },
        ],
        workedExample: {
          problem: "Evaluate 'Social media is bad for teenagers' as an argument",
          solution: "Incomplete — it's a claim without evidence, reasoning, or counterarguments; needs data on effects, mechanism explaining why, acknowledgment that some uses are beneficial.",
        },
      },
      questions: [
        {
          id: "apsm-u2-argument-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'warrant' in argumentation is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the evidence"
                    },
                    {
                              "id": "b",
                              "text": "the underlying assumption connecting evidence to claim"
                    },
                    {
                              "id": "c",
                              "text": "the counterargument"
                    },
                    {
                              "id": "d",
                              "text": "the conclusion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Warrant",
                              "statement": "Unstated assumption linking evidence to claim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Warrant is the underlying assumption that makes evidence support the claim — often unstated but essential; e.g., 'test scores matter' is warrant for using them as evidence.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Underlying assumption linking evidence to claim",
          "commonErrors": [
                    "Confusing with evidence or reasoning."
          ]
},
        },
        {
          id: "apsm-u2-argument-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which makes an argument strongest?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Assert claim strongly"
                    },
                    {
                              "id": "b",
                              "text": "Support claim with credible evidence and logical reasoning"
                    },
                    {
                              "id": "c",
                              "text": "Use emotional appeals"
                    },
                    {
                              "id": "d",
                              "text": "Ignore counterarguments"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Argument quality",
                              "statement": "Evidence + reasoning > assertion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strong arguments combine credible evidence with logical reasoning — 'Data shows X (evidence), which means Y because Z (reasoning), supporting claim.' Emotional appeals and ignored counterarguments weaken arguments.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Acknowledging counterarguments actually strengthens credibility.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Evidence + reasoning + acknowledged counterarguments",
          "commonErrors": [
                    "Equating strength with assertiveness."
          ]
},
        },
        {
          id: "apsm-u2-argument-structure-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If an argument has 3 claims and each needs 2 pieces of evidence, how many evidence pieces total? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Evidence pieces",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Multiply",
                              "statement": "$3 \\times 2 = 6$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$3 \\times 2 = 6$ evidence pieces needed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $6$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Adding instead of multiplying."
          ]
},
        },
        {
          id: "apsm-u2-argument-structure-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between evidence and reasoning in an argument. Why are both necessary?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Argument components",
                              "statement": "Evidence vs. reasoning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evidence: data, facts, examples supporting claims — '50% of students report anxiety'; reasoning: logical connection explaining why evidence supports claim — 'because social comparison on platforms increases anxiety.'",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Both necessary: evidence without reasoning is just facts (no argument); reasoning without evidence is unsupported assertion; together they form persuasive argument.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strong argument: 'Social media increases anxiety (claim) because platforms enable constant comparison (reasoning), as 50% of students report anxiety (evidence).'",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Evidence = support; Reasoning = connection; both essential",
          "commonErrors": [
                    "Conflating evidence with argument — need reasoning too."
          ]
},
        },
        {
          id: "apsm-u2-argument-structure-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze why addressing counterarguments strengthens rather than weakens an argument. When might it backfire?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Counterarguments",
                              "statement": "Engagement strengthens credibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Addressing counterarguments demonstrates intellectual honesty — acknowledging opposing views shows you've considered alternatives; strengthens credibility with informed audiences.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It also strengthens the argument itself — rebutting counterarguments reveals weaknesses in opposing positions and clarifies why your claim survives scrutiny.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Backfire risk: poorly handled counterarguments can confuse readers or expose genuine weaknesses; if rebuttal is weak or dismissive, it undermines rather than strengthens.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: addressing counterarguments is essential for credible argumentation — done well it strengthens; done poorly it reveals weaknesses — requires careful handling.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Counterarguments strengthen when handled well; risk when weak",
          "commonErrors": [
                    "Avoiding counterarguments — engagement is stronger than ignoring."
          ]
},
        },
      ],
    },
  ],
};
