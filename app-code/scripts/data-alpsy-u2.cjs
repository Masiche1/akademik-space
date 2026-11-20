module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson721",
    lesson: {
      id: "ciealpsy-u2-lesson-2-1", code: "2-1",
      title: "Approaches: Biological and Behaviourist",
      goal: "I CAN compare biological and behaviourist approaches to psychology.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 3: approaches"],
      vocabulary: [
        { term: "Biological approach", definition: "Psychology as product of brain, genes, neurotransmitters." },
        { term: "Behaviourist approach", definition: "Psychology as learned behaviour through conditioning." },
        { term: "Classical conditioning", definition: "Learning by association (Pavlov)." },
        { term: "Operant conditioning", definition: "Learning by consequences (Skinner)." },
        { term: "Neurotransmitter", definition: "Chemical messenger in brain." },
        { term: "Genotype", definition: "Genetic makeup." },
      ],
      concept: {
        id: "ciealpsy-u2-s1-approach", title: "Biological & behaviourist",
        skill: "Compare major psychological approaches.",
        sections: [
          { heading: "Biological approach", body: "Behaviour explained by biology: genes, brain structure, neurotransmitters. Uses brain scans, twin studies, case studies. Reductionist, deterministic. Treatments: drugs, surgery." },
          { heading: "Behaviourist approach", body: "Behaviour learned through conditioning. Classical: association (Pavlov's dogs). Operant: reinforcement/punishment (Skinner's box). Behaviour therapy. Deterministic, reductionist." },
          { heading: "Comparison", body: "Both reductionist and deterministic. Biological explains internal processes; behaviourist explains observable behaviour only. Both ignore cognition/feelings." },
        ],
        keyFormulas: [
          { name: "Biological", statement: "genes, brain, chemistry" },
          { name: "Behaviourist", statement: "conditioning" },
          { name: "Both", statement: "deterministic, reductionist" },
        ],
        workedExample: {
          problem: "Explain depression from biological vs behaviourist perspective.",
          solution: "Biological: serotonin imbalance. Behaviourist: learned helplessness through negative reinforcement patterns.",
        },
        questions: [
          {
            id: "ciealpsy-u2-appro-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the biological approach?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Psychology as product of brain, genes, chemistry" }, { id: "b", text: "Behaviour learned by conditioning" }, { id: "c", text: "Focus on thoughts" }, { id: "d", text: "Focus on free will" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Biological", statement: "Brain/genes/chemistry." }],
              steps: [{ reasoning: "Biological = biology explains behaviour.", marks: 1, markCode: "M" }],
              finalAnswer: "Brain/genes/chemistry",
            },
          },
          {
            id: "ciealpsy-u2-appro-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is operant conditioning?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Operant", statement: "Consequences." }],
              steps: [
                { reasoning: "Learning by consequences (Skinner).", marks: 1, markCode: "M" },
                { reasoning: "Reinforcement increases, punishment decreases behaviour.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Learning by consequences",
            },
          },
          {
            id: "ciealpsy-u2-appro-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare biological and behaviourist approaches.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "comparison", name: "Bio vs Behaviourist", statement: "Nature vs nurture." }],
              steps: [
                { reasoning: "Biological: internal processes (genes, brain).", marks: 1, markCode: "M" },
                { reasoning: "Behaviourist: external learning (conditioning).", marks: 1, markCode: "M" },
                { reasoning: "Both reductionist, deterministic.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Internal vs external explanation",
            },
          },
          {
            id: "ciealpsy-u2-appro-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define biological approach, behaviourist approach, classical conditioning, operant conditioning, neurotransmitter, genotype. (b) What is biological? (c) What is behaviourist? (d) What is classical conditioning? (e) What is operant conditioning? (f) What methods does biological use? (g) What are strengths/weaknesses of each? (h) Compare how each explains depression.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Approaches", statement: "Comparison." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Brain/genes/chemistry.", marks: 1, markCode: "M" },
                { reasoning: "(c) Conditioning.", marks: 1, markCode: "M" },
                { reasoning: "(d) Association learning.", marks: 1, markCode: "M" },
                { reasoning: "(e) Consequence learning.", marks: 1, markCode: "M" },
                { reasoning: "(f) Scans, twins, cases.", marks: 1, markCode: "M" },
                { reasoning: "(g) Both reductionist/deterministic.", marks: 1, markCode: "M" },
                { reasoning: "(h) Serotonin vs learned helplessness.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Approach comparison.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u2-appro-notes", title: "Bio & behaviourist — notes",
      summary: "Biological=internal processes; behaviourist=learned conditioning. Both reductionist.",
      sections: [
        { heading: "Key idea", body: "Two contrasting explanations: nature (biology) vs nurture (learning)." },
        { heading: "Shared limits", body: "Both ignore cognition, free will, subjective experience." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson722",
    lesson: {
      id: "ciealpsy-u2-lesson-2-2", code: "2-2",
      title: "Approaches: Cognitive and Psychodynamic",
      goal: "I CAN explain cognitive and psychodynamic approaches.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 3: approaches"],
      vocabulary: [
        { term: "Cognitive approach", definition: "Psychology as mental processes — thinking, memory, perception." },
        { term: "Schema", definition: "Mental framework for organising knowledge." },
        { term: "Attribution", definition: "How we explain causes of behaviour." },
        { term: "Psychodynamic approach", definition: "Freud's theory — unconscious drives." },
        { term: "Id, ego, superego", definition: "Freud's personality structure." },
        { term: "Defence mechanism", definition: "Unconscious way of coping with anxiety." },
      ],
      concept: {
        id: "ciealpsy-u2-s2-cogpsy", title: "Cognitive & psychodynamic",
        skill: "Explain cognitive and psychodynamic approaches.",
        sections: [
          { heading: "Cognitive approach", body: "Focus on mental processes: thinking, memory, perception, language. Uses computer analogy — input, processing, output. Schemas organise knowledge. Attributions explain behaviour. Cognitivism links to behaviourism (learning through experience)." },
          { heading: "Psychodynamic approach", body: "Freud: personality = id (pleasure), ego (reality), superego (morality). Unconscious drives behaviour. Defence mechanisms: repression, projection, displacement, rationalisation. Childhood experiences shape adult personality." },
          { heading: "Comparison", body: "Cognitive: scientific, testable, but ignores emotions. Psychodynamic: holistic, explains unconscious, but unscientific, unfalsifiable." },
        ],
        keyFormulas: [
          { name: "Cognitive", statement: "mental processes" },
          { name: "Psychodynamic", statement: "unconscious drives" },
          { name: "Defence", statement: "repression, projection" },
        ],
        workedExample: {
          problem: "Explain phobia from psychodynamic vs cognitive view.",
          solution: "Psychodynamic: repressed childhood fear → anxiety → defence. Cognitive: learned association + negative schema about feared object.",
        },
        questions: [
          {
            id: "ciealpsy-u2-cog-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the cognitive approach?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Psychology as mental processes" }, { id: "b", text: "Unconscious drives" }, { id: "c", text: "Learned conditioning" }, { id: "d", text: "Brain chemistry" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Cognitive", statement: "Mental processes." }],
              steps: [{ reasoning: "Cognitive = mental processes.", marks: 1, markCode: "M" }],
              finalAnswer: "Mental processes",
            },
          },
          {
            id: "ciealpsy-u2-cog-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are id, ego and superego?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Id/ego/superego", statement: "Freud structure." }],
              steps: [
                { reasoning: "Id=pleasure, ego=reality, superego=morality.", marks: 1, markCode: "M" },
                { reasoning: "Conflict between them creates anxiety.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Pleasure/reality/morality",
            },
          },
          {
            id: "ciealpsy-u2-cog-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a defence mechanism? Give examples.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Defence", statement: "Anxiety coping." }],
              steps: [
                { reasoning: "Unconscious way of coping with anxiety.", marks: 1, markCode: "M" },
                { reasoning: "Repression, projection, displacement, rationalisation.", marks: 1, markCode: "M" },
                { reasoning: "Protects ego from uncomfortable feelings.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Unconscious anxiety coping",
            },
          },
          {
            id: "ciealpsy-u2-cog-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define cognitive approach, schema, attribution, psychodynamic, id/ego/superego, defence mechanism. (b) What is cognitive? (c) What is psychodynamic? (d) What is schema? (e) What is attribution? (f) What are defence mechanisms? (g) How does psychodynamic explain behaviour? (h) Evaluate cognitive vs psychodynamic approaches.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Cognitive/psycho", statement: "Comparison." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Mental processes.", marks: 1, markCode: "M" },
                { reasoning: "(c) Unconscious drives.", marks: 1, markCode: "M" },
                { reasoning: "(d) Mental framework.", marks: 1, markCode: "M" },
                { reasoning: "(e) Behaviour explanation.", marks: 1, markCode: "M" },
                { reasoning: "(f) Repression, projection etc.", marks: 1, markCode: "M" },
                { reasoning: "(g) Unconscious childhood drives.", marks: 1, markCode: "M" },
                { reasoning: "(h) Cognitive testable; psycho holistic but unscientific.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Cognitive/psychodynamic comparison.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u2-cog-notes", title: "Cognitive & psychodynamic — notes",
      summary: "Cognitive=mental processes (testable); psychodynamic=unconscious (unfalsifiable).",
      sections: [
        { heading: "Key idea", body: "Cognitive is scientific; psychodynamic explains deeper but lacks testability." },
        { heading: "Freud", body: "Id/ego/superego conflict → anxiety → defence mechanisms." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson723",
    lesson: {
      id: "ciealpsy-u2-lesson-2-3", code: "2-3",
      title: "Psychopathology: Definitions and Phobias",
      goal: "I CAN define psychological abnormality and explain phobias.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 2: psychopathology"],
      vocabulary: [
        { term: "Abnormality", definition: "Behaviour deviating from norms." },
        { term: "Deviation from social norms", definition: "Behaviour violating social expectations." },
        { term: "Failure to function adequately", definition: "Inability to cope with daily life." },
        { term: "Statistical infrequency", definition: "Behaviour rare in population." },
        { term: "Phobia", definition: "Extreme irrational fear." },
        { term: "Two-process model", definition: "Mowrer's explanation of phobia acquisition." },
      ],
      concept: {
        id: "ciealpsy-u2-s3-psych", title: "Abnormality and phobias",
        skill: "Define abnormality and explain phobias.",
        sections: [
          { heading: "Definitions of abnormality", body: "Deviation from social norms: behaviour violates expectations (culture-dependent). Failure to function: can't cope daily life (Rosenhan & Seligman). Statistical infrequency: rare behaviour (may be positive). Deviation from ideal mental health: Jahoda's criteria." },
          { heading: "Phobias", body: "Specific phobia: irrational fear of object/situation. Agoraphobia: fear of open/public spaces. Social phobia: fear of social situations. Mowrer's two-process: classical conditioning (acquisition) + operant conditioning (maintenance via negative reinforcement)." },
        ],
        keyFormulas: [
          { name: "Phobia", statement: "irrational fear" },
          { name: "Two-process", statement: "classical + operant" },
          { name: "Negative reinforcement", statement: "avoids fear" },
        ],
        workedExample: {
          problem: "Explain how a dog phobia develops via two-process model.",
          solution: "Classical: dog bite → fear association. Operant: avoiding dogs reduces anxiety → negative reinforcement maintains phobia.",
        },
        questions: [
          {
            id: "ciealpsy-u2-psy-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a phobia?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Extreme irrational fear" }, { id: "b", text: "A type of memory" }, { id: "c", text: "A learning theory" }, { id: "d", text: "A brain structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Phobia", statement: "Irrational fear." }],
              steps: [{ reasoning: "Phobia = irrational fear.", marks: 1, markCode: "M" }],
              finalAnswer: "Irrational fear",
            },
          },
          {
            id: "ciealpsy-u2-psy-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the two-process model of phobia?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "model", name: "Two-process", statement: "Acquisition + maintenance." }],
              steps: [
                { reasoning: "Classical conditioning: fear learned by association.", marks: 1, markCode: "M" },
                { reasoning: "Operant: avoidance maintained by negative reinforcement.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Classical + operant",
            },
          },
          {
            id: "ciealpsy-u2-psy-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the main definitions of abnormality?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Abnormality", statement: "Definitions." }],
              steps: [
                { reasoning: "Deviation from social norms, failure to function, statistical infrequency.", marks: 1, markCode: "M" },
                { reasoning: "Each has strengths and limitations.", marks: 1, markCode: "M" },
                { reasoning: "Culture-dependent, subjective.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Norms, function, statistics",
            },
          },
          {
            id: "ciealpsy-u2-psy-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define abnormality, deviation from norms, failure to function, statistical infrequency, phobia, two-process model. (b) What is phobia? (c) What is two-process model? (d) What are abnormality definitions? (e) What is specific phobia? (f) What is agoraphobia? (g) What is social phobia? (h) Evaluate definitions of abnormality.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Psychopathology", statement: "Phobias." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Irrational fear.", marks: 1, markCode: "M" },
                { reasoning: "(c) Classical + operant.", marks: 1, markCode: "M" },
                { reasoning: "(d) Norms, function, statistics.", marks: 1, markCode: "M" },
                { reasoning: "(e) Object/situation fear.", marks: 1, markCode: "M" },
                { reasoning: "(f) Open space fear.", marks: 1, markCode: "M" },
                { reasoning: "(g) Social situation fear.", marks: 1, markCode: "M" },
                { reasoning: "(h) Each has cultural/subjective issues.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Psychopathology analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u2-psy-notes", title: "Phobias — notes",
      summary: "Phobia=irrational fear. Two-process: classical acquisition + operant maintenance.",
      sections: [
        { heading: "Key idea", body: "Phobias learned through conditioning and maintained by avoidance." },
        { heading: "Definitions", body: "Abnormality defined variously — all have limitations." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson724",
    lesson: {
      id: "ciealpsy-u2-lesson-2-4", code: "2-4",
      title: "Psychopathology: OCD and Depression",
      goal: "I CAN explain OCD and depression, their explanations and features.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 2: psychopathology"],
      vocabulary: [
        { term: "OCD", definition: "Obsessive-compulsive disorder." },
        { term: "Obsessions", definition: "Persistent unwanted thoughts." },
        { term: "Compulsions", definition: "Repetitive behaviours to reduce anxiety." },
        { term: "Depression", definition: "Persistent low mood disorder." },
        { term: "Learned helplessness", definition: "Giving up after uncontrollable negative events." },
        { term: "Attributional style", definition: "How we explain events (internal/external, stable/unstable)." },
      ],
      concept: {
        id: "ciealpsy-u2-s4-ocd", title: "OCD and depression",
        skill: "Explain OCD and depression.",
        sections: [
          { heading: "OCD", body: "Obsessions (intrusive thoughts) + compulsions (rituals to neutralise). Biological: serotonin dysfunction, basal ganglia. Behavioural: conditioning. Cognitive: inflated responsibility." },
          { heading: "Depression", body: "Persistent low mood, anhedonia, fatigue, sleep/appetite changes. Biological: serotonin/noradrenaline imbalance. Cognitive: Beck's negative triad (self/world/future), learned helplessness (Seligman), attributional style." },
        ],
        keyFormulas: [
          { name: "OCD", statement: "obsessions + compulsions" },
          { name: "Depression", statement: "persistent low mood" },
          { name: "Negative triad", statement: "self/world/future" },
        ],
        workedExample: {
          problem: "Compare biological vs cognitive explanations of depression.",
          solution: "Biological: neurotransmitter imbalance. Cognitive: negative thinking patterns, learned helplessness.",
        },
        questions: [
          {
            id: "ciealpsy-u2-ocd-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is OCD?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Obsessive-compulsive disorder" }, { id: "b", text: "A type of phobia" }, { id: "c", text: "A memory disorder" }, { id: "d", text: "An attachment style" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "OCD", statement: "Obsessions + compulsions." }],
              steps: [{ reasoning: "OCD = obsessions + compulsions.", marks: 1, markCode: "M" }],
              finalAnswer: "Obsessions + compulsions",
            },
          },
          {
            id: "ciealpsy-u2-ocd-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is learned helplessness?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Learned helplessness", statement: "Giving up." }],
              steps: [
                { reasoning: "Giving up after uncontrollable negative events.", marks: 1, markCode: "M" },
                { reasoning: "Seligman's explanation of depression.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Giving up after uncontrollable events",
            },
          },
          {
            id: "ciealpsy-u2-ocd-q3", difficulty: "core", totalMarks: 3,
            stem: "What is Beck's negative triad?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "model", name: "Negative triad", statement: "Cognitive distortion." }],
              steps: [
                { reasoning: "Negative views of self, world, future.", marks: 1, markCode: "M" },
                { reasoning: "Beck's cognitive explanation of depression.", marks: 1, markCode: "M" },
                { reasoning: "Causes distorted thinking patterns.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Self/world/future negative",
            },
          },
          {
            id: "ciealpsy-u2-ocd-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define OCD, obsessions, compulsions, depression, learned helplessness, attributional style. (b) What is OCD? (c) What is depression? (d) What is learned helplessness? (e) What is negative triad? (f) What is attributional style? (g) How is OCD explained biologically? (h) Compare biological vs cognitive explanations of depression.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "OCD/depression", statement: "Explanations." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Obsessions + compulsions.", marks: 1, markCode: "M" },
                { reasoning: "(c) Persistent low mood.", marks: 1, markCode: "M" },
                { reasoning: "(d) Giving up.", marks: 1, markCode: "M" },
                { reasoning: "(e) Self/world/future.", marks: 1, markCode: "M" },
                { reasoning: "(f) Event explanation style.", marks: 1, markCode: "M" },
                { reasoning: "(g) Serotonin, basal ganglia.", marks: 1, markCode: "M" },
                { reasoning: "(h) Chemical vs cognitive patterns.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "OCD/depression analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u2-ocd-notes", title: "OCD & depression — notes",
      summary: "OCD=obsessions+compulsions; depression=low mood. Multiple explanations.",
      sections: [
        { heading: "Key idea", body: "Both disorders explained biologically and cognitively." },
        { heading: "Depression", body: "Learned helplessness, negative triad, attributional style." },
      ],
    },
  },
];
