import type { Lesson } from "../../../types.ts";

export const lesson410: Lesson = {
  id: "ciegp-u4-lesson-4-10",
  code: "4-10",
  title: "Exam Practice: Global Issues Deep Dive",
  goal: "I CAN write extended evaluations on global issues under timed conditions.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Unit 4: exam practice",
  ],
  vocabulary: [
    {
      term: "Extended response",
      definition: "Long-form answer testing analysis and evaluation.",
    },
    {
      term: "Evaluation chain",
      definition: "Evidence → reasoning → judgement → qualification.",
    },
    {
      term: "Stakeholder conflict",
      definition: "When groups' interests diverge.",
    },
    {
      term: "Unintended consequence",
      definition: "Effect not intended by policy.",
    },
    {
      term: "Time management",
      definition: "Allocating exam time to maximise marks.",
    },
    {
      term: "Review pass",
      definition: "Final check for completeness and clarity.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u4l10-c1-eval",
      title: "Extended evaluations on global issues",
      skill:
        "Construct multi-paragraph evaluations with evidence and judgement.",
      lesson: {
        sections: [
          {
            heading: "Structure for extended answers",
            body: "For 'discuss' or 'to what extent' questions: **paragraph 1** — define issue, state position. **Paragraphs 2-4** — evidence for, evidence against, complicating factors. **Final paragraph** — balanced judgement with qualification. Each paragraph needs evidence + reasoning, not just assertion.",
          },
          {
            heading: "Evidence integration",
            body: "Weave evidence into arguments: 'For example, [specific case] shows…' or 'Data from [source/context] indicates…'. Don't list evidence separately — connect it to your reasoning. Acknowledge counter-evidence fairly before rebutting or qualifying.",
          },
        ],
        keyFormulas: [
          {
            name: "Extended structure",
            statement: "Define → for → against → complicating → judgement",
          },
          {
            name: "Evidence chain",
            statement: "Evidence → reasoning → claim → evaluation",
          },
        ],
        workedExample: {
          problem:
            "Structure an answer to 'To what extent is globalisation beneficial?'",
          solution:
            "Define globalisation → benefits (trade, technology, growth) → costs (inequality, culture, environment) → complications (uneven distribution, reversibility) → judgement: beneficial on balance with conditions.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l10c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an 'extended response' in GP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Short answer" },
              { id: "b", text: "Multiple choice" },
              { id: "c", text: "Essay only" },
              {
                id: "d",
                text: "Long-form answer testing analysis and evaluation",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Extended response",
                statement: "Long-form evaluation.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Long-form evaluation",
            commonErrors: ["Confusing with essay writing."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the recommended structure for 'to what extent' questions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Extended structure",
                statement: "Define → for → against → complicating → judgement.",
              },
            ],
            steps: [
              { reasoning: "Structure stated.", marks: 1, markCode: "M" },
              { reasoning: "Each stage explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Define issue, evidence for, evidence against, complicating factors, balanced judgement with qualification.",
            commonErrors: ["Only one side or no judgement."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How should evidence be integrated into extended answers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Evidence integration",
                statement: "Weave into arguments, connect to reasoning.",
              },
            ],
            steps: [
              { reasoning: "Method explained.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "M" },
              {
                reasoning: "Why better than listing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 'For instance, [case] demonstrates…' — connect evidence to reasoning rather than listing; shows analytical skill.",
            commonErrors: ["Evidence dumped without connection."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a paragraph evaluating 'International aid does more harm than good.'",
          parts: [
            { label: "a", prompt: "Evidence supporting 'harm'", marks: 2 },
            { label: "b", prompt: "Evidence against (aid helps)", marks: 2 },
            { label: "c", prompt: "Your evaluation", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Paragraph evaluation",
                statement: "Evidence both ways + judgement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "e.g. dependency, corruption, Dutch disease.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Specific cases/examples.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. saves lives, funds services, enables development.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Specific cases/examples.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Weighed judgement: depends on design/governance.",
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
              "Aid can harm via dependency/corruption but also saves lives and funds services — 'more harm than good' is too absolute; effectiveness depends on design and governance.",
            commonErrors: ["One-sided or absolute conclusion."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an 'evaluation chain'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation chain",
                statement: "Evidence → reasoning → judgement → qualification.",
              },
            ],
            steps: [
              { reasoning: "Chain defined.", marks: 1, markCode: "M" },
              { reasoning: "Each link explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "The sequence linking evidence to judgement: evidence supports reasoning, reasoning leads to judgement, judgement is qualified.",
            commonErrors: ["Confusing with argument structure."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is it important to 'acknowledge counter-evidence fairly' in extended answers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Counter-evidence",
                statement: "Shows objectivity; strengthens own position.",
              },
            ],
            steps: [
              {
                reasoning: "Demonstrates objectivity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strengthens own argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Required by assessment criteria.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Acknowledging opposing evidence shows objectivity and strengthens your position — dismissing it looks biased and weakens evaluation marks.",
            commonErrors: ["Ignoring counter-evidence entirely."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'to what extent' require in an extended answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weigh evidence and reach qualified judgement" },
              { id: "b", text: "List examples" },
              { id: "c", text: "Percentage estimate" },
              { id: "d", text: "Yes or no answer" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Weigh and qualify",
            commonErrors: ["Treating as binary."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why 'strong evidence' alone doesn't guarantee high marks in GP.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evidence vs evaluation",
                statement:
                  "Marks need reasoning and judgement, not just facts.",
              },
            ],
            steps: [
              {
                reasoning: "Evidence without reasoning = description.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluation skill separately assessed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Structure/communication matter.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Evidence is necessary but insufficient — marks require reasoning, evaluation, structure and communication; a fact-list without analysis scores poorly.",
            commonErrors: ["Thinking evidence alone is enough."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'stakeholder conflict' in issue analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder conflict",
                statement: "Groups' interests diverge.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When different stakeholder groups have opposing interests — e.g. environmentalists vs fossil-fuel workers on climate policy.",
            commonErrors: ["Confusing with general disagreement."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should extended answers end with a 'qualified' rather than absolute conclusion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Qualified conclusion",
                statement: "Shows nuance, earns evaluation marks.",
              },
            ],
            steps: [
              { reasoning: "Demonstrates nuance.", marks: 1, markCode: "M" },
              {
                reasoning: "Earns higher-level marks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Absolute claims ignore complexity; qualified conclusions ('to a large extent', 'in most cases') demonstrate the evaluation skill being assessed.",
            commonErrors: ["Thinking absolutes are stronger."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the standard structure for an extended 'discuss' answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduction → three arguments → end" },
              {
                id: "b",
                text: "Define/position → evidence for → evidence against → complicating factors → judgement",
              },
              { id: "c", text: "Question → answer → sources" },
              { id: "d", text: "Summary → conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Extended structure",
                statement: "Define→for→against→complicating→judgement.",
              },
            ],
            steps: [
              { reasoning: "The five-part extended answer frame.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Define→for→against→complicating→judgement",
            commonErrors: ["Omitting the complicating-factors paragraph."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'weaving evidence into arguments' mean in practice?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evidence integration",
                statement: "Evidence connected to reasoning, not listed.",
              },
            ],
            steps: [
              {
                reasoning: "Each claim is followed by 'for example…' linking it to reasoning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Avoids detached evidence lists that don't support points.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Embedding specific examples/data inside each argument so evidence supports reasoning directly.",
            commonErrors: ["Appending a separate evidence list."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 5-paragraph extended answer uses evidence in 3 paragraphs. What percentage of paragraphs integrate evidence?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence coverage",
                statement: "Evidence paragraphs/total.",
              },
            ],
            steps: [
              { reasoning: "3/5 x 100 = 60%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60%",
            commonErrors: ["Treating judgement-only paragraphs as evidence."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "An extended answer must cover 5 elements (define, for, against, complicating, judgement) but the candidate covers only 4. What percentage is met?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage met", answer: 80 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure coverage",
                statement: "Elements covered/required.",
              },
            ],
            steps: [
              { reasoning: "4/5 x 100 = 80%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80%",
            commonErrors: ["Missing the judgement paragraph."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does phrasing like 'For example, [specific case] shows…' strengthen an extended evaluation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evidence phrasing",
                statement: "Specific evidence earns analytical marks.",
              },
            ],
            steps: [
              {
                reasoning: "Signals concrete evidence rather than assertion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links the example directly to the claim being made.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Demonstrates knowledge of real cases/data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It embeds specific evidence inside reasoning, showing analysis rather than unsupported assertion.",
            commonErrors: ["Using vague 'studies show' without specifics."],
          },
        },
        {
          id: "ciegp-q-u4l10c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a full extended evaluation of 'sanctions versus engagement for authoritarian regimes', naming content for each paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Extended plan",
                statement: "Define→for→against→complicating→judgement.",
              },
            ],
            steps: [
              {
                reasoning: "P1: define issue, state position on effectiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P2-3: evidence for sanctions and for engagement with cases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P4: complicating factors — regime type, multilateral vs unilateral.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P5: qualified judgement — combination often best.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Five-paragraph plan covering both instruments' mechanisms, counter-evidence and a qualified combination judgement.",
            commonErrors: ["Planning only one paragraph per side without evaluation."],
          },
        },
      ],
    },
    {
      id: "ciegp-u4l10-c2-practice",
      title: "Exam practice: timed scenarios",
      skill: "Apply technique under timed conditions to realistic questions.",
      lesson: {
        sections: [
          {
            heading: "Timed practice",
            body: "Practise writing extended answers within time limits. Focus on structure over perfection — complete all parts rather than perfecting one. Review for unanswered parts before finishing.",
          },
        ],
      },
      questions: [
        {
          id: "ciegp-q-u4l10c2-1",
          difficulty: "core",
          totalMarks: 4,
          stem: "'Discuss the view that developing countries should prioritise economic growth over environmental protection.'",
          parts: [
            { label: "a", prompt: "Arguments for growth-first", marks: 1 },
            { label: "b", prompt: "Arguments for environment-first", marks: 1 },
            { label: "c", prompt: "Complicating factors", marks: 1 },
            { label: "d", prompt: "Your judgement", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Extended answer",
                statement: "Both sides + complications + judgement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "e.g. poverty reduction, jobs, development.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "e.g. climate vulnerability, long-term costs, health.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "e.g. false dichotomy; green growth possible.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Weighed conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Growth-first aids poverty/jobs; environment-first protects long-term viability — false dichotomy; green growth reconciles both where feasible.",
            commonErrors: ["One-sided or no judgement."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-2",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "'Evaluate the effectiveness of international organisations in addressing global issues.'",
          parts: [
            { label: "a", prompt: "Strengths of international orgs", marks: 2 },
            { label: "b", prompt: "Weaknesses", marks: 2 },
            { label: "c", prompt: "Overall evaluation", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Organisation evaluation",
                statement: "Coordination vs sovereignty/funding limits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "e.g. coordination, legitimacy, resources.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Examples (UN, WHO, WTO).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. sovereignty limits, funding gaps, bureaucracy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Examples of failure.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Weighed judgement: necessary but limited.",
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
              "International orgs coordinate and legitimise action but face sovereignty limits, funding gaps and bureaucracy — necessary but insufficient alone.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "'To what extent can individuals make a difference on global issues?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Individual agency",
                statement: "Choices matter but structural limits exist.",
              },
            ],
            steps: [
              { reasoning: "Individual agency case.", marks: 1, markCode: "M" },
              { reasoning: "Structural limits.", marks: 1, markCode: "M" },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Individuals can influence via consumption, voting, advocacy — but structural issues need collective/policy action; individual action complements rather than replaces systemic change.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-4",
          difficulty: "core",
          totalMarks: 3,
          stem: "'Discuss whether globalisation is reversible.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Reversibility",
                statement: "Interdependence makes reversal costly.",
              },
            ],
            steps: [
              { reasoning: "Irreversibility case.", marks: 1, markCode: "M" },
              { reasoning: "Reversibility case.", marks: 1, markCode: "M" },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Globalisation is deeply embedded in supply chains and institutions — full reversal is impractical, but 'deglobalisation' of specific sectors (reshoring, protectionism) is possible.",
            commonErrors: ["Binary yes/no."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "'Evaluate the claim that technology is neutral.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology neutrality",
                statement: "Tools have affordances shaped by design/power.",
              },
            ],
            steps: [
              { reasoning: "Neutrality argument.", marks: 1, markCode: "M" },
              {
                reasoning: "Non-neutrality argument.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Technology embeds design choices and power relations — social media amplifies outrage, algorithms optimise engagement; 'neutral' is a myth though tools can be used well or badly.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is 'time management' critical in GP exams?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Time management",
                statement: "Unanswered questions = lost marks.",
              },
            ],
            steps: [
              {
                reasoning: "Consequence of poor timing.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Strategy suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Unanswered questions lose easy marks — allocate time per question, complete all parts, review at end.",
            commonErrors: ["Only mentioning speed."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'review pass' in exam technique?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Review pass",
                statement: "Check completeness, clarity, unanswered parts.",
              },
            ],
            steps: [
              { reasoning: "What to check.", marks: 1, markCode: "M" },
              { reasoning: "Why it matters.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Final check for unanswered parts, unclear arguments, missing conclusions — catches errors and ensures all marks attempted.",
            commonErrors: ["Only checking spelling."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "'Discuss the role of education in reducing global inequality.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Education-inequality",
                statement: "Human capital vs structural barriers.",
              },
            ],
            steps: [
              { reasoning: "Education's role.", marks: 1, markCode: "M" },
              { reasoning: "Limits/barriers.", marks: 1, markCode: "M" },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Education builds human capital and mobility but can't overcome structural inequality (wealth, discrimination, geography) alone — necessary but insufficient.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "'To what extent should rich countries accept more refugees?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Refugee policy",
                statement: "Capacity + duty vs costs.",
              },
            ],
            steps: [
              { reasoning: "Arguments for.", marks: 1, markCode: "M" },
              {
                reasoning: "Arguments against/limits.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Qualified conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rich countries have capacity and moral/legal duty, but integration costs and the fact poorer states host most refugees support proportional burden-sharing rather than unlimited acceptance.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "'Evaluate whether global problems require global solutions.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global vs local solutions",
                statement: "Interdependence vs sovereignty/local context.",
              },
            ],
            steps: [
              { reasoning: "Global case.", marks: 1, markCode: "M" },
              { reasoning: "Local case.", marks: 1, markCode: "M" },
              { reasoning: "Complementarity.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Transnational problems (climate, pandemics) need global coordination, but implementation is local — effective solutions combine global frameworks with local adaptation.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Under timed exam conditions, what is the best strategy for extended answers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write one perfect paragraph" },
              {
                id: "b",
                text: "Complete all parts with good structure rather than perfect one",
              },
              { id: "c", text: "Write as little as possible" },
              { id: "d", text: "Skip evaluation to save time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Timed strategy",
                statement: "Coverage beats perfection.",
              },
            ],
            steps: [
              { reasoning: "Completing all parts maximises marks.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Complete all parts over perfecting one",
            commonErrors: ["Over-investing time in a single question."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Before finishing a timed exam, what should you always check?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exam review",
                statement: "Check for unanswered parts.",
              },
            ],
            steps: [
              {
                reasoning: "Scan for questions or parts left blank.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ensure every sub-part of multi-part questions is addressed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Check for unanswered questions and unaddressed sub-parts before time expires.",
            commonErrors: ["Finishing without reviewing coverage."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 40-minute exam has 4 equal questions. A candidate spends 14 minutes on question 1. How many minutes remain for the other three?",
          response: {
            type: "numeric",
            parts: [{ label: "Minutes remaining", answer: 26 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time budget",
                statement: "Total minus spent.",
              },
            ],
            steps: [
              { reasoning: "40 - 14 = 26 minutes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "26 minutes",
            commonErrors: ["Forgetting questions 2-4 still need time."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "An answer of 150 words covers a 6-mark question. How many words per mark is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Words per mark", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing rate",
                statement: "Words/marks ratio.",
              },
            ],
            steps: [
              { reasoning: "150/6 = 25 words per mark.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25 words per mark",
            commonErrors: ["Dividing marks by words instead."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is structure more important than polished prose under timed conditions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Timed technique",
                statement: "Structure ensures coverage of all marking points.",
              },
            ],
            steps: [
              {
                reasoning: "Structure guarantees each required element is present.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Polish wastes time that could earn more marks elsewhere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Markers reward coverage and evaluation, not prose style.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Structure ensures every marking point is covered; polish adds little to marks under time pressure.",
            commonErrors: ["Prioritising style over content coverage."],
          },
        },
        {
          id: "ciegp-q-u4l10c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "'Discuss the view that urbanisation is mostly positive for developing countries.' Plan a timed answer covering all required elements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Timed plan",
                statement: "For→against→complicating→judgement.",
              },
            ],
            steps: [
              {
                reasoning: "For: jobs, services, economies of scale, innovation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: slums, congestion, inequality, environmental costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complicating: managed vs unplanned urbanisation differs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Qualified judgement: positive only with planning/infrastructure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Urbanisation brings jobs/services but also slums and congestion; net positive only with planning — qualified judgement.",
            commonErrors: ["One-sided positive or negative answer."],
          },
        },
      ],
    },
  ],
};
