import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cieipsych-u2-lesson-2-1",
  code: "2-1",
  title: "Research methods in psychology",
  goal: "I CAN describe the main research methods and evaluate their strengths and weaknesses.",
  standards: ["Cambridge IGCSE Psychology 0266", "Section 2: Research methods"],
  vocabulary: [
    {
      term: "Experiment",
      definition:
        "A controlled study manipulating an independent variable to measure its effect on a dependent variable.",
    },
    {
      term: "Independent variable (IV)",
      definition: "The variable deliberately changed by the researcher.",
    },
    {
      term: "Dependent variable (DV)",
      definition: "The variable measured to see if the IV affected it.",
    },
    {
      term: "Control group",
      definition:
        "Participants who do not receive the experimental treatment, for comparison.",
    },
    {
      term: "Correlation",
      definition:
        "A statistical relationship between two variables — not proof of cause.",
    },
    {
      term: "Case study",
      definition: "In-depth investigation of one individual or small group.",
    },
  ],
  concepts: [
    {
      id: "cieipsych-u2-methods",
      title: "Experimental and non-experimental methods",
      skill:
        "Identify research methods and evaluate their reliability and validity.",
      lesson: {
        sections: [
          {
            heading: "Experimental methods",
            body: "**Experiments** manipulate an IV and measure the DV under controlled conditions — they can show cause-effect. **Lab experiments** control variables tightly (high reliability) but may lack **ecological validity** (unnatural settings). **Field experiments** test in real settings (more valid, less controlled). **Natural experiments** use events the researcher didn't create (ethical but uncontrolled).",
          },
          {
            heading: "Non-experimental methods",
            body: "**Observations** record behaviour directly — can be participant or non-participant, covert or overt. **Questionnaires/interviews** gather self-report data — efficient but subject to bias (social desirability). **Case studies** give deep insight into individuals but lack generalisability. **Correlations** show relationships but cannot prove causation — a third variable may explain both.",
          },
          {
            heading: "Reliability, validity, ethics",
            body: "**Reliability** = consistency (same result if repeated). **Validity** = measuring what you claim to measure. Ethical issues include **informed consent**, **deception**, **right to withdraw**, **confidentiality** and **protection from harm** — especially important when studying vulnerable people.",
          },
        ],
        keyFormulas: [
          {
            name: "IV → DV",
            statement: "Manipulate the cause, measure the effect",
          },
          {
            name: "Correlation ≠ cause",
            statement: "Relationship shows link, not causation",
          },
        ],
        workedExample: {
          problem:
            "A researcher gives one group a memory technique and another no technique, then compares recall. What type of study is this?",
          solution:
            "A lab experiment — the technique is the IV, recall score is the DV, and the no-technique group is the control.",
        },
      },
      questions: [
        {
          id: "cieipsych-u2-mth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The dependent variable in an experiment is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A variable kept constant" },
              { id: "b", text: "The variable that is measured as the outcome" },
              { id: "c", text: "The variable the researcher changes" },
              { id: "d", text: "The control group" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependent variable",
                statement: "Outcome measured to see if the IV had an effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "IV is manipulated; DV is measured — the IV is the cause, DV the effect.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) The variable measured as the outcome.",
            commonErrors: ["Swapping IV and DV."],
          },
        },
        {
          id: "cieipsych-u2-mth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a correlation cannot prove that one variable causes another.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Correlation vs causation",
                statement:
                  "A relationship may be caused by a third variable or be coincidental.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Correlation shows two variables change together — it does not show direction or mechanism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A third variable may cause both — e.g. ice cream sales and drowning both rise in summer (heat is the cause).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only controlled experiments manipulating the IV can establish cause-effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Correlation shows association, not causation — a third variable may explain both.",
            commonErrors: [
              "Assuming correlation proves one variable causes the other.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mth-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one strength and one weakness of using questionnaires in psychological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Questionnaire evaluation",
                statement:
                  "Efficient large-scale data vs response bias and shallow answers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: efficient — can survey many people quickly and cheaply, producing quantifiable data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: relies on self-report — people may lie, misremember or give socially desirable answers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Closed questions limit depth — respondents cannot explain their reasoning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Efficient and scalable, but subject to bias and lacks depth.",
            commonErrors: [
              "Listing strengths/weaknesses without explanation or mixing up methods.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mth-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A researcher wants to study whether social media use affects sleep quality in teenagers. Evaluate two possible research methods.",
          parts: [
            {
              label: "a",
              prompt: "Describe how an experiment could be conducted.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Describe how a correlational study could be conducted and its limitation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Method selection",
                statement:
                  "Experiment shows causation but is hard ethically; correlation is easier but inconclusive.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Experiment: assign teenagers to high vs low social media use (IV), measure sleep quality via trackers (DV), with a control group.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Strength: could show causation — but ethical problems (manipulating screen time, consent issues with minors) and artificiality.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "A field experiment (natural variation) would be more ethical and valid.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Correlation: measure existing social media hours and sleep quality across a sample, compute the relationship.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Strength: ethical and practical — no manipulation needed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Limitation: cannot prove causation — poor sleepers might use media more, or a third factor (stress) causes both.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Controlled experiment — causal but ethically problematic. (b) Correlation — ethical but cannot prove cause.",
            commonErrors: [
              "Choosing a method without addressing its ethical or validity problems.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mth-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The independent variable (IV) in an experiment is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The variable that is measured" },
              { id: "b", text: "The variable deliberately changed by the researcher" },
              { id: "c", text: "The control group" },
              { id: "d", text: "A variable kept constant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independent variable",
                statement: "The variable deliberately changed by the researcher.",
              },
            ],
            steps: [
              {
                reasoning:
                  "IV is manipulated; DV is measured — IV is the cause, DV the effect.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) The variable deliberately changed by the researcher.",
            commonErrors: ["Swapping IV and DV."],
          },
        },
        {
          id: "cieipsych-u2-mth-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The lesson names five key ethical issues in psychological research (informed consent, deception, right to withdraw, confidentiality, protection from harm). How many are there?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Ethical issues",
                statement:
                  "Consent, deception, right to withdraw, confidentiality, protection from harm.",
              },
            ],
            steps: [
              {
                reasoning: "Five ethical issues are listed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5",
            commonErrors: ["Missing confidentiality or protection from harm."],
          },
        },
        {
          id: "cieipsych-u2-mth-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a questionnaire study of 80 students, 60 say they check their phone during lessons. What percentage check their phone?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Percentage calculation",
                statement: "Percentage = part / whole × 100.",
              },
            ],
            steps: [
              {
                reasoning: "60 / 80 = 0.75 → 75%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "75%",
            commonErrors: ["Answering 0.75 instead of 75%."],
          },
        },
        {
          id: "cieipsych-u2-mth-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between reliability and validity in psychological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability vs validity",
                statement:
                  "Reliability = consistency; validity = measuring what you claim.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reliability is consistency — the same result is obtained if the study is repeated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Validity is accuracy of measurement — the method genuinely measures the variable it claims to.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: a broken scale is unreliable (different readings each time); a scale measuring weight but labelled height lacks validity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reliability = consistency across repetitions; validity = measuring the intended variable.",
            commonErrors: [
              "Using the terms interchangeably or giving only one definition.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mth-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which experimental design offers the best balance of control and real-world relevance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Case study — no experiment" },
              { id: "b", text: "Natural experiment — no control at all" },
              { id: "c", text: "Field experiment — real setting with some control" },
              { id: "d", text: "Lab experiment — maximum control" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Field experiments",
                statement:
                  "Real-world settings give ecological validity while retaining some control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Field experiments balance validity (real setting) against lab control — the standard 'best of both' answer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Field experiment.",
            commonErrors: [
              "Choosing lab for maximum control — ignores ecological validity.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mth-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one strength and one weakness of using case studies in psychological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Case study evaluation",
                statement:
                  "Deep insight into individuals vs lack of generalisability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: provides rich, detailed, in-depth insight into an individual's thoughts, behaviour and history.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: findings from one person or small group may not generalise to the wider population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Also: researcher bias is possible and it cannot show cause-effect without controls.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rich detailed insight, but poor generalisability and possible researcher bias.",
            commonErrors: [
              "Listing strengths/weaknesses without explanation or mixing methods.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mth-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The purpose of a control group in an experiment is to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Provide a comparison baseline without the treatment"
              },
              { id: "b", text: "Reduce ethical issues" },
              { id: "c", text: "Receive the experimental treatment" },
              { id: "d", text: "Increase the sample size" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Control group",
                statement:
                  "Participants who do not receive the experimental treatment, for comparison.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The control group shows what happens without the IV — differences reveal the treatment's effect.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Provide a comparison baseline without the treatment.",
            commonErrors: ["Thinking the control group receives the treatment."],
          },
        },
        {
          id: "cieipsych-u2-mth-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A researcher wants to study aggression on a school playground. Evaluate the use of non-participant observation for this study.",
          parts: [
            {
              label: "a",
              prompt: "Describe how the observation could be conducted.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify two ethical issues.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate the method's validity and reliability.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Observation evaluation",
                statement:
                  "Natural behaviour in real setting vs observer bias and ethical problems.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Non-participant covert observation: researcher watches from a distance recording aggressive acts using a behavioural checklist.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Could be structured (counting specific behaviours) or unstructured (describing incidents in detail).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Informed consent: children cannot easily consent and covert observation means consent is impossible.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Privacy/confidentiality: recording identifiable children raises data protection issues.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Validity: high ecological validity — real playground behaviour is observed naturally.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Reliability: observer bias and subjective interpretation of 'aggression' reduce consistency — inter-observer reliability checks needed.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Covert non-participant observation with behavioural coding. (b) Consent and confidentiality issues. (c) High validity, but reliability threatened by observer bias.",
            commonErrors: [
              "Ignoring the ethical problems of observing children without consent.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mth-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a memory experiment, Group A (with technique) recalled a mean of 8 items; Group B (no technique) recalled 6. (a) What is the difference in mean recall? (b) By what percentage is Group A higher than Group B?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 33.3, tolerance: 0.2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Comparing group means",
                statement:
                  "Difference = mean A − mean B; percentage = difference / mean B × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "8 − 6 = 2 items.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "2 / 6 = 0.333 → ~33.3%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 2 items  (b) ~33.3%",
            commonErrors: [
              "Calculating percentage of 8 instead of relative to Group B's mean.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mth-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Questionnaires may produce biased answers because participants tend to give socially desirable responses. This is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replication" },
              { id: "b", text: "Ecological validity" },
              { id: "c", text: "High reliability" },
              { id: "d", text: "Response bias" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Response bias",
                statement:
                  "Self-report methods suffer from social desirability and other response biases.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Socially desirable responding is a response bias — answers reflect what seems acceptable, not truth.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Response bias.",
            commonErrors: ["Calling it low reliability — it is a validity/bias problem in self-report."],
          },
        },
        {
          id: "cieipsych-u2-mth-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ecological validity refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How ethical the study is" },
              { id: "b", text: "How consistent results are when repeated" },
              {
                id: "c",
                text: "How well results generalise to real-life settings"
              },
              { id: "d", text: "The size of the sample" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ecological validity",
                statement:
                  "Extent to which findings reflect real-world behaviour and settings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ecological validity = real-world relevance; lab experiments often lack it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) How well results generalise to real-life settings.",
            commonErrors: ["Confusing ecological validity with reliability."],
          },
        },
        {
          id: "cieipsych-u2-mth-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A school wants to know whether a new teaching method improves exam results. Design a study and evaluate your chosen method.",
          parts: [
            {
              label: "a",
              prompt: "Describe the study design.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate the method chosen.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Study design",
                statement:
                  "Experiment with IV/DV and control vs correlation — trade-offs between causation and practicality.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Experiment: randomly assign classes to new method (IV) vs traditional method; measure exam scores (DV) with a control group.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Control variables: teacher experience, class size, topic — ensure only the method differs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Could also use a natural experiment if some classes already adopted the method — no manipulation needed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Strength: an experiment can show causation — differences in scores can be attributed to the method.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Weakness: ethical issues (withholding a beneficial method from control classes) and possible teacher/class confounds.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: a field experiment in real classrooms balances validity and control; a natural experiment avoids ethical problems but is less controlled.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Randomised experiment with control group or natural experiment. (b) Causal evidence possible but ethical/confound issues; field design best balances validity and control.",
            commonErrors: [
              "Designing a study without identifying IV, DV and control.",
            ],
          },
        },
      ],
    },
  ],
};
