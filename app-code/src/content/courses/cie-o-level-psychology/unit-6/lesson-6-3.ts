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
              { id: "b", text: "Bipolar disorder only" },
              { id: "c", text: "Schizophrenia only" },
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
        {
          id: "olep-u6-bt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which class of drug is primarily used to treat the positive symptoms of schizophrenia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tricyclics" },
              { id: "b", text: "Benzodiazepines" },
              { id: "c", text: "Antipsychotics" },
              { id: "d", text: "SSRIs" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Antipsychotics",
                statement: "Block dopamine receptors for schizophrenia.",
              },
            ],
            steps: [{ reasoning: "Antipsychotics for schizophrenia.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** Antipsychotics",
            commonErrors: ["Confusing drug classes."],
          },
        },
        {
          id: "olep-u6-bt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Benzodiazepines reduce anxiety by enhancing the effects of which neurotransmitter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adrenaline" },
              { id: "b", text: "GABA" },
              { id: "c", text: "Dopamine" },
              { id: "d", text: "Serotonin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Benzodiazepines",
                statement: "Enhance GABA → reduce anxiety.",
              },
            ],
            steps: [{ reasoning: "GABA enhancement.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** GABA",
            commonErrors: ["Confusing with SSRIs."],
          },
        },
        {
          id: "olep-u6-bt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main classes of psychiatric drug are named in the lesson (antidepressants, antipsychotics, benzodiazepines)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Drug classes",
                statement: "Antidepressants, antipsychotics, benzodiazepines.",
              },
            ],
            steps: [{ reasoning: "Three classes.", marks: 1, markCode: "AO1" }],
            finalAnswer: "3",
            commonErrors: ["Including ECT as a drug class."],
          },
        },
        {
          id: "olep-u6-bt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of main drug classes and (b) the number of SSRI examples named (fluoxetine, sertraline).",
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
                name: "Counts",
                statement: "Drug classes 3; SSRI examples 2.",
              },
            ],
            steps: [
              { reasoning: "Three drug classes.", marks: 1, markCode: "AO1" },
              { reasoning: "Fluoxetine and sertraline.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 2",
            commonErrors: ["Wrong counts."],
          },
        },
        {
          id: "olep-u6-bt-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Benzodiazepines are controversial mainly because they can cause...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "dependence and withdrawal symptoms" },
              { id: "b", text: "memory improvement" },
              { id: "c", text: "weight gain and tardive dyskinesia" },
              { id: "d", text: "increased serotonin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Benzodiazepine risk",
                statement: "Dependence and withdrawal.",
              },
            ],
            steps: [
              { reasoning: "Dependence is the key issue.", marks: 1, markCode: "AO1" },
              { reasoning: "Usually short-term use only.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** dependence and withdrawal symptoms",
            commonErrors: ["Confusing with antipsychotic side effects."],
          },
        },
        {
          id: "olep-u6-bt-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of drug classes and (b) the total number of biological treatments named (three drug classes plus ECT and psychosurgery).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Treatment counts",
                statement: "3 drug classes + ECT + psychosurgery = 5.",
              },
            ],
            steps: [
              { reasoning: "Three drug classes.", marks: 1, markCode: "AO1" },
              { reasoning: "Plus ECT and psychosurgery.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 5",
            commonErrors: ["Forgetting ECT/psychosurgery."],
          },
        },
        {
          id: "olep-u6-bt-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Electroconvulsive therapy (ECT) is most appropriately used for...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "severe depression unresponsive to drugs" },
              { id: "b", text: "mild OCD" },
              { id: "c", text: "mild anxiety" },
              { id: "d", text: "specific phobias of spiders" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ECT",
                statement: "For severe treatment-resistant depression.",
              },
            ],
            steps: [
              { reasoning: "ECT for severe drug-resistant depression.", marks: 1, markCode: "AO1" },
              { reasoning: "Controversial due to memory loss.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** severe depression unresponsive to drugs",
            commonErrors: ["Thinking ECT is first-line treatment."],
          },
        },
        {
          id: "olep-u6-bt-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give (a) the number of drug classes, (b) the total number of biological treatments named (including ECT and psychosurgery), and (c) the number of antipsychotic side effects named (tardive dyskinesia, weight gain).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 5 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Drugs 3; biological treatments 5; side effects 2.",
              },
            ],
            steps: [
              { reasoning: "Three drug classes.", marks: 1, markCode: "AO1" },
              { reasoning: "Five biological treatments.", marks: 1, markCode: "AO1" },
              { reasoning: "Two antipsychotic side effects.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 5 (c) 2",
            commonErrors: ["Missing ECT/psychosurgery."],
          },
        },
        {
          id: "olep-u6-bt-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A major limitation of drug therapy for mental illness is that it...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "treats symptoms without addressing the underlying causes" },
              { id: "b", text: "is too expensive for most patients" },
              { id: "c", text: "has no side effects" },
              { id: "d", text: "works instantly for everyone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drug limitation",
                statement: "Symptom relief, not cause.",
              },
            ],
            steps: [
              { reasoning: "Drugs manage symptoms only.", marks: 1, markCode: "AO1" },
              { reasoning: "Relapse risk when stopped.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** treats symptoms without addressing the underlying causes",
            commonErrors: ["Claiming drugs are always ineffective."],
          },
        },
        {
          id: "olep-u6-bt-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give (a) the number of drug classes, (b) the number of SSRI examples named, and (c) the number of benzodiazepine problems named (dependence, withdrawal).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Drugs 3; SSRIs 2; benzo problems 2.",
              },
            ],
            steps: [
              { reasoning: "Three drug classes.", marks: 1, markCode: "AO1" },
              { reasoning: "Fluoxetine, sertraline.", marks: 1, markCode: "AO1" },
              { reasoning: "Dependence and withdrawal.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 2 (c) 2",
            commonErrors: ["Wrong counts."],
          },
        },
        {
          id: "olep-u6-bt-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Drug therapy is often combined with psychological therapy because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "psychological therapy has no evidence" },
              { id: "b", text: "drugs are always harmful" },
              { id: "c", text: "drugs manage symptoms while therapy addresses underlying thoughts and behaviours" },
              { id: "d", text: "drugs alone cure all disorders" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combined treatment",
                statement: "Drugs + therapy target different causes.",
              },
            ],
            steps: [
              { reasoning: "Drugs manage symptoms.", marks: 1, markCode: "AO1" },
              { reasoning: "Therapy addresses causes.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** drugs manage symptoms while therapy addresses underlying thoughts and behaviours",
            commonErrors: ["Thinking one approach suffices."],
          },
        },
        {
          id: "olep-u6-bt-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of ECT in treating depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ECT evaluation",
                statement: "Effective but controversial.",
              },
            ],
            steps: [
              {
                reasoning: "ECT = controlled seizures for severe depression.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Used when drugs fail.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Side effects: memory loss, controversy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weighed judgement — last resort.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "ECT is effective for severe depression unresponsive to drugs but is controversial due to memory loss side effects — reserved as a last resort alongside psychosurgery.",
            commonErrors: ["One-sided evaluation."],
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
              { id: "b", text: "Combined brain therapy" },
              { id: "c", text: "Cognitive brain training" },
              { id: "d", text: "Clinical behaviour treatment" },
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
        {
          id: "olep-u6-pt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Systematic desensitisation treats phobias by combining...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "gradual exposure to the feared stimulus with relaxation" },
              { id: "b", text: "immediate intense exposure with drugs" },
              { id: "c", text: "free association and dream analysis" },
              { id: "d", text: "token rewards for avoidance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Systematic desensitisation",
                statement: "Gradual exposure + relaxation hierarchy.",
              },
            ],
            steps: [{ reasoning: "Gradual exposure with relaxation.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** gradual exposure to the feared stimulus with relaxation",
            commonErrors: ["Confusing with flooding."],
          },
        },
        {
          id: "olep-u6-pt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Free association, dream analysis and transference are techniques used in...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "token economy" },
              { id: "b", text: "systematic desensitisation" },
              { id: "c", text: "psychoanalysis" },
              { id: "d", text: "CBT" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Psychoanalysis",
                statement: "Free association, dreams, transference.",
              },
            ],
            steps: [{ reasoning: "Freudian techniques.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** psychoanalysis",
            commonErrors: ["Confusing with CBT techniques."],
          },
        },
        {
          id: "olep-u6-pt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many behavioural therapies are named in the lesson (systematic desensitisation, flooding, token economy)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Behavioural therapies",
                statement: "Desensitisation, flooding, token economy.",
              },
            ],
            steps: [{ reasoning: "Three named.", marks: 1, markCode: "AO1" }],
            finalAnswer: "3",
            commonErrors: ["Including CBT as behavioural only."],
          },
        },
        {
          id: "olep-u6-pt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of behavioural therapies named and (b) the number of psychological treatment approaches discussed (CBT, desensitisation, flooding, token economy, psychoanalysis, person-centred).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Behavioural 3; approaches 6.",
              },
            ],
            steps: [
              { reasoning: "Desensitisation, flooding, token economy.", marks: 1, markCode: "AO1" },
              { reasoning: "Six approaches listed.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 6",
            commonErrors: ["Missing person-centred therapy."],
          },
        },
        {
          id: "olep-u6-pt-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Flooding differs from systematic desensitisation because it involves...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "immediate, intense exposure to the feared stimulus" },
              { id: "b", text: "rewarding non-fearful behaviour" },
              { id: "c", text: "exploring childhood conflicts" },
              { id: "d", text: "gradual exposure over many sessions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flooding",
                statement: "Immediate intense exposure.",
              },
            ],
            steps: [
              { reasoning: "Flooding = direct intense exposure.", marks: 1, markCode: "AO1" },
              { reasoning: "Faster but more distressing.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** immediate, intense exposure to the feared stimulus",
            commonErrors: ["Confusing with desensitisation."],
          },
        },
        {
          id: "olep-u6-pt-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the minimum typical number of CBT sessions and (b) the number of behavioural therapies named.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CBT/behavioural",
                statement: "CBT 12-20 sessions; 3 behavioural therapies.",
              },
            ],
            steps: [
              { reasoning: "CBT typically 12-20 sessions.", marks: 1, markCode: "AO1" },
              { reasoning: "Three behavioural therapies.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 12 (b) 3",
            commonErrors: ["Wrong session range."],
          },
        },
        {
          id: "olep-u6-pt-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A token economy is a behavioural technique that uses...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "punishment for unwanted behaviour" },
              { id: "b", text: "gradual exposure hierarchies" },
              { id: "c", text: "tokens as rewards for desired behaviour" },
              { id: "d", text: "free association to uncover conflicts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Token economy",
                statement: "Rewards (tokens) for desired behaviour.",
              },
            ],
            steps: [
              { reasoning: "Tokens = secondary reinforcers.", marks: 1, markCode: "AO1" },
              { reasoning: "Used in institutions/with children.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** tokens as rewards for desired behaviour",
            commonErrors: ["Confusing with punishment-based methods."],
          },
        },
        {
          id: "olep-u6-pt-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give (a) the minimum typical number of CBT sessions, (b) the number of behavioural therapies, and (c) the number of psychological treatment approaches discussed.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
              { label: "b", answer: 3 },
              { label: "c", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "CBT 12; behavioural 3; approaches 6.",
              },
            ],
            steps: [
              { reasoning: "12-20 sessions typical.", marks: 1, markCode: "AO1" },
              { reasoning: "Three behavioural therapies.", marks: 1, markCode: "AO1" },
              { reasoning: "Six approaches.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 12 (b) 3 (c) 6",
            commonErrors: ["Wrong counts."],
          },
        },
        {
          id: "olep-u6-pt-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Psychoanalysis has a weak evidence base mainly because it is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "quick, cheap and well-tested" },
              { id: "b", text: "the most evidence-based therapy" },
              { id: "c", text: "long-term, expensive and difficult to test scientifically" },
              { id: "d", text: "based on objective measurement" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Psychoanalysis criticism",
                statement: "Long-term, costly, unfalsifiable.",
              },
            ],
            steps: [
              { reasoning: "Unconscious claims hard to test.", marks: 1, markCode: "AO1" },
              { reasoning: "Expensive and lengthy.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** long-term, expensive and difficult to test scientifically",
            commonErrors: ["Confusing with CBT's evidence base."],
          },
        },
        {
          id: "olep-u6-pt-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give (a) the number of behavioural therapies, (b) the number of psychological treatment approaches, and (c) the number of psychoanalytic techniques named (free association, dream analysis, transference).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 6 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Behavioural 3; approaches 6; techniques 3.",
              },
            ],
            steps: [
              { reasoning: "Three behavioural therapies.", marks: 1, markCode: "AO1" },
              { reasoning: "Six approaches.", marks: 1, markCode: "AO1" },
              { reasoning: "Three psychoanalytic techniques.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 6 (c) 3",
            commonErrors: ["Missing transference."],
          },
        },
        {
          id: "olep-u6-pt-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Person-centred (humanistic) therapy is based primarily on...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "unconditional positive regard and active listening" },
              { id: "b", text: "free association" },
              { id: "c", text: "challenging irrational thoughts" },
              { id: "d", text: "gradual exposure hierarchies" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Person-centred therapy",
                statement: "Rogers: UPR, active listening, client-led.",
              },
            ],
            steps: [
              { reasoning: "Rogers' core conditions.", marks: 1, markCode: "AO1" },
              { reasoning: "Client-led approach.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** unconditional positive regard and active listening",
            commonErrors: ["Confusing with CBT."],
          },
        },
        {
          id: "olep-u6-pt-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare systematic desensitisation and flooding as treatments for phobias.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exposure therapies",
                statement: "Gradual vs immediate exposure.",
              },
            ],
            steps: [
              {
                reasoning: "Desensitisation: gradual hierarchy + relaxation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Flooding: immediate intense exposure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Flooding faster but more distressing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both aim to extinguish fear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Both are exposure therapies for phobias: systematic desensitisation uses a gradual hierarchy with relaxation (gentler, slower), while flooding exposes the patient to the feared stimulus immediately and intensely (faster but more distressing).",
            commonErrors: ["Only describing one therapy."],
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
              { id: "a", text: "Only psychological causes exist" },
              { id: "b", text: "Social causes only" },
              { id: "c", text: "Only biological causes exist" },
              {
                id: "d",
                text: "Disorders have biological, psychological and social causes",
              },
            ],
            correctChoiceId: "d",
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
              "**(d)** Disorders have biological, psychological and social causes",
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
        {
          id: "olep-u6-et-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The biopsychosocial model proposes that mental disorders have causes at which levels?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "biological, psychological and social" },
              { id: "b", text: "biological only" },
              { id: "c", text: "social only" },
              { id: "d", text: "psychological only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biopsychosocial",
                statement: "Three interacting levels of cause.",
              },
            ],
            steps: [{ reasoning: "Bio + psycho + social.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** biological, psychological and social",
            commonErrors: ["Single-cause views."],
          },
        },
        {
          id: "olep-u6-et-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which psychological treatment has the strongest evidence base for depression, anxiety and OCD?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CBT" },
              { id: "b", text: "Token economy" },
              { id: "c", text: "Person-centred therapy" },
              { id: "d", text: "Psychoanalysis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CBT evidence",
                statement: "Most evidence-based psychological treatment.",
              },
            ],
            steps: [{ reasoning: "CBT most evidence-based.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** CBT",
            commonErrors: ["Choosing psychoanalysis."],
          },
        },
        {
          id: "olep-u6-et-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many levels of cause does the biopsychosocial model include?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biopsychosocial",
                statement: "Biological, psychological, social.",
              },
            ],
            steps: [{ reasoning: "Three levels.", marks: 1, markCode: "AO1" }],
            finalAnswer: "3",
            commonErrors: ["Omitting a level."],
          },
        },
        {
          id: "olep-u6-et-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of levels in the biopsychosocial model and (b) the number of treatment approaches compared in the lesson (drug therapy, CBT, psychoanalysis, systematic desensitisation, social interventions).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Levels 3; approaches 5.",
              },
            ],
            steps: [
              { reasoning: "Bio, psycho, social.", marks: 1, markCode: "AO1" },
              { reasoning: "Five approaches listed.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 5",
            commonErrors: ["Wrong counts."],
          },
        },
        {
          id: "olep-u6-et-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compared with drug therapy, CBT is better at...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "acting very quickly" },
              { id: "b", text: "requiring no trained therapist" },
              { id: "c", text: "preventing relapse after treatment ends" },
              { id: "d", text: "being free of cost" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CBT advantage",
                statement: "Addresses causes; prevents relapse.",
              },
            ],
            steps: [
              { reasoning: "CBT targets underlying thoughts.", marks: 1, markCode: "AO1" },
              { reasoning: "Better relapse prevention.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** preventing relapse after treatment ends",
            commonErrors: ["Confusing speed with durability."],
          },
        },
        {
          id: "olep-u6-et-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of levels in the biopsychosocial model and (b) the number of treatment approaches compared.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "3 levels; 5 approaches.",
              },
            ],
            steps: [
              { reasoning: "Three levels.", marks: 1, markCode: "AO1" },
              { reasoning: "Five approaches.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 5",
            commonErrors: ["Wrong counts."],
          },
        },
        {
          id: "olep-u6-et-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A practical disadvantage of CBT compared with drug therapy is that it...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "is expensive and requires trained therapists" },
              { id: "b", text: "has no side effects" },
              { id: "c", text: "is always available free" },
              { id: "d", text: "works instantly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CBT access",
                statement: "Expensive; needs trained therapists.",
              },
            ],
            steps: [
              { reasoning: "Cost and availability issues.", marks: 1, markCode: "AO1" },
              { reasoning: "Time-limited but requires expertise.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** is expensive and requires trained therapists",
            commonErrors: ["Claiming CBT is free and instant."],
          },
        },
        {
          id: "olep-u6-et-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give (a) the number of levels in the biopsychosocial model, (b) the number of treatment approaches compared, and (c) the number of cause levels a combined treatment targets.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 5 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "3 levels; 5 approaches; 3 targets.",
              },
            ],
            steps: [
              { reasoning: "Bio, psycho, social.", marks: 1, markCode: "AO1" },
              { reasoning: "Five approaches.", marks: 1, markCode: "AO1" },
              { reasoning: "Combined targets all three.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 5 (c) 3",
            commonErrors: ["Wrong counts."],
          },
        },
        {
          id: "olep-u6-et-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Drug therapy alone carries a higher relapse risk because it...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "has no side effects" },
              { id: "b", text: "is completely ineffective" },
              { id: "c", text: "treats symptoms rather than underlying causes" },
              { id: "d", text: "is too slow to work" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relapse risk",
                statement: "Symptom relief without cause-fixing.",
              },
            ],
            steps: [
              { reasoning: "Drugs don't address causes.", marks: 1, markCode: "AO1" },
              { reasoning: "Relapse common when stopped.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** treats symptoms rather than underlying causes",
            commonErrors: ["Claiming drugs never work."],
          },
        },
        {
          id: "olep-u6-et-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give (a) the number of levels in the biopsychosocial model, (b) the number of treatment approaches compared, and (c) the number of psychological treatments discussed in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 5 },
              { label: "c", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Levels 3; approaches 5; psych treatments 6.",
              },
            ],
            steps: [
              { reasoning: "Three levels.", marks: 1, markCode: "AO1" },
              { reasoning: "Five approaches.", marks: 1, markCode: "AO1" },
              { reasoning: "CBT, desensitisation, flooding, token economy, psychoanalysis, person-centred.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 5 (c) 6",
            commonErrors: ["Missing a psychological treatment."],
          },
        },
        {
          id: "olep-u6-et-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Social interventions (e.g., supportive therapy, social support) are criticised mainly as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "less evidence-based than medical or psychological treatments" },
              { id: "b", text: "the most effective option" },
              { id: "c", text: "too expensive for anyone to afford" },
              { id: "d", text: "having dangerous side effects" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social interventions",
                statement: "Helpful but weaker evidence base.",
              },
            ],
            steps: [
              { reasoning: "Less empirical support.", marks: 1, markCode: "AO1" },
              { reasoning: "Still part of biopsychosocial care.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** less evidence-based than medical or psychological treatments",
            commonErrors: ["Claiming they are useless."],
          },
        },
        {
          id: "olep-u6-et-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the biopsychosocial approach to treating mental disorder.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biopsychosocial evaluation",
                statement: "Holistic but complex to implement.",
              },
            ],
            steps: [
              {
                reasoning: "Disorders have biological, psychological, social causes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Treatment should match causes at each level.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Combined approaches often most effective.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weighed judgement — best practice is integrated.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The biopsychosocial model recognises multiple causes of disorder, so combined treatment (drugs + therapy + social support) is often most effective — though access and cost can limit it.",
            commonErrors: ["One-sided evaluation."],
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
