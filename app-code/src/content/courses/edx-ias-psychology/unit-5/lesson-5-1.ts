import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "eias-psych-u5-lesson-5-1",
  code: "5-1",
  title: "Research Design and Variables",
  goal: "I CAN identify research designs, variables and sampling methods.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 5 — Research Methods"],
  vocabulary: [
    {
      term: "Independent variable",
      definition: "Variable manipulated by researcher.",
    },
    { term: "Dependent variable", definition: "Variable measured — outcome." },
    {
      term: "Confounding variable",
      definition: "Uncontrolled variable affecting results.",
    },
    {
      term: "Random sampling",
      definition: "Everyone has equal chance of selection.",
    },
    { term: "Opportunity sampling", definition: "Using whoever is available." },
    {
      term: "Operationalisation",
      definition: "Defining variables in measurable terms.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u5-design",
      title: "Experimental Design and Variables",
      skill: "Identify designs and variables in research.",
      lesson: {
        sections: [
          {
            heading: "Experimental designs",
            body: "**Independent groups**: different participants per condition — no order effects, but individual differences. **Repeated measures**: same participants all conditions — controls individual differences, but practice/fatigue effects. **Matched pairs**: participants paired on key variables — best of both, but hard to match.\n\n**Variables**: IV manipulated, DV measured, confounding variables uncontrolled. **Operationalisation**: define variables precisely — 'anxiety' → heart rate + self-report scale.",
          },
          {
            heading: "Sampling methods",
            body: "**Random**: equal chance — representative but hard to achieve. **Opportunity**: whoever available — easy but biased. **Stratified**: proportional subgroups — representative but complex. **Volunteer**: self-selected — motivated but biased.\n\n**Evaluation**: sampling affects generalisability — random/stratified best; opportunity/volunteer biased.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Same participants test both conditions. Design?",
          solution: "Repeated measures.",
        },
      },
      questions: [
        {
          id: "eias-psych-u5-d-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the independent variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Variable manipulated by researcher" },
              { id: "b", text: "Participant variable" },
              { id: "c", text: "Uncontrolled variable" },
              { id: "d", text: "Measured outcome" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "IV", statement: "Manipulated." },
            ],
            steps: [
              {
                reasoning: "IV = manipulated by researcher.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Manipulated",
            commonErrors: ["DV confused."],
          },
        },
        {
          id: "eias-psych-u5-d-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two experimental designs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Designs",
                statement: "Independent, repeated, matched.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Independent groups — different participants per condition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Repeated measures — same participants all conditions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Matched pairs — paired on key variables.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Independent, repeated, matched.",
            commonErrors: ["Only one.", "Wrong design."],
          },
        },
        {
          id: "eias-psych-u5-d-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one advantage of repeated measures design.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repeated measures",
                statement: "Controls variables.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Controls individual differences — same participants.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Requires fewer participants — economical.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "But order effects — practice/fatigue confound.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Counterbalanced — half do conditions in different order.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Controls individual differences.",
            commonErrors: ["Independent groups.", "No limitation."],
          },
        },
        {
          id: "eias-psych-u5-d-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A researcher studies effect of caffeine on memory.",
          parts: [
            { label: "a", prompt: "Identify IV and DV.", marks: 3 },
            { label: "b", prompt: "Suggest one sampling method.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research design",
                statement: "Variables + sampling.",
              },
            ],
            steps: [
              {
                reasoning: "(a) IV: caffeine (present/absent).",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) DV: memory performance (test score).",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Confounding: sleep, stress, time of day.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Random sampling — represent population.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Stratified — proportionate age/gender groups.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Avoid opportunity — biased toward available.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) caffeine→memory (b) random/stratified",
            commonErrors: ["Wrong IV.", "Biased sample."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u5-data",
      title: "Data Collection and Analysis",
      skill: "Identify data types and basic statistical analysis.",
      lesson: {
        sections: [
          {
            heading: "Data types",
            body: "**Primary**: collected first-hand — experiments, surveys. **Secondary**: existing data — literature, records. **Quantitative**: numerical — test scores, reaction times. **Qualitative**: descriptive — interviews, observations.\n\n**Measures of central tendency**: mean (average), median (middle), mode (most frequent). **Dispersion**: range, standard deviation — spread of data.",
          },
          {
            heading: "Data analysis",
            body: "**Descriptive statistics**: summarise data — mean, median, graphs. **Inferential statistics**: test significance — is result real or chance? **Correlation**: relationship between variables — positive, negative, none.\n\n**Evaluation**: quantitative data easier to analyse; qualitative richer but harder to quantify.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Test scores: 45, 52, 48, 51, 49. Mean?",
          solution: "49.",
        },
      },
      questions: [
        {
          id: "eias-psych-u5-data-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is quantitative data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Observation data" },
              { id: "b", text: "Interview data" },
              { id: "c", text: "Descriptive data" },
              { id: "d", text: "Numerical data" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quantitative",
                statement: "Numerical.",
              },
            ],
            steps: [
              {
                reasoning: "Quantitative = numerical data.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Numerical",
            commonErrors: ["Qualitative confused."],
          },
        },
        {
          id: "eias-psych-u5-data-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two measures of central tendency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Central tendency",
                statement: "Mean, median, mode.",
              },
            ],
            steps: [
              {
                reasoning: "Mean — average (sum ÷ count).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Median — middle value when ordered.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Mode — most frequent value.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Mean, median, mode.",
            commonErrors: ["Only one.", "Dispersion."],
          },
        },
        {
          id: "eias-psych-u5-data-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between descriptive and inferential statistics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Statistics types",
                statement: "Summarise vs test.",
              },
            ],
            steps: [
              {
                reasoning: "Descriptive — summarise data (mean, graphs).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Inferential — test if results significant or chance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Descriptive shows what data looks like; inferential tests hypotheses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both needed — describe then infer.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Descriptive=summarise, inferential=test.",
            commonErrors: ["Same.", "Only one."],
          },
        },
        {
          id: "eias-psych-u5-data-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A study finds correlation r = +0.75 between study time and grades.",
          parts: [
            { label: "a", prompt: "Interpret the correlation.", marks: 3 },
            { label: "b", prompt: "Explain a limitation.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Correlation",
                statement: "Relationship + causation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Strong positive — more study → higher grades.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) r=+0.75 — strong positive correlation.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Correlation ≠ causation — third variable possible.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Direction unclear — grades may cause study, not vice versa.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Need experiment to establish causation.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) strong positive (b) no causation",
            commonErrors: ["Causation.", "Negative."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u5-ethics",
      title: "Ethics in Psychological Research",
      skill: "Apply ethical guidelines to research scenarios.",
      lesson: {
        sections: [
          {
            heading: "British Psychological Society guidelines",
            body: "**Informed consent**: participants must know study nature, right to withdraw. **Deception**: only if necessary — must debrief afterwards. **Protection from harm**: no physical/psychological damage. **Confidentiality**: protect personal data. **Right to withdraw**: can leave anytime. **Debriefing**: explain true aims after study.\n\n**Milgram example**: deception (fake shocks) + distress — ethical concerns led to guideline revisions.",
          },
          {
            heading: "Resolving ethical issues",
            body: "**Cost-benefit analysis**: weigh research value vs participant harm. **Presumptive consent**: implied consent for low-risk studies. **Debriefing**: explain deception, allow withdrawal of data.\n\n**Evaluation**: guidelines protect participants but may limit research — balance needed.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Researchers don't tell participants about deception until after study. Guideline?",
          solution: "Debriefing.",
        },
      },
      questions: [
        {
          id: "eias-psych-u5-eth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is informed consent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forced participation" },
              { id: "b", text: "Secret study" },
              { id: "c", text: "Paying participants" },
              {
                id: "d",
                text: "Participants know study nature + right to withdraw",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informed consent",
                statement: "Know + withdraw.",
              },
            ],
            steps: [
              {
                reasoning: "Informed consent = know + right to withdraw.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Know+withdraw",
            commonErrors: ["Payment confused."],
          },
        },
        {
          id: "eias-psych-u5-eth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ethical guidelines.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethics",
                statement: "Consent, harm, confidentiality.",
              },
            ],
            steps: [
              {
                reasoning: "Informed consent — participants know study.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Protection from harm — no physical/psychological damage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Confidentiality — protect personal data.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Consent, harm, confidentiality, debrief.",
            commonErrors: ["Only one.", "Wrong guideline."],
          },
        },
        {
          id: "eias-psych-u5-eth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Milgram's study was ethically controversial.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Milgram ethics",
                statement: "Deception + distress.",
              },
            ],
            steps: [
              {
                reasoning: "Deception — participants thought shocks real.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Distress — participants showed extreme stress.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Right to withdraw — unclear if truly free to leave.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "But valuable findings — obedience research important.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Deception+distress but valuable.",
            commonErrors: ["Ethical.", "No controversy."],
          },
        },
        {
          id: "eias-psych-u5-eth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Researchers want to study stress in emergency workers.",
          parts: [
            { label: "a", prompt: "Identify two ethical issues.", marks: 4 },
            { label: "b", prompt: "Suggest two solutions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethics application",
                statement: "Issues + solutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Vulnerability — stressed workers may be harmed.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Confidentiality — sensitive work data must be protected.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Informed consent + right to withdraw — voluntary participation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Debriefing + support — provide counselling if needed.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) vulnerability+confidentiality (b) consent+support",
            commonErrors: ["No issue.", "No solution."],
          },
        },
      ],
    },
  ],
};
