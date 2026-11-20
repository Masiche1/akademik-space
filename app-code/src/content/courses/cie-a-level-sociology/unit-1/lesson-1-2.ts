import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "asoc-u1-lesson-1-2",
  code: "1-2",
  title: "Research Methods: Quantitative and Qualitative",
  goal: "I CAN distinguish quantitative and qualitative methods and evaluate their use.",
  standards: ["9699: Research methods"],
  vocabulary: [
    {
      term: "Quantitative methods",
      definition:
        "Numerical data collection — surveys, experiments, statistics.",
    },
    {
      term: "Qualitative methods",
      definition: "Non-numerical data — interviews, observation, case studies.",
    },
    {
      term: "Primary data",
      definition: "Data collected directly by the researcher.",
    },
    {
      term: "Secondary data",
      definition: "Data collected by others — official stats, documents.",
    },
    {
      term: "Reliability",
      definition: "Consistency of results — same method gives same results.",
    },
    {
      term: "Validity",
      definition: "Accuracy — does the method measure what it claims?",
    },
  ],
  concepts: [
    {
      id: "asoc-u1-quant-qual",
      title: "Quantitative vs qualitative methods",
      skill:
        "Distinguish and evaluate quantitative and qualitative approaches.",
      lesson: {
        sections: [
          {
            heading: "Quantitative methods",
            body: "Produce numerical data: questionnaires, structured interviews, experiments, official statistics. Advantages: large samples, generalisable, reliable, statistical analysis. Disadvantages: superficial, researcher bias in design.",
          },
          {
            heading: "Qualitative methods",
            body: "Produce detailed non-numerical data: unstructured interviews, participant observation, case studies, focus groups. Advantages: rich detail, validity, context. Disadvantages: small samples, not generalisable, time-consuming.",
          },
          {
            heading: "Primary vs secondary data",
            body: "Primary: collected by researcher — tailored but expensive. Secondary: existing data — cheap and fast but may be outdated or biased (e.g. crime stats only show reported crime).",
          },
        ],
        keyFormulas: [
          {
            name: "Methods",
            statement:
              "Quantitative=numbers+generalise; Qualitative=detail+context.",
          },
        ],
        workedExample: {
          problem: "Which method best studies why people commit crime?",
          solution:
            "Qualitative — interviews and observation reveal motivations and context that statistics miss.",
        },
      },
      questions: [
        {
          id: "asoc-u1-qq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a quantitative method?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Questionnaire survey" },
              { id: "b", text: "Unstructured interview" },
              { id: "c", text: "Participant observation" },
              { id: "d", text: "Case study" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quantitative",
                statement: "Numerical data — surveys, experiments.",
              },
            ],
            steps: [
              {
                reasoning: "Questionnaire = numerical data.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Questionnaire survey",
            commonErrors: ["Confusing with qualitative."],
          },
        },
        {
          id: "asoc-u1-qq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the main advantage of qualitative methods?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Qualitative advantage",
                statement: "Rich detail and context.",
              },
            ],
            steps: [
              {
                reasoning: "Detailed non-numerical data.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reveals motivations/context.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Rich detail and context.",
            commonErrors: ["Saying it's generalisable."],
          },
        },
        {
          id: "asoc-u1-qq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare quantitative and qualitative methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quant vs qual",
                statement: "Numbers vs detail; generalise vs context.",
              },
            ],
            steps: [
              {
                reasoning: "Quantitative: numerical, generalisable.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Qualitative: detailed, contextual.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Different strengths/weaknesses.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Quant=numbers+generalise; qual=detail+context.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "asoc-u1-qq-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Research methods.",
          parts: [
            { label: "a", prompt: "Define quantitative methods.", marks: 1 },
            { label: "b", prompt: "Define qualitative methods.", marks: 1 },
            { label: "c", prompt: "Main advantage of quantitative?", marks: 2 },
            { label: "d", prompt: "Main advantage of qualitative?", marks: 2 },
            {
              label: "e",
              prompt: "Which for studying poverty? Justify.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Methods",
                statement: "Definitions+advantages+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Numerical data.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Non-numerical detail.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Generalisable/reliable.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Large samples.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Rich detail/context.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Reveals experience.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Method chosen.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Justified by aims.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Strengths considered.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Clear argument.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) numbers (b) detail (c) generalise (d) context (e) justified choice",
          },
        },
      ],
    },
    {
      id: "asoc-u1-reliability-validity",
      title: "Reliability, validity and ethics",
      skill: "Evaluate research quality and ethical considerations.",
      lesson: {
        sections: [
          {
            heading: "Reliability and validity",
            body: "Reliability: consistency — would the study produce same results if repeated? Validity: accuracy — does it measure what it claims? A study can be reliable but not valid (consistently wrong).",
          },
          {
            heading: "Ethical issues",
            body: "Informed consent, confidentiality, protection from harm, deception, right to withdraw. Researchers must balance scientific value against participant welfare — debriefing after deception.",
          },
          {
            heading: "Sampling",
            body: "Random sampling: everyone has equal chance — representative but hard. Stratified: reflect population proportions. Snowball: for hidden populations. Opportunity: whoever is available — biased.",
          },
        ],
        keyFormulas: [
          {
            name: "Quality",
            statement:
              "Reliability=consistent; Validity=accurate; Ethics=consent+confidentiality+harm.",
          },
        ],
        workedExample: {
          problem:
            "A survey gives same results every time but asks wrong questions. Reliable or valid?",
          solution:
            "Reliable (consistent) but not valid (doesn't measure what it claims).",
        },
      },
      questions: [
        {
          id: "asoc-u1-rv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is reliability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Consistency of results" },
              { id: "b", text: "Accuracy of measurement" },
              { id: "c", text: "Large sample size" },
              { id: "d", text: "Ethical approval" },
            ],
            correctChoiceId: "a",
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
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Consistency",
            commonErrors: ["Confusing with validity."],
          },
        },
        {
          id: "asoc-u1-rv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between reliability and validity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability vs validity",
                statement: "Consistent vs accurate.",
              },
            ],
            steps: [
              {
                reasoning: "Reliability = consistency.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Validity = accuracy/measuring correctly.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Reliability=consistent; validity=accurate.",
            commonErrors: ["Using them interchangeably."],
          },
        },
        {
          id: "asoc-u1-rv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two ethical issues in sociological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethics",
                statement: "Consent, confidentiality, harm, deception.",
              },
            ],
            steps: [
              {
                reasoning: "Informed consent/deception.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Confidentiality/protection from harm.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Right to withdraw.", marks: 1, markCode: "AO1" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Consent, confidentiality, harm, deception.",
            commonErrors: ["Only one issue."],
          },
        },
        {
          id: "asoc-u1-rv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Research quality and ethics.",
          parts: [
            { label: "a", prompt: "Define reliability.", marks: 1 },
            { label: "b", prompt: "Define validity.", marks: 1 },
            { label: "c", prompt: "Reliability vs validity?", marks: 2 },
            { label: "d", prompt: "Two ethical issues?", marks: 3 },
            {
              label: "e",
              prompt: "Evaluate a study that deceives participants.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quality/ethics",
                statement: "Definitions+comparison+ethics+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Consistency.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Accuracy.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning: "Consistent vs accurate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Can differ.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Any two ethics.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Explained.", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "e",
                reasoning: "Deception identified.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Justified/criticised.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) consistent (b) accurate (c) difference (d) ethics (e) evaluation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u1-1-2-notes",
      title: "Research methods — notes",
      summary:
        "Quantitative vs qualitative; reliability, validity, ethics, sampling.",
      sections: [
        {
          heading: "Methods",
          body: "Quantitative=numbers+generalise; qualitative=detail+context. Primary=own data; secondary=existing.",
        },
        {
          heading: "Quality",
          body: "Reliability=consistent; validity=accurate. Ethics: consent, confidentiality, harm, deception.",
        },
      ],
    },
  ],
};
