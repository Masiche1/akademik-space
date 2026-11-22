import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "ciegp-u2-lesson-2-1",
  code: "2-1",
  title: "Advanced Research Methods",
  goal: "I CAN conduct rigorous primary research ethically and triangulate findings.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457: advanced research",
    "0457: methods",
  ],

  vocabulary: [
    {
      term: "Primary research",
      definition: "Collecting your own data first-hand.",
    },
    {
      term: "Survey",
      definition: "Structured questionnaire collecting responses.",
    },
    { term: "Interview", definition: "Face-to-face or remote questioning." },
    { term: "Sample", definition: "Subset of population studied." },
    {
      term: "Triangulation",
      definition: "Cross-checking via multiple methods/sources.",
    },
    {
      term: "Ethics",
      definition: "Moral principles guiding research conduct.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u2-s1-advres",
      title: "Advanced research methods",
      skill: "Design and conduct primary research at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Primary research design",
            body: "Surveys need clear questions, representative samples, unbiased wording. Interviews give depth but small samples. Choose method matching research question: surveys for breadth, interviews for depth.",
          },
          {
            heading: "Ethics and rigour",
            body: "Obtain consent, ensure anonymity, avoid harm, be honest about limitations. Triangulate: combine methods and sources to verify findings. Acknowledge sample limitations.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "surveys, interviews, observation" },
          { name: "Triangulation", statement: "multiple methods verify" },
          { name: "Ethics", statement: "consent, anonymity, no harm" },
        ],
        workedExample: {
          problem:
            "Design primary research on 'student attitudes to homework'.",
          solution:
            "Survey 100 students (random sample) + 10 interviews for depth. Questions: frequency, perceived value, stress levels. Ensure consent + anonymity.",
        },
      },
      questions: [
        {
          id: "ciegp-u2-ar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is primary research?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Collecting your own data first-hand",
              },
              {
                id: "b",
                text: "Using Wikipedia",
              },
              {
                id: "c",
                text: "Reading books",
              },
              {
                id: "d",
                text: "Guessing answers",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary research",
                statement: "First-hand data.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = you collect the data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Collecting own data",
          },
        },
        {
          id: "ciegp-u2-ar-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is triangulation and why use it?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triangulation",
                statement: "Multi-method verification.",
              },
            ],
            steps: [
              {
                reasoning: "Cross-check via multiple methods/sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increases reliability/validity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Multi-method verification",
          },
        },
        {
          id: "ciegp-u2-ar-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What ethical rules apply to surveying people about sensitive topics?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research ethics",
                statement: "Consent, anonymity, no harm.",
              },
            ],
            steps: [
              {
                reasoning: "Informed consent + right to withdraw.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Anonymity/confidentiality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Avoid harm; sensitive wording.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Consent, anonymity, no harm",
          },
        },
        {
          id: "ciegp-u2-ar-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define primary research, survey, interview, sample, triangulation, ethics. (b) When is primary better than secondary? (c) What makes a representative sample? (d) Why avoid leading questions? (e) What is validity vs reliability? (f) Give 3 ethical rules for interviews. (g) How would you research 'should uniforms be compulsory?' (h) Evaluate limitations of your method in (g).",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Research methods",
                statement: "Primary, ethics, validity.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Fresh, specific, relevant data needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Reflects population diversity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Biases responses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Validity=right thing; reliability=consistent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Three valid ethical rules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Valid mixed-methods plan.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid limitations acknowledged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Advanced research methodology.",
          },
        },
        {
          id: "ciegp-u2-ar-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method gives the greatest breadth across a large population?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Case study" },
              { id: "b", text: "Survey" },
              { id: "c", text: "Observation" },
              { id: "d", text: "Interview" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Survey",
                statement: "Structured questionnaire for breadth.",
              },
            ],
            steps: [
              {
                reasoning: "Surveys reach many respondents cheaply.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Survey",
          },
        },
        {
          id: "ciegp-u2-ar-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a leading question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A question about leaders" },
              {
                id: "b",
                text: "Wording that pushes respondents toward a particular answer",
              },
              { id: "c", text: "A question asked twice" },
              { id: "d", text: "The first question in a survey" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Leading question",
                statement: "Biased wording that steers answers.",
              },
            ],
            steps: [
              {
                reasoning: "Leading questions bias responses.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Biased wording",
          },
        },
        {
          id: "ciegp-u2-ar-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A researcher surveys only their own friendship group about attitudes to homework. What is the main problem and how could it be fixed?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sampling bias",
                statement: "Unrepresentative sample undermines validity.",
              },
            ],
            steps: [
              {
                reasoning: "Friends share similar views — unrepresentative.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fix: random/stratified sample across the school.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sample bias; use random representative sample",
          },
        },
        {
          id: "ciegp-u2-ar-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A school has 800 students. A researcher wants a 10% sample plus a 5% buffer for non-response. How many questionnaires should be distributed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 80 },
              { label: "b", answer: 84 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sampling",
                statement: "Percentage of population plus buffer.",
              },
            ],
            steps: [
              {
                reasoning: "0.10 x 800 = 80.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "80 x 1.05 = 84 distributed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "80 sample; 84 distributed",
          },
        },
        {
          id: "ciegp-u2-ar-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A survey of 200 students finds 60% support homework and 15% are neutral. How many support it, and what percentage oppose it?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 120 },
              { label: "b", answer: 25 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Survey data",
                statement: "Percentages of sample size.",
              },
            ],
            steps: [
              {
                reasoning: "0.60 x 200 = 120 support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Oppose = 100 - 60 - 15 = 25%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "120 students; 25% oppose",
          },
        },
        {
          id: "ciegp-u2-ar-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why interviews give depth but limited generalisability.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interview trade-off",
                statement: "Depth vs sample size.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Open-ended answers reveal reasoning and nuance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only a few people can be interviewed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Small samples may not represent the population.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Depth via few respondents → limited generalisability",
          },
        },
        {
          id: "ciegp-u2-ar-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways to improve the validity of a questionnaire about student attitudes to homework.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Validity",
                statement: "Measuring what you intend.",
              },
            ],
            steps: [
              {
                reasoning: "Use neutral, unambiguous question wording.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pilot the questionnaire and refine it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use a representative sample and triangulate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Neutral wording, piloting, representative sample, triangulation",
          },
        },
        {
          id: "ciegp-u2-ar-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is secondary research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Analysing existing government statistics" },
              { id: "b", text: "Observing classroom behaviour" },
              { id: "c", text: "Running a survey" },
              { id: "d", text: "Conducting interviews" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary research",
                statement: "Using existing data/sources.",
              },
            ],
            steps: [
              {
                reasoning: "Government statistics already exist.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Analysing existing statistics",
          },
        },
        {
          id: "ciegp-u2-ar-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A researcher conducts 12 interviews averaging 40 minutes each. How many total minutes, and how many hours, of interview data are collected?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 480 },
              { label: "b", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Interview data",
                statement: "Sample size x duration.",
              },
            ],
            steps: [
              {
                reasoning: "12 x 40 = 480 minutes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "480 / 60 = 8 hours.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "480 minutes = 8 hours",
          },
        },
        {
          id: "ciegp-u2-ar-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the strongest reason to combine a survey with interviews in one study?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surveys alone are always invalid" },
              {
                id: "b",
                text: "Triangulation: breadth from the survey, depth from interviews",
              },
              { id: "c", text: "It halves the workload" },
              { id: "d", text: "Examiners prefer it" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Triangulation",
                statement: "Multiple methods verify and enrich findings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Combined methods cross-check and balance breadth/depth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Triangulation of breadth and depth",
          },
        },
        {
          id: "ciegp-u2-ar-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design primary research to test whether students prefer online learning. Include method, sample, questions and ethical safeguards.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Research design",
                statement: "Method + sample + ethics.",
              },
            ],
            steps: [
              {
                reasoning: "Mixed method: survey all year group + few interviews.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Representative random sample; clear neutral questions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Informed consent, anonymity, right to withdraw.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Plan to triangulate and acknowledge limitations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mixed-methods design with consent and triangulation",
          },
        },
        {
          id: "ciegp-u2-ar-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A survey sends 200 questionnaires and receives 150. What is the response rate percentage, and how many usable responses remain after 10 incomplete forms are discarded?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 75 },
              { label: "b", answer: 140 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Response rate",
                statement: "Returned / sent, minus unusable.",
              },
            ],
            steps: [
              {
                reasoning: "150 / 200 x 100 = 75%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "150 - 10 = 140 usable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "75% response rate; 140 usable",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u2-ar-notes",
      title: "Advanced research — notes",
      summary:
        "Primary research needs design, ethics, representative samples; triangulate for reliability.",
      sections: [
        {
          heading: "Key idea",
          body: "Rigorous research acknowledges limitations honestly.",
        },
        { heading: "Ethics", body: "Consent, anonymity, no harm — always." },
      ],
    },
  ],
};
