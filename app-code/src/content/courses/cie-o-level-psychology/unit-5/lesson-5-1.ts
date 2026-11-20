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
              {
                id: "a",
                text: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
              },
              { id: "b", text: "Id, Ego, Superego, Unconscious, Conscious" },
              { id: "c", text: "Sensory, Motor, Cognitive, Emotional, Social" },
              {
                id: "d",
                text: "Introvert, Extrovert, Ambivert, Assertive, Passive",
              },
            ],
            correctChoiceId: "a",
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
              "**(a)** Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
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
              { id: "a", text: "Fulfilling one's potential (top need)" },
              { id: "b", text: "Basic survival needs" },
              { id: "c", text: "Social belonging" },
              { id: "d", text: "Physical safety" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Fulfilling one's potential (top need)",
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
