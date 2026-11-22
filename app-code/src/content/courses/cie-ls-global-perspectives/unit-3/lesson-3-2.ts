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
              { id: "a", text: "A standard used to judge quality" },
              { id: "b", text: "A piece of evidence" },
              { id: "c", text: "A person affected by a decision" },
              { id: "d", text: "A type of solution" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cilgp-u3-s8-e-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A voting system" },
              { id: "b", text: "Writing a summary" },
              {
                id: "c",
                text: "Judging how well something achieves its aims",
              },
              { id: "d", text: "A type of source" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "Judging quality or effectiveness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaluation judges how well something works against its aims.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Judging how well something achieves its aims",
          },
        },
        {
          id: "cilgp-u3-s8-e-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solution scores 3 out of 5 marks on the criterion 'cost-effectiveness'. How many marks did it lose?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "marks" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Marks lost",
                statement: "Maximum minus score.",
              },
            ],
            steps: [
              {
                reasoning: "5 - 3 = 2 marks lost.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2 marks",
          },
        },
        {
          id: "cilgp-u3-s8-e-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two criteria you could use to judge solutions to a global issue such as plastic pollution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Criteria",
                statement: "Standards for judging.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two valid criteria, e.g. cost, effectiveness, equity, sustainability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second valid criterion named.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. cost and equity",
          },
        },
        {
          id: "cilgp-u3-s8-e-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which criterion best captures whether benefits and harms of a solution are shared fairly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Popularity" },
              { id: "b", text: "Speed" },
              { id: "c", text: "Cost" },
              { id: "d", text: "Equity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equity",
                statement: "Fair distribution of impacts.",
              },
            ],
            steps: [
              {
                reasoning: "Equity asks who benefits and who loses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Equity",
          },
        },
        {
          id: "cilgp-u3-s8-e-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A waste-reduction solution costs £200 to set up and is expected to save £350 in disposal fees. What is the net benefit in pounds?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 150, unit: "£" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Net benefit",
                statement: "Benefit minus cost.",
              },
            ],
            steps: [
              {
                reasoning: "350 - 200 = 150.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: £150 net benefit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "£150",
          },
        },
        {
          id: "cilgp-u3-s8-e-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one unintended consequence of providing free school meals to all students, and explain why it matters for evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unintended consequences",
                statement: "Solutions create unplanned effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Valid consequence, e.g. higher costs for schools, food waste if portions too large, or reduced incentive for parents to budget.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explains how the effect could harm the solution's aims.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Connects to evaluation: solutions must be judged on all effects, not just intended ones.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. increased cost/waste — matters because evaluation must cover all effects",
          },
        },
        {
          id: "cilgp-u3-s8-e-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Who is a stakeholder in a decision or issue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the person making the decision" },
              {
                id: "b",
                text: "Anyone affected by the decision or issue",
              },
              { id: "c", text: "Only experts" },
              { id: "d", text: "Only government officials" },
            ],
            correctChoiceId: "b",
          },
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
                  "Stakeholders include everyone affected, directly or indirectly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Anyone affected by the decision or issue",
          },
        },
        {
          id: "cilgp-u3-s8-e-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A solution is judged on 4 criteria, each worth 2 marks. What is the maximum total score available?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8, unit: "marks" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Total marks",
                statement: "Criteria x marks each.",
              },
            ],
            steps: [
              {
                reasoning: "4 x 2 = 8 marks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 8 marks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8 marks",
          },
        },
        {
          id: "cilgp-u3-s8-e-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate 'banning all homework' using two criteria and reach a judgement.",
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
                  "Criterion 1, e.g. wellbeing: removes stress and frees family time — positive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Criterion 2, e.g. attainment: may reduce practice and independent learning — negative.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: partly effective — better to reduce or redesign homework than ban it entirely.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mixed effects; better to reduce/redesign than ban",
          },
        },
        {
          id: "cilgp-u3-s8-e-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is a trade-off?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Giving up one benefit to gain another",
              },
              { id: "b", text: "A free gift" },
              { id: "c", text: "A type of evidence" },
              { id: "d", text: "A voting result" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trade-off",
                statement: "Benefit gained at cost of another.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Trade-offs mean every gain involves losing something else.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Giving up one benefit to gain another",
          },
        },
        {
          id: "cilgp-u3-s8-e-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Option A scores 8 out of 10 for effectiveness and Option B scores 6 out of 10, with equal costs. By how many points does Option A outperform Option B?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Score difference",
                statement: "Higher score minus lower score.",
              },
            ],
            steps: [
              {
                reasoning: "8 - 6 = 2 points.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 2 points.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2 points",
          },
        },
        {
          id: "cilgp-u3-s8-e-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate 'compulsory community volunteering for all students': (a) define a criterion you will use, (b) name one stakeholder who gains and one who loses, (c) identify one trade-off, (d) reach an overall judgement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Criteria + stakeholders + judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Valid criterion, e.g. effectiveness, equity or cost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Valid gain/loss pair, e.g. gains: community organisations; loses: students with heavy workloads.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid trade-off, e.g. civic benefit vs lost study/extracurricular time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Balanced judgement, e.g. valuable if voluntary-with-incentives rather than fully compulsory.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Criterion, stakeholders, trade-off and balanced judgement",
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
              { id: "b", text: "To avoid meetings" },
              {
                id: "c",
                text: "To divide tasks clearly so work is shared and covered",
              },
              { id: "d", text: "To rank members by ability" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cilgp-u3-s8-c-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a shared goal in group work?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To give the group a common direction everyone works towards",
              },
              { id: "b", text: "To rank members by ability" },
              { id: "c", text: "To fill meeting time" },
              { id: "d", text: "To avoid making decisions" },
            ],
            correctChoiceId: "a",
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
                  "A shared goal keeps everyone's effort pointed the same way.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "To give the group a common direction everyone works towards",
          },
        },
        {
          id: "cilgp-u3-s8-c-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A group of 5 members must complete 15 research tasks. If shared equally, how many tasks does each member complete?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "tasks" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equal sharing",
                statement: "Total / members.",
              },
            ],
            steps: [
              {
                reasoning: "15 / 5 = 3 tasks each.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cilgp-u3-s8-c-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two benefits of assigning clear roles in group work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Collaboration",
                statement: "Roles divide work clearly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. prevents duplicated or missed tasks — everyone knows their job.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. members can use their strengths; accountability is clearer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Clear coverage of tasks + use of strengths",
          },
        },
        {
          id: "cilgp-u3-s8-c-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is active listening?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Fully attending to and understanding others' contributions",
              },
              { id: "b", text: "Talking louder than others" },
              { id: "c", text: "Taking notes without responding" },
              { id: "d", text: "Agreeing with everything said" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active listening",
                statement: "Hearing, understanding, responding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Active listening means engaged attention, not just hearing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fully attending to and understanding others' contributions",
          },
        },
        {
          id: "cilgp-u3-s8-c-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A group meeting lasts 45 minutes. The team spends 20 minutes discussing findings and the rest on planning next steps. How many minutes are spent planning?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "minutes" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Remaining time",
                statement: "Total minus used.",
              },
            ],
            steps: [
              {
                reasoning: "45 - 20 = 25 minutes planning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 25 minutes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25 minutes",
          },
        },
        {
          id: "cilgp-u3-s8-c-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "One member of your group rarely speaks in meetings but does good work. Describe two ways the group could help them contribute more.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inclusive collaboration",
                statement: "Every voice matters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. invite them directly to share their section; give them a clear, small role.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. use written contributions or paired discussion so they can prepare first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Respectful approach — contribution valued, not forced publicly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Direct invitation + lower-pressure formats",
          },
        },
        {
          id: "cilgp-u3-s8-c-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the most constructive way for a group to resolve a disagreement about which solution to recommend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignore the disagreement" },
              { id: "b", text: "The loudest member decides" },
              { id: "c", text: "Always compromise halfway" },
              {
                id: "d",
                text: "Compare both options against agreed criteria using evidence",
              },
            ],
            correctChoiceId: "d",
          },
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
                  "Criteria-based comparison turns disagreement into a testable question.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Compare options against agreed criteria with evidence",
          },
        },
        {
          id: "cilgp-u3-s8-c-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A 6-week group project holds 3 equally spaced check-in meetings, including one in week 1 and one in week 6. What is the gap between consecutive meetings in weeks?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.5, unit: "weeks" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Spacing",
                statement: "Total span / intervals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Span week 1 to week 6 = 5 weeks; 3 meetings create 2 intervals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "5 / 2 = 2.5 weeks between meetings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.5 weeks",
          },
        },
        {
          id: "cilgp-u3-s8-c-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe how a shared online document can improve communication in a group research project.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Group communication",
                statement: "Shared, visible progress.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Everyone can see and edit the same work — avoids version confusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Comments/updates show who is doing what and flag problems early.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Creates a record of decisions and progress for absent members.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shared visibility, early problem-flagging, decision record",
          },
        },
        {
          id: "cilgp-u3-s8-c-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best describes effective communication within a working group?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Letting one person speak for everyone" },
              { id: "b", text: "Only talking at the final meeting" },
              { id: "c", text: "Avoiding difficult topics" },
              {
                id: "d",
                text: "Regular, clear updates on progress and problems",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Group communication",
                statement: "Regular, clear updates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Frequent clear communication keeps the group aligned and problems visible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Regular, clear updates on progress and problems",
          },
        },
        {
          id: "cilgp-u3-s8-c-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A poster project has 4 sections, each needing 2 days to complete, plus 3 days for final practice and printing. How many days does the whole project take?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 11, unit: "days" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Total time",
                statement: "Section time + finishing time.",
              },
            ],
            steps: [
              {
                reasoning: "Sections: 4 x 2 = 8 days.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "8 + 3 = 11 days total.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 11 days.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "11 days",
          },
        },
        {
          id: "cilgp-u3-s8-c-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan group work on 'ocean plastic pollution': (a) two roles to assign, (b) one method to ensure all members contribute, (c) how the group will resolve a disagreement, (d) one communication method for updates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project organisation",
                statement: "Roles, inclusion, resolution, communication.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Two valid roles, e.g. researcher and designer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Valid inclusion method, e.g. rotating presentation slots or written input.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Evidence-based resolution using agreed criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Valid communication method, e.g. weekly check-ins or shared document.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Roles, inclusion method, resolution and communication plan",
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
