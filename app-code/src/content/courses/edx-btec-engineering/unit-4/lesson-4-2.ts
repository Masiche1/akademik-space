import type { Lesson } from "../../../types.ts";

export const lesson402: Lesson = {
  id: "edxbteceng-u4-lesson-4-2",
  code: "4-2",
  title: "Risk, Quality and Communication",
  goal: "I CAN manage project risk, implement quality control and communicate engineering information effectively.",
  standards: ["BTEC L3 National Engineering — Unit 4: Engineering Project"],
  vocabulary: [
    {
      term: "Risk register",
      definition:
        "A living document listing identified risks with probability, impact, owner and mitigation strategy.",
    },
    {
      term: "Risk matrix",
      definition:
        "A grid plotting probability against impact to prioritise risks as low/medium/high/critical.",
    },
    {
      term: "Quality plan",
      definition:
        "A document defining how quality will be achieved and verified — inspection points, standards, responsibilities.",
    },
    {
      term: "Stakeholder",
      definition:
        "Anyone affected by or able to influence the project — client, team, suppliers, end users, regulators.",
    },
  ],
  concepts: [
    {
      id: "edxbteceng-u4-2-risk",
      title: "Risk Management",
      skill:
        "Identify, assess and mitigate project risks using a risk register.",
      lesson: {
        sections: [
          {
            heading: "Risk process",
            body: "Risk management follows a cycle: identify → analyse → evaluate → treat → monitor. Identification uses checklists, brainstorming, past-project reviews and expert judgement across technical, commercial, schedule, resource and external categories.\n\nAnalysis scores each risk on probability (1-5) and impact (1-5). The product gives a risk score; the risk matrix visualises priorities. High-probability/high-impact risks demand action; low/low risks may be accepted.",
          },
          {
            heading: "Risk treatment",
            body: "Four strategies: avoid (change the plan to eliminate the risk), transfer (insurance, contracts, outsourcing), mitigate (reduce probability or impact — the most common), accept (document and monitor, with contingency budget/time).\n\nContingency reserves buffer schedule and budget for known-unknowns. The register is reviewed at every project meeting — risks change as the project progresses; new risks emerge and old ones close.",
          },
        ],
        keyFormulas: [
          {
            name: "Risk score",
            statement:
              "$\\text{score} = \\text{probability} \\times \\text{impact}$",
          },
          {
            name: "Expected loss",
            statement:
              "$E = p \\times \\text{impact}$ for quantitative assessment",
          },
        ],
        workedExample: {
          problem:
            "Risk: supplier delay (probability 3/5, impact 4/5, score 12). Mitigation: dual-source critical parts + weekly expediting. Residual: probability 2, impact 4, score 8.",
          solution:
            "Treat by mitigation; residual score drops 12→8. Document owner and review date in register.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u4-2-risk-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Transferring risk typically means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "working harder",
              },
              {
                id: "b",
                text: "insurance or contractual shift to a third party",
              },
              {
                id: "c",
                text: "cancel the project",
              },
              {
                id: "d",
                text: "ignoring it",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transfer shifts consequence to another party",
                statement: "Transfer shifts consequence to another party",
              },
            ],
            steps: [
              {
                reasoning: "Insurance/contracts are transfer mechanisms",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Insurance/contract",
            commonErrors: ["Confusing transfer with mitigation"],
            examinerNote: "Four treatments must be distinguishable.",
          },
        },
        {
          id: "edxbteceng-u4-2-risk-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Risk A: probability 4, impact 2 (score 8). Risk B: probability 2, impact 4 (score 8). Which should be prioritised and why? Calculate expected loss if impact costs $50k and $100k respectively.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expected loss = probability × impact;",
                statement:
                  "Expected loss = probability × impact; impact severity often prioritised",
              },
            ],
            steps: [
              {
                reasoning:
                  "A: $0.8 \\times 50k = $40k; B: $0.4 \\times 100k = $40k — equal expected loss",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Scores equal at 8; B has higher impact severity",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prioritise B for catastrophic-impact avoidance",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "B — higher impact despite equal expected value",
            commonErrors: [
              "Only using score without context",
              "Calculation errors",
            ],
            examinerNote:
              "Expected value isn't the whole story — impact matters.",
          },
        },
        {
          id: "edxbteceng-u4-2-risk-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the four risk treatment strategies with one example each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Avoid, transfer, mitigate, accept",
                statement: "Avoid, transfer, mitigate, accept",
              },
            ],
            steps: [
              {
                reasoning: "All four strategies named correctly",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Valid example for each",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "4 strategies + examples",
            commonErrors: ["Missing strategies", "Examples not matching"],
            examinerNote: "Examples demonstrate application.",
          },
        },
        {
          id: "edxbteceng-u4-2-risk-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A robotics project has these risks: (R1) key engineer leaves — prob 2, impact 5; (R2) component EOL — prob 4, impact 3; (R3) customer spec change — prob 3, impact 3; (R4) software bug — prob 4, impact 2.",
          parts: [
            {
              label: "a",
              prompt: "Score each risk and rank them.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Propose mitigation for the top-ranked risk.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why the register must be reviewed regularly.",
              marks: 2,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Score = P×I; mitigation reduces P",
                statement:
                  "Score = P×I; mitigation reduces P or I; register is dynamic",
              },
            ],
            steps: [
              {
                reasoning: "Scores computed correctly",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Ranking correct (R2 top)",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "All four scored",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Targeted mitigation for R2",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Mechanism explained",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Third element or elaboration",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Risks are dynamic",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Clear explanation",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) R2 top (b) EOL mitigation (c) register is living",
            commonErrors: ["Scoring errors", "Static view of risk"],
            examinerNote: "Dynamic risk management is key.",
          },
        },
      ],
    },
    {
      id: "edxbteceng-u4-2-quality",
      title: "Quality Management and Communication",
      skill:
        "Implement quality plans and communicate technical information to stakeholders.",
      lesson: {
        sections: [
          {
            heading: "Quality in projects",
            body: "The quality plan translates requirements into verifiable checks: inspection points (incoming material, in-process, final), test methods, acceptance criteria and responsibilities. It references standards (ISO 9001, ISO 2768 general tolerances, ASME Y14.5 GD&T).\n\nQuality tools: check sheets, Pareto analysis (80/20 of defects), control charts (SPC), cause-and-effect diagrams. Non-conformance triggers a process: document, contain, investigate root cause, correct, verify, and update the plan if systemic.",
          },
          {
            heading: "Engineering communication",
            body: "Technical communication must be unambiguous: drawings carry the geometry, specifications carry requirements, reports carry analysis. Match the medium to the audience — engineers need drawings and data; clients need summaries and implications; regulators need compliance evidence.\n\nProgress reporting: status (RAG), milestones hit/missed, issues and decisions needed. Meeting minutes record decisions, actions and owners. Traceability links requirements → design → test → evidence — proving the product meets spec.",
          },
        ],
        keyFormulas: [
          {
            name: "Pareto",
            statement: "~80% of defects from ~20% of causes",
          },
          {
            name: "Traceability",
            statement: "Requirement → design feature → test → evidence chain",
          },
        ],
        workedExample: {
          problem:
            "Inspection finds 60% of defects from one supplier's batch. What does Pareto suggest?",
          solution:
            "Focus on that supplier: incoming inspection, root-cause with supplier, corrective action — rather than spreading effort evenly.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u4-2-quality-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The Pareto principle in quality suggests:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "quality is random",
              },
              {
                id: "b",
                text: "a minority of causes produce most defects",
              },
              {
                id: "c",
                text: "all defects are equal",
              },
              {
                id: "d",
                text: "more inspection always helps",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pareto: ~80/20 rule applied to defect",
                statement: "Pareto: ~80/20 rule applied to defect causes",
              },
            ],
            steps: [
              {
                reasoning: "Focus effort on vital few causes",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Minority causes dominate",
            commonErrors: ["Treating defects as uniform"],
            examinerNote: "Pareto guides prioritisation.",
          },
        },
        {
          id: "edxbteceng-u4-2-quality-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A batch of 500 parts has 25 defective. Calculate the defect rate and, if the target is ≤2%, state whether the batch passes.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 5,
                tolerance: 0.1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Defect rate = defects/total × 100%",
                statement: "Defect rate = defects/total × 100%",
              },
            ],
            steps: [
              {
                reasoning: "$25/500 = 0.05$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 5\\%$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fails — 5% > 2% target",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5% — fails",
            commonErrors: ["Reporting 0.05 as percent", "Wrong comparison"],
            examinerNote: "Always convert to % before comparing.",
          },
        },
        {
          id: "edxbteceng-u4-2-quality-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what 'traceability' means in engineering projects and why it matters for quality.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Traceability = documented chain from requirement",
                statement:
                  "Traceability = documented chain from requirement to verification",
              },
            ],
            steps: [
              {
                reasoning: "Correct definition",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compliance/proof benefit",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Failure analysis benefit",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Clear explanation",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Requirement-to-evidence chain",
            commonErrors: ["Vague definition", "No purpose"],
            examinerNote: "Traceability is a quality-system concept.",
          },
        },
        {
          id: "edxbteceng-u4-2-quality-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "During final inspection, 8 of 200 brackets fail a load test at 90% of design load.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the failure rate and state if it's acceptable for a safety-critical part.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Describe the non-conformance process steps.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest three possible root causes to investigate.",
              marks: 3,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-conformance: contain, investigate, correct, ",
                statement:
                  "Non-conformance: contain, investigate, correct, verify; safety-critical demands zero/near-zero failures",
              },
            ],
            steps: [
              {
                reasoning: "$8/200 = 4\\%$",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Unacceptable for safety-critical",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Contain/document step",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Investigate root cause",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct/verify/update",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Material cause",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Process cause",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Third valid cause",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer: "(a) 4% fail (b) NCR process (c) 3 root causes",
            commonErrors: [
              "Accepting 4% for safety part",
              "No systematic process",
            ],
            examinerNote: "Safety-critical changes the standard.",
          },
        },
      ],
    },
  ],
};
