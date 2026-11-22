import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const TECH: TextExtract = {
  title: "Technical Vocabulary in Context",
  author: "Written for Akademik Space",
  text: "The attention economy operates through several mechanisms. First, **algorithmic curation**: platforms use machine learning to predict what content will maximize engagement for each user. Second, **variable rewards**: the same psychological principle that makes slot machines addictive — unpredictable feedback creates compulsive checking. Third, **social proof**: engagement metrics (likes, shares) signal popularity, triggering our tendency to conform.\n\nThese mechanisms exploit evolved psychological vulnerabilities. Our brains are wired to seek novelty, respond to social signals, and pursue rewards. The platforms didn't create these vulnerabilities — they industrialized them. The result is what critics call 'persuasion architecture': design choices that make certain behaviors easier than others, not through force but through frictionless defaults.",
};

const MEDIA: TextExtract = {
  title: "Data Presentation in Informational Texts",
  author: "Written for Akademik Space",
  text: "The sleep text presents data strategically: 'attendance up 4%, grades improve, car crashes down 8%.' These statistics are specific and quantified — not vague claims like 'things got better.' The 4% attendance increase is meaningful but modest; the 8% crash reduction is more dramatic. The text also acknowledges what we don't know: 'The research is clear — but implementation faces logistical barriers.'\n\nEffective data presentation pairs numbers with context: '8:45 a.m. start' means students wake at 7 instead of 6 — a concrete change. 'Car crashes down 8%' translates to fewer teen deaths — human impact, not just statistics. The text doesn't just report data; it explains what the data means for students' lives.",
};

export const lesson52: Lesson = {
  id: "ela10-u5-lesson-5-2",
  code: "5-2",
  title: "Technical Vocabulary, Data, and Media Integration",
  goal: "I CAN determine meaning of technical terms using context and analyze how data and visuals support informational arguments.",
  standards: ["RI.9-10.4", "RI.9-10.7", "RI.9-10.9", "L.9-10.4", "L.9-10.6"],
  vocabulary: [
    {
      term: "Algorithmic curation",
      definition: "Using algorithms to select content.",
    },
    {
      term: "Variable rewards",
      definition: "Unpredictable feedback creating compulsive behavior.",
    },
    {
      term: "Persuasion architecture",
      definition: "Design choices influencing behavior.",
    },
    { term: "Data visualization", definition: "Presenting data graphically." },
    { term: "Quantified claim", definition: "Specific numerical evidence." },
    { term: "Contextualization", definition: "Explaining what data means." },
  ],
  concepts: [
    {
      id: "ela10-u5-vocab",
      title: "Technical vocabulary in context",
      skill:
        "Determine meaning of domain-specific terms using context clues and prior knowledge.",
      lesson: {
        sections: [
          {
            heading: "Context clue strategies",
            body: "Technical terms are often defined in context: **apposition** ('algorithmic curation: platforms use machine learning...'), **contrast** ('not through force but through frictionless defaults'), **example** ('slot machines addictive' for variable rewards), **inference** (figure out from surrounding text). 'Persuasion architecture' is defined as 'design choices that make certain behaviors easier' — direct definition. 'Bioaccumulation' would be explained by food chain examples.",
          },
          {
            heading: "Domain knowledge integration",
            body: "Prior knowledge helps: knowing slot machines are addictive clarifies 'variable rewards'; knowing food chains clarifies 'bioaccumulation.' But don't rely solely on memory — texts often define terms or provide enough context. The skill is integrating context clues with what you know, not guessing. Technical vocabulary isn't a barrier — it's an opportunity to learn precise language.",
          },
        ],
        keyFormulas: [
          {
            name: "Context clues",
            statement: "Apposition, contrast, example, inference.",
          },
          {
            name: "Domain knowledge",
            statement: "Prior knowledge + context = meaning.",
          },
          {
            name: "Technical = precise",
            statement: "Domain terms convey exact concepts.",
          },
        ],
        workedExample: {
          problem: "What does 'variable rewards' mean based on context?",
          solution:
            "Unpredictable feedback creating compulsive behavior — explained by 'same principle that makes slot machines addictive.' Gambling analogy clarifies.",
        },
      },
      questions: [
        {
          id: "ela10-u5-vocab-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TECH,
          stem: "What does 'variable rewards' mean in context?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixed prizes" },
              { id: "b", text: "Cash payments" },
              { id: "c", text: "Social media likes" },
              {
                id: "d",
                text: "Unpredictable feedback creating compulsive behavior",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variable rewards",
                statement: "Unpredictable feedback.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Context: 'same psychological principle that makes slot machines addictive' — gambling analogy.",
                evidence: "slot machines",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Unpredictable feedback creating compulsive behavior.",
            commonErrors: ["Choosing (d) — likes are example, not definition."],
          },
        },
        {
          id: "ela10-u5-vocab-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: TECH,
          stem: "Explain how 'persuasion architecture' is defined through context clues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Context clue identification",
                statement: "How meaning conveyed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Direct definition: 'design choices that make certain behaviors easier than others.'",
                evidence: "design choices",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Contrast: 'not through force but through frictionless defaults' — explains mechanism.",
                evidence: "contrast",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: platforms' algorithms optimizing engagement — concrete illustration.",
                evidence: "example",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Defined directly ('design choices that make certain behaviors easier') + contrast ('not through force but frictionless defaults') + example (algorithmic optimization).",
            commonErrors: ["Guessing without identifying clue types."],
          },
        },
        {
          id: "ela10-u5-vocab-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: TECH,
          stem: "Analyze how the author uses technical vocabulary and analogies to explain complex concepts accessibly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Technical communication",
                statement: "Complex ideas accessibly.",
              },
              {
                kind: "skill",
                name: "Analogy effectiveness",
                statement: "How comparisons clarify.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Technical terms precise: 'algorithmic curation,' 'persuasion architecture' — exact concepts.",
                evidence: "technical",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Analogies clarify: 'slot machines' for variable rewards, 'brain stem' for primitive responses.",
                evidence: "analogies",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Balance: technical precision + accessible explanation — sophisticated but understandable.",
                evidence: "balance",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Author uses precise technical terms ('algorithmic curation,' 'persuasion architecture') with clarifying analogies ('slot machines,' 'brain stem') — achieves precision without sacrificing accessibility.",
            commonErrors: ["Thinking technical vocabulary = jargon."],
          },
        },
        {
          id: "ela10-u5-vocab-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: TECH,
          parts: [
            {
              label: "a",
              prompt:
                "What context clue type defines 'persuasion architecture'?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Name another clue type with example.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Context clue types",
                statement: "Different strategies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Direct definition — 'design choices that make certain behaviors easier.'",
                evidence: "definition",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Analogy — 'slot machines' explains 'variable rewards.'",
                evidence: "analogy",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Direct definition. (b) Analogy ('slot machines' for variable rewards).",
            commonErrors: ["Only identifying one clue type."],
          },
        },
      ],
    },
    {
      id: "ela10-u5-data",
      title: "Data Presentation and Interpretation",
      skill:
        "Analyze how informational texts present and contextualize data for persuasive effect.",
      lesson: {
        sections: [
          {
            heading: "Quantified claims",
            body: "Effective texts use specific numbers: '7 hours and 4 minutes' vs 'a lot of time'; 'attendance up 4%' vs 'things improved'; 'car crashes down 8%' vs 'safer.' Specificity makes claims verifiable and concrete. But numbers need context: '200-fold increase in plastic' sounds dramatic until you learn baseline was near zero. '8% crash reduction' means fewer teen deaths — human impact, not just statistic.",
          },
          {
            heading: "Data contextualization",
            body: "Strong texts explain what data means: '8:45 a.m. start' → students wake at 7 not 6 — concrete change. 'Car crashes down 8%' → fewer teen deaths — human consequence. 'Attendance up 4%' → more students showing up — engagement improvement. Data without interpretation is just numbers; with context, it becomes meaningful evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Specific > vague",
            statement: "Numbers make claims concrete.",
          },
          {
            name: "Data needs context",
            statement: "Numbers require interpretation.",
          },
          {
            name: "Human impact",
            statement: "Translate statistics to consequences.",
          },
        ],
        workedExample: {
          problem:
            "Why is 'attendance up 4%' more effective than 'things improved'?",
          solution:
            "Specific, quantified, verifiable — '4%' is measurable improvement vs vague 'things improved.' Context: more students attending = engagement benefit.",
        },
      },
      questions: [
        {
          id: "ela10-u5-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEDIA,
          stem: "Why is 'attendance up 4%' more effective than 'things improved'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's shorter" },
              { id: "b", text: "It's more emotional" },
              { id: "c", text: "It's about attendance" },
              { id: "d", text: "Specific, quantified, verifiable" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quantified claim",
                statement: "Specific numbers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'4%' is specific, measurable, verifiable — vs vague 'things improved.'",
                evidence: "quantified",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Specific, quantified, verifiable.",
            commonErrors: ["Thinking vagueness is clearer."],
          },
        },
        {
          id: "ela10-u5-data-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MEDIA,
          stem: "Explain why 'car crashes down 8%' needs contextualization to be meaningful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data contextualization",
                statement: "Numbers need interpretation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'8%' alone is just a number — doesn't show significance.",
                evidence: "8%",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Context: 'fewer teen deaths' — translates statistic to human impact.",
                evidence: "deaths",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Without context, reader can't assess whether 8% is meaningful or trivial.",
                evidence: "context",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'8%' alone is just a number — context ('fewer teen deaths') translates to human impact, making it meaningful. Without context, significance unclear.",
            commonErrors: ["Thinking statistics are self-explanatory."],
          },
        },
        {
          id: "ela10-u5-data-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MEDIA,
          stem: "Analyze how the sleep text uses data to build its argument for later start times.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data analysis",
                statement: "How numbers support argument.",
              },
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Data in context.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Biological data: melatonin curve — explains WHY teens need later start.",
                evidence: "melatonin",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Outcome data: attendance +4%, crashes -8% — shows policy works.",
                evidence: "outcomes",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Contextualization: '8:45 means wake at 7 not 6' — makes abstract concrete.",
                evidence: "context",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Sleep text uses layered data: biological (melatonin curve explains mechanism), outcome (Seattle results show effectiveness), and contextualized (concrete changes like wake times). Data builds cumulative case — biology explains need, outcomes prove solution works.",
            commonErrors: ["Listing statistics without analyzing function."],
          },
        },
        {
          id: "ela10-u5-data-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIA,
          parts: [
            { label: "a", prompt: "What makes data 'quantified'?", marks: 2 },
            { label: "b", prompt: "Give an example from the text.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quantified data",
                statement: "Specific numbers.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Specific numerical values — measurable, verifiable claims.",
                evidence: "quantified",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Attendance up 4%, crashes down 8%' — specific percentages.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Specific numerical values — measurable, verifiable. (b) 'Attendance up 4%, crashes down 8%' — specific percentages.",
            commonErrors: ["Confusing quantified with vague estimates."],
          },
        },
      ],
    },
    {
      id: "ela10-u5-media",
      title: "Media Integration and Text-Visual Relationships",
      skill:
        "Analyze how informational texts integrate text, visuals, and data for comprehensive communication.",
      lesson: {
        sections: [
          {
            heading: "Text-visual integration",
            body: "Informational texts often combine text + visuals: graphs, infographics, diagrams. Text explains what visuals show; visuals make text's claims tangible. A graph of rising plastic production makes '200-fold increase' visible; a diagram of food chain shows 'plankton → fish → humans' spatially. Ask: what does the visual add that text doesn't? Effective integration means each element strengthens the other.",
          },
          {
            heading: "Multi-modal analysis",
            body: "Modern informational texts are multi-modal: article + embedded video + interactive chart + social media share. Each medium has strengths: text for explanation, video for demonstration, charts for data, social media for reach. Analysis requires reading across modalities — how does video complement article? How does chart simplify complex data? Integration creates comprehensive understanding.",
          },
        ],
        keyFormulas: [
          {
            name: "Text + visual = stronger",
            statement: "Together better than either.",
          },
          {
            name: "What visual adds",
            statement: "Ask what image shows that words can't.",
          },
          {
            name: "Multi-modal integration",
            statement: "Each medium has strengths.",
          },
        ],
        workedExample: {
          problem:
            "How does a food chain diagram complement text about microplastics?",
          solution:
            "Text explains pathway ('plankton → fish → humans'); diagram shows it spatially — visual makes abstract process tangible and memorable.",
        },
      },
      questions: [
        {
          id: "ela10-u5-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEDIA,
          stem: "What does a visual add to textual data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "Confuses reader" },
              { id: "c", text: "Makes abstract trends tangible" },
              { id: "d", text: "Just decoration" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Visual-text integration",
                statement: "Complementary.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Visuals make abstract trends tangible — show patterns text describes.",
                evidence: "visual",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Makes abstract trends tangible.",
            commonErrors: ["Thinking visuals just repeat text."],
          },
        },
        {
          id: "ela10-u5-media-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MEDIA,
          stem: "Explain why a food chain diagram complements text about microplastics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Visual-text relationship",
                statement: "How they complement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text explains pathway verbally ('plankton → fish → humans').",
                evidence: "text",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Diagram shows it spatially — visual makes process tangible.",
                evidence: "diagram",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Together: text provides explanation, visual provides spatial/visual understanding.",
                evidence: "together",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Text explains pathway verbally; diagram shows spatially — visual makes abstract process tangible and memorable. Together provide comprehensive understanding.",
            commonErrors: ["Thinking visual just repeats text."],
          },
        },
        {
          id: "ela10-u5-media-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MEDIA,
          stem: "Analyze how multi-modal presentation (article + video + chart + social media) creates comprehensive understanding of sleep issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-modal analysis",
                statement: "Different media strengths.",
              },
              {
                kind: "skill",
                name: "Integration",
                statement: "How they work together.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Article: detailed explanation of biology + policy — depth.",
                evidence: "article",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Video: student testimonials, classroom footage — emotional connection.",
                evidence: "video",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Chart: melatonin curve, Seattle data — visual data presentation.",
                evidence: "chart",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning: "Social media: shareability, reach — amplification.",
                evidence: "social",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Multi-modal approach: article provides depth (biology, policy), video provides emotional connection (student experiences), chart provides visual data (melatonin curve, outcomes), social media provides reach/amplification. Each medium has strengths; integration creates comprehensive understanding.",
            commonErrors: [
              "Analyzing each medium separately without integration.",
            ],
          },
        },
        {
          id: "ela10-u5-media-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIA,
          parts: [
            {
              label: "a",
              prompt: "What is 'multi-modal' communication?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multi-modal",
                statement: "Multiple media types.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Using multiple media types — text, video, audio, visual, interactive.",
                evidence: "multi-modal",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: article + embedded video + interactive chart + social media share.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Multiple media types — text, video, audio, visual, interactive. (b) Article + video + chart + social media.",
            commonErrors: [
              "Confusing with multimedia (just multiple formats).",
            ],
          },
        },
      ],
    },
    {
      id: "ela10-u5-integrated",
      title: "Integrated Informational Text Analysis",
      skill:
        "Integrate vocabulary, data, structure, and evaluation in comprehensive informational text analysis.",
      lesson: {
        sections: [
          {
            heading: "Integrated analysis",
            body: "Strong analysis combines: **central idea** (what's it about?), **thesis** (what's argued?), **evidence** (how supported?), **structure** (how organized?), **vocabulary** (how explained?), **evaluation** (how credible?). Sleep text: central idea (sleep deprivation), thesis (later start needed), evidence (AAP, Seattle data), structure (recommendation→basis→consequences→barriers), vocabulary (circadian, melatonin explained), evaluation (acknowledges barriers).",
          },
          {
            heading: "Synthesis for exams",
            body: "Exam questions often require integrated analysis: 'Analyze how the text uses evidence and structure to argue for later start times.' Requires identifying thesis, tracing evidence, explaining structure, evaluating credibility — all integrated. Practice combining lenses rather than analyzing separately.",
          },
        ],
        keyFormulas: [
          {
            name: "Multiple lenses",
            statement: "Idea + thesis + evidence + structure + vocab + eval.",
          },
          {
            name: "Integration = comprehensive",
            statement: "How choices serve argument.",
          },
          { name: "Exam synthesis", statement: "Combine analysis types." },
        ],
        workedExample: {
          problem: "Integrate analysis of sleep text across multiple lenses.",
          solution:
            "Central idea (sleep deprivation) + thesis (later start needed) + evidence (AAP, Seattle) + structure (recommendation→barriers) + vocabulary (circadian explained) + evaluation (acknowledges barriers) = comprehensive understanding.",
        },
      },
      questions: [
        {
          id: "ela10-u5-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEDIA,
          stem: "What does 'integrated analysis' require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only data" },
              { id: "b", text: "Only vocabulary" },
              { id: "c", text: "Summary" },
              {
                id: "d",
                text: "Multiple lenses — idea, thesis, evidence, structure, evaluation",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Integrated analysis",
                statement: "Multiple lenses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Integrated = central idea + thesis + evidence + structure + vocabulary + evaluation.",
                evidence: "integrated",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Multiple lenses — idea, thesis, evidence, structure, evaluation.",
            commonErrors: ["Analyzing only one aspect."],
          },
        },
        {
          id: "ela10-u5-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MEDIA,
          stem: "Identify three analytical lenses for the sleep text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical lenses",
                statement: "Different perspectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence lens: AAP recommendation, Seattle data — how claims supported.",
                evidence: "evidence",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure lens: recommendation→basis→consequences→barriers — how organized.",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evaluation lens: acknowledges barriers — how credible/balanced.",
                evidence: "evaluation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Evidence (AAP, Seattle data), structure (recommendation→barriers), evaluation (acknowledges barriers).",
            commonErrors: ["Listing aspects without identifying as lenses."],
          },
        },
        {
          id: "ela10-u5-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MEDIA,
          stem: "Write an integrated analysis paragraph on the sleep text using at least three lenses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple lenses.",
              },
              {
                kind: "skill",
                name: "Comprehensive interpretation",
                statement: "How choices serve argument.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Evidence: AAP recommendation + Seattle data — strong support.",
                evidence: "evidence",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure: recommendation→biology→consequences→barriers — progressive argument.",
                evidence: "structure",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evaluation: acknowledges logistics barriers — builds credibility.",
                evidence: "evaluation",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The sleep text integrates evidence, structure, and evaluation to argue for later start times: evidence combines AAP authority with Seattle outcome data; structure moves from recommendation through biological basis to consequences and barriers; evaluation acknowledges implementation challenges, distinguishing scientific consensus from policy difficulty. Together, these choices build credible, comprehensive argument.'",
            commonErrors: [
              "Analyzing aspects separately instead of integrating.",
            ],
          },
        },
        {
          id: "ela10-u5-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIA,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated analysis stronger than single-lens?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration value",
                statement: "Why it matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each lens alone is partial; together reveal how choices serve argument.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: evidence + structure + evaluation shows how barriers acknowledgment builds credibility — single lens misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each lens partial; together reveal how choices serve argument. (b) Evidence+structure+evaluation shows barriers acknowledgment builds credibility.",
            commonErrors: ["Thinking one lens is enough."],
          },
        },
      ],
    },
  ],
};
