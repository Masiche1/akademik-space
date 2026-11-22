import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cieids-u2-lesson-2-2",
  code: "2-2",
  title: "Aid and debt",
  goal: "I CAN explain the role of aid and debt in development and evaluate their effectiveness.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 2: Development strategies",
  ],
  vocabulary: [
    {
      term: "Aid",
      definition:
        "Resources transferred from rich to poor countries — grants, loans, food, technical help.",
    },
    {
      term: "ODA",
      definition:
        "Official Development Assistance — government aid targeting development.",
    },
    {
      term: "Debt",
      definition: "Money borrowed that must be repaid with interest.",
    },
    {
      term: "Debt relief",
      definition: "Cancellation or reduction of a country's debts.",
    },
    {
      term: "Tied aid",
      definition:
        "Aid requiring the recipient to spend it on goods/services from the donor country.",
    },
    {
      term: "Sustainable development",
      definition:
        "Meeting present needs without compromising future generations' ability to meet theirs.",
    },
  ],
  concepts: [
    {
      id: "cieids-u2-aiddebt",
      title: "Aid, debt and development",
      skill:
        "Evaluate the roles of aid and debt relief in promoting development.",
      lesson: {
        sections: [
          {
            heading: "Types and purposes of aid",
            body: "**ODA** includes grants (no repayment), loans (repayable) and in-kind aid (food, medicine). Aid funds infrastructure, health, education and emergency relief. **Tied aid** must be spent on donor-country goods — boosting donor exports but often inefficient for recipients. **Conditional aid** requires policy changes (e.g. privatisation) that may not suit local needs.",
          },
          {
            heading: "The debt problem",
            body: "Many developing countries borrowed heavily in the 1970s-80s but couldn't repay when commodity prices fell and interest rates rose — creating a **debt crisis**. Debt payments consume resources needed for health, education and investment. **Debt relief** (e.g. HIPC initiative) cancels debts of the poorest countries, freeing funds for development — but critics argue it rewards bad governance.",
          },
          {
            heading: "Does aid work?",
            body: "Aid can be **effective** — vaccination campaigns, school building, disaster relief save lives and build capacity. But it can also be **ineffective** — corrupt governments embezzle funds, tied aid wastes resources on unsuitable projects, and aid dependence can undermine local production. Evidence suggests aid works best when targeted at governance, health and education in stable environments.",
          },
        ],
        keyFormulas: [
          {
            name: "Aid forms",
            statement:
              "Grants + loans + in-kind; tied or untied; conditional or not",
          },
          {
            name: "Debt trap",
            statement:
              "Borrow → can't repay → debt service crowds out development spending",
          },
        ],
        workedExample: {
          problem:
            "A country spends 30% of its budget on debt interest. What is the opportunity cost?",
          solution:
            "That 30% could fund health clinics, schools or infrastructure — debt service crowds out development spending, slowing progress.",
        },
      },
      questions: [
        {
          id: "cieids-u2-ad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Tied aid is aid that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is given as a grant with no strings" },
              { id: "b", text: "Requires political reforms" },
              { id: "c", text: "Is only food aid" },
              {
                id: "d",
                text: "Must be spent on goods/services from the donor country",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tied aid",
                statement:
                  "Aid conditional on purchasing from the donor country.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tied aid benefits donor exporters but may be inefficient for recipients who could buy cheaper elsewhere.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Must be spent on donor-country goods/services.",
            commonErrors: [
              "Confusing tied aid with conditional aid (policy conditions).",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a heavy debt burden can prevent development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debt trap",
                statement:
                  "Debt service crowds out development spending and deters investment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interest and principal payments consume a large share of government revenue and export earnings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Money that could fund health, education and infrastructure is diverted to creditors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "High debt also deters new investment and keeps countries dependent on further borrowing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Debt payments crowd out development spending and trap countries in a cycle of borrowing.",
            commonErrors: [
              "Saying debt is always bad — productive borrowing can help; unmanageable debt is the problem.",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of how aid can support development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Aid contributions",
                statement:
                  "Health, education, infrastructure and emergency relief.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Health aid: vaccination campaigns, clinics and medicines reduce disease and improve life expectancy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Education/infrastructure: building schools, training teachers and funding roads enables long-term development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Emergency relief: food aid in famines saves lives immediately, though it is short-term.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Health programmes, education/infrastructure and emergency relief.",
            commonErrors: [
              "Only mentioning emergency relief without development-oriented aid.",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that aid is essential for developing countries.",
          parts: [
            {
              label: "a",
              prompt: "Give two arguments that aid is necessary.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate arguments that aid can be ineffective or harmful.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Aid debate",
                statement:
                  "Life-saving resource transfer vs dependency, corruption and inefficiency.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Poor countries lack capital for health, education and infrastructure — aid fills the gap.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Emergency aid prevents famine and disease — immediate life-saving that markets cannot provide.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Technical assistance transfers skills and knowledge poor countries lack.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Ineffective: corruption embezzles funds; tied aid wastes money on unsuitable donor goods.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Harmful: aid dependence can undermine local production and create reliance.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: aid is necessary but not sufficient — effectiveness depends on governance, targeting and accountability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Fills resource gaps, saves lives, transfers skills. (b) Corruption, tied aid, dependency — works only with good governance.",
            commonErrors: [
              "One-sided verdict on aid without weighing conditions.",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of a grant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aid that must be spent on donor-country goods" },
              { id: "b", text: "Money borrowed at interest and repaid later" },
              {
                id: "c",
                text: "Aid transferred free of charge with no repayment required",
              },
              { id: "d", text: "Aid that requires the recipient to adopt policy changes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Grant",
                statement: "Aid transferred with no repayment required.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A grant is the most generous form of aid — it does not have to be repaid, unlike a loan.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Aid transferred free of charge with no repayment required.",
            commonErrors: [
              "Confusing a grant (no repayment) with a loan (repayable with interest).",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A government earns $60$ billion in revenue and spends $15$ billion repaying debt interest. Calculate debt interest as a percentage of revenue.",
          response: {
            type: "numeric",
            parts: [{ label: "Debt interest share", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Debt service share",
                statement: "Debt payments ÷ government revenue × 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide debt interest by revenue: $15 / 60 = 0.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convert to a percentage: $0.25 \\times 100 = 25$%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25%",
            commonErrors: ["Forgetting to multiply by 100 when converting to a percentage."],
          },
        },
        {
          id: "cieids-u2-ad-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what is meant by 'conditional aid'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conditional aid",
                statement:
                  "Aid given only if the recipient adopts specified policies or reforms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Conditional aid requires the recipient to make policy changes, such as privatisation or austerity measures, before or while receiving funds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The conditions may reflect donor priorities and may not suit local needs, so effectiveness can be limited.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Aid that requires the recipient to adopt particular policies or reforms as a condition of receiving it.",
            commonErrors: [
              "Confusing conditional aid (policy requirements) with tied aid (spending on donor goods).",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Debt relief is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repaying debts using food aid" },
              { id: "b", text: "Borrowing more money to repay old debts" },
              { id: "c", text: "Requiring richer countries to take out new loans" },
              { id: "d", text: "Cancellation or reduction of a country's debts" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debt relief",
                statement: "Cancellation or reduction of a country's debts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Debt relief frees resources previously spent on debt service so they can fund development instead.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Cancellation or reduction of a country's debts.",
            commonErrors: [
              "Confusing debt relief with debt restructuring (new loans replacing old ones).",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country receives $500$ million in aid. Its government allocates $40$% to health and $25$% to education. Calculate the amount allocated to education.",
          response: {
            type: "numeric",
            parts: [{ label: "Education allocation", answer: 125, unit: "million USD" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Aid allocation",
                statement: "Allocation = total aid × percentage share.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert the education share to a decimal: $25$% = $0.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multiply by total aid: $500 \\times 0.25 = 125$ million USD.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "125 million USD",
            commonErrors: [
              "Using the health share ($40$%) instead of the education share.",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why tied aid may be less effective for recipients than untied aid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tied aid inefficiency",
                statement:
                  "Forced purchases from donors may be overpriced or unsuitable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tied aid must be spent on goods and services from the donor country, even if cheaper or more suitable alternatives exist elsewhere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The recipient cannot choose the most appropriate goods, so resources may be wasted on unsuitable or overpriced items.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The main benefit accrues to donor exporters rather than to development outcomes in the recipient country.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Recipients are forced to buy donor goods that may be expensive or unsuitable, reducing the development value of the aid.",
            commonErrors: [
              "Saying tied aid is always worthless — it still transfers resources, just less efficiently.",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best explains why some argue that debt relief rewards bad governance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Relief is only ever given to rich countries" },
              {
                id: "b",
                text: "Relief lets corrupt governments escape consequences and borrow again",
              },
              { id: "c", text: "Relief causes interest rates to rise sharply" },
              { id: "d", text: "Relief reduces a country's export earnings" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Debt relief critique",
                statement:
                  "Moral hazard: relief may reduce incentives for responsible borrowing and governance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Critics argue relief removes the consequences of mismanagement, so governments have less incentive to borrow responsibly.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Relief lets corrupt governments escape consequences and borrow again.",
            commonErrors: [
              "Thinking the critique is that relief is too expensive rather than that it creates bad incentives.",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A country of $40$ million people receives $800$ million of aid in one year. Calculate aid per person.",
          response: {
            type: "numeric",
            parts: [{ label: "Aid per person", answer: 20, unit: "USD" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Aid per capita",
                statement: "Aid per person = total aid ÷ population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide total aid by population: $800 \\div 40 = 20$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both figures are in millions, so the units cancel to give USD per person.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20 USD",
            commonErrors: [
              "Dividing population by aid instead of aid by population.",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an example of in-kind aid?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Food, medicine or equipment donated rather than money",
              },
              { id: "b", text: "Cash grants for building schools" },
              { id: "c", text: "Loans repaid with interest" },
              { id: "d", text: "Aid conditional on privatisation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "In-kind aid",
                statement: "Aid given as goods or services rather than money.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In-kind aid takes the form of physical goods — food, medicine, equipment — instead of cash.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Food, medicine or equipment donated rather than money.",
            commonErrors: [
              "Confusing in-kind aid (goods) with cash grants.",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why aid may fail to promote development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Aid failure",
                statement:
                  "Corruption, unsuitable conditions and dependency can undermine aid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Corruption: funds meant for health, education and infrastructure may be embezzled by officials.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Tied or conditional aid may fund unsuitable projects or force policies that do not fit local needs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Aid dependence can undermine local production and leave countries reliant on continued transfers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Corruption/embezzlement, unsuitable tied or conditional projects, and aid dependence undermining local production.",
            commonErrors: [
              "Only giving one reason when two are required.",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Aid is most likely to be effective when it is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Targeted at health, education and governance in stable environments",
              },
              { id: "b", text: "Given only as emergency food aid" },
              { id: "c", text: "Repaid by the recipient with high interest" },
              {
                id: "d",
                text: "Tied to donor exports and given with no conditions",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Effective aid",
                statement:
                  "Aid works best when targeted at health, education and governance in stable settings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence shows aid achieves lasting results when it builds capacity in health, education and institutions rather than funding one-off projects.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(b) Targeted at health, education and governance in stable environments.",
            commonErrors: [
              "Assuming more aid automatically means better development outcomes.",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that 'aid does more harm than good to developing countries'.",
          parts: [
            {
              label: "a",
              prompt: "Give two ways in which aid can harm a developing country.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate the overall claim that aid does more harm than good.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Aid harm debate",
                statement:
                  "Dependency, corruption and distortion versus life-saving benefits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Aid dependence can undermine local production and make countries reliant on continued transfers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Corruption can embezzle funds and tied or conditional aid can fund unsuitable projects.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Large inflows can distort exchange rates or local markets, harming exporters and farmers.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Harm is real but not inevitable — it depends on governance, targeting and accountability.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Aid also saves lives and builds capacity, so 'more harm than good' is too strong a blanket claim.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: aid is a tool whose net effect depends on how it is given and managed, not inherently harmful.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Dependency, corruption, market distortion. (b) Harm is conditional, not inherent — aid can help or hurt depending on governance and design.",
            commonErrors: [
              "Accepting the claim uncritically without weighing aid's benefits.",
            ],
          },
        },
      ],
    },
  ],
};
