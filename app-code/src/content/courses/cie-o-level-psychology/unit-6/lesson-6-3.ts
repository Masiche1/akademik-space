import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "olep-u6-lesson-6-3",
  code: "6-3",
  title: "Treatments for Mental Disorder",
  goal: "I CAN describe biological, psychological and social treatments and evaluate their effectiveness.",
  standards: ["2219: Psychopathology"],
  vocabulary: [
    { term: "Drug therapy", definition: "Medication treating mental illness." },
    {
      term: "SSRI",
      definition: "Selective serotonin reuptake inhibitor antidepressant.",
    },
    {
      term: "CBT",
      definition:
        "Cognitive behavioural therapy — changes thoughts and behaviours.",
    },
    {
      term: "Systematic desensitisation",
      definition: "Gradual exposure therapy for phobias.",
    },
    {
      term: "Psychoanalysis",
      definition: "Freudian therapy exploring unconscious conflicts.",
    },
    {
      term: "Token economy",
      definition: "Behavioural therapy using rewards for desired behaviour.",
    },
  ],
  concepts: [
    {
      id: "olep-u6-biological-treatments",
      title: "Biological Treatments",
      skill: "Describe drug therapies and their evaluation.",
      lesson: {
        sections: [
          {
            heading: "Drug therapy",
            body: "Antidepressants: SSRIs (fluoxetine, sertraline) — increase serotonin; effective for depression/anxiety but side effects (nausea, sexual dysfunction) and withdrawal. Tricyclics older, more side effects. Antipsychotics: block dopamine receptors — treat schizophrenia positive symptoms; side effects (tardive dyskinesia, weight gain). Benzodiazepines: enhance GABA — anxiety but dependence risk.",
          },
          {
            heading: "Evaluation",
            body: "Advantages: fast-acting, cost-effective, easy to administer, works for severe cases. Disadvantages: side effects, dependency (benzodiazepines), doesn't address causes, relapse when stopped, stigma of medication. Often combined with psychological therapy for best outcomes.",
          },
          {
            heading: "ECT and psychosurgery",
            body: "Electroconvulsive therapy: controlled seizures — effective for severe depression unresponsive to drugs; controversial side effects (memory loss). Psychosurgery: last resort for extreme cases — rarely used now due to ethical concerns.",
          },
        ],
        keyFormulas: [
          {
            name: "Biological treatments",
            statement:
              "SSRIs/antipsychotics/benzodiazepines; fast but side effects/dependency.",
          },
        ],
        workedExample: {
          problem: "Why are benzodiazepines controversial?",
          solution:
            "Effective for anxiety but cause dependence — difficult to stop, withdrawal symptoms; usually short-term use only.",
        },
      },
      questions: [
        {
          id: "olep-u6-bt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do SSRIs treat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Depression and anxiety" },
              { id: "b", text: "Schizophrenia only" },
              { id: "c", text: "Bipolar disorder only" },
              { id: "d", text: "OCD only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SSRIs",
                statement: "Antidepressants increasing serotonin.",
              },
            ],
            steps: [
              { reasoning: "Depression/anxiety.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Depression and anxiety",
            commonErrors: ["Confusing drug classes."],
          },
        },
        {
          id: "olep-u6-bt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two disadvantages of drug therapy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Drug disadvantages",
                statement: "Side effects/dependency/no cause.",
              },
            ],
            steps: [
              {
                reasoning: "Any two disadvantages.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Side effects, dependency (benzodiazepines), doesn't address causes, relapse when stopped, stigma.",
            commonErrors: ["Only one disadvantage."],
          },
        },
        {
          id: "olep-u6-bt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate drug therapy for mental illness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drug evaluation",
                statement: "Effective vs side effects/dependency.",
              },
            ],
            steps: [
              {
                reasoning: "Advantage: fast/effective.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Advantage: cost-easy.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Disadvantage: side effects/dependency.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Weighed judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Effective and cost-efficient for severe cases but side effects, dependency and failure to address causes limit it — often combined with therapy.",
            commonErrors: ["One-sided evaluation."],
          },
        },
        {
          id: "olep-u6-bt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Biological treatments.",
          parts: [
            { label: "a", prompt: "Antidepressants?", marks: 3 },
            { label: "b", prompt: "Antipsychotics?", marks: 2 },
            { label: "c", prompt: "Benzodiazepines?", marks: 2 },
            { label: "d", prompt: "Evaluation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biological treatments",
                statement: "Drugs+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "SSRIs mechanism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "For depression/anxiety.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Side effects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Block dopamine.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Schizophrenia positive symptoms.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Enhance GABA.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Dependency risk.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effective vs limitations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Combined with therapy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) antidepressants (b) antipsychotics (c) benzos (d) evaluation",
          },
        },
      ],
    },
    {
      id: "olep-u6-psych-treatments",
      title: "Psychological Treatments",
      skill:
        "Describe CBT, systematic desensitisation, psychoanalysis and behavioural therapies.",
      lesson: {
        sections: [
          {
            heading: "CBT",
            body: "Cognitive behavioural therapy — most evidence-based psychological treatment. Identifies and challenges negative thoughts/distortions, replaces with rational alternatives; behavioural experiments test beliefs. For depression, anxiety, OCD. Goal: change thinking → change behaviour/emotion. Structured, time-limited (12-20 sessions).",
          },
          {
            heading: "Behavioural therapies",
            body: "Systematic desensitisation: gradual exposure to feared stimulus while relaxing — hierarchy from least to most feared (spiders: pictures → real spider). Flooding: immediate intense exposure — faster but more distressing. Token economy: rewards (tokens) for desired behaviour — used in institutions/with children.",
          },
          {
            heading: "Psychoanalysis",
            body: "Freudian therapy — explore unconscious conflicts via free association, dream analysis, transference. Long-term, expensive, weak evidence base — but influenced modern psychodynamic therapy. Humanistic therapies (person-centred/Rogers) — unconditional positive regard, active listening, client-led.",
          },
        ],
        keyFormulas: [
          {
            name: "Psych treatments",
            statement:
              "CBT=change thoughts; desensitisation=gradual exposure; psychoanalysis=unconscious.",
          },
        ],
        workedExample: {
          problem: "How does systematic desensitisation treat phobias?",
          solution:
            "Gradual exposure hierarchy — patient learns relaxation then faces feared stimulus step by step, building tolerance until fear extinguishes.",
        },
      },
      questions: [
        {
          id: "olep-u6-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does CBT stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cognitive behavioural therapy" },
              { id: "b", text: "Clinical behaviour treatment" },
              { id: "c", text: "Combined brain therapy" },
              { id: "d", text: "Cognitive brain training" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CBT",
                statement: "Cognitive behavioural therapy.",
              },
            ],
            steps: [{ reasoning: "CBT acronym.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Cognitive behavioural therapy",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "olep-u6-pt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does systematic desensitisation work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Systematic desensitisation",
                statement: "Gradual exposure+relaxation.",
              },
            ],
            steps: [
              {
                reasoning: "Gradual exposure hierarchy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "With relaxation training.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Gradual exposure to feared stimulus while practising relaxation — hierarchy from least to most feared, fear extinguishes.",
            commonErrors: ["Immediate exposure only."],
          },
        },
        {
          id: "olep-u6-pt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare CBT and psychoanalysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CBT vs psychoanalysis",
                statement: "Structured/evidence vs long-term/unconscious.",
              },
            ],
            steps: [
              {
                reasoning: "CBT: structured, time-limited.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Psychoanalysis: long-term, unconscious.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Evidence base differences.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "CBT is structured/time-limited targeting thoughts; psychoanalysis is long-term exploring unconscious conflicts — CBT has stronger evidence.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "olep-u6-pt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Psychological treatments.",
          parts: [
            { label: "a", prompt: "CBT?", marks: 3 },
            { label: "b", prompt: "Systematic desensitisation?", marks: 2 },
            { label: "c", prompt: "Token economy?", marks: 2 },
            { label: "d", prompt: "Psychoanalysis?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Psych treatments",
                statement: "CBT+desensitisation+token+psychoanalysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Challenge thoughts/distortions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Behavioural experiments.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Evidence-based.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Gradual exposure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "With relaxation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Rewards for behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Institutional use.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Unconscious conflicts.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Free association/dreams.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) CBT (b) desensitisation (c) token (d) psychoanalysis",
          },
        },
      ],
    },
    {
      id: "olep-u6-evaluation",
      title: "Evaluating Treatments",
      skill:
        "Compare biological, psychological and social approaches to treatment.",
      lesson: {
        sections: [
          {
            heading: "Biopsychosocial model",
            body: "Disorders have biological (genes, brain), psychological (thoughts, learning), and social (environment, relationships) causes — treatment should address all levels. Drug therapy targets biology; CBT targets thoughts/behaviour; social support/therapy targets environment. Combined approaches often most effective.",
          },
          {
            heading: "Effectiveness evidence",
            body: "CBT: strong evidence for depression, anxiety, OCD — comparable to drugs for mild-moderate, better for preventing relapse. Drug therapy: effective for severe cases, fast-acting — but doesn't prevent relapse alone. Psychoanalysis: weak evidence, expensive. Systematic desensitisation: effective for specific phobias.",
          },
          {
            heading: "Access and ethics",
            body: "Drug therapy: cheap, accessible, fast — but side effects, stigma, dependency. CBT: effective but expensive, requires trained therapists, not always available. Social interventions: supportive but less evidence-based. Best practice often combines medication + therapy + social support.",
          },
        ],
        keyFormulas: [
          {
            name: "Treatment evaluation",
            statement:
              "Biopsychosocial: biology+psychology+social; combined approaches best.",
          },
        ],
        workedExample: {
          problem: "Why is combined treatment often best?",
          solution:
            "Drugs manage symptoms while CBT addresses underlying thoughts/behaviours — addresses multiple causes of disorder.",
        },
      },
      questions: [
        {
          id: "olep-u6-et-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the biopsychosocial model?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Disorders have biological, psychological and social causes",
              },
              { id: "b", text: "Only biological causes exist" },
              { id: "c", text: "Only psychological causes exist" },
              { id: "d", text: "Social causes only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biopsychosocial",
                statement: "Three levels of causes.",
              },
            ],
            steps: [
              { reasoning: "Bio+psycho+social.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer:
              "**(a)** Disorders have biological, psychological and social causes",
            commonErrors: ["Single-cause view."],
          },
        },
        {
          id: "olep-u6-et-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might combined treatment be most effective?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combined treatment",
                statement: "Addresses multiple causes.",
              },
            ],
            steps: [
              {
                reasoning: "Drugs manage symptoms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Therapy addresses thoughts/behaviour.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Drugs manage symptoms while therapy addresses underlying thoughts/behaviours — targets multiple causes.",
            commonErrors: ["Only one approach."],
          },
        },
        {
          id: "olep-u6-et-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare CBT and drug therapy for depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CBT vs drugs",
                statement: "Long-term vs fast-acting.",
              },
            ],
            steps: [
              {
                reasoning: "Drugs: fast-acting, cheap.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "CBT: addresses causes, prevents relapse.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Drugs: side effects/dependency.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Drugs are fast/cost-effective but have side effects and relapse risk; CBT addresses causes and prevents relapse but is expensive/slow.",
            commonErrors: ["Only one approach."],
          },
        },
        {
          id: "olep-u6-et-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Treatment evaluation.",
          parts: [
            { label: "a", prompt: "Biopsychosocial model?", marks: 2 },
            { label: "b", prompt: "CBT effectiveness?", marks: 2 },
            { label: "c", prompt: "Drug therapy?", marks: 2 },
            { label: "d", prompt: "Combined approach?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation",
                statement: "Model+CBT+drugs+combined.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Three levels of causes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Treatment should match.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Evidence for depression/anxiety/OCD.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Comparable to drugs/prevents relapse.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Effective/fast/cheap.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Side effects/dependency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Addresses multiple causes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Drugs+CBT+support.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Best practice often combined.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) model (b) CBT (c) drugs (d) combined",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u6-6-3-notes",
      title: "Treatments — notes",
      summary:
        "Drug therapy, psychological treatments, biopsychosocial evaluation.",
      sections: [
        {
          heading: "Treatments",
          body: "SSRIs/antipsychotics/benzos; CBT; desensitisation; psychoanalysis; token economy.",
        },
        {
          heading: "Evaluation",
          body: "Biopsychosocial model; CBT evidence-based; combined approaches often best.",
        },
      ],
    },
  ],
};
