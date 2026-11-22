import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const EVAL: TextExtract = {
  title: "Evaluating a Presentation",
  author: "Written for Akademik Space",
  text: "A classmate presented on 'The Impact of Video Games on Teen Behavior.' She opened with a statistic: '78% of teens play video games.' Then she showed a graph of violent game sales rising alongside youth violence rates. 'As you can see,' she said, 'the correlation is clear — more violent games means more violent teens.'\n\nShe didn't mention that youth violence has actually declined over the past 20 years despite rising game sales. She didn't cite the source of the 78% statistic. She didn't distinguish between correlation and causation. When asked about these issues, she said 'the data speaks for itself.'",
};

const MEDIA2: TextExtract = {
  title: "Media Literacy in Presentations",
  author: "Written for Akademik Space",
  text: "Evaluating presentations requires critical thinking about claims, evidence, and reasoning. Ask: Are statistics sourced? Is correlation presented as causation? Are counterarguments addressed? Is the visual data misleading? Strong evaluators don't just assess delivery — they assess argument quality, evidence credibility, and logical soundness.",
};

export const lesson43: Lesson = {
  id: "ela9-u4-lesson-4-3",
  code: "4-3",
  title: "Evaluating Presentations and Media Messages",
  goal: "I CAN critically evaluate presentations and media messages for argument quality, evidence credibility, and logical soundness.",
  standards: ["SL.9-10.3", "SL.9-10.4", "RI.9-10.8", "RI.9-10.9"],
  vocabulary: [
    {
      term: "Media literacy",
      definition: "Ability to analyze, evaluate, and create media messages.",
    },
    {
      term: "Correlation vs causation",
      definition: "Relationship between variables vs one causing the other.",
    },
    {
      term: "Cherry-picking",
      definition: "Selecting only data that supports your argument.",
    },
    {
      term: "Straw man",
      definition:
        "Misrepresenting opponent's argument to make it easier to attack.",
    },
    {
      term: "Appeal to emotion",
      definition: "Persuasion through feelings rather than evidence.",
    },
    {
      term: "Source credibility",
      definition: "Trustworthiness of information origin.",
    },
  ],
  concepts: [
    {
      id: "ela9-u4-eval",
      title: "Evaluating argument quality",
      skill:
        "Assess presentations for evidence quality, logical soundness, and fairness.",
      lesson: {
        sections: [
          {
            heading: "Red flags in presentations",
            body: "The video game presentation has multiple red flags: **unsourced statistic** ('78%' — from where?), **correlation as causation** ('more games = more violence' — ignores declining youth violence), **cherry-picking** (shows rising game sales but omits declining violence), **'data speaks for itself'** (dismisses need for explanation). When asked about these issues, she deflected rather than addressed — classic sign of weak argument. Strong evaluators catch these immediately.",
          },
          {
            heading: "Fair evaluation criteria",
            body: "Evaluate: **evidence quality** (sourced? quantified? credible?), **logic** (does evidence support claim? correlation ≠ causation?), **fairness** (counterarguments addressed? opposing data acknowledged?), **transparency** (limitations admitted? methodology explained?). The presentation fails all four — unsourced stats, logical leap, no counterarguments, no transparency about limitations. Delivery might be polished, but argument is flawed.",
          },
        ],
        keyFormulas: [
          {
            name: "Red flags",
            statement:
              "Unsourced stats, correlation=causation, cherry-picking, deflection.",
          },
          {
            name: "Four criteria",
            statement: "Evidence quality, logic, fairness, transparency.",
          },
          {
            name: "Polished ≠ sound",
            statement: "Good delivery doesn't fix bad argument.",
          },
        ],
        workedExample: {
          problem: "Why is 'the data speaks for itself' a red flag?",
          solution:
            "It dismisses need to explain reasoning — suggests presenter can't or won't defend their interpretation. Data requires interpretation; 'speaks for itself' is evasion.",
        },
      },
      questions: [
        {
          id: "ela9-u4-eval-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EVAL,
          stem: "What is the main logical flaw in the video game presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Correlation presented as causation" },
              { id: "b", text: "Bad slide design" },
              { id: "c", text: "Too much data" },
              { id: "d", text: "Poor delivery" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Correlation vs causation",
                statement: "Relationship ≠ cause.",
              },
            ],
            steps: [
              {
                reasoning:
                  "She claims 'more games = more violence' but youth violence declined — correlation misrepresented as causation.",
                evidence: "correlation is clear",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Correlation presented as causation.",
            commonErrors: [
              "Missing that declining violence contradicts her claim.",
            ],
          },
        },
        {
          id: "ela9-u4-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EVAL,
          stem: "Identify three red flags in the presentation and explain why each matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Red flag identification",
                statement: "Recognize argument problems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unsourced statistic: '78%' with no citation — can't verify.",
                evidence: "78% of teens",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Cherry-picking: shows rising game sales but omits declining youth violence.",
                evidence: "violence rates",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Deflection: 'data speaks for itself' when challenged — evades scrutiny.",
                evidence: "data speaks for itself",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "1. Unsourced '78%' statistic. 2. Cherry-picking (omits declining violence). 3. Deflection ('data speaks for itself') when questioned.",
            commonErrors: [
              "Identifying only one red flag — need systematic check.",
            ],
          },
        },
        {
          id: "ela9-u4-eval-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EVAL,
          stem: "Write an evaluation of the presentation using the four criteria: evidence quality, logic, fairness, transparency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Systematic evaluation",
                statement: "Apply criteria consistently.",
              },
              {
                kind: "skill",
                name: "Evidence-based critique",
                statement: "Support with specific examples.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Evidence quality: unsourced '78%' statistic, no methodology — weak.",
                evidence: "evidence quality",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Logic: correlation presented as causation; ignores declining youth violence — flawed.",
                evidence: "logic",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fairness: no counterarguments addressed; opposing data omitted — one-sided.",
                evidence: "fairness",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Transparency: 'data speaks for itself' dismisses need for explanation — evasive.",
                evidence: "transparency",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Evaluation: Evidence quality weak (unsourced stats), logic flawed (correlation=causation), fairness poor (no counterarguments, cherry-picked data), transparency absent ('data speaks for itself'). Polished delivery can't compensate for fundamental argument problems.",
            commonErrors: [
              "Evaluating only delivery — need to assess argument.",
            ],
          },
        },
        {
          id: "ela9-u4-eval-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIA2,
          parts: [
            { label: "a", prompt: "What is 'cherry-picking' data?", marks: 2 },
            {
              label: "b",
              prompt: "How did the presenter cherry-pick?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cherry-picking",
                statement: "Selective data use.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Selecting only data supporting your argument while omitting contradictory evidence.",
                evidence: "cherry-picking",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Showed rising game sales but omitted declining youth violence — selective presentation.",
                evidence: "omitted declining youth violence",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Selecting only supporting data, omitting contradictory evidence. (b) Showed rising game sales but omitted declining youth violence.",
            commonErrors: [
              "Thinking cherry-picking means fake data — it's selective real data.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u4-media",
      title: "Media literacy and critical consumption",
      skill:
        "Apply media literacy skills to evaluate messages across different platforms and formats.",
      lesson: {
        sections: [
          {
            heading: "Media literacy framework",
            body: "**Access**: Can you find the information? **Analyze**: Who created it? What's the purpose? What techniques are used? **Evaluate**: Is it credible? Is it fair? Is it current? **Create**: Can you produce your own responsible media? The video game presentation fails at analyze/evaluate — creator's purpose unclear (persuade? inform?), techniques questionable (cherry-picking), credibility low (unsourced). Media literacy means applying this framework to ALL media, not just presentations.",
          },
          {
            heading: "Platform-specific evaluation",
            body: "Different platforms have different norms: **social media** prioritizes engagement (emotional, sensational); **news sites** prioritize speed (may sacrifice depth); **academic sources** prioritize rigor (slow but credible); **advertisements** prioritize persuasion (biased by design). Know the platform's incentives — they shape what you see. A viral post isn't necessarily credible; a peer-reviewed study isn't necessarily accessible. Context matters.",
          },
        ],
        keyFormulas: [
          {
            name: "Access → analyze → evaluate → create",
            statement: "Media literacy framework.",
          },
          {
            name: "Platform incentives",
            statement: "What platform rewards shapes content.",
          },
          {
            name: "Context matters",
            statement: "Viral ≠ credible; academic ≠ accessible.",
          },
        ],
        workedExample: {
          problem:
            "How would you evaluate a viral social media post claiming 'new study proves X'?",
          solution:
            "Check: Is the study real? Who funded it? Is the post cherry-picking? What's the platform's incentive (engagement)? Cross-check with primary source before believing.",
        },
      },
      questions: [
        {
          id: "ela9-u4-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEDIA2,
          stem: "What does media literacy include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Just fact-checking" },
              { id: "b", text: "Just watching TV" },
              { id: "c", text: "Only social media" },
              { id: "d", text: "Access, analyze, evaluate, create" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Media literacy",
                statement: "Full framework.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Media literacy = access, analyze, evaluate, create — not just consumption.",
                evidence: "media literacy",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Access, analyze, evaluate, create.",
            commonErrors: [
              "Thinking it's just fact-checking — broader framework.",
            ],
          },
        },
        {
          id: "ela9-u4-media-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MEDIA2,
          stem: "Explain why 'viral' doesn't equal 'credible' in media evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Platform incentives",
                statement: "What platform rewards shapes content.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social media rewards engagement (emotional, sensational) — not accuracy.",
                evidence: "viral",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Viral content spreads because it's shareable, not because it's true.",
                evidence: "engagement",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Credibility requires source evaluation, not popularity — different metrics.",
                evidence: "credible",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Viral content spreads due to engagement (emotional/sensational), not accuracy — popularity ≠ credibility. Must evaluate source separately.",
            commonErrors: ["Thinking popular = true."],
          },
        },
        {
          id: "ela9-u4-media-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EVAL,
          stem: "Apply the media literacy framework (access, analyze, evaluate, create) to the video game presentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Framework application",
                statement: "Systematic evaluation.",
              },
              {
                kind: "skill",
                name: "Multi-stage analysis",
                statement: "Access through create.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Access: presentation accessible to class — no barrier.",
                evidence: "access",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Analyze: creator's purpose unclear (persuade? inform?), techniques questionable (cherry-picking, emotional appeal).",
                evidence: "analyze",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evaluate: fails credibility (unsourced), fairness (no counterarguments), logic (correlation=causation).",
                evidence: "evaluate",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Create: how would you present this topic responsibly? — cite sources, acknowledge limits, present both sides.",
                evidence: "create",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Access: fine. Analyze: unclear purpose, cherry-picking techniques. Evaluate: fails credibility/fairness/logic. Create: responsible version would cite sources, acknowledge correlation limits, present counterarguments.",
            commonErrors: ["Stopping at evaluate — need to consider create."],
          },
        },
        {
          id: "ela9-u4-media-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIA2,
          parts: [
            { label: "a", prompt: "What are 'platform incentives'?", marks: 2 },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Platform incentives",
                statement: "What platform rewards.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "What a platform rewards shapes its content — engagement, speed, or rigor.",
                evidence: "platform incentives",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Social media rewards engagement (emotional/sensational); academic sources reward rigor.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) What platform rewards shapes content. (b) Social media rewards engagement; academic sources reward rigor.",
            commonErrors: ["Not connecting platform to content incentives."],
          },
        },
      ],
    },
    {
      id: "ela9-u4-synthesis",
      title: "Synthesis and presentation evaluation",
      skill:
        "Synthesize evaluation criteria into comprehensive assessment of presentations and media.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive evaluation",
            body: "Evaluating presentations requires integrating multiple skills: **argument analysis** (is the claim supported?), **evidence assessment** (is it credible?), **logic check** (does reasoning hold?), **delivery evaluation** (is it engaging?), **media literacy** (what techniques are used?). The video game presentation scores poorly on argument/evidence/logic but might score well on delivery — polished presentation of flawed argument. Comprehensive evaluation weighs all dimensions.",
          },
          {
            heading: "Evaluation vs criticism",
            body: "Evaluation ≠ criticism. Good evaluation is **specific** (not 'it was bad' but 'the 78% statistic lacks citation'), **balanced** (acknowledges strengths too), **constructive** (suggests improvements), **evidence-based** (cites examples). 'The data speaks for itself' is criticism without evaluation — it dismisses rather than assesses. Strong evaluators explain WHY something works or doesn't, with specific evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Multi-dimensional evaluation",
            statement: "Argument + evidence + logic + delivery + media.",
          },
          {
            name: "Specific > vague",
            statement: "'Unsourced 78%' beats 'bad evidence.'",
          },
          {
            name: "Evaluation ≠ criticism",
            statement: "Assess, don't just attack.",
          },
        ],
        workedExample: {
          problem:
            "How would you evaluate the video game presentation comprehensively?",
          solution:
            "Argument: weak (correlation=causation). Evidence: poor (unsourced, cherry-picked). Logic: flawed. Delivery: possibly good. Media: questionable techniques. Overall: polished but fundamentally flawed.",
        },
      },
      questions: [
        {
          id: "ela9-u4-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EVAL,
          stem: "What dimensions should comprehensive presentation evaluation include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only slides" },
              { id: "b", text: "Argument, evidence, logic, delivery, media" },
              { id: "c", text: "Just delivery" },
              { id: "d", text: "Just content" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive evaluation",
                statement: "Multiple dimensions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaluation needs argument, evidence, logic, delivery, AND media analysis — not just one aspect.",
                evidence: "comprehensive evaluation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Argument, evidence, logic, delivery, media.",
            commonErrors: ["Evaluating only delivery or only content."],
          },
        },
        {
          id: "ela9-u4-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EVAL,
          stem: "Explain why 'the data speaks for itself' is criticism, not evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation vs criticism",
                statement: "Assess vs attack.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criticism dismisses without assessment — 'speaks for itself' evades analysis.",
                evidence: "data speaks for itself",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evaluation would specify: 'the 78% statistic lacks source; correlation isn't causation.'",
                evidence: "specific evaluation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Good evaluation explains WHY with evidence; criticism just rejects.",
                evidence: "evaluation vs criticism",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Data speaks for itself' dismisses without analysis — criticism. Evaluation would specify problems: unsourced stats, correlation≠causation, cherry-picked data.",
            commonErrors: ["Thinking strong opinion = good evaluation."],
          },
        },
        {
          id: "ela9-u4-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EVAL,
          stem: "Write a comprehensive evaluation of the video game presentation that is specific, balanced, and constructive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive evaluation",
                statement: "All dimensions assessed.",
              },
              {
                kind: "skill",
                name: "Constructive feedback",
                statement: "Specific + improvement suggestions.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Strengths: clear topic, engaging opening statistic, organized structure.",
                evidence: "strengths",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Weaknesses: unsourced stats, correlation=causation, cherry-picked data, no counterarguments.",
                evidence: "weaknesses",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Suggestions: cite sources, acknowledge declining violence, distinguish correlation/causation, address counterarguments.",
                evidence: "constructive",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Strengths: clear topic, engaging opening, organized structure. Weaknesses: unsourced 78% statistic, correlation presented as causation, cherry-picked data (omits declining violence), no counterarguments. Suggestions: cite sources, acknowledge contradicting data, explain correlation limits, address opposing views. Delivery was engaging but argument needs significant strengthening.'",
            commonErrors: ["Only criticizing — need balanced assessment."],
          },
        },
        {
          id: "ela9-u4-synthesis-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: EVAL,
          parts: [
            {
              label: "a",
              prompt: "What makes evaluation 'specific'?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give specific vs vague evaluation examples.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Specific evaluation",
                statement: "Concrete vs vague.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Cites specific examples and explains why they matter.",
                evidence: "specific evaluation",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Specific: 'unsourced 78% statistic.' Vague: 'bad evidence.'",
                evidence: "specific vs vague",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Cites specific examples, explains why they matter. (b) Specific: 'unsourced 78% statistic.' Vague: 'bad evidence.'",
            commonErrors: ["Using vague language — need concrete examples."],
          },
        },
      ],
    },
  ],
};
