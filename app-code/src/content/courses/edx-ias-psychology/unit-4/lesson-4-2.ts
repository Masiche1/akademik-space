import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "eias-psych-u4-lesson-4-2",
  code: "4-2",
  title: "Specific Disorders: Depression and Anxiety",
  goal: "I CAN describe symptoms and explanations of depression and anxiety disorders.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 4 — Psychopathology"],
  vocabulary: [
    {
      term: "Major depressive disorder",
      definition: "Persistent low mood, loss of interest, ≥2 weeks.",
    },
    {
      term: "Generalised anxiety disorder",
      definition: "Excessive worry about everyday events.",
    },
    {
      term: "Phobia",
      definition: "Intense irrational fear of specific object/situation.",
    },
    {
      term: "OCD",
      definition:
        "Obsessions (intrusive thoughts) + compulsions (repetitive behaviours).",
    },
    {
      term: "Learned helplessness",
      definition: "Giving up after uncontrollable negative events.",
    },
    {
      term: "Cognitive distortions",
      definition: "Biased thinking patterns maintaining depression.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u4-depression",
      title: "Depression",
      skill: "Describe symptoms and explanations of depression.",
      lesson: {
        sections: [
          {
            heading: "Symptoms",
            body: "**Emotional**: persistent sadness, loss of interest (anhedonia), guilt, worthlessness. **Cognitive**: poor concentration, indecision, negative thoughts. **Physical**: sleep disturbance, appetite change, fatigue. **Behavioural**: social withdrawal, reduced activity.\n\n**Diagnosis**: ≥5 symptoms for ≥2 weeks — DSM-5 criteria.",
          },
          {
            heading: "Explanations",
            body: "**Biological**: serotonin/norepinephrine imbalance — SSRIs target this. **Cognitive**: Beck's negative triad — negative view of self, world, future. **Learned helplessness**: Seligman's dogs — uncontrollable shocks → passivity. **Behavioural**: lack of positive reinforcement.\n\n**Evaluation**: multifactorial — biology + psychology + environment interact.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Person feels worthless, loses interest in hobbies, sleeps poorly for 3 weeks. Diagnosis?",
          solution: "Major depressive disorder.",
        },
      },
      questions: [
        {
          id: "eias-psych-u4-dep-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is anhedonia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Confusion" },
              { id: "b", text: "Anger" },
              { id: "c", text: "Loss of interest/pleasure" },
              { id: "d", text: "Excessive happiness" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anhedonia",
                statement: "No pleasure.",
              },
            ],
            steps: [
              {
                reasoning: "Anhedonia = loss of pleasure.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Loss of pleasure",
            commonErrors: ["Happiness confused."],
          },
        },
        {
          id: "eias-psych-u4-dep-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two symptoms of depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depression symptoms",
                statement: "Mood + physical.",
              },
            ],
            steps: [
              {
                reasoning: "Persistent low mood — sadness most days.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Loss of interest — anhedonia.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Sleep/appetite disturbance — physical symptoms.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Low mood, anhedonia, sleep/appetite.",
            commonErrors: ["Anxiety.", "Only one."],
          },
        },
        {
          id: "eias-psych-u4-dep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Beck's cognitive explanation of depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beck's triad",
                statement: "Negative thinking.",
              },
            ],
            steps: [
              {
                reasoning: "Negative view of self — 'I'm worthless'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Negative view of world — 'everything is against me'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Negative view of future — 'nothing will improve'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Triad maintains depression — biased information processing.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Negative self/world/future triad.",
            commonErrors: ["Biological.", "No triad."],
          },
        },
        {
          id: "eias-psych-u4-dep-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A patient has depression after prolonged unemployment.",
          parts: [
            {
              label: "a",
              prompt: "Explain using learned helplessness.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest two treatments.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depression treatment",
                statement: "Theory + intervention.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Repeated rejection → learned helplessness — gives up.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Passivity generalises — stops trying to change situation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) CBT — challenge negative thoughts, behavioural activation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Antidepressants — if severe/biological component.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) helplessness (b) CBT+antidepressants",
            commonErrors: ["No theory.", "No treatment."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u4-anxiety",
      title: "Anxiety Disorders",
      skill: "Describe phobias, GAD and OCD.",
      lesson: {
        sections: [
          {
            heading: "Phobias",
            body: "**Specific phobia**: intense irrational fear of object/situation — spiders, heights, flying. **Social phobia**: fear of social situations/judgement. **Agoraphobia**: fear of open/public spaces.\n\n**Two-factor theory**: classical conditioning (learned association) + operant conditioning (avoidance reinforced by anxiety reduction).",
          },
          {
            heading: "GAD and OCD",
            body: "**GAD**: excessive worry about everyday events — ≥6 months, hard to control. **OCD**: obsessions (intrusive thoughts — contamination, harm) + compulsions (repetitive behaviours — washing, checking) to reduce anxiety.\n\n**Explanations**: biological (serotonin), cognitive (catastrophising), behavioural (conditioning).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Person avoids spiders, feels intense fear even thinking about them. Diagnosis?",
          solution: "Specific phobia.",
        },
      },
      questions: [
        {
          id: "eias-psych-u4-anx-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a phobia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mild fear" },
              { id: "b", text: "Depression" },
              { id: "c", text: "Intense irrational fear of specific object" },
              { id: "d", text: "Normal anxiety" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phobia",
                statement: "Irrational fear.",
              },
            ],
            steps: [
              {
                reasoning: "Phobia = irrational intense fear.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Irrational fear",
            commonErrors: ["Mild confused."],
          },
        },
        {
          id: "eias-psych-u4-anx-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of phobia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Phobia types",
                statement: "Specific, social, agora.",
              },
            ],
            steps: [
              {
                reasoning: "Specific phobia — spiders, heights, flying.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Social phobia — fear of social judgement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Agoraphobia — fear of open/public spaces.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Specific, social, agoraphobia.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eias-psych-u4-anx-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two-factor theory of phobia development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Two-factor",
                statement: "Conditioning + reinforcement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Classical conditioning — neutral stimulus paired with fear.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Operant conditioning — avoidance reduces anxiety → reinforced.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: dog bite → fear of dogs → avoidance maintains.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Explains acquisition AND maintenance of phobias.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Classical + operant conditioning.",
            commonErrors: ["One factor.", "No example."],
          },
        },
        {
          id: "eias-psych-u4-anx-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A patient has OCD — fear of contamination, washes hands 50 times daily.",
          parts: [
            {
              label: "a",
              prompt: "Identify obsessions and compulsions.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest two treatments.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OCD treatment",
                statement: "Symptoms + intervention.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Obsession: intrusive contamination thoughts.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Compulsion: repetitive handwashing to reduce anxiety.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) ERP — exposure + response prevention, break compulsion cycle.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) SSRIs — reduce serotonin, lower anxiety.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) thoughts+washing (b) ERP+SSRIs",
            commonErrors: ["No obsessions.", "No treatment."],
          },
        },
      ],
    },
  ],
};
