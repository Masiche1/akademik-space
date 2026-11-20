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
              {
                id: "a",
                text: "Intense irrational fear of specific object/situation",
              },
              { id: "b", text: "General worry about everything" },
              { id: "c", text: "Sudden panic attack" },
              { id: "d", text: "Persistent low mood" },
            ],
            correctChoiceId: "a",
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
              "**(a)** Intense irrational fear of specific object/situation",
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
              { id: "b", text: "Excessive worry" },
              { id: "c", text: "Hallucinations" },
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
