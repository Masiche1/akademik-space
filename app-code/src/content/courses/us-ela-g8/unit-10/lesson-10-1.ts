import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const INFO: TextExtract = {
  title: "Informational Text: The Science of Sleep",
  author: "Written for Akademik Space",
  text: "Teenagers need 8-10 hours of sleep per night, yet most get less than 7. This isn't laziness — it's biology. During puberty, the body's internal clock shifts later, making teens naturally alert later at night and groggy in early morning.\n\nThe consequences extend beyond yawning. Sleep-deprived teens show impaired memory consolidation — the process where the brain transfers information from short-term to long-term storage. Studies link chronic sleep deprivation to decreased academic performance, increased anxiety, and even higher risk of obesity and diabetes.\n\nSchools that delayed start times report measurable improvements. When Seattle schools moved start times from 7:50 to 8:45, students gained an average of 34 minutes of sleep. Attendance improved, grades rose, and car crash rates among teen drivers dropped.\n\nThe evidence is clear: later school start times aren't a luxury — they're a public health imperative.",
};

const INFO2: TextExtract = {
  title: "Informational Text: Urban Heat Islands",
  author: "Written for Akademik Space",
  text: "Cities are typically 2-5°F warmer than surrounding rural areas — a phenomenon called the urban heat island effect. The cause is simple: cities replace natural landscapes with asphalt, concrete, and buildings that absorb and retain heat.\n\nThe consequences are serious. Heat waves become more dangerous in cities, where temperatures can spike 10-15°F above rural areas. Vulnerable populations — elderly residents, those without air conditioning, outdoor workers — face increased risk of heat-related illness and death.\n\nSolutions exist. Green roofs and urban trees provide shade and release moisture through transpiration, cooling the air. Cool pavement materials reflect sunlight instead of absorbing it. But implementation requires planning and investment — cities must prioritize heat mitigation in their budgets and building codes.",
};

export const lesson101: Lesson = {
  id: "ela8-u10-lesson-10-1",
  code: "10-1",
  title: "Informational Text: Central Ideas and Structure",
  goal: "I CAN identify central ideas in informational texts and analyze how structure supports meaning.",
  standards: ["RI.8.1", "RI.8.2", "RI.8.5", "RI.8.6"],
  vocabulary: [
    {
      term: "Central idea",
      definition: "Main point the text is trying to convey.",
    },
    {
      term: "Supporting details",
      definition: "Evidence that backs up the central idea.",
    },
    {
      term: "Text structure",
      definition:
        "How information is organized — cause-effect, compare-contrast.",
    },
    {
      term: "Informational text",
      definition: "Non-fiction that informs or explains.",
    },
    {
      term: "Objective writing",
      definition: "Factual, unbiased presentation of information.",
    },
    {
      term: "Summarization",
      definition: "Distilling main points without unnecessary details.",
    },
  ],
  concepts: [
    {
      id: "ela8-u10-central",
      title: "Central idea identification",
      skill:
        "Identify the main point of informational texts by analyzing topic sentences and supporting details.",
      lesson: {
        sections: [
          {
            heading: "Finding central ideas",
            body: "Central idea = what the whole text is about, not just one paragraph. Ask: if I had to summarize in one sentence, what would I say? The sleep text's central idea isn't just 'teens need sleep' — it's 'later school start times are a public health imperative based on sleep science.' Supporting details: circadian rhythm shift, memory consolidation, Seattle results, health risks. Each paragraph supports the central claim.",
          },
          {
            heading: "Structure analysis",
            body: "Informational texts use structures: **cause-effect** (sleep deprivation → poor performance), **problem-solution** (heat island → green roofs), **compare-contrast** (urban vs rural temps). The sleep text uses problem-solution: problem (sleep deprivation) → evidence (consequences) → solution (later start times) → proof (Seattle). Structure reveals author's argument — they're not just informing, they're persuading.",
          },
        ],
        keyFormulas: [
          {
            name: "Central idea = whole text",
            statement: "Not just one paragraph — the main point.",
          },
          {
            name: "Structure reveals argument",
            statement: "Problem-solution = persuasive intent.",
          },
          {
            name: "Supporting details",
            statement: "Evidence backs up central claim.",
          },
        ],
        workedExample: {
          problem: "What is the central idea of the sleep text?",
          solution:
            "Later school start times improve student health and academic performance — supported by sleep science and Seattle data.",
        },
      },
      questions: [
        {
          id: "ela8-u10-central-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What is the central idea of the sleep text?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Later school start times improve health and performance",
              },
              { id: "b", text: "Teens need more sleep" },
              { id: "c", text: "Seattle schools start late" },
              { id: "d", text: "Sleep affects memory" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Central idea",
                statement: "Main point of whole text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text argues for later start times using sleep science and Seattle evidence — that's the central claim.",
                evidence: "public health imperative",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Later school start times improve health and performance.",
            commonErrors: [
              "Choosing (a) — that's a supporting detail, not central idea.",
            ],
          },
        },
        {
          id: "ela8-u10-central-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO,
          stem: "Identify the text structure and explain how it supports the central idea.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure analysis",
                statement: "How organization supports argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structure: problem-solution — sleep deprivation (problem) → consequences → later starts (solution) → Seattle proof.",
                evidence: "problem-solution",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Supports central idea by building case: problem establishes need, solution addresses it, proof validates.",
                evidence: "evidence is clear",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure reveals persuasive intent — not just informing but arguing for change.",
                evidence: "public health imperative",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Problem-solution structure: sleep deprivation problem → consequences → later start times solution → Seattle evidence. Builds persuasive case for change.",
            commonErrors: [
              "Identifying structure without connecting to argument.",
            ],
          },
        },
        {
          id: "ela8-u10-central-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Write a summary of the sleep text that captures the central idea and key supporting details.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Summarization",
                statement: "Distill main points.",
              },
              {
                kind: "skill",
                name: "Central idea focus",
                statement: "Include claim + key evidence.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Central idea: later school start times improve student health/performance.",
                evidence: "public health imperative",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Key evidence: teens need 8-10 hours but get less; sleep deprivation impairs memory/grades; Seattle saw improvements.",
                evidence: "8-10 hours... memory consolidation... Seattle",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Summary excludes minor details — focuses on claim and strongest evidence.",
                evidence: "summary",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Teenagers need 8-10 hours of sleep but most get less due to biological clock shifts. Sleep deprivation impairs memory, academic performance, and health. Schools that delayed start times — like Seattle — saw improved attendance, grades, and reduced teen car crashes. Later starts aren't a luxury but a public health imperative.'",
            commonErrors: ["Including every detail — summary needs selection."],
          },
        },
        {
          id: "ela8-u10-central-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO2,
          parts: [
            {
              label: "a",
              prompt: "What is the central idea of the urban heat text?",
              marks: 2,
            },
            { label: "b", prompt: "Name the text structure used.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Central idea + structure",
                statement: "Main point and organization.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Urban heat islands are a serious problem requiring solutions like green infrastructure.",
                evidence: "urban heat island effect",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Problem-solution — heat island problem → consequences → solutions (green roofs, cool pavement).",
                evidence: "problem-solution",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Urban heat islands are serious problem needing green infrastructure solutions. (b) Problem-solution.",
            commonErrors: [
              "Confusing problem (heat islands) with solution (green roofs) as central idea.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u10-vocab",
      title: "Technical vocabulary and author's craft",
      skill:
        "Analyze technical terms, word choice, and how they shape informational text meaning.",
      lesson: {
        sections: [
          {
            heading: "Technical vocabulary",
            body: "Informational texts use precise terms: 'circadian rhythm' (internal clock), 'memory consolidation' (process of storing memories), 'transpiration' (plants releasing moisture). These aren't jargon — they're necessary precision. 'Internal clock' is vague; 'circadian rhythm' is exact. Authors choose technical terms to convey specific scientific concepts accurately. Context clues help: 'circadian rhythm — the body's internal clock' defines through apposition.",
          },
          {
            heading: "Author's craft in informational texts",
            body: "Even factual texts have craft: **word choice** ('imperative' vs 'important' — stronger), **structure** (problem-solution builds argument), **evidence selection** (Seattle data is persuasive). 'The evidence is clear' — rhetorical phrase asserting certainty. Authors of informational texts persuade through selection and framing, not just facts. Ask: why this evidence? Why this order? What's emphasized?",
          },
        ],
        keyFormulas: [
          {
            name: "Technical = precision",
            statement: "Specific terms convey exact concepts.",
          },
          {
            name: "Context clues",
            statement: "Definitions often embedded in text.",
          },
          {
            name: "Informational = persuasive too",
            statement: "Selection and framing shape meaning.",
          },
        ],
        workedExample: {
          problem:
            "Why does the author use 'circadian rhythm' instead of 'body clock'?",
          solution:
            "'Circadian rhythm' is the precise scientific term — conveys specific biological mechanism. 'Body clock' is informal and less accurate.",
        },
      },
      questions: [
        {
          id: "ela8-u10-vocab-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What does 'circadian rhythm' mean in the text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memory process" },
              { id: "b", text: "Internal body clock" },
              { id: "c", text: "Sleep medication" },
              { id: "d", text: "School schedule" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circadian rhythm",
                statement: "Internal body clock.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text defines it: 'internal clock shifts later' — biological timing mechanism.",
                evidence: "internal clock shifts later",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Internal body clock.",
            commonErrors: ["Choosing (a) — it's biological, not medical."],
          },
        },
        {
          id: "ela8-u10-vocab-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO,
          stem: "Explain why the author uses 'memory consolidation' instead of 'memory.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Technical precision",
                statement: "Specific terms convey exact meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Memory consolidation' specifies the process — transferring short-term to long-term.",
                evidence: "memory consolidation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Memory' alone is too vague — could mean any memory function.",
                evidence: "memory",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Technical precision helps readers understand exactly what's affected by sleep deprivation.",
                evidence: "short-term to long-term storage",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Memory consolidation' specifies exact process (short-term → long-term storage); 'memory' is too vague. Technical precision clarifies what's affected.",
            commonErrors: [
              "Thinking technical terms are just jargon — they add precision.",
            ],
          },
        },
        {
          id: "ela8-u10-vocab-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Analyze how the author's word choice and evidence selection persuade readers to support later school start times.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Author's craft analysis",
                statement: "How choices shape persuasion.",
              },
              {
                kind: "skill",
                name: "Evidence evaluation",
                statement: "Why this evidence?",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Word choice: 'imperative' vs 'important' — stronger claim; 'evidence is clear' asserts certainty.",
                evidence: "public health imperative",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence selection: Seattle data is concrete and persuasive — real results, not just theory.",
                evidence: "Seattle schools moved start times",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Framing: presents as public health issue, not just education policy — broadens appeal.",
                evidence: "public health imperative",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Author uses strong word choice ('imperative' not 'important'), selects concrete evidence (Seattle results), and frames as public health issue — all persuasive choices supporting later start times.",
            commonErrors: [
              "Identifying techniques without explaining persuasive effect.",
            ],
          },
        },
        {
          id: "ela8-u10-vocab-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO2,
          parts: [
            { label: "a", prompt: "What does 'transpiration' mean?", marks: 2 },
            {
              label: "b",
              prompt: "Why is it important for urban cooling?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Vocabulary in context",
                statement: "Technical terms convey mechanism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Plants releasing moisture through leaves — cooling effect.",
                evidence: "transpiration",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Moisture release cools air — trees provide natural cooling in cities.",
                evidence: "release moisture",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Plants releasing moisture. (b) Cools air — natural cooling mechanism.",
            commonErrors: ["Not connecting term to cooling mechanism."],
          },
        },
      ],
    },
    {
      id: "ela8-u10-argument",
      title: "Argument tracing in informational texts",
      skill:
        "Identify claims, evidence, and reasoning in persuasive informational texts.",
      lesson: {
        sections: [
          {
            heading: "Claim-evidence-reasoning",
            body: "Informational texts often argue, not just inform. Trace: **claim** ('later start times are imperative'), **evidence** (Seattle data, health studies), **reasoning** (sleep deprivation → poor performance → later starts help). The author connects evidence to claim through logic: 'teens need 8-10 hours' + 'early starts prevent this' = 'later starts necessary.' Recognizing argument structure helps evaluate whether evidence supports conclusion.",
          },
          {
            heading: "Evaluating arguments",
            body: "Ask: Is the evidence sufficient? Are there counterarguments addressed? Is reasoning logical? The sleep text provides strong evidence (CDC data, Seattle results) but doesn't address potential objections (schedule disruption). Good argument evaluation recognizes both strengths (concrete evidence) and weaknesses (no counterargument). Informational texts can be persuasive without being biased — if evidence is credible and reasoning sound.",
          },
        ],
        keyFormulas: [
          {
            name: "Claim + evidence + reasoning",
            statement: "How arguments are structured.",
          },
          {
            name: "Evidence sufficiency",
            statement: "Is evidence enough to support claim?",
          },
          {
            name: "Counterargument check",
            statement: "Does text address opposing views?",
          },
        ],
        workedExample: {
          problem: "What is the argument structure in the sleep text?",
          solution:
            "Claim: later start times are imperative. Evidence: CDC data, Seattle results. Reasoning: sleep deprivation harms students; later starts provide needed sleep; therefore later starts necessary.",
        },
      },
      questions: [
        {
          id: "ela8-u10-argument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What is the author's main claim?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Later school start times are a public health imperative",
              },
              { id: "b", text: "Teens need sleep" },
              { id: "c", text: "Seattle schools improved" },
              { id: "d", text: "Sleep affects memory" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Claim",
                statement: "Main argument being made.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Final sentence states claim: 'later school start times aren't a luxury — they're a public health imperative.'",
                evidence: "public health imperative",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Later school start times are a public health imperative.",
            commonErrors: ["Choosing (a) — that's evidence, not claim."],
          },
        },
        {
          id: "ela8-u10-argument-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO,
          stem: "Identify the evidence used to support the claim and explain how it works.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence analysis",
                statement: "How evidence supports claims.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence: CDC recommendation (8-10 hours), Seattle results (34 min more sleep, better grades).",
                evidence: "Seattle schools moved start times",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "How it works: concrete data shows later starts → more sleep → better outcomes.",
                evidence: "attendance improved, grades rose",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence is credible (CDC, real school results) and directly relevant to claim.",
                evidence: "evidence is clear",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Evidence: CDC sleep recommendations + Seattle results (more sleep, better grades/attendance). Works because concrete data directly shows later starts → better outcomes.",
            commonErrors: ["Listing evidence without explaining relevance."],
          },
        },
        {
          id: "ela8-u10-argument-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Evaluate the strength of the author's argument. What evidence is provided? What's missing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument evaluation",
                statement: "Assess evidence and reasoning.",
              },
              {
                kind: "skill",
                name: "Critical thinking",
                statement: "Identify strengths and weaknesses.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Strengths: credible evidence (CDC, Seattle), clear reasoning chain, concrete results.",
                evidence: "evidence is clear",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Weaknesses: no counterarguments addressed (schedule disruption, costs), limited to one city's success.",
                evidence: "later school start times",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Overall: strong argument with good evidence but incomplete — doesn't address objections.",
                evidence: "public health imperative",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Strong argument: credible evidence (CDC data, Seattle results), clear reasoning. Weakness: doesn't address counterarguments (schedule disruption, costs) or acknowledge limitations (one city example). Overall persuasive but incomplete.",
            commonErrors: [
              "Evaluating without identifying both strengths and weaknesses.",
            ],
          },
        },
        {
          id: "ela8-u10-argument-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO,
          parts: [
            {
              label: "a",
              prompt: "What is 'claim-evidence-reasoning' structure?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify one weakness in the argument.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument structure",
                statement: "How arguments work.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Claim (main point) + evidence (support) + reasoning (connection).",
                evidence: "claim-evidence-reasoning",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "No counterarguments addressed — schedule disruption/costs ignored.",
                evidence: "missing counterargument",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Claim + evidence + reasoning. (b) No counterarguments addressed.",
            commonErrors: [
              "Thinking evidence alone makes argument — reasoning matters too.",
            ],
          },
        },
      ],
    },
  ],
};
