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
              { id: "a", text: "Test difficulty" },
              { id: "b", text: "Consistency of results" },
              { id: "c", text: "Accuracy of measurement" },
              { id: "d", text: "Cultural fairness" },
            ],
            correctChoiceId: "b",
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
        {
          id: "olep-u5-mm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Test-retest reliability is assessed by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "checking whether scores predict exam results" },
              { id: "b", text: "asking experts if the test looks right" },
              { id: "c", text: "giving the test once to a large sample" },
              { id: "d", text: "giving the same test twice and comparing the scores" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Test-retest reliability",
                statement: "Consistency of scores over time.",
              },
            ],
            steps: [{ reasoning: "Same test administered twice.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** giving the same test twice and comparing the scores",
            commonErrors: ["Confusing with validity checks."],
          },
        },
        {
          id: "olep-u5-mm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Criterion validity refers to whether a test...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "is easy to score" },
              { id: "b", text: "gives consistent scores" },
              { id: "c", text: "looks appropriate to test-takers" },
              { id: "d", text: "predicts real-world outcomes or behaviours" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Criterion validity",
                statement: "Predicts real-world criteria.",
              },
            ],
            steps: [{ reasoning: "Criterion = external outcome.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** predicts real-world outcomes or behaviours",
            commonErrors: ["Confusing with face validity."],
          },
        },
        {
          id: "olep-u5-mm-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many types of validity are named in the lesson (face, criterion, construct)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Validity types",
                statement: "Face, criterion, construct.",
              },
            ],
            steps: [{ reasoning: "Three types named.", marks: 1, markCode: "AO1" }],
            finalAnswer: "3",
            commonErrors: ["Omitting one type."],
          },
        },
        {
          id: "olep-u5-mm-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of types of validity and (b) the number of types of reliability named in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Test qualities",
                statement: "Validity: 3 types; reliability: 2 types.",
              },
            ],
            steps: [
              { reasoning: "Face, criterion, construct = 3.", marks: 1, markCode: "AO1" },
              { reasoning: "Test-retest, inter-rater = 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 2",
            commonErrors: ["Swapping the two counts."],
          },
        },
        {
          id: "olep-u5-mm-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Inter-rater reliability concerns...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "whether the test predicts exam success" },
              { id: "b", text: "whether different scorers agree on the same responses" },
              { id: "c", text: "whether the same person scores consistently over time" },
              { id: "d", text: "whether the questions are culturally fair" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inter-rater reliability",
                statement: "Agreement between different scorers.",
              },
            ],
            steps: [
              { reasoning: "Inter-rater = between raters.", marks: 1, markCode: "AO1" },
              { reasoning: "Used for subjective tests like projectives.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** whether different scorers agree on the same responses",
            commonErrors: ["Confusing with test-retest reliability."],
          },
        },
        {
          id: "olep-u5-mm-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of types of validity and (b) the number of bias types named in the lesson (cultural, self-report, social desirability, stereotype threat).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Measurement counts",
                statement: "Validity 3; bias types 4.",
              },
            ],
            steps: [
              { reasoning: "Three validity types.", marks: 1, markCode: "AO1" },
              { reasoning: "Four bias types listed.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 4",
            commonErrors: ["Missing one bias type."],
          },
        },
        {
          id: "olep-u5-mm-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Standardisation of a psychological test requires...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "letting each examiner score freely" },
              { id: "b", text: "changing questions between sittings" },
              { id: "c", text: "different instructions for different groups" },
              { id: "d", text: "the same instructions, conditions and scoring for all test-takers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standardisation",
                statement: "Consistent administration and scoring.",
              },
            ],
            steps: [
              { reasoning: "Same conditions for everyone.", marks: 1, markCode: "AO1" },
              { reasoning: "Allows fair comparison via norms.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** the same instructions, conditions and scoring for all test-takers",
            commonErrors: ["Confusing with reliability."],
          },
        },
        {
          id: "olep-u5-mm-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the number of (a) types of validity, (b) types of reliability, and (c) bias types named in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
              { label: "c", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Measurement counts",
                statement: "Validity 3; reliability 2; biases 4.",
              },
            ],
            steps: [
              { reasoning: "Face, criterion, construct.", marks: 1, markCode: "AO1" },
              { reasoning: "Test-retest, inter-rater.", marks: 1, markCode: "AO1" },
              { reasoning: "Cultural, self-report, social desirability, stereotype threat.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 2 (c) 4",
            commonErrors: ["Mixing up the categories."],
          },
        },
        {
          id: "olep-u5-mm-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A self-fulfilling prophecy in psychological testing occurs when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "scores are compared to cultural norms" },
              { id: "b", text: "low expectations cause the person to perform worse, confirming the label" },
              { id: "c", text: "test scores accurately predict performance" },
              { id: "d", text: "the test is given twice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Self-fulfilling prophecy",
                statement: "Expectations shape performance.",
              },
            ],
            steps: [
              { reasoning: "Labels/expectations affect behaviour.", marks: 1, markCode: "AO1" },
              { reasoning: "Performance then confirms the expectation.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** low expectations cause the person to perform worse, confirming the label",
            commonErrors: ["Confusing with stereotype threat mechanics."],
          },
        },
        {
          id: "olep-u5-mm-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the number of (a) types of validity, (b) ethical requirements named (informed consent, confidentiality), and (c) bias types.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
              { label: "c", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Validity 3; ethics 2; biases 4.",
              },
            ],
            steps: [
              { reasoning: "Three validity types.", marks: 1, markCode: "AO1" },
              { reasoning: "Informed consent and confidentiality.", marks: 1, markCode: "AO1" },
              { reasoning: "Four bias types.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 2 (c) 4",
            commonErrors: ["Forgetting confidentiality as an ethical requirement."],
          },
        },
        {
          id: "olep-u5-mm-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An IQ test may have limited construct validity for the concept of 'intelligence' because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "it may only measure general cognitive ability, not all forms of intelligence" },
              { id: "b", text: "it is free from cultural bias" },
              { id: "c", text: "it is too easy to administer" },
              { id: "d", text: "it is unreliable over time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Construct validity",
                statement: "Test should measure the whole construct.",
              },
            ],
            steps: [
              { reasoning: "IQ tests target general ability (g).", marks: 1, markCode: "AO1" },
              { reasoning: "Intelligence is broader (e.g., MI).", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** it may only measure general cognitive ability, not all forms of intelligence",
            commonErrors: ["Confusing validity with reliability."],
          },
        },
        {
          id: "olep-u5-mm-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the ethics of using personality tests in employment selection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Testing ethics",
                statement: "Usefulness vs labelling and consent issues.",
              },
            ],
            steps: [
              {
                reasoning: "Tests may predict job performance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Risks: labelling, self-fulfilling prophecy, bias.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Informed consent/confidentiality required.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weighed judgement — use with caution.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Personality tests can aid selection but risk labelling, self-fulfilling prophecy and cultural bias; ethical use requires informed consent, confidentiality and awareness of test limitations.",
            commonErrors: ["One-sided evaluation."],
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
