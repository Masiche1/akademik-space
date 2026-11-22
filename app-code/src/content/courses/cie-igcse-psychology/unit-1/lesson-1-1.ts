import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cieipsych-u1-lesson-1-1",
  code: "1-1",
  title: "What is psychology?",
  goal: "I CAN explain psychology's aims and the main perspectives that guide research.",
  standards: [
    "Cambridge IGCSE Psychology 0266",
    "Section 1: The nature of psychology",
  ],
  vocabulary: [
    {
      term: "Psychology",
      definition: "The scientific study of mind and behaviour.",
    },
    { term: "Behaviour", definition: "Observable actions and responses." },
    {
      term: "Cognition",
      definition:
        "Mental processes — thinking, remembering, perceiving, problem-solving.",
    },
    {
      term: "Nature vs nurture",
      definition:
        "Whether behaviour is innate (genes) or learned (environment).",
    },
    {
      term: "Perspective",
      definition:
        "A framework of assumptions guiding how psychologists study behaviour.",
    },
    {
      term: "Empirical",
      definition:
        "Based on observation and experiment rather than speculation.",
    },
  ],
  concepts: [
    {
      id: "cieipsych-u1-what",
      title: "The aims and perspectives of psychology",
      skill:
        "Describe psychology's subject matter and identify major perspectives.",
      lesson: {
        sections: [
          {
            heading: "What psychology studies",
            body: "Psychology investigates the **mind** (thoughts, emotions, memories) and **behaviour** (observable actions). Its aims include **describing** behaviour, **explaining** its causes, **predicting** future behaviour and, where possible, **changing** it (therapy, education). Modern psychology is **empirical** — claims are tested through research, not just argued.",
          },
          {
            heading: "Nature vs nurture",
            body: "A central debate: is behaviour caused by **nature** (genes, biology, brain chemistry) or **nurture** (learning, environment, culture)? Most psychologists now accept interaction — genes set potential, environment shapes expression. Approaches differ in emphasis: biological approaches stress nature; behaviourist approaches stress nurture.",
          },
          {
            heading: "Perspectives at a glance",
            body: "Major perspectives include **biological** (brain and genes), **behaviourist** (learning through conditioning), **cognitive** (mental processes like memory and thinking), **psychodynamic** (unconscious conflicts), **humanistic** (free will and self-actualisation) and **social** (how others influence us). Each asks different questions about the same behaviour.",
          },
        ],
        keyFormulas: [
          {
            name: "Psychology's aims",
            statement: "Describe → explain → predict → change",
          },
          {
            name: "Nature–nurture",
            statement: "Genes set potential; environment shapes expression",
          },
        ],
        workedExample: {
          problem:
            "A child fears dogs. How would nature and nurture each explain it?",
          solution:
            "Nature: an inherited anxiety trait or bad early experience altering the brain's fear response. Nurture: a frightening dog attack in childhood taught the fear through learning.",
        },
      },
      questions: [
        {
          id: "cieipsych-u1-what-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Psychology is best defined as the study of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mind and behaviour" },
              { id: "b", text: "Only observable actions" },
              { id: "c", text: "Only mental illness" },
              { id: "d", text: "Brain anatomy only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Psychology",
                statement: "Scientific study of mind and behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Psychology covers both mental processes and observable behaviour — not just illness or brain anatomy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Mind and behaviour.",
            commonErrors: [
              "Thinking psychology only studies abnormal behaviour.",
            ],
          },
        },
        {
          id: "cieipsych-u1-what-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List psychology's four main aims and explain one in your own words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Aims of psychology",
                statement: "Describe, explain, predict and change behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Describe: observe and record behaviour accurately.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explain/predict: find causes and forecast behaviour; change: apply findings to improve wellbeing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example explanation: explaining why people forget helps predict and treat memory problems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Describe, explain, predict, change — e.g. explaining memory loss enables treatment.",
            commonErrors: ["Listing aims without explaining any."],
          },
        },
        {
          id: "cieipsych-u1-what-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the nature–nurture debate with one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nature vs nurture",
                statement:
                  "Innate biology vs environmental learning — most accept interaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nature: behaviour shaped by genes, brain structure and hormones.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Nurture: behaviour shaped by learning, upbringing and culture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: intelligence — genes set range, education and environment determine where within it a person falls.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Nature = genes/biology; nurture = environment/learning — e.g. intelligence is shaped by both.",
            commonErrors: [
              "Treating nature and nurture as mutually exclusive rather than interacting.",
            ],
          },
        },
        {
          id: "cieipsych-u1-what-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that psychology is a 'science'.",
          parts: [
            {
              label: "a",
              prompt: "Give two ways psychology uses scientific methods.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Give two limitations of calling psychology a science.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Psychology as science",
                statement:
                  "Empirical, testable methods vs complexity of human behaviour.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Experiments with controls test cause-effect relationships (e.g. memory studies).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Hypotheses are tested empirically and findings are replicated and peer-reviewed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Measurable data — reaction times, test scores, brain scans — provide objective evidence.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Human behaviour is complex and context-dependent — lab results may not generalise to real life.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Some phenomena (consciousness, free will) resist objective measurement.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: psychology uses scientific methods but is perhaps better called a 'science of the mind' with interpretive elements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Experiments, measurement, replication. (b) Complexity, unmeasurable phenomena — scientific method but imperfect science.",
            commonErrors: [
              "One-sided answers ignoring either the methods or the limitations.",
            ],
          },
        },
        {
          id: "cieipsych-u1-what-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mental processes such as thinking, remembering and problem-solving are collectively called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conditioning" },
              { id: "b", text: "Cognition" },
              { id: "c", text: "Conformity" },
              { id: "d", text: "Behaviour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cognition",
                statement:
                  "Mental processes — thinking, remembering, perceiving, problem-solving.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cognition covers mental processes; behaviour is the observable output of those processes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Cognition.",
            commonErrors: ["Confusing cognition (mental) with behaviour (observable)."],
          },
        },
        {
          id: "cieipsych-u1-what-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main aims does psychology have? (describe, explain, predict, change)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Aims of psychology",
                statement: "Describe, explain, predict and change behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "There are four aims: describe, explain, predict and change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4",
            commonErrors: ["Listing fewer aims or adding non-aims such as 'control'."],
          },
        },
        {
          id: "cieipsych-u1-what-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a survey, 45 out of 180 students said psychology helps them understand behaviour. What percentage is this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Survey percentage",
                statement: "Percentage = part / whole × 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "45 / 180 = 0.25; 0.25 × 100 = 25%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "25%",
            commonErrors: ["Forgetting to multiply by 100 and answering 0.25."],
          },
        },
        {
          id: "cieipsych-u1-what-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by an 'empirical' approach in psychology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Empirical",
                statement:
                  "Based on observation and experiment rather than speculation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Empirical means claims are tested through direct observation and controlled experiments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Findings must be measurable and replicable — data, not opinion, decides between theories.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: memory theories are tested with recall experiments rather than argued about.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Empirical = based on observable, testable evidence from research rather than speculation.",
            commonErrors: [
              "Defining empirical as 'accurate' or 'true' instead of 'based on observation/experiment'.",
            ],
          },
        },
        {
          id: "cieipsych-u1-what-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which perspective would most likely explain a phobia through unresolved unconscious childhood conflicts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biological approach" },
              { id: "b", text: "Cognitive approach" },
              { id: "c", text: "Behaviourist approach" },
              { id: "d", text: "Psychodynamic approach" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Perspectives",
                statement:
                  "Psychodynamic stresses unconscious conflicts and early childhood.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unconscious childhood conflicts are the core of the psychodynamic (Freudian) approach.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(d) Psychodynamic approach.",
            commonErrors: [
              "Choosing behaviourist — phobias can also be learned, but 'unconscious conflicts' signals psychodynamic.",
            ],
          },
        },
        {
          id: "cieipsych-u1-what-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a study of 80 participants, 48 are women. (a) How many participants are men? (b) What percentage of participants are women?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 32 },
              { label: "b", answer: 60 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Sample calculations",
                statement:
                  "Men = total − women; percentage = part / whole × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "80 − 48 = 32 men.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "48 / 80 = 0.6 → 60%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 32  (b) 60%",
            commonErrors: ["Answering 48/80 = 0.6 without converting to a percentage."],
          },
        },
        {
          id: "cieipsych-u1-what-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which aim of psychology involves applying psychological findings to improve people's lives?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Predict" },
              { id: "b", text: "Change" },
              { id: "c", text: "Describe" },
              { id: "d", text: "Explain" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Aims of psychology",
                statement:
                  "Change = using findings in therapy, education and treatment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The 'change' aim applies research to improve wellbeing; describe/explain/predict are earlier aims.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(d) Change.",
            commonErrors: ["Choosing 'predict' — predicting forecasts behaviour, it does not apply findings."],
          },
        },
        {
          id: "cieipsych-u1-what-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A teenager becomes aggressive after joining a new friend group. Evaluate nature and nurture explanations of this behaviour.",
          parts: [
            {
              label: "a",
              prompt: "Give a 'nature' explanation.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give a 'nurture' explanation.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate the interactionist view.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Nature–nurture application",
                statement:
                  "Innate biology vs environmental learning — most psychologists accept interaction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Nature: an inherited temperament or hormonal/neurochemical differences may predispose the teenager to aggression.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Genetic studies show aggression has a heritable component, but genes alone rarely determine behaviour.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Nurture: the new friend group may model and reward aggressive behaviour — aggression is learned through observation and reinforcement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Peer pressure and group norms can shape behaviour — the timing (after joining) supports a social explanation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Interactionist view: genes set a potential range for aggression while the environment determines whether and how it is expressed.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: neither explanation alone is sufficient — the behaviour likely reflects an interaction of predisposition and social learning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Genetic/hormonal predisposition. (b) Learned via peer modelling and reinforcement. (c) Interaction — biology sets potential, environment shapes expression.",
            commonErrors: [
              "Presenting nature and nurture as competing 'either/or' rather than interacting.",
            ],
          },
        },
        {
          id: "cieipsych-u1-what-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement best describes the interactionist view of behaviour?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Genes and environment interact to shape behaviour",
              },
              { id: "b", text: "Genes completely determine behaviour" },
              { id: "c", text: "Behaviour is random and unpredictable" },
              { id: "d", text: "Environment completely determines behaviour" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interactionism",
                statement:
                  "Genes set potential; environment shapes expression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Most modern psychologists accept that nature and nurture interact rather than one winning alone.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Genes and environment interact to shape behaviour.",
            commonErrors: [
              "Thinking interactionism means 'half genes, half environment' as fixed proportions.",
            ],
          },
        },
        {
          id: "cieipsych-u1-what-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Observable actions and responses are called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Behaviour" },
              { id: "b", text: "Conditioning" },
              { id: "c", text: "Cognition" },
              { id: "d", text: "Consciousness" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Behaviour",
                statement: "Observable actions and responses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Behaviour is what can be directly observed; cognition is the mental processing behind it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Behaviour.",
            commonErrors: ["Including thoughts and feelings as behaviour."],
          },
        },
        {
          id: "cieipsych-u1-what-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the cognitive and behaviourist perspectives would each explain why a person buys an advertised product.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspective application",
                statement:
                  "Cognitive = mental processing/expectations; behaviourist = learned associations and reinforcement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cognitive: the advert shapes mental processes — schemas, expectations and perceived product benefits influence the decision.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Behaviourist: the purchase may be learned — past rewards for buying advertised products, or the advert paired with pleasant imagery (classical conditioning).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both can operate together: conditioning creates the association, cognition interprets it as a rational choice.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cognitive: adverts shape thinking and expectations. Behaviourist: learned associations and reinforced past purchases.",
            commonErrors: [
              "Giving the same explanation for both perspectives.",
            ],
          },
        },
        {
          id: "cieipsych-u1-what-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that a single perspective (e.g. the biological approach) can fully explain all human behaviour.",
          parts: [
            {
              label: "a",
              prompt: "Give two strengths of the biological approach.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give two limitations of relying on one perspective.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Reach a justified judgement.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspective evaluation",
                statement:
                  "Each perspective explains part of behaviour; none covers everything.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Biology offers objective, measurable evidence — brain scans, genes and hormones can be studied scientifically.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It explains predispositions to disorders and physiological responses (e.g. adrenaline in fear).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A single perspective is reductionist — it ignores learning, cognition, social influence and subjective experience.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Different behaviours need different explanations — biology may explain schizophrenia predisposition but not conformity.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: the claim is too strong — biology is powerful for some phenomena but cannot explain all behaviour alone.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "A pluralist approach combining perspectives gives a fuller picture of behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Objective evidence, explains predispositions. (b) Reductionist, cannot cover all behaviour. (c) No single perspective suffices — combine approaches.",
            commonErrors: [
              "One-sided evaluation praising or condemning without justification.",
            ],
          },
        },
      ],
    },
  ],
};
