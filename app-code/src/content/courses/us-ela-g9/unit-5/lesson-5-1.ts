import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

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

export const lesson51: Lesson = {
  id: "ela9-u5-lesson-5-1",
  code: "5-1",
  title: "Informational Text: Central Ideas and Argument",
  goal: "I CAN identify central ideas in complex informational texts and analyze how authors construct arguments.",
  standards: ["RI.9-10.1", "RI.9-10.2", "RI.9-10.6"],
  vocabulary: [
    {
      term: "Central idea",
      definition: "Main point the text develops across paragraphs.",
    },
    {
      term: "Thesis",
      definition: "Author's main argument or claim in informational text.",
    },
    {
      term: "Evidence",
      definition: "Facts, data, examples supporting the thesis.",
    },
    {
      term: "Reasoning",
      definition: "Logical connections between evidence and claims.",
    },
    {
      term: "Counterargument",
      definition: "Acknowledgment of opposing views.",
    },
    {
      term: "Nuance",
      definition: "Recognition of complexity and limitations.",
    },
  ],
  concepts: [
    {
      id: "ela9-u5-central",
      title: "Central idea and thesis analysis",
      skill:
        "Distinguish central idea from supporting details and analyze thesis development.",
      lesson: {
        sections: [
          {
            heading: "Central idea vs thesis",
            body: "**Central idea** = what the text is about; **thesis** = what the author argues about it. The attention economy text's central idea is 'how social media monetizes attention'; its thesis is 'this business model degrades democratic discourse.' Central idea is descriptive; thesis is argumentative. The microplastics text's central idea is 'microplastics are everywhere'; its thesis is 'we should apply precautionary principle despite uncertainty.'",
          },
          {
            heading: "Thesis development",
            body: "Strong informational texts develop theses progressively: **claim** (attention economy harms democracy), **evidence** (7 hrs screen time, engagement model, algorithmic amplification), **mechanism** (emotional content outperforms nuance → tribal conflicts), **implication** (democratic deliberation impossible), **call to action** (understand mechanism to resist). Each paragraph adds a layer — not just stating opinion but building a case.",
          },
        ],
        keyFormulas: [
          { name: "Central idea = topic", statement: "What text is about." },
          {
            name: "Thesis = argument",
            statement: "What author claims about topic.",
          },
          {
            name: "Progressive development",
            statement: "Each paragraph builds the case.",
          },
        ],
        workedExample: {
          problem: "What is the thesis of the attention economy text?",
          solution:
            "The engagement-based business model of social media degrades democratic discourse by optimizing for attention over accuracy.",
        },
      },
      questions: [
        {
          id: "ela9-u5-central-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What is the central idea of the attention economy text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "People spend too much time on screens" },
              { id: "b", text: "Algorithms are complex" },
              { id: "c", text: "Technology is bad" },
              {
                id: "d",
                text: "Social media's business model harms democratic discourse",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Central idea",
                statement: "Main point of text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text argues engagement model degrades democracy — that's the central thesis/idea.",
                evidence: "democratic deliberation becomes nearly impossible",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Social media's business model harms democratic discourse.",
            commonErrors: ["Choosing (a) — that's evidence, not central idea."],
          },
        },
        {
          id: "ela9-u5-central-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO,
          stem: "Explain how the author develops the thesis across paragraphs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis development",
                statement: "Progressive argument building.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P1: establishes phenomenon (7 hrs screen time) + business model.",
                evidence: "7 hours and 4 minutes",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "P2: explains mechanism (engagement → emotional content → outrage).",
                evidence: "algorithms are optimized",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "P3-4: consequences (tribal conflicts, misinformation) + call to action (understand to resist).",
                evidence: "democratic deliberation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "P1 establishes phenomenon + business model; P2 explains mechanism (engagement optimization); P3-4 show consequences and call to action. Progressive case-building.",
            commonErrors: [
              "Describing paragraphs without showing argument progression.",
            ],
          },
        },
        {
          id: "ela9-u5-central-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Analyze how the author uses evidence and reasoning to support the thesis that social media's business model harms democracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument analysis",
                statement: "How evidence supports claims.",
              },
              {
                kind: "skill",
                name: "Mechanism explanation",
                statement: "Why it works.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Evidence: 7 hrs screen time, engagement revenue model, algorithmic optimization.",
                evidence: "7 hours and 4 minutes",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Mechanism: emotional content outperforms nuance → tribal conflicts → deliberation impossible.",
                evidence: "Emotional content outperforms neutral",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Authority: Tristan Harris 'race to the bottom of the brain stem' — expert framing.",
                evidence: "Tristan Harris",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Author uses statistics (7 hrs), business model explanation (engagement revenue), mechanism (emotional > nuance → tribal conflict), and expert authority (Tristan Harris) to build case that attention economy harms democracy.",
            commonErrors: ["Listing evidence without connecting to thesis."],
          },
        },
        {
          id: "ela9-u5-central-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO2,
          parts: [
            {
              label: "a",
              prompt:
                "What is the central idea vs thesis in the microplastics text?",
              marks: 2,
            },
            { label: "b", prompt: "How do they differ?", marks: 2 },
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
                  "Central idea: microplastics are everywhere; thesis: apply precautionary principle despite uncertainty.",
                evidence: "microplastics",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Central idea is descriptive (what text covers); thesis is argumentative (what author claims).",
                evidence: "central idea vs thesis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Central idea: microplastics are everywhere. Thesis: apply precautionary principle despite uncertainty. (b) Central idea descriptive; thesis argumentative.",
            commonErrors: ["Confusing topic with argument."],
          },
        },
      ],
    },
    {
      id: "ela9-u5-structure",
      title: "Text structure and author's craft",
      skill:
        "Analyze how informational text structure and rhetorical devices support arguments.",
      lesson: {
        sections: [
          {
            heading: "Structure in informational texts",
            body: "The attention economy text uses **problem-solution** structure: problem (attention economy harms democracy) → mechanism (how it works) → evidence (statistics, expert quote) → implication (democracy threatened) → call to action (understand to resist). The microplastics text uses **problem-uncertainty-debate** structure: problem (microplastics everywhere) → evidence (health data) → uncertainty (long-term effects unknown) → debate (precautionary vs industry). Structure reveals argumentative strategy.",
          },
          {
            heading: "Rhetorical devices",
            body: "Authors use: **metaphor** ('race to the bottom of the brain stem'), **rhetorical questions** ('The question isn't... it's...'), **appeal to authority** (Tristan Harris), **concession** ('Correlation, I know' — wait that's Jamal; here 'The health implications remain uncertain'), **urgency** ('first step toward resisting'). These devices aren't decoration — they persuade. 'Race to the bottom' makes abstract competition visceral; 'first step' implies action needed now.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure = strategy",
            statement: "How text organized reveals argumentative approach.",
          },
          {
            name: "Devices persuade",
            statement: "Metaphor, questions, authority, urgency.",
          },
          {
            name: "Concession builds trust",
            statement: "Acknowledging limits strengthens credibility.",
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
          id: "ela9-u5-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What structure does the attention economy text use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compare-contrast" },
              { id: "b", text: "Description" },
              { id: "c", text: "Chronological" },
              { id: "d", text: "Problem-solution" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Problem-solution",
                statement: "Issue then resolution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text presents problem (attention economy harms democracy) then implies solution (understand to resist).",
                evidence: "problem-solution",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Problem-solution.",
            commonErrors: ["Missing the implied solution at end."],
          },
        },
        {
          id: "ela9-u5-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO,
          stem: "Identify two rhetorical devices and explain their persuasive function.",
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
                  "Metaphor: 'race to the bottom of the brain stem' — makes abstract competition visceral.",
                evidence: "race to the bottom",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Appeal to authority: Tristan Harris quote — adds credibility to argument.",
                evidence: "Tristan Harris",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Urgency: 'first step toward resisting' — implies immediate action needed.",
                evidence: "first step",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Metaphor ('race to bottom of brain stem' — visceral competition), authority (Tristan Harris — credibility), urgency ('first step' — immediate action).",
            commonErrors: [
              "Identifying devices without explaining persuasive function.",
            ],
          },
        },
        {
          id: "ela9-u5-structure-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO2,
          stem: "Analyze how the microplastics text's structure (problem-uncertainty-debate) shapes its argument about precautionary principle.",
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
                name: "Debate structure",
                statement: "Presenting multiple sides.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Problem: microplastics everywhere — establishes urgency.",
                evidence: "every major ocean",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Uncertainty: 'health implications remain uncertain' — acknowledges limits, builds trust.",
                evidence: "remain uncertain",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Debate: precautionary principle vs industry — presents both sides, doesn't force conclusion.",
                evidence: "precautionary principle",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Structure presents problem (microplastics everywhere) → uncertainty (health effects unknown) → debate (precautionary vs industry). Acknowledges uncertainty builds credibility; presenting both sides shows balanced analysis rather than one-sided argument.",
            commonErrors: [
              "Describing structure without connecting to argumentative strategy.",
            ],
          },
        },
        {
          id: "ela9-u5-structure-q4",
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
                evidence: "appeal to authority",
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
            commonErrors: [
              "Confusing with ad hominem — authority adds credibility, not attack.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u5-eval",
      title: "Evaluating informational texts",
      skill:
        "Critically evaluate informational texts for evidence quality, bias, and logical soundness.",
      lesson: {
        sections: [
          {
            heading: "Evaluation criteria",
            body: "Assess informational texts on: **evidence quality** (sourced? quantified? peer-reviewed?), **bias** (what's emphasized/omitted? who's the author?), **logic** (does evidence support claims? any fallacies?), **nuance** (does it acknowledge complexity/limits?). The attention economy text scores well on evidence (statistics, expert quote) and nuance ('correlation' acknowledgment in microplastics text). The microplastics text scores well on nuance ('health implications remain uncertain') but presents debate without resolution.",
          },
          {
            heading: "Identifying bias",
            body: "Bias isn't always obvious: **selection bias** (only citing supporting studies), **framing bias** (presenting issue one way), **omission bias** (leaving out counterevidence), **authority bias** (relying on credentials without evidence). The attention economy text has potential selection bias — cites Tristan Harris (who shares author's view) but not industry perspectives. The microplastics text is more balanced — presents both precautionary and industry arguments. Ask: whose perspective is missing?",
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
          {
            name: "Who's missing?",
            statement: "Check whose perspective is absent.",
          },
        ],
        workedExample: {
          problem: "What bias might the attention economy text have?",
          solution:
            "Selection bias — cites Tristan Harris (aligned with author's view) but not social media industry perspectives or counterarguments about benefits.",
        },
      },
      questions: [
        {
          id: "ela9-u5-eval-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What is the main strength of the attention economy text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Short length" },
              { id: "b", text: "Simple language" },
              { id: "c", text: "No bias" },
              { id: "d", text: "Strong evidence and mechanism explanation" },
            ],
            correctChoiceId: "d",
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
                  "Text provides statistics, expert quote, and mechanism explanation — strong evidence base.",
                evidence: "7 hours... Tristan Harris",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Strong evidence and mechanism explanation.",
            commonErrors: [
              "Thinking no bias = strong — it has selection bias.",
            ],
          },
        },
        {
          id: "ela9-u5-eval-q2",
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
                evidence: "race to the bottom",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Omission: doesn't mention benefits of social media or counterarguments to thesis.",
                evidence: "omission",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Selection/authority bias — cites Tristan Harris (aligned view) without industry perspectives or counterarguments.",
            commonErrors: [
              "Thinking all texts are biased — need specific identification.",
            ],
          },
        },
        {
          id: "ela9-u5-eval-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO2,
          stem: "Evaluate the microplastics text's handling of uncertainty and debate. Is it balanced?",
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
                  "Strength: acknowledges 'health implications remain uncertain' — honest about limits.",
                evidence: "remain uncertain",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Strength: presents both precautionary and industry arguments — balanced.",
                evidence: "precautionary principle... industry argues",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Weakness: doesn't resolve debate — leaves reader without conclusion (may be intentional).",
                evidence: "debate",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Text handles uncertainty well — acknowledges limits, presents both sides (precautionary vs industry). Balanced but unresolved — may be intentional to show debate, or could frustrate readers seeking conclusion.",
            commonErrors: [
              "Thinking unresolved = bad — sometimes appropriate for complex issues.",
            ],
          },
        },
        {
          id: "ela9-u5-eval-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO,
          parts: [
            { label: "a", prompt: "What is 'selection bias'?", marks: 2 },
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
                  "Cites Tristan Harris (aligned) but not industry perspectives or benefits of social media.",
                evidence: "Tristan Harris",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Citing only supporting sources, omitting opposing views. (b) Tristan Harris cited but no industry perspectives.",
            commonErrors: [
              "Confusing with random sampling bias — this is about source selection.",
            ],
          },
        },
      ],
    },
  ],
};
