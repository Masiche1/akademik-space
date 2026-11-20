import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cilgp-u3-lesson-3-2",
  code: "3-2",
  title: "Stage 8 Checkpoint — Evaluation and Collaboration",
  goal: "I CAN evaluate solutions and work collaboratively at Stage 8 checkpoint standard.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 Checkpoint Stage 8: evaluation, collaboration",
  ],
  stage: 8,
  vocabulary: [
    {
      term: "Evaluation",
      definition: "Judging how well something achieves its aims.",
    },
    { term: "Criterion", definition: "A standard used to judge quality." },
    {
      term: "Stakeholder",
      definition: "Anyone affected by a decision or issue.",
    },
    { term: "Trade-off", definition: "Giving up one benefit to gain another." },
    {
      term: "Collaboration",
      definition: "Working together towards a shared goal.",
    },
  ],
  concepts: [
    {
      id: "cilgp-u3-s8-evaluation",
      title: "Stage 8 solution evaluation checkpoint",
      skill: "Evaluate solutions against criteria and stakeholders.",
      lesson: {
        sections: [
          {
            heading: "Evaluation",
            body: "Strong evaluation judges solutions against clear criteria — cost, effectiveness, fairness, sustainability — and considers who benefits and who loses. Stage 8 answers weigh pros and cons rather than simply listing them.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation", statement: "criteria + evidence + judgement" },
        ],
        workedExample: {
          problem:
            "Evaluate 'banning cars from city centres' using two criteria.",
          solution:
            "Effectiveness: cuts emissions and congestion; Fairness: disadvantages disabled drivers and rural commuters — needs exemptions.",
        },
      },
      questions: [
        {
          id: "cilgp-u3-s8-e-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a criterion in evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of solution" },
              { id: "b", text: "A standard used to judge quality" },
              { id: "c", text: "A person affected by a decision" },
              { id: "d", text: "A piece of evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Criterion",
                statement: "Standard for judging.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criteria are the standards against which solutions are judged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A standard used to judge quality",
          },
        },
        {
          id: "cilgp-u3-s8-e-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what a trade-off is and give one example from a global issue solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trade-off",
                statement: "Benefit gained at the cost of another.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A trade-off means gaining one benefit while losing another.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: hydroelectric dams provide clean energy but displace communities and harm ecosystems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Giving up one benefit for another — e.g. dams give energy but displace people",
          },
        },
        {
          id: "cilgp-u3-s8-e-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A city proposes building a waste-to-energy plant. Identify two stakeholder groups and explain how the solution might affect each differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder",
                statement: "Anyone affected by a decision.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Residents nearby: gain cleaner waste disposal but may face emissions and traffic concerns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The city council: gains energy revenue and landfill savings but bears construction costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Different impacts show evaluation must weigh competing stakeholder needs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Residents: cleaner waste but possible emissions; council: revenue but costs — impacts differ by stakeholder",
          },
        },
        {
          id: "cilgp-u3-s8-e-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the solution 'provide free bicycles to all city residents' for reducing transport emissions. Use at least two criteria and reach a judgement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Criteria + evidence + judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Effectiveness: could reduce car journeys and emissions if uptake is high.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cost: expensive upfront; ongoing maintenance and secure parking needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Equity: helps low-income residents but excludes those unable to cycle (distance, disability).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: effective for some groups but incomplete alone — best combined with safe cycling infrastructure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Effective for reducing emissions but costly and excludes some groups; better combined with infrastructure",
          },
        },
      ],
    },
    {
      id: "cilgp-u3-s8-collab",
      title: "Stage 8 collaboration checkpoint",
      skill:
        "Describe effective collaboration and communication in group work.",
      lesson: {
        sections: [
          {
            heading: "Collaboration",
            body: "Effective groups divide work clearly, listen to all members, resolve disagreements respectfully and communicate progress. Stage 8 checkpoints test naming the skills that make group work succeed.",
          },
        ],
        keyFormulas: [
          {
            name: "Collaboration",
            statement: "shared goal + clear roles + open communication",
          },
        ],
        workedExample: {
          problem:
            "Name two skills that help a group produce a good research poster.",
          solution:
            "Delegating tasks by skill (researcher, designer, editor) and regular check-ins to merge work.",
        },
      },
      questions: [
        {
          id: "cilgp-u3-s8-c-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of assigning roles in group work?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make one person do all the work" },
              {
                id: "b",
                text: "To divide tasks clearly so work is shared and covered",
              },
              { id: "c", text: "To rank members by ability" },
              { id: "d", text: "To avoid meetings" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Collaboration",
                statement: "Shared work towards a common goal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Roles divide tasks so nothing is missed and work is shared.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "To divide tasks clearly so work is shared and covered",
          },
        },
        {
          id: "cilgp-u3-s8-c-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why active listening matters in a group researching a global issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Active listening",
                statement:
                  "Hearing, understanding and responding to others' ideas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It ensures quieter members' perspectives and evidence are heard.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It reduces conflict and improves the quality of the group's analysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Hears all perspectives and reduces conflict — better group analysis",
          },
        },
        {
          id: "cilgp-u3-s8-c-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two group members disagree about which solution to recommend. Describe two constructive ways the group could resolve this.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Conflict resolution",
                statement: "Evidence and criteria over preference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Test both options against agreed evaluation criteria with evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each member explains their reasoning; the group weighs trade-offs fairly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If still split, choose the better-supported option or a compromise.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Use criteria and evidence to compare; discuss trade-offs; compromise or choose best-supported",
          },
        },
        {
          id: "cilgp-u3-s8-c-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A group must produce a presentation on water scarcity in three weeks. Plan how the group could organise the work, naming specific roles and one communication method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project organisation",
                statement: "Roles + deadlines + communication.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Assign roles: researcher (sources), analyst (evidence), designer (slides), speaker (delivery).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Set mini-deadlines: research by week 1, draft slides by week 2, practice by week 3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Communication method: weekly check-in meetings or shared document updates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Clear plan covering roles, deadlines and communication.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Roles for research/analysis/design/delivery; staged deadlines; weekly check-ins or shared docs",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u3-stage8-eval-notes",
      title: "Stage 8 GP checkpoint — revision notes",
      summary:
        "Criteria-based evaluation, stakeholders, trade-offs, collaboration skills.",
      sections: [
        {
          heading: "Key skills",
          body: "Judge solutions with named criteria; identify who gains and loses; resolve disagreements with evidence; divide group work clearly.",
        },
        {
          heading: "Exam tips",
          body: "Always reach a judgement in evaluation answers — 'partly effective because...' scores higher than a balanced list.",
        },
      ],
    },
  ],
};
