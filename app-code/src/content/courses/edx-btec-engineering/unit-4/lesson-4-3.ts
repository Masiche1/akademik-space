import type { Lesson } from "../../../types.ts";

export const lesson403: Lesson = {
  id: "edxbteceng-u4-lesson-4-3",
  code: "4-3",
  title: "Evaluation and Project Handover",
  goal: "I CAN evaluate project outcomes against the specification, hand over deliverables and reflect on lessons learned.",
  standards: ["BTEC L3 National Engineering — Unit 4: Engineering Project"],
  vocabulary: [
    {
      term: "Acceptance criteria",
      definition:
        "The measurable conditions a deliverable must satisfy before the client formally accepts it.",
    },
    {
      term: "Handover",
      definition:
        "The formal transfer of the completed product, documentation, spares and training to the client/operator.",
    },
    {
      term: "Lessons learned",
      definition:
        "A structured review capturing what went well, what failed and what should change in future projects.",
    },
    {
      term: "Post-project evaluation",
      definition:
        "Assessment of whether the project met its objectives — performance, budget, schedule, quality and stakeholder satisfaction.",
    },
  ],
  concepts: [
    {
      id: "edxbteceng-u4-3-evaluation",
      title: "Testing and Acceptance",
      skill:
        "Verify deliverables against specification and manage client acceptance.",
      lesson: {
        sections: [
          {
            heading: "Verification and validation",
            body: "Verification confirms the product was built correctly ('are we building the product right?'); validation confirms it meets the need ('are we building the right product?'). Factory Acceptance Tests (FAT) happen at the supplier; Site Acceptance Tests (SAT) at the client's location under real conditions.\n\nTest documentation records: test ID, procedure, equipment used, results, pass/fail, sign-off. Acceptance requires all criteria met — partial acceptance with snags is common, with a punch list for rectification.",
          },
          {
            heading: "Handover package",
            body: "The handover includes: the product itself, as-built drawings, operating and maintenance manuals, spares list, test certificates, training for operators, warranty terms and support arrangements.\n\nFormal handover ends with a sign-off document — the client's acceptance transfers responsibility. Projects aren't truly complete until the client accepts; 'substantial completion' may precede final acceptance if minor snags remain.",
          },
        ],
        keyFormulas: [
          {
            name: "Acceptance",
            statement:
              "All acceptance criteria met + sign-off = formal completion",
          },
          {
            name: "Snag list",
            statement: "Documented minor defects to be rectified post-handover",
          },
        ],
        workedExample: {
          problem:
            "A conveyor system passes FAT at the factory but fails SAT because the client's floor has different tolerances. What does this reveal?",
          solution:
            "FAT didn't replicate site conditions — validation gap. Fix: include site-conditions in FAT or add an SAT contingency; update specification to include installation-environment requirements.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u4-3-evaluation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Site Acceptance Testing (SAT) differs from FAT because it:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "tests only software",
              },
              {
                id: "b",
                text: "is optional",
              },
              {
                id: "c",
                text: "is done at the client's location under real conditions",
              },
              {
                id: "d",
                text: "uses cheaper equipment",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SAT validates in the actual operating",
                statement: "SAT validates in the actual operating environment",
              },
            ],
            steps: [
              {
                reasoning: "Site conditions may differ from factory",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "At client site, real conditions",
            commonErrors: ["Confusing FAT and SAT"],
            examinerNote: "Environment can change results.",
          },
        },
        {
          id: "edxbteceng-u4-3-evaluation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A project budget was $100k, spent $115k. If 3 of 10 acceptance criteria remain unmet, calculate the budget variance % and comment on acceptance readiness.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Variance = (actual − budget)/budget; acceptance",
                statement:
                  "Variance = (actual − budget)/budget; acceptance needs all criteria",
              },
            ],
            steps: [
              {
                reasoning: "$(115 - 100)/100 = 0.15$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 15\\%$ overrun",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Not ready — 30% criteria outstanding",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "+15%; not ready for acceptance",
            commonErrors: [
              "Wrong variance direction",
              "Accepting with unmet criteria",
            ],
            examinerNote: "Both cost and criteria matter.",
          },
        },
        {
          id: "edxbteceng-u4-3-evaluation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "List four items that must be in a handover package and explain why documentation matters.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Handover = product + documentation +",
                statement:
                  "Handover = product + documentation + training + support",
              },
            ],
            steps: [
              {
                reasoning: "Four+ items listed",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Purpose of documentation explained",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete package + documentation purpose",
            commonErrors: ["Only product mentioned", "No rationale"],
            examinerNote: "Documentation is a deliverable.",
          },
        },
        {
          id: "edxbteceng-u4-3-evaluation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A $200k automation project finishes on time but 10% over budget and two acceptance criteria unmet (throughput 8% below spec).",
          parts: [
            {
              label: "a",
              prompt:
                "Evaluate the project's success against its three objectives (cost, time, performance).",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Propose three lessons-learned items.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Recommend whether to accept the project and under what conditions.",
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
                name: "Project success = multi-objective evaluation; le",
                statement:
                  "Project success = multi-objective evaluation; lessons learned feed future projects",
              },
            ],
            steps: [
              {
                reasoning: "Cost objective assessed",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Time objective assessed",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Performance objective assessed",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Lesson 1 specific",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Lesson 2 specific",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Lesson 3 specific",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Acceptance recommendation with conditions",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Justified",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) mixed results (b) 3 specific lessons (c) conditional acceptance",
            commonErrors: ["Binary success/fail judgement", "Generic lessons"],
            examinerNote: "Nuanced evaluation is expected.",
          },
        },
      ],
    },
    {
      id: "edxbteceng-u4-3-reflection",
      title: "Lessons Learned and Continuous Improvement",
      skill:
        "Conduct post-project reviews and apply improvements to future work.",
      lesson: {
        sections: [
          {
            heading: "The post-project review",
            body: "A structured review compares planned vs actual: schedule, budget, quality, scope changes, risks realised, stakeholder satisfaction. It examines what went well (to repeat), what went wrong (to avoid) and what's surprising (to learn).\n\nReviews should happen while memories are fresh — within weeks of completion. Participants include the project team, client and key suppliers. Output: a lessons-learned report feeding into templates, checklists and training.",
          },
          {
            heading: "Continuous improvement",
            body: "Engineering organisations improve through structured methods: PDCA (Plan-Do-Check-Act), Kaizen (incremental improvement), Six Sigma (data-driven defect reduction). Each project contributes data points to organisational learning.\n\nKey metrics tracked across projects: on-time delivery %, budget variance, defect rate, customer satisfaction, rework %. Trends reveal systemic issues that individual projects cannot. The best organisations institutionalise lessons — checklists, standards and training embody them.",
          },
        ],
        keyFormulas: [
          {
            name: "PDCA",
            statement:
              "Plan → Do → Check → Act cycle for continuous improvement",
          },
          {
            name: "Schedule variance",
            statement: "$SV = \\text{earned value} - \\text{planned value}$",
          },
        ],
        workedExample: {
          problem:
            "Project metrics: planned 12 months, actual 14; budget $100k, spent $110k; defects 3%. What does the review reveal?",
          solution:
            "Schedule slip 17%, cost overrun 10%, defect rate acceptable. Investigate: what caused delays? Was the $10k overrun within contingency? Feed findings into next project's risk register.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u4-3-reflection-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The PDCA cycle stands for:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Plan, Design, Create, Analyse",
              },
              {
                id: "b",
                text: "Prepare, Deliver, Control, Adjust",
              },
              {
                id: "c",
                text: "Project, Design, Check, Accept",
              },
              {
                id: "d",
                text: "Plan, Do, Check, Act",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PDCA = iterative improvement cycle",
                statement: "PDCA = iterative improvement cycle",
              },
            ],
            steps: [
              {
                reasoning: "Standard quality-management cycle",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Plan-Do-Check-Act",
            commonErrors: ["Wrong expansion"],
            examinerNote: "Deming cycle.",
          },
        },
        {
          id: "edxbteceng-u4-3-reflection-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A project planned 6 months, finished in 7.5 months. Calculate schedule variance in % and state the typical threshold for 'on-time' (±5%).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 25,
                tolerance: 0.1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Variance = (actual − planned)/planned",
                statement: "Variance = (actual − planned)/planned",
              },
            ],
            steps: [
              {
                reasoning: "$(7.5 - 6)/6$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.25$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$25\\%$ late — well beyond ±5%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25% over — not on-time",
            commonErrors: ["Wrong base (actual vs planned)", "Unit errors"],
            examinerNote: "Variance relative to plan.",
          },
        },
        {
          id: "edxbteceng-u4-3-reflection-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why lessons-learned reviews should happen soon after project completion rather than a year later.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Timely reviews capture accurate, detailed knowle",
                statement:
                  "Timely reviews capture accurate, detailed knowledge",
              },
            ],
            steps: [
              {
                reasoning: "Memory decay/team dispersal",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Accuracy of detail",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Impact on usefulness",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Clear explanation",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Freshness = accuracy",
            commonErrors: ["Vague 'it's better'", "No mechanism"],
            examinerNote: "Timing affects quality.",
          },
        },
        {
          id: "edxbteceng-u4-3-reflection-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three consecutive projects all overran budget by 10–15%. The review process exists but overrun persists.",
          parts: [
            {
              label: "a",
              prompt: "Diagnose why the review process might be failing.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Propose three systemic improvements.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain how you would measure whether improvements work.",
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
                name: "Lessons learned must feed back into",
                statement:
                  "Lessons learned must feed back into processes; measurement closes the loop",
              },
            ],
            steps: [
              {
                reasoning: "Lessons not institutionalised",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "No accountability/action tracking",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Estimation process unchanged",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Improvement 1 e.g. template update",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Improvement 2",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Improvement 3",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Metric proposed",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Measurement method clear",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) feedback loop broken (b) 3 systemic fixes (c) variance tracking",
            commonErrors: ["Blaming individuals", "No measurement plan"],
            examinerNote: "Systemic thinking is the target.",
          },
        },
      ],
    },
  ],
};
