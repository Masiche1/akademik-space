import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const TECH: TextExtract = {
  title: "Technical Vocabulary in Context",
  author: "Written for Akademik Space",
  text: "The attention economy operates through several mechanisms. First, **algorithmic curation**: platforms use machine learning to predict what content will maximize engagement for each user. Second, **variable rewards**: the same psychological principle that makes slot machines addictive — unpredictable feedback creates compulsive checking. Third, **social proof**: engagement metrics (likes, shares) signal popularity, triggering our tendency to conform.\n\nThese mechanisms exploit evolved psychological vulnerabilities. Our brains are wired to seek novelty, respond to social signals, and pursue rewards. The platforms didn't create these vulnerabilities — they industrialized them. The result is what critics call 'persuasion architecture': design choices that make certain behaviors easier than others, not through force but through frictionless defaults.",
};

const INFO: TextExtract = {
  title: "Informational Text: The Attention Economy",
  author: "Written for Akademik Space",
  text: "In 2023, the average American spent 7 hours and 4 minutes per day looking at screens — more time than any other waking activity except sleep. This isn't an accident of technology. It's a business model.\n\nSocial media platforms generate revenue through advertising. Advertising revenue depends on engagement — time spent, clicks, shares. The platforms' algorithms are optimized to maximize these metrics, which means optimizing for content that captures and holds attention. Emotional content outperforms neutral content. Outrage outperforms nuance.\n\nFormer Google designer Tristan Harris calls this 'the race to the bottom of the brain stem' — a competition to hijack the most primitive neurological responses. The result isn't just distracted users; it's a public sphere where complex problems get reduced to tribal conflicts, where misinformation spreads faster than corrections, and where democratic deliberation becomes nearly impossible.\n\nThe attention economy doesn't just sell products. It sells a version of reality — one optimized for engagement rather than accuracy. Understanding this mechanism is the first step toward resisting it.",
};

const INFO2: TextExtract = {
  title: "Informational Text: Microplastics in the Food Chain",
  author: "Written for Akademik Space",
  text: "Microplastics — plastic particles smaller than 5 millimeters — have been found in every major ocean, in Arctic sea ice, in drinking water, and in human blood. A 2022 study detected microplastic particles in 80% of human blood samples tested.\n\nThe health implications remain uncertain. Laboratory studies show microplastics can cause inflammation and cellular damage in animal tissues. Human epidemiological data is still limited — we don't yet know the long-term effects of chronic low-dose exposure. What we do know is that plastic production has increased 200-fold since 1950, and less than 10% is recycled.\n\nThe precautionary principle suggests we should act before harm is proven, not after. But the plastics industry argues that evidence of harm is insufficient to justify restrictions. This tension between scientific uncertainty and policy action defines many environmental debates.",
};

const ANNOTATED: TextExtract = {
  title: "Annotated Informational Text",
  author: "Written for Akademik Space",
  text: "Microplastics enter the food chain through multiple pathways. **Primary microplastics** are manufactured small — microbeads in cosmetics, plastic pellets used in manufacturing. **Secondary microplastics** result from the breakdown of larger plastic debris through weathering, UV exposure, and mechanical abrasion.\n\nOnce in the environment, microplastics are ingested by plankton, which are then consumed by fish, which are then consumed by humans. **Bioaccumulation** — the process where substances concentrate at higher levels in predators — means that while individual plastic particles may be small, their cumulative presence in top predators can be significant. The long-term health effects of this accumulation remain uncertain, but the pathway is clear: what we put in the ocean eventually comes back to us.",
};

export const lesson52: Lesson = {
  id: "ela9-u5-lesson-5-2",
  code: "5-2",
  title: "Technical Vocabulary and Context Clues",
  goal: "I CAN determine the meaning of technical vocabulary using context clues and domain knowledge.",
  standards: ["RI.9-10.4", "RI.9-10.6", "L.9-10.4", "L.9-10.6"],
  vocabulary: [
    {
      term: "Algorithmic curation",
      definition: "Using algorithms to select content for users.",
    },
    {
      term: "Variable rewards",
      definition: "Unpredictable feedback that creates compulsive behavior.",
    },
    {
      term: "Social proof",
      definition: "Tendency to follow others' behavior.",
    },
    {
      term: "Persuasion architecture",
      definition: "Design choices that influence behavior.",
    },
    {
      term: "Bioaccumulation",
      definition: "Substances concentrating in predators.",
    },
    {
      term: "Frictionless defaults",
      definition: "Making certain behaviors easier than others.",
    },
  ],
  concepts: [
    {
      id: "ela9-u5-vocab",
      title: "Technical vocabulary in context",
      skill:
        "Determine meaning of domain-specific terms using context clues and prior knowledge.",
      lesson: {
        sections: [
          {
            heading: "Context clue strategies",
            body: "Technical terms in informational texts are often defined or explained in context: **apposition** ('algorithmic curation: platforms use machine learning...'), **contrast** ('not through force but through frictionless defaults'), **example** ('microbeads in cosmetics, plastic pellets'), **inference** (figure out from surrounding text). 'Variable rewards' is explained by 'same psychological principle that makes slot machines addictive' — gambling analogy clarifies. 'Bioaccumulation' is defined as 'concentrate at higher levels in predators' — direct definition.",
          },
          {
            heading: "Domain knowledge activation",
            body: "Prior knowledge helps: knowing slot machines are addictive helps understand 'variable rewards'; knowing food chains helps understand 'bioaccumulation.' But don't rely solely on prior knowledge — texts often define terms explicitly or provide enough context. The skill is integrating context clues with what you know, not guessing from memory alone. Technical vocabulary isn't a barrier — it's an opportunity to learn precise language.",
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
          id: "ela9-u5-vocab-q1",
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
                  "Context: 'same psychological principle that makes slot machines addictive' — explains via gambling analogy.",
                evidence: "slot machines addictive",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Unpredictable feedback creating compulsive behavior.",
            commonErrors: ["Choosing (d) — likes are example, not definition."],
          },
        },
        {
          id: "ela9-u5-vocab-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ANNOTATED,
          stem: "Explain how 'bioaccumulation' is defined through context clues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Context clue identification",
                statement: "How meaning is conveyed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Direct definition: 'the process where substances concentrate at higher levels in predators.'",
                evidence: "concentrate at higher levels in predators",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: plankton → fish → humans shows accumulation up food chain.",
                evidence: "plankton, which are then consumed by fish",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Inference: small particles become significant in top predators through accumulation.",
                evidence: "cumulative presence",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Defined directly ('concentrate at higher levels in predators') + example (plankton→fish→humans) + inference (small particles become significant).",
            commonErrors: ["Guessing without identifying clue types."],
          },
        },
        {
          id: "ela9-u5-vocab-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: TECH,
          stem: "Analyze how the author uses technical vocabulary and analogies to explain complex concepts accessibly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Technical vocabulary analysis",
                statement: "How terms convey meaning.",
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
                evidence: "algorithmic curation",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Analogies clarify: 'slot machines' for variable rewards, 'brain stem' for primitive responses.",
                evidence: "slot machines... brain stem",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Balance: technical precision + accessible explanation — sophisticated but understandable.",
                evidence: "accessible",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Author uses precise technical terms ('algorithmic curation,' 'persuasion architecture') with clarifying analogies ('slot machines,' 'brain stem') — achieves precision without sacrificing accessibility.",
            commonErrors: [
              "Thinking technical vocabulary is just jargon — it's precise language.",
            ],
          },
        },
        {
          id: "ela9-u5-vocab-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: TECH,
          parts: [
            {
              label: "a",
              prompt: "What context clue type defines 'bioaccumulation'?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Name another context clue type with example.",
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
                  "Direct definition — 'the process where substances concentrate at higher levels in predators.'",
                evidence: "bioaccumulation",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Analogy — 'slot machines' explains 'variable rewards'; or example — 'microbeads' explains 'primary microplastics.'",
                evidence: "context clue",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Direct definition. (b) Analogy ('slot machines' for variable rewards) or example ('microbeads' for primary microplastics).",
            commonErrors: [
              "Only identifying one clue type — multiple strategies exist.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u5-media",
      title: "Text-media integration",
      skill:
        "Analyze how informational texts integrate data, visuals, and explanations.",
      lesson: {
        sections: [
          {
            heading: "Data presentation",
            body: "Informational texts often include data: '7 hours and 4 minutes per day,' '200-fold increase since 1950,' '80% of blood samples.' Data makes claims concrete — not 'people use screens a lot' but '7 hours daily.' But data needs context: '200-fold increase' sounds dramatic until you learn plastic production was near zero in 1950. Effective texts pair data with explanation — what does the number mean? Why does it matter? Raw data without interpretation is just numbers.",
          },
          {
            heading: "Visual-text integration",
            body: "Infographics, charts, and diagrams complement text: a graph of rising plastic production makes '200-fold increase' visual; a diagram of microplastic pathways shows 'plankton → fish → humans' spatially. Text explains what visuals show; visuals make text's claims tangible. Ask: what does the visual add that text doesn't? A graph of 'engagement vs time spent' might show the attention economy mechanism more clearly than paragraphs.",
          },
        ],
        keyFormulas: [
          {
            name: "Data needs context",
            statement: "Numbers require interpretation.",
          },
          {
            name: "Visual + text",
            statement: "Together stronger than either alone.",
          },
          {
            name: "What visual adds",
            statement: "Ask what image shows that words can't.",
          },
        ],
        workedExample: {
          problem:
            "Why is '200-fold increase in plastic production' more effective with context?",
          solution:
            "Without context, '200-fold' is just a number. With 'since 1950' and 'less than 10% recycled,' it becomes meaningful — shows scale and problem.",
        },
      },
      questions: [
        {
          id: "ela9-u5-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What does '7 hours and 4 minutes per day' accomplish that 'people use screens a lot' doesn't?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Makes claim concrete and quantified" },
              { id: "b", text: "Confuses reader" },
              { id: "c", text: "Shows author's bias" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data specificity",
                statement: "Numbers make claims concrete.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Specific statistic quantifies claim — '7 hours' vs vague 'a lot.'",
                evidence: "7 hours and 4 minutes",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Makes claim concrete and quantified.",
            commonErrors: ["Thinking statistics are just decoration."],
          },
        },
        {
          id: "ela9-u5-media-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO2,
          stem: "Explain why '200-fold increase since 1950' needs context to be meaningful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data context",
                statement: "Numbers need interpretation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'200-fold' alone is just a number — doesn't show scale or significance.",
                evidence: "200-fold increase",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Context: 'since 1950' (timeframe) + 'less than 10% recycled' (problem) makes it meaningful.",
                evidence: "since 1950... less than 10%",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Without context, reader can't assess whether 200-fold is good or bad.",
                evidence: "context",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'200-fold' alone is just a number — context ('since 1950,' 'less than 10% recycled') makes it meaningful by showing timeframe and problem.",
            commonErrors: ["Thinking all statistics are self-explanatory."],
          },
        },
        {
          id: "ela9-u5-media-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ANNOTATED,
          stem: "Analyze how the text integrates technical explanation with accessible language for the microplastics food chain.",
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
                name: "Vocabulary support",
                statement: "Terms defined in context.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Technical terms defined: 'primary microplastics' (manufactured), 'secondary' (breakdown), 'bioaccumulation' (concentrate in predators).",
                evidence: "primary microplastics... bioaccumulation",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Accessible examples: 'microbeads in cosmetics,' 'plankton → fish → humans' — concrete illustrations.",
                evidence: "microbeads... plankton",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Clear pathway: shows how microplastics move through food chain — complex process made understandable.",
                evidence: "food chain",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Text defines technical terms in context ('bioaccumulation' = 'concentrate at higher levels in predators'), uses concrete examples ('microbeads,' 'plankton→fish→humans'), and traces clear pathway — complex science made accessible through vocabulary support and examples.",
            commonErrors: [
              "Thinking technical language = inaccessible — it's made clear through context.",
            ],
          },
        },
        {
          id: "ela9-u5-media-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO,
          parts: [
            {
              label: "a",
              prompt: "What does a visual add to textual data?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Visual-text integration",
                statement: "How they complement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Makes abstract trends tangible — shows patterns text describes.",
                evidence: "visual",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Graph of rising plastic production makes '200-fold increase' visible; diagram of food chain shows pathway.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Makes abstract trends tangible, shows patterns. (b) Graph of plastic production, food chain diagram.",
            commonErrors: [
              "Thinking visuals just repeat text — they add spatial/visual understanding.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u5-synthesis",
      title: "Synthesis across informational texts",
      skill:
        "Compare and synthesize information from multiple informational texts on related topics.",
      lesson: {
        sections: [
          {
            heading: "Cross-text comparison",
            body: "The attention economy and microplastics texts both explore **systems that affect society** but differently: attention economy is about **behavioral design** (how platforms shape choices); microplastics is about **environmental contamination** (how waste enters food chain). Both use similar structure (problem → mechanism → evidence → implication) but different evidence types (statistics + expert quotes vs scientific data + uncertainty). Comparing reveals how different domains use similar argumentative strategies.",
          },
          {
            heading: "Synthesis for understanding",
            body: "Synthesis isn't just comparing — it's finding connections: both texts show how **invisible systems** (algorithms, microplastics) have **visible consequences** (democratic erosion, health risks). Both emphasize **mechanism** — not just 'this is bad' but 'here's how it works.' Both acknowledge **complexity** — attention economy has benefits too; microplastics health effects uncertain. Synthesis reveals patterns across domains.",
          },
        ],
        keyFormulas: [
          {
            name: "Compare structure",
            statement: "Similar strategies across domains.",
          },
          {
            name: "Find connections",
            statement: "Invisible systems → visible consequences.",
          },
          {
            name: "Acknowledge complexity",
            statement: "Both texts show nuance.",
          },
        ],
        workedExample: {
          problem: "What pattern do both texts share?",
          solution:
            "Both show invisible systems (algorithms, microplastics) with visible consequences (democracy erosion, health risks) — mechanism-focused argumentation.",
        },
      },
      questions: [
        {
          id: "ela9-u5-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What do both informational texts have in common structurally?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Problem → mechanism → evidence → implication" },
              { id: "b", text: "Same length" },
              { id: "c", text: "Same author" },
              { id: "d", text: "Same topic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structural comparison",
                statement: "Similar patterns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both use problem-mechanism-evidence-implication structure despite different topics.",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Problem → mechanism → evidence → implication.",
            commonErrors: ["Thinking different topics = different structure."],
          },
        },
        {
          id: "ela9-u5-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO2,
          stem: "What connection exists between the attention economy and microplastics texts?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cross-text synthesis",
                statement: "Find connections.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both explore invisible systems with visible consequences — algorithms/microplastics.",
                evidence: "invisible systems",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both emphasize mechanism — not just 'bad' but 'here's how it works.'",
                evidence: "mechanism",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both acknowledge complexity — benefits/uncertainty, not one-sided.",
                evidence: "complexity",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Both show invisible systems (algorithms, microplastics) with visible consequences (democracy erosion, health risks) — mechanism-focused, complexity-acknowledging argumentation.",
            commonErrors: [
              "Comparing topics instead of structural/argumentative patterns.",
            ],
          },
        },
        {
          id: "ela9-u5-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Write a synthesis comparing how both texts handle evidence and uncertainty in their arguments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cross-text synthesis",
                statement: "Compare evidence handling.",
              },
              {
                kind: "skill",
                name: "Uncertainty analysis",
                statement: "How texts acknowledge limits.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Attention economy: strong evidence (statistics, expert) but selection bias — omits counterarguments.",
                evidence: "evidence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Microplastics: acknowledges uncertainty ('health implications remain uncertain') — honest about limits.",
                evidence: "uncertainty",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis: both use evidence but differ in transparency — one acknowledges limits, other doesn't.",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Both texts use evidence-based argumentation but handle uncertainty differently. Attention economy text provides strong evidence (statistics, expert quotes) but exhibits selection bias — omits industry perspectives. Microplastics text explicitly acknowledges uncertainty (health implications remain uncertain) and presents both sides. The difference: one text is confident, the other is honest about limits — both valid approaches but different transparency.'",
            commonErrors: ["Comparing content instead of evidence handling."],
          },
        },
        {
          id: "ela9-u5-synthesis-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO,
          parts: [
            {
              label: "a",
              prompt: "What does 'synthesis' mean in reading?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How is it different from summary?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis vs summary",
                statement: "Integration vs restatement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Combining information from multiple texts into new understanding.",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Summary = restate; synthesis = find connections and patterns.",
                evidence: "summary vs synthesis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Combining multiple texts into new understanding. (b) Summary restates; synthesis finds connections/patterns.",
            commonErrors: ["Confusing synthesis with summary."],
          },
        },
      ],
    },
  ],
};
