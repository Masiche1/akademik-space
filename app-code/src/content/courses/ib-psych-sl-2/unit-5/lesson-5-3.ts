import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "psych-u5-lesson-5-3",
  code: "5-3",
  title: "Schizophrenia, Personality Disorders and Treatment",
  goal: "I CAN describe schizophrenia and personality disorders, and evaluate major treatment approaches including biological, psychological and community-based interventions.",
  standards: ["Paper 1", "Paper 2", "Topic 5"],
  vocabulary: [
    {
      term: "Schizophrenia",
      definition:
        "A severe psychotic disorder involving disturbances in thought, perception, emotion and behaviour.",
    },
    {
      term: "Positive symptoms",
      definition:
        "Symptoms added to normal functioning — hallucinations, delusions, disorganised speech.",
    },
    {
      term: "Negative symptoms",
      definition:
        "Loss of normal functioning — flat affect, social withdrawal, avolition.",
    },
    {
      term: "Personality disorder",
      definition:
        "Enduring, inflexible patterns of behaviour causing distress or impairment.",
    },
    {
      term: "Antipsychotic medication",
      definition:
        "Drugs that reduce psychotic symptoms by blocking dopamine receptors.",
    },
    {
      term: "Community care",
      definition:
        "Treating patients in community settings rather than long-term hospitalisation.",
    },
  ],
  concepts: [
    {
      id: "psych-u5-schizophrenia",
      title: "Schizophrenia and personality disorders",
      skill:
        "Describe the symptoms, causes and classification of schizophrenia and personality disorders.",
      lesson: {
        sections: [
          {
            heading: "Schizophrenia: symptoms",
            body: "Schizophrenia involves a split from reality with two symptom clusters. **Positive symptoms** add experiences not present in reality: **hallucinations** (hearing voices, seeing things), **delusions** (false fixed beliefs — persecution, grandiosity), **disorganised speech** (incoherence) and grossly disorganised behaviour. **Negative symptoms** remove normal functioning: **flat affect** (emotional numbness), **avolition** (loss of motivation), **alogia** (poverty of speech) and social withdrawal.",
          },
          {
            heading: "Causes of schizophrenia",
            body: "The **diathesis-stress model** integrates biological vulnerability with environmental triggers. **Genetic** factors: heritability ~80%; dopamine hypothesis — excess dopamine activity linked to positive symptoms (supported by antipsychotics blocking dopamine). **Neurodevelopmental**: prenatal complications, brain structural abnormalities. **Environmental stress**: life stress, urban living, cannabis use can trigger onset in genetically vulnerable individuals. Expressed emotion (hostile, critical family environments) increases relapse.",
          },
          {
            heading: "Personality disorders",
            body: "**Personality disorders** are enduring, inflexible patterns of inner experience and behaviour deviating markedly from cultural expectations, causing distress or impairment. **Cluster A** (odd/eccentric): paranoid, schizoid, schizotypal. **Cluster B** (dramatic/erratic): antisocial, borderline, histrionic, narcissistic. **Cluster C** (anxious/fearful): avoidant, dependent, obsessive-compulsive. Unlike Axis I disorders, they reflect pervasive personality traits rather than episodic symptoms.",
          },
        ],
        keyFormulas: [
          {
            name: "Symptom clusters",
            statement:
              "Positive = added (hallucinations, delusions); Negative = lost (flat affect, avolition)",
          },
          {
            name: "Diathesis-stress",
            statement:
              "Genetic vulnerability + environmental stress → disorder",
          },
          {
            name: "Personality clusters",
            statement: "A = odd; B = dramatic; C = anxious",
          },
        ],
        workedExample: {
          problem:
            "A patient hears voices commenting on their actions and believes they are being controlled by the government. Classify the symptoms.",
          solution:
            "Hearing voices = hallucination (positive symptom); belief in government control = delusion of persecution/control (positive symptom). Both are psychotic symptoms characteristic of schizophrenia.",
        },
      },
      questions: [
        {
          id: "psych-u5-schq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Flat affect and social withdrawal in schizophrenia are examples of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cognitive symptoms" },
              { id: "b", text: "Positive symptoms" },
              { id: "c", text: "Personality traits" },
              { id: "d", text: "Negative symptoms" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negative symptoms",
                statement:
                  "Loss of normal functioning — flat affect, avolition, alogia, withdrawal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Flat affect and withdrawal represent loss of normal emotional and social functioning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Negative symptoms",
            commonErrors: [
              "Confusing negative symptoms (deficits) with positive symptoms (excesses).",
            ],
          },
        },
        {
          id: "psych-u5-schq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the diathesis-stress model of schizophrenia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diathesis-stress",
                statement:
                  "Genetic vulnerability (diathesis) + environmental stress triggers disorder onset.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Diathesis: genetic predisposition creates vulnerability — not everyone with risk genes develops schizophrenia.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stress: environmental factors — life events, cannabis use, urban living, expressed emotion — trigger onset.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The interaction explains why identical twins don't always both develop the disorder.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Vulnerability + stress = disorder; neither alone is sufficient.",
            commonErrors: [
              "Treating schizophrenia as purely genetic or purely environmental.",
            ],
          },
        },
        {
          id: "psych-u5-schq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Describe the dopamine hypothesis of schizophrenia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dopamine hypothesis",
                statement:
                  "Excess dopamine activity in certain brain pathways is linked to positive symptoms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The hypothesis proposes overactivity of dopamine transmission in mesolimbic pathways.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: antipsychotic drugs that block dopamine receptors reduce positive symptoms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stimulants that increase dopamine (e.g. amphetamines) can trigger psychotic symptoms.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Limitation: doesn't explain negative symptoms well — may involve other neurotransmitters (glutamate, GABA).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Excess dopamine → positive symptoms; supported by drug evidence but incomplete.",
            commonErrors: [
              "Claiming dopamine explains all symptoms — negative symptoms need other explanations.",
            ],
          },
        },
        {
          id: "psych-u5-schq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A 22-year-old develops hallucinations, believes neighbours are plotting against them, and shows flat affect and social withdrawal.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the symptoms and classify them as positive or negative.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain two possible causes using the diathesis-stress model.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate the usefulness of the positive/negative symptom distinction.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Schizophrenia symptoms",
                statement:
                  "Positive = hallucinations/delusions; negative = flat affect/withdrawal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Hallucinations (hearing voices) and delusions (persecution beliefs) = positive symptoms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Flat affect and social withdrawal = negative symptoms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Combined presentation suggests schizophrenia or related psychotic disorder.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Diathesis: possible genetic vulnerability — family history or prenatal complications.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Stress: recent life events, substance use (cannabis), or social isolation triggered onset.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Useful: guides treatment — antipsychotics target positive symptoms, psychosocial approaches target negative.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Useful: predicts prognosis — negative symptoms are harder to treat and more disabling long-term.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Limitation: symptoms overlap and the distinction doesn't capture cognitive deficits or heterogeneity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Hallucinations/delusions positive; flat affect/withdrawal negative. (b) Genes + stress. (c) Guides treatment but incomplete.",
            commonErrors: [
              "Calling flat affect a positive symptom — it's a deficit, hence 'negative'.",
            ],
          },
        },
        {
          id: "psych-u5-schq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Hallucinations in schizophrenia are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Loss of emotional expression" },
              {
                id: "b",
                text: "False perceptions occurring without external stimulus",
              },
              { id: "c", text: "Fixed false beliefs about reality" },
              { id: "d", text: "Incoherent patterns of speech" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hallucinations",
                statement:
                  "Perceiving something (voices, images) that has no external source — a positive symptom.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hallucinations are false sensory experiences — hearing voices being the most common.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** False perceptions without external stimulus",
            commonErrors: [
              "Confusing hallucinations (perception) with delusions (belief).",
            ],
          },
        },
        {
          id: "psych-u5-schq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Avolition, a negative symptom of schizophrenia, refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inability to speak coherently" },
              { id: "b", text: "Excessive goal-directed activity" },
              { id: "c", text: "False beliefs about persecution" },
              {
                id: "d",
                text: "Loss of motivation and goal-directed behaviour",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Avolition",
                statement:
                  "Loss of motivation — inability to initiate or persist in goal-directed activity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Avolition is a deficit in motivation — the person cannot start or sustain purposeful activity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Loss of motivation and goal-directed behaviour",
            commonErrors: [
              "Confusing avolition (motivation deficit) with alogia (speech poverty).",
            ],
          },
        },
        {
          id: "psych-u5-schq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the diathesis-stress model, the 'diathesis' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The treatment that resolves the disorder" },
              {
                id: "b",
                text: "A genetic or biological predisposition to the disorder",
              },
              { id: "c", text: "An acute environmental stressor" },
              { id: "d", text: "The symptoms produced by the disorder" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diathesis",
                statement:
                  "Inherited or biological vulnerability that creates risk without guaranteeing disorder.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Diathesis = the vulnerability (usually genetic); stress = the environmental trigger.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Genetic or biological predisposition",
            commonErrors: [
              "Reversing diathesis and stress — diathesis is vulnerability, stress is trigger.",
            ],
          },
        },
        {
          id: "psych-u5-schq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Typical antipsychotic medications reduce positive symptoms of schizophrenia primarily by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enhancing GABA transmission" },
              { id: "b", text: "Reducing cortisol production" },
              { id: "c", text: "Increasing serotonin availability" },
              { id: "d", text: "Blocking dopamine receptors" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Antipsychotic mechanism",
                statement:
                  "Dopamine receptor antagonists reduce positive symptoms by lowering dopamine activity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Antipsychotics block dopamine D2 receptors, reducing the excess dopamine activity linked to positive symptoms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Blocking dopamine receptors",
            commonErrors: [
              "Confusing antipsychotics with SSRIs which target serotonin.",
            ],
          },
        },
        {
          id: "psych-u5-schq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "'Expressed emotion' in families is associated with relapse in schizophrenia because it involves:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Critical, hostile or emotionally over-involved family climates",
              },
              { id: "b", text: "High levels of warmth and acceptance" },
              {
                id: "c",
                text: "Complete emotional detachment from the patient",
              },
              { id: "d", text: "Medication non-compliance by relatives" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Expressed emotion",
                statement:
                  "Critical, hostile or over-involved family attitudes that increase relapse risk.",
              },
            ],
            steps: [
              {
                reasoning:
                  "High expressed emotion — criticism, hostility, over-involvement — acts as chronic stress triggering relapse.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Critical, hostile or over-involved family climates",
            commonErrors: [
              "Confusing expressed emotion with general family conflict — it is a specific measured construct.",
            ],
          },
        },
        {
          id: "psych-u5-schq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Cluster B personality disorders are characterised as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dramatic, emotional and erratic patterns" },
              { id: "b", text: "Psychotic symptoms like hallucinations" },
              { id: "c", text: "Odd and eccentric patterns" },
              { id: "d", text: "Anxious and fearful patterns" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personality clusters",
                statement:
                  "A = odd/eccentric; B = dramatic/erratic; C = anxious/fearful.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cluster B includes antisocial, borderline, histrionic and narcissistic — dramatic/erratic traits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Dramatic, emotional and erratic patterns",
            commonErrors: [
              "Confusing Cluster B (dramatic) with Cluster C (anxious).",
            ],
          },
        },
        {
          id: "psych-u5-schq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a study of 200 identical twin pairs, both twins developed schizophrenia in 60 pairs. What percentage of pairs showed concordance, and how many pairs had only one affected twin?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30 },
              { label: "b", answer: 140 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Concordance rate",
                statement: "Concordance % = both affected / total pairs x 100.",
              },
            ],
            steps: [
              {
                reasoning: "60 / 200 x 100 = 30% concordance.",
                marks: 1,
                markCode: "M",
                working: "60 / 200 x 100 = 30",
              },
              {
                reasoning: "200 - 60 = 140 pairs had only one twin affected.",
                marks: 1,
                markCode: "A",
                working: "200 - 60 = 140",
              },
            ],
            finalAnswer: "a) 30%, b) 140 pairs",
            commonErrors: [
              "Assuming non-concordant pairs means neither twin was affected — only one twin was affected in those pairs.",
            ],
          },
        },
        {
          id: "psych-u5-schq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "A schizophrenia clinic assessed 400 patients; 120 showed predominantly negative symptoms. What percentage showed negative symptoms, and how many did not?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30 },
              { label: "b", answer: 280 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage calculation",
                statement: "Percentage = part / whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "120 / 400 x 100 = 30% showed negative symptoms.",
                marks: 1,
                markCode: "M",
                working: "120 / 400 x 100 = 30",
              },
              {
                reasoning:
                  "400 - 120 = 280 did not show predominantly negative symptoms.",
                marks: 1,
                markCode: "A",
                working: "400 - 120 = 280",
              },
            ],
            finalAnswer: "a) 30%, b) 280 patients",
            commonErrors: [
              "Reporting the count 120 instead of the percentage for part a.",
            ],
          },
        },
        {
          id: "psych-u5-schq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe the difference between positive and negative symptoms of schizophrenia, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symptom clusters",
                statement:
                  "Positive = added experiences; negative = lost functions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Positive symptoms are experiences added to normal functioning — hallucinations, delusions, disorganised speech.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: hearing voices commenting on one's actions (hallucination) or believing neighbours are plotting (delusion).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Negative symptoms are losses of normal functioning — flat affect, avolition, alogia, social withdrawal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: emotional numbness or inability to initiate activities (avolition).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Positive = added (hallucinations, delusions); negative = lost (flat affect, avolition).",
            commonErrors: [
              "Reversing the labels — 'positive' means added, not 'good'.",
            ],
          },
        },
        {
          id: "psych-u5-schq14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain environmental stressors that can trigger schizophrenia in genetically vulnerable individuals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Environmental triggers",
                statement:
                  "Life stress, substance use, urban living and expressed emotion can trigger onset.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Life stress: major life events and chronic stress can trigger onset in vulnerable individuals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cannabis use: THC can trigger psychosis in genetically susceptible people — dose and frequency matter.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Urban living: city environments are associated with higher incidence — possibly via social stress and isolation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Expressed emotion: critical, hostile family climates increase relapse risk after an episode.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These stressors interact with genetic diathesis — they trigger rather than directly cause the disorder.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Life stress, cannabis, urban living and expressed emotion trigger onset in vulnerable individuals.",
            commonErrors: [
              "Claiming stress alone causes schizophrenia — it triggers in those already vulnerable.",
            ],
          },
        },
        {
          id: "psych-u5-schq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate the dopamine hypothesis of schizophrenia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dopamine hypothesis evaluation",
                statement:
                  "Supported by drug evidence for positive symptoms but incomplete for negative symptoms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Core claim: excess dopamine activity in mesolimbic pathways produces positive symptoms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: antipsychotics that block dopamine receptors reduce hallucinations and delusions — strong pharmacological evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: dopamine-enhancing drugs like amphetamines can induce psychotic symptoms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: does not explain negative symptoms — flat affect and avolition involve other systems.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Weakness: newer hypotheses involve glutamate, GABA and serotonin — dopamine alone is insufficient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: explains positive symptoms well but the disorder is more complex — a useful but partial model.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Strong drug evidence for positive symptoms; incomplete for negative — partial model only.",
            commonErrors: [
              "Presenting it as a complete explanation — it covers mainly positive symptoms.",
            ],
          },
        },
        {
          id: "psych-u5-schq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A 19-year-old believes they are being followed by government agents, hears a voice criticising their actions, shows flat affect and has stopped attending university.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify and classify the symptoms present in this case.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how the diathesis-stress model could account for this presentation.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate the usefulness of distinguishing positive from negative symptoms for treatment planning.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Schizophrenia case analysis",
                statement:
                  "Persecution delusion + voice hallucination = positive; flat affect + withdrawal = negative.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Delusion of persecution (government agents following) and auditory hallucination (critical voice) = positive symptoms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Flat affect and stopping university attendance (avolition/withdrawal) = negative symptoms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Combined presentation suggests a psychotic disorder such as schizophrenia.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Diathesis: possible genetic vulnerability or prenatal/neurodevelopmental risk factors.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Stress: recent life changes, substance use or social stress triggered onset in the vulnerable individual.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Useful: antipsychotics target positive symptoms while psychosocial interventions target negative ones — guides treatment choice.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Useful: negative symptoms predict poorer long-term functioning — important for prognosis.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Limitation: symptoms overlap, cognitive deficits are missed, and the split doesn't capture the whole disorder.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Delusion/hallucination positive; flat affect/withdrawal negative. (b) Vulnerability + stress trigger. (c) Guides treatment but incomplete.",
            commonErrors: [
              "Classifying flat affect as positive — it is a deficit.",
            ],
          },
        },
        {
          id: "psych-u5-schq17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Discuss whether schizophrenia should be considered a single disorder or a collection of related conditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Schizophrenia heterogeneity",
                statement:
                  "The diagnosis groups diverse presentations — questioning whether it is one disorder.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For a single disorder: shared symptoms (psychosis), similar treatment response and genetic risk factors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: patients vary enormously — some have mainly positive symptoms, others mainly negative; onset and course differ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Subtypes (paranoid, disorganised, catatonic, residual) acknowledge heterogeneity within the diagnosis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: different symptom profiles may reflect different underlying mechanisms — dopamine for positive, other systems for negative.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Criticism: the broad category may lump distinct disorders together, reducing diagnostic precision.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: schizophrenia may be better understood as a spectrum of related conditions rather than one unitary disorder.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Evidence suggests a spectrum of related conditions — heterogeneity challenges the single-disorder view.",
            commonErrors: [
              "Arguing one side only — the question requires balanced discussion.",
            ],
          },
        },
      ],
    },
    {
      id: "psych-u5-treatment",
      title: "Treatment approaches",
      skill:
        "Describe and evaluate biological, psychological and community-based treatments for mental disorders.",
      lesson: {
        sections: [
          {
            heading: "Biological treatments",
            body: "**Antipsychotics** (e.g. chlorpromazine, risperidone) block dopamine receptors, reducing positive symptoms of schizophrenia — but cause side effects (tardive dyskinesia, weight gain) and don't treat negative symptoms well. **Antidepressants**: SSRIs increase serotonin availability, effective for depression and anxiety but take weeks to work and cause side effects. **ECT** (electroconvulsive therapy) is used for severe depression — effective but controversial due to memory side effects and historical abuse.",
          },
          {
            heading: "Psychological treatments",
            body: "**CBT** is effective for depression, anxiety and OCD — identifies and challenges negative thought patterns and behaviours. **Behavioural therapies**: systematic desensitisation for phobias, ERP for OCD, behavioural activation for depression. **Psychodynamic therapy** explores unconscious conflicts and early experiences — less empirically supported than CBT. **Humanistic therapy** (person-centred) emphasizes empathy and self-actualisation. Most effective treatments combine biological and psychological approaches.",
          },
          {
            heading: "Community care and evaluation",
            body: "**Community care** treats patients in their own environments with support services — reduces institutionalisation and promotes normal functioning, but requires adequate community resources. Criticisms of treatment: biological treatments can be over-prescribed (especially to children); psychological treatments require time and motivation; relapse is common without ongoing support. The biopsychosocial model argues combining approaches produces best outcomes.",
          },
        ],
        keyFormulas: [
          {
            name: "Treatment types",
            statement:
              "Biological (drugs/ECT) + Psychological (CBT/behavioural) + Community (rehabilitation)",
          },
          {
            name: "CBT focus",
            statement: "Identify + challenge negative thoughts and behaviours",
          },
        ],
        workedExample: {
          problem:
            "Why is combined treatment often better than medication alone for schizophrenia?",
          solution:
            "Antipsychotics reduce positive symptoms but not negative ones or social functioning. Adding CBT and family therapy addresses negative symptoms, medication adherence, and relapse prevention — the biopsychosocial approach.",
        },
      },
      questions: [
        {
          id: "psych-u5-trq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "SSRIs treat depression primarily by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reducing cortisol levels" },
              { id: "b", text: "Blocking dopamine receptors" },
              { id: "c", text: "Increasing serotonin availability" },
              { id: "d", text: "Stimulating the amygdala" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SSRIs",
                statement:
                  "Selective serotonin reuptake inhibitors increase serotonin in the synapse.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SSRIs prevent serotonin reabsorption, increasing its availability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Increasing serotonin availability",
            commonErrors: [
              "Confusing SSRIs (serotonin) with antipsychotics (dopamine).",
            ],
          },
        },
        {
          id: "psych-u5-trq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the main components of cognitive behavioural therapy (CBT).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CBT",
                statement:
                  "Identifies and challenges negative thought patterns and modifies unhelpful behaviours.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cognitive component: identifies automatic negative thoughts and cognitive distortions, challenges their validity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Behavioural component: behavioural activation, exposure, and skills training to change actions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Homework between sessions reinforces new thinking and behaviour patterns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cognitive restructuring + behavioural change + homework practice.",
            commonErrors: [
              "Confusing CBT with pure talk therapy — it is structured and skills-based.",
            ],
          },
        },
        {
          id: "psych-u5-trq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate the effectiveness of antipsychotic medication for schizophrenia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Antipsychotic evaluation",
                statement:
                  "Effective for positive symptoms but limited for negative symptoms and has side effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: substantially reduces positive symptoms (hallucinations, delusions) in most patients.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: poorly effective for negative symptoms — social withdrawal and flat affect persist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Side effects: tardive dyskinesia, weight gain, sedation — can reduce quality of life and adherence.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: necessary but insufficient alone — best combined with psychological and social support.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Effective for positive symptoms but limited for negative; side effects reduce adherence — combine with other treatments.",
            commonErrors: [
              "Claiming medication cures schizophrenia — it manages symptoms, doesn't cure.",
            ],
          },
        },
        {
          id: "psych-u5-trq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A patient with severe depression has not responded to two courses of SSRIs.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe two alternative treatment approaches that could be considered.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why combined treatment might be more effective than medication alone.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate the ethical issues of using ECT for treatment-resistant depression.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Treatment resistance",
                statement:
                  "Multiple approaches may be needed; combined biological + psychological often works best.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "CBT: challenges negative thought patterns maintaining depression.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Different medication class: SNRIs, tricyclics, or augmentation with antipsychotics.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "ECT: effective for severe treatment-resistant depression despite side effects.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Medication addresses biological factors; CBT addresses cognitive and behavioural maintaining factors.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Combined approaches target multiple mechanisms and reduce relapse risk.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Memory side effects: retrograde amnesia is a significant concern.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Historical abuse: ECT was misused in institutions — informed consent is essential.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Modern ECT is safer with anaesthesia and muscle relaxants — ethical when benefits outweigh risks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) CBT + different meds + ECT. (b) Targets multiple mechanisms. (c) Memory risks vs efficacy — informed consent critical.",
            commonErrors: [
              "Continuing failed medication — treatment resistance requires approach change.",
            ],
          },
        },
        {
          id: "psych-u5-trq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Systematic desensitisation is commonly used to treat:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Major depressive disorder" },
              { id: "b", text: "Obsessive-compulsive disorder" },
              { id: "c", text: "Schizophrenia" },
              { id: "d", text: "Specific phobias" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Systematic desensitisation",
                statement:
                  "Graded exposure to feared stimulus paired with relaxation — classical conditioning treatment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Systematic desensitisation pairs a fear hierarchy with relaxation to extinguish phobic anxiety.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Specific phobias",
            commonErrors: [
              "Confusing with ERP — desensitisation uses relaxation, ERP uses response prevention.",
            ],
          },
        },
        {
          id: "psych-u5-trq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Tardive dyskinesia is a serious side effect associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CBT" },
              { id: "b", text: "Community care programmes" },
              { id: "c", text: "Antipsychotic medication" },
              { id: "d", text: "SSRIs" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tardive dyskinesia",
                statement:
                  "Involuntary repetitive movements caused by long-term antipsychotic use.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tardive dyskinesia — involuntary facial and body movements — is linked to prolonged dopamine-blocking antipsychotics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Antipsychotic medication",
            commonErrors: [
              "Attributing it to SSRIs — it is a dopamine-blocker side effect.",
            ],
          },
        },
        {
          id: "psych-u5-trq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Community care aims to treat mental disorders by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Supporting patients in their own living environments",
              },
              { id: "b", text: "Long-term hospitalisation" },
              { id: "c", text: "Using only medication" },
              { id: "d", text: "Isolating patients from society" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Community care",
                statement:
                  "Treatment delivered in community settings with support services rather than institutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Community care keeps patients in their own environments with visiting support — reducing institutionalisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Supporting patients in their own environments",
            commonErrors: [
              "Confusing community care with institutionalisation — it is the opposite.",
            ],
          },
        },
        {
          id: "psych-u5-trq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Electroconvulsive therapy (ECT) is primarily indicated for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Severe treatment-resistant depression" },
              { id: "b", text: "Mild anxiety disorders" },
              { id: "c", text: "Phobias in children" },
              { id: "d", text: "Personality disorders" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ECT indication",
                statement:
                  "ECT is reserved for severe depression unresponsive to other treatments.",
              },
            ],
            steps: [
              {
                reasoning:
                  "ECT is used mainly for severe or treatment-resistant depression — not first-line for milder conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Severe treatment-resistant depression",
            commonErrors: [
              "Thinking ECT is a first-line treatment — it is reserved for severe cases.",
            ],
          },
        },
        {
          id: "psych-u5-trq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Behavioural activation treats depression by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Gradually increasing engagement in rewarding activities",
              },
              { id: "b", text: "Exploring unconscious conflicts" },
              { id: "c", text: "Challenging negative automatic thoughts" },
              { id: "d", text: "Blocking dopamine receptors" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Behavioural activation",
                statement:
                  "Structured scheduling of pleasant and mastery activities to counter withdrawal in depression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Behavioural activation breaks the cycle of withdrawal by scheduling rewarding activities — improving mood through action.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Increasing engagement in rewarding activities",
            commonErrors: [
              "Confusing with cognitive restructuring — BA targets behaviour, not thoughts directly.",
            ],
          },
        },
        {
          id: "psych-u5-trq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Combined biological and psychological treatment is often superior to either alone because it:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Targets multiple mechanisms maintaining the disorder",
              },
              { id: "b", text: "Works for every patient equally" },
              { id: "c", text: "Requires less time from the patient" },
              { id: "d", text: "Eliminates all side effects" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combined treatment",
                statement:
                  "Medication addresses biology while therapy addresses cognition/behaviour — complementary mechanisms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Disorders have multiple maintaining factors — medication and therapy each target different ones.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Targets multiple mechanisms maintaining the disorder",
            commonErrors: [
              "Claiming combination always works — it is generally better but not universal.",
            ],
          },
        },
        {
          id: "psych-u5-trq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A psychiatric hospital reduced monthly admissions from 40 to 25 after introducing community care. What was the percentage reduction, and how many fewer admissions occurred?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 37.5 },
              { label: "b", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage reduction",
                statement: "Reduction % = (original - new) / original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "(40 - 25) / 40 x 100 = 37.5% reduction.",
                marks: 1,
                markCode: "M",
                working: "15 / 40 x 100 = 37.5",
              },
              {
                reasoning: "40 - 25 = 15 fewer admissions.",
                marks: 1,
                markCode: "A",
                working: "40 - 25 = 15",
              },
            ],
            finalAnswer: "a) 37.5%, b) 15 fewer admissions",
            commonErrors: [
              "Dividing by the new value instead of the original.",
            ],
          },
        },
        {
          id: "psych-u5-trq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "In a trial of 200 depressed patients, 120 responded to combined medication + CBT while 80 responded to medication alone. What percentage responded to each approach, and what was the difference in percentage points?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60 },
              { label: "b", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Response rates",
                statement:
                  "Combined = 120/200 = 60%; medication alone = 80/200 = 40%; difference = 20 points.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Combined: 120 / 200 x 100 = 60%; medication alone: 80 / 200 x 100 = 40%.",
                marks: 1,
                markCode: "M",
                working: "120/200 = 60%; 80/200 = 40%",
              },
              {
                reasoning:
                  "Difference = 60 - 40 = 20 percentage points in favour of combined treatment.",
                marks: 1,
                markCode: "A",
                working: "60 - 40 = 20",
              },
            ],
            finalAnswer:
              "a) 60% combined (40% medication alone), b) 20 percentage points",
            commonErrors: [
              "Comparing counts instead of percentages — both groups have the same total.",
            ],
          },
        },
        {
          id: "psych-u5-trq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe how systematic desensitisation treats phobias.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Systematic desensitisation",
                statement:
                  "Graded exposure to feared stimulus while maintaining relaxation — counterconditioning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The therapist and patient construct a fear hierarchy — ranking feared situations from least to most anxiety-provoking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The patient learns deep relaxation or uses anxiolytic medication to manage anxiety.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Exposure begins at the least feared item, paired with relaxation — gradually progressing up the hierarchy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repeated pairing replaces the fear response with relaxation — the phobia extinguishes through counterconditioning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fear hierarchy + relaxation + graded exposure = phobia extinguished.",
            commonErrors: [
              "Starting with the most feared stimulus — desensitisation is graded from least to most.",
            ],
          },
        },
        {
          id: "psych-u5-trq14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain the benefits and limitations of community care for people with mental disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Community care evaluation",
                statement:
                  "Reduces institutionalisation but depends on adequate community resources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefit: patients remain in their own environments — maintaining social connections and daily routines.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Benefit: reduces stigma and institutionalisation; promotes normal functioning and independence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Benefit: generally less expensive than long-term hospitalisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitation: requires adequate community resources — support services, housing and trained staff must exist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitation: some patients need 24-hour care that community settings cannot provide — risk of inadequate support.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Community care preserves normal life and reduces stigma but depends on resources and isn't suitable for all.",
            commonErrors: [
              "Presenting only benefits — effective evaluation requires limitations too.",
            ],
          },
        },
        {
          id: "psych-u5-trq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate the use of electroconvulsive therapy (ECT) for severe depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ECT evaluation",
                statement:
                  "Highly effective for treatment-resistant depression but carries memory risks and ethical concerns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: rapid, substantial improvement in severe depression — often when medication fails.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: can be life-saving in acute suicidal depression — faster than waiting weeks for SSRIs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: causes retrograde amnesia — patients may lose memories of events before treatment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: side effects include confusion, headache and cognitive impairment — though modern anaesthesia reduces risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ethical concern: historical misuse in institutions makes informed consent essential — patients must understand risks.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: justified for severe treatment-resistant depression when benefits outweigh risks and consent is informed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Effective for severe treatment-resistant depression but memory risks and consent issues require careful justification.",
            commonErrors: [
              "Dismissing ECT as barbaric — modern ECT is safe and effective for specific cases.",
            ],
          },
        },
        {
          id: "psych-u5-trq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A 45-year-old with severe depression has failed two SSRI trials and two CBT courses.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe three treatment options that could now be considered.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why a combined biopsychosocial approach might succeed where single treatments failed.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate the ethical considerations of each proposed treatment.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Treatment-resistant depression",
                statement:
                  "Multiple approaches needed — combined biological, psychological and social support.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "ECT: effective for severe treatment-resistant depression.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Different medication class: SNRIs, tricyclics or augmentation with antipsychotics/mood stabilisers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Intensive psychotherapy: psychodynamic therapy or schema therapy targeting deeper patterns.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Failed single treatments suggest multiple maintaining factors — addressing biology, cognition and social support simultaneously targets all mechanisms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Combined approaches reduce relapse risk and are recommended by guidelines for resistant depression.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "ECT ethics: memory side effects require informed consent; justified only when benefits clearly outweigh risks.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Medication ethics: polypharmacy risks side effects — careful monitoring and patient involvement needed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Therapy ethics: patient must be engaged and consenting — treatment resistance may reflect ambivalence needing addressing first.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) ECT + different meds + intensive therapy. (b) Multiple mechanisms targeted. (c) Consent and risk-benefit analysis essential for each.",
            commonErrors: [
              "Repeating failed treatments — resistance requires changing approach.",
            ],
          },
        },
        {
          id: "psych-u5-trq17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Discuss the criticism that psychiatric medication is over-prescribed, particularly to children.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Over-prescription criticism",
                statement:
                  "Medication is often first-line despite unknown long-term effects, especially in children.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criticism: medication is cheaper and faster than therapy — creating incentive to prescribe rather than refer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Children: developing brains may be affected by long-term medication — safety data is limited.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Alternative view: medication is effective and necessary for severe disorders — withholding it can be harmful.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: combined treatment is often best, yet medication alone is frequently prescribed — a gap between evidence and practice.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Diagnosis inflation: expanding criteria mean more people qualify for medication — possibly medicalising normal variation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: prescription should be cautious, evidence-based and combined with psychological support — not automatic first choice.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Over-prescription is a valid concern — medication should be evidence-based, monitored and combined with therapy.",
            commonErrors: [
              "Arguing medication is always wrong or always right — balanced evaluation required.",
            ],
          },
        },
      ],
    },
  ],
};
