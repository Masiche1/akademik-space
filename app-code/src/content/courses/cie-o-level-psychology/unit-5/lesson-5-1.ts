import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "olep-u5-lesson-5-1",
  code: "5-1",
  title: "Personality Theories",
  goal: "I CAN describe trait, psychodynamic and humanistic theories of personality.",
  standards: ["2219: Individual differences"],
  vocabulary: [
    {
      term: "Personality",
      definition: "Consistent patterns of thoughts, feelings and behaviour.",
    },
    {
      term: "Trait",
      definition: "Stable characteristic disposition (e.g., extraversion).",
    },
    {
      term: "Id, ego, superego",
      definition: "Freud's three personality structures.",
    },
    { term: "Unconscious", definition: "Mental processes outside awareness." },
    {
      term: "Self-actualisation",
      definition: "Rogers' drive to fulfil potential.",
    },
    {
      term: "Personality test",
      definition: "Standardised measure of personality traits.",
    },
  ],
  concepts: [
    {
      id: "olep-u5-personality-theories",
      title: "Trait and Psychodynamic Theories",
      skill: "Describe trait theory and Freud's psychodynamic model.",
      lesson: {
        sections: [
          {
            heading: "Trait theory",
            body: "Personality = combination of traits (stable characteristics). Eysenck's PEN model: Psychoticism, Extraversion, Neuroticism — two dimensions. Big Five: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism (OCEAN). Measured by questionnaires — Eysenck Personality Questionnaire, NEO-PI.",
          },
          {
            heading: "Freud's model",
            body: "Id: instinctive desires ('pleasure principle'). Ego: rational mediator ('reality principle'). Superego: conscience/morality. Defence mechanisms protect ego from anxiety — repression, denial, projection, rationalisation. Personality formed in childhood psychosexual stages (oral, anal, phallic, latency, genital).",
          },
          {
            heading: "Evaluation",
            body: "Traits: measurable, reliable, predictive — but may be culturally biased. Freud: influential but unfalsifiable, male-biased, overemphasises sexuality — criticized as unscientific. Modern view combines biological, cognitive and social factors.",
          },
        ],
        keyFormulas: [
          {
            name: "Personality",
            statement:
              "Traits: Big Five/Eysenck PEN; Freud: id/ego/superego+defence mechanisms.",
          },
        ],
        workedExample: {
          problem: "What are Freud's three personality structures?",
          solution:
            "Id (instinctive desires), ego (rational mediator), superego (conscience) — conflict between them creates anxiety managed by defence mechanisms.",
        },
      },
      questions: [
        {
          id: "olep-u5-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the Big Five traits?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensory, Motor, Cognitive, Emotional, Social" },
              {
                id: "b",
                text: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
              },
              { id: "c", text: "Id, Ego, Superego, Unconscious, Conscious" },
              {
                id: "d",
                text: "Introvert, Extrovert, Ambivert, Assertive, Passive",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Big Five",
                statement: "OCEAN traits.",
              },
            ],
            steps: [{ reasoning: "OCEAN model.", marks: 1, markCode: "AO1" }],
            finalAnswer:
              "**(b)** Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
            commonErrors: ["Confusing with Freud's structures."],
          },
        },
        {
          id: "olep-u5-pt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name Freud's three personality structures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Freud structures",
                statement: "Id, ego, superego.",
              },
            ],
            steps: [
              { reasoning: "Any two named.", marks: 1, markCode: "AO1" },
              { reasoning: "All three correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Id (instincts), ego (rational mediator), superego (conscience).",
            commonErrors: ["Missing one."],
          },
        },
        {
          id: "olep-u5-pt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is a defence mechanism? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Defence mechanisms",
                statement: "Protect ego from anxiety.",
              },
            ],
            steps: [
              {
                reasoning: "Unconscious protection from anxiety.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example: repression/denial/projection.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Correctly described.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Unconscious strategies protecting ego from anxiety — e.g., repression (burying memories), denial (refusing reality), projection (blaming others).",
            commonErrors: ["Vague definition."],
          },
        },
        {
          id: "olep-u5-pt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Personality theories.",
          parts: [
            { label: "a", prompt: "Trait theory?", marks: 2 },
            { label: "b", prompt: "Big Five?", marks: 2 },
            { label: "c", prompt: "Freud's model?", marks: 3 },
            { label: "d", prompt: "Evaluation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Personality",
                statement: "Traits+Freud+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Traits define personality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Measurable via tests.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "OCEAN named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Five traits correct.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Id/ego/superego.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Defence mechanisms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Stages mentioned.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Traits measurable but biased.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Freud unfalsifiable.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) traits (b) Big Five (c) Freud (d) evaluation",
          },
        },
        {
          id: "olep-u5-pt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is NOT one of Freud's three personality structures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ego" },
              { id: "b", text: "The unconscious" },
              { id: "c", text: "Superego" },
              { id: "d", text: "Id" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Freud structures",
                statement: "Id, ego, superego.",
              },
            ],
            steps: [{ reasoning: "Unconscious is a mental process, not a structure.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** The unconscious",
            commonErrors: ["Confusing the unconscious with the superego."],
          },
        },
        {
          id: "olep-u5-pt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Eysenck's PEN model refers to which three dimensions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Psychoticism, Extraversion, Neuroticism" },
              { id: "b", text: "Pessimism, Ego, Narcissism" },
              { id: "c", text: "Positive, Negative, Neutral" },
              { id: "d", text: "Personality, Emotion, Needs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PEN model",
                statement: "Psychoticism, Extraversion, Neuroticism.",
              },
            ],
            steps: [{ reasoning: "PEN acronym.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Psychoticism, Extraversion, Neuroticism",
            commonErrors: ["Confusing with the Big Five."],
          },
        },
        {
          id: "olep-u5-pt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many trait dimensions does the Big Five (OCEAN) model propose?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Big Five",
                statement: "Five trait dimensions (OCEAN).",
              },
            ],
            steps: [{ reasoning: "O, C, E, A, N = 5 traits.", marks: 1, markCode: "AO1" }],
            finalAnswer: "5",
            commonErrors: ["Counting Eysenck's 3 dimensions instead."],
          },
        },
        {
          id: "olep-u5-pt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the number of dimensions in (a) the Big Five model and (b) Eysenck's PEN model.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trait models",
                statement: "Big Five = 5; PEN = 3.",
              },
            ],
            steps: [
              { reasoning: "Big Five has five traits.", marks: 1, markCode: "AO1" },
              { reasoning: "PEN has three dimensions.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 5 (b) 3",
            commonErrors: ["Swapping the two models."],
          },
        },
        {
          id: "olep-u5-pt-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The ego is best described as the part of personality that...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "drives the need for self-actualisation" },
              { id: "b", text: "mediates between the id and superego using reality" },
              { id: "c", text: "represents moral conscience and guilt" },
              { id: "d", text: "seeks instant gratification of desires" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ego",
                statement: "Rational mediator on the reality principle.",
              },
            ],
            steps: [
              { reasoning: "Ego = reality principle mediator.", marks: 1, markCode: "AO1" },
              { reasoning: "It balances id and superego demands.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** mediates between the id and superego using reality",
            commonErrors: ["Confusing ego with id or superego."],
          },
        },
        {
          id: "olep-u5-pt-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many psychosexual stages did Freud propose?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Psychosexual stages",
                statement: "Oral, anal, phallic, latency, genital.",
              },
            ],
            steps: [
              { reasoning: "Five stages named.", marks: 1, markCode: "AO1" },
              { reasoning: "Oral, anal, phallic, latency, genital = 5.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "5",
            commonErrors: ["Forgetting the latency stage."],
          },
        },
        {
          id: "olep-u5-pt-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Projection as a defence mechanism involves...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "attributing one's own unacceptable feelings to others" },
              { id: "b", text: "burying painful memories in the unconscious" },
              { id: "c", text: "refusing to accept an unpleasant reality" },
              { id: "d", text: "creating logical-sounding excuses for behaviour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Projection",
                statement: "Attributing own feelings to others.",
              },
            ],
            steps: [
              { reasoning: "Projection = attributing own traits to others.", marks: 1, markCode: "AO1" },
              { reasoning: "Protects ego from anxiety.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** attributing one's own unacceptable feelings to others",
            commonErrors: ["Confusing projection with denial."],
          },
        },
        {
          id: "olep-u5-pt-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the number of (a) components in Freud's structural model, (b) psychosexual stages, and (c) trait dimensions in the Big Five model.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 5 },
              { label: "c", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Freud 3 structures/5 stages; Big Five 5 traits.",
              },
            ],
            steps: [
              { reasoning: "Id, ego, superego = 3.", marks: 1, markCode: "AO1" },
              { reasoning: "Five psychosexual stages.", marks: 1, markCode: "AO1" },
              { reasoning: "OCEAN = 5 traits.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 5 (c) 5",
            commonErrors: ["Mixing up counts across theories."],
          },
        },
        {
          id: "olep-u5-pt-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Freud's theory of personality is often criticised as unscientific mainly because it is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "too simple to explain behaviour" },
              { id: "b", text: "easily measured and reliably tested" },
              { id: "c", text: "unfalsifiable — it makes no testable predictions" },
              { id: "d", text: "based on twin study evidence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Falsifiability",
                statement: "Scientific theories must make testable predictions.",
              },
            ],
            steps: [
              { reasoning: "Freud's claims cannot be tested.", marks: 1, markCode: "AO1" },
              { reasoning: "This is the key scientific criticism.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** unfalsifiable — it makes no testable predictions",
            commonErrors: ["Citing measurement problems instead."],
          },
        },
        {
          id: "olep-u5-pt-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the number of trait dimensions in (a) the Big Five model, (b) Eysenck's PEN model, and (c) Freud's structural model.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 3 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Model sizes",
                statement: "Big Five 5; PEN 3; Freud structures 3.",
              },
            ],
            steps: [
              { reasoning: "OCEAN = 5.", marks: 1, markCode: "AO1" },
              { reasoning: "PEN = 3.", marks: 1, markCode: "AO1" },
              { reasoning: "Id/ego/superego = 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 5 (b) 3 (c) 3",
            commonErrors: ["Confusing trait models with Freud's structures."],
          },
        },
        {
          id: "olep-u5-pt-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Rationalisation, as a defence mechanism, involves...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "blaming others for one's own faults" },
              { id: "b", text: "burying anxiety-provoking memories" },
              { id: "c", text: "giving oneself logical-sounding justifications for unacceptable behaviour" },
              { id: "d", text: "refusing to accept reality" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rationalisation",
                statement: "Logical excuses for irrational behaviour.",
              },
            ],
            steps: [
              { reasoning: "Rationalisation = self-justification.", marks: 1, markCode: "AO1" },
              { reasoning: "Protects ego from guilt/anxiety.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** giving oneself logical-sounding justifications for unacceptable behaviour",
            commonErrors: ["Confusing with projection or denial."],
          },
        },
        {
          id: "olep-u5-pt-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate Freud's psychodynamic theory of personality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Freud evaluation",
                statement: "Influential but unfalsifiable and biased.",
              },
            ],
            steps: [
              {
                reasoning: "Highly influential on therapy and culture.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Unfalsifiable, male-biased, overemphasises sexuality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Key concepts untestable scientifically.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weighed judgement — modern view is integrative.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Freud's model was hugely influential but is criticised as unfalsifiable, male-biased and over-focused on sexuality; modern personality psychology combines biological, cognitive and social factors.",
            commonErrors: ["One-sided evaluation."],
          },
        },
      ],
    },
    {
      id: "olep-u5-humanistic",
      title: "Humanistic Theory and Personality Tests",
      skill:
        "Describe Rogers' and Maslow's theories and personality assessment.",
      lesson: {
        sections: [
          {
            heading: "Rogers' theory",
            body: "Carl Rogers — humanistic psychology. Self-concept: how we see ourselves. Unconditional positive regard: acceptance without conditions → healthy self-esteem. Congruence: alignment between real and ideal self → mental health. Conditions of worth: conditional acceptance → low self-esteem, anxiety.",
          },
          {
            heading: "Maslow's hierarchy",
            body: "Abraham Maslow — hierarchy of needs: physiological → safety → love/belonging → esteem → self-actualisation (top). Lower needs must be met before higher. Self-actualised people: realistic, spontaneous, problem-centred, autonomous, peak experiences.",
          },
          {
            heading: "Personality tests",
            body: "Questionnaires: Eysenck Personality Questionnaire (EPQ), NEO-PI (Big Five), MMPI (clinical). Projective tests: Rorschach inkblots, TAT (Thematic Apperception Test) — ambiguous stimuli reveal unconscious. Limitations: self-report bias, cultural bias, reliability issues.",
          },
        ],
        keyFormulas: [
          {
            name: "Humanistic",
            statement:
              "Rogers: unconditional regard+congruence; Maslow: hierarchy→self-actualisation.",
          },
        ],
        workedExample: {
          problem: "What is unconditional positive regard?",
          solution:
            "Rogers' concept — accepting person regardless of their behaviour; fosters healthy self-esteem and growth.",
        },
      },
      questions: [
        {
          id: "olep-u5-hh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is self-actualisation in Maslow's hierarchy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Physical safety" },
              { id: "b", text: "Basic survival needs" },
              { id: "c", text: "Social belonging" },
              { id: "d", text: "Fulfilling one's potential (top need)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Self-actualisation",
                statement: "Top of Maslow's hierarchy.",
              },
            ],
            steps: [{ reasoning: "Top need.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** Fulfilling one's potential (top need)",
            commonErrors: ["Confusing with lower needs."],
          },
        },
        {
          id: "olep-u5-hh-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is unconditional positive regard?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UPR",
                statement: "Acceptance without conditions.",
              },
            ],
            steps: [
              {
                reasoning: "Acceptance regardless of behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Fosters healthy self-esteem.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Rogers' concept — accepting a person without conditions, fostering healthy self-esteem and personal growth.",
            commonErrors: ["Conditional acceptance."],
          },
        },
        {
          id: "olep-u5-hh-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare questionnaire and projective personality tests.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Test types",
                statement: "Questionnaire vs projective.",
              },
            ],
            steps: [
              {
                reasoning: "Questionnaire: structured self-report.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Projective: ambiguous stimuli (Rorschach).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reliability/objectivity differences.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Questionnaires are structured self-reports (EPQ, NEO) — objective but biased; projective tests use ambiguous stimuli (Rorschach, TAT) — subjective interpretation.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "olep-u5-hh-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Humanistic theory and tests.",
          parts: [
            { label: "a", prompt: "Rogers' key concepts?", marks: 3 },
            { label: "b", prompt: "Maslow's hierarchy?", marks: 2 },
            { label: "c", prompt: "Questionnaire tests?", marks: 2 },
            { label: "d", prompt: "Projective tests?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Humanistic",
                statement: "Rogers+Maslow+tests.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "UPR/congruence/self-concept.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Conditions of worth.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Hierarchy levels.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Self-actualisation top.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "EPQ/NEO/MMPI.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Structured self-report.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Rorschach/TAT.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Ambiguous stimuli.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) Rogers (b) Maslow (c) questionnaires (d) projective",
          },
        },
        {
          id: "olep-u5-hh-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who proposed the concept of unconditional positive regard?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sigmund Freud" },
              { id: "b", text: "B.F. Skinner" },
              { id: "c", text: "Carl Rogers" },
              { id: "d", text: "Ivan Pavlov" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rogers",
                statement: "Humanistic psychologist — unconditional positive regard.",
              },
            ],
            steps: [{ reasoning: "Rogers' client-centred theory.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** Carl Rogers",
            commonErrors: ["Confusing with Freud or behaviourists."],
          },
        },
        {
          id: "olep-u5-hh-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which need is at the top of Maslow's hierarchy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Safety needs" },
              { id: "b", text: "Esteem needs" },
              { id: "c", text: "Self-actualisation" },
              { id: "d", text: "Physiological needs" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maslow hierarchy",
                statement: "Self-actualisation is the highest need.",
              },
            ],
            steps: [{ reasoning: "Top of the hierarchy.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** Self-actualisation",
            commonErrors: ["Choosing a lower-level need."],
          },
        },
        {
          id: "olep-u5-hh-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many levels are typically shown in Maslow's hierarchy of needs?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hierarchy levels",
                statement: "Physiological, safety, love/belonging, esteem, self-actualisation.",
              },
            ],
            steps: [{ reasoning: "Five need levels.", marks: 1, markCode: "AO1" }],
            finalAnswer: "5",
            commonErrors: ["Omitting one level."],
          },
        },
        {
          id: "olep-u5-hh-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of levels in Maslow's hierarchy and (b) the number of levels below self-actualisation.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hierarchy",
                statement: "5 levels; 4 below self-actualisation.",
              },
            ],
            steps: [
              { reasoning: "Five levels total.", marks: 1, markCode: "AO1" },
              { reasoning: "Self-actualisation is the top, leaving 4 below.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 5 (b) 4",
            commonErrors: ["Counting self-actualisation in part (b)."],
          },
        },
        {
          id: "olep-u5-hh-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Conditions of worth, in Rogers' theory, tend to produce...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "high self-esteem and autonomy" },
              { id: "b", text: "low self-esteem and anxiety" },
              { id: "c", text: "rapid personal growth" },
              { id: "d", text: "unconditional self-acceptance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conditions of worth",
                statement: "Conditional acceptance lowers self-esteem.",
              },
            ],
            steps: [
              { reasoning: "Conditions of worth = conditional acceptance.", marks: 1, markCode: "AO1" },
              { reasoning: "Leads to low self-esteem/anxiety.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** low self-esteem and anxiety",
            commonErrors: ["Confusing with unconditional positive regard."],
          },
        },
        {
          id: "olep-u5-hh-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of need levels in Maslow's hierarchy and (b) the number of 'selves' Rogers compares (real and ideal).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rogers/Maslow counts",
                statement: "5 need levels; real vs ideal self = 2.",
              },
            ],
            steps: [
              { reasoning: "Five levels in the hierarchy.", marks: 1, markCode: "AO1" },
              { reasoning: "Real self and ideal self.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 5 (b) 2",
            commonErrors: ["Miscounting hierarchy levels."],
          },
        },
        {
          id: "olep-u5-hh-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Thematic Apperception Test (TAT) is an example of which type of personality test?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A projective test" },
              { id: "b", text: "An intelligence test" },
              { id: "c", text: "A standardised ability test" },
              { id: "d", text: "A structured self-report questionnaire" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "TAT",
                statement: "Projective test using ambiguous pictures.",
              },
            ],
            steps: [
              { reasoning: "TAT uses ambiguous stimuli.", marks: 1, markCode: "AO1" },
              { reasoning: "That makes it projective.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** A projective test",
            commonErrors: ["Confusing with questionnaire tests like the EPQ."],
          },
        },
        {
          id: "olep-u5-hh-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the number of (a) levels in Maslow's hierarchy, (b) traits in the Big Five model, and (c) 'selves' Rogers compares.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 5 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Humanistic counts",
                statement: "Maslow 5; Big Five 5; real/ideal self 2.",
              },
            ],
            steps: [
              { reasoning: "Five need levels.", marks: 1, markCode: "AO1" },
              { reasoning: "Five OCEAN traits.", marks: 1, markCode: "AO1" },
              { reasoning: "Real self and ideal self.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 5 (b) 5 (c) 2",
            commonErrors: ["Mixing up the theories."],
          },
        },
        {
          id: "olep-u5-hh-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Social desirability bias in self-report personality tests means that respondents...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "give answers that make them look good" },
              { id: "b", text: "answer completely honestly" },
              { id: "c", text: "cannot understand the questions" },
              { id: "d", text: "always choose the middle option" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social desirability bias",
                statement: "Responses shaped to look favourable.",
              },
            ],
            steps: [
              { reasoning: "People present themselves positively.", marks: 1, markCode: "AO1" },
              { reasoning: "This distorts self-report data.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** give answers that make them look good",
            commonErrors: ["Confusing with random responding."],
          },
        },
        {
          id: "olep-u5-hh-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the number of (a) need levels in Maslow's hierarchy, (b) 'selves' Rogers compares, and (c) projective tests named in the lesson (Rorschach, TAT).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 2 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Maslow 5; selves 2; projective tests 2.",
              },
            ],
            steps: [
              { reasoning: "Five need levels.", marks: 1, markCode: "AO1" },
              { reasoning: "Real and ideal self.", marks: 1, markCode: "AO1" },
              { reasoning: "Rorschach and TAT.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 5 (b) 2 (c) 2",
            commonErrors: ["Counting questionnaire tests as projective."],
          },
        },
        {
          id: "olep-u5-hh-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Projective tests like the Rorschach are considered less reliable than questionnaires mainly because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "they are only used with children" },
              { id: "b", text: "they take too long to administer" },
              { id: "c", text: "they are scored completely objectively" },
              { id: "d", text: "interpretation of responses is subjective and varies between scorers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Projective test reliability",
                statement: "Subjective scoring lowers reliability.",
              },
            ],
            steps: [
              { reasoning: "Ambiguous stimuli need interpretation.", marks: 1, markCode: "AO1" },
              { reasoning: "Scorer subjectivity reduces reliability.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** interpretation of responses is subjective and varies between scorers",
            commonErrors: ["Claiming projective tests are objective."],
          },
        },
        {
          id: "olep-u5-hh-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of projective tests in personality assessment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Projective tests",
                statement: "Reveal unconscious but unreliable.",
              },
            ],
            steps: [
              {
                reasoning: "Ambiguous stimuli may reveal unconscious processes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Examples: Rorschach inkblots, TAT pictures.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Subjective scoring — poor reliability/objectivity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weighed judgement — limited clinical use.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Projective tests use ambiguous stimuli (Rorschach, TAT) to reveal unconscious conflicts, but subjective interpretation makes them unreliable compared with standardised questionnaires.",
            commonErrors: ["One-sided evaluation."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u5-5-1-notes",
      title: "Personality — notes",
      summary:
        "Trait theory (Big Five/Eysenck), Freud's model, Rogers/Maslow, personality tests.",
      sections: [
        {
          heading: "Theories",
          body: "Traits=OCEAN/PEN; Freud=id/ego/superego+defences; Rogers=UPR+congruence; Maslow=hierarchy.",
        },
        {
          heading: "Tests",
          body: "Questionnaires (EPQ, NEO, MMPI) vs projective (Rorschach, TAT); limitations.",
        },
      ],
    },
  ],
};
