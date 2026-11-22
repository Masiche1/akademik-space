import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ciegp-u4-lesson-4-1",
  code: "4-1",
  title: "Global Issues in Depth: Climate, Inequality and Conflict",
  goal: "I CAN analyse major global issues with evidence, multiple perspectives and evaluation for IGCSE GP.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Unit 4: global issue analysis",
  ],
  vocabulary: [
    { term: "Anthropogenic", definition: "Caused or influenced by humans." },
    {
      term: "Externality",
      definition:
        "A cost or benefit affecting third parties outside a transaction.",
    },
    {
      term: "Structural inequality",
      definition: "Inequality embedded in institutions and systems.",
    },
    {
      term: "Fragile state",
      definition: "A state with weak institutions vulnerable to conflict.",
    },
    {
      term: "Tragedy of the commons",
      definition:
        "Overuse of shared resources because benefits are private but costs shared.",
    },
    {
      term: "Push-pull factors",
      definition:
        "Forces driving migration: conditions pushing people out and attracting them elsewhere.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u4l1-c1-climate",
      title: "Climate change as a global issue",
      skill:
        "Analyse climate change causes, impacts, stakeholders and responses.",
      lesson: {
        sections: [
          {
            heading: "Causes and mechanisms",
            body: "Climate change is driven by **greenhouse gas emissions** — mainly CO₂ from burning fossil fuels, deforestation and industrial processes. These gases trap heat (the **enhanced greenhouse effect**). Feedback loops such as ice-albedo feedback and permafrost methane release can amplify warming. It is anthropogenic and global in scale.",
          },
          {
            heading: "Impacts and responses",
            body: "Impacts include sea-level rise, extreme weather, crop failures and displacement — hitting low-income countries hardest despite their low emissions (**climate injustice**). Responses range from mitigation (emissions cuts, renewables) to adaptation (sea walls, drought crops). The Paris Agreement aims to limit warming well below 2°C. Tensions: economic growth vs emissions, equity between developed and developing nations, free-rider problems in global agreements.",
          },
        ],
        keyFormulas: [
          {
            name: "Enhanced greenhouse effect",
            statement:
              "GHGs trap outgoing infrared radiation, raising global temperature",
          },
          {
            name: "Climate injustice",
            statement:
              "Those least responsible suffer most from climate impacts",
          },
          {
            name: "Mitigation vs adaptation",
            statement: "Mitigation reduces causes; adaptation reduces impacts",
          },
        ],
        workedExample: {
          problem: "Why is climate change a 'tragedy of the commons'?",
          solution:
            "The atmosphere is a shared resource. Each emitter gains privately from cheap fossil fuels while the warming cost is borne by everyone — so individual incentives favour overuse unless collective rules (e.g. carbon pricing, treaties) align them.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main human cause of climate change?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Greenhouse gas emissions from burning fossil fuels",
              },
              { id: "b", text: "Volcanic eruptions alone" },
              { id: "c", text: "Solar flares" },
              { id: "d", text: "Ocean tides" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climate change cause",
                statement:
                  "Anthropogenic GHG emissions, mainly CO₂ from fossil fuels.",
              },
            ],
            steps: [
              {
                reasoning: "Fossil fuel burning is the dominant driver.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Greenhouse gas emissions",
            commonErrors: [
              "Choosing natural causes — they contribute but are not the main driver.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain what 'climate injustice' means.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climate injustice",
                statement:
                  "Low-emitting, low-income countries suffer the worst impacts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identifies the mismatch between responsibility and impact.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Notes equity dimension.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Countries that contributed least to emissions often face the most severe climate impacts, raising equity concerns.",
            commonErrors: [
              "Describing impacts only, without the equity angle.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between climate change mitigation and adaptation, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitigation vs adaptation",
                statement:
                  "Mitigation reduces emissions; adaptation reduces vulnerability to impacts.",
              },
            ],
            steps: [
              {
                reasoning: "Defines mitigation correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Defines adaptation correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gives a valid example of each.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mitigation: cutting emissions, e.g. renewable energy. Adaptation: coping with impacts, e.g. sea walls or drought-resistant crops.",
            commonErrors: ["Reversing the two terms."],
          },
        },
        {
          id: "ciegp-q-u4l1c1-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain why climate change is described as a 'tragedy of the commons'.",
          parts: [
            { label: "a", prompt: "What is the commons here?", marks: 1 },
            {
              label: "b",
              prompt: "Why do individual actors overuse it?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Why does this make solutions difficult?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Give one example of a collective solution.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tragedy of the commons",
                statement:
                  "Shared resource; private benefits, shared costs → overuse absent rules.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The atmosphere's capacity to absorb emissions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Each emitter gains cheaply while costs are spread.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "No single actor bears full cost of their emissions.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Free-rider problem; no central authority.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Requires voluntary cooperation among sovereign states.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "e.g. Paris Agreement, carbon pricing, emissions trading.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) atmosphere (b) private gain, shared cost (c) free-riding, no global regulator (d) Paris Agreement / carbon pricing",
            commonErrors: [
              "Treating it as a market failure only, missing the global governance dimension.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l1c1-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which feedback loop can amplify climate warming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ozone formation" },
              { id: "b", text: "Rainfall decreasing everywhere" },
              {
                id: "c",
                text: "Ice-albedo feedback: melting ice exposes darker surfaces that absorb more heat",
              },
              { id: "d", text: "Clouds always cooling the planet" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feedback loops",
                statement: "Processes that reinforce initial change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ice-albedo is a positive feedback amplifying warming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Ice-albedo feedback",
            commonErrors: ["Choosing a non-feedback process."],
          },
        },
        {
          id: "ciegp-q-u4l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do low-income countries often suffer most from climate impacts?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vulnerability",
                statement:
                  "Poverty, weak infrastructure and dependence on climate-sensitive sectors raise vulnerability.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies vulnerability factors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links to limited adaptive capacity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "They have fewer resources for adaptation, weaker infrastructure and economies dependent on agriculture — so the same shock hurts more.",
            commonErrors: [
              "Claiming they cause more emissions — the opposite is typically true.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the Paris Agreement aim to do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ban all fossil fuels immediately" },
              { id: "b", text: "Fund only developed countries" },
              {
                id: "c",
                text: "Limit global warming well below 2°C above pre-industrial levels",
              },
              { id: "d", text: "Create a world carbon tax enforced by the UN" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Paris Agreement",
                statement: "Global pact to limit warming well below 2°C.",
              },
            ],
            steps: [
              { reasoning: "Correct aim identified.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Limit warming well below 2°C",
            commonErrors: ["Overstating it as a binding emissions ban."],
          },
        },
        {
          id: "ciegp-q-u4l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate the claim: 'Developing countries should not have to cut emissions because they did not cause the problem.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate equity",
                statement:
                  "Historical responsibility vs current emissions; 'common but differentiated responsibilities'.",
              },
            ],
            steps: [
              {
                reasoning: "Acknowledges historical responsibility argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Notes current emissions are rising fastest in developing economies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Balanced judgement: differentiated targets with support.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Partly valid — historical responsibility is real, but today's emissions growth is concentrated in developing economies; equity suggests differentiated targets plus financial/tech support.",
            commonErrors: ["One-sided answer without weighing both sides."],
          },
        },
        {
          id: "ciegp-q-u4l1c1-9",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country argues that climate action will slow its economic growth. Analyse this tension.",
          parts: [
            {
              label: "a",
              prompt: "Why might emissions cuts threaten growth?",
              marks: 2,
            },
            { label: "b", prompt: "What counter-arguments exist?", marks: 2 },
            {
              label: "c",
              prompt: "Suggest a balanced policy response.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth vs climate",
                statement:
                  "Short-term costs vs long-term damages and green-economy opportunities.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Fossil fuels are cheap energy for industry/transport.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Transition costs: stranded assets, job losses.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Climate damages cost more long-term (GDP at risk).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Green jobs and efficiency gains possible.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "e.g. carbon pricing + green investment fund + just transition support.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Balanced, feasible policy judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) cheap energy, transition costs (b) damages cost more; green jobs (c) carbon pricing + green investment + transition support",
            commonErrors: ["Accepting one side without analysis."],
          },
        },
        {
          id: "ciegp-q-u4l1c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two stakeholders in climate policy and one interest of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholders",
                statement: "Groups affected by or affecting the issue.",
              },
            ],
            steps: [
              {
                reasoning: "Two valid stakeholders named.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each interest correctly identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. fossil fuel firms (profit/security of supply) and island nations (survival/sea-level rise).",
            commonErrors: ["Naming stakeholders without interests."],
          },
        },
        {
          id: "ciegp-q-u4l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is the main driver of human-caused climate change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Helium" },
              { id: "b", text: "Carbon dioxide (CO2)" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Nitrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Main GHG",
                statement: "CO2 from fossil fuels dominates emissions.",
              },
            ],
            steps: [
              { reasoning: "CO2 is the dominant anthropogenic GHG.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Carbon dioxide",
            commonErrors: ["Choosing oxygen — not a greenhouse gas driver."],
          },
        },
        {
          id: "ciegp-q-u4l1c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are international climate agreements prone to free-riding?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free-rider problem",
                statement: "Benefits shared, costs private → under-contribution.",
              },
            ],
            steps: [
              {
                reasoning: "Emissions cuts cost one country but benefits are global.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No global authority can enforce compliance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cutting emissions costs each state while cooling benefits everyone — so states under-contribute absent enforcement.",
            commonErrors: ["Treating it as a moral failing rather than an incentive problem."],
          },
        },
        {
          id: "ciegp-q-u4l1c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country reduces its emissions from 100 units to 70 units. What is the percentage reduction?",
          response: {
            type: "numeric",
            parts: [{ label: "Reduction (%)", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentage change",
                statement: "(Old - new)/old x 100.",
              },
            ],
            steps: [
              { reasoning: "(100 - 70)/100 x 100 = 30%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30%",
            commonErrors: ["Dividing by the new value instead of the original."],
          },
        },
        {
          id: "ciegp-q-u4l1c1-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Country A emits 40 million tonnes of CO2 and Country B emits 10 million tonnes. How many times more does A emit, and what is their combined total?",
          response: {
            type: "numeric",
            parts: [
              { label: "Ratio", answer: 4 },
              { label: "Combined (million tonnes)", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Emissions data",
                statement: "Ratio and totals of emissions figures.",
              },
            ],
            steps: [
              { reasoning: "40/10 = 4; 40 + 10 = 50.", marks: 1, markCode: "M" },
              { reasoning: "Both figures correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 times; 50 million tonnes",
            commonErrors: ["Comparing totals without noting population size."],
          },
        },
        {
          id: "ciegp-q-u4l1c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate the claim that carbon pricing is the single best climate policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Carbon pricing",
                statement: "Price signal reduces emissions but has equity and leakage issues.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: creates incentive to cut emissions efficiently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weaknesses: regressive on poor households; firms may relocate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: effective only with equity recycling and complementary policies.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Strong price incentive but regressive and prone to leakage; best combined with revenue recycling and other measures.",
            commonErrors: ["One-sided endorsement without equity analysis."],
          },
        },
        {
          id: "ciegp-q-u4l1c1-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which response best addresses climate injustice?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Climate finance and technology transfer to vulnerable low-emitting countries",
              },
              { id: "b", text: "Ignoring adaptation costs" },
              { id: "c", text: "Blaming developing countries" },
              { id: "d", text: "Identical emissions cuts for all countries" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate justice",
                statement: "Differentiated responsibility plus support.",
              },
            ],
            steps: [
              {
                reasoning: "Finance/tech transfer addresses the responsibility-impact mismatch.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Climate finance and technology transfer",
            commonErrors: ["Assuming equal cuts are fair — they ignore historical responsibility."],
          },
        },
      ],
    },
    {
      id: "ciegp-u4l1-c2-inequality",
      title: "Inequality and development as global issues",
      skill: "Analyse inequality dimensions, causes and contested solutions.",
      lesson: {
        sections: [
          {
            heading: "Dimensions of inequality",
            body: "Global inequality operates through income/wealth gaps, gender inequality, racial and ethnic discrimination, and unequal access to education, healthcare and technology. The **Gini coefficient** and **Human Development Index** measure different aspects. Inequality is both an outcome and a cause of underdevelopment — it limits human capital and social mobility.",
          },
          {
            heading: "Causes and solutions",
            body: "Causes include colonial legacies, unfair trade structures, corruption, conflict and unequal global institutions. Solutions are contested: redistribution (progressive taxation, social protection), equal opportunity (education, healthcare), and systemic change (reforming trade rules, debt relief). Tension: growth-first vs equity-first strategies; evidence that some inequality may accompany growth but excessive inequality harms it.",
          },
        ],
        keyFormulas: [
          {
            name: "Gini coefficient",
            statement: "0 = perfect equality, 1 = maximum inequality",
          },
          {
            name: "Human Development Index",
            statement: "Combines income, education and health into one measure",
          },
          {
            name: "Inequality trap",
            statement:
              "Inequality limits opportunity, which reproduces inequality",
          },
        ],
        workedExample: {
          problem: "Why might reducing inequality help economic growth?",
          solution:
            "Wider access to education and health raises human capital; broader consumer demand supports growth; inequality can fuel instability that deters investment.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the Gini coefficient measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A country's GDP" },
              { id: "b", text: "Global trade volumes" },
              { id: "c", text: "Literacy rates" },
              { id: "d", text: "Income/wealth inequality within a population" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Gini coefficient",
                statement:
                  "Measures income distribution inequality; 0 equal, 1 maximal.",
              },
            ],
            steps: [
              {
                reasoning: "Correct measure identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Income/wealth inequality",
            commonErrors: ["Confusing it with GDP or HDI."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two dimensions of global inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inequality dimensions",
                statement: "Income, gender, race, access to services.",
              },
            ],
            steps: [
              { reasoning: "Two valid dimensions.", marks: 1, markCode: "M" },
              { reasoning: "Each clearly described.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. income/wealth inequality and gender inequality in education and pay.",
            commonErrors: ["Repeating the same dimension twice."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how inequality can be both a cause and a consequence of underdevelopment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality cycle",
                statement:
                  "Inequality limits opportunity → lower human capital → slower development → deeper inequality.",
              },
            ],
            steps: [
              {
                reasoning: "Explains inequality→underdevelopment direction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains underdevelopment→inequality direction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Identifies the reinforcing cycle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Inequality restricts access to education/health (cause), while poverty and weak institutions concentrate wealth (consequence) — a self-reinforcing cycle.",
            commonErrors: ["One direction only."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the statement: 'Economic growth is the best way to reduce global inequality.'",
          parts: [
            { label: "a", prompt: "Arguments supporting the claim", marks: 2 },
            { label: "b", prompt: "Arguments against it", marks: 2 },
            { label: "c", prompt: "Your balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth vs equity",
                statement:
                  "Growth can lift incomes but may not reduce relative gaps without redistribution.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Growth expands resources and can reduce absolute poverty.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Trickle-down evidence is mixed but positive cases exist.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Growth alone can widen relative inequality (Kuznets).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Unequal asset ownership means gains concentrate at top.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Growth necessary but insufficient; needs equity policies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Justified conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Growth helps absolute poverty but relative inequality needs deliberate redistribution and equal opportunity — growth alone is insufficient.",
            commonErrors: ["One-sided evaluation."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which index combines income, education and health?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Human Development Index" },
              { id: "b", text: "Consumer price index" },
              { id: "c", text: "Gini coefficient" },
              { id: "d", text: "Purchasing power parity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "HDI",
                statement: "Combines income, education, health.",
              },
            ],
            steps: [
              {
                reasoning: "Correct index identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Human Development Index",
            commonErrors: ["Confusing with Gini."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two historical causes of global inequality and explain one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality causes",
                statement:
                  "Colonialism, unfair trade, conflict, weak institutions.",
              },
            ],
            steps: [
              { reasoning: "Two valid causes named.", marks: 1, markCode: "M" },
              {
                reasoning: "One cause explained with mechanism.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. colonial extraction left institutions and infrastructure skewed; unfair trade terms lock producers into low-value exports.",
            commonErrors: ["Naming causes without explanation."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is meant by 'equal opportunity' as an inequality solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Everyone earns identical wages" },
              { id: "b", text: "Wealth is confiscated and shared equally" },
              { id: "c", text: "The state owns all businesses" },
              {
                id: "d",
                text: "Everyone has the same access to education, health and chances regardless of background",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equal opportunity",
                statement: "Same starting access, not equal outcomes.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Same access to services and chances",
            commonErrors: ["Confusing equal opportunity with equal outcomes."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare redistribution and equal-opportunity approaches to reducing inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality policies",
                statement:
                  "Redistribution changes outcomes; equal opportunity changes starting points.",
              },
            ],
            steps: [
              {
                reasoning: "Explains redistribution approach.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains equal-opportunity approach.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strengths/limits of each noted.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning: "Synthesis: complementary strategies.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Redistribution (taxes, transfers) reduces gaps directly but may blunt incentives; equal opportunity (education, health) builds long-term capacity but takes time — best combined.",
            commonErrors: [
              "Treating them as identical or mutually exclusive without nuance.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l1c2-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why can high inequality harm economic growth?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality and growth",
                statement:
                  "Restricted human capital, weaker demand, instability.",
              },
            ],
            steps: [
              { reasoning: "One valid mechanism.", marks: 1, markCode: "M" },
              {
                reasoning: "Second valid mechanism or elaboration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. poor households can't invest in education/health (lower human capital); concentrated wealth weakens consumer demand; inequality fuels instability that deters investment.",
            commonErrors: ["Asserting without mechanism."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country's GDP rises 5% but the poorest 20% see no income gain. What does this show about development measures?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP limitations",
                statement:
                  "GDP measures output, not distribution or wellbeing.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies distribution blind spot of GDP.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Suggests complementary measures (HDI, Gini, poverty rates).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "GDP growth can coexist with rising inequality; need distribution-sensitive measures like Gini and HDI alongside GDP.",
            commonErrors: [
              "Concluding the country developed — growth ≠ development.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which measure combines income, education and health into a single index?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gini coefficient" },
              { id: "b", text: "GDP" },
              { id: "c", text: "Human Development Index (HDI)" },
              { id: "d", text: "Consumer price index" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "HDI",
                statement: "Income + education + health composite.",
              },
            ],
            steps: [
              { reasoning: "HDI combines the three dimensions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Human Development Index",
            commonErrors: ["Confusing HDI with Gini — Gini measures inequality only."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country's Gini coefficient rises from 0.30 to 0.45. What is the change?",
          response: {
            type: "numeric",
            parts: [{ label: "Change in Gini", answer: 0.15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Gini interpretation",
                statement: "Higher Gini = more inequality; difference is the change.",
              },
            ],
            steps: [
              { reasoning: "0.45 - 0.30 = 0.15 increase.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.15 increase",
            commonErrors: ["Reading 0.45 as '45% inequality' without context."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country has GDP per capita of $20,000 and a population of 50 million. What is its total GDP in billions of dollars?",
          response: {
            type: "numeric",
            parts: [{ label: "GDP ($ billions)", answer: 1000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "GDP calculation",
                statement: "Per capita x population.",
              },
            ],
            steps: [
              {
                reasoning: "20000 x 50,000,000 = $1,000,000,000,000 = $1000 billion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct total in billions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1000 billion (1 trillion)",
            commonErrors: ["Forgetting to convert to billions."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'inequality trap'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inequality trap",
                statement: "Inequality limits opportunity, reproducing inequality.",
              },
            ],
            steps: [
              {
                reasoning: "Defines the self-reinforcing mechanism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. poor access to education → low income → poverty persists.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Inequality restricts opportunity (education, health, capital), which reproduces inequality across generations.",
            commonErrors: ["Describing inequality statically without the cycle."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways inequality can limit a country's development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality and development",
                statement: "Inequality wastes human capital and demand.",
              },
            ],
            steps: [
              {
                reasoning: "Limits human capital: unequal access to education/health.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Limits demand and mobility: poor can't consume or invest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can fuel instability that deters investment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Wastes human capital via unequal education/health access; narrows consumer demand and mobility; risks instability.",
            commonErrors: ["Listing inequality dimensions without linking to development."],
          },
        },
        {
          id: "ciegp-q-u4l1c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'economic growth-first is the best route out of poverty' in light of inequality evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth vs equity",
                statement: "Growth can coexist with inequality; excessive inequality harms it.",
              },
            ],
            steps: [
              {
                reasoning: "For: growth raises average incomes and funds services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: growth without redistribution can widen gaps (Gini).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence: some inequality may accompany growth but excessive levels harm it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: growth needed but must be paired with equity measures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Growth is necessary but insufficient alone; pair with redistribution and equal opportunity for durable poverty reduction.",
            commonErrors: ["Treating growth and equity as mutually exclusive."],
          },
        },
      ],
    },
  ],
};
