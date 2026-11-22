import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "olep-u6-lesson-6-1",
  code: "6-1",
  title: "Anxiety, Stress and Depression",
  goal: "I CAN describe symptoms and causes of anxiety disorders, stress and depression.",
  standards: ["2219: Psychopathology"],
  vocabulary: [
    {
      term: "Anxiety disorder",
      definition: "Excessive, persistent worry/fear impairing function.",
    },
    {
      term: "Generalised anxiety disorder",
      definition: "Chronic excessive worry about everyday things.",
    },
    {
      term: "Stress",
      definition: "Physiological/psychological response to demands.",
    },
    {
      term: "Depression",
      definition: "Persistent low mood, loss of interest, other symptoms.",
    },
    {
      term: "Phobia",
      definition: "Intense irrational fear of specific object/situation.",
    },
    {
      term: "Panic attack",
      definition: "Sudden intense fear with physical symptoms.",
    },
  ],
  concepts: [
    {
      id: "olep-u6-anxiety-stress",
      title: "Anxiety Disorders and Stress",
      skill: "Describe types of anxiety disorders and stress response.",
      lesson: {
        sections: [
          {
            heading: "Anxiety disorders",
            body: "Generalised anxiety disorder (GAD): chronic excessive worry. Panic disorder: sudden panic attacks — racing heart, breathlessness, dizziness, fear of dying. Phobias: specific irrational fears — agoraphobia (open spaces/crowds), social phobia, specific phobias (spiders, heights). PTSD: anxiety after trauma — flashbacks, nightmares, hypervigilance.",
          },
          {
            heading: "Stress response",
            body: "Hans Selye's General Adaptation Syndrome: alarm (fight-or-flight — adrenaline), resistance (coping), exhaustion (burnout if prolonged). Acute stress = short-term; chronic stress → health problems (heart disease, weakened immunity, mental health). Stressors: life events (Holmes-Rahe scale), daily hassles, work pressure.",
          },
          {
            heading: "Causes",
            body: "Biological: genetics, brain chemistry (serotonin, GABA), hormones. Psychological: learning (conditioned fear), cognitive biases (catastrophising), trauma. Social: stressors, lack of support, life changes. Diathesis-stress model: vulnerability + stress triggers disorder.",
          },
        ],
        keyFormulas: [
          {
            name: "Anxiety/stress",
            statement:
              "GAD/panic/phobias/PTSD; GAS: alarm→resistance→exhaustion; diathesis-stress.",
          },
        ],
        workedExample: {
          problem: "What is the diathesis-stress model?",
          solution:
            "Disorder develops when biological/psychological vulnerability (diathesis) combines with stressful life events — neither alone may be enough.",
        },
      },
      questions: [
        {
          id: "olep-u6-as-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a phobia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sudden panic attack" },
              { id: "b", text: "General worry about everything" },
              {
                id: "c",
                text: "Intense irrational fear of specific object/situation",
              },
              { id: "d", text: "Persistent low mood" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phobia",
                statement: "Specific irrational fear.",
              },
            ],
            steps: [{ reasoning: "Specific fear.", marks: 1, markCode: "AO1" }],
            finalAnswer:
              "**(c)** Intense irrational fear of specific object/situation",
            commonErrors: ["Confusing with GAD."],
          },
        },
        {
          id: "olep-u6-as-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name Selye's three stages of stress response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GAS stages",
                statement: "Alarm, resistance, exhaustion.",
              },
            ],
            steps: [
              { reasoning: "Any two stages.", marks: 1, markCode: "AO1" },
              { reasoning: "All three named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Alarm (fight-or-flight), resistance (coping), exhaustion (burnout).",
            commonErrors: ["Missing exhaustion."],
          },
        },
        {
          id: "olep-u6-as-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is PTSD?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PTSD",
                statement: "Anxiety disorder after trauma.",
              },
            ],
            steps: [
              {
                reasoning: "Follows traumatic event.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Flashbacks/nightmares/hypervigilance.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Persistent symptoms.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear description.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Post-traumatic stress disorder — anxiety disorder developing after trauma with flashbacks, nightmares, hypervigilance and avoidance.",
            commonErrors: ["Confusing with GAD."],
          },
        },
        {
          id: "olep-u6-as-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Anxiety and stress.",
          parts: [
            { label: "a", prompt: "Anxiety disorders?", marks: 3 },
            { label: "b", prompt: "Stress response?", marks: 2 },
            { label: "c", prompt: "Causes?", marks: 2 },
            { label: "d", prompt: "Diathesis-stress?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anxiety/stress",
                statement: "Disorders+GAS+causes+model.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "GAD/panic/phobias.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "PTSD mentioned.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Symptoms described.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Alarm/resistance/exhaustion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Sequence correct.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Biological/psychological/social.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Examples.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Vulnerability+stress.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Interaction model.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) disorders (b) GAS (c) causes (d) diathesis-stress",
          },
        },
        {
          id: "olep-u6-as-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Agoraphobia is an intense, irrational fear of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "spiders and insects" },
              { id: "b", text: "social evaluation only" },
              { id: "c", text: "heights specifically" },
              { id: "d", text: "open spaces, crowds and situations where escape is hard" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Agoraphobia",
                statement: "Fear of open spaces/crowds.",
              },
            ],
            steps: [{ reasoning: "Agoraphobia = open-space fear.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** open spaces, crowds and situations where escape is hard",
            commonErrors: ["Confusing with specific phobias."],
          },
        },
        {
          id: "olep-u6-as-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stage of Selye's General Adaptation Syndrome involves the fight-or-flight response?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recovery" },
              { id: "b", text: "Alarm" },
              { id: "c", text: "Resistance" },
              { id: "d", text: "Exhaustion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GAS stages",
                statement: "Alarm → resistance → exhaustion.",
              },
            ],
            steps: [{ reasoning: "Fight-or-flight occurs in alarm stage.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Alarm",
            commonErrors: ["Choosing resistance or exhaustion."],
          },
        },
        {
          id: "olep-u6-as-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many stages does Selye's General Adaptation Syndrome have?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GAS",
                statement: "Alarm, resistance, exhaustion.",
              },
            ],
            steps: [{ reasoning: "Three stages.", marks: 1, markCode: "AO1" }],
            finalAnswer: "3",
            commonErrors: ["Adding a recovery stage."],
          },
        },
        {
          id: "olep-u6-as-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of stages in the General Adaptation Syndrome and (b) the number of anxiety disorders named in the lesson (GAD, panic disorder, phobias, PTSD).",
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
                name: "Counts",
                statement: "GAS 3 stages; 4 anxiety disorders.",
              },
            ],
            steps: [
              { reasoning: "Alarm, resistance, exhaustion.", marks: 1, markCode: "AO1" },
              { reasoning: "GAD, panic, phobias, PTSD.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 4",
            commonErrors: ["Merging phobia subtypes."],
          },
        },
        {
          id: "olep-u6-as-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Hypervigilance — constantly scanning the environment for threat — is a characteristic symptom of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "generalised anxiety disorder" },
              { id: "b", text: "post-traumatic stress disorder" },
              { id: "c", text: "major depression" },
              { id: "d", text: "specific phobia of spiders" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PTSD symptoms",
                statement: "Flashbacks, nightmares, hypervigilance.",
              },
            ],
            steps: [
              { reasoning: "Hypervigilance follows trauma.", marks: 1, markCode: "AO1" },
              { reasoning: "Core PTSD symptom.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** post-traumatic stress disorder",
            commonErrors: ["Confusing with GAD."],
          },
        },
        {
          id: "olep-u6-as-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of stages in the General Adaptation Syndrome and (b) the number of causal levels named for anxiety (biological, psychological, social).",
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
                statement: "GAS 3; causal levels 3.",
              },
            ],
            steps: [
              { reasoning: "Alarm, resistance, exhaustion.", marks: 1, markCode: "AO1" },
              { reasoning: "Biological, psychological, social.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 3",
            commonErrors: ["Omitting a causal level."],
          },
        },
        {
          id: "olep-u6-as-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "The diathesis-stress model proposes that a mental disorder develops when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "genetic factors alone determine illness" },
              { id: "b", text: "stress alone is always sufficient" },
              { id: "c", text: "an underlying vulnerability combines with stressful life events" },
              { id: "d", text: "childhood trauma is the only cause" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diathesis-stress",
                statement: "Vulnerability + stress trigger disorder.",
              },
            ],
            steps: [
              { reasoning: "Requires both vulnerability and stress.", marks: 1, markCode: "AO1" },
              { reasoning: "Neither alone may be enough.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** an underlying vulnerability combines with stressful life events",
            commonErrors: ["Claiming stress alone causes disorder."],
          },
        },
        {
          id: "olep-u6-as-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the number of (a) stages in the General Adaptation Syndrome, (b) anxiety disorders named, and (c) causal levels (biological/psychological/social).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 4 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "GAS 3; disorders 4; causes 3.",
              },
            ],
            steps: [
              { reasoning: "Three GAS stages.", marks: 1, markCode: "AO1" },
              { reasoning: "GAD, panic, phobias, PTSD.", marks: 1, markCode: "AO1" },
              { reasoning: "Three causal levels.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 4 (c) 3",
            commonErrors: ["Mixing disorders with causes."],
          },
        },
        {
          id: "olep-u6-as-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Chronic stress is harmful to health mainly because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "it is always short-lived" },
              { id: "b", text: "it only affects the immune system positively" },
              { id: "c", text: "it increases serotonin levels" },
              { id: "d", text: "prolonged activation of the stress response leads to exhaustion and illness" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chronic stress",
                statement: "Prolonged GAS → exhaustion → illness.",
              },
            ],
            steps: [
              { reasoning: "GAS exhaustion stage is damaging.", marks: 1, markCode: "AO1" },
              { reasoning: "Links to heart disease, immunity, mental health.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** prolonged activation of the stress response leads to exhaustion and illness",
            commonErrors: ["Confusing acute and chronic stress."],
          },
        },
        {
          id: "olep-u6-as-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the number of (a) stages in the stress response, (b) types of stressors named (life events, daily hassles, work pressure), and (c) anxiety disorders listed.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
              { label: "c", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "GAS 3; stressors 3; disorders 4.",
              },
            ],
            steps: [
              { reasoning: "Alarm, resistance, exhaustion.", marks: 1, markCode: "AO1" },
              { reasoning: "Life events, daily hassles, work pressure.", marks: 1, markCode: "AO1" },
              { reasoning: "GAD, panic, phobias, PTSD.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 3 (c) 4",
            commonErrors: ["Missing PTSD as a disorder."],
          },
        },
        {
          id: "olep-u6-as-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Catastrophising, as a cognitive factor in anxiety, involves...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "avoiding all thoughts about danger" },
              { id: "b", text: "ignoring negative information" },
              { id: "c", text: "blaming others for problems" },
              { id: "d", text: "expecting the worst possible outcome from situations" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catastrophising",
                statement: "Cognitive bias predicting worst outcomes.",
              },
            ],
            steps: [
              { reasoning: "Catastrophising = worst-case thinking.", marks: 1, markCode: "AO1" },
              { reasoning: "Maintains anxiety.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** expecting the worst possible outcome from situations",
            commonErrors: ["Confusing with denial."],
          },
        },
        {
          id: "olep-u6-as-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the diathesis-stress model using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diathesis-stress",
                statement: "Vulnerability + stressor = disorder.",
              },
            ],
            steps: [
              {
                reasoning: "Diathesis = biological/psychological vulnerability.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Stress = triggering life event.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example: genetic vulnerability + bereavement → depression/anxiety.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Neither factor alone may be sufficient.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "A person with a genetic/psychological vulnerability (diathesis) who experiences a major stressor (e.g., job loss, trauma) is more likely to develop a disorder — the interaction explains why not everyone exposed to stress becomes ill.",
            commonErrors: ["Describing only one factor."],
          },
        },
      ],
    },
    {
      id: "olep-u6-depression",
      title: "Depression and OCD",
      skill:
        "Describe depression, OCD and their biological/psychological explanations.",
      lesson: {
        sections: [
          {
            heading: "Depression",
            body: "Major depressive disorder: persistent low mood ≥2 weeks, loss of interest (anhedonia), sleep/appetite changes, fatigue, guilt, suicidal thoughts. Biological: serotonin/noradrenaline imbalance. Psychological: Beck's negative cognitive triad — negative view of self, world, future. Social: loss, isolation, stressors.",
          },
          {
            heading: "OCD",
            body: "Obsessive-compulsive disorder: obsessions (intrusive unwanted thoughts) + compulsions (repetitive behaviours to reduce anxiety). E.g., fear of contamination → hand-washing; checking rituals. Biological: serotonin dysfunction. Psychological: learning (negative reinforcement — compulsion reduces anxiety temporarily).",
          },
          {
            heading: "Schizophrenia",
            body: "Psychotic disorder: positive symptoms (hallucinations, delusions) and negative symptoms (flat affect, social withdrawal, poverty of speech). Biological: dopamine hypothesis, genetic vulnerability. Psychological: family dysfunction theories (expressed emotion). Social: stress triggers in vulnerable individuals.",
          },
        ],
        keyFormulas: [
          {
            name: "Mood/psychosis",
            statement:
              "Depression: low mood+anhedonia; OCD: obsessions+compulsions; Schizophrenia: positive/negative symptoms.",
          },
        ],
        workedExample: {
          problem: "What is Beck's negative cognitive triad?",
          solution:
            "Depressed people view self, world and future negatively — cognitive distortion underlying depression.",
        },
      },
      questions: [
        {
          id: "olep-u6-dd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is anhedonia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Loss of interest/pleasure in activities" },
              { id: "b", text: "Hallucinations" },
              { id: "c", text: "Excessive worry" },
              { id: "d", text: "Compulsive rituals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anhedonia",
                statement: "Loss of pleasure.",
              },
            ],
            steps: [
              { reasoning: "Loss of interest.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Loss of interest/pleasure in activities",
            commonErrors: ["Confusing with anxiety."],
          },
        },
        {
          id: "olep-u6-dd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are positive vs negative symptoms of schizophrenia?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Schizophrenia symptoms",
                statement: "Positive=added; negative=lost.",
              },
            ],
            steps: [
              {
                reasoning: "Positive: hallucinations/delusions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Negative: flat affect/withdrawal.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Positive: hallucinations, delusions (added experiences); negative: flat affect, social withdrawal, poverty of speech (lost functions).",
            commonErrors: ["Reversed."],
          },
        },
        {
          id: "olep-u6-dd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is Beck's negative cognitive triad?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cognitive triad",
                statement: "Negative view of self/world/future.",
              },
            ],
            steps: [
              {
                reasoning: "Negative view of self.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Negative view of world/future.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Explains depression thinking.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Depressed people view themselves, the world and the future negatively — cognitive distortion underlying depression.",
            commonErrors: ["Vague 'negative thinking'."],
          },
        },
        {
          id: "olep-u6-dd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Depression, OCD, schizophrenia.",
          parts: [
            { label: "a", prompt: "Depression symptoms?", marks: 3 },
            { label: "b", prompt: "OCD?", marks: 2 },
            { label: "c", prompt: "Schizophrenia?", marks: 2 },
            { label: "d", prompt: "Biological explanations?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Disorders",
                statement: "Depression+OCD+schizophrenia+biology.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Low mood/anhedonia.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Sleep/appetite/fatigue.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Cognitive triad.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Obsessions+compulsions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Anxiety reduction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Positive/negative symptoms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Hallucinations/delusions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Serotonin/dopamine.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Genetic vulnerability.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) depression (b) OCD (c) schizophrenia (d) biology",
          },
        },
        {
          id: "olep-u6-dd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a diagnosis of major depressive disorder, a persistently low mood must last for at least...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 days" },
              { id: "b", text: "2 months" },
              { id: "c", text: "6 months" },
              { id: "d", text: "2 weeks" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MDD duration",
                statement: "Low mood ≥ 2 weeks.",
              },
            ],
            steps: [{ reasoning: "Two-week criterion.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** 2 weeks",
            commonErrors: ["Confusing with brief sadness."],
          },
        },
        {
          id: "olep-u6-dd-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Obsessions in OCD are best described as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "hallucinated voices" },
              { id: "b", text: "repetitive rituals performed to reduce anxiety" },
              { id: "c", text: "intrusive, unwanted thoughts or images" },
              { id: "d", text: "persistent low mood" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Obsessions",
                statement: "Intrusive unwanted thoughts.",
              },
            ],
            steps: [{ reasoning: "Obsessions = thoughts; compulsions = behaviours.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** intrusive, unwanted thoughts or images",
            commonErrors: ["Confusing obsessions with compulsions."],
          },
        },
        {
          id: "olep-u6-dd-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the minimum duration (in weeks) of persistently low mood required for a diagnosis of major depressive disorder?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MDD criterion",
                statement: "Low mood ≥ 2 weeks.",
              },
            ],
            steps: [{ reasoning: "Two-week minimum.", marks: 1, markCode: "AO1" }],
            finalAnswer: "2",
            commonErrors: ["Saying one day or one month."],
          },
        },
        {
          id: "olep-u6-dd-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the minimum number of weeks of low mood for depression and (b) the number of components in Beck's negative cognitive triad.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Depression facts",
                statement: "2 weeks; triad of 3.",
              },
            ],
            steps: [
              { reasoning: "Two-week criterion.", marks: 1, markCode: "AO1" },
              { reasoning: "Self, world, future.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 2 (b) 3",
            commonErrors: ["Mixing up the two concepts."],
          },
        },
        {
          id: "olep-u6-dd-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compulsions in OCD primarily serve to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "express unconscious anger" },
              { id: "b", text: "create new obsessions" },
              { id: "c", text: "please other people" },
              { id: "d", text: "reduce the anxiety caused by obsessions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compulsions",
                statement: "Behaviours reducing obsession anxiety.",
              },
            ],
            steps: [
              { reasoning: "Compulsions reduce anxiety temporarily.", marks: 1, markCode: "AO1" },
              { reasoning: "Reinforced by negative reinforcement.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** reduce the anxiety caused by obsessions",
            commonErrors: ["Confusing function with cause."],
          },
        },
        {
          id: "olep-u6-dd-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of components in Beck's negative cognitive triad and (b) the number of symptom types in schizophrenia (positive and negative).",
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
                statement: "Triad 3; symptom types 2.",
              },
            ],
            steps: [
              { reasoning: "Self, world, future.", marks: 1, markCode: "AO1" },
              { reasoning: "Positive and negative.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 2",
            commonErrors: ["Swapping the two counts."],
          },
        },
        {
          id: "olep-u6-dd-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of the following is a NEGATIVE symptom of schizophrenia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Disorganised speech" },
              { id: "b", text: "Flat affect and social withdrawal" },
              { id: "c", text: "Hallucinations" },
              { id: "d", text: "Delusions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negative symptoms",
                statement: "Loss of normal function: flat affect, withdrawal.",
              },
            ],
            steps: [
              { reasoning: "Negative = lost functions.", marks: 1, markCode: "AO1" },
              { reasoning: "Hallucinations/delusions are positive.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Flat affect and social withdrawal",
            commonErrors: ["Reversing positive and negative."],
          },
        },
        {
          id: "olep-u6-dd-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give (a) the minimum weeks of low mood for depression, (b) the number of components in Beck's triad, and (c) the number of schizophrenia symptom types.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counts",
                statement: "2 weeks; triad 3; symptoms 2.",
              },
            ],
            steps: [
              { reasoning: "Two-week criterion.", marks: 1, markCode: "AO1" },
              { reasoning: "Three triad components.", marks: 1, markCode: "AO1" },
              { reasoning: "Positive and negative.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 2 (b) 3 (c) 2",
            commonErrors: ["Mixing disorders."],
          },
        },
        {
          id: "olep-u6-dd-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Beck's negative cognitive triad involves negative views of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "self, the world and the future" },
              { id: "b", text: "self only" },
              { id: "c", text: "family and work only" },
              { id: "d", text: "past events only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cognitive triad",
                statement: "Negative self/world/future.",
              },
            ],
            steps: [
              { reasoning: "Three negative viewpoints.", marks: 1, markCode: "AO1" },
              { reasoning: "Core of Beck's theory.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** self, the world and the future",
            commonErrors: ["Naming only one element."],
          },
        },
        {
          id: "olep-u6-dd-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give (a) the minimum weeks of low mood for depression, (b) the number of components in Beck's triad, and (c) the number of neurotransmitters linked to depression (serotonin, noradrenaline).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Depression counts",
                statement: "2 weeks; 3 triad; 2 neurotransmitters.",
              },
            ],
            steps: [
              { reasoning: "Two weeks.", marks: 1, markCode: "AO1" },
              { reasoning: "Self, world, future.", marks: 1, markCode: "AO1" },
              { reasoning: "Serotonin and noradrenaline.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 2 (b) 3 (c) 2",
            commonErrors: ["Missing noradrenaline."],
          },
        },
        {
          id: "olep-u6-dd-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The dopamine hypothesis proposes that schizophrenia is linked to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "excess dopamine activity" },
              { id: "b", text: "low dopamine activity" },
              { id: "c", text: "high GABA levels" },
              { id: "d", text: "low serotonin only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dopamine hypothesis",
                statement: "Excess dopamine → positive symptoms.",
              },
            ],
            steps: [
              { reasoning: "Schizophrenia = excess dopamine.", marks: 1, markCode: "AO1" },
              { reasoning: "Antipsychotics block dopamine.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** excess dopamine activity",
            commonErrors: ["Confusing with depression's serotonin link."],
          },
        },
        {
          id: "olep-u6-dd-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the biological and psychological explanations of depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depression explanations",
                statement: "Serotonin vs Beck's triad.",
              },
            ],
            steps: [
              {
                reasoning: "Biological: serotonin/noradrenaline imbalance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Psychological: Beck's negative cognitive triad/distortions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Social: loss, isolation, stressors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Integrated/biopsychosocial conclusion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Biological explanations cite serotonin/noradrenaline imbalance; psychological explanations cite Beck's negative cognitive triad and distortions; social factors (loss, stress) also contribute — most likely an interaction.",
            commonErrors: ["Only one explanation given."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u6-6-1-notes",
      title: "Disorders — notes",
      summary:
        "Anxiety/stress (GAS, diathesis-stress); depression, OCD, schizophrenia.",
      sections: [
        {
          heading: "Anxiety/stress",
          body: "GAD/panic/phobias/PTSD; Selye's GAS; diathesis-stress model.",
        },
        {
          heading: "Disorders",
          body: "Depression: low mood+anhedonia+triad; OCD: obsessions+compulsions; Schizophrenia: positive/negative; serotonin/dopamine.",
        },
      ],
    },
  ],
};
