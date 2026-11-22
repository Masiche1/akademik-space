import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "eias-psych-u5-lesson-5-3",
  code: "5-3",
  title: "Research Evaluation",
  goal: "I CAN evaluate research methods, designs and studies.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 5 — Research Methods"],
  vocabulary: [
    {
      term: "Internal validity",
      definition: "Degree to which study measures what it claims.",
    },
    { term: "External validity", definition: "Generalizability of findings." },
    { term: "Reliability", definition: "Consistency of measurement." },
    { term: "Ecological validity", definition: "Real-world applicability." },
    {
      term: "Demand characteristics",
      definition: "Participants change behaviour due to awareness.",
    },
    {
      term: "Social desirability bias",
      definition: "Participants give socially acceptable answers.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u5-evaluation",
      title: "Evaluating Research",
      skill: "Apply evaluation criteria to research studies.",
      lesson: {
        sections: [
          {
            heading: "Validity types",
            body: "**Internal validity**: does study measure what it claims? Controls confounds. **External validity**: can findings generalise? Population, setting, time. **Ecological validity**: real-world applicability — lab vs natural.\n\n**Reliability**: consistent measurement — test-retest, inter-rater. **Demand characteristics**: participants act differently when aware of study — Hawthorne effect. **Social desirability**: give 'correct' answers, not true ones.",
          },
          {
            heading: "Evaluation framework",
            body: "**Strengths**: what makes research good — validity, reliability, ethical. **Limitations**: what weakens it — bias, confounds, generalisability. **Improvements**: how to address limitations — better controls, larger samples, multiple methods.\n\n**Example**: Milgram — high internal validity (controlled) but low external validity (lab setting, demand characteristics).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Study in artificial lab, participants know they're being observed. Limitation?",
          solution: "Low ecological validity + demand characteristics.",
        },
      },
      questions: [
        {
          id: "eias-psych-u5-ev-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is internal validity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Measures what it claims" },
              { id: "b", text: "Real-world fit" },
              { id: "c", text: "Generalizability" },
              { id: "d", text: "Consistency" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal validity",
                statement: "Measures claim.",
              },
            ],
            steps: [
              {
                reasoning: "Internal validity = measures what claims.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Measures claim",
            commonErrors: ["External confused."],
          },
        },
        {
          id: "eias-psych-u5-ev-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of validity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Validity types",
                statement: "Internal + external.",
              },
            ],
            steps: [
              {
                reasoning: "Internal — measures what it claims to measure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "External — generalizability to other settings/people.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ecological — real-world applicability.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Internal, external, ecological.",
            commonErrors: ["Only one.", "Reliability confused."],
          },
        },
        {
          id: "eias-psych-u5-ev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain demand characteristics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand characteristics",
                statement: "Awareness effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Participants aware of study aim → change behaviour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Hawthorne effect — act as 'good' participants.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: workers more productive when observed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduces validity — behaviour not natural.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Awareness → unnatural behaviour.",
            commonErrors: ["No awareness.", "No example."],
          },
        },
        {
          id: "eias-psych-u5-ev-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate Milgram's obedience study.",
          parts: [
            { label: "a", prompt: "Give two strengths.", marks: 4 },
            { label: "b", prompt: "Give two limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Milgram eval",
                statement: "Control vs realism.",
              },
            ],
            steps: [
              {
                reasoning: "(a) High internal validity — controlled variables.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Important findings — obedience research valuable.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Ethical issues — deception, distress.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Low external validity — lab setting, demand characteristics.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) control+value (b) ethics+external",
            commonErrors: ["Perfect study.", "Only strengths."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u5-applications",
      title: "Applying Research Methods",
      skill: "Design and critique psychological research in context.",
      lesson: {
        sections: [
          {
            heading: "Designing research",
            body: "**Aim**: clear research question — what you want to find out. **Hypothesis**: testable prediction — 'X will affect Y'. **Method choice**: experiment (cause-effect), observation (natural behaviour), survey (opinions). **Sampling**: representative — random/stratified best.\n\n**Ethical design**: consent, debrief, confidentiality — built in from start.",
          },
          {
            heading: "Critiquing research",
            body: "**Internal validity**: confounds controlled? **External validity**: generalisable? **Reliability**: consistent measurement? **Ethics**: guidelines followed? **Practical**: feasible, resources adequate?\n\n**Example critique**: 'Study of 20 students in one school' — small sample, limited generalisability, but controlled experiment.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Study uses 20 volunteers from psychology class. Sampling issue?",
          solution: "Opportunity/volunteer bias — not representative.",
        },
      },
      questions: [
        {
          id: "eias-psych-u5-app-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Data analysis" },
              { id: "b", text: "Testable prediction" },
              { id: "c", text: "Research aim" },
              { id: "d", text: "Research method" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothesis",
                statement: "Testable prediction.",
              },
            ],
            steps: [
              {
                reasoning: "Hypothesis = testable prediction.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Testable prediction",
            commonErrors: ["Aim confused."],
          },
        },
        {
          id: "eias-psych-u5-app-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two criteria for good research design.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Good design",
                statement: "Clear + controlled.",
              },
            ],
            steps: [
              {
                reasoning: "Clear aim/hypothesis — specific, testable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Controlled variables — minimise confounds.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Appropriate method — matches research question.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Clear aim, controlled, appropriate method.",
            commonErrors: ["Only one.", "Wrong criterion."],
          },
        },
        {
          id: "eias-psych-u5-app-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critique a study using only university students as participants.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sampling critique",
                statement: "Generalizability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Population bias — students may differ from general population.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Age/education confound — young, educated, motivated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Volunteer bias — students may self-select.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Low external validity — can't generalise to all ages.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Population+age+volunteer bias.",
            commonErrors: ["No problem.", "Only one issue."],
          },
        },
        {
          id: "eias-psych-u5-app-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a study to test whether exercise improves mood.",
          parts: [
            { label: "a", prompt: "Identify IV and DV.", marks: 3 },
            { label: "b", prompt: "Suggest design and sampling.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Study design",
                statement: "Variables + method.",
              },
            ],
            steps: [
              {
                reasoning: "(a) IV: exercise (present/absent or intensity).",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) DV: mood (self-report scale, heart rate).",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Confound: time of day, sleep, stress.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Repeated measures — same participants before/after exercise.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Random sampling — representative of population.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Control variables — same time, same exercise type.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) exercise→mood (b) repeated+random",
            commonErrors: ["Wrong IV.", "Biased sample."],
          },
        },
      ],
    },
  ],
};
