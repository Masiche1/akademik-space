import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ciegp-u4-lesson-4-3",
  code: "4-3",
  title: "Argumentation, Evidence Evaluation and Balanced Judgement",
  goal: "I CAN construct and critique arguments on global issues using evidence and evaluation for IGCSE GP.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Unit 4: core skills",
  ],
  vocabulary: [
    { term: "Claim", definition: "A statement argued to be true." },
    {
      term: "Evidence",
      definition: "Facts, data or examples supporting a claim.",
    },
    {
      term: "Bias",
      definition: "Systematic favouring of one perspective over another.",
    },
    {
      term: "Counter-argument",
      definition: "An argument against the main position.",
    },
    {
      term: "Balanced judgement",
      definition: "A conclusion weighing evidence from multiple perspectives.",
    },
    {
      term: "Corroboration",
      definition: "Confirmation of evidence by independent sources.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u4l3-c1-argument",
      title: "Building and evaluating arguments",
      skill:
        "Construct claims with evidence, identify bias and answer counter-arguments.",
      lesson: {
        sections: [
          {
            heading: "Structure of an argument",
            body: "A strong argument links **claim → evidence → reasoning → evaluation**. Claims should be specific and arguable; evidence must be relevant, reliable and sufficient. Reasoning connects evidence to claim — weak reasoning (logical fallacies) undermines good evidence. Always anticipate the strongest counter-argument.",
          },
          {
            heading: "Evaluating sources",
            body: "Check **CRAAP** criteria: Currency, Relevance, Authority, Accuracy, Purpose. Look for bias — who funds the source, what agenda it serves. Corroborate key facts across independent sources. Distinguish fact from opinion and correlation from causation. Statistics need context: sample size, methodology, cherry-picking.",
          },
        ],
        keyFormulas: [
          {
            name: "CRAAP test",
            statement: "Currency, Relevance, Authority, Accuracy, Purpose",
          },
          {
            name: "Argument chain",
            statement: "Claim → evidence → reasoning → evaluation",
          },
          {
            name: "Correlation ≠ causation",
            statement:
              "Two things moving together does not prove one causes the other",
          },
        ],
        workedExample: {
          problem:
            "Critique: 'A study shows countries with more aid have lower GDP, so aid causes poverty.'",
          solution:
            "Correlation is not causation — poor countries may receive more aid because they are poor. Need to check methodology, other variables and counter-evidence before concluding.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'claim' in argumentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A piece of evidence" },
              { id: "b", text: "A statement put forward to be argued as true" },
              { id: "c", text: "A conclusion only" },
              { id: "d", text: "A statistic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Claim",
                statement: "Arguable assertion needing support.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Statement argued to be true",
            commonErrors: ["Confusing claim with evidence."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'corroboration' mean in evaluating evidence?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corroboration",
                statement: "Independent sources confirming the same fact.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Notes independence requirement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Confirming a claim through independent sources — two sources repeating the same press release do not count as corroboration.",
            commonErrors: ["Counting non-independent sources."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a fact and an opinion in argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fact vs opinion",
                statement: "Facts are verifiable; opinions are judgements.",
              },
            ],
            steps: [
              { reasoning: "Defines fact correctly.", marks: 1, markCode: "M" },
              {
                reasoning: "Defines opinion correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains why distinction matters for evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Facts can be verified (data, events); opinions are interpretations or value judgements. Arguments need facts as evidence; opinions need justification.",
            commonErrors: ["Treating all statements as equivalent."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse the argument: 'Data shows countries with higher aid receipts have lower GDP growth, therefore aid causes underdevelopment.'",
          parts: [
            {
              label: "a",
              prompt: "What logical fallacy is present?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give an alternative explanation for the correlation",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What evidence would properly test the claim?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Correlation vs causation",
                statement:
                  "Correlation does not prove causation; reverse causality and confounders possible.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Identifies correlation-causation fallacy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Names it or explains precisely.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Alternative: poor countries receive more aid (reverse causality).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Alternative: conflict or geography drives both.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "e.g. RCTs, comparing similar countries with/without aid.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Specifies controlled comparison.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) correlation≠causation (b) reverse causality: poverty attracts aid (c) controlled comparisons/RCTs of aid vs no aid in similar contexts",
            commonErrors: ["Accepting the correlation as proof."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'bias' in a source?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement:
                  "Systematic slant from funding, ownership or agenda.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example of bias source.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A systematic tendency to favour one view — e.g. a report funded by an industry group may understate that industry's harms.",
            commonErrors: [
              "Equating bias with being wrong — biased sources can still contain facts.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l3c1-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three questions from the CRAAP test and explain one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CRAAP test",
                statement: "Currency, Relevance, Authority, Accuracy, Purpose.",
              },
            ],
            steps: [
              { reasoning: "Three criteria named.", marks: 1, markCode: "M" },
              {
                reasoning: "One explained with application.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. Currency: is the source recent enough for this fast-changing issue? Authority: does the author have relevant expertise? Purpose: is it informing or persuading?",
            commonErrors: ["Listing without explanation."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'counter-argument'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A weaker version of your claim" },
              { id: "b", text: "A rhetorical question" },
              { id: "c", text: "An argument you agree with" },
              { id: "d", text: "The strongest argument against your position" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counter-argument",
                statement: "Opposing case, ideally the strongest.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Strongest argument against your position",
            commonErrors: ["Thinking it means any disagreement."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-8",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate: 'A charity reports that its aid programme improved school attendance by 30%. Therefore aid works.'",
          parts: [
            {
              label: "a",
              prompt: "What is wrong with relying on the charity's own report?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What additional evidence would strengthen the claim?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Does attendance prove 'aid works'?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source evaluation",
                statement: "Self-reported, single-source, proxy measure.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Charity has interest in positive results — bias.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "No independent verification; possible cherry-picking.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Independent study; comparison group; longer timeframe.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Multiple measures beyond attendance.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Attendance is a proxy; 'works' needs outcomes like learning.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Nuance: promising but unproven.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) self-interest bias, no corroboration (b) independent RCT with control group (c) attendance ≠ learning outcomes; claim unproven",
            commonErrors: ["Accepting single-source claim."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should statistics be treated with caution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Statistical literacy",
                statement: "Need context: sample, method, framing.",
              },
            ],
            steps: [
              {
                reasoning: "One reason: method/sample issues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second reason: framing/cherry-picking.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Statistics depend on methodology, sample and framing — e.g. '80% support' means nothing without knowing who was asked and how.",
            commonErrors: [
              "Distrusting all statistics rather than evaluating them.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l3c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'logical fallacy' in argument?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Logical fallacy",
                statement: "Flawed reasoning pattern that appears persuasive.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example named.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "An error in reasoning — e.g. ad hominem (attacking the person), straw man (misrepresenting the argument), or false dilemma.",
            commonErrors: ["Confusing fallacy with factual error."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the CRAAP test check when evaluating a source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cost, Reliability, Age, Appearance, Popularity" },
              { id: "b", text: "Nothing — it's a myth" },
              {
                id: "c",
                text: "Currency, Relevance, Authority, Accuracy, Purpose",
              },
              { id: "d", text: "Charts, References, Authors, Ads, Pages" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "CRAAP test",
                statement: "Five criteria for source evaluation.",
              },
            ],
            steps: [
              { reasoning: "CRAAP = Currency, Relevance, Authority, Accuracy, Purpose.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Currency, Relevance, Authority, Accuracy, Purpose",
            commonErrors: ["Misremembering the letters."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Of 20 sources reviewed, 15 pass the CRAAP test. What percentage pass?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage passing", answer: 75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source screening",
                statement: "Passing/total x 100.",
              },
            ],
            steps: [
              { reasoning: "15/20 x 100 = 75%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Reporting the count instead of the percentage."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A researcher checks 8 key claims and finds 5 corroborated by independent sources. What percentage are corroborated?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage corroborated", answer: 62.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Corroboration rate",
                statement: "Corroborated/total x 100.",
              },
            ],
            steps: [
              { reasoning: "5/8 x 100 = 62.5%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "62.5%",
            commonErrors: ["Counting sources rather than claims."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'cherry-picking' in the use of evidence?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cherry-picking",
                statement: "Selecting only favourable data or timeframes.",
              },
            ],
            steps: [
              {
                reasoning: "Defines selective use of evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. citing only years where a trend rose.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Selecting only data that supports your argument, ignoring the full picture.",
            commonErrors: ["Confusing with falsifying data."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why correlation does not prove causation, using a global-issue example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Correlation vs causation",
                statement: "Co-movement does not establish cause.",
              },
            ],
            steps: [
              {
                reasoning: "Two variables may move together for other reasons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. ice cream sales correlate with drowning — heat is the common cause.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Need mechanism/evidence to claim causation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Co-movement can hide a third factor or coincidence; causation needs a mechanism, e.g. ice cream vs drowning via hot weather.",
            commonErrors: ["Treating any correlation as proof."],
          },
        },
        {
          id: "ciegp-q-u4l3c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A source claims '90% of people support the government's new policy' in a poll funded by the governing party. Evaluate its reliability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source bias",
                statement: "Funding and purpose shape findings.",
              },
            ],
            steps: [
              {
                reasoning: "Purpose/funding creates conflict of interest — bias risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check methodology: sample size, wording, representativeness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Corroborate with independent polls before trusting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: treat as unverified until independently confirmed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High bias risk from funder; verify methodology and corroborate with independent sources before relying on it.",
            commonErrors: ["Accepting the statistic without checking provenance."],
          },
        },
      ],
    },
    {
      id: "ciegp-u4l3-c2-balanced",
      title: "Balanced judgement and synthesis",
      skill:
        "Weigh competing perspectives and reach justified conclusions on global issues.",
      lesson: {
        sections: [
          {
            heading: "The balanced judgement",
            body: "IGCSE GP rewards **balanced judgement**: weighing evidence for and against before concluding. A good judgement states the position, acknowledges strongest counter-evidence, and qualifies the conclusion ('to a large extent', 'in most cases'). Avoiding judgement entirely scores poorly — you must commit, but with justification.",
          },
          {
            heading: "Synthesis across perspectives",
            body: "Global issues involve stakeholders with legitimately different interests — governments, NGOs, corporations, citizens of different countries. Synthesis means showing how these perspectives interact, not just listing them. Evaluation should consider: short vs long-term effects, intended vs unintended consequences, and who gains and who loses.",
          },
        ],
        keyFormulas: [
          {
            name: "Balanced judgement",
            statement: "Position + counter-evidence + qualified conclusion",
          },
          {
            name: "Stakeholder matrix",
            statement: "Who gains, who loses, who decides",
          },
          {
            name: "Intended vs unintended",
            statement: "Policies have effects beyond their goals",
          },
        ],
        workedExample: {
          problem:
            "Write a balanced judgement on 'globalisation benefits all'.",
          solution:
            "Globalisation raises aggregate incomes and connects markets, but gains are uneven — some workers and regions lose. It is beneficial on balance only if paired with adjustment policies for losers.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'balanced judgement'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only presenting facts" },
              { id: "b", text: "Agreeing with everyone" },
              { id: "c", text: "Sitting on the fence without a view" },
              {
                id: "d",
                text: "A conclusion that weighs evidence from multiple perspectives",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Balanced judgement",
                statement: "Weighed conclusion, not neutrality.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Conclusion weighing multiple perspectives",
            commonErrors: ["Confusing balance with having no view."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why does IGCSE GP reward balanced judgement rather than one-sided answers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Assessment criteria",
                statement:
                  "Real issues have competing perspectives; synthesis shows higher-order thinking.",
              },
            ],
            steps: [
              {
                reasoning: "Notes complexity of real issues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links to evaluation skill being assessed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Global issues are genuinely contested; showing you can weigh competing evidence demonstrates the analysis and evaluation skills the syllabus assesses.",
            commonErrors: [
              "Answering 'because the teacher wants it' without understanding.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does 'qualified conclusion' mean? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Qualified conclusion",
                statement: "Conclusion with limits or conditions attached.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Valid example.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "A conclusion that specifies conditions — e.g. 'Aid is effective to a large extent, provided governance is not corrupt.'",
            commonErrors: ["Absolute claims with no qualification."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a balanced judgement on the claim: 'Globalisation has benefited everyone.'",
          parts: [
            { label: "a", prompt: "Evidence supporting the claim", marks: 2 },
            { label: "b", prompt: "Evidence against", marks: 2 },
            { label: "c", prompt: "Your qualified conclusion", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation judgement",
                statement: "Aggregate gains vs uneven distribution.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "e.g. higher aggregate incomes, trade gains, technology spread.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evidence specific, not generic.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. job losses in some sectors, inequality rise, cultural loss.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evidence specific.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Qualified conclusion weighing both.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Defensible position with limits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Globalisation has raised aggregate incomes and spread technology, but gains are uneven — benefits outweigh costs only with adjustment policies for losers.",
            commonErrors: ["One-sided or listing evidence without weighing."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'unintended consequences' in policy evaluation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unintended consequences",
                statement: "Effects beyond the policy's goals, often harmful.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Effects not intended by policymakers — e.g. anti-poaching patrols may displace hunting rather than stop it, or conservation may exclude local people from resources.",
            commonErrors: ["Confusing with intended effects."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'who gains and who loses' matters in evaluating a global policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Distributional analysis",
                statement: "Aggregate gains can mask concentrated losses.",
              },
            ],
            steps: [
              {
                reasoning: "Explains distributional question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Notes equity implications.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links to policy legitimacy/sustainability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Aggregate benefits can coexist with severe losses for specific groups; ignoring this hides equity costs and may make policies unsustainable or unjust.",
            commonErrors: ["Treating aggregate outcomes as sufficient."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of a qualified conclusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I don't know'" },
              { id: "b", text: "'Renewable energy is always perfect'" },
              {
                id: "c",
                text: "'Renewable energy is the best solution in most contexts, though costs remain a barrier'",
              },
              { id: "d", text: "'Both sides have points'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Qualified conclusion",
                statement: "Position + conditions.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies qualification.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Position with stated limits",
            commonErrors: ["Choosing absolute or non-committal options."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-8",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate: 'Economic growth always reduces poverty.'",
          parts: [
            { label: "a", prompt: "Evidence supporting the claim", marks: 2 },
            { label: "b", prompt: "Evidence or reasoning against", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth-poverty link",
                statement:
                  "Growth can lift incomes but may bypass the poorest without redistribution.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "e.g. East Asian growth reduced poverty massively.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Mechanism: jobs, incomes.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. resource-rich but unequal countries; jobless growth.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Kuznets/inequality argument.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Growth necessary but insufficient; distribution matters.",
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
              "Growth often reduces absolute poverty but 'always' fails where gains concentrate — pro-poor growth requires deliberate distribution policies.",
            commonErrors: ["Accepting 'always' or rejecting growth entirely."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'short-term vs long-term effects' in evaluation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Time horizon",
                statement:
                  "Policies may have immediate costs and delayed benefits, or vice versa.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Some policies look bad short-term but pay off later — e.g. education spending costs now but raises future productivity; conversely, resource extraction gives quick gains but long-term damage.",
            commonErrors: ["Only considering immediate effects."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to identify stakeholders in a global issue analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder analysis",
                statement:
                  "Different groups have different interests, impacts and power.",
              },
            ],
            steps: [
              {
                reasoning: "Explains differing interests.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links to balanced judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stakeholders experience issues differently — e.g. climate change threatens island states but benefits some energy firms; recognising this is essential for balanced judgement.",
            commonErrors: ["Listing stakeholders without analysing interests."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A balanced judgement on a global issue must include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of sources" },
              {
                id: "b",
                text: "A position plus acknowledgement of counter-evidence and a qualified conclusion",
              },
              { id: "c", text: "A restatement of the question" },
              { id: "d", text: "Only supporting evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Balanced judgement",
                statement: "Position + counter-evidence + qualification.",
              },
            ],
            steps: [
              { reasoning: "Balanced judgement weighs both sides then qualifies.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Position + counter-evidence + qualification",
            commonErrors: ["Confusing balance with refusing to commit."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does a stakeholder matrix show, and why is it useful?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder matrix",
                statement: "Who gains, who loses, who decides.",
              },
            ],
            steps: [
              {
                reasoning: "Maps each stakeholder's interests and power.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reveals distributional effects and likely supporters/opponents.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Who gains, who loses and who decides — revealing distributional effects and power dynamics.",
            commonErrors: ["Listing stakeholders without their interests."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A policy affects 4 stakeholder groups but the analysis covers only 3. What percentage of groups are analysed?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage analysed", answer: 75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Coverage analysis",
                statement: "Covered/total x 100.",
              },
            ],
            steps: [
              { reasoning: "3/4 x 100 = 75%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Missing that 25% is excluded."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A policy gives $10 million in short-term benefits but imposes $25 million in long-term costs. What is the net effect over time?",
          response: {
            type: "numeric",
            parts: [{ label: "Net effect ($m)", answer: -15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Long-term costing",
                statement: "Benefits minus costs across time.",
              },
            ],
            steps: [
              { reasoning: "10 - 25 = -$15m net cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-$15 million",
            commonErrors: ["Ignoring the time dimension."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why must evaluation consider intended versus unintended consequences? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intended vs unintended",
                statement: "Policies have effects beyond their goals.",
              },
            ],
            steps: [
              {
                reasoning: "Intended effects are planned; unintended are side effects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. congestion charge reduces centre traffic but shifts pollution to residential streets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ignoring unintended effects overstates policy success.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Solutions create side effects beyond goals; e.g. congestion charges reroute traffic — full evaluation must weigh both.",
            commonErrors: ["Evaluating only the stated aim."],
          },
        },
        {
          id: "ciegp-q-u4l3c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a balanced judgement on 'globalisation benefits everyone'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Balanced judgement",
                statement: "Position + counter-evidence + qualification.",
              },
            ],
            steps: [
              {
                reasoning: "Position: aggregate gains are real — trade, technology, incomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Counter-evidence: uneven gains; losers in rich and poor countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weighs: benefits depend on adjustment policies and governance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Qualified conclusion: 'on balance, only with redistribution'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Globalisation raises aggregate incomes but benefits are uneven; net positive only with policies supporting losers.",
            commonErrors: ["Absolute claims ('everyone benefits') without qualification."],
          },
        },
      ],
    },
  ],
};
