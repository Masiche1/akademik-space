import type { Lesson } from "../../../types.ts";

export const lesson401: Lesson = {
  id: "edxbteceng-u4-lesson-4-1",
  code: "4-1",
  title: "Project Planning and Specification",
  goal: "I CAN plan an engineering project from concept to solution using specifications, feasibility studies and schedules.",
  standards: ["BTEC L3 National Engineering — Unit 4: Engineering Project"],
  vocabulary: [
    {
      term: "Project specification",
      definition:
        "The agreed statement of what the project will deliver — scope, performance, constraints and acceptance criteria.",
    },
    {
      term: "Feasibility study",
      definition:
        "An investigation into whether the project can be delivered technically, economically and on time.",
    },
    {
      term: "Gantt chart",
      definition:
        "A bar-chart schedule showing tasks against time, with dependencies and milestones.",
    },
    {
      term: "Critical path",
      definition:
        "The sequence of dependent tasks determining the minimum project duration; delay on it delays the whole project.",
    },
  ],
  concepts: [
    {
      id: "edxbteceng-u4-1-spec",
      title: "Concept to Specification",
      skill:
        "Develop a project specification and feasibility assessment for an engineering product.",
      lesson: {
        sections: [
          {
            heading: "The engineering project",
            body: "An engineering project transforms a need into a manufactured solution: concept → specification → feasibility → detailed design → prototype → testing → production/evaluation. The project brief defines the problem; the specification defines success; the project plan defines how.\n\nUnlike a design exercise, a real project has stakeholders (client, end users, regulators, finance), a budget, a deadline and accountability. Documentation — minutes, drawings, test records — is as much a deliverable as the product.",
          },
          {
            heading: "Feasibility",
            body: "Before committing resources, test feasibility: technical (can it be designed/made?), economic (does benefit exceed cost?), schedule (can it be done in time?), legal/regulatory (standards, safety, IP) and operational (can it be maintained?).\n\nFeasibility outputs include a cost estimate, risk register, resource plan and a go/no-go recommendation. Killing an infeasible project early is a success, not a failure — it saves money.",
          },
        ],
        keyFormulas: [
          {
            name: "ROI",
            statement:
              "$ROI = \\dfrac{\\text{benefit} - \\text{cost}}{\\text{cost}} \\times 100\\%$",
          },
          {
            name: "Payback",
            statement: "$t = \\text{investment} / \\text{annual benefit}$",
          },
        ],
        workedExample: {
          problem:
            "A client wants a $10,000 automated parts feeder saving $40,000/year labour. Quick feasibility?",
          solution:
            "Technical: standard technology, feasible. Economic: payback $10k/$40k = 0.25 yr — excellent ROI. Schedule: 3-month build plausible. Legal: CE marking needed. Operational: requires trained operator. Recommendation: proceed.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u4-1-spec-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The project specification should be agreed:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "with the client before detailed design",
              },
              {
                id: "b",
                text: "only by engineers",
              },
              {
                id: "c",
                text: "after production starts",
              },
              {
                id: "d",
                text: "never — briefs are enough",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specification is the contract baseline agreed",
                statement:
                  "Specification is the contract baseline agreed before design commitment",
              },
            ],
            steps: [
              {
                reasoning: "Early agreement prevents scope disputes",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Client-agreed before design",
            commonErrors: ["Treating spec as an engineer-only document"],
            examinerNote: "Spec = shared understanding.",
          },
        },
        {
          id: "edxbteceng-u4-1-spec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A project costs $50,000 and generates $20,000/year benefit. Calculate payback period and first-year ROI.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Payback = cost/annual benefit; ROI =",
                statement:
                  "Payback = cost/annual benefit; ROI = (benefit − cost)/cost",
              },
            ],
            steps: [
              {
                reasoning: "$50\\,000/20\\,000 = 2.5$ yr",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "First-year net $= 20\\,000 - 50\\,000 = -30\\,000$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ROI $= -30\\,000/50\\,000 = -60\\%$",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.5 yr payback; -60% first-year ROI",
            commonErrors: [
              "Ignoring first-year cost in ROI",
              "Confusing payback with ROI",
            ],
            examinerNote:
              "ROI over the project life differs — specify timeframe.",
          },
        },
        {
          id: "edxbteceng-u4-1-spec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "List the five feasibility dimensions and give one question asked in each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feasibility = technical, economic, schedule, leg",
                statement:
                  "Feasibility = technical, economic, schedule, legal, operational assessment",
              },
            ],
            steps: [
              {
                reasoning: "Three+ correct dimensions with questions",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "All five accurately described",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Five feasibility dimensions",
            commonErrors: ["Missing dimensions", "No questions asked"],
            examinerNote: "Comprehensive coverage expected.",
          },
        },
        {
          id: "edxbteceng-u4-1-spec-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school wants a solar-powered EV charging canopy. Budget $80,000, needed before September term.",
          parts: [
            {
              label: "a",
              prompt: "Write four specification items for this project.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Identify two feasibility risks specific to this project.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest how the schedule risk could be managed.",
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
                name: "Specification is measurable; feasibility covers ",
                statement:
                  "Specification is measurable; feasibility covers technical/economic/schedule/legal/operational risks",
              },
            ],
            steps: [
              {
                reasoning: "Performance/capacity spec",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Regulatory/connection spec",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Third measurable spec",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Realistic risk 1 e.g. planning delay",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Risk explained",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Realistic risk 2",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Schedule mitigation strategy",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Practical and specific",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 4 specs (b) 2 risks (c) mitigation",
            commonErrors: ["Generic risks", "No schedule strategy"],
            examinerNote: "Real-world constraints score best.",
          },
        },
      ],
    },
    {
      id: "edxbteceng-u4-1-planning",
      title: "Project Planning and Scheduling",
      skill:
        "Create schedules using Gantt charts, identify the critical path and manage dependencies.",
      lesson: {
        sections: [
          {
            heading: "Breaking down the project",
            body: "A Work Breakdown Structure (WBS) decomposes the project into manageable tasks: design, procurement, manufacture, assembly, test, deliver. Each task has duration, resources, dependencies (must finish before X starts) and an owner.\n\nGantt charts display tasks as bars on a timeline; milestones mark zero-duration checkpoints (design freeze, prototype complete, FAT/SAT). Dependencies are drawn as arrows — the network reveals the critical path.",
          },
          {
            heading: "Critical path and float",
            body: "The critical path is the longest dependency chain — zero float, any delay propagates to project end. Non-critical tasks have float (slack) they can absorb without delaying completion.\n\nResource levelling smooths peaks (e.g. two tasks needing the same engineer simultaneously); crashing adds resources to critical tasks to shorten duration at extra cost. Regular progress reviews compare actual vs planned and trigger replanning.",
          },
        ],
        keyFormulas: [
          {
            name: "Float",
            statement:
              "$\\text{float} = \\text{latest start} - \\text{earliest start}$",
          },
          {
            name: "Critical path",
            statement:
              "Longest path through dependency network = project duration",
          },
        ],
        workedExample: {
          problem: "Tasks: A(2d)→B(3d)→D(2d) and A→C(5d)→D. Which is critical?",
          solution:
            "Path A-B-D = 7 days; A-C-D = 9 days. Critical path = A-C-D (9 days). Task B has 2 days float.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u4-1-planning-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The critical path is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "the path with most tasks",
              },
              {
                id: "b",
                text: "the most expensive path",
              },
              {
                id: "c",
                text: "the longest dependency chain determining project duration",
              },
              {
                id: "d",
                text: "the path with most resources",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Critical path = zero-float longest path",
                statement: "Critical path = zero-float longest path",
              },
            ],
            steps: [
              {
                reasoning: "It sets minimum project duration",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Longest chain",
            commonErrors: ["Confusing critical with important"],
            examinerNote: "Critical ≠ most important.",
          },
        },
        {
          id: "edxbteceng-u4-1-planning-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Task X (5 days) and Task Y (3 days) can run in parallel after Task Z (4 days). Task W (2 days) needs both X and Y. Find the minimum project duration.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 11,
                tolerance: 0,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parallel tasks overlap; duration = Z",
                statement:
                  "Parallel tasks overlap; duration = Z + max(X,Y) + W",
              },
            ],
            steps: [
              {
                reasoning: "$Z = 4$; $\\max(5,3) = 5$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$4 + 5 + 2$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 11$ days",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "11 days",
            commonErrors: ["Adding X and Y serially", "Ignoring Z"],
            examinerNote: "Parallelism saves time.",
          },
        },
        {
          id: "edxbteceng-u4-1-planning-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a milestone and a task, with examples from an engineering project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Milestones are checkpoints; tasks are work",
                statement: "Milestones are checkpoints; tasks are work items",
              },
            ],
            steps: [
              {
                reasoning: "Correct task definition",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct milestone definition",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Valid examples given",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Clear distinction",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Work items vs checkpoints",
            commonErrors: ["Milestones given durations", "No examples"],
            examinerNote: "Examples demonstrate understanding.",
          },
        },
        {
          id: "edxbteceng-u4-1-planning-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A project plan shows: Design(10d) → Prototype(15d) → Testing(10d) → Production(20d). A supplier delays parts by 5 days during Testing.",
          parts: [
            {
              label: "a",
              prompt: "Identify the critical path and original duration.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the effect of the 5-day delay.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Suggest two recovery options.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain why 'adding more testers' might not help.",
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
                name: "Serial dependencies propagate delay; recovery =",
                statement:
                  "Serial dependencies propagate delay; recovery = crash, fast-track, re-sequence or reduce scope",
              },
            ],
            steps: [
              {
                reasoning: "Critical path = all four tasks serially",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Duration 55 days",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Delay propagates if zero float",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "New duration 60 days",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Valid recovery option 1",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Valid recovery option 2",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Identifies diminishing returns/parallelism limits",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Reasoned explanation",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) serial 55d (b) +5d → 60d (c) crash/fast-track (d) limited parallelism",
            commonErrors: [
              "Assuming float exists",
              "Naive 'add people' answer",
            ],
            examinerNote: "Project management judgement is assessed.",
          },
        },
      ],
    },
  ],
};
