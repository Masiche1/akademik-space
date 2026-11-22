import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "eias-soc-u5-lesson-5-1",
  code: "5-1",
  title: "Research Design and Methods",
  goal: "I CAN identify sociological research methods and their strengths/weaknesses.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 5 — Research Methods"],
  vocabulary: [
    {
      term: "Quantitative data",
      definition: "Numerical data — statistics, surveys.",
    },
    {
      term: "Qualitative data",
      definition: "Descriptive data — interviews, observations.",
    },
    {
      term: "Positivism",
      definition: "Approach seeking objective, measurable facts.",
    },
    {
      term: "Interpretivism",
      definition: "Approach seeking meanings, interpretations.",
    },
    { term: "Reliability", definition: "Consistency of measurement." },
    { term: "Validity", definition: "Whether method measures what it claims." },
  ],
  concepts: [
    {
      id: "eias-soc-u5-methods",
      title: "Sociological Research Methods",
      skill: "Describe and evaluate primary and secondary methods.",
      lesson: {
        sections: [
          {
            heading: "Primary methods",
            body: "**Surveys/questionnaires**: large samples, quantitative — but low response rate, no depth. **Interviews**: structured (comparable) or unstructured (rich detail) — but interviewer bias, time-consuming. **Observations**: participant or non-participant — natural behaviour but observer effect. **Experiments**: control variables — rare in sociology (ethical/practical issues).",
          },
          {
            heading: "Secondary methods",
            body: "**Official statistics**: police, census, government data — large scale but may be biased. **Documents**: historical records, media — rich source but interpretation needed. **Existing data**: re-use datasets — efficient but may not fit research question.\n\n**Triangulation**: combining methods — improves validity, compensates weaknesses.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Researcher asks 500 people about attitudes via questionnaire. Method?",
          solution: "Survey.",
        },
      },
      questions: [
        {
          id: "eias-soc-u5-meth-q1",
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
                reasoning: "Quantitative = numerical.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Numerical",
            commonErrors: ["Qualitative confused."],
          },
        },
        {
          id: "eias-soc-u5-meth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two sociological research methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Methods",
                statement: "Survey, interview, observation.",
              },
            ],
            steps: [
              {
                reasoning: "Surveys/questionnaires — large samples.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Interviews — structured or unstructured.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Observations — participant or non-participant.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Surveys, interviews, observations, documents.",
            commonErrors: ["Only one.", "Wrong method."],
          },
        },
        {
          id: "eias-soc-u5-meth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one advantage and one limitation of surveys.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Survey eval",
                statement: "Large vs shallow.",
              },
            ],
            steps: [
              {
                reasoning: "Advantage: large samples — generalisable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advantage: quantitative — easy to analyse.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Limitation: low response rate — bias.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Limitation: no depth — misses meanings.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Large+quantitative vs low response+shallow.",
            commonErrors: ["Only advantage.", "Only limitation."],
          },
        },
        {
          id: "eias-soc-u5-meth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Researcher studies gang behaviour using observation and interviews.",
          parts: [
            {
              label: "a",
              prompt: "Identify strengths of each method.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest why combining is better.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Triangulation",
                statement: "Method combination.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Observation: real behaviour, natural setting.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Interview: meanings, motivations, context.",
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
                  "(b) Reduces bias — observation + interview balance.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) real+meanings (b) triangulation",
            commonErrors: ["One method.", "No benefit."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u5-epistemology",
      title: "Positivism and Interpretivism",
      skill: "Compare positivist and interpretivist approaches to sociology.",
      lesson: {
        sections: [
          {
            heading: "Positivism",
            body: "**Comte**: society like natural world — discoverable through observation, measurement. **Durkheim**: social facts — objective, external forces. **Methods**: quantitative — statistics, experiments, surveys. **Goal**: predict, control society.\n\n**Strengths**: scientific, objective, generalisable. **Weaknesses**: ignores meanings, too deterministic, hard to measure complex social phenomena.",
          },
          {
            heading: "Interpretivism",
            body: "**Weber**: sociology is 'understanding' — Verstehen, interpret meanings. **Social construction**: reality created through interaction — meanings matter. **Methods**: qualitative — interviews, observations. **Goal**: understand social world from inside.\n\n**Strengths**: captures meanings, agency, context. **Weaknesses**: subjective, hard to generalise, researcher bias.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Researcher wants to understand why people commit crime — their reasons. Approach?",
          solution: "Interpretivism.",
        },
      },
      questions: [
        {
          id: "eias-soc-u5-epi-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is positivism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Objective, measurable facts approach" },
              { id: "b", text: "Interpretive approach" },
              { id: "c", text: "Qualitative approach" },
              { id: "d", text: "Subjective approach" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Positivism",
                statement: "Objective facts.",
              },
            ],
            steps: [
              {
                reasoning: "Positivism = objective measurement.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Objective facts",
            commonErrors: ["Interpretivism confused."],
          },
        },
        {
          id: "eias-soc-u5-epi-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish positivism and interpretivism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Pos vs interp",
                statement: "Objective vs subjective.",
              },
            ],
            steps: [
              {
                reasoning: "Positivism: objective, quantitative, measurable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Interpretivism: subjective, qualitative, meanings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Positivism predicts; interpretivism understands.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Pos=objective, interp=meanings.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eias-soc-u5-epi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Verstehen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Verstehen",
                statement: "Interpretive understanding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weber's concept — understand from actor's perspective.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Not just observe behaviour — understand meanings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Requires empathy — see world as they see it.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Foundation of interpretivist sociology.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Understand meanings from inside.",
            commonErrors: ["Observation only.", "No empathy."],
          },
        },
        {
          id: "eias-soc-u5-epi-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Researcher studies why people join religious groups.",
          parts: [
            { label: "a", prompt: "Suggest positivist approach.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest interpretivist approach.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Approach comparison",
                statement: "Quantitative vs qualitative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Positivist: survey — measure attitudes, statistics.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Goal: identify patterns, predict who joins.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Interpretivist: in-depth interviews — meanings.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Goal: understand personal reasons, experiences.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) survey+patterns (b) interviews+meanings",
            commonErrors: ["Same approach.", "No contrast."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u5-evaluation",
      title: "Evaluating Research",
      skill: "Evaluate research methods, ethics and quality.",
      lesson: {
        sections: [
          {
            heading: "Reliability and validity",
            body: "**Reliability**: consistent measurement — same results if repeated. **Validity**: measures what it claims — internal (no bias) + external (generalises). **Problems**: Hawthorne effect, researcher bias, demand characteristics, social desirability.\n\n**Ethics**: informed consent, confidentiality, no harm, right to withdraw, debriefing. **Cost-benefit**: research value vs participant harm.",
          },
          {
            heading: "Evaluating studies",
            body: "**Strengths**: large samples, controlled variables, ethical. **Limitations**: sampling bias, measurement issues, generalisability. **Improvements**: triangulation, pilot studies, reflexivity, transparent methods.\n\n**Reflexivity**: researcher awareness of own influence — acknowledges bias.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Study uses only university students. Limitation?",
          solution: "Sampling bias — not representative.",
        },
      },
      questions: [
        {
          id: "eias-soc-u5-eval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is reliability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Generalises" },
              { id: "b", text: "Measures what it claims" },
              { id: "c", text: "Consistent measurement" },
              { id: "d", text: "Ethical" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability",
                statement: "Consistency.",
              },
            ],
            steps: [
              {
                reasoning: "Reliability = consistent.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Consistent",
            commonErrors: ["Validity confused."],
          },
        },
        {
          id: "eias-soc-u5-eval-q2",
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
          id: "eias-soc-u5-eval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the Hawthorne effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hawthorne effect",
                statement: "Observation changes behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "People behave differently when observed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More productive/conforming — 'good' behaviour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Affects validity — behaviour not natural.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: workers more productive when watched.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Observation → unnatural behaviour.",
            commonErrors: ["No effect.", "No example."],
          },
        },
        {
          id: "eias-soc-u5-eval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate a study using only questionnaires for sensitive topic.",
          parts: [
            { label: "a", prompt: "Identify two limitations.", marks: 4 },
            { label: "b", prompt: "Suggest improvements.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method eval",
                statement: "Limits + improvements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Social desirability — people give 'correct' answers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) No depth — misses meanings, context.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Triangulation — add interviews for depth.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Anonymous methods — increase honesty.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) desirability+shallow (b) triangulate+anonymous",
            commonErrors: ["Perfect method.", "No improvement."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u5-applications",
      title: "Research in Practice",
      skill: "Apply research methods to sociological questions.",
      lesson: {
        sections: [
          {
            heading: "Choosing methods",
            body: "**Research question**: what you want to know — determines method. **Quantitative question** (how many, how often) → survey, statistics. **Qualitative question** (why, how) → interview, observation. **Mixed methods**: both — comprehensive but complex.\n\n**Sampling**: who you study — random (representative), stratified (proportionate), purposive (specific groups).",
          },
          {
            heading: "Writing research",
            body: "**Aim/hypothesis**: clear, testable. **Method**: detailed enough for replication. **Results**: honest reporting — limitations included. **Conclusion**: answer question, acknowledge limits.\n\n**Evaluation**: good research is transparent, ethical, rigorous — allows others to assess validity.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Want to know why people vote for certain party. Method?",
          solution: "Interview — understand meanings.",
        },
      },
      questions: [
        {
          id: "eias-soc-u5-prac-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is purposive sampling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Convenience sampling" },
              { id: "b", text: "Selecting specific groups for purpose" },
              { id: "c", text: "All population" },
              { id: "d", text: "Random selection" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Purposive sampling",
                statement: "Specific groups.",
              },
            ],
            steps: [
              {
                reasoning: "Purposive = specific selection.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Specific groups",
            commonErrors: ["Random confused."],
          },
        },
        {
          id: "eias-soc-u5-prac-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Match research question to method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method matching",
                statement: "Question → method.",
              },
            ],
            steps: [
              {
                reasoning: "How many/how often → survey, statistics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Why/how → interview, observation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Both → mixed methods.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Quantitative→survey, qualitative→interview.",
            commonErrors: ["Wrong match.", "Only one."],
          },
        },
        {
          id: "eias-soc-u5-prac-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why pilot studies are useful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pilot studies",
                statement: "Test before main.",
              },
            ],
            steps: [
              {
                reasoning: "Test methods — check questions work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identify problems — timing, clarity, ethics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Improve design — refine before full study.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduce risk — avoid wasting resources.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Test+identify+improve+reduce risk.",
            commonErrors: ["No purpose.", "One reason."],
          },
        },
        {
          id: "eias-soc-u5-prac-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design study on why people volunteer.",
          parts: [
            { label: "a", prompt: "Choose method and justify.", marks: 4 },
            { label: "b", prompt: "Suggest sampling strategy.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Study design",
                statement: "Method + sampling.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Interview — understand motivations, meanings.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Semi-structured — flexible but comparable.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Purposive — volunteers and non-volunteers.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Stratified — different ages, backgrounds.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) interview+semi-structured (b) purposive+stratified",
            commonErrors: ["Wrong method.", "Biased sample."],
          },
        },
      ],
    },
  ],
};
