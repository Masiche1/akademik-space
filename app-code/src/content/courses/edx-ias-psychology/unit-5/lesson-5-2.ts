import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "eias-psych-u5-lesson-5-2",
  code: "5-2",
  title: "Non-Experimental Methods",
  goal: "I CAN describe observations, interviews, case studies and questionnaires.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 5 — Research Methods"],
  vocabulary: [
    {
      term: "Naturalistic observation",
      definition: "Observing behaviour in natural setting.",
    },
    {
      term: "Structured interview",
      definition: "Standardised questions — comparable responses.",
    },
    {
      term: "Unstructured interview",
      definition: "Flexible questions — rich detail.",
    },
    {
      term: "Case study",
      definition: "In-depth study of one individual/group.",
    },
    { term: "Questionnaire", definition: "Written questions — large samples." },
    {
      term: "Demand characteristics",
      definition: "Participants change behaviour because they know study aim.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u5-methods",
      title: "Non-Experimental Methods",
      skill: "Describe and evaluate non-experimental research methods.",
      lesson: {
        sections: [
          {
            heading: "Observation and interviews",
            body: "**Naturalistic observation**: real behaviour, high ecological validity — but observer bias, can't control variables. **Structured interview**: standardised — comparable but may miss nuance. **Unstructured interview**: flexible, rich detail — but hard to compare, interviewer bias.\n\n**Demand characteristics**: participants may act as they think expected — Hawthorne effect.",
          },
          {
            heading: "Case studies and questionnaires",
            body: "**Case study**: in-depth, rich detail, rare conditions — but not generalisable, researcher bias. **Questionnaire**: large samples, cheap — but low response rate, can't clarify, social desirability bias.\n\n**Evaluation**: methods complement experiments — different strengths/weaknesses; triangulation (multiple methods) improves validity.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Researcher observes children playing without them knowing. Method?",
          solution: "Naturalistic observation.",
        },
      },
      questions: [
        {
          id: "eias-psych-u5-non-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is naturalistic observation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Questionnaire" },
              { id: "b", text: "Observing behaviour in natural setting" },
              { id: "c", text: "Lab experiment" },
              { id: "d", text: "Interview" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Naturalistic observation",
                statement: "Natural setting.",
              },
            ],
            steps: [
              {
                reasoning: "Naturalistic = natural environment.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Natural setting",
            commonErrors: ["Lab confused."],
          },
        },
        {
          id: "eias-psych-u5-non-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two non-experimental methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-experimental",
                statement: "Observation, interview, case, questionnaire.",
              },
            ],
            steps: [
              {
                reasoning: "Observation — naturalistic or controlled.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Interview — structured or unstructured.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Case study — in-depth individual/group.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Observation, interview, case study, questionnaire.",
            commonErrors: ["Experiment.", "Only one."],
          },
        },
        {
          id: "eias-psych-u5-non-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one advantage and one limitation of case studies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Case study eval",
                statement: "Detail vs generalisability.",
              },
            ],
            steps: [
              {
                reasoning: "Advantage: rich detail — in-depth understanding.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Advantage: rare conditions — can't study otherwise.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Limitation: not generalisable — one case may be atypical.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Limitation: researcher bias — interpretation subjective.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Detail+rare vs not generalisable+biased.",
            commonErrors: ["Only advantage.", "Only limitation."],
          },
        },
        {
          id: "eias-psych-u5-non-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Researchers study bullying using questionnaires and observations.",
          parts: [
            {
              label: "a",
              prompt: "Identify one strength of each method.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain why using both is better.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Triangulation",
                statement: "Multiple methods.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Questionnaire: large sample, cheap, quantitative.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Observation: real behaviour, ecological validity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Triangulation — methods complement, cross-validate.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Reduces bias — questionnaire + observation balance.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) sample+real (b) triangulation",
            commonErrors: ["One method.", "No benefit."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u5-reports",
      title: "Writing Psychology Reports",
      skill: "Structure a psychological report and present findings.",
      lesson: {
        sections: [
          {
            heading: "Report structure",
            body: "**Title/Abstract**: brief summary. **Introduction**: background, aims, hypotheses. **Method**: design, participants, materials, procedure. **Results**: descriptive + inferential stats, tables/graphs. **Discussion**: interpret findings, evaluate, implications. **References**: cited sources.\n\n**IMRAD**: Introduction, Method, Results, And Discussion — standard structure.",
          },
          {
            heading: "Presenting data",
            body: "**Tables**: organised numerical data — clear labels. **Graphs**: bar charts (categorical), line graphs (continuous), scatter plots (correlation). **Statistical notation**: report p-values, effect sizes, confidence intervals.\n\n**Evaluation**: good reports allow replication — clear methods, honest reporting of limitations.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Report section describing how study was conducted. Which section?",
          solution: "Method.",
        },
      },
      questions: [
        {
          id: "eias-psych-u5-rep-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is IMRAD?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Investigation, Methods, Research, Analysis" },
              { id: "b", text: "Introduction, Memory, Reading, Analysis" },
              { id: "c", text: "Introduction, Method, Results, Discussion" },
              { id: "d", text: "Interview, Method, Results, Data" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IMRAD",
                statement: "Report structure.",
              },
            ],
            steps: [
              {
                reasoning: "IMRAD = standard report sections.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Intro, Method, Results, Discussion",
            commonErrors: ["Wrong acronym."],
          },
        },
        {
          id: "eias-psych-u5-rep-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two sections of a psychology report.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Report sections",
                statement: "IMRAD parts.",
              },
            ],
            steps: [
              {
                reasoning: "Method — design, participants, procedure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Results — statistical findings, tables/graphs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Discussion — interpret, evaluate, implications.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Method, Results, Discussion.",
            commonErrors: ["Only one.", "Wrong section."],
          },
        },
        {
          id: "eias-psych-u5-rep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Method section must be detailed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method detail",
                statement: "Replication.",
              },
            ],
            steps: [
              {
                reasoning: "Allows replication — others can repeat study.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Assesses validity — check if method appropriate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identifies flaws — bias, confounds, ethics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Transparency — honest reporting builds trust.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Replication, validity, flaws, transparency.",
            commonErrors: ["Not needed.", "No reason."],
          },
        },
        {
          id: "eias-psych-u5-rep-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A study finds significant result but only reports mean scores.",
          parts: [
            { label: "a", prompt: "What is missing?", marks: 4 },
            { label: "b", prompt: "Why does it matter?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Complete reporting",
                statement: "Full data + stats.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Missing: variability (SD/range), inferential stats, effect size.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Missing: graphs/tables visualising data.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Mean alone hides spread — outliers may distort.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Significance without effect size — practical importance unclear.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) variability+stats (b) spread+importance",
            commonErrors: ["Mean enough.", "No issue."],
          },
        },
      ],
    },
  ],
};
