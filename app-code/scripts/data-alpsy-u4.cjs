module.exports = [
  {
    file: "lesson-4-1.ts", exportName: "lesson741",
    lesson: {
      id: "ciealpsy-u4-lesson-4-1", code: "4-1",
      title: "Issues and Debates: Nature vs Nurture",
      goal: "I CAN explain the nature-nurture debate and its application.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 3: issues & debates"],
      vocabulary: [
        { term: "Nature", definition: "Biological/genetic influences." },
        { term: "Nurture", definition: "Environmental/experiential influences." },
        { term: "Genetic transmission", definition: "Inheritance of traits." },
        { term: "Twin study", definition: "Research using identical/fraternal twins." },
        { term: "Adoption study", definition: "Research comparing adopted children." },
        { term: "Interactionism", definition: "Nature and nurture work together." },
      ],
      concept: {
        id: "ciealpsy-u4-s1-naturen", title: "Nature vs nurture",
        skill: "Explain the nature-nurture debate.",
        sections: [
          { heading: "The debate", body: "Nature: behaviour from genes, biology. Nurture: behaviour from environment, learning. Most psychologists accept interactionism — both influence behaviour." },
          { heading: "Evidence", body: "Twin studies: identical twins more similar than fraternal → genetic influence. Adoption studies: adopted children resemble biological parents → nature. But environment also matters → nurture." },
          { heading: "Application", body: "Depression: biological (serotonin) vs cognitive (environment). Intelligence: genetic vs environmental. Most traits show both influences." },
        ],
        keyFormulas: [
          { name: "Nature", statement: "genes, biology" },
          { name: "Nurture", statement: "environment, learning" },
          { name: "Interactionism", statement: "both together" },
        ],
        workedExample: {
          problem: "Is intelligence nature or nurture?",
          solution: "Both — genetic potential (nature) + environmental stimulation (nurture). Interaction determines outcome.",
        },
        questions: [
          {
            id: "ciealpsy-u4-nat-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the nature-nurture debate?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Whether behaviour comes from genes or environment" }, { id: "b", text: "A type of experiment" }, { id: "c", text: "A memory theory" }, { id: "d", text: "An attachment style" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Nature-nurture", statement: "Genes vs environment." }],
              steps: [{ reasoning: "Nature-nurture = genes vs environment.", marks: 1, markCode: "M" }],
              finalAnswer: "Genes vs environment",
            },
          },
          {
            id: "ciealpsy-u4-nat-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is interactionism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Interactionism", statement: "Both together." }],
              steps: [
                { reasoning: "Nature and nurture work together.", marks: 1, markCode: "M" },
                { reasoning: "Most psychologists accept this view.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Nature + nurture together",
            },
          },
          {
            id: "ciealpsy-u4-nat-q3", difficulty: "core", totalMarks: 3,
            stem: "How do twin studies inform the nature-nurture debate?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "study", name: "Twin studies", statement: "Genetic evidence." }],
              steps: [
                { reasoning: "Identical twins share 100% genes, fraternal 50%.", marks: 1, markCode: "M" },
                { reasoning: "If identical more similar → genetic influence.", marks: 1, markCode: "M" },
                { reasoning: "But shared environment also matters.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Genetic similarity comparison",
            },
          },
          {
            id: "ciealpsy-u4-nat-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define nature, nurture, genetic transmission, twin study, adoption study, interactionism. (b) What is nature-nurture? (c) What is interactionism? (d) What are twin studies? (e) What are adoption studies? (f) How does nature explain behaviour? (g) How does nurture explain behaviour? (h) Evaluate whether nature or nurture is more important.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Nature-nurture", statement: "Debate." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Genes vs environment.", marks: 1, markCode: "M" },
                { reasoning: "(c) Both together.", marks: 1, markCode: "M" },
                { reasoning: "(d) Identical vs fraternal.", marks: 1, markCode: "M" },
                { reasoning: "(e) Biological vs adoptive parents.", marks: 1, markCode: "M" },
                { reasoning: "(f) Genes, biology.", marks: 1, markCode: "M" },
                { reasoning: "(g) Environment, learning.", marks: 1, markCode: "M" },
                { reasoning: "(h) Both contribute — interactionism.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Nature-nurture analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u4-nat-notes", title: "Nature vs nurture — notes",
      summary: "Genes vs environment. Most accept interactionism — both matter.",
      sections: [
        { heading: "Key idea", body: "Nature and nurture interact — neither alone explains behaviour." },
        { heading: "Evidence", body: "Twin/adoption studies show both influences." },
      ],
    },
  },
  {
    file: "lesson-4-2.ts", exportName: "lesson742",
    lesson: {
      id: "ciealpsy-u4-lesson-4-2", code: "4-2",
      title: "Issues and Debates: Free Will and Determinism",
      goal: "I CAN explain the free will vs determinism debate.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 3: issues & debates"],
      vocabulary: [
        { term: "Free will", definition: "Ability to choose behaviour independently." },
        { term: "Hard determinism", definition: "All behaviour caused by prior events." },
        { term: "Soft determinism", definition: "Behaviour determined but we can choose responses." },
        { term: "Biological determinism", definition: "Genes/brain determine behaviour." },
        { term: "Environmental determinism", definition: "Experience determines behaviour." },
        { term: "Reciprocal determinism", definition: "Person, behaviour, environment interact." },
      ],
      concept: {
        id: "ciealpsy-u4-s2-freewill", title: "Free will & determinism",
        skill: "Explain the determinism debate.",
        sections: [
          { heading: "The debate", body: "Free will: we choose our behaviour. Hard determinism: all behaviour caused by prior events (physics-like). Soft determinism: behaviour determined but we choose responses. Most psychology is deterministic." },
          { heading: "Types", body: "Biological: genes/brain → behaviour. Environmental: conditioning → behaviour. Reciprocal: person-behaviour-environment interact (Bandura)." },
          { heading: "Implications", body: "Free will → responsibility, blame, punishment. Determinism → treatment, rehabilitation, no blame. Affects legal system, therapy." },
        ],
        keyFormulas: [
          { name: "Free will", statement: "choice" },
          { name: "Hard determinism", statement: "all caused" },
          { name: "Soft determinism", statement: "choose responses" },
        ],
        workedExample: {
          problem: "Is criminal behaviour free will or determined?",
          solution: "Both views — some argue choice (free will), others argue genetics/upbringing (determinism). Affects punishment vs rehabilitation.",
        },
        questions: [
          {
            id: "ciealpsy-u4-fw-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is free will?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Ability to choose behaviour independently" }, { id: "b", text: "All behaviour caused" }, { id: "c", text: "A type of memory" }, { id: "d", text: "A brain structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Free will", statement: "Independent choice." }],
              steps: [{ reasoning: "Free will = independent choice.", marks: 1, markCode: "M" }],
              finalAnswer: "Independent choice",
            },
          },
          {
            id: "ciealpsy-u4-fw-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is hard determinism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Hard determinism", statement: "All caused." }],
              steps: [
                { reasoning: "All behaviour caused by prior events.", marks: 1, markCode: "M" },
                { reasoning: "No free will — physics-like causation.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "All behaviour determined",
            },
          },
          {
            id: "ciealpsy-u4-fw-q3", difficulty: "core", totalMarks: 3,
            stem: "What is soft determinism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Soft determinism", statement: "Choose responses." }],
              steps: [
                { reasoning: "Behaviour determined but we choose responses.", marks: 1, markCode: "M" },
                { reasoning: "Middle ground between free will and hard determinism.", marks: 1, markCode: "M" },
                { reasoning: "Preserves some agency.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Determined but choose responses",
            },
          },
          {
            id: "ciealpsy-u4-fw-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define free will, hard determinism, soft determinism, biological determinism, environmental determinism, reciprocal determinism. (b) What is free will? (c) What is hard determinism? (d) What is soft determinism? (e) What is biological determinism? (f) What is reciprocal determinism? (g) How does determinism affect legal system? (h) Evaluate free will vs determinism.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Free will", statement: "Debate." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Independent choice.", marks: 1, markCode: "M" },
                { reasoning: "(c) All caused.", marks: 1, markCode: "M" },
                { reasoning: "(d) Choose responses.", marks: 1, markCode: "M" },
                { reasoning: "(e) Genes determine.", marks: 1, markCode: "M" },
                { reasoning: "(f) Person-behaviour-environment.", marks: 1, markCode: "M" },
                { reasoning: "(g) Blame vs treatment.", marks: 1, markCode: "M" },
                { reasoning: "(h) Soft determinism most accepted.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Free will/determinism analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u4-fw-notes", title: "Free will — notes",
      summary: "Free will=choice; determinism=caused. Soft determinism middle ground.",
      sections: [
        { heading: "Key idea", body: "Affects blame, punishment, treatment, legal system." },
        { heading: "Types", body: "Biological, environmental, reciprocal determinism." },
      ],
    },
  },
  {
    file: "lesson-4-3.ts", exportName: "lesson743",
    lesson: {
      id: "ciealpsy-u4-lesson-4-3", code: "4-3",
      title: "Issues and Debates: Reductionism and Holism",
      goal: "I CAN explain reductionism and holism in psychology.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 3: issues & debates"],
      vocabulary: [
        { term: "Reductionism", definition: "Breaking complex phenomena into simpler parts." },
        { term: "Holism", definition: "Understanding behaviour as whole, not parts." },
        { term: "Biological reductionism", definition: "Explaining behaviour by biology alone." },
        { term: "Environmental reductionism", definition: "Explaining behaviour by environment alone." },
        { term: "Emergent properties", definition: "Whole has properties parts don't." },
        { term: "Levels of explanation", definition: "Different levels of analysis." },
      ],
      concept: {
        id: "ciealpsy-u4-s3-reduc", title: "Reductionism & holism",
        skill: "Explain reductionism and holism.",
        sections: [
          { heading: "Reductionism", body: "Break complex into simple parts. Biological: behaviour = brain chemistry. Behaviourist: behaviour = conditioning. Advantage: scientific, testable. Disadvantage: oversimplifies, ignores context." },
          { heading: "Holism", body: "Behaviour understood as whole — person + environment + history. Gestalt psychology. Advantage: captures complexity. Disadvantage: hard to test scientifically." },
          { heading: "Emergent properties", body: "Whole has properties parts don't — water is wet though H and O aren't. Behaviour emerges from interaction, not just parts." },
        ],
        keyFormulas: [
          { name: "Reductionism", statement: "break into parts" },
          { name: "Holism", statement: "whole understanding" },
          { name: "Emergent", statement: "whole > parts" },
        ],
        workedExample: {
          problem: "Is depression reductionist or holistic?",
          solution: "Biological reductionist: serotonin. Cognitive: negative thoughts. Holistic: person + environment + biology together.",
        },
        questions: [
          {
            id: "ciealpsy-u4-red-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is reductionism?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Breaking complex phenomena into simpler parts" }, { id: "b", text: "Understanding as whole" }, { id: "c", text: "A type of experiment" }, { id: "d", text: "A memory model" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Reductionism", statement: "Break into parts." }],
              steps: [{ reasoning: "Reductionism = break into parts.", marks: 1, markCode: "M" }],
              finalAnswer: "Break into parts",
            },
          },
          {
            id: "ciealpsy-u4-red-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is holism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Holism", statement: "Whole." }],
              steps: [
                { reasoning: "Understanding behaviour as whole.", marks: 1, markCode: "M" },
                { reasoning: "Considers person + environment + history.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Whole understanding",
            },
          },
          {
            id: "ciealpsy-u4-red-q3", difficulty: "core", totalMarks: 3,
            stem: "What are emergent properties?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Emergent", statement: "Whole properties." }],
              steps: [
                { reasoning: "Whole has properties parts don't.", marks: 1, markCode: "M" },
                { reasoning: "Water wet though H/O aren't.", marks: 1, markCode: "M" },
                { reasoning: "Behaviour emerges from interaction.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Whole > parts",
            },
          },
          {
            id: "ciealpsy-u4-red-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define reductionism, holism, biological reductionism, environmental reductionism, emergent properties, levels of explanation. (b) What is reductionism? (c) What is holism? (d) What are emergent properties? (e) What is biological reductionism? (f) What is environmental reductionism? (g) How do approaches differ? (h) Evaluate reductionism vs holism.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Reductionism", statement: "Debate." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Break into parts.", marks: 1, markCode: "M" },
                { reasoning: "(c) Whole understanding.", marks: 1, markCode: "M" },
                { reasoning: "(d) Whole > parts.", marks: 1, markCode: "M" },
                { reasoning: "(e) Biology alone.", marks: 1, markCode: "M" },
                { reasoning: "(f) Environment alone.", marks: 1, markCode: "M" },
                { reasoning: "(g) Parts vs whole.", marks: 1, markCode: "M" },
                { reasoning: "(h) Reductionist scientific; holistic complete.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Reductionism/holism analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u4-red-notes", title: "Reductionism — notes",
      summary: "Reductionism=parts; holism=whole. Emergent properties exceed parts.",
      sections: [
        { heading: "Key idea", body: "Different levels of explanation — biological, psychological, social." },
        { heading: "Trade-off", body: "Reductionism testable but oversimplifies; holism complete but untestable." },
      ],
    },
  },
  {
    file: "lesson-4-4.ts", exportName: "lesson744",
    lesson: {
      id: "ciealpsy-u4-lesson-4-4", code: "4-4",
      title: "Schizophrenia: Symptoms and Explanations",
      goal: "I CAN explain schizophrenia symptoms and biological/cognitive explanations.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 3: schizophrenia"],
      vocabulary: [
        { term: "Schizophrenia", definition: "Chronic mental disorder with distorted thinking." },
        { term: "Positive symptoms", definition: "Added experiences (hallucinations, delusions)." },
        { term: "Negative symptoms", definition: "Lost functions (avolition, alogia)." },
        { term: "Hallucinations", definition: "False sensory perceptions." },
        { term: "Delusions", definition: "Fixed false beliefs." },
        { term: "Dopamine hypothesis", definition: "Schizophrenia caused by dopamine imbalance." },
      ],
      concept: {
        id: "ciealpsy-u4-s4-schizo", title: "Schizophrenia",
        skill: "Explain schizophrenia symptoms and explanations.",
        sections: [
          { heading: "Symptoms", body: "Positive: hallucinations (hearing voices), delusions (paranoia), disorganised speech/behaviour. Negative: avolition (lack of motivation), alogia (speech poverty), emotional flatness. Diagnosis: ICD/DSM criteria." },
          { heading: "Biological explanations", body: "Genetic: heritability ~80%, concordance rates (MZ ~48%, DZ ~17%). Dopamine hypothesis: excess dopamine → positive symptoms; low dopamine → negative. Brain structure abnormalities." },
          { heading: "Psychological explanations", body: "Family dysfunction (double bind), expressed emotion, social causation (urban stress), cognitive (attributional bias, theory of mind deficits)." },
        ],
        keyFormulas: [
          { name: "Positive", statement: "hallucinations, delusions" },
          { name: "Negative", statement: "avolition, flatness" },
          { name: "Dopamine", statement: "imbalance" },
        ],
        workedExample: {
          problem: "Explain schizophrenia using biological and psychological factors.",
          solution: "Biological: genetic vulnerability + dopamine dysfunction. Psychological: stress triggers in vulnerable individuals → symptoms.",
        },
        questions: [
          {
            id: "ciealpsy-u4-sch-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What are positive symptoms of schizophrenia?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Hallucinations and delusions" }, { id: "b", text: "Lack of motivation" }, { id: "c", text: "Emotional flatness" }, { id: "d", text: "Speech poverty" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Positive symptoms", statement: "Added experiences." }],
              steps: [{ reasoning: "Positive = added: hallucinations, delusions.", marks: 1, markCode: "M" }],
              finalAnswer: "Hallucinations, delusions",
            },
          },
          {
            id: "ciealpsy-u4-sch-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the dopamine hypothesis?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "model", name: "Dopamine", statement: "Chemical explanation." }],
              steps: [
                { reasoning: "Schizophrenia caused by dopamine imbalance.", marks: 1, markCode: "M" },
                { reasoning: "Excess → positive; low → negative symptoms.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Dopamine imbalance",
            },
          },
          {
            id: "ciealpsy-u4-sch-q3", difficulty: "core", totalMarks: 3,
            stem: "What are negative symptoms of schizophrenia?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Negative", statement: "Lost functions." }],
              steps: [
                { reasoning: "Avolition (motivation loss), alogia (speech poverty).", marks: 1, markCode: "M" },
                { reasoning: "Emotional flatness, social withdrawal.", marks: 1, markCode: "M" },
                { reasoning: "Harder to treat than positive symptoms.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Avolition, flatness, withdrawal",
            },
          },
          {
            id: "ciealpsy-u4-sch-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define schizophrenia, positive symptoms, negative symptoms, hallucinations, delusions, dopamine hypothesis. (b) What is schizophrenia? (c) What are positive symptoms? (d) What are negative symptoms? (e) What is dopamine hypothesis? (f) How is schizophrenia explained genetically? (g) How is it explained psychologically? (h) Evaluate biological vs psychological explanations.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Schizophrenia", statement: "Explanations." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Chronic disorder.", marks: 1, markCode: "M" },
                { reasoning: "(c) Added experiences.", marks: 1, markCode: "M" },
                { reasoning: "(d) Lost functions.", marks: 1, markCode: "M" },
                { reasoning: "(e) Dopamine imbalance.", marks: 1, markCode: "M" },
                { reasoning: "(f) Heritability ~80%.", marks: 1, markCode: "M" },
                { reasoning: "(g) Stress, family, social factors.", marks: 1, markCode: "M" },
                { reasoning: "(h) Diathesis-stress model best.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Schizophrenia analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u4-sch-notes", title: "Schizophrenia — notes",
      summary: "Positive=hallucinations/delusions; negative=motivation loss. Dopamine + genetic + stress.",
      sections: [
        { heading: "Key idea", body: "Diathesis-stress model: genetic vulnerability + environmental stress." },
        { heading: "Treatment", body: "Antipsychotics (dopamine), CBT, social support." },
      ],
    },
  },
];
