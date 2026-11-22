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
              { id: "a", text: "Unstructured interview" },
              { id: "b", text: "Questionnaire survey" },
              { id: "c", text: "Case study" },
              { id: "d", text: "Participant observation" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** Questionnaire survey",
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
        {
          id: "asoc-u1-qq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a qualitative method?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Official statistics" },
              { id: "b", text: "Unstructured interview" },
              { id: "c", text: "Structured questionnaire" },
              { id: "d", text: "Statistical experiment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Qualitative",
                statement: "Non-numerical, detailed data.",
              },
            ],
            steps: [
              {
                reasoning: "Unstructured interview gives detail.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Unstructured interview",
            commonErrors: ["Confusing with quantitative."],
          },
        },
        {
          id: "asoc-u1-qq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is primary data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Data collected by others" },
              {
                id: "b",
                text: "Data collected directly by the researcher",
              },
              { id: "c", text: "Old government records" },
              { id: "d", text: "Data from the internet" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary data",
                statement: "Collected by the researcher.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = own collection.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Data collected directly by the researcher",
            commonErrors: ["Confusing with secondary data."],
          },
        },
        {
          id: "asoc-u1-qq-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one advantage of quantitative methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quantitative advantage",
                statement: "Generalisable, large samples, reliable.",
              },
            ],
            steps: [
              {
                reasoning: "Numerical data allows statistical analysis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Findings generalisable to larger population.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Generalisable results from large samples.",
            commonErrors: ["Listing a qualitative advantage."],
          },
        },
        {
          id: "asoc-u1-qq-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one disadvantage of qualitative methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Qualitative disadvantage",
                statement: "Small samples, not generalisable, time-consuming.",
              },
            ],
            steps: [
              {
                reasoning: "Small samples used.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Findings not generalisable.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Small samples mean findings are not generalisable.",
            commonErrors: ["Giving an advantage instead."],
          },
        },
        {
          id: "asoc-u1-qq-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A researcher surveys 500 people and finds 70% use social media daily. How many people is that?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 350 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage calculation",
                statement: "70% of 500 = 0.7 x 500.",
              },
            ],
            steps: [
              {
                reasoning: "Convert percentage to decimal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Multiply by sample size.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "350",
            commonErrors: ["Calculating 70% of a wrong total."],
          },
        },
        {
          id: "asoc-u1-qq-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare primary and secondary data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primary vs secondary",
                statement: "Own data vs existing data.",
              },
            ],
            steps: [
              {
                reasoning: "Primary: collected by researcher, tailored.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Secondary: existing data, cheap and fast.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Secondary may be outdated/biased.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Primary=own+tailored; secondary=existing+cheap.",
            commonErrors: ["Only describing one type."],
          },
        },
        {
          id: "asoc-u1-qq-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an advantage of quantitative methods?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Findings can be generalised to large populations",
              },
              { id: "b", text: "Avoids all researcher bias" },
              { id: "c", text: "Produces rich detailed descriptions" },
              { id: "d", text: "Always achieves high validity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quantitative advantage",
                statement: "Large samples allow generalisation.",
              },
            ],
            steps: [
              {
                reasoning: "Quantitative = generalisable.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Findings can be generalised",
            commonErrors: ["Choosing a qualitative advantage."],
          },
        },
        {
          id: "asoc-u1-qq-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A researcher uses only official crime statistics to study policing. What is the main limitation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They always lack reliability" },
              {
                id: "b",
                text: "They only show reported crime, not all crime",
              },
              { id: "c", text: "They cannot be collected by the police" },
              { id: "d", text: "They cannot be quantified" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary data limitation",
                statement: "May be biased or incomplete.",
              },
            ],
            steps: [
              {
                reasoning: "Crime stats only show reported crime.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** They only show reported crime",
            commonErrors: ["Ignoring the dark figure of crime."],
          },
        },
        {
          id: "asoc-u1-qq-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 250 respondents, 40% preferred questionnaires and 60% preferred interviews. (a) How many preferred questionnaires? (b) How many more preferred interviews?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100 },
              { label: "b", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage calculation",
                statement: "40% of 250 = 100; 60% = 150; difference = 50.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Questionnaires: 40% of 250.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Interviews 150 minus questionnaires 100.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) 100 (b) 50",
            commonErrors: ["Comparing percentages not counts."],
          },
        },
        {
          id: "asoc-u1-qq-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Discuss the strengths and weaknesses of using official statistics in sociological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Official statistics",
                statement: "Cheap, large-scale vs biased/incomplete.",
              },
            ],
            steps: [
              {
                reasoning: "Cheap and readily available.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Large-scale, longitudinal data.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "May be politically biased in collection.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May not measure what they claim (e.g. crime).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can be checked against other data (triangulation).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Developed, balanced discussion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Official stats are cheap and large-scale but may be biased or incomplete.",
            commonErrors: ["One-sided discussion."],
          },
        },
        {
          id: "asoc-u1-qq-q15",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Research methods.",
          parts: [
            { label: "a", prompt: "Define quantitative methods.", marks: 1 },
            { label: "b", prompt: "Define qualitative methods.", marks: 1 },
            {
              label: "c",
              prompt: "State one advantage of quantitative methods.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "State one disadvantage of quantitative methods.",
              marks: 1,
            },
            {
              label: "e",
              prompt:
                "Choose a method to study youth subcultures and justify your choice.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Methods",
                statement: "Definitions+evaluation+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Numerical data methods.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Non-numerical detail methods.",
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
                reasoning: "Superficial/misses context.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Qualitative method chosen.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Rich detail/context suited.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Small scale limitation noted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Comparison with alternative.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Clear justified argument.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) numbers (b) detail (c) generalise (d) superficial (e) qualitative justified",
          },
        },
        {
          id: "asoc-u1-qq-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sample of 80 students completed a questionnaire; three-quarters returned it. How many students returned it?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction calculation",
                statement: "3/4 of 80 = 0.75 x 80.",
              },
            ],
            steps: [
              {
                reasoning: "Convert fraction to decimal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Multiply by sample size.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Using the wrong fraction."],
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
              { id: "a", text: "Ethical approval" },
              { id: "b", text: "Accuracy of measurement" },
              { id: "c", text: "Consistency of results" },
              { id: "d", text: "Large sample size" },
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
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Consistency",
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
        {
          id: "asoc-u1-rv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is validity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Consistency of results" },
              { id: "b", text: "Accuracy of measurement" },
              { id: "c", text: "Large sample size" },
              { id: "d", text: "Cost of the study" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Validity",
                statement: "Accuracy.",
              },
            ],
            steps: [
              {
                reasoning: "Validity = accurate measurement.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Accuracy of measurement",
            commonErrors: ["Confusing with reliability."],
          },
        },
        {
          id: "asoc-u1-rv-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a key ethical requirement for sociological research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using covert methods" },
              { id: "b", text: "Informed consent" },
              { id: "c", text: "Publishing all data" },
              { id: "d", text: "Large sample size" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethics",
                statement: "Consent, confidentiality, harm, deception.",
              },
            ],
            steps: [
              {
                reasoning: "Informed consent is required.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Informed consent",
            commonErrors: ["Choosing a non-ethical option."],
          },
        },
        {
          id: "asoc-u1-rv-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A survey gives identical results every time it is repeated, but it asks questions that do not measure what the researcher claims. What describes this study?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Valid but not reliable" },
              { id: "b", text: "Both reliable and valid" },
              { id: "c", text: "Reliable but not valid" },
              { id: "d", text: "Neither reliable nor valid" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reliability vs validity",
                statement: "Consistent but measuring wrong thing.",
              },
            ],
            steps: [
              {
                reasoning: "Same results = reliable; wrong questions = not valid.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** Reliable but not valid",
            commonErrors: ["Assuming reliability implies validity."],
          },
        },
        {
          id: "asoc-u1-rv-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sampling method ensures the sample reflects the proportions of key groups in the population?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opportunity sampling" },
              { id: "b", text: "Stratified sampling" },
              { id: "c", text: "Snowball sampling" },
              { id: "d", text: "Convenience sampling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stratified sampling",
                statement: "Reflects population proportions.",
              },
            ],
            steps: [
              {
                reasoning: "Stratified = proportional to population strata.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Stratified sampling",
            commonErrors: ["Choosing snowball for representativeness."],
          },
        },
        {
          id: "asoc-u1-rv-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Researchers use deception in an experiment. What must they do afterwards to reduce ethical problems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Publish results faster" },
              { id: "b", text: "Use only secondary data" },
              { id: "c", text: "Increase the sample size" },
              { id: "d", text: "Debrief participants" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deception and debriefing",
                statement: "Debrief after deception.",
              },
            ],
            steps: [
              {
                reasoning: "Debriefing reduces harm after deception.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(d)** Debrief participants",
            commonErrors: ["Thinking deception needs no follow-up."],
          },
        },
        {
          id: "asoc-u1-rv-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 400 questionnaires sent out, 25% were returned. How many questionnaires were returned?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage calculation",
                statement: "25% of 400 = 0.25 x 400.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Convert percentage to decimal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Multiply by total sent.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "100",
            commonErrors: ["Using 25% of the wrong total."],
          },
        },
        {
          id: "asoc-u1-rv-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A researcher wants a stratified sample of 300 people matching the population, where 55% are female and 45% are male. (a) How many females should be sampled? (b) How many males should be sampled?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 165 },
              { label: "b", answer: 135 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stratified sample calculation",
                statement: "55% of 300 = 165; 45% of 300 = 135.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "55% of 300 for females.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "45% of 300 for males.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) 165 (b) 135",
            commonErrors: ["Sampling equal numbers instead of proportions."],
          },
        },
        {
          id: "asoc-u1-rv-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a survey of 1200 adults, 30% are under 25, 45% are aged 25-44 and the rest are 45 or over. (a) How many are under 25? (b) How many are 45 or over? (c) How many more are aged 25-44 than under 25?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 360 },
              { label: "b", answer: 300 },
              { label: "c", answer: 180 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Age-group calculation",
                statement: "30% of 1200 = 360; 25% = 300; 45% = 540.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "30% of 1200.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "45+ is 25% of 1200.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "540 minus 360.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) 360 (b) 300 (c) 180",
            commonErrors: ["Forgetting the 45+ group is the remainder."],
          },
        },
        {
          id: "asoc-u1-rv-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a study of 500 people, 12% refused to give consent. How many people refused?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage calculation",
                statement: "12% of 500 = 0.12 x 500.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "12% of 500.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Using the wrong percentage."],
          },
        },
        {
          id: "asoc-u1-rv-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define validity in sociological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Validity",
                statement: "Accuracy of measurement.",
              },
            ],
            steps: [
              {
                reasoning: "Validity = accuracy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Does the method measure what it claims?",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Accuracy — does it measure what it claims?",
            commonErrors: ["Confusing with reliability."],
          },
        },
        {
          id: "asoc-u1-rv-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways a researcher can improve the reliability of a study.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Improving reliability",
                statement: "Pilot studies, standardised questions, replication.",
              },
            ],
            steps: [
              {
                reasoning: "Pilot study to test questions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Standardised/structured questions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Replicate the study to check consistency.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Pilot study, standardised questions, replication.",
            commonErrors: ["Describing validity instead."],
          },
        },
        {
          id: "asoc-u1-rv-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Discuss the ethical problems of covert participant observation in sociological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Covert observation ethics",
                statement: "Deception vs natural behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Participants cannot give informed consent.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Deception may cause distress/harm.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Confidentiality and anonymity issues.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Justified: natural behaviour, avoids Hawthorne effect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Right to withdraw impossible once identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Developed, balanced discussion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Covert observation raises consent, deception and harm issues but yields natural behaviour.",
            commonErrors: ["One-sided judgement without justification."],
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
