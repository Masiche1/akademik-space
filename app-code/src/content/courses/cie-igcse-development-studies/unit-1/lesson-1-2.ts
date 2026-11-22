import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cieids-u1-lesson-1-2",
  code: "1-2",
  title: "Causes of underdevelopment",
  goal: "I CAN explain the physical, economic and social causes of underdevelopment.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 1: Development and underdevelopment",
  ],
  vocabulary: [
    {
      term: "Colonialism",
      definition:
        "Historical rule by foreign powers that extracted resources and disrupted local economies.",
    },
    {
      term: "Debt",
      definition:
        "Money owed by a country — often to foreign lenders or institutions — consuming resources needed for development.",
    },
    {
      term: "Dependency",
      definition:
        "The idea that poor countries are kept poor by their dependence on rich countries and unfair trade.",
    },
    {
      term: "Population pressure",
      definition:
        "Rapid population growth outpacing economic growth, straining resources.",
    },
    {
      term: "Infrastructure",
      definition:
        "Basic systems — roads, electricity, water, schools — needed for economic activity.",
    },
    {
      term: "Terms of trade",
      definition:
        "The ratio of export prices to import prices — declining terms hurt exporters.",
    },
  ],
  concepts: [
    {
      id: "cieids-u1-causes",
      title: "Why countries remain underdeveloped",
      skill:
        "Explain the range of causes of underdevelopment and evaluate dependency theory.",
      lesson: {
        sections: [
          {
            heading: "Physical and economic causes",
            body: "Some countries face **physical barriers** — drought, poor soils, landlocked position, natural disasters. **Economic causes** include weak infrastructure, dependence on a few primary exports (low-value raw materials), **declining terms of trade** (exports worth less than imports), and heavy **debt burdens** diverting funds from development to interest payments.",
          },
          {
            heading: "Social and historical causes",
            body: "**Colonialism** disrupted traditional economies and created export-dependent structures. **Rapid population growth** outpaces job creation. **Corruption and weak governance** divert resources. **Conflict and instability** destroy infrastructure and deter investment. **Low education and health** limit human capital — the skills needed for development.",
          },
          {
            heading: "Dependency theory",
            body: "Dependency theorists argue underdevelopment is not 'natural' but produced by the global system: **core** (rich) countries exploit **peripheral** (poor) countries through unequal trade, debt and investment. Poverty is maintained, not accidental — breaking free requires reducing dependence and building self-reliant economies.",
          },
        ],
        keyFormulas: [
          {
            name: "Cause clusters",
            statement:
              "Physical + economic + social + historical + global-system",
          },
          {
            name: "Dependency logic",
            statement:
              "Unequal trade + debt + investment → peripheral countries stay poor",
          },
        ],
        workedExample: {
          problem:
            "A country exports only coffee and pays huge debt interest. Explain its underdevelopment using dependency ideas.",
          solution:
            "Reliance on one low-value export means volatile prices and little diversification; debt payments drain resources; both reflect dependence on the global system rather than internal failure alone.",
        },
      },
      questions: [
        {
          id: "cieids-u1-cau-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Dependency theory argues that poor countries are kept poor mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Overpopulation alone" },
              { id: "b", text: "Unequal relationships with richer countries" },
              { id: "c", text: "Lack of natural resources" },
              { id: "d", text: "Their own lack of effort" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependency theory",
                statement:
                  "Underdevelopment produced by unequal global relationships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dependency theory blames the global system — unequal trade, debt and investment — not just internal factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Unequal relationships with richer countries.",
            commonErrors: [
              "Thinking dependency theory says poor countries are 'lazy' or 'backward'.",
            ],
          },
        },
        {
          id: "cieids-u1-cau-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two economic causes of underdevelopment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Economic causes",
                statement:
                  "Weak infrastructure, primary dependence, debt and declining terms of trade.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dependence on primary products: exporting raw materials earns little and prices fluctuate wildly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Debt burden: interest payments consume resources that could fund health, education and infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Declining terms of trade or weak infrastructure also trap economies in low productivity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Primary-product dependence and debt burdens drain resources needed for development.",
            commonErrors: [
              "Listing causes without explaining their economic mechanism.",
            ],
          },
        },
        {
          id: "cieids-u1-cau-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how colonialism contributed to underdevelopment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Colonial legacy",
                statement:
                  "Resource extraction and disrupted economies created lasting dependence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Colonial powers extracted resources and labour, building economies around export of raw materials.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Local industries and skills were suppressed; infrastructure built served extraction, not local development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After independence, countries inherited export-dependent structures and weak institutions — a lasting dependency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Colonialism created export-dependent economies and suppressed local development — a legacy persisting after independence.",
            commonErrors: [
              "Treating colonialism as purely historical without linking to present structures.",
            ],
          },
        },
        {
          id: "cieids-u1-cau-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate dependency theory as an explanation of underdevelopment.",
          parts: [
            {
              label: "a",
              prompt: "Explain dependency theory's argument.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate its strengths and weaknesses.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dependency theory",
                statement:
                  "Global system produces underdevelopment vs internal factors also matter.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Dependency theory: rich 'core' countries exploit poor 'periphery' through unequal trade, debt and investment.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Poverty is structurally produced — not a natural state — and maintained by the global system.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Solution: reduce dependence, diversify and build self-reliant economies.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Strength: explains why some resource-rich countries remain poor — the system, not just resources, matters.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Weakness: ignores internal factors — corruption, poor governance, conflict — that also cause underdevelopment.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: valuable for highlighting global inequality but incomplete alone — domestic policy matters too.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Global exploitation keeps periphery poor. (b) Explains structural poverty but ignores domestic governance failures.",
            commonErrors: [
              "Accepting or rejecting dependency theory without weighing internal vs external causes.",
            ],
          },
        },
        {
          id: "cieids-u1-cau-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of a physical cause of underdevelopment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strong public education" },
              { id: "b", text: "Recurrent drought and poor soils" },
              { id: "c", text: "Low population growth" },
              { id: "d", text: "A diversified manufacturing sector" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical cause",
                statement: "Natural conditions that limit economic activity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Drought and poor soils directly limit farming and food production.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Recurrent drought and poor soils.",
            commonErrors: ["Confusing physical causes with economic or social causes."],
          },
        },
        {
          id: "cieids-u1-cau-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Declining terms of trade means that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Import prices fall faster than export prices" },
              { id: "b", text: "Export prices fall relative to import prices" },
              { id: "c", text: "Export prices rise faster than import prices" },
              { id: "d", text: "Exports and imports become equal in value" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Terms of trade",
                statement: "The ratio of export prices to import prices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When export prices fall relative to import prices, each unit of exports buys fewer imports.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** Export prices fall relative to import prices.",
            commonErrors: ["Reversing the direction of the price change."],
          },
        },
        {
          id: "cieids-u1-cau-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Low levels of education and poor health hinder development mainly because they reduce:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Human capital and productivity" },
              { id: "b", text: "Demand for imported goods" },
              { id: "c", text: "Population density in cities" },
              { id: "d", text: "The country's land area" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Human capital",
                statement: "The skills, health and education of a population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Education and health build skills and a productive workforce needed for development.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Human capital and productivity.",
            commonErrors: ["Describing education and health as irrelevant to economic growth."],
          },
        },
        {
          id: "cieids-u1-cau-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A lasting economic effect of colonialism was the creation of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diversified manufacturing bases" },
              { id: "b", text: "Self-sufficient local industries" },
              { id: "c", text: "Export-dependent economic structures" },
              { id: "d", text: "Balanced rural and urban economies" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Colonial legacy",
                statement: "Colonial economies were organised around resource extraction and export.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Colonial rule prioritised exporting raw materials, leaving many countries dependent on primary exports.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Export-dependent economic structures.",
            commonErrors: ["Treating colonialism as having no lasting economic effects."],
          },
        },
        {
          id: "cieids-u1-cau-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In dependency theory, the 'periphery' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Landlocked countries only" },
              { id: "b", text: "Rich countries that set global rules" },
              { id: "c", text: "Countries with no international trade" },
              { id: "d", text: "Poor countries dependent on richer core countries" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Periphery",
                statement: "Poorer countries in a dependent relationship with richer core countries.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dependency theory contrasts the powerful core with dependent peripheral economies.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Poor countries dependent on richer core countries.",
            commonErrors: ["Confusing 'periphery' with geographical location rather than economic position."],
          },
        },
        {
          id: "cieids-u1-cau-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Corruption can hinder development mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Improving tax collection" },
              { id: "b", text: "Reducing population growth" },
              { id: "c", text: "Diverting public resources from services" },
              { id: "d", text: "Increasing foreign investment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Governance",
                statement: "Weak or corrupt governance diverts resources needed for development.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Corruption means funds meant for health, education and infrastructure are stolen or misused.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Diverting public resources from services.",
            commonErrors: ["Claiming corruption has no effect on public service delivery."],
          },
        },
        {
          id: "cieids-u1-cau-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country exports $2000000$ tonnes of coffee. The export price falls from $1200$ to $900$ per tonne. Calculate the loss in export earnings.",
          response: {
            type: "numeric",
            parts: [{ label: "Loss", answer: 600000000, unit: "USD" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Export earnings",
                statement: "Earnings = quantity exported × price per unit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Calculate the price fall first: $1200 - 900 = 300$ per tonne.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multiply the price fall by the quantity exported: $2000000 \\times 300 = 600000000$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "600000000 USD",
            commonErrors: ["Multiplying the new price by quantity instead of finding the loss."],
          },
        },
        {
          id: "cieids-u1-cau-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country's export price index is $80$ and its import price index is $100$. Calculate its terms of trade index.",
          response: {
            type: "numeric",
            parts: [{ label: "Terms of trade", answer: 80, unit: "index" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Terms of trade index",
                statement: "Terms of trade = (export price index ÷ import price index) × 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use the formula: export price index divided by import price index, then multiplied by 100.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Calculate: $80 / 100 = 0.8$, and $0.8 \\times 100 = 80$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "80",
            commonErrors: ["Dividing import prices by export prices instead."],
          },
        },
        {
          id: "cieids-u1-cau-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Government revenue is $40$ billion and debt interest payments are $12$ billion. Calculate debt interest as a percentage of revenue.",
          response: {
            type: "numeric",
            parts: [{ label: "Debt service share", answer: 30, unit: "%" }],
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
                  "Express the share as debt payments divided by revenue, then convert to a percentage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Calculate: $12 / 40 = 0.30$, so the share is $30$%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30%",
            commonErrors: ["Forgetting to multiply by 100 when converting to a percentage."],
          },
        },
        {
          id: "cieids-u1-cau-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A country's population is $50$ million and grows by $2.4$% in one year. Calculate the population increase.",
          response: {
            type: "numeric",
            parts: [{ label: "Increase", answer: 1.2, unit: "million people" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Population increase",
                statement: "Increase = population × growth rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert the percentage growth rate to a decimal: $2.4$% = $0.024$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multiply by population: $50 \\times 0.024 = 1.2$ million people.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1.2 million people",
            commonErrors: ["Using 2.4 instead of 0.024 as the decimal growth rate."],
          },
        },
        {
          id: "cieids-u1-cau-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A country earns $65$% of export revenue from primary products. Total export revenue is $80$ billion. Calculate primary export earnings.",
          response: {
            type: "numeric",
            parts: [{ label: "Primary export earnings", answer: 52, unit: "billion" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Primary export share",
                statement: "Primary earnings = total exports × primary share.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert $65$% to a decimal: $0.65$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Set up the calculation: $80 \\times 0.65$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Calculate: $80 \\times 0.65 = 52$ billion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "52 billion",
            commonErrors: ["Calculating $65$% of $100$ instead of using total export revenue."],
          },
        },
        {
          id: "cieids-u1-cau-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the view that external causes explain most underdevelopment.",
          parts: [
            {
              label: "a",
              prompt: "Explain two external causes of underdevelopment.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate the role of internal causes.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Causes of underdevelopment",
                statement:
                  "External dependence and internal governance both shape development outcomes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Unequal trade and declining terms of trade reduce export earnings for poor countries.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Debt burdens and dependence on foreign investment or aid can constrain policy choices.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "These external factors support the view that the global system helps maintain underdevelopment.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Internal causes such as corruption, conflict and weak institutions also block development independently.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Some countries facing similar external pressures have developed, showing domestic policy matters.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: external causes are significant, but internal governance and policy are also essential explanations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Unequal trade, debt and dependence support external explanations. (b) Corruption, conflict and weak institutions show internal causes also matter.",
            commonErrors: ["Arguing only external or only internal causes without weighing both."],
          },
        },
      ],
    },
  ],
};
