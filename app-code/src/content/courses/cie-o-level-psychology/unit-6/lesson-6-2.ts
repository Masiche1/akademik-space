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
              { id: "a", text: "Schizophrenia linked to excess dopamine" },
              { id: "b", text: "Depression linked to low dopamine" },
              { id: "c", text: "Anxiety linked to high serotonin" },
              { id: "d", text: "OCD linked to low GABA" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Schizophrenia linked to excess dopamine",
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
              { id: "a", text: "Classical conditioning of fear in a child" },
              { id: "b", text: "Operant conditioning experiment" },
              { id: "c", text: "Observational learning study" },
              { id: "d", text: "Cognitive therapy trial" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Classical conditioning of fear in a child",
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
