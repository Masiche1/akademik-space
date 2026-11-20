import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "psych-u5-lesson-5-2",
  code: "5-2",
  title: "Anxiety Disorders, Depression and OCD",
  goal: "I CAN describe the characteristics of anxiety disorders, major depressive disorder and OCD, and explain Beck's cognitive model.",
  standards: ["Paper 1", "Paper 2", "Topic 5"],
  vocabulary: [
    {
      term: "Generalised anxiety disorder",
      definition:
        "Persistent, excessive worry about everyday events lasting at least six months.",
    },
    {
      term: "Phobia",
      definition:
        "An intense, irrational fear of a specific object or situation leading to avoidance.",
    },
    {
      term: "Major depressive disorder",
      definition:
        "A mood disorder characterised by persistent sadness, loss of interest and other symptoms for at least two weeks.",
    },
    {
      term: "OCD",
      definition:
        "Obsessive-compulsive disorder — intrusive thoughts (obsessions) and repetitive behaviours (compulsions).",
    },
    {
      term: "Cognitive triad",
      definition:
        "Beck's three negative beliefs about self, world and future underlying depression.",
    },
    {
      term: "Anhedonia",
      definition:
        "Loss of pleasure or interest in previously enjoyable activities — a core depression symptom.",
    },
  ],
  concepts: [
    {
      id: "psych-u5-anxiety-depression",
      title: "Anxiety disorders and depression",
      skill:
        "Describe the symptoms and diagnostic features of GAD, phobias, major depressive disorder and explain cognitive explanations.",
      lesson: {
        sections: [
          {
            heading: "Anxiety disorders",
            body: "**Generalised anxiety disorder (GAD)** involves persistent, excessive worry about everyday matters lasting at least six months, with physical symptoms (restlessness, fatigue, muscle tension) and difficulty controlling worry. **Phobias** are intense, irrational fears of specific objects or situations (e.g. heights, spiders, enclosed spaces) producing avoidance that disrupts functioning. **Panic disorder** involves recurrent unexpected panic attacks — sudden overwhelming fear with physical symptoms (racing heart, breathlessness) and fear of future attacks.",
          },
          {
            heading: "Major depressive disorder",
            body: "**Major depressive disorder (MDD)** requires at least five symptoms for two weeks including depressed mood or **anhedonia** (loss of pleasure). Other symptoms: sleep disturbance, appetite changes, fatigue, feelings of worthlessness or guilt, concentration problems, psychomotor changes, and recurrent thoughts of death or suicide. Depression involves negative thinking patterns, biological factors (serotonin, genetics) and life stressors.",
          },
          {
            heading: "Beck's cognitive model",
            body: "Aaron **Beck (1967)** proposed depression stems from the **cognitive triad**: negative views of self ('I'm worthless'), the world ('everything is against me') and the future ('things will never improve'). These schemas are activated by stress and produce automatic negative thoughts, which maintain depression. Beck also identified **cognitive distortions** — systematic errors like overgeneralisation, catastrophising and selective abstraction — that bias information processing toward the negative.",
          },
        ],
        keyFormulas: [
          {
            name: "MDD criteria",
            statement:
              "5+ symptoms for 2+ weeks including depressed mood or anhedonia",
          },
          {
            name: "Cognitive triad",
            statement: "Negative views of self + world + future → depression",
          },
        ],
        workedExample: {
          problem:
            "A depressed student thinks 'I failed one test, so I'm a complete failure'. Identify the cognitive distortion.",
          solution:
            "Overgeneralisation — extending one failure to a global self-judgement. This is a Beckian cognitive distortion that maintains depressive thinking.",
        },
      },
      questions: [
        {
          id: "psych-u5-adq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Anhedonia refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excessive worry about future events" },
              { id: "b", text: "Loss of pleasure or interest in activities" },
              { id: "c", text: "Intrusive repetitive thoughts" },
              { id: "d", text: "Persistent sadness lasting months" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anhedonia",
                statement:
                  "Inability to experience pleasure from previously enjoyable activities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Anhedonia = loss of pleasure/interest, a core depression symptom.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Loss of pleasure or interest",
            commonErrors: ["Confusing anhedonia with anxiety or OCD symptoms."],
          },
        },
        {
          id: "psych-u5-adq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the three components of Beck's cognitive triad.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cognitive triad",
                statement:
                  "Negative views of self, world and future underpin depression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Negative view of self: 'I am worthless, inadequate, unlovable'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Negative view of the world: 'everything is against me, no one cares'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Negative view of the future: 'things will never get better, hopelessness'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Negative self + world + future = cognitive triad underlying depression.",
            commonErrors: ["Omitting one component — all three are required."],
          },
        },
        {
          id: "psych-u5-adq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how cognitive distortions maintain depression according to Beck.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cognitive distortions",
                statement:
                  "Systematic errors in thinking bias information processing toward the negative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Depressed individuals selectively attend to negative information and ignore positive — selective abstraction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They overgeneralise single failures into global self-judgements and catastrophise minor setbacks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These distortions filter experience through the negative cognitive triad, confirming and strengthening depressive beliefs.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "This creates a self-perpetuating cycle: negative thoughts → negative mood → more negative processing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Distortions bias processing negatively, confirming triad beliefs and maintaining depression.",
            commonErrors: [
              "Saying distortions cause depression directly — they maintain existing negative schemas.",
            ],
          },
        },
        {
          id: "psych-u5-adq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student experiences persistent worry about exams, sleep problems and muscle tension for eight months.",
          parts: [
            {
              label: "a",
              prompt: "Identify the likely disorder and justify the diagnosis.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Distinguish this disorder from a specific phobia.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate biological versus psychological explanations for this disorder.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anxiety disorders",
                statement:
                  "GAD involves chronic worry + physical symptoms; phobias involve specific feared objects.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Generalised anxiety disorder — persistent excessive worry lasting 8 months (criterion: 6+ months).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Physical symptoms: sleep disturbance, muscle tension — consistent with GAD diagnostic criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Worry is generalised across everyday matters, not focused on one object.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Phobia: intense fear of specific object/situation with avoidance; GAD: diffuse worry without specific target.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Phobia produces immediate panic on exposure; GAD produces chronic low-grade anxiety.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Biological: genetic predisposition, neurotransmitter imbalance (GABA, serotonin) — evidence from family studies.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Psychological: learned anxiety through conditioning, cognitive biases toward threat.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Most likely interaction — genes create vulnerability, stress triggers expression.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) GAD — chronic worry + somatic symptoms. (b) Phobia = specific fear; GAD = generalised. (c) Interaction of biology + psychology.",
            commonErrors: [
              "Diagnosing phobia — the worry is generalised, not object-specific.",
            ],
          },
        },
        {
          id: "psych-u5-adq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Generalised anxiety disorder requires excessive worry lasting at least:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two weeks" },
              { id: "b", text: "One month" },
              { id: "c", text: "Six months" },
              { id: "d", text: "One year" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GAD duration",
                statement:
                  "Excessive worry must persist for at least six months to meet diagnostic criteria.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GAD criteria require persistent worry for six months or more.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Six months",
            commonErrors: [
              "Confusing GAD's six-month criterion with MDD's two-week duration.",
            ],
          },
        },
        {
          id: "psych-u5-adq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Beck's cognitive triad consists of negative views of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Self, world and future" },
              { id: "b", text: "Self, family and work" },
              { id: "c", text: "Past, present and future" },
              { id: "d", text: "Self, others and God" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cognitive triad",
                statement:
                  "Negative views of self, the world and the future underpin depression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The triad's three components are negative beliefs about self, world and future.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Self, world and future",
            commonErrors: [
              "Omitting one component or substituting family/work for world/future.",
            ],
          },
        },
        {
          id: "psych-u5-adq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Catastrophising, a cognitive distortion identified by Beck, involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignoring positive information entirely" },
              {
                id: "b",
                text: "Magnifying the worst possible outcome of an event",
              },
              { id: "c", text: "Blaming oneself for unrelated events" },
              { id: "d", text: "Predicting success in all situations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catastrophising",
                statement:
                  "Expecting the worst possible outcome and treating it as inevitable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Catastrophising exaggerates negative outcomes — a minor setback becomes a disaster.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Magnifying the worst possible outcome",
            commonErrors: [
              "Confusing catastrophising with overgeneralisation or selective abstraction.",
            ],
          },
        },
        {
          id: "psych-u5-adq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For a diagnosis of major depressive disorder, symptoms must be present for at least:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One week" },
              { id: "b", text: "Two weeks" },
              { id: "c", text: "Six months" },
              { id: "d", text: "One year" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MDD duration",
                statement:
                  "Five or more symptoms including depressed mood or anhedonia, lasting at least two weeks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "MDD requires symptoms for at least two consecutive weeks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Two weeks",
            commonErrors: [
              "Confusing with GAD's six-month duration criterion.",
            ],
          },
        },
        {
          id: "psych-u5-adq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Panic disorder differs from generalised anxiety disorder because panic disorder involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chronic worry about everyday events" },
              {
                id: "b",
                text: "Sudden, unexpected panic attacks with intense physical symptoms",
              },
              {
                id: "c",
                text: "Fear of a specific object leading to avoidance",
              },
              { id: "d", text: "Obsessive thoughts and compulsive rituals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Panic vs GAD",
                statement:
                  "Panic = sudden attacks; GAD = chronic diffuse worry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Panic disorder features recurrent unexpected panic attacks — sudden overwhelming fear with physical symptoms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "GAD is chronic worry without discrete attacks; phobia (c) is object-specific; OCD (d) involves rituals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Sudden, unexpected panic attacks",
            commonErrors: [
              "Confusing panic disorder with GAD — attacks vs chronic worry.",
            ],
          },
        },
        {
          id: "psych-u5-adq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Selective abstraction, a cognitive distortion, involves:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Focusing on one negative detail while ignoring the wider context",
              },
              {
                id: "b",
                text: "Applying one bad experience to all future situations",
              },
              { id: "c", text: "Expecting the worst possible outcome" },
              { id: "d", text: "Discounting positive achievements entirely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Selective abstraction",
                statement:
                  "Drawing conclusions from one negative detail while ignoring positive or contextual information.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Selective abstraction isolates a single negative element — e.g. one criticism among many compliments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Choice (b) describes overgeneralisation and (c) catastrophising — different distortions.",
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
              "**(a)** Focusing on one negative detail, ignoring context",
            commonErrors: [
              "Confusing selective abstraction with overgeneralisation.",
            ],
          },
        },
        {
          id: "psych-u5-adq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a survey of 250 adults, 40 reported symptoms meeting the criteria for major depressive disorder at some point. What percentage of the sample reported depression, and how many did not?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 16 },
              { label: "b", answer: 210 },
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
                reasoning: "40 / 250 x 100 = 16% reported depression.",
                marks: 1,
                markCode: "M",
                working: "40 / 250 x 100 = 16",
              },
              {
                reasoning: "250 - 40 = 210 did not report depression.",
                marks: 1,
                markCode: "A",
                working: "250 - 40 = 210",
              },
            ],
            finalAnswer: "a) 16%, b) 210 adults",
            commonErrors: [
              "Dividing by the wrong base or forgetting to multiply by 100.",
            ],
          },
        },
        {
          id: "psych-u5-adq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "A CBT trial treated 150 patients with anxiety disorders; 90 showed significant improvement. What percentage improved, and how many did not improve?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60 },
              { label: "b", answer: 60 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Treatment response rate",
                statement:
                  "Response % = improved patients / total treated x 100.",
              },
            ],
            steps: [
              {
                reasoning: "90 / 150 x 100 = 60% improved.",
                marks: 1,
                markCode: "M",
                working: "90 / 150 x 100 = 60",
              },
              {
                reasoning: "150 - 90 = 60 patients did not improve.",
                marks: 1,
                markCode: "A",
                working: "150 - 90 = 60",
              },
            ],
            finalAnswer: "a) 60%, b) 60 patients",
            commonErrors: [
              "Answering part b with the improved count instead of the non-improved count.",
            ],
          },
        },
        {
          id: "psych-u5-adq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe the key characteristics of a specific phobia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phobia",
                statement:
                  "Intense, irrational fear of a specific object or situation producing avoidance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marked, persistent fear of a specific object or situation — e.g. heights, spiders, enclosed spaces.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The fear is irrational or disproportionate to the actual danger posed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Exposure produces immediate anxiety or panic, leading to active avoidance of the feared stimulus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Avoidance disrupts daily functioning — the person organises life around escaping the fear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Specific irrational fear + panic on exposure + avoidance that disrupts functioning.",
            commonErrors: [
              "Describing generalised anxiety instead — phobias are stimulus-specific.",
            ],
          },
        },
        {
          id: "psych-u5-adq14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain biological factors that may contribute to major depressive disorder.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biological factors in depression",
                statement:
                  "Neurotransmitter imbalance, genetics and brain changes contribute to depression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Neurotransmitter hypothesis: low serotonin and noradrenaline activity is linked to depressed mood — supported by SSRI effectiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Genetic factors: depression runs in families; twin studies show moderate heritability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stress response: prolonged cortisol elevation from chronic stress may damage mood-regulating systems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Neuroanatomical: reduced activity in prefrontal cortex and altered hippocampal function are associated with depression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Biology interacts with psychology — stress triggers expression in vulnerable individuals.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Serotonin/noradrenaline imbalance, genetics, cortisol and brain changes contribute to depression.",
            commonErrors: [
              "Treating depression as purely biological — psychological and social factors also matter.",
            ],
          },
        },
        {
          id: "psych-u5-adq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate Beck's cognitive model of depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beck's model evaluation",
                statement:
                  "Cognitive triad and distortions explain maintenance of depression but causation direction is debated.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: the cognitive triad (negative self/world/future) accurately describes depressed thinking patterns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: supported by evidence — depressed individuals show the predicted distortions and negative automatic thoughts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: CBT derived from the model is effective, providing indirect support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: correlation is not causation — negative thinking may result from depression rather than cause it.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Weakness: ignores biological factors (serotonin, genetics) — depression may precede cognitive change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: the model explains maintenance well but is incomplete as a full causal account.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Explains depressed thinking and underpins effective CBT, but causation direction and biological factors limit it.",
            commonErrors: [
              "Claiming Beck proved cognition causes depression — evidence shows association and maintenance.",
            ],
          },
        },
        {
          id: "psych-u5-adq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A 30-year-old has felt persistently sad, lost interest in hobbies, sleeps 10 hours daily, feels worthless and has had recurring thoughts of death for three weeks.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the likely disorder and justify the diagnosis using criteria.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how Beck's cognitive triad might manifest in this patient.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate biological versus psychological treatment approaches for this case.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MDD diagnosis and treatment",
                statement:
                  "5+ symptoms for 2+ weeks; Beck's triad explains thinking; combined treatment often best.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Major depressive disorder — symptoms present for three weeks (exceeds two-week criterion).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Shows depressed mood, anhedonia (lost interest), sleep disturbance, worthlessness and suicidal ideation — 5+ criteria met.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Functional impairment and symptom cluster confirm the diagnosis.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Negative self: 'I am worthless' beliefs; negative world: 'nothing matters to anyone'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Negative future: hopelessness expressed through recurring thoughts of death.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Biological: SSRIs target serotonin imbalance; effective but take weeks and have side effects.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Psychological: CBT challenges the triad and distortions maintaining depression — addresses maintaining factors.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Combined treatment targets both mechanisms and reduces relapse risk — often optimal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) MDD — duration + 5+ symptoms met. (b) Triad visible in worthlessness + hopelessness. (c) Combined treatment optimal.",
            commonErrors: [
              "Diagnosing adjustment disorder — three weeks of symptoms meets MDD criteria.",
            ],
          },
        },
        {
          id: "psych-u5-adq17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Discuss the role of life events versus cognitive vulnerability in the onset of depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diathesis-stress in depression",
                statement:
                  "Cognitive vulnerability interacts with life stress to trigger depression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Life events: stressful experiences — loss, failure, trauma — are strongly associated with depression onset.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cognitive vulnerability: negative schemas and the triad create a predisposition to interpret events negatively.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interaction: the same event may trigger depression in a vulnerable person but not in a resilient one.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: Beck's research shows negative thinking mediates the stress-depression link.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Criticism: not everyone exposed to stress develops depression — vulnerability varies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: neither factor alone suffices — the diathesis-stress interaction best explains onset.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Life events trigger depression in cognitively vulnerable individuals — interaction model best fits evidence.",
            commonErrors: [
              "Arguing one factor alone causes depression — evidence supports interaction.",
            ],
          },
        },
      ],
    },
    {
      id: "psych-u5-ocd",
      title: "Obsessive-compulsive disorder",
      skill:
        "Describe the characteristics of OCD including obsessions and compulsions, and explain its treatment.",
      lesson: {
        sections: [
          {
            heading: "Characteristics of OCD",
            body: "**Obsessive-compulsive disorder (OCD)** involves persistent, intrusive, unwanted thoughts or images (**obsessions**) that cause anxiety, and repetitive behaviours or mental acts (**compulsions**) performed to reduce that anxiety or prevent feared events. Common obsessions: contamination fears, fear of harm, need for symmetry. Common compulsions: washing, checking, counting, ordering. The compulsions provide temporary relief but reinforce the obsession cycle — performing them strengthens the belief that the obsession is dangerous.",
          },
          {
            heading: "Causes of OCD",
            body: "**Genetic factors**: OCD runs in families; twin studies show heritability. **Neurobiological**: abnormalities in serotonin systems and brain circuits linking orbitofrontal cortex, anterior cingulate and basal ganglia. **Learning**: compulsions are negatively reinforced — they reduce anxiety, so they are repeated. **Cognitive**: inflated responsibility beliefs ('if I don't check, something bad will happen') and thought-action fusion ('thinking it makes it more likely').",
          },
          {
            heading: "Treating OCD",
            body: "**Exposure and response prevention (ERP)**: patients gradually face feared situations while resisting compulsions — breaking the anxiety-compulsion cycle through extinction learning. **Cognitive behavioural therapy (CBT)** challenges inflated responsibility beliefs. **Medication**: SSRIs (selective serotonin reuptake inhibitors) increase serotonin availability. ERP is the most effective psychological treatment; combined approaches work best for severe cases.",
          },
        ],
        keyFormulas: [
          {
            name: "OCD cycle",
            statement:
              "Obsession → anxiety → compulsion → temporary relief → stronger obsession",
          },
          {
            name: "Key treatment",
            statement: "ERP = exposure + resist compulsion → extinction",
          },
        ],
        workedExample: {
          problem: "Why do compulsions reinforce rather than cure OCD?",
          solution:
            "Compulsions provide immediate anxiety relief (negative reinforcement), which strengthens the behaviour. The relief prevents learning that anxiety would naturally subside — so the obsession-compulsion cycle is maintained.",
        },
      },
      questions: [
        {
          id: "psych-u5-ocdq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In OCD, compulsions are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Intrusive unwanted thoughts" },
              { id: "b", text: "Repetitive behaviours reducing anxiety" },
              { id: "c", text: "Persistent low mood" },
              { id: "d", text: "Avoidance of all social situations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compulsions",
                statement:
                  "Repetitive behaviours performed to reduce anxiety from obsessions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compulsions are behavioural responses to obsessions, not the thoughts themselves.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Repetitive behaviours reducing anxiety",
            commonErrors: [
              "Confusing obsessions (thoughts) with compulsions (behaviours).",
            ],
          },
        },
        {
          id: "psych-u5-ocdq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how compulsions maintain OCD through negative reinforcement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative reinforcement in OCD",
                statement:
                  "Compulsions reduce anxiety, which reinforces the behaviour and maintains the cycle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Obsession triggers anxiety; compulsion is performed to reduce it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Anxiety reduction is negatively reinforcing — the compulsion becomes more likely to be repeated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The person never learns anxiety would subside naturally — the cycle is maintained indefinitely.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Compulsions relieve anxiety → negatively reinforced → cycle maintained.",
            commonErrors: [
              "Calling it positive reinforcement — removing anxiety is negative reinforcement.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Describe how exposure and response prevention treats OCD.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ERP",
                statement:
                  "Facing feared situations without performing compulsions breaks the anxiety-compulsion cycle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Patient is gradually exposed to anxiety-provoking situations that trigger obsessions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They are instructed to resist performing the compulsion — response prevention.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Anxiety naturally peaks and subsides without the compulsion — extinction learning occurs.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Repeated success teaches the patient that anxiety is tolerable and compulsions are unnecessary.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Exposure + resist compulsion → anxiety habituates → compulsions extinguish.",
            commonErrors: [
              "Confusing ERP with flooding — ERP is graded and paired with response prevention.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A patient washes their hands 50 times daily fearing contamination, causing raw skin and social withdrawal.",
          parts: [
            {
              label: "a",
              prompt: "Identify the obsessions and compulsions in this case.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how this behaviour is maintained using learning principles.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate ERP as a treatment for this patient.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OCD maintenance and treatment",
                statement:
                  "Compulsions are negatively reinforced; ERP breaks the cycle through exposure and prevention.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Obsession: fear of contamination/germs causing intrusive anxiety.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Compulsion: repetitive hand-washing performed to reduce contamination anxiety.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Washing reduces anxiety temporarily — negatively reinforcing the compulsion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Avoidance of 'contaminated' situations prevents disconfirmation of the fear.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Social withdrawal and skin damage are secondary consequences of the maintained cycle.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "ERP is first-line treatment — highly effective for contamination OCD specifically.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Gradual exposure to 'contaminated' objects while resisting washing teaches anxiety habituation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Limitation: high initial distress may cause dropout; combining with medication improves adherence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Contamination obsession + washing compulsion. (b) Negative reinforcement maintains cycle. (c) ERP effective but distressing initially.",
            commonErrors: [
              "Recommending more washing — that reinforces the compulsion.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In OCD, obsessions are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repetitive behaviours that reduce anxiety" },
              {
                id: "b",
                text: "Intrusive, unwanted thoughts or images causing anxiety",
              },
              { id: "c", text: "Persistent feelings of sadness" },
              { id: "d", text: "Delusions about being controlled" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Obsessions",
                statement:
                  "Persistent, intrusive, unwanted thoughts or images that cause anxiety.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Obsessions are the cognitive component — intrusive thoughts, not the behavioural response.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Intrusive, unwanted thoughts or images",
            commonErrors: [
              "Confusing obsessions (thoughts) with compulsions (behaviours).",
            ],
          },
        },
        {
          id: "psych-u5-ocdq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In OCD, compulsions are maintained through negative reinforcement because they:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Receive praise from others for being performed",
              },
              { id: "b", text: "Reduce the anxiety produced by obsessions" },
              { id: "c", text: "Produce a pleasant physical sensation" },
              { id: "d", text: "Are rewarded with money or privileges" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative reinforcement",
                statement:
                  "Removing an unpleasant state (anxiety) strengthens the behaviour that removed it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compulsions reduce anxiety — removing an aversive state negatively reinforces them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Reduce the anxiety produced by obsessions",
            commonErrors: [
              "Calling it positive reinforcement — no reward is added; anxiety is removed.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An inflated responsibility belief in OCD is best illustrated by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "'I must wash until the anxiety completely disappears'",
              },
              {
                id: "b",
                text: "'If I do not check the door, something terrible will happen'",
              },
              {
                id: "c",
                text: "'I am a bad person for having these thoughts'",
              },
              { id: "d", text: "'I cannot control my urges'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inflated responsibility",
                statement:
                  "Belief that one's actions (or failures to act) can prevent or cause harm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inflated responsibility links personal action to preventing catastrophe — the checking compulsion is driven by it.",
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
              "**(b)** 'If I do not check the door, something terrible will happen'",
            commonErrors: [
              "Choosing (a) — that describes the compulsion's goal, not the underlying belief.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "SSRIs are used to treat OCD because they work by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blocking dopamine receptors" },
              {
                id: "b",
                text: "Increasing serotonin availability in the brain",
              },
              { id: "c", text: "Reducing GABA activity" },
              { id: "d", text: "Stimulating endorphin release" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SSRIs in OCD",
                statement:
                  "SSRIs increase serotonin, which is implicated in OCD's neurobiology.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SSRIs prevent serotonin reuptake, increasing its synaptic availability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Increasing serotonin availability",
            commonErrors: [
              "Confusing SSRIs (serotonin) with antipsychotics (dopamine).",
            ],
          },
        },
        {
          id: "psych-u5-ocdq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Thought-action fusion, a cognitive factor in OCD, involves believing that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Thinking about harm makes the harm more likely to occur",
              },
              { id: "b", text: "Compulsions eliminate obsessions permanently" },
              { id: "c", text: "Other people can read one's thoughts" },
              { id: "d", text: "All thoughts must be controlled at all times" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thought-action fusion",
                statement:
                  "The belief that having a thought makes the corresponding event more likely or morally equivalent to doing it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thought-action fusion equates thinking with doing — intrusive thoughts are treated as dangerous or sinful.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This inflates the perceived need to neutralise thoughts via compulsions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Thinking about harm makes it more likely",
            commonErrors: [
              "Confusing thought-action fusion with simple anxiety about thoughts.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Exposure and response prevention (ERP) treats OCD by combining:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Medication with psychoeducation" },
              {
                id: "b",
                text: "Gradual exposure to feared situations with resisting the compulsion",
              },
              { id: "c", text: "Free association with dream analysis" },
              {
                id: "d",
                text: "Systematic desensitisation with relaxation only",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ERP",
                statement:
                  "Exposure to obsession-triggering situations while preventing the compulsive response.",
              },
            ],
            steps: [
              {
                reasoning:
                  "ERP = exposure to anxiety-provoking cues PLUS response prevention — the patient resists the compulsion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This combination produces extinction learning — anxiety habituates without the compulsion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Exposure + resisting the compulsion",
            commonErrors: [
              "Confusing ERP with simple exposure — response prevention is essential.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A patient checks that doors are locked 15 times each morning and 10 times each evening, every day. How many lock-checking rituals does the patient perform in one week?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 175 },
              { label: "b", answer: 25 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Daily and weekly totals",
                statement: "Weekly total = daily total x 7.",
              },
            ],
            steps: [
              {
                reasoning: "Daily checks = 15 + 10 = 25 per day.",
                marks: 1,
                markCode: "M",
                working: "15 + 10 = 25",
              },
              {
                reasoning: "Weekly checks = 25 x 7 = 175.",
                marks: 1,
                markCode: "A",
                working: "25 x 7 = 175",
              },
            ],
            finalAnswer: "a) 175 checks per week, b) 25 per day",
            commonErrors: [
              "Forgetting that checking occurs twice daily — morning and evening.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "In a treatment trial, 50 OCD patients received ERP; 35 showed clinically significant improvement. What percentage improved, and how many did not improve?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 70 },
              { label: "b", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Response rate",
                statement: "Response % = improved / total x 100.",
              },
            ],
            steps: [
              {
                reasoning: "35 / 50 x 100 = 70% improved.",
                marks: 1,
                markCode: "M",
                working: "35 / 50 x 100 = 70",
              },
              {
                reasoning: "50 - 35 = 15 patients did not improve.",
                marks: 1,
                markCode: "A",
                working: "50 - 35 = 15",
              },
            ],
            finalAnswer: "a) 70%, b) 15 patients",
            commonErrors: [
              "Reporting 35 for part b — that is the improved count.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe common obsessions and compulsions in OCD.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "OCD symptoms",
                statement:
                  "Obsessions = intrusive thoughts; compulsions = rituals to neutralise them.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Common obsessions: contamination fears, fear of causing harm, need for symmetry or exactness, taboo thoughts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Obsessions are experienced as intrusive and distressing — the person does not want them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Common compulsions: washing/cleaning, checking, counting, ordering and repeating actions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Compulsions are performed to reduce anxiety or prevent a feared event — temporarily relieving distress.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Contamination/harm obsessions + washing/checking/counting compulsions.",
            commonErrors: [
              "Listing only compulsions — the question requires both components.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain the genetic and neurobiological factors implicated in OCD.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biology of OCD",
                statement:
                  "Genetic heritability plus serotonin and cortico-striatal circuit abnormalities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Genetic: OCD runs in families; twin studies show heritability — genes create vulnerability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Serotonin: abnormalities in serotonin transmission are implicated — SSRIs help by increasing serotonin.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Brain circuits: the orbitofrontal cortex, anterior cingulate and basal ganglia loop is hyperactive in OCD.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This circuit normally signals 'something is wrong' — in OCD it fires excessively, generating persistent doubt.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Biological factors interact with learning — compulsions are also negatively reinforced behaviourally.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Genetic vulnerability + serotonin dysfunction + hyperactive cortico-striatal circuits.",
            commonErrors: [
              "Treating OCD as purely psychological — neurobiology plays a clear role.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate the use of medication versus ERP in treating OCD.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OCD treatment comparison",
                statement:
                  "ERP is first-line psychological treatment; SSRIs help but relapse on discontinuation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "ERP strength: directly breaks the obsession-compulsion cycle through extinction learning — durable gains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ERP weakness: initially distressing — high dropout rates without good therapeutic alliance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Medication strength: SSRIs reduce obsession intensity for many patients — useful when ERP alone insufficient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Medication weakness: relapse common on discontinuation; side effects include nausea and sexual dysfunction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Medication does not teach skills to resist compulsions — gains may not persist.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: ERP is preferred first-line; combining with SSRIs improves outcomes for severe cases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "ERP superior long-term; SSRIs adjunctive — combined approach best for severe OCD.",
            commonErrors: [
              "Claiming medication alone cures OCD — effects often reverse when stopped.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student has intrusive thoughts about harming classmates and performs mental counting rituals to 'cancel out' the thoughts, spending two hours daily on them.",
          parts: [
            {
              label: "a",
              prompt: "Identify the obsessions and compulsions in this case.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how thought-action fusion and inflated responsibility maintain this pattern.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate ERP as a treatment for this student.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OCD case analysis",
                statement:
                  "Harm obsessions + neutralising rituals; cognitive beliefs maintain the cycle; ERP targets it.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Obsessions: intrusive thoughts about harming classmates — ego-dystonic and distressing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Compulsions: mental counting rituals performed to neutralise the feared thoughts.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Thought-action fusion: the student believes thinking about harm is equivalent to or increases the chance of doing it.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Inflated responsibility: the student believes they must prevent harm through rituals — failure would be their fault.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "These beliefs make the obsessions feel dangerous, driving the neutralising compulsion cycle.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "ERP is effective — exposure to harm-related thoughts while resisting rituals teaches anxiety habituation.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Mental rituals are harder to block than behavioural ones — covert compulsions require careful monitoring.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "School setting complicates treatment; CBT addressing thought-action fusion may be needed alongside ERP.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Harm obsessions + mental counting rituals. (b) TAF + inflated responsibility maintain cycle. (c) ERP effective but covert compulsions need monitoring.",
            commonErrors: [
              "Treating the student as dangerous — OCD harm obsessions are ego-dystonic, not intent.",
            ],
          },
        },
        {
          id: "psych-u5-ocdq17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Discuss why people with OCD feel compelled to perform rituals even though they recognise them as irrational.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compulsion necessity",
                statement:
                  "Compulsions persist because they reduce anxiety and are driven by inflated responsibility beliefs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The obsession creates acute anxiety — the compulsion offers immediate relief, which is powerfully reinforcing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Not performing the ritual feels dangerous — inflated responsibility makes inaction seem reckless.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Thought-action fusion makes thoughts feel morally equivalent to actions — rituals feel necessary to 'undo' them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The relief prevents learning that anxiety would naturally subside — so the cycle never gets tested.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Insight varies — many recognise rituals as irrational yet feel unable to resist the urge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Understanding this explains why ERP works: it breaks the assumed necessity by experiencing anxiety without the ritual.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Compulsions feel necessary because they relieve anxiety and inflated responsibility makes inaction seem dangerous.",
            commonErrors: [
              "Assuming insight alone should cure OCD — the reinforcement cycle overrides rational understanding.",
            ],
          },
        },
      ],
    },
  ],
};
