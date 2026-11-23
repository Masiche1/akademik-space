import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "bio9-u5-lesson-5-1",
  code: "5-1",
  title: "Capstone: Designing a Biological Investigation",
  goal: "I CAN design a controlled investigation of a biological system, identify variables, and evaluate evidence for and against a claim.",
  standards: [
    "HS-LS1-3",
    "HS-LS2-1",
    "SEP: Planning and Carrying Out Investigations",
    "SEP: Engaging in Argument from Evidence",
  ],
  vocabulary: [
    {
      term: "Independent variable",
      definition:
        "The factor a researcher deliberately changes in an experiment.",
    },
    {
      term: "Dependent variable",
      definition:
        "The factor measured in response to the independent variable.",
    },
    {
      term: "Controlled variable",
      definition: "A factor kept constant so it does not affect the results.",
    },
    {
      term: "Control group",
      definition:
        "A group that does not receive the treatment, used for comparison.",
    },
    {
      term: "Sample size",
      definition:
        "The number of individuals or trials measured; larger samples give more reliable results.",
    },
    {
      term: "Replication",
      definition:
        "Repeating an experiment or measuring many individuals to test reliability.",
    },
    {
      term: "Claim",
      definition:
        "A testable statement that an investigation aims to support or refute.",
    },
    {
      term: "Evidence",
      definition: "Data and observations used to evaluate a claim.",
    },
  ],
  concepts: [
    {
      id: "bio9-u5-investigation-design",
      title: "Variables and controls",
      skill:
        "Identify independent, dependent and controlled variables and design fair comparisons.",
      lesson: {
        sections: [
          {
            heading: "The three variable types",
            body: "Every fair investigation separates variables:\n\n- **Independent**: what you change (e.g., light intensity on plants)\n- **Dependent**: what you measure (e.g., rate of oxygen production)\n- **Controlled**: what you keep constant (temperature, water, species, pot size)\n\nIf a controlled variable is allowed to vary, the results are confounded — you cannot tell which factor caused the effect.",
          },
          {
            heading: "Controls and comparisons",
            body: "A **control group** receives no treatment so you can compare it with experimental groups. **Replication** — repeating trials and measuring many individuals — guards against flukes. A single measurement of a single plant proves little; the pattern across many plants is the evidence.",
          },
          {
            heading: "From question to claim",
            body: "A strong investigation starts with a testable claim: 'Increasing light intensity increases the rate of photosynthesis in pondweed up to a saturation point.' The design must be able to show the claim is wrong — if no outcome could refute it, it is not a real test.",
          },
        ],
        keyFormulas: [
          {
            name: "Fair test",
            statement:
              "Only the independent variable changes; all others are controlled.",
          },
          {
            name: "Replication",
            statement:
              "Repeat trials and large samples make evidence reliable.",
          },
        ],
        workedExample: {
          problem:
            "A student tests whether fertilizer increases plant growth but waters the fertilizer group twice as much. What is wrong?",
          solution:
            "Water is a controlled variable that was not controlled — growth differences could be caused by water, not fertilizer. The comparison is confounded and the evidence cannot support the claim about fertilizer.",
        },
      },
      questions: [
        {
          id: "bio9-u5-investigation-design-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an experiment testing fertilizer on plant growth, what is the dependent variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The type of fertilizer" },
              { id: "b", text: "The amount of plant growth measured" },
              { id: "c", text: "The amount of water given" },
              { id: "d", text: "The species of plant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependent variable",
                statement: "The measured outcome that responds to the change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Growth is what is measured in response to the fertilizer treatment.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Plant growth",
            commonErrors: ["Confusing independent and dependent variables."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio9-u5-investigation-design-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A researcher wants to test whether antibiotic X kills bacteria. Identify two controlled variables and one reason replication matters here.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Controls",
                statement:
                  "Controlled variables isolate the treatment's effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Controlled variables: temperature, nutrient medium, bacterial strain, incubation time.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Replication matters because bacterial populations vary; one plate could be contaminated or unrepresentative.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Multiple replicates show the effect is consistent, not a fluke.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g., temperature and medium controlled; replication confirms the kill effect is consistent.",
            commonErrors: ["Listing variables that should be independent."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "bio9-u5-investigation-design-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A claim states: 'All plants grow faster in soil.' Design a test that could refute this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Falsifiability",
                statement: "A test must be able to show the claim is false.",
              },
              {
                kind: "principle",
                name: "Control",
                statement: "Comparison isolates the variable being tested.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The claim is universal ('all plants'), so a single counterexample could refute it — test several species.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Compare growth in soil vs a defined alternative (e.g., hydroponic solution) under identical light, temperature, water and nutrients.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Measure growth rate over time with replicates of each species.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "If any species grows equally or faster without soil, the claim is refuted; if all grow faster in soil, evidence supports it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Test multiple species in soil vs controlled alternative; one counterexample refutes the universal claim.",
            commonErrors: ["Testing only one species or one condition."],
            examinerNote: "R1, B2, A1.",
          },
        },
        {
          id: "bio9-u5-investigation-design-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student claims: 'Plants exposed to music grow taller.'",
          parts: [
            {
              label: "a",
              prompt:
                "Rewrite the claim as a testable hypothesis with identified variables.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Design the experiment: groups, controls, and measurements.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Identify two possible confounding variables and how to control them.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hypothesis",
                statement:
                  "Testable prediction linking independent to dependent variable.",
              },
              {
                kind: "principle",
                name: "Control",
                statement:
                  "Only the tested variable should differ between groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Independent variable: music exposure (present/absent or type).",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "Dependent variable: plant height (or growth rate).",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Controlled variables: light, water, temperature, soil, species, pot size.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Experimental group gets music; control group gets silence; identical conditions otherwise.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Multiple replicates per group (e.g., 10+ plants each).",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Measure height weekly for a set period; compare mean growth rates.",
                marks: 2,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Possible confounds: vibration from speakers, extra heat, observer bias.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Control by using identical speakers at same volume in both groups, or using headphones/vibration-only test.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Blind measurement — measurer doesn't know which group is which.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) IV music, DV height, controls listed (b) music vs silence groups, replicates, weekly measurement (c) vibration/heat/bias controlled.",
            commonErrors: ["No control group or uncontrolled variables."],
            examinerNote: "3+4+3 = 10.",
          },
        },
      ],
    },
    {
      id: "bio9-u5-evaluating-evidence",
      title: "Evaluating evidence and arguments",
      skill:
        "Assess the strength of evidence for biological claims and identify weaknesses in reasoning.",
      lesson: {
        sections: [
          {
            heading: "What makes evidence strong",
            body: "Strong biological evidence is:\n- **Replicated**: repeated by independent researchers\n- **Controlled**: variables isolated\n- **Quantitative**: measured, not just observed\n- **Peer-reviewed**: checked by other scientists\n- **Consistent**: multiple lines of evidence point the same way",
          },
          {
            heading: "Weak evidence and common errors",
            body: "Weak evidence includes: anecdotes ('my plant grew faster with music'), single studies never replicated, correlation mistaken for causation, cherry-picked data, and claims that cannot be tested. Correlation shows two things happen together; causation requires an experiment isolating the cause.",
          },
          {
            heading: "Evaluating arguments",
            body: "A good argument links evidence to a claim with reasoning (a warrant). Ask: Does the evidence actually support the claim? Are there alternative explanations? Has the opposing view been addressed? Strong science considers what would change the conclusion.",
          },
        ],
        keyFormulas: [
          {
            name: "Correlation ≠ causation",
            statement:
              "Two variables moving together does not prove one causes the other.",
          },
          {
            name: "Strong evidence",
            statement:
              "Replicated, controlled, quantitative, peer-reviewed, consistent.",
          },
        ],
        workedExample: {
          problem:
            "A study finds students who eat breakfast score higher on tests. Does this prove breakfast improves scores?",
          solution:
            "No — correlation only. Students who eat breakfast may also sleep more, have more stable homes, or come from higher-income families. An experiment (randomly assigning breakfast) would be needed for causation.",
        },
      },
      questions: [
        {
          id: "bio9-u5-evaluating-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A news report says 'Study shows coffee drinkers live longer.' What is the most important question to ask about this claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How much coffee should I drink?" },
              {
                id: "b",
                text: "Was the study an experiment or just an observation of existing drinkers?",
              },
              { id: "c", text: "What brand of coffee is best?" },
              { id: "d", text: "Who paid for the study?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Correlation vs causation",
                statement:
                  "Observational studies show correlation; only experiments can suggest causation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If it's an observational study, coffee drinkers may differ in other ways (income, health habits) that explain longevity.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Experiment or observation?",
            commonErrors: ["Accepting correlation as proof of cause."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio9-u5-evaluating-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three features that make biological evidence strong.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strong evidence",
                statement: "Replicated, controlled, quantitative.",
              },
            ],
            steps: [
              {
                reasoning: "Replicated by independent researchers.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Controlled variables in experiments.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Quantitative measurements with adequate sample sizes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Replication, controls, quantitative data (also: peer review, consistency).",
            commonErrors: [
              "Listing weak features like 'interesting' or 'recent'.",
            ],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "bio9-u5-evaluating-evidence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two studies conflict: Study A (n=10,000) finds vaccine X reduces disease; Study B (n=12) finds no effect. Which is more reliable and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sample size",
                statement:
                  "Larger samples reduce the effect of chance and outliers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Study A is more reliable — sample size 10,000 vs 12.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Small samples are dominated by chance variation and outliers.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Study B's 12 subjects could easily miss a real effect or be skewed by one unusual case.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "However, Study B could still be valid if well-designed — the ideal is replication of Study A's method.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Study A — larger sample is more reliable, though replication of method matters too.",
            commonErrors: ["Choosing based on which result you prefer."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "bio9-u5-evaluating-evidence-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company claims its supplement 'boosts memory in students.' They cite one study of 20 volunteers who reported feeling sharper.",
          parts: [
            {
              label: "a",
              prompt: "Identify three weaknesses in this evidence.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "What would stronger evidence look like?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "The supplement costs $50/month. As a critical consumer, what questions should you ask before buying?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weak evidence",
                statement:
                  "Small sample, self-report, no control, conflict of interest.",
              },
              {
                kind: "principle",
                name: "Scientific skepticism",
                statement: "Evaluate claims by evidence quality, not appeal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weakness 1: sample of only 20 — too small to be reliable.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Weakness 2: 'felt sharper' is subjective self-report, not measured memory performance.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Weakness 3: no control group or placebo; company funding creates conflict of interest.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Stronger: randomized controlled trial with hundreds of participants, objective memory tests, placebo control, published in peer-reviewed journal, replicated independently.",
                marks: 2,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Independent replication by researchers without financial stake.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Consumer question 1: Is there independent (non-company) research?",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Question 2: What do regulated bodies (FDA, medical associations) say?",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Question 3: Are there known side effects or interactions?",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Question 4: Is the claim testable and has it been tested fairly — or is it marketing?",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) small sample, self-report, no control/conflict (b) RCT + replication (c) independent research, regulator stance, side effects, testability.",
            commonErrors: ["Accepting company-funded evidence uncritically."],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
  ],
};
