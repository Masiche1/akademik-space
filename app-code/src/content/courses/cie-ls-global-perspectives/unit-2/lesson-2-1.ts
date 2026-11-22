import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cilgp-u2-lesson-2-1",
  code: "2-1",
  title: "Deep Research on Global Challenges",
  goal: "I CAN conduct in-depth research on complex global challenges using multiple methods.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 strand: Research",
    "Cambridge Global Perspectives skills: research",
  ],
  stage: 9,
  vocabulary: [
    {
      term: "Primary research",
      definition: "Collecting your own data — surveys, interviews.",
    },
    {
      term: "Secondary research",
      definition: "Using existing published data.",
    },
    {
      term: "Triangulation",
      definition: "Cross-checking findings via multiple methods/sources.",
    },
    { term: "Sample", definition: "Subset of population studied." },
    {
      term: "Validity",
      definition: "Whether research measures what it claims.",
    },
    {
      term: "Ethics",
      definition: "Moral principles guiding research conduct.",
    },
  ],
  concepts: [
    {
      id: "cilgp-u2-s1-deepres",
      title: "Advanced research methods",
      skill:
        "Combine primary and secondary research ethically at Stage 9 level.",
      lesson: {
        sections: [
          {
            heading: "Primary vs secondary",
            body: "Secondary research uses existing data — fast but may be outdated or biased. Primary research (surveys, interviews, observations) gives fresh relevant data but needs careful design: representative samples, clear questions, ethical consent.",
          },
          {
            heading: "Rigour",
            body: "Triangulate: combine methods and sources. Check validity (does it measure the right thing?), reliability (consistent results?), and acknowledge limitations in your findings.",
          },
        ],
        keyFormulas: [
          { name: "Triangulation", statement: "multiple methods/sources" },
          { name: "Primary", statement: "collect own data" },
          { name: "Secondary", statement: "use existing data" },
        ],
        workedExample: {
          problem:
            "Research 'youth attitudes to climate change' — design a method.",
          solution:
            "Secondary: review surveys/reports. Primary: questionnaire to 100 students + 5 interviews. Triangulate findings; note sample limitations.",
        },
      },
      questions: [
        {
          id: "cilgp-u2-dr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is primary research?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Guessing answers",
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
                text: "Collecting your own data first-hand",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary research",
                statement: "First-hand data collection.",
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
          id: "cilgp-u2-dr-q2",
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
                statement: "Multiple verification.",
              },
            ],
            steps: [
              {
                reasoning: "Cross-check findings via multiple methods/sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increases reliability/validity of conclusions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Multi-method verification",
          },
        },
        {
          id: "cilgp-u2-dr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What ethical considerations apply when surveying people about sensitive topics?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research ethics",
                statement: "Consent, anonymity, sensitivity.",
              },
            ],
            steps: [
              {
                reasoning: "Informed consent + right to withdraw.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Anonymity/confidentiality of responses.",
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
          id: "cilgp-u2-dr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define primary research, secondary research, triangulation, sample, validity, ethics. (b) When is primary research better? (c) What is a representative sample? (d) Why avoid leading questions? (e) What is validity vs reliability? (f) Give 3 ethical rules for interviews. (g) How would you research 'should uniforms be compulsory?' (h) Evaluate the limitations of your method in (g).",
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
          id: "cilgp-u2-dr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is secondary research?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Collecting your own data first-hand",
              },
              {
                id: "b",
                text: "Guessing from memory",
              },
              {
                id: "c",
                text: "Asking friends for opinions",
              },
              {
                id: "d",
                text: "Using existing published data and sources",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary research",
                statement: "Using existing data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Secondary research uses data others have already collected.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Using existing published data",
          },
        },
        {
          id: "cilgp-u2-dr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A questionnaire has 12 questions and is completed by 25 students. How many total answers are collected?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 300,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Total responses",
                statement: "Questions x respondents.",
              },
            ],
            steps: [
              {
                reasoning: "12 x 25 = 300 answers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "300",
          },
        },
        {
          id: "cilgp-u2-dr-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is it important to check whether a research sample is representative?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sampling",
                statement: "Representativeness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A representative sample reflects the whole population's diversity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Otherwise findings cannot be generalised reliably.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "So findings apply to the whole population",
          },
        },
        {
          id: "cilgp-u2-dr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of a leading (biased) survey question?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "'Don't you agree that later school start times are a great idea?'",
              },
              {
                id: "b",
                text: "'How many hours do you sleep on school nights?'",
              },
              {
                id: "c",
                text: "'Do you support or oppose later school start times?'",
              },
              {
                id: "d",
                text: "'What is your year group?'",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Question design",
                statement: "Avoid leading wording.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option B pushes respondents towards 'yes' — biased wording.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "'Don't you agree...?' — leading wording",
          },
        },
        {
          id: "cilgp-u2-dr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 150 people, 90 agree that the park should stay open later. What percentage agree?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 60,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage",
                statement: "Part / whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "90 / 150 = 0.6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "0.6 x 100 = 60%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "60%",
          },
        },
        {
          id: "cilgp-u2-dr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three ethical rules that must be followed when interviewing people about sensitive topics like migration.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research ethics",
                statement: "Consent, confidentiality, no harm.",
              },
            ],
            steps: [
              {
                reasoning: "Informed consent and right to withdraw.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Anonymity/confidentiality of responses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Avoid causing distress; sensitive, non-leading questions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Consent, anonymity, no harm",
          },
        },
        {
          id: "cilgp-u2-dr-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the difference between validity and reliability in research?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Validity = large sample; reliability = small sample",
              },
              {
                id: "b",
                text: "They mean the same thing",
              },
              {
                id: "c",
                text: "Validity = fast; reliability = slow",
              },
              {
                id: "d",
                text: "Validity = measures the right thing; reliability = consistent results",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Validity vs reliability",
                statement: "Right thing vs consistent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Validity checks accuracy of measure; reliability checks repeatability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Right thing vs consistent results",
          },
        },
        {
          id: "cilgp-u2-dr-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A researcher triangulates findings using 1 survey, 2 interview sessions and 1 document analysis. How many different methods are used?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triangulation",
                statement: "Multiple methods/sources.",
              },
            ],
            steps: [
              {
                reasoning: "Survey, interviews and documents = 3 methods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 3.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cilgp-u2-dr-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A class survey of 30 students is used to represent the views of all 15-year-olds in a country. Evaluate the limitations of this approach.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sampling limitations",
                statement: "Sample vs population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sample is tiny relative to the national population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "One school's students may share similar backgrounds — not representative.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Findings cannot be generalised; wider sampling needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Too small and unrepresentative to generalise nationally",
          },
        },
        {
          id: "cilgp-u2-dr-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should researchers acknowledge the limitations of their methods?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is only needed for published papers",
              },
              {
                id: "b",
                text: "It shows rigour and honesty about how far findings can be trusted",
              },
              {
                id: "c",
                text: "It makes the report longer",
              },
              {
                id: "d",
                text: "It avoids all criticism",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Honest limitations",
                statement: "Acknowledge method weaknesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acknowledging limits strengthens credibility of conclusions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Shows rigour and honesty",
          },
        },
        {
          id: "cilgp-u2-dr-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Collecting primary data via interviews: each interview takes 15 minutes and the researcher plans 40 interviews. How many hours of interviewing are needed?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 10,
                unit: "hours",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Time calculation",
                statement: "Count x duration, convert units.",
              },
            ],
            steps: [
              {
                reasoning: "40 x 15 = 600 minutes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "600 / 60 = 10 hours.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 10 hours.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10 hours",
          },
        },
        {
          id: "cilgp-u2-dr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a mixed-methods research plan for 'Should schools start the day later?': (a) one research question, (b) one secondary source, (c) one primary method with an ethical safeguard, (d) how you will triangulate findings.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Research methods",
                statement: "Question, sources, ethics, triangulation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Specific arguable question, e.g. 'How does a later start affect student sleep and attainment?'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Valid secondary source, e.g. sleep research or government education reports.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid primary method + safeguard, e.g. student survey with anonymous responses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Valid triangulation, e.g. compare survey results with interview themes and published studies.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete mixed-methods plan",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u2-dr-notes",
      title: "Deep research — notes",
      summary:
        "Primary=own data; secondary=existing. Triangulate, check validity/reliability, follow ethics.",
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
