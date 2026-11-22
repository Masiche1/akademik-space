import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const INFO: TextExtract = {
  title: "Informational Text: The Attention Economy's Hidden Costs",
  author: "Written for Akademik Space",
  text: "In 2023, the average American spent 7 hours and 4 minutes per day on screens — more than any activity except sleep. This isn't accidental. Social media platforms generate revenue through advertising, and advertising revenue depends on engagement: time spent, clicks, shares, comments.\n\nThe algorithms optimizing for engagement don't distinguish between healthy and unhealthy attention. Emotional content outperforms neutral content. Outrage outperforms nuance. The result isn't just distracted users — it's a public sphere where complex problems get reduced to tribal conflicts, where misinformation spreads faster than corrections, and where democratic deliberation becomes nearly impossible.\n\nFormer Google designer Tristan Harris calls this 'the race to the bottom of the brain stem' — a competition to hijack the most primitive neurological responses. The attention economy doesn't just sell products. It sells a version of reality optimized for engagement rather than accuracy.",
};

const INFO2: TextExtract = {
  title: "Informational Text: Sleep Deprivation in Adolescents",
  author: "Written for Akademik Space",
  text: "The American Academy of Pediatrics recommends that middle and high schools start no earlier than 8:30 a.m. The recommendation isn't arbitrary — it's based on adolescent biology. During puberty, the body's circadian rhythm shifts later: melatonin release peaks around 11 p.m. rather than 9 p.m., making it physiologically difficult for teens to fall asleep before midnight.\n\nYet most US high schools start between 7:30 and 8:00 a.m., requiring students to wake at 6 a.m. or earlier. The consequences are measurable: sleep-deprived teens show higher rates of depression, anxiety, and suicidal ideation; impaired academic performance; increased car accidents among teen drivers; and higher dropout rates.\n\nDistricts that have changed start times report improvements: Seattle's shift to 8:45 a.m. saw attendance rise 4%, grades improve, and teen car crashes decline 8%. The research is clear — but implementation faces logistical barriers: bus schedules, sports conflicts, working parents' childcare needs.",
};

export const lesson51: Lesson = {
  id: "ela10-u5-lesson-5-1",
  code: "5-1",
  title: "Informational Text: Central Ideas and Argument Analysis",
  goal: "I CAN identify central ideas in complex informational texts and analyze how authors construct evidence-based arguments.",
  standards: ["RI.9-10.1", "RI.9-10.2", "RI.9-10.6", "RI.9-10.8"],
  vocabulary: [
    {
      term: "Central idea",
      definition: "Main point the text develops across paragraphs.",
    },
    { term: "Thesis", definition: "Author's main argument or claim." },
    {
      term: "Evidence hierarchy",
      definition: "Ranking of source credibility.",
    },
    {
      term: "Mechanism",
      definition: "How something works — causal explanation.",
    },
    {
      term: "Nuance",
      definition: "Recognition of complexity and limitations.",
    },
    { term: "Implication", definition: "What follows from the argument." },
  ],
  concepts: [
    {
      id: "ela10-u5-central",
      title: "Central idea and argument structure",
      skill:
        "Distinguish central idea from thesis and analyze argument development.",
      lesson: {
        sections: [
          {
            heading: "Central idea vs thesis",
            body: "Central idea = what text is about; thesis = what author argues about it. Attention economy text: central idea is 'how social media monetizes attention'; thesis is 'this business model degrades democratic discourse.' Sleep text: central idea is 'adolescent sleep deprivation'; thesis is 'later school start times are necessary because adolescent biology requires them.' Central idea is descriptive; thesis is argumentative.",
          },
          {
            heading: "Argument development",
            body: "Strong informational texts develop arguments progressively: attention economy text moves from phenomenon (7 hrs screen time) → mechanism (engagement optimization) → consequence (democratic erosion) → implication (need for understanding). Sleep text moves from recommendation (8:30 a.m.) → biological basis (circadian shift) → consequences (depression, accidents) → evidence (Seattle data) → barriers (logistics). Each paragraph adds a layer.",
          },
        ],
        keyFormulas: [
          { name: "Central idea = topic", statement: "What text covers." },
          { name: "Thesis = argument", statement: "What author claims." },
          {
            name: "Progressive development",
            statement: "Each paragraph builds case.",
          },
        ],
        workedExample: {
          problem: "What's the thesis of the sleep text?",
          solution:
            "Later school start times are necessary because adolescent biology (delayed circadian rhythm) makes early starts harmful — supported by health data and district outcomes.",
        },
      },
      questions: [
        {
          id: "ela10-u5-central-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What is the central idea of the attention economy text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "People spend too much time on screens" },
              {
                id: "b",
                text: "Social media's business model harms democratic discourse",
              },
              { id: "c", text: "Algorithms are complex" },
              { id: "d", text: "Technology is bad" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Central idea",
                statement: "Main point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text argues engagement model degrades democracy — that's central thesis/idea.",
                evidence: "democratic deliberation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Social media's business model harms democratic discourse.",
            commonErrors: ["Choosing (a) — evidence, not central idea."],
          },
        },
        {
          id: "ela10-u5-central-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO2,
          stem: "Explain how the sleep text develops its argument across paragraphs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument development",
                statement: "Progressive building.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P1: recommendation (8:30 a.m.) + biological basis (circadian shift).",
                evidence: "circadian",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "P2: consequences — depression, anxiety, car accidents, dropout rates.",
                evidence: "consequences",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "P3: evidence (Seattle data) + barriers (logistics) — acknowledges complexity.",
                evidence: "Seattle... barriers",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "P1 establishes recommendation + biological basis; P2 shows health/academic consequences; P3 provides outcome evidence (Seattle) while acknowledging implementation barriers. Progressive argument building.",
            commonErrors: [
              "Describing paragraphs without showing argument progression.",
            ],
          },
        },
        {
          id: "ela10-u5-central-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Analyze how the attention economy text uses mechanism explanation to support its thesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mechanism analysis",
                statement: "How argument works.",
              },
              {
                kind: "skill",
                name: "Causal explanation",
                statement: "Why it happens.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Mechanism: engagement optimization → emotional content outperforms → outrage spreads → deliberation impossible.",
                evidence: "mechanism",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: 7 hrs screen time, business model, algorithmic amplification.",
                evidence: "evidence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Expert authority: Tristan Harris 'race to the bottom of the brain stem' — expert framing.",
                evidence: "Tristan Harris",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Author explains mechanism: engagement revenue → algorithmic optimization → emotional content wins → tribal conflicts → democratic erosion. Uses statistics, business model explanation, and expert authority (Tristan Harris) to build case that attention economy harms democracy.",
            commonErrors: ["Listing evidence without explaining mechanism."],
          },
        },
        {
          id: "ela10-u5-central-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO2,
          parts: [
            {
              label: "a",
              prompt: "What's the difference between central idea and thesis?",
              marks: 2,
            },
            { label: "b", prompt: "Apply to sleep text.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Central idea vs thesis",
                statement: "Topic vs argument.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Central idea = what text covers; thesis = what author argues about it.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Central idea: adolescent sleep deprivation. Thesis: later start times necessary due to biology.",
                evidence: "apply",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Central idea = topic; thesis = argument. (b) Central idea: adolescent sleep deprivation. Thesis: later start times necessary due to biology.",
            commonErrors: ["Confusing topic with argument."],
          },
        },
      ],
    },
    {
      id: "ela10-u5-evidence",
      title: "Evidence Quality and Source Evaluation",
      skill:
        "Evaluate evidence quality, source credibility, and logical reasoning in informational texts.",
      lesson: {
        sections: [
          {
            heading: "Evidence hierarchy",
            body: "Peer-reviewed research > government data > reputable journalism > expert testimony > anecdote. Sleep text cites AAP recommendation (authoritative), Seattle district data (specific outcomes), biological mechanism (circadian research). Attention economy text cites statistics (7 hrs) and expert quote (Tristan Harris) but lacks peer-reviewed sources — weaker evidence base.",
          },
          {
            heading: "Evaluating reasoning",
            body: "Ask: Does evidence support claims? Are there logical fallacies? Does text acknowledge limitations? Sleep text acknowledges barriers (logistics) — builds credibility. Attention economy text omits industry perspectives — potential selection bias. Strong texts present evidence that withstands scrutiny; weak texts cherry-pick or overstate.",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence hierarchy",
            statement:
              "Peer-reviewed > government > journalism > expert > anecdote.",
          },
          {
            name: "Source questions",
            statement: "Who? Expertise? Motivation?",
          },
          {
            name: "Limitation acknowledgment",
            statement: "Builds credibility.",
          },
        ],
        workedExample: {
          problem:
            "Evaluate evidence quality in sleep text vs attention economy text.",
          solution:
            "Sleep text: AAP recommendation (authoritative), Seattle data (specific), biological mechanism — strong. Attention economy: statistics + expert quote but no peer-reviewed sources — weaker.",
        },
      },
      questions: [
        {
          id: "ela10-u5-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO2,
          stem: "Which is the most credible evidence type?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peer-reviewed research" },
              { id: "b", text: "Social media post" },
              { id: "c", text: "Anecdote" },
              { id: "d", text: "Expert opinion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence hierarchy",
                statement: "Credibility ranking.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Peer-reviewed research is highest credibility — systematic, vetted.",
                evidence: "peer-reviewed",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Peer-reviewed research.",
            commonErrors: ["Thinking all sources equal."],
          },
        },
        {
          id: "ela10-u5-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO,
          stem: "Identify one strength and one weakness of the attention economy text's evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence evaluation",
                statement: "Strengths + weaknesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: specific statistics (7 hrs) + expert quote (Tristan Harris) — concrete support.",
                evidence: "strength",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Weakness: no peer-reviewed sources, selection bias (omits industry perspectives).",
                evidence: "weakness",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Overall: persuasive but would benefit from academic sources and counterarguments.",
                evidence: "overall",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Strength: specific statistics + expert authority. Weakness: no peer-reviewed sources, selection bias (omits industry views). Overall persuasive but could be stronger.",
            commonErrors: ["Only identifying strengths or weaknesses."],
          },
        },
        {
          id: "ela10-u5-evidence-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO2,
          stem: "Analyze how the sleep text acknowledges limitations and why that strengthens its argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Limitation acknowledgment",
                statement: "How it builds credibility.",
              },
              {
                kind: "skill",
                name: "Nuanced argument",
                statement: "Complexity recognition.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Acknowledges barriers: 'bus schedules, sports conflicts, working parents' childcare needs' — doesn't hide implementation challenges.",
                evidence: "barriers",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Shows research is clear but implementation complex — distinguishes scientific consensus from policy difficulty.",
                evidence: "distinction",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: builds trust — author isn't overselling, acknowledges real-world complexity.",
                evidence: "trust",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Sleep text acknowledges implementation barriers (bus schedules, sports, childcare) — doesn't hide challenges. This strengthens argument by distinguishing scientific consensus (research clear) from policy difficulty (logistics complex). Honest about limitations builds credibility.",
            commonErrors: [
              "Thinking acknowledging limitations weakens argument.",
            ],
          },
        },
        {
          id: "ela10-u5-evidence-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO,
          parts: [
            {
              label: "a",
              prompt: "What is 'selection bias' in evidence?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example from the text.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Selection bias",
                statement: "Cherry-picking sources.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Citing only sources supporting your argument while omitting opposing views.",
                evidence: "selection bias",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Attention economy text cites Tristan Harris (aligned view) but not industry perspectives or counterarguments.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Citing only supporting sources, omitting opposing views. (b) Tristan Harris cited but no industry perspectives.",
            commonErrors: ["Not recognizing bias."],
          },
        },
      ],
    },
    {
      id: "ela10-u5-structure",
      title: "Text Structure and Rhetorical Devices",
      skill:
        "Analyze how informational text structure and rhetorical devices support arguments.",
      lesson: {
        sections: [
          {
            heading: "Structure in informational texts",
            body: "Attention economy text uses **problem-mechanism-consequence-implication** structure. Sleep text uses **recommendation-basis-consequences-evidence-barriers** structure. Both build arguments progressively — not just stating opinions but constructing cases. Structure reveals argumentative strategy: how author wants you to think through the issue.",
          },
          {
            heading: "Rhetorical devices",
            body: "Authors use: **metaphor** ('race to the bottom of the brain stem,' 'wrong time zone'), **statistics** (7 hrs, 4% attendance), **authority** (AAP, Tristan Harris), **urgency** ('demands immediate action'), **concession** (acknowledging barriers). These aren't decoration — they persuade. 'Race to the bottom' makes abstract competition visceral; statistics make claims concrete.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure = strategy",
            statement: "Organization reveals argument.",
          },
          {
            name: "Devices persuade",
            statement: "Metaphor, stats, authority.",
          },
          {
            name: "Concession builds trust",
            statement: "Acknowledging limits strengthens.",
          },
        ],
        workedExample: {
          problem:
            "How does 'race to the bottom of the brain stem' function rhetorically?",
          solution:
            "Metaphor making abstract competition visceral — 'bottom of brain stem' suggests primitive, dangerous level. Expert attribution (Tristan Harris) adds authority.",
        },
      },
      questions: [
        {
          id: "ela10-u5-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What structure does the attention economy text use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Problem-mechanism-consequence-implication" },
              { id: "b", text: "Chronological" },
              { id: "c", text: "Compare-contrast" },
              { id: "d", text: "Description" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Text structure",
                statement: "Organization pattern.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text moves problem → mechanism → consequence → implication.",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Problem-mechanism-consequence-implication.",
            commonErrors: ["Missing the argument structure."],
          },
        },
        {
          id: "ela10-u5-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO2,
          stem: "Identify two rhetorical devices in the sleep text and explain their function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical analysis",
                statement: "How devices persuade.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Authority: AAP recommendation — credible medical organization.",
                evidence: "AAP",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Statistics: 'attendance up 4%, grades improve, crashes down 8%' — concrete outcomes.",
                evidence: "statistics",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Concession: acknowledges barriers — builds credibility through honesty.",
                evidence: "concession",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Authority (AAP recommendation), statistics (Seattle outcomes), concession (acknowledges barriers). Each serves persuasive function.",
            commonErrors: ["Identifying without explaining function."],
          },
        },
        {
          id: "ela10-u5-structure-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Analyze how the attention economy text's structure shapes its argument about democratic erosion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure-argument connection",
                statement: "How organization supports claim.",
              },
              {
                kind: "skill",
                name: "Progressive argument",
                statement: "Building the case.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Problem: attention economy exists — establishes phenomenon.",
                evidence: "problem",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Mechanism: engagement optimization → emotional content → tribal conflicts — explains how.",
                evidence: "mechanism",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Consequence + implication: democratic deliberation impossible → need understanding to resist.",
                evidence: "consequence",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Structure builds argument progressively: problem (attention economy) → mechanism (engagement optimization → emotional content) → consequence (tribal conflicts, misinformation) → implication (democracy threatened, need understanding). Each layer adds to case that business model harms democracy.",
            commonErrors: [
              "Describing structure without connecting to argument.",
            ],
          },
        },
        {
          id: "ela10-u5-structure-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO,
          parts: [
            { label: "a", prompt: "What is 'appeal to authority'?", marks: 2 },
            { label: "b", prompt: "Give an example from the text.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Appeal to authority",
                statement: "Expert endorsement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Using expert/authority figure to support argument.",
                evidence: "authority",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Tristan Harris quote about 'race to the bottom of the brain stem.'",
                evidence: "Tristan Harris",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Using expert/authority to support argument. (b) Tristan Harris quote.",
            commonErrors: ["Confusing with ad hominem."],
          },
        },
      ],
    },
    {
      id: "ela10-u5-synthesis",
      title: "Synthesis Across Informational Texts",
      skill:
        "Compare and synthesize information from multiple texts on related topics.",
      lesson: {
        sections: [
          {
            heading: "Cross-text comparison",
            body: "Attention economy and sleep texts both explore **systems affecting human wellbeing** but differently: attention economy is about **behavioral design** (how platforms shape choices); sleep is about **institutional policy** (how school schedules affect health). Both use similar argument structure (problem → mechanism → evidence → implication) but different evidence types (expert quotes vs medical data).",
          },
          {
            heading: "Synthesis for understanding",
            body: "Synthesis finds connections: both texts show how **invisible systems** (algorithms, circadian biology) have **visible consequences** (democratic erosion, health impacts). Both emphasize **mechanism** — not just 'this is bad' but 'here's how it works.' Both acknowledge **complexity** — attention economy has benefits; sleep policy faces barriers. Synthesis reveals patterns across domains.",
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
            "Both show invisible systems (algorithms, circadian biology) with visible consequences (democracy erosion, health impacts) — mechanism-focused argumentation.",
        },
      },
      questions: [
        {
          id: "ela10-u5-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What do both informational texts explore?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Systems affecting human wellbeing" },
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
                name: "Cross-text comparison",
                statement: "Shared themes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both explore systems affecting wellbeing — behavioral design vs institutional policy.",
                evidence: "systems",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Systems affecting human wellbeing.",
            commonErrors: ["Thinking different topics = no comparison."],
          },
        },
        {
          id: "ela10-u5-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO2,
          stem: "What connection exists between attention economy and sleep texts?",
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
                  "Both explore invisible systems with visible consequences — algorithms/circadian biology.",
                evidence: "systems",
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
                  "Both acknowledge complexity — benefits/barriers, not one-sided.",
                evidence: "complexity",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Both show invisible systems (algorithms, circadian biology) with visible consequences (democracy erosion, health impacts) — mechanism-focused, complexity-acknowledging argumentation.",
            commonErrors: ["Comparing topics instead of patterns."],
          },
        },
        {
          id: "ela10-u5-synthesis-q3",
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
                  "Sleep text: acknowledges barriers (logistics) — honest about implementation complexity.",
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
              "Example: 'Both texts use evidence-based argumentation but handle uncertainty differently. Attention economy text provides strong evidence (statistics, expert quotes) but exhibits selection bias — omits industry perspectives. Sleep text explicitly acknowledges barriers (logistics challenges) and distinguishes scientific consensus from policy difficulty. The difference: one text is confident, the other is honest about limits — both valid approaches but different transparency.'",
            commonErrors: ["Comparing content instead of evidence handling."],
          },
        },
        {
          id: "ela10-u5-synthesis-q4",
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
    {
      id: "ela10-u5-eval",
      title: "Critical Evaluation of Informational Texts",
      skill:
        "Critically evaluate informational texts for evidence quality, bias, logic, and nuance.",
      lesson: {
        sections: [
          {
            heading: "Evaluation criteria",
            body: "Assess on: **evidence quality** (sourced? quantified? peer-reviewed?), **bias** (what's emphasized/omitted?), **logic** (does evidence support claims? fallacies?), **nuance** (acknowledges complexity?). Attention economy text scores well on evidence specificity but has selection bias. Sleep text scores well on nuance (acknowledges barriers) and evidence hierarchy (AAP, Seattle data).",
          },
          {
            heading: "Identifying bias",
            body: "Bias types: **selection** (only supporting sources), **framing** (presenting one way), **omission** (leaving out counterevidence), **authority** (relying on credentials without evidence). Ask: whose perspective is missing? Attention economy omits industry views; sleep text includes barriers but not opposition to later start. Balanced texts acknowledge multiple perspectives.",
          },
        ],
        keyFormulas: [
          {
            name: "Four criteria",
            statement: "Evidence, bias, logic, nuance.",
          },
          {
            name: "Bias types",
            statement: "Selection, framing, omission, authority.",
          },
          { name: "Who's missing?", statement: "Check absent perspectives." },
        ],
        workedExample: {
          problem: "What bias might the attention economy text have?",
          solution:
            "Selection bias — cites Tristan Harris (aligned view) but not industry perspectives or counterarguments about benefits.",
        },
      },
      questions: [
        {
          id: "ela10-u5-eval-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What's the main strength of the attention economy text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simple language" },
              { id: "b", text: "No bias" },
              { id: "c", text: "Strong evidence and mechanism explanation" },
              { id: "d", text: "Short length" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Text evaluation",
                statement: "Assess strengths.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text provides statistics, expert quote, mechanism explanation — strong evidence base.",
                evidence: "evidence",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Strong evidence and mechanism explanation.",
            commonErrors: ["Thinking no bias = strong."],
          },
        },
        {
          id: "ela10-u5-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO,
          stem: "Identify one potential bias in the attention economy text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bias identification",
                statement: "Recognize perspective.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Selection bias: cites Tristan Harris (aligned view) but not industry perspectives.",
                evidence: "Tristan Harris",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Authority bias: relies on expert quote without presenting counterarguments.",
                evidence: "authority",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Omission: doesn't mention benefits of social media or counterarguments.",
                evidence: "omission",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Selection/authority bias — cites Tristan Harris (aligned view) without industry perspectives or counterarguments.",
            commonErrors: ["Thinking all texts are biased."],
          },
        },
        {
          id: "ela10-u5-eval-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO2,
          stem: "Evaluate the sleep text's handling of uncertainty and barriers. Is it balanced?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Nuance evaluation",
                statement: "How text handles complexity.",
              },
              {
                kind: "skill",
                name: "Balance assessment",
                statement: "Multiple perspectives.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Strength: acknowledges barriers (logistics) — honest about implementation complexity.",
                evidence: "barriers",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Strength: distinguishes scientific consensus from policy difficulty — nuanced.",
                evidence: "nuanced",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Weakness: doesn't present opposition to later start (budget concerns, community resistance).",
                evidence: "weakness",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Sleep text handles uncertainty well — acknowledges barriers, distinguishes research consensus from policy difficulty. But presents one side (pro-later-start) without opposition perspectives (budget, community concerns). Balanced on implementation, not on desirability.",
            commonErrors: ["Thinking acknowledging barriers = fully balanced."],
          },
        },
        {
          id: "ela10-u5-eval-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO,
          parts: [
            { label: "a", prompt: "What is 'omission bias'?", marks: 2 },
            { label: "b", prompt: "Give an example from the text.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Omission bias",
                statement: "Leaving out counterevidence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Leaving out counterevidence or opposing perspectives that would complicate argument.",
                evidence: "omission",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Attention economy text doesn't mention benefits of social media or industry counterarguments.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Leaving out counterevidence/opposing views. (b) Doesn't mention social media benefits or industry counterarguments.",
            commonErrors: [
              "Confusing with selection bias — omission is about what's left out.",
            ],
          },
        },
      ],
    },
  ],
};
