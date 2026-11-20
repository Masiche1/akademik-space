import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "olep-u5-lesson-5-3",
  code: "5-3",
  title: "Individual Differences Summary",
  goal: "I CAN summarise personality and intelligence and evaluate their measurement.",
  standards: ["2219: Individual differences"],
  vocabulary: [
    {
      term: "Reliability",
      definition: "Consistency of test results over time.",
    },
    { term: "Validity", definition: "Whether test measures what it claims." },
    {
      term: "Standardisation",
      definition: "Consistent administration and scoring.",
    },
    { term: "Norms", definition: "Average scores for comparison groups." },
    { term: "Cultural bias", definition: "Test unfairly favours one culture." },
    {
      term: "Self-fulfilling prophecy",
      definition: "Expectations affecting performance.",
    },
  ],
  concepts: [
    {
      id: "olep-u5-measurement",
      title: "Psychological Measurement",
      skill:
        "Evaluate reliability, validity and bias in personality/intelligence tests.",
      lesson: {
        sections: [
          {
            heading: "Reliability and validity",
            body: "Reliability: test gives consistent results — test-retest (same test twice), inter-rater (different scorers agree). Validity: measures intended construct — face validity (looks right), criterion validity (predicts real outcomes), construct validity (measures theory). Good test needs both.",
          },
          {
            heading: "Biases and limitations",
            body: "Cultural bias: tests developed in Western culture may disadvantage others. Self-report bias: people lie or self-enhance. Social desirability: answers reflect what sounds good. Stereotype threat: awareness of negative stereotypes hurts performance. IQ tests criticised for narrow definition of intelligence.",
          },
          {
            heading: "Uses and ethics",
            body: "IQ tests used for education placement, diagnosis (intellectual disability), research. Personality tests in hiring, clinical assessment. Ethical concerns: labelling, self-fulfilling prophecy, misuse of scores. APA ethical guidelines require informed consent, confidentiality.",
          },
        ],
        keyFormulas: [
          {
            name: "Measurement",
            statement:
              "Reliability=consistent; Validity=measures right thing; biases=cultural/self-report/stereotype.",
          },
        ],
        workedExample: {
          problem: "Why might an IQ test be culturally biased?",
          solution:
            "Questions assume Western knowledge/norms — vocabulary, cultural references, test-taking experience differ across cultures, disadvantaging some groups.",
        },
      },
      questions: [
        {
          id: "olep-u5-mm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is reliability in psychological testing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Consistency of results" },
              { id: "b", text: "Accuracy of measurement" },
              { id: "c", text: "Cultural fairness" },
              { id: "d", text: "Test difficulty" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability",
                statement: "Consistent results.",
              },
            ],
            steps: [{ reasoning: "Consistency.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Consistency of results",
            commonErrors: ["Confusing with validity."],
          },
        },
        {
          id: "olep-u5-mm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish reliability from validity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability/validity",
                statement: "Consistent vs measures correctly.",
              },
            ],
            steps: [
              {
                reasoning: "Reliability = consistent.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Validity = measures intended.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Reliability = consistent results; validity = measures what it claims to measure.",
            commonErrors: ["Swapping them."],
          },
        },
        {
          id: "olep-u5-mm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is stereotype threat and how does it affect test performance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stereotype threat",
                statement:
                  "Anxiety from negative stereotypes hurts performance.",
              },
            ],
            steps: [
              {
                reasoning: "Awareness of negative stereotype.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Causes anxiety/interference.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Lowers test performance.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Fear of confirming negative stereotypes causes anxiety that interferes with performance — e.g., women underperforming in maths when reminded of gender stereotypes.",
            commonErrors: ["Vague answer."],
          },
        },
        {
          id: "olep-u5-mm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Psychological measurement.",
          parts: [
            { label: "a", prompt: "Reliability?", marks: 2 },
            { label: "b", prompt: "Validity?", marks: 2 },
            { label: "c", prompt: "Biases?", marks: 3 },
            { label: "d", prompt: "Ethics?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Measurement",
                statement: "Reliability+validity+bias+ethics.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Consistent results.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Test-retest/inter-rater.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Measures intended.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Face/criterion/construct.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Cultural bias.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Self-report/social desirability.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Stereotype threat.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Labelling/self-fulfilling prophecy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Informed consent/confidentiality.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) reliability (b) validity (c) biases (d) ethics",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u5-5-3-notes",
      title: "Measurement — notes",
      summary:
        "Reliability/validity, biases, ethics of personality and intelligence testing.",
      sections: [
        {
          heading: "Quality",
          body: "Reliability=consistent; validity=measures correctly; standardisation/norms needed.",
        },
        {
          heading: "Issues",
          body: "Cultural bias; self-report/social desirability; stereotype threat; labelling/ethics.",
        },
      ],
    },
  ],
};
