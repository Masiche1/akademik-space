import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const INFO: TextExtract = {
  title: "Writing Prompt: How Does Social Media Shape Identity?",
  author: "Written for Akademik Space",
  text: "Write an informative/explanatory text about how social media shapes personal identity in the digital age. Explain mechanisms, provide examples, and analyze implications — don't argue for or against social media.\n\nYour text should develop ideas thoroughly, use precise language, and organize information logically.",
};

const DRAFT: TextExtract = {
  title: "Student Informative Draft",
  author: "Written for Akademik Space",
  text: "Social media shapes identity in many ways. People post pictures and get likes. This makes them feel good or bad depending on the response. There are also filters that change how people look. Some people become different online than they are offline. Identity is complicated on social media.",
};

export const lesson62: Lesson = {
  id: "ela9-u6-lesson-6-2",
  code: "6-2",
  title: "Informative/Explanatory Writing: Development and Precision",
  goal: "I CAN write informative texts that develop ideas thoroughly with precise language and logical organization.",
  standards: [
    "W.9-10.2",
    "W.9-10.2a",
    "W.9-10.2b",
    "W.9-10.2c",
    "W.9-10.2d",
    "W.9-10.2e",
    "W.9-10.2f",
  ],
  vocabulary: [
    {
      term: "Informative writing",
      definition: "Text that explains or informs rather than argues.",
    },
    {
      term: "Development",
      definition: "Expanding ideas with facts, examples, analysis.",
    },
    {
      term: "Precision",
      definition: "Exact word choice conveying specific meaning.",
    },
    {
      term: "Cohesion",
      definition: "Connections between sentences and paragraphs.",
    },
    {
      term: "Domain-specific vocabulary",
      definition: "Technical terms for the topic.",
    },
    { term: "Analogy", definition: "Comparison explaining complex concepts." },
  ],
  concepts: [
    {
      id: "ela9-u6-info",
      title: "Thorough development",
      skill:
        "Develop informative text ideas through facts, examples, explanation, and analysis — not just description.",
      lesson: {
        sections: [
          {
            heading: "Levels of development",
            body: "**Surface**: 'People get likes' (just states fact). **Developed**: 'When users receive likes, dopamine release reinforces posting behavior — creating a feedback loop where validation-seeking becomes habitual' (explains mechanism). **Thorough**: adds implications, complexity, nuance — 'However, this validation-seeking can conflict with authentic self-expression when curated personas diverge from offline identity.' Grade 9 requires thorough — not just what happens but why and what it means.",
          },
          {
            heading: "Precision vs vagueness",
            body: "Vague: 'social media affects identity' / 'people feel different online.' Precise: 'algorithmic curation creates filter bubbles that shape self-perception through selective exposure to similar viewpoints' / 'quantified social validation (likes, followers) creates measurable status hierarchies.' Precision means choosing words that convey exact meaning — 'curated persona' vs 'fake,' 'validation-seeking' vs 'needing approval.' Technical terms add precision but need explanation for accessibility.",
          },
        ],
        keyFormulas: [
          {
            name: "Surface → developed → thorough",
            statement: "Levels of idea development.",
          },
          {
            name: "Mechanism + implication",
            statement: "Explain why and what it means.",
          },
          {
            name: "Precise vocabulary",
            statement: "Exact words for exact concepts.",
          },
        ],
        workedExample: {
          problem:
            "How would you develop 'social media shapes identity' thoroughly?",
          solution:
            "Mechanism (algorithmic curation → selective exposure → self-perception) + examples (filter bubbles, quantified validation) + implications (authenticity vs curated persona tension) + nuance (benefits and harms coexist).",
        },
      },
      questions: [
        {
          id: "ela9-u6-info-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFT,
          stem: "What is the main weakness of the draft's development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too long" },
              { id: "b", text: "Wrong topic" },
              { id: "c", text: "Too formal" },
              {
                id: "d",
                text: "Only states surface facts without explanation or analysis",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Development levels",
                statement: "Surface vs developed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Draft states facts ('people post pictures') without explaining mechanisms or implications.",
                evidence: "surface facts",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Only states surface facts without explanation or analysis.",
            commonErrors: ["Thinking more sentences = better development."],
          },
        },
        {
          id: "ela9-u6-info-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "Rewrite 'People post pictures and get likes. This makes them feel good or bad' with thorough development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thorough development",
                statement: "Mechanism + implication.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add mechanism: 'When users receive likes, dopamine release reinforces posting — creating validation-seeking feedback loop.'",
                evidence: "mechanism",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add precision: 'quantified social validation creates measurable status hierarchies.'",
                evidence: "precision",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add implication: 'This validation-seeking can conflict with authentic self-expression.'",
                evidence: "implication",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'When users receive likes, dopamine release reinforces posting behavior — creating a validation-seeking feedback loop. Quantified social validation (likes, followers) creates measurable status hierarchies that can conflict with authentic self-expression when curated personas diverge from offline identity.'",
            commonErrors: ["Adding more surface facts instead of depth."],
          },
        },
        {
          id: "ela9-u6-info-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Write an outline for an informative text on how social media shapes identity with developed, precise ideas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Informative structure",
                statement: "Logical organization.",
              },
              {
                kind: "skill",
                name: "Development depth",
                statement: "Thorough exploration.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Intro: define identity + social media context; thesis: multiple mechanisms shape identity.",
                evidence: "intro",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "P1: validation mechanisms — likes/followers create quantified status hierarchies.",
                evidence: "P1",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "P2: curation mechanisms — algorithms create filter bubbles shaping self-perception.",
                evidence: "P2",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "P3: performance mechanisms — curated personas vs authentic self tension.",
                evidence: "P3",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conclusion: synthesis — identity is negotiated between online performance and offline reality.",
                evidence: "conclusion",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example outline: Intro (identity + social media context) → P1 validation (quantified status) → P2 curation (filter bubbles) → P3 performance (curated vs authentic) → Conclusion (negotiated identity). Each paragraph: mechanism + examples + implications.",
            commonErrors: [
              "Outline with surface topics instead of developed ideas.",
            ],
          },
        },
        {
          id: "ela9-u6-info-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAFT,
          parts: [
            {
              label: "a",
              prompt: "Rewrite 'social media affects identity' precisely.",
              marks: 2,
            },
            { label: "b", prompt: "Why is your version better?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Precise vocabulary",
                statement: "Exact meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'algorithmic curation creates filter bubbles that shape self-perception through selective exposure.'",
                evidence: "precise",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "More specific (algorithmic curation vs vague 'affects'), explains mechanism (filter bubbles), precise terms.",
                evidence: "better",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Algorithmic curation creates filter bubbles that shape self-perception through selective exposure.' (b) More specific, explains mechanism, uses precise terms.",
            commonErrors: ["Adding adjectives instead of precision."],
          },
        },
      ],
    },
    {
      id: "ela9-u6-analyze",
      title: "Analysis and explanation",
      skill:
        "Analyze how and why things work in informative writing — not just describe.",
      lesson: {
        sections: [
          {
            heading: "From description to analysis",
            body: "Description: 'People use filters on photos.' Analysis: 'Beauty filters that smooth skin and enlarge eyes create unrealistic beauty standards, which research links to increased body dissatisfaction among adolescent users — a feedback loop where exposure to idealized images normalizes unattainable appearance.' Analysis answers HOW and WHY, not just WHAT. It explains mechanisms, causes, effects, and implications — the 'so what' of information.",
          },
          {
            heading: "Analogy and example",
            body: "Analogies make complex concepts accessible: 'Filter bubbles function like echo chambers — users hear their own views reflected back, reinforcing beliefs without exposure to alternatives.' Examples ground abstraction: 'A user who only follows fitness influencers may develop distorted body image perceptions — concrete illustration of algorithmic curation's effects.' Effective informative writing combines analysis (how/why) with analogy (comparison) and example (concrete case).",
          },
        ],
        keyFormulas: [
          {
            name: "How + why",
            statement: "Analysis explains mechanisms and causes.",
          },
          {
            name: "Analogy clarifies",
            statement: "Comparison makes complex accessible.",
          },
          {
            name: "Example grounds",
            statement: "Concrete case illustrates abstraction.",
          },
        ],
        workedExample: {
          problem:
            "How would you analyze 'people use filters' instead of just describing?",
          solution:
            "'Beauty filters create unrealistic standards → body dissatisfaction → feedback loop. Like echo chambers, they reflect idealized images without alternatives — normalizing unattainable appearance.'",
        },
      },
      questions: [
        {
          id: "ela9-u6-analyze-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFT,
          stem: "What does 'analysis' add that description doesn't?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Better spelling" },
              { id: "b", text: "More words" },
              { id: "c", text: "Fancier vocabulary" },
              { id: "d", text: "Explains how and why, not just what" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Analysis",
                statement: "How and why.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Analysis explains mechanisms and implications, not just states facts.",
                evidence: "how and why",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Explains how and why, not just what.",
            commonErrors: ["Thinking analysis = more description."],
          },
        },
        {
          id: "ela9-u6-analyze-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "Convert 'Some people become different online than offline' into analytical writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical writing",
                statement: "How/why explanation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add mechanism: 'Curated personas — carefully selected content creating idealized self-presentation.'",
                evidence: "mechanism",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add cause: 'Validation-seeking and social comparison drive performance of idealized identity.'",
                evidence: "cause",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add implication: 'Gap between online performance and offline reality can create identity conflict.'",
                evidence: "implication",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Curated personas — carefully selected content creating idealized self-presentation — emerge from validation-seeking and social comparison. The gap between online performance and offline reality can create identity conflict when users must navigate between authentic and performed selves.'",
            commonErrors: ["Adding adjectives instead of analysis."],
          },
        },
        {
          id: "ela9-u6-analyze-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Write a paragraph analyzing how social media creates identity tension between online performance and offline reality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical paragraph",
                statement: "Mechanism + implication.",
              },
              {
                kind: "skill",
                name: "Nuanced analysis",
                statement: "Complexity acknowledged.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Mechanism: quantified validation + curated personas → performance pressure.",
                evidence: "mechanism",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tension: online performance vs offline authenticity — users navigate between selves.",
                evidence: "tension",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Nuance: benefits (community, self-expression) coexist with costs (authenticity strain).",
                evidence: "nuance",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Social media creates identity tension through quantified validation and curated personas. When likes and followers become measurable status, users perform idealized selves — carefully selected content creating distance from authentic identity. This performance pressure generates conflict: online personas may diverge significantly from offline reality, requiring users to navigate between performed and authentic selves. However, the same platforms enable community and self-expression — the tension isn't purely negative but reflects identity's negotiated nature in digital contexts.'",
            commonErrors: ["One-sided analysis — acknowledging only harms."],
          },
        },
        {
          id: "ela9-u6-analyze-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAFT,
          parts: [
            {
              label: "a",
              prompt: "What is an 'analogy' in writing?",
              marks: 2,
            },
            { label: "b", prompt: "Create one for filter bubbles.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Analogy",
                statement: "Comparison for clarity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Comparison explaining complex concept through familiar one.",
                evidence: "analogy",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'Filter bubbles function like echo chambers — users hear their own views reflected back.'",
                evidence: "echo chambers",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Comparison explaining complex concept through familiar one. (b) 'Filter bubbles like echo chambers — users hear own views reflected back.'",
            commonErrors: ["Analogy that's too literal or unclear."],
          },
        },
      ],
    },
    {
      id: "ela9-u6-organization",
      title: "Organization and cohesion in informative writing",
      skill:
        "Organize informative texts logically with smooth transitions and cohesive paragraph development.",
      lesson: {
        sections: [
          {
            heading: "Informative organization",
            body: "Organize by **mechanism** (how it works), **category** (types), **chronology** (how it developed), or **problem-solution** (issue + explanation). For social media identity: mechanism organization works well — P1 validation, P2 curation, P3 performance. Each paragraph: topic sentence (mechanism), explanation (how it works), example (concrete case), implication (why it matters). Cohesion means paragraphs connect — 'These validation mechanisms interact with curation algorithms to...' shows relationships.",
          },
          {
            heading: "Transitions for explanation",
            body: "Informative transitions differ from argument: 'For example' (illustration), 'In other words' (clarification), 'This means' (implication), 'Specifically' (detail), 'Similarly' (comparison). Use to guide reader through explanation: 'Algorithmic curation creates filter bubbles. Specifically, users see content similar to what they've engaged with. This means...' Each transition has purpose — don't just connect sentences, connect ideas.",
          },
        ],
        keyFormulas: [
          {
            name: "Organize by mechanism",
            statement: "How it works structure.",
          },
          {
            name: "Topic-explanation-example-implication",
            statement: "Paragraph pattern.",
          },
          {
            name: "Transitions connect ideas",
            statement: "Guide through explanation.",
          },
        ],
        workedExample: {
          problem:
            "How would you organize an informative text on social media identity?",
          solution:
            "By mechanism: P1 validation → P2 curation → P3 performance. Each paragraph: topic sentence, mechanism explanation, example, implication. Transitions show relationships.",
        },
      },
      questions: [
        {
          id: "ela9-u6-organization2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What is the best organization for explaining how social media shapes identity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By mechanism — how each process works" },
              { id: "b", text: "Random order" },
              { id: "c", text: "Alphabetical" },
              { id: "d", text: "By length" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mechanism organization",
                statement: "How it works.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Organizing by mechanism (validation, curation, performance) explains how identity is shaped.",
                evidence: "mechanism",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. By mechanism — how each process works.",
            commonErrors: ["Organizing by topic without explanation."],
          },
        },
        {
          id: "ela9-u6-organization2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "Identify the cohesion problem in the draft and suggest a fix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cohesion diagnosis",
                statement: "Paragraph connections.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Problem: paragraphs are disconnected — 'This makes them feel good or bad' doesn't connect to next idea.",
                evidence: "disconnected",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix: use transitions showing relationships — 'Similarly,' 'In contrast,' 'These mechanisms interact.'",
                evidence: "transitions",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Each paragraph should connect to thesis — show how mechanism contributes to identity shaping.",
                evidence: "thesis connection",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Problem: disconnected paragraphs. Fix: transitions showing relationships ('similarly,' 'these mechanisms interact') + each paragraph connects to thesis.",
            commonErrors: [
              "Adding transitions without fixing paragraph content.",
            ],
          },
        },
        {
          id: "ela9-u6-organization2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Write an outline for an informative text on social media identity organized by mechanism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Informative outline",
                statement: "Mechanism organization.",
              },
              {
                kind: "skill",
                name: "Paragraph structure",
                statement: "Topic-explanation-example-implication.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Intro: define identity + social media; thesis: multiple mechanisms shape identity.",
                evidence: "intro",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "P1: validation mechanism — quantified status, dopamine feedback.",
                evidence: "P1",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "P2: curation mechanism — algorithms, filter bubbles, selective exposure.",
                evidence: "P2",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "P3: performance mechanism — curated personas, authenticity tension.",
                evidence: "P3",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conclusion: synthesis — identity negotiated between online/offline.",
                evidence: "conclusion",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example outline: Intro → P1 validation → P2 curation → P3 performance → Conclusion. Each paragraph: topic sentence, mechanism explanation, example, implication. Transitions show how mechanisms interact.",
            commonErrors: ["Outline with topics but no mechanism explanation."],
          },
        },
        {
          id: "ela9-u6-organization2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAFT,
          parts: [
            {
              label: "a",
              prompt:
                "Write a transition connecting validation to curation paragraphs.",
              marks: 2,
            },
            { label: "b", prompt: "Why does it work?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transition writing",
                statement: "Connect ideas.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'These validation mechanisms interact with algorithmic curation to...' or 'Similarly, curation algorithms amplify validation-seeking.'",
                evidence: "transition",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Shows relationship between mechanisms — not just connection but interaction.",
                evidence: "works",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'These validation mechanisms interact with algorithmic curation to...' (b) Shows relationship/interaction between mechanisms, not just connection.",
            commonErrors: [
              "Generic transitions like 'also' — need specific relationship.",
            ],
          },
        },
      ],
    },
  ],
};
