import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "eiasbiz-u2-lesson-2-3",
  code: "2-3",
  title: "Teamwork and Leadership",
  goal: "I CAN explain leadership styles and team effectiveness.",
  standards: ["Edexcel IAS Business WBP01 Unit 2 — Human Resource Management"],
  vocabulary: [
    {
      term: "Leadership style",
      definition: "Approach managers use to direct staff.",
    },
    {
      term: "Autocratic",
      definition: "Leader makes decisions alone — little input.",
    },
    {
      term: "Democratic",
      definition: "Leader consults staff before deciding.",
    },
    {
      term: "Laissez-faire",
      definition: "Leader delegates with minimal direction.",
    },
    {
      term: "Team cohesion",
      definition: "Degree of unity and commitment within team.",
    },
    {
      term: "Synergy",
      definition: "Combined output greater than sum of parts.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u2-leadership",
      title: "Leadership Styles",
      skill: "Compare autocratic, democratic and laissez-faire styles.",
      lesson: {
        sections: [
          {
            heading: "Leadership styles",
            body: "**Autocratic**: leader decides alone, gives orders — fast decisions, but demotivates skilled staff. **Democratic**: consults team, considers views — slower but higher commitment. **Laissez-faire**: minimal interference — works with experienced self-motivated teams, fails without direction.\n\n**Situational leadership**: best style depends on situation — crisis needs autocratic; creative work needs democratic.",
          },
          {
            heading: "Choosing style",
            body: "**Autocratic**: emergencies, unskilled tasks, tight deadlines. **Democratic**: complex tasks, skilled teams, long-term. **Laissez-faire**: expert teams, high trust, creative work.\n\n**Evaluation**: no single best style — effectiveness depends on context, team maturity, task type.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Fire breaks out in factory. Best style?",
          solution: "Autocratic — fast decisive action needed.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u2-lead-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an autocratic leadership style?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Consults team" },
              { id: "b", text: "Rotates leadership" },
              { id: "c", text: "No leader" },
              { id: "d", text: "Leader decides alone, gives orders" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Autocratic",
                statement: "Leader decides alone.",
              },
            ],
            steps: [
              {
                reasoning: "Autocratic = top-down decisions.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Leader decides alone",
            commonErrors: ["Democratic confused."],
          },
        },
        {
          id: "eiasbiz-u2-lead-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of democratic leadership.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Democratic leadership",
                statement: "Consultation benefits.",
              },
            ],
            steps: [
              {
                reasoning: "Higher employee commitment — people feel valued.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Better decisions — uses team knowledge/ideas.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Develops staff skills — they learn to contribute.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Commitment, better decisions, development.",
            commonErrors: ["Autocratic.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u2-lead-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain when laissez-faire leadership might work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Laissez-faire",
                statement: "Expert teams, autonomy.",
              },
            ],
            steps: [
              {
                reasoning: "Highly skilled, self-motivated team.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Creative work needing freedom.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "High trust between leader and team.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fails with inexperienced staff needing direction.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Expert self-motivated teams — not beginners.",
            commonErrors: ["Always works.", "No conditions."],
          },
        },
        {
          id: "eiasbiz-u2-lead-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A new manager must choose a leadership style for a crisis and for routine work.",
          parts: [
            { label: "a", prompt: "Recommend style for crisis.", marks: 3 },
            {
              label: "b",
              prompt: "Recommend style for routine work.",
              marks: 3,
            },
            { label: "c", prompt: "Justify the difference.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Situational leadership",
                statement: "Match style to context.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Autocratic — fast decisions, clear direction.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Crisis needs decisive action.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Democratic — routine work benefits from input.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Staff have time to contribute.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Context determines best style — not one-size-fits-all.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer: "(a) autocratic (b) democratic (c) situational",
            commonErrors: ["One style.", "No justification."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u2-teams",
      title: "Teamwork and Group Dynamics",
      skill: "Explain team formation, cohesion and conflict.",
      lesson: {
        sections: [
          {
            heading: "Team development",
            body: "**Forming**: group meets, uncertain. **Storming**: conflict over roles/ideas. **Norming**: establish norms, cohesion grows. **Performing**: productive collaboration. **Adjourning**: task complete, disband.\n\n**Team roles** (Belbin): coordinator, implementer, completer-finisher, plant (ideas), monitor-evaluator, specialist, teamworker, resource investigator.",
          },
          {
            heading: "Team effectiveness",
            body: "**Cohesion**: shared goals, trust, communication — high cohesion improves performance. **Synergy**: team output > individual sum — 2+2=5 effect.\n\n**Conflict**: task conflict (ideas) can improve decisions; relationship conflict (personal) damages teams. **Management**: address causes early, focus on issues not personalities.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "New project team argues constantly. Stage?",
          solution: "Storming — normal team development phase.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u2-team-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is team cohesion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Team leader" },
              { id: "b", text: "Meeting frequency" },
              { id: "c", text: "Degree of unity and commitment within team" },
              { id: "d", text: "Team size" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cohesion",
                statement: "Team unity.",
              },
            ],
            steps: [
              {
                reasoning: "Cohesion = unity/commitment.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Team unity",
            commonErrors: ["Size confused."],
          },
        },
        {
          id: "eiasbiz-u2-team-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is synergy in teamwork?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synergy",
                statement: "1+1>2 effect.",
              },
            ],
            steps: [
              {
                reasoning: "Combined output exceeds sum of individual efforts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Different skills complement each other.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: team of 4 produces more than 4 individuals.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Team output > individual sum.",
            commonErrors: ["Same as sum.", "Vague."],
          },
        },
        {
          id: "eiasbiz-u2-team-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between task conflict and relationship conflict.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Conflict types",
                statement: "Ideas vs personalities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Task conflict: disagreements about work/ideas — can improve decisions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Relationship conflict: personal clashes, interpersonal tension.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Task conflict productive; relationship conflict damaging.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Management should channel task conflict, resolve relationship conflict.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Task=ideas (useful); relationship=personal (harmful).",
            commonErrors: ["Same thing.", "No distinction."],
          },
        },
        {
          id: "eiasbiz-u2-team-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A project team is underperforming despite skilled members.",
          parts: [
            { label: "a", prompt: "Identify two possible causes.", marks: 4 },
            { label: "b", prompt: "Suggest two remedies.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Team problems",
                statement: "Cohesion and roles.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Poor cohesion — members don't work together.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Unclear roles — duplication/gaps in work.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Team-building activities — improve cohesion.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Clarify roles/responsibilities — Belbin roles.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) cohesion+roles (b) team-building+clarity",
            commonErrors: ["Skill problem.", "No remedies."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u2-appraisal",
      title: "Performance Appraisal",
      skill: "Explain appraisal methods and their purposes.",
      lesson: {
        sections: [
          {
            heading: "Appraisal purpose",
            body: "**Review performance**: assess achievements vs objectives. **Identify development**: training needs, career progression. **Reward decisions**: inform pay rises, promotions. **Feedback**: improve future performance.\n\n**Appraisal methods**: self-appraisal, manager appraisal, 360-degree feedback (peers, subordinates, customers), peer review.",
          },
          {
            heading: "Effective appraisal",
            body: "**SMART objectives**: specific, measurable, achievable, relevant, time-bound. **Regular**: annual or more frequent — not just once. **Two-way**: employee feedback too — not just criticism. **Development-focused**: improvement plan, not just judgement.\n\n**Problems**: bias (recency, halo effect), subjectivity, time-consuming, demotivating if poorly handled.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Employee gets feedback from manager, peers and self. Method?",
          solution: "360-degree feedback.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u2-appr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is performance appraisal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing job ads" },
              { id: "b", text: "Hiring staff" },
              { id: "c", text: "Formal review of employee performance" },
              { id: "d", text: "Paying bonuses" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Appraisal",
                statement: "Performance review.",
              },
            ],
            steps: [
              {
                reasoning: "Appraisal = performance review.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Performance review",
            commonErrors: ["Pay confused."],
          },
        },
        {
          id: "eiasbiz-u2-appr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two purposes of performance appraisal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appraisal purposes",
                statement: "Review, develop, reward.",
              },
            ],
            steps: [
              {
                reasoning: "Review performance against objectives.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identify training/development needs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inform pay/promotion decisions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Review, develop, reward decisions.",
            commonErrors: ["Only one.", "Not purpose."],
          },
        },
        {
          id: "eiasbiz-u2-appr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what SMART objectives are.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SMART",
                statement:
                  "Specific, measurable, achievable, relevant, time-bound.",
              },
            ],
            steps: [
              {
                reasoning: "Specific — clear, unambiguous target.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Measurable — quantifiable progress.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Achievable + Relevant — realistic, aligned.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Time-bound — deadline set.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Specific, Measurable, Achievable, Relevant, Time-bound.",
            commonErrors: ["Vague.", "Partial."],
          },
        },
        {
          id: "eiasbiz-u2-appr-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A manager wants to improve an underperforming employee.",
          parts: [
            { label: "a", prompt: "Explain how appraisal helps.", marks: 3 },
            { label: "b", prompt: "Suggest an improvement plan.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Performance improvement",
                statement: "Appraisal→plan→support.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Identifies specific performance gaps.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Provides feedback and development direction.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Set SMART objectives for improvement.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Provide training/mentoring support.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Regular review meetings — monitor progress.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) identifies gaps (b) SMART+training+review",
            commonErrors: ["No appraisal.", "No plan."],
          },
        },
      ],
    },
  ],
};
