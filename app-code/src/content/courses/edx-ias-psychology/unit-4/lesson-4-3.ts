import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "eias-psych-u4-lesson-4-3",
  code: "4-3",
  title: "Schizophrenia and Treatment Evaluation",
  goal: "I CAN describe schizophrenia and evaluate treatment approaches.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 4 — Psychopathology"],
  vocabulary: [
    {
      term: "Schizophrenia",
      definition:
        "Severe mental disorder — distorted thinking, perception, behaviour.",
    },
    {
      term: "Positive symptoms",
      definition: "Hallucinations, delusions — added experiences.",
    },
    {
      term: "Negative symptoms",
      definition: "Apathy, social withdrawal — loss of function.",
    },
    {
      term: "Dopamine hypothesis",
      definition: "Excess dopamine → positive symptoms.",
    },
    { term: "Relapse", definition: "Return of symptoms after improvement." },
    {
      term: "Placebo effect",
      definition: "Improvement from belief in treatment, not treatment itself.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u4-schizophrenia",
      title: "Schizophrenia",
      skill: "Describe symptoms and biological explanations.",
      lesson: {
        sections: [
          {
            heading: "Symptoms",
            body: "**Positive**: hallucinations (hearing/seeing things), delusions (false beliefs — persecution, grandeur), disorganised speech/behaviour. **Negative**: apathy, social withdrawal, flat affect, poverty of speech.\n\n**Diagnosis**: ≥1 month active symptoms (or 6 months total) — DSM-5.",
          },
          {
            heading: "Explanations",
            body: "**Dopamine hypothesis**: excess dopamine → positive symptoms; low dopamine → negative. **Genetic**: family history increases risk — heritability ~80%. **Neurodevelopmental**: brain development disrupted — prenatal factors. **Stress-diathesis**: genetic vulnerability + environmental stress triggers.\n\n**Evaluation**: dopamine hypothesis supported by drug effects but oversimplified — other neurotransmitters involved.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Patient hears voices, believes FBI is watching them, shows little emotion. Symptoms?",
          solution:
            "Positive (hallucinations, delusions) + negative (flat affect).",
        },
      },
      questions: [
        {
          id: "eias-psych-u4-sch-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are positive symptoms of schizophrenia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Depression" },
              { id: "b", text: "Anxiety" },
              { id: "c", text: "Apathy, withdrawal" },
              { id: "d", text: "Hallucinations, delusions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Positive symptoms",
                statement: "Added experiences.",
              },
            ],
            steps: [
              {
                reasoning: "Positive = hallucinations + delusions.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Hallucinations+delusions",
            commonErrors: ["Negative confused."],
          },
        },
        {
          id: "eias-psych-u4-sch-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two negative symptoms of schizophrenia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative symptoms",
                statement: "Loss of function.",
              },
            ],
            steps: [
              {
                reasoning: "Apathy — lack of motivation/emotion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Social withdrawal — avoids interaction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Poverty of speech — reduced talking.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Apathy, withdrawal, poverty of speech.",
            commonErrors: ["Positive.", "Only one."],
          },
        },
        {
          id: "eias-psych-u4-sch-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the dopamine hypothesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dopamine hypothesis",
                statement: "Neurotransmitter imbalance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Excess dopamine → positive symptoms (hallucinations, delusions).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Low dopamine → negative symptoms (apathy, withdrawal).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Supported by drugs — antipsychotics block dopamine.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Oversimplified — other neurotransmitters involved.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Dopamine imbalance → symptoms.",
            commonErrors: ["Only positive.", "No drug link."],
          },
        },
        {
          id: "eias-psych-u4-sch-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A patient has schizophrenia and family history of mental illness.",
          parts: [
            { label: "a", prompt: "Explain genetic risk.", marks: 4 },
            { label: "b", prompt: "Explain stress-diathesis model.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Schizophrenia aetiology",
                statement: "Genes + stress.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Heritability ~80% — genes contribute significantly.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Family history increases risk but doesn't guarantee.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Diathesis = genetic vulnerability; stress = trigger.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Vulnerable + stressed → symptoms emerge.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) heritability (b) diathesis+stress",
            commonErrors: ["Environment only.", "No model."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u4-treatment-eval",
      title: "Evaluating Treatments",
      skill: "Evaluate drug and psychological treatments for mental disorders.",
      lesson: {
        sections: [
          {
            heading: "Drug treatment evaluation",
            body: "**Strengths**: effective symptom relief — especially severe disorders; fast-acting; can stabilise for therapy. **Weaknesses**: side effects (weight gain, sedation); doesn't address causes; relapse on discontinuation; ethical concerns (forced medication).\n\n**Placebo effect**: some improvement from belief — drug trials must control for this.",
          },
          {
            heading: "Psychological treatment evaluation",
            body: "**Strengths**: addresses causes not just symptoms; no side effects; empowers patient; evidence for CBT. **Weaknesses**: requires motivation; time-consuming; may not suit severe disorders; costly; therapist effects.\n\n**Combined approach**: drugs + therapy often best — medication stabilises, therapy addresses causes.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Patient improves because they believe pill will help, not because of drug. Effect?",
          solution: "Placebo effect.",
        },
      },
      questions: [
        {
          id: "eias-psych-u4-te-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the placebo effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Improvement from belief in treatment" },
              { id: "b", text: "Drug side effect" },
              { id: "c", text: "Treatment failure" },
              { id: "d", text: "Allergic reaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Placebo",
                statement: "Belief effect.",
              },
            ],
            steps: [
              {
                reasoning: "Placebo = belief-driven improvement.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Belief effect",
            commonErrors: ["Side effect confused."],
          },
        },
        {
          id: "eias-psych-u4-te-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two strengths of drug treatment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drug strengths",
                statement: "Effective + fast.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Effective symptom relief — especially severe disorders.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fast-acting — rapid improvement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can stabilise patient for psychological therapy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Effective, fast, stabilises.",
            commonErrors: ["Weakness.", "Only one."],
          },
        },
        {
          id: "eias-psych-u4-te-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two limitations of psychological treatments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Therapy limits",
                statement: "Time + motivation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Requires motivation — patient must engage actively.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Time-consuming — weeks/months of sessions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "May not suit severe disorders — needs medication first.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Costly — therapist time expensive.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Motivation, time, severity, cost.",
            commonErrors: ["Strength.", "Only one."],
          },
        },
        {
          id: "eias-psych-u4-te-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the use of drug treatment for schizophrenia.",
          parts: [
            { label: "a", prompt: "Give two strengths.", marks: 4 },
            { label: "b", prompt: "Give two limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drug evaluation",
                statement: "For and against.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Reduces positive symptoms — antipsychotics block dopamine.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Enables community living — prevents hospitalisation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Side effects — weight gain, sedation, movement disorders.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Relapse on discontinuation — doesn't cure, manages symptoms.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) reduces symptoms (b) side effects+relapse",
            commonErrors: ["Perfect treatment.", "Only strengths."],
          },
        },
      ],
    },
  ],
};
