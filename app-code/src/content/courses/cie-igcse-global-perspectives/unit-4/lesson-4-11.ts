import type { Lesson } from "../../../types.ts";

export const lesson411: Lesson = {
  id: "ciegp-u4-lesson-4-11",
  code: "4-11",
  title: "Integrated Issue Analysis: Practice Set B",
  goal: "I CAN apply integrated analysis to combined global issues under exam conditions.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Unit 4: integrated practice",
  ],
  vocabulary: [
    {
      term: "Integrated analysis",
      definition:
        "Weighing multiple issues, stakeholders and evidence together.",
    },
    { term: "Trade-off", definition: "Giving up one benefit to gain another." },
    {
      term: "Opportunity cost",
      definition: "What is forgone when choosing one option.",
    },
    { term: "Win-win", definition: "Outcome benefiting all parties." },
    { term: "Zero-sum", definition: "One party's gain is another's loss." },
    {
      term: "Pareto improvement",
      definition: "Change making someone better off without harming others.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u4l11-c1-integrated",
      title: "Integrated issue analysis",
      skill:
        "Weigh trade-offs, stakeholders and evidence across combined issues.",
      lesson: {
        sections: [
          {
            heading: "Trade-offs in policy",
            body: "Global issues involve **trade-offs** — you can't maximise everything. **Opportunity cost** = what you give up. Some choices are **zero-sum** (fixed pie), others allow **win-win** or **Pareto improvements** (everyone better off). Recognising which applies shapes your evaluation.",
          },
          {
            heading: "Multi-issue analysis",
            body: "Strong answers connect issues: a climate policy affects jobs (economy), health (pollution) and migration (livelihoods). Map stakeholders → impacts → evidence → evaluation. Avoid treating issues as isolated boxes.",
          },
        ],
        keyFormulas: [
          { name: "Trade-off", statement: "Giving up one benefit for another" },
          {
            name: "Zero-sum vs win-win",
            statement: "Fixed pie vs expandable pie",
          },
          {
            name: "Stakeholder map",
            statement: "Who gains, who loses, who decides",
          },
        ],
        workedExample: {
          problem: "Is renewable energy a win-win?",
          solution:
            "For consumers and climate, partly yes; but fossil-fuel workers and regions face transition costs — a trade-off requiring 'just transition' support.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l11c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'trade-off'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A loss" },
              { id: "b", text: "A compromise" },
              { id: "c", text: "A gain" },
              { id: "d", text: "Giving up one benefit to gain another" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trade-off",
                statement: "Sacrifice for gain.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Giving up one for another",
            commonErrors: ["Confusing with compromise."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'opportunity cost'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opportunity cost",
                statement: "What is forgone when choosing.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "The value of the next-best alternative forgone — e.g. choosing to spend aid on schools means less for healthcare.",
            commonErrors: ["Confusing with total cost."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish 'zero-sum' from 'win-win' with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Zero-sum vs win-win",
                statement: "Fixed vs expandable pie.",
              },
            ],
            steps: [
              {
                reasoning: "Zero-sum defined + example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Win-win defined + example.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear contrast.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Zero-sum: dividing a fixed budget — one ministry's gain is another's loss. Win-win: trade agreement expanding both economies' markets.",
            commonErrors: ["Treating all choices as zero-sum."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse the trade-offs in a country choosing between coal mining jobs and climate commitments.",
          parts: [
            { label: "a", prompt: "Economic trade-off", marks: 2 },
            { label: "b", prompt: "Environmental trade-off", marks: 2 },
            { label: "c", prompt: "Balanced policy response", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transition trade-offs",
                statement: "Jobs now vs climate future; just transition.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "e.g. mining jobs vs stranded assets; transition costs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Regional dependence on coal.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. emissions vs economic growth; health co-benefits.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Intergenerational dimension.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "e.g. just transition fund, retraining, phased approach.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Balanced feasible policy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) jobs/regions vs stranded assets (b) emissions vs growth; health co-benefits (c) just transition: retraining, diversification, phased coal phase-out",
            commonErrors: ["One-sided or no policy response."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'Pareto improvement'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pareto improvement",
                statement: "Someone better off, no one worse off.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A change making at least one person better off without making anyone worse off — e.g. eliminating a market distortion that benefits all parties.",
            commonErrors: ["Confusing with any improvement."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of a 'win-win' outcome in global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Win-win",
                statement: "Both parties better off.",
              },
            ],
            steps: [
              { reasoning: "Valid example.", marks: 1, markCode: "M" },
              { reasoning: "Why both benefit.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. malaria nets: donors gain health-security benefits, recipients gain lives saved — or trade deals expanding both economies.",
            commonErrors: ["Example where one side clearly loses."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'integrated analysis'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Studying one issue deeply" },
              {
                id: "b",
                text: "Weighing multiple issues, stakeholders and evidence together",
              },
              { id: "c", text: "Making a decision" },
              { id: "d", text: "Listing facts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Integrated analysis",
                statement: "Multi-issue, multi-stakeholder.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Weighing multiple issues together",
            commonErrors: ["Confusing with simple analysis."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why 'quick fixes' for global issues often fail.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quick fix fallacy",
                statement: "Ignores interlinkages, institutions, time.",
              },
            ],
            steps: [
              { reasoning: "Interlinkage ignored.", marks: 1, markCode: "M" },
              { reasoning: "Institutional weakness.", marks: 1, markCode: "M" },
              {
                reasoning: "Short vs long-term mismatch.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs complexity.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Quick fixes ignore interlinkages, weak institutions and long-term feedback — e.g. food aid without addressing agricultural systems creates dependency rather than food security.",
            commonErrors: ["One-sided or superficial."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why must policy evaluation consider 'second-order effects'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second-order effects",
                statement: "Unintended consequences.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Policies have consequences beyond their goals — e.g. anti-poaching patrols may displace hunting rather than stop it; ignoring these means 'solutions' create new problems.",
            commonErrors: ["Only first-order effects considered."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'stakeholder mapping' in issue analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder mapping",
                statement: "Identifying who is affected and how.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Systematically identifying all groups affected by an issue — their interests, impacts and power — essential for balanced judgement.",
            commonErrors: ["Listing without analysis."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'opportunity cost' in policy analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cost of administration" },
              { id: "b", text: "The risk of failure" },
              { id: "c", text: "The financial price of a policy" },
              {
                id: "d",
                text: "The benefit forgone by choosing one option over the next-best",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opportunity cost",
                statement: "Next-best alternative forgone.",
              },
            ],
            steps: [
              { reasoning: "Opportunity cost = best alternative lost.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Benefit forgone by choosing one option",
            commonErrors: ["Confusing with direct costs."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish a zero-sum trade-off from a win-win outcome.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Zero-sum vs win-win",
                statement: "Fixed pie vs expandable pie.",
              },
            ],
            steps: [
              {
                reasoning: "Zero-sum: one side's gain is another's loss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Win-win: both sides gain — e.g. emissions trading with credits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Zero-sum = fixed pie where gains and losses balance; win-win = expandable outcomes where all parties benefit.",
            commonErrors: ["Assuming all trade-offs are zero-sum."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A policy option gives up $5 million of benefits to gain $8 million. What is the net gain?",
          response: {
            type: "numeric",
            parts: [{ label: "Net gain ($m)", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Net benefit",
                statement: "Gain minus forgone benefit.",
              },
            ],
            steps: [
              { reasoning: "8 - 5 = $3m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3 million",
            commonErrors: ["Ignoring the forgone benefit."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A stakeholder map covers 3 groups, each affected in 2 ways. How many stakeholder-impact cells are mapped?",
          response: {
            type: "numeric",
            parts: [{ label: "Cells", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Stakeholder mapping",
                statement: "Groups x impacts.",
              },
            ],
            steps: [
              { reasoning: "3 x 2 = 6 cells.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
            commonErrors: ["Counting only groups."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of a win-win solution to a global issue and explain why it qualifies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Win-win solutions",
                statement: "Both sides gain from the outcome.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. emissions trading: polluters cut emissions, others profit from credits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both parties benefit — environment and economy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Recognises win-win ≠ zero-sum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. emissions trading — firms reduce emissions while trading credits for profit; both environment and economy gain.",
            commonErrors: ["Claiming every solution is zero-sum."],
          },
        },
        {
          id: "ciegp-q-u4l11c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse the trade-offs in a proposed 'carbon border tax' on imports from high-emission countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy trade-offs",
                statement: "Climate gains vs trade/equity costs.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit: pressures exporters to cut emissions; prevents leakage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cost: raises prices for consumers; hurts poor exporters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stakeholders: domestic firms, consumers, developing exporters, climate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: effective if exemptions for least-developed protect equity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reduces carbon leakage but raises costs and hits poor exporters; justified only with equity exemptions.",
            commonErrors: ["One-sided climate benefit without trade costs."],
          },
        },
      ],
    },
    {
      id: "ciegp-u4l11-c2-practice",
      title: "Exam practice: integrated scenarios",
      skill: "Apply analysis to realistic multi-issue scenarios.",
      lesson: {
        sections: [
          {
            heading: "Scenario approach",
            body: "Exam questions often present a scenario requiring integrated analysis. Approach: identify the issues → stakeholders → evidence → evaluate → conclude. Don't just describe the scenario; analyse it.",
          },
        ],
      },
      questions: [
        {
          id: "ciegp-q-u4l11c2-1",
          difficulty: "core",
          totalMarks: 4,
          stem: "A country plans to build a large dam for hydropower and irrigation. Analyse the trade-offs.",
          parts: [
            { label: "a", prompt: "Benefits", marks: 1 },
            { label: "b", prompt: "Costs", marks: 1 },
            { label: "c", prompt: "Stakeholders affected", marks: 1 },
            { label: "d", prompt: "Balanced recommendation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Scenario analysis",
                statement: "Benefits, costs, stakeholders, judgement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "e.g. clean energy, irrigation, flood control.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "e.g. displacement, ecosystem loss, debt.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "e.g. displaced communities, downstream users, taxpayers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Qualified recommendation weighing both.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) clean energy/irrigation (b) displacement/ecosystem/debt (c) displaced, downstream, taxpayers (d) proceed only with mitigation + compensation",
            commonErrors: ["Only benefits or only costs."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-2",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A multinational corporation offers a poor country a factory providing 5,000 jobs but with weak environmental standards. Evaluate.",
          parts: [
            { label: "a", prompt: "Benefits for the country", marks: 2 },
            { label: "b", prompt: "Costs/risks", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FDI trade-offs",
                statement: "Jobs/investment vs environmental/social costs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "e.g. jobs, skills, tax revenue, technology transfer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Development impact.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "e.g. pollution, labour exploitation, dependency.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Long-term risks.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Accept with conditions: enforce standards, local content.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Weighed conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "FDI offers jobs and revenue but weak standards risk pollution and exploitation — accept conditionally with enforceable environmental and labour standards.",
            commonErrors: ["One-sided or no conditions."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A government must choose between subsidising fossil fuels (cheap energy, jobs) or renewables (cleaner, future-proof). Analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy choice",
                statement: "Short-term costs vs long-term benefits.",
              },
            ],
            steps: [
              { reasoning: "Fossil fuel case.", marks: 1, markCode: "M" },
              { reasoning: "Renewable case.", marks: 1, markCode: "M" },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fossil fuels offer immediate cheap energy and jobs but lock in emissions and stranded assets; renewables cost more now but avoid climate damages — phased transition with support for affected workers is fairest.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-4",
          difficulty: "core",
          totalMarks: 3,
          stem: "An NGO proposes cash transfers to the poor instead of food aid. Compare the approaches.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash vs in-kind aid",
                statement: "Flexibility vs control/specificity.",
              },
            ],
            steps: [
              { reasoning: "Cash advantages.", marks: 1, markCode: "M" },
              { reasoning: "Cash disadvantages.", marks: 1, markCode: "M" },
              {
                reasoning: "Context-dependent judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cash gives recipients choice and supports local markets but risks misuse; food aid ensures nutrition but is costlier and less flexible — cash often better where markets function.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A country discovers significant oil reserves. Analyse the 'resource curse' risk and how to avoid it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resource curse",
                statement:
                  "Wealth can fuel corruption/conflict; institutions prevent it.",
              },
            ],
            steps: [
              { reasoning: "Risk mechanisms.", marks: 1, markCode: "M" },
              { reasoning: "Historical examples.", marks: 1, markCode: "M" },
              { reasoning: "Preventive measures.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Oil can fund corruption, conflict and Dutch disease; avoiding the curse requires transparent revenue management (sovereign wealth funds), institutional checks and diversification before extraction peaks.",
            commonErrors: ["Assuming resources = automatic development."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might 'win-win' framing be misleading in international negotiations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negotiation framing",
                statement: "Win-win rhetoric can mask unequal gains.",
              },
            ],
            steps: [
              {
                reasoning: "Asymmetric gains possible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Power affects distribution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "'Win-win' can hide that gains are unevenly distributed — powerful parties capture more value; genuine win-win requires checking who benefits most.",
            commonErrors: ["Accepting framing uncritically."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'policy coherence' in global issues?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Policy coherence",
                statement: "Policies across sectors don't contradict.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ensuring policies across sectors don't work against each other — e.g. trade policy shouldn't undermine climate commitments; incoherent policies waste resources.",
            commonErrors: ["Confusing with efficiency generally."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A city must choose between building a motorway (jobs, connectivity) or a light rail system (cleaner, less disruptive). Analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Infrastructure choice",
                statement: "Short-term benefits vs long-term sustainability.",
              },
            ],
            steps: [
              { reasoning: "Motorway case.", marks: 1, markCode: "M" },
              { reasoning: "Light rail case.", marks: 1, markCode: "M" },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Motorway offers immediate connectivity and jobs but induces demand and emissions; light rail is cleaner and sustainable but costlier upfront — long-term sustainability favours rail if funding allows.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate 'voluntourism' — young people paying to volunteer abroad — as development aid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Voluntourism critique",
                statement:
                  "Benefits volunteers/organisers more than communities.",
              },
            ],
            steps: [
              { reasoning: "Potential benefits.", marks: 1, markCode: "M" },
              { reasoning: "Costs/harms.", marks: 1, markCode: "M" },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Voluntourism can bring skills and funds but often benefits volunteers' CVs more than communities — unskilled labour can displace local workers; ethical versions require community-led design.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A country must decide whether to prioritise debt repayment or social spending. Analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debt vs social spending",
                statement: "Creditor obligations vs domestic welfare.",
              },
            ],
            steps: [
              { reasoning: "Debt repayment case.", marks: 1, markCode: "M" },
              { reasoning: "Social spending case.", marks: 1, markCode: "M" },
              { reasoning: "Interaction effects.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Debt repayment maintains credit access but cuts services that affect the poor most; social spending addresses needs but risks default — IMF-style conditionality attempts balance but often imposes austerity harms.",
            commonErrors: ["One-sided or no interaction analysis."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the recommended first step when facing an integrated scenario question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choose the easiest issue only" },
              { id: "b", text: "Start writing immediately" },
              {
                id: "c",
                text: "Identify the issues embedded in the scenario",
              },
              { id: "d", text: "List all possible topics" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Scenario approach",
                statement: "Issues→stakeholders→evidence→evaluate→conclude.",
              },
            ],
            steps: [
              { reasoning: "Identify issues first before analysing.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Identify the issues",
            commonErrors: ["Jumping to conclusions without identifying issues."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does merely describing a scenario score poorly in GP?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Analysis requirement",
                statement: "Marks reward analysis, not description.",
              },
            ],
            steps: [
              {
                reasoning: "Description repeats what the scenario says — no added value.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analysis applies frameworks, weighs evidence, reaches judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Description adds nothing; the exam rewards applying frameworks, weighing perspectives and judging.",
            commonErrors: ["Summarising the scenario instead of analysing it."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A scenario contains 4 distinct issues but the candidate addresses only 3. What percentage of issues are covered?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage covered", answer: 75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Issue coverage",
                statement: "Addressed/total x 100.",
              },
            ],
            steps: [
              { reasoning: "3/4 x 100 = 75%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Missing one issue loses significant marks."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A dam project gives $2 billion in benefits but costs $1.2 billion in construction and $0.3 billion in resettlement. What is the net benefit?",
          response: {
            type: "numeric",
            parts: [{ label: "Net benefit ($bn)", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Project costing",
                statement: "Benefits minus all costs.",
              },
            ],
            steps: [
              { reasoning: "2 - 1.2 - 0.3 = $0.5bn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5 billion",
            commonErrors: ["Forgetting resettlement costs."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can you quickly identify the issues and stakeholders embedded in an exam scenario?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Scenario decoding",
                statement: "Underline actors and effects.",
              },
            ],
            steps: [
              {
                reasoning: "Underline named actors/groups affected.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Identify the issue domains (economy, environment, health).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Note stated and implied trade-offs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Underline actors, map issue domains and flag stated/implied trade-offs before writing.",
            commonErrors: ["Treating scenario as one single issue."],
          },
        },
        {
          id: "ciegp-q-u4l11c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "'A country plans a large dam for hydropower and irrigation. Analyse the trade-offs.' Cover benefits, costs, stakeholders and a balanced recommendation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Scenario analysis",
                statement: "Benefits+costs+stakeholders+recommendation.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: clean energy, irrigation, flood control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Costs: displacement, ecosystem loss, debt.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stakeholders: displaced communities, farmers, energy sector, downstream users.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Recommendation: proceed only with compensation and environmental safeguards.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dam gives energy/irrigation but displaces people and harms ecosystems; proceed only with fair compensation and safeguards.",
            commonErrors: ["One-sided benefits or costs only."],
          },
        },
      ],
    },
  ],
};
