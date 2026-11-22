import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "olep-u6-lesson-6-2",
  code: "6-2",
  title: "Biological Explanations",
  goal: "I CAN describe genetic, biochemical and neurological explanations of mental disorder.",
  standards: ["2219: Psychopathology"],
  vocabulary: [
    {
      term: "Diathesis",
      definition: "Biological/psychological vulnerability to disorder.",
    },
    {
      term: "Genetic vulnerability",
      definition: "Inherited predisposition to mental illness.",
    },
    {
      term: "Neurotransmitter",
      definition: "Chemical messenger in brain (serotonin, dopamine).",
    },
    {
      term: "Dopamine hypothesis",
      definition: "Schizophrenia linked to excess dopamine.",
    },
    {
      term: "Serotonin hypothesis",
      definition: "Depression/anxiety linked to low serotonin.",
    },
    {
      term: "Brain structure",
      definition: "Physical brain differences in mental illness.",
    },
  ],
  concepts: [
    {
      id: "olep-u6-biological",
      title: "Genetic and Biochemical Explanations",
      skill:
        "Describe genetic, neurotransmitter and brain-based explanations of disorder.",
      lesson: {
        sections: [
          {
            heading: "Genetic vulnerability",
            body: "Family studies: relatives of schizophrenics/depressives have higher rates. Twin studies: monozygotic concordance higher than dizygotic — schizophrenia ~50% MZ vs ~15% DZ; depression ~40% vs ~15%. Adoption studies support genetic component. Genes don't determine — environment interacts (diathesis-stress).",
          },
          {
            heading: "Neurotransmitter hypotheses",
            body: "Depression: low serotonin/noradrenaline — SSRIs (fluoxetine) increase serotonin → effective. Anxiety: low GABA — benzodiazepines enhance GABA → reduce anxiety. Schizophrenia: dopamine hypothesis — excess dopamine → positive symptoms; antipsychotics block dopamine receptors.",
          },
          {
            heading: "Brain structure and hormones",
            body: "Schizophrenia: enlarged ventricles, reduced grey matter, abnormal hippocampus. Depression: reduced hippocampus volume, overactive amygdala. Hormones: cortisol (stress) linked to depression; thyroid dysfunction mimics depression. Neuroimaging (fMRI, PET) reveals differences.",
          },
        ],
        keyFormulas: [
          {
            name: "Biological",
            statement:
              "Genetics+neurotransmitters (serotonin/dopamine/GABA)+brain structure.",
          },
        ],
        workedExample: {
          problem:
            "What evidence supports genetic vulnerability to schizophrenia?",
          solution:
            "Monozygotic twins ~50% concordance vs dizygotic ~15% — suggests genetic component, but not deterministic (environment interacts).",
        },
      },
      questions: [
        {
          id: "olep-u6-bg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the dopamine hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Depression linked to low dopamine" },
              { id: "b", text: "Schizophrenia linked to excess dopamine" },
              { id: "c", text: "OCD linked to low GABA" },
              { id: "d", text: "Anxiety linked to high serotonin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dopamine hypothesis",
                statement: "Excess dopamine → schizophrenia.",
              },
            ],
            steps: [
              {
                reasoning: "Schizophrenia+ dopamine.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Schizophrenia linked to excess dopamine",
            commonErrors: ["Confusing disorders."],
          },
        },
        {
          id: "olep-u6-bg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does twin study evidence suggest about mental illness?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Twin studies",
                statement: "MZ concordance > DZ → genetic component.",
              },
            ],
            steps: [
              {
                reasoning: "MZ twins correlate more.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Suggests genetic vulnerability.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Monozygotic twins show higher concordance than dizygotic — suggests genetic vulnerability, but environment also matters.",
            commonErrors: ["Claiming genes determine illness."],
          },
        },
        {
          id: "olep-u6-bg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do SSRIs treat depression?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SSRIs",
                statement: "Increase serotonin availability.",
              },
            ],
            steps: [
              {
                reasoning: "Block serotonin reuptake.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "More serotonin in synapse.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Supports serotonin hypothesis.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "SSRIs block serotonin reuptake — more serotonin available in synapses, supporting serotonin hypothesis of depression.",
            commonErrors: ["Vague 'raises serotonin'."],
          },
        },
        {
          id: "olep-u6-bg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Biological explanations.",
          parts: [
            { label: "a", prompt: "Genetic evidence?", marks: 3 },
            { label: "b", prompt: "Neurotransmitters?", marks: 3 },
            { label: "c", prompt: "Brain structure?", marks: 2 },
            { label: "d", prompt: "Evaluation?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biological",
                statement: "Genetics+neurotransmitters+brain+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Twin/family studies.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "MZ>DZ concordance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Adoption studies.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Serotonin-depression.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Dopamine-schizophrenia.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "GABA-anxiety.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Ventricles/grey matter.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Hippocampus/amygdala.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Biological doesn't exclude environment.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) genetics (b) neurotransmitters (c) brain (d) evaluation",
          },
        },
        {
          id: "olep-u6-bg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Low levels of which neurotransmitter are linked to depression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GABA" },
              { id: "b", text: "Adrenaline" },
              { id: "c", text: "Dopamine" },
              { id: "d", text: "Serotonin" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Serotonin hypothesis",
                statement: "Low serotonin → depression/anxiety.",
              },
            ],
            steps: [{ reasoning: "Serotonin linked to depression.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** Serotonin",
            commonErrors: ["Confusing with dopamine hypothesis."],
          },
        },
        {
          id: "olep-u6-bg-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Benzodiazepines reduce anxiety by enhancing the effects of which neurotransmitter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GABA" },
              { id: "b", text: "Serotonin" },
              { id: "c", text: "Dopamine" },
              { id: "d", text: "Noradrenaline" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GABA",
                statement: "Inhibitory neurotransmitter; benzos enhance it.",
              },
            ],
            steps: [{ reasoning: "Benzodiazepines enhance GABA.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** GABA",
            commonErrors: ["Confusing with SSRIs."],
          },
        },
        {
          id: "olep-u6-bg-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to the lesson, the approximate monozygotic (identical) twin concordance rate for schizophrenia is what percentage?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, tolerance: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Twin concordance",
                statement: "MZ ~50% vs DZ ~15% for schizophrenia.",
              },
            ],
            steps: [{ reasoning: "MZ concordance about 50%.", marks: 1, markCode: "AO1" }],
            finalAnswer: "50%",
            commonErrors: ["Confusing MZ and DZ rates."],
          },
        },
        {
          id: "olep-u6-bg-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the approximate schizophrenia concordance rates for (a) monozygotic and (b) dizygotic twins.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 50, tolerance: 5, unit: "%" },
              { label: "b", answer: 15, tolerance: 5, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Twin concordance",
                statement: "MZ ~50%, DZ ~15%.",
              },
            ],
            steps: [
              { reasoning: "MZ ~50%.", marks: 1, markCode: "AO1" },
              { reasoning: "DZ ~15%.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 50% (b) 15%",
            commonErrors: ["Reversing the rates."],
          },
        },
        {
          id: "olep-u6-bg-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Antipsychotic drugs treat the positive symptoms of schizophrenia by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "reducing cortisol production" },
              { id: "b", text: "increasing serotonin availability" },
              { id: "c", text: "enhancing GABA activity" },
              { id: "d", text: "blocking dopamine receptors" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Antipsychotics",
                statement: "Dopamine receptor blockers.",
              },
            ],
            steps: [
              { reasoning: "Dopamine hypothesis → block dopamine.", marks: 1, markCode: "AO1" },
              { reasoning: "Targets positive symptoms.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** blocking dopamine receptors",
            commonErrors: ["Confusing with SSRIs."],
          },
        },
        {
          id: "olep-u6-bg-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of neurotransmitter hypotheses named (serotonin, dopamine, GABA) and (b) the approximate MZ concordance rate for schizophrenia.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 50, tolerance: 5, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts/evidence",
                statement: "3 neurotransmitter hypotheses; MZ ~50%.",
              },
            ],
            steps: [
              { reasoning: "Serotonin, dopamine, GABA.", marks: 1, markCode: "AO1" },
              { reasoning: "MZ concordance ~50%.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 50%",
            commonErrors: ["Wrong concordance figure."],
          },
        },
        {
          id: "olep-u6-bg-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Enlarged ventricles and reduced grey matter are structural brain findings associated with...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "OCD" },
              { id: "b", text: "schizophrenia" },
              { id: "c", text: "depression" },
              { id: "d", text: "generalised anxiety disorder" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brain structure",
                statement: "Schizophrenia: enlarged ventricles, reduced grey matter.",
              },
            ],
            steps: [
              { reasoning: "Structural changes in schizophrenia.", marks: 1, markCode: "AO1" },
              { reasoning: "Depression shows hippocampus/amygdala changes instead.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** schizophrenia",
            commonErrors: ["Confusing with depression findings."],
          },
        },
        {
          id: "olep-u6-bg-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the approximate twin concordance rates for schizophrenia in (a) monozygotic twins, (b) dizygotic twins, and (c) monozygotic twins for depression.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 50, tolerance: 5, unit: "%" },
              { label: "b", answer: 15, tolerance: 5, unit: "%" },
              { label: "c", answer: 40, tolerance: 5, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Twin concordance",
                statement: "Schizophrenia MZ 50/DZ 15; depression MZ ~40.",
              },
            ],
            steps: [
              { reasoning: "MZ schizophrenia ~50%.", marks: 1, markCode: "AO1" },
              { reasoning: "DZ schizophrenia ~15%.", marks: 1, markCode: "AO1" },
              { reasoning: "MZ depression ~40%.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 50% (b) 15% (c) 40%",
            commonErrors: ["Using schizophrenia rates for depression."],
          },
        },
        {
          id: "olep-u6-bg-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Biological explanations of mental illness alone are incomplete mainly because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "neurotransmitters do not exist" },
              { id: "b", text: "genes completely determine illness" },
              { id: "c", text: "genes interact with environmental stressors (diathesis-stress model)" },
              { id: "d", text: "the brain has no role in illness" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diathesis-stress",
                statement: "Vulnerability + stress; genes not deterministic.",
              },
            ],
            steps: [
              { reasoning: "Concordance < 100% shows environment matters.", marks: 1, markCode: "AO1" },
              { reasoning: "Diathesis-stress interaction.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** genes interact with environmental stressors (diathesis-stress model)",
            commonErrors: ["Claiming genetic determinism."],
          },
        },
        {
          id: "olep-u6-bg-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give (a) the approximate MZ concordance rate for schizophrenia, (b) the approximate DZ concordance rate for schizophrenia, and (c) the number of neuroimaging techniques named (fMRI, PET).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 50, tolerance: 5, unit: "%" },
              { label: "b", answer: 15, tolerance: 5, unit: "%" },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence counts",
                statement: "MZ 50, DZ 15; imaging 2.",
              },
            ],
            steps: [
              { reasoning: "MZ ~50%.", marks: 1, markCode: "AO1" },
              { reasoning: "DZ ~15%.", marks: 1, markCode: "AO1" },
              { reasoning: "fMRI and PET.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 50% (b) 15% (c) 2",
            commonErrors: ["Wrong concordance figures."],
          },
        },
        {
          id: "olep-u6-bg-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Raised cortisol levels are biologically linked to depression because cortisol is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a neurotransmitter that lifts mood" },
              { id: "b", text: "a type of antipsychotic drug" },
              { id: "c", text: "the body's main stress hormone" },
              { id: "d", text: "a measure of intelligence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cortisol",
                statement: "Stress hormone linked to depression.",
              },
            ],
            steps: [
              { reasoning: "Cortisol = stress hormone.", marks: 1, markCode: "AO1" },
              { reasoning: "Chronic stress dysregulates it.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** the body's main stress hormone",
            commonErrors: ["Confusing hormone with neurotransmitter."],
          },
        },
        {
          id: "olep-u6-bg-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how neurotransmitter hypotheses are supported by drug treatments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drug support",
                statement: "Effective drugs validate chemical hypotheses.",
              },
            ],
            steps: [
              {
                reasoning: "SSRIs raise serotonin → help depression (serotonin hypothesis).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Antipsychotics block dopamine → reduce positive symptoms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Benzodiazepines enhance GABA → reduce anxiety.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Supports but doesn't prove the hypotheses.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "SSRIs improving depression supports the serotonin hypothesis; antipsychotics blocking dopamine support the dopamine hypothesis; benzodiazepines enhancing GABA support the GABA-anxiety link — drug effectiveness is evidence for neurotransmitter theories.",
            commonErrors: ["Only one drug link given."],
          },
        },
      ],
    },
    {
      id: "olep-u6-psychological-exp",
      title: "Psychological Explanations",
      skill:
        "Describe learning, cognitive and psychodynamic explanations of disorder.",
      lesson: {
        sections: [
          {
            heading: "Learning explanations",
            body: "Classical conditioning: phobia develops when neutral stimulus paired with fear (Little Albert — white rat + loud noise → fear of rats). Operant conditioning: OCD compulsions maintained by negative reinforcement — reduces anxiety temporarily → repeated. Social learning: modelling of anxious/depressed behaviour.",
          },
          {
            heading: "Cognitive explanations",
            body: "Beck's cognitive theory of depression: negative cognitive triad (self/world/future), cognitive distortions (overgeneralisation, catastrophising, selective attention to negative). Attributional style: depressed people attribute bad events internally/stable/global. Aaron Beck — CBT targets these distortions.",
          },
          {
            heading: "Psychodynamic explanations",
            body: "Freud: disorders result from unresolved conflicts in childhood — defence mechanisms failing. Depression = anger turned inward. Anxiety = repressed traumatic memories surfacing. OCD = unconscious guilt. Criticised — unfalsifiable, but influenced therapy approaches.",
          },
        ],
        keyFormulas: [
          {
            name: "Psychological",
            statement:
              "Learning: conditioning; Cognitive: distortions; Psychodynamic: unresolved conflicts.",
          },
        ],
        workedExample: {
          problem: "How does classical conditioning explain phobias?",
          solution:
            "Neutral stimulus (e.g., white rat) paired with unconditioned stimulus (loud noise → fear) — after pairings, rat alone triggers fear response → phobia.",
        },
      },
      questions: [
        {
          id: "olep-u6-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the Little Albert study?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Operant conditioning experiment" },
              { id: "b", text: "Classical conditioning of fear in a child" },
              { id: "c", text: "Observational learning study" },
              { id: "d", text: "Cognitive therapy trial" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Little Albert",
                statement: "Fear conditioned to white rat.",
              },
            ],
            steps: [
              {
                reasoning: "Fear conditioning study.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Classical conditioning of fear in a child",
            commonErrors: ["Confusing studies."],
          },
        },
        {
          id: "olep-u6-pe-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are cognitive distortions in depression?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cognitive distortions",
                statement: "Biased thinking patterns.",
              },
            ],
            steps: [
              { reasoning: "Any two distortions.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Overgeneralisation, catastrophising, selective attention to negatives, all-or-nothing thinking, mind-reading.",
            commonErrors: ["Only one distortion."],
          },
        },
        {
          id: "olep-u6-pe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does operant conditioning maintain OCD compulsions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OCD learning",
                statement: "Negative reinforcement maintains compulsions.",
              },
            ],
            steps: [
              {
                reasoning: "Compulsion reduces anxiety.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Relief = negative reinforcement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Behaviour repeated/reinforced.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Compulsions temporarily reduce anxiety — this relief negatively reinforces the behaviour, making it more likely to repeat.",
            commonErrors: ["Confusing reinforcement types."],
          },
        },
        {
          id: "olep-u6-pe-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Psychological explanations.",
          parts: [
            { label: "a", prompt: "Learning explanations?", marks: 3 },
            { label: "b", prompt: "Cognitive explanations?", marks: 3 },
            { label: "c", prompt: "Psychodynamic?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Psychological",
                statement: "Learning+cognitive+psychodynamic.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Classical conditioning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Operant/negative reinforcement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Little Albert example.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Cognitive triad.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Distortions named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Beck's theory.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Unresolved conflicts.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Defence mechanisms fail.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Freud's view.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) learning (b) cognitive (c) psychodynamic",
          },
        },
        {
          id: "olep-u6-pe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Little Albert study demonstrated which psychological explanation of phobias?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Classical conditioning of fear" },
              { id: "b", text: "Operant conditioning" },
              { id: "c", text: "Unresolved Oedipal conflicts" },
              { id: "d", text: "Beck's cognitive triad" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Little Albert",
                statement: "White rat + loud noise → conditioned fear.",
              },
            ],
            steps: [{ reasoning: "Neutral stimulus paired with fear.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Classical conditioning of fear",
            commonErrors: ["Confusing with operant conditioning."],
          },
        },
        {
          id: "olep-u6-pe-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Overgeneralisation, in Beck's cognitive theory, means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "applying one negative experience to all situations" },
              { id: "b", text: "blaming other people for everything" },
              { id: "c", text: "ignoring all emotions" },
              { id: "d", text: "focusing only on positive events" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Overgeneralisation",
                statement: "One bad event → all situations.",
              },
            ],
            steps: [{ reasoning: "Overgeneralisation definition.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** applying one negative experience to all situations",
            commonErrors: ["Confusing with catastrophising."],
          },
        },
        {
          id: "olep-u6-pe-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many components make up Beck's negative cognitive triad?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cognitive triad",
                statement: "Negative self, world, future.",
              },
            ],
            steps: [{ reasoning: "Three components.", marks: 1, markCode: "AO1" }],
            finalAnswer: "3",
            commonErrors: ["Counting distortions instead."],
          },
        },
        {
          id: "olep-u6-pe-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of components in Beck's cognitive triad and (b) the number of psychological explanation approaches named (learning, cognitive, psychodynamic).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Triad 3; approaches 3.",
              },
            ],
            steps: [
              { reasoning: "Self, world, future.", marks: 1, markCode: "AO1" },
              { reasoning: "Learning, cognitive, psychodynamic.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 3",
            commonErrors: ["Mixing concepts."],
          },
        },
        {
          id: "olep-u6-pe-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In OCD, compulsions are maintained by which type of conditioning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Negative reinforcement" },
              { id: "b", text: "Classical conditioning only" },
              { id: "c", text: "No conditioning" },
              { id: "d", text: "Positive reinforcement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OCD learning",
                statement: "Compulsions negatively reinforced.",
              },
            ],
            steps: [
              { reasoning: "Compulsion removes anxiety = negative reinforcement.", marks: 1, markCode: "AO1" },
              { reasoning: "Behaviour repeats.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** Negative reinforcement",
            commonErrors: ["Confusing reinforcement types."],
          },
        },
        {
          id: "olep-u6-pe-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of components in Beck's cognitive triad and (b) the number of learning explanation types named (classical, operant, social).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Triad 3; learning types 3.",
              },
            ],
            steps: [
              { reasoning: "Three triad components.", marks: 1, markCode: "AO1" },
              { reasoning: "Classical, operant, social.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 3",
            commonErrors: ["Omitting social learning."],
          },
        },
        {
          id: "olep-u6-pe-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A depressive attributional style explains bad events as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "caused by other people only" },
              { id: "b", text: "internal, stable and global" },
              { id: "c", text: "external, temporary and specific" },
              { id: "d", text: "random and uncontrollable" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Attributional style",
                statement: "Depressed: internal/stable/global.",
              },
            ],
            steps: [
              { reasoning: "Depressive attributions are self-blaming.", marks: 1, markCode: "AO1" },
              { reasoning: "Stable and global = lasting, everywhere.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** internal, stable and global",
            commonErrors: ["Reversing the dimensions."],
          },
        },
        {
          id: "olep-u6-pe-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the number of (a) components in Beck's cognitive triad, (b) types of learning explanation, and (c) cognitive distortions named in the lesson (overgeneralisation, catastrophising, selective attention).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Triad 3; learning 3; distortions 3.",
              },
            ],
            steps: [
              { reasoning: "Self, world, future.", marks: 1, markCode: "AO1" },
              { reasoning: "Classical, operant, social.", marks: 1, markCode: "AO1" },
              { reasoning: "Three distortions named.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 3 (c) 3",
            commonErrors: ["Mixing theory categories."],
          },
        },
        {
          id: "olep-u6-pe-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Freud's psychodynamic explanation proposes that depression results from...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "conditioned fear responses" },
              { id: "b", text: "a chemical imbalance in serotonin" },
              { id: "c", text: "anger turned inward" },
              { id: "d", text: "learned helplessness" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Psychodynamic depression",
                statement: "Unresolved conflict; anger turned inward.",
              },
            ],
            steps: [
              { reasoning: "Freud: depression = inward anger.", marks: 1, markCode: "AO1" },
              { reasoning: "From unresolved childhood conflicts.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** anger turned inward",
            commonErrors: ["Confusing with Beck's cognitive view."],
          },
        },
        {
          id: "olep-u6-pe-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give (a) the number of components in Beck's cognitive triad, (b) the number of learning explanation types, and (c) the number of components in Freud's structural model.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "Triad 3; learning 3; Freud structures 3.",
              },
            ],
            steps: [
              { reasoning: "Self, world, future.", marks: 1, markCode: "AO1" },
              { reasoning: "Classical, operant, social.", marks: 1, markCode: "AO1" },
              { reasoning: "Id, ego, superego.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 3 (c) 3",
            commonErrors: ["Mixing theories."],
          },
        },
        {
          id: "olep-u6-pe-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The main scientific criticism of psychodynamic explanations is that they are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "well supported by experimental evidence" },
              { id: "b", text: "based on twin studies" },
              { id: "c", text: "unfalsifiable and difficult to test scientifically" },
              { id: "d", text: "too easy to verify" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Psychodynamic criticism",
                statement: "Unfalsifiable unconscious claims.",
              },
            ],
            steps: [
              { reasoning: "Unconscious processes hard to measure.", marks: 1, markCode: "AO1" },
              { reasoning: "No testable predictions.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** unfalsifiable and difficult to test scientifically",
            commonErrors: ["Claiming strong empirical support."],
          },
        },
        {
          id: "olep-u6-pe-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare learning and cognitive explanations of depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depression explanations",
                statement: "Conditioning vs distorted thinking.",
              },
            ],
            steps: [
              {
                reasoning: "Learning: depression via conditioning/modelled behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cognitive: Beck's triad and distortions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Compare testability and evidence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weighed judgement — complementary views.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Learning explanations see depression as acquired through conditioning and modelling; cognitive explanations (Beck) see it as distorted negative thinking — both are more testable than psychodynamic views and inform different therapies (behavioural vs CBT).",
            commonErrors: ["Only one explanation given."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u6-6-2-notes",
      title: "Explanations — notes",
      summary:
        "Genetic/biochemical explanations; learning, cognitive, psychodynamic explanations.",
      sections: [
        {
          heading: "Biological",
          body: "Twin studies; neurotransmitters (serotonin/dopamine/GABA); brain structure; SSRIs/antipsychotics.",
        },
        {
          heading: "Psychological",
          body: "Learning: conditioning; Cognitive: Beck's triad+distortions; Psychodynamic: Freud's conflicts.",
        },
      ],
    },
  ],
};
