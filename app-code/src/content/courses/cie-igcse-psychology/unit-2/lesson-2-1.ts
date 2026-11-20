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
              { id: "a", text: "The variable the researcher changes" },
              { id: "b", text: "The variable that is measured as the outcome" },
              { id: "c", text: "A variable kept constant" },
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
      ],
    },
  ],
};
