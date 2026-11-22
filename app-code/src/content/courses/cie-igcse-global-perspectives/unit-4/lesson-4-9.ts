import type { Lesson } from "../../../types.ts";

export const lesson49: Lesson = {
  id: "ciegp-u4-lesson-4-9",
  code: "4-9",
  title: "Global Justice, Ethical Issues and Exam Technique",
  goal: "I CAN evaluate ethical dimensions of global issues and apply GP exam technique.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Unit 4: evaluation and technique",
  ],
  vocabulary: [
    {
      term: "Global justice",
      definition: "Fair distribution of benefits and burdens across the world.",
    },
    {
      term: "Ethical consumerism",
      definition: "Buying choices based on moral considerations.",
    },
    {
      term: "Intergenerational equity",
      definition: "Fairness between current and future generations.",
    },
    {
      term: "Moral hazard",
      definition: "Risk-taking encouraged by protection from consequences.",
    },
    {
      term: "Precautionary principle",
      definition: "Act to prevent harm even without full scientific certainty.",
    },
    {
      term: "Exam technique",
      definition:
        "Structured approach to maximising marks under time pressure.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u4l9-c1-justice",
      title: "Global justice and ethics",
      skill:
        "Evaluate ethical dimensions: justice, future generations, consumer choices.",
      lesson: {
        sections: [
          {
            heading: "Global justice",
            body: "**Global justice** asks whether benefits and burdens are fairly distributed across countries and generations. Issues: historical responsibility (colonialism, emissions), current inequality, and **intergenerational equity** — do we owe future generations a stable climate? Ethical frameworks: utilitarianism (greatest good), rights-based (basic rights for all), capability approach (Sen/Nussbaum — real freedoms).",
          },
          {
            heading: "Ethical choices and precaution",
            body: "**Ethical consumerism** — fair trade, divestment, boycotts — lets individuals affect global issues. Debates: effectiveness vs tokenism. **Precautionary principle**: act to prevent harm even without full certainty — applied to climate, GMOs, AI. **Moral hazard**: protection against consequences encourages risk — relevant to bailouts, insurance, aid.",
          },
        ],
        keyFormulas: [
          {
            name: "Intergenerational equity",
            statement: "Fairness between current and future generations",
          },
          {
            name: "Precautionary principle",
            statement: "Prevent harm without full certainty",
          },
          {
            name: "Moral hazard",
            statement: "Protection encourages risk-taking",
          },
        ],
        workedExample: {
          problem: "Does climate change violate intergenerational equity?",
          solution:
            "Yes — current emissions impose costs on future generations who didn't cause them and can't avoid them; argues for precautionary action now.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l9c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'global justice'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Fair distribution of benefits and burdens across the world",
              },
              { id: "b", text: "International law" },
              { id: "c", text: "Charity" },
              { id: "d", text: "World courts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Global justice",
                statement: "Fair distribution globally.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Fair distribution of benefits/burdens",
            commonErrors: ["Confusing with international law."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'intergenerational equity'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intergenerational equity",
                statement: "Fairness between generations.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fairness between current and future generations — e.g. whether we owe the future a stable climate and intact resources.",
            commonErrors: ["Confusing with income equality."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'precautionary principle' with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Precautionary principle",
                statement: "Act to prevent harm without full certainty.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "M" },
              { reasoning: "Counter-argument noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Act to prevent serious harm even without complete scientific certainty — e.g. restricting chemicals before proof of harm; critics say it can block beneficial innovation.",
            commonErrors: ["Only defining without example."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate: 'Ethical consumerism is an effective way to address global issues.'",
          parts: [
            { label: "a", prompt: "How it could work", marks: 2 },
            { label: "b", prompt: "Limitations", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical consumerism",
                statement: "Individual choices vs structural limits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "e.g. market signals, fair trade premiums, divestment pressure.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evidence of impact.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. only accessible to wealthy consumers; greenwashing; limited scale.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Structural issues need policy not just choices.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Useful complement to policy, not substitute.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Qualified conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ethical consumerism sends market signals and supports alternatives, but only reaches consumers who can afford it — it complements rather than replaces structural policy change.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'moral hazard'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Moral hazard",
                statement: "Protection encourages risk-taking.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When protection from consequences encourages riskier behaviour — e.g. banks taking more risks knowing they'll be bailed out, or aid reducing incentive for reform.",
            commonErrors: ["Confusing with general risk."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two ethical frameworks for judging global justice and briefly explain one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical frameworks",
                statement: "Utilitarian, rights-based, capability.",
              },
            ],
            steps: [
              { reasoning: "Two frameworks named.", marks: 1, markCode: "M" },
              { reasoning: "One explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. utilitarianism (greatest good for greatest number) or capability approach (real freedoms, not just income) — different frameworks give different verdicts on the same issue.",
            commonErrors: ["Naming without explaining."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'ethical consumerism' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Buying cheapest" },
              { id: "b", text: "Boycotting everything" },
              { id: "c", text: "Buying choices based on moral considerations" },
              { id: "d", text: "Buying local only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethical consumerism",
                statement: "Moral buying choices.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Moral buying choices",
            commonErrors: ["Confusing with frugality."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse whether the precautionary principle should apply to AI development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Precautionary principle",
                statement: "Prevent serious harm without full certainty.",
              },
            ],
            steps: [
              {
                reasoning: "For: AI risks are severe/irreversible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: may block beneficial innovation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Risk-proportionate regulation suggested.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "AI's potential harms (job loss, misuse, bias) are serious and partly irreversible — precaution argues for staged regulation proportional to demonstrated risk rather than either ban or laissez-faire.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might 'historical responsibility' matter in climate justice?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historical responsibility",
                statement: "Past emissions created current problem.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Policy implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Developed countries caused most historical emissions — justice suggests they should bear more mitigation cost and support adaptation in countries that contributed least.",
            commonErrors: ["Only current emissions considered."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'divestment' as ethical action?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Divestment",
                statement: "Removing investments from unethical industries.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Withdrawing financial investment from industries deemed harmful — e.g. fossil fuels or weapons — to pressure them economically and ethically.",
            commonErrors: ["Confusing with boycott generally."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'intergenerational equity'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Voting rights for all ages" },
              { id: "b", text: "Equal pay for equal work" },
              { id: "c", text: "Fairness within one generation" },
              {
                id: "d",
                text: "Fairness between current and future generations",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intergenerational equity",
                statement: "Fairness across generations.",
              },
            ],
            steps: [
              { reasoning: "Concern for those not yet born.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Fairness between current and future generations",
            commonErrors: ["Confusing with intragenerational equity."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the precautionary principle require?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Precautionary principle",
                statement: "Act to prevent harm even without full certainty.",
              },
            ],
            steps: [
              {
                reasoning: "States the rule: prevent harm absent certainty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Applied to climate, GMOs, AI — shifts burden of proof.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Take preventive action against potential serious harm even when scientific certainty is lacking — e.g. on climate or GMOs.",
            commonErrors: ["Confusing with ignoring risk until proven."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A policy benefits 8 million people and harms 2 million. What is the net number of beneficiaries?",
          response: {
            type: "numeric",
            parts: [{ label: "Net beneficiaries (millions)", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Net impact",
                statement: "Beneficiaries minus harmed.",
              },
            ],
            steps: [
              { reasoning: "8 - 2 = 6 million.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 million",
            commonErrors: ["Reporting gross benefits only."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a survey, 45% say ethical consumerism is effective and 55% call it tokenism. What is the percentage-point gap?",
          response: {
            type: "numeric",
            parts: [{ label: "Gap (percentage points)", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Survey comparison",
                statement: "Difference in percentages.",
              },
            ],
            steps: [
              { reasoning: "55 - 45 = 10 points.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 percentage points",
            commonErrors: ["Computing a ratio instead of a difference."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare a utilitarian and a rights-based ethical framework when evaluating a climate policy that sacrifices a minority's livelihood for the majority's benefit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical frameworks",
                statement: "Greatest good vs inviolable rights.",
              },
            ],
            steps: [
              {
                reasoning: "Utilitarian: weighs aggregate welfare — may accept the sacrifice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rights-based: basic rights can't be traded away regardless of majority benefit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: frameworks disagree — real tension in climate justice.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Utilitarianism may permit sacrificing the minority for aggregate gain; rights-based frameworks forbid it — a genuine ethical conflict.",
            commonErrors: ["Treating frameworks as interchangeable."],
          },
        },
        {
          id: "ciegp-q-u4l9c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'individual ethical consumerism (boycotts, fair trade) can solve major global issues'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical consumerism",
                statement: "Individual action vs structural limits.",
              },
            ],
            steps: [
              {
                reasoning: "For: sends market signals, raises awareness, empowers individuals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: limited reach, 'tokenism', can't fix structural causes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complicating: greenwashing and unequal capacity to choose.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: useful supplement, not a substitute for systemic change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ethical consumerism helps raise awareness and shift markets but is limited by reach and structural causes; it complements rather than replaces systemic solutions.",
            commonErrors: ["Overstating individual agency or dismissing it entirely."],
          },
        },
      ],
    },
    {
      id: "ciegp-u4l9-c2-exam",
      title: "IGCSE GP exam technique",
      skill: "Apply structured technique for Paper 1 and the research project.",
      lesson: {
        sections: [
          {
            heading: "Paper 1 technique",
            body: "Paper 1 tests research, analysis, evaluation, reflection, collaboration, communication on a global issue. Structure answers: **identify** the key concept → **analyse** with evidence → **evaluate** multiple perspectives → **conclude** with balanced judgement. Use connective phrases ('however', 'consequently', 'on balance'). Allocate time per question; write legibly.",
          },
          {
            heading: "Common pitfalls",
            body: "Avoid: one-sided answers (no counter-argument), unsupported assertions, vague generalities ('people think…'), and descriptive-only responses (no evaluation). Strong answers cite specific evidence, name stakeholders, and reach qualified conclusions. Check each answer addresses ALL parts of the question.",
          },
        ],
        keyFormulas: [
          {
            name: "Answer structure",
            statement: "Identify → analyse → evaluate → conclude",
          },
          {
            name: "Evaluation markers",
            statement: "Counter-argument, weighing, qualified conclusion",
          },
        ],
        workedExample: {
          problem: "Improve: 'Aid is good because it helps poor people.'",
          solution:
            "'Aid can reduce poverty (evidence: X), but effectiveness depends on governance; tied aid and corruption limit impact; on balance, well-designed aid is beneficial but not sufficient alone.'",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l9c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the six core skills assessed in IGCSE GP?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Reading, writing, speaking, listening, maths, science",
              },
              {
                id: "b",
                text: "Knowledge, understanding, application, analysis, synthesis, evaluation",
              },
              {
                id: "c",
                text: "Research, analysis, evaluation, reflection, collaboration, communication",
              },
              {
                id: "d",
                text: "Research, writing, presenting, debating, voting, travelling",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "GP skills",
                statement: "Six assessed skills.",
              },
            ],
            steps: [{ reasoning: "Correct list.", marks: 1, markCode: "B" }],
            finalAnswer:
              "**(c)** Research, analysis, evaluation, reflection, collaboration, communication",
            commonErrors: ["Confusing with generic skills."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the recommended answer structure for GP questions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Answer structure",
                statement: "Identify → analyse → evaluate → conclude.",
              },
            ],
            steps: [
              { reasoning: "Structure stated.", marks: 1, markCode: "M" },
              { reasoning: "Each stage explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Identify the key concept, analyse with evidence, evaluate multiple perspectives, conclude with balanced judgement.",
            commonErrors: ["Only describing or only evaluating."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do one-sided answers score poorly in GP?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation requirement",
                statement: "GP assesses ability to weigh perspectives.",
              },
            ],
            steps: [
              {
                reasoning: "Shows lack of evaluation skill.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Misses counter-argument requirement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Real issues are contested.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "GP assesses evaluation — one-sided answers show you can't weigh competing evidence, which is the core skill being tested.",
            commonErrors: ["Thinking one side can be 'right'."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rewrite this weak answer: 'Pollution is bad for the environment and should be stopped.'",
          parts: [
            { label: "a", prompt: "Identify weaknesses", marks: 2 },
            {
              label: "b",
              prompt: "Rewrite with evidence and evaluation",
              marks: 2,
            },
            { label: "c", prompt: "Explain why it's stronger", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Answer improvement",
                statement: "Add specificity, evidence, evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Vague, no evidence, no evaluation, absolute.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Doesn't address 'how' or stakeholders.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. specific pollution type, mechanism, stakeholders, counter-argument.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Balanced conclusion.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Specificity + evidence + evaluation = higher marks.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) vague, unevidenced, absolute (b) 'Industrial pollution harms health (evidence: X) and ecosystems; regulation reduces it but costs industry; on balance, stricter rules justified with support for affected firms' (c) adds specificity, evidence, evaluation",
            commonErrors: ["Just rewording without adding substance."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'qualified conclusion'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Qualified conclusion",
                statement: "Position with conditions/limits.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A conclusion specifying limits — e.g. 'effective to a large extent, provided governance is adequate' — showing nuance rather than absolute claims.",
            commonErrors: ["Confusing with weak conclusion."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three common pitfalls in GP answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pitfalls",
                statement: "One-sided, unsupported, vague.",
              },
            ],
            steps: [
              { reasoning: "Three valid pitfalls.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. one-sided (no counter-argument), unsupported assertions (no evidence), vague generalities ('people think…').",
            commonErrors: ["Listing without explanation."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'to what extent' signal in a question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give a percentage" },
              { id: "b", text: "Answer yes or no" },
              {
                id: "c",
                text: "You must weigh evidence and reach a qualified judgement",
              },
              { id: "d", text: "List examples" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Command words",
                statement: "'To what extent' requires evaluation.",
              },
            ],
            steps: [
              { reasoning: "Correct interpretation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Weigh and qualify",
            commonErrors: ["Treating as yes/no."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Plan a 40-minute exam strategy for a GP paper.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Time management",
                statement: "Allocate per question, leave review time.",
              },
            ],
            steps: [
              {
                reasoning: "Time allocation per section.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reading/planning time noted.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Review buffer included.", marks: 1, markCode: "A" },
              {
                reasoning: "Marks-based prioritisation.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Realistic plan.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 5 min reading/planning, ~7 min per question, 5 min review — prioritise high-mark questions, ensure all parts answered.",
            commonErrors: ["No time allocation or review."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you address EVERY part of a multi-part question?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Question coverage",
                statement: "Each part has marks.",
              },
            ],
            steps: [
              {
                reasoning: "Marks lost for unanswered parts.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Check before moving on.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Each part carries marks — missing one loses easy marks; check off parts as you complete them.",
            commonErrors: ["Assuming one good answer covers all."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What makes evidence 'sufficient' in a GP answer?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sufficient evidence",
                statement: "Enough to support claim, not overwhelming.",
              },
            ],
            steps: [
              {
                reasoning: "Supports the specific claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Relevance over quantity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Enough relevant evidence to support the specific claim — quality and relevance matter more than quantity; two strong examples beat five weak ones.",
            commonErrors: ["Listing many weak examples."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the recommended structure for a Paper 1 evaluation answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summary → opinion → done" },
              {
                id: "b",
                text: "Identify → analyse → evaluate → conclude",
              },
              { id: "c", text: "Describe → list → end" },
              { id: "d", text: "Conclusion → evidence → question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Answer structure",
                statement: "Identify→analyse→evaluate→conclude.",
              },
            ],
            steps: [
              { reasoning: "The standard high-scoring structure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Identify→analyse→evaluate→conclude",
            commonErrors: ["Skipping evaluation entirely."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the most damaging common pitfall in GP exam answers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Citing evidence" },
              { id: "b", text: "Writing in paragraphs" },
              {
                id: "c",
                text: "One-sided answers with no counter-argument or judgement",
              },
              { id: "d", text: "Using headings" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation requirement",
                statement: "One-sided answers cap at mid-band.",
              },
            ],
            steps: [
              {
                reasoning: "Missing counter-argument/judgement caps marks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** One-sided answers without evaluation",
            commonErrors: ["Thinking headings or paragraphs hurt."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Paper 1 has 4 questions worth equal marks in a 60-minute exam. What percentage of time should each question get?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage per question", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time allocation",
                statement: "Equal share of exam time.",
              },
            ],
            steps: [
              { reasoning: "1/4 = 25% each.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Over-investing in one question."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A question asks for 5 distinct points and the candidate addresses 4. What percentage of the requirement is met?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage met", answer: 80 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Coverage",
                statement: "Addressed/required x 100.",
              },
            ],
            steps: [
              { reasoning: "4/5 x 100 = 80%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80%",
            commonErrors: ["Missing one required part loses marks."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should exam answers name specific stakeholders rather than writing 'people are affected'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stakeholder specificity",
                statement: "Named groups show real analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Generic phrases are vague generalities — low marks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Naming groups enables analysis of differing impacts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. 'low-income coastal communities' vs 'fossil fuel workers'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Specific stakeholders show genuine perspective analysis; vague phrases are unsupported generalities.",
            commonErrors: ["Using 'people'/'society' as pseudo-analysis."],
          },
        },
        {
          id: "ciegp-q-u4l9c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Improve this weak answer into a strong one: 'Aid is good because it helps poor people.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Answer improvement",
                statement: "Evidence + counter + qualified judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Add evidence: aid can fund health/education/infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add counter: tied aid, corruption, dependency limit impact.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weigh: effectiveness depends on governance and design.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Qualified judgement: 'aid helps but is not sufficient alone'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Aid can reduce poverty via health/education funding, but tied aid and corruption limit it; well-designed aid helps but is insufficient without governance reform.",
            commonErrors: ["Just adding length without evaluation."],
          },
        },
      ],
    },
  ],
};
