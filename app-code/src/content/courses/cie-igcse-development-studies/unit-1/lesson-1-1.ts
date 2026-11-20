import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cieids-u1-lesson-1-1",
  code: "1-1",
  title: "What is development?",
  goal: "I CAN explain what development means beyond economic growth and identify key development indicators.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 1: Development and underdevelopment",
  ],
  vocabulary: [
    {
      term: "Development",
      definition:
        "Sustained improvement in living standards, wellbeing and capabilities — not just income growth.",
    },
    {
      term: "Underdevelopment",
      definition:
        "A state where people lack access to basic needs, services and opportunities.",
    },
    {
      term: "GDP",
      definition:
        "Gross Domestic Product — total value of goods and services produced in a country per year.",
    },
    {
      term: "HDI",
      definition:
        "Human Development Index — combines income, education and life expectancy into one measure.",
    },
    {
      term: "Basic needs",
      definition:
        "Food, water, shelter, sanitation, healthcare and education required for survival and dignity.",
    },
  ],
  concepts: [
    {
      id: "cieids-u1-what",
      title: "Development beyond GDP",
      skill:
        "Explain development as multidimensional and evaluate development indicators.",
      lesson: {
        sections: [
          {
            heading: "From growth to development",
            body: "Development is more than rising **GDP**. It means improved **living standards** (income, nutrition, housing), better **services** (health, education), greater **freedoms and choices**, and **sustainability** — meeting today's needs without harming future generations. A country can have GDP growth while inequality and poverty persist.",
          },
          {
            heading: "Measuring development",
            body: "**GDP per capita** measures economic output but ignores distribution and wellbeing. The **HDI** combines income, schooling and life expectancy — a broader measure, though still incomplete (ignores inequality, environment, freedoms). Other indicators include poverty rates, literacy, infant mortality and access to clean water. No single measure captures development fully.",
          },
        ],
        keyFormulas: [
          {
            name: "Development dimensions",
            statement:
              "Income + health + education + freedoms + sustainability",
          },
          {
            name: "HDI components",
            statement: "Income + education + life expectancy",
          },
        ],
        workedExample: {
          problem:
            "Country A has high GDP but low life expectancy and high inequality. Is it 'developed'?",
          solution:
            "Not fully — GDP alone is misleading. Low life expectancy and inequality suggest poor human development despite economic output; HDI would reveal this better than GDP.",
        },
      },
      questions: [
        {
          id: "cieids-u1-what-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Human Development Index (HDI) combines which three measures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP, population, military spending" },
              { id: "b", text: "Income, education and life expectancy" },
              { id: "c", text: "Exports, imports, inflation" },
              { id: "d", text: "Area, population density, rainfall" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI",
                statement: "Income + education + life expectancy combined.",
              },
            ],
            steps: [
              {
                reasoning:
                  "HDI = GNI per capita, mean years of schooling, and life expectancy at birth.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Income, education and life expectancy.",
            commonErrors: ["Thinking HDI is just a renamed GDP."],
          },
        },
        {
          id: "cieids-u1-what-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways development is more than economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beyond GDP",
                statement:
                  "Development includes health, education, freedoms and sustainability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wellbeing: longer life expectancy, better health and nutrition measure development better than income alone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Capabilities: education and freedoms let people shape their own lives — not just consume goods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sustainability: growth that destroys the environment or exhausts resources is not true development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Wellbeing (health/life expectancy), capabilities (education/freedoms) and sustainability beyond income.",
            commonErrors: ["Listing only economic measures."],
          },
        },
        {
          id: "cieids-u1-what-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate GDP per capita as a measure of development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Indicator evaluation",
                statement:
                  "GDP is simple and comparable but hides distribution and wellbeing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: simple, widely available, allows cross-country comparison of economic output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: ignores inequality — a country can have high GDP while most people remain poor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ignores non-market activity, health, education and environmental costs — incomplete picture.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Useful for economic comparison but incomplete — ignores inequality, wellbeing and sustainability.",
            commonErrors: [
              "One-sided evaluation ignoring either strengths or weaknesses.",
            ],
          },
        },
        {
          id: "cieids-u1-what-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the HDI as a measure of development compared to GDP per capita.",
          parts: [
            { label: "a", prompt: "State what the HDI measures.", marks: 2 },
            {
              label: "b",
              prompt: "Compare the HDI with GDP per capita.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Identify one thing neither measure captures.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Development measurement",
                statement: "HDI is broader than GDP but still incomplete.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "HDI combines income (GNI per capita), education (mean and expected years of schooling) and health (life expectancy).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It produces a single 0-1 index ranking countries by human development.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "GDP per capita measures only economic output — high GDP can coexist with poor health and education.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "HDI is broader — it captures wellbeing dimensions GDP misses — but still averages away inequality within countries.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Neither captures political freedoms, environmental sustainability, gender equality or cultural wellbeing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: HDI is a better single measure but development is multidimensional and needs multiple indicators.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Income+education+health. (b) HDI broader than GDP but hides inequality. (c) Freedoms, environment, gender equality missed by both.",
            commonErrors: [
              "Claiming HDI is perfect or useless — it is better but incomplete.",
            ],
          },
        },
        {
          id: "cieids-u1-what-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which indicator is most directly used to measure the health of a country's population?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP per capita" },
              { id: "b", text: "Life expectancy at birth" },
              { id: "c", text: "Export earnings per capita" },
              { id: "d", text: "Military spending as a share of GDP" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Health indicator",
                statement:
                  "Health indicators such as life expectancy track population wellbeing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Life expectancy at birth reflects healthcare quality, nutrition and disease levels — a core health indicator.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Life expectancy at birth.",
            commonErrors: ["Choosing GDP per capita — it measures income, not health."],
          },
        },
        {
          id: "cieids-u1-what-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'basic needs' and give two examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Basic needs",
                statement:
                  "Essentials required for survival and dignity — food, water, shelter, sanitation, healthcare, education.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Basic needs are the essentials required for survival and dignity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examples: access to clean water and primary healthcare (accept any two valid examples).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Essential requirements for survival and dignity — e.g. food, clean water, shelter, healthcare.",
            commonErrors: ["Listing luxuries rather than survival essentials."],
          },
        },
        {
          id: "cieids-u1-what-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two reasons why GDP per capita can give a misleading picture of development within a country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Indicator limitations",
                statement:
                  "Averages hide distribution and exclude non-market activity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The average hides inequality — income may be concentrated in few hands while most people remain poor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Non-market activity (subsistence farming, unpaid care work) is not counted, understating real wellbeing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Environmental depletion and pollution are not deducted — GDP can rise while resources are destroyed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Averages hide inequality and exclude non-market activity and environmental costs.",
            commonErrors: [
              "Repeating the definition of GDP instead of explaining why it misleads.",
            ],
          },
        },
        {
          id: "cieids-u1-what-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two limitations of the HDI as a measure of development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "HDI limitations",
                statement:
                  "HDI is broader than GDP but still averages away inequality and omits freedoms/environment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It hides inequality within countries — a country can have a high HDI while a large minority remains poor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It ignores dimensions such as political freedoms, environmental sustainability, gender equality and culture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: still an improvement over GDP alone but no single index captures development fully.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "HDI misses within-country inequality and non-measured dimensions like freedoms and environment.",
            commonErrors: ["Claiming the HDI is useless rather than incomplete."],
          },
        },
        {
          id: "cieids-u1-what-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the infant mortality rate and the adult literacy rate can each be used as development indicators.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Social indicators",
                statement:
                  "IMR reflects health outcomes; literacy reflects education access and human capital.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Infant mortality rate reflects the quality of healthcare, nutrition and sanitation — a low rate signals better health services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adult literacy rate reflects access to education and human capital — a high rate indicates better schooling and skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Together they reveal wellbeing dimensions that income measures alone would miss.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "IMR measures health outcomes; literacy measures education — both broader than income alone.",
            commonErrors: [
              "Describing the statistics themselves rather than what they indicate about development.",
            ],
          },
        },
        {
          id: "cieids-u1-what-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Country B's GDP per capita has risen for five years, yet poverty and inequality have also risen. Explain what this suggests about its development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Growth vs development",
                statement:
                  "Growth without shared benefits or wellbeing gains is not development.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rising GDP alongside rising poverty suggests growth is not reaching all groups — benefits are unevenly distributed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "GDP measures output, not wellbeing — health, education and living standards may be lagging behind income growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: development requires broadly shared benefits; economic growth alone is insufficient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Growth without equity or wellbeing gains is not development — benefits must be broadly shared.",
            commonErrors: ["Assuming rising GDP automatically means rising development."],
          },
        },
        {
          id: "cieids-u1-what-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare measuring development with a single composite index such as the HDI with using several separate indicators.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Measurement approaches",
                statement:
                  "One index is simple but hides detail; multiple indicators are richer but less comparable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A single index is simple, easy to compare across countries and combines income, education and health.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But it averages away inequality and omits freedoms, environment and other dimensions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Several indicators give detailed, transparent information but are harder to summarise or compare.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: best practice combines a headline index with supporting indicators.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "One index is simple but hides detail; multiple indicators are richer but less comparable — use both.",
            commonErrors: ["Arguing one approach is always superior without weighing trade-offs."],
          },
        },
        {
          id: "cieids-u1-what-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is NOT one of the three components of the HDI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Life expectancy at birth" },
              { id: "b", text: "Mean years of schooling" },
              { id: "c", text: "Political freedom index" },
              { id: "d", text: "GNI per capita" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI components",
                statement: "Income + education + life expectancy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The HDI combines health, education and income — political freedom is not a component.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Political freedom index.",
            commonErrors: ["Thinking the HDI measures political rights."],
          },
        },
        {
          id: "cieids-u1-what-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why sustainability is considered part of development, not a separate concern.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainable development",
                statement:
                  "Development must last — growth that destroys resources undermines future capacity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Development must be sustained — growth that exhausts forests, soil or water undermines the resource base future development needs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Environmental degradation such as deforestation and pollution reduces wellbeing and health even in the present.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Meeting present needs without compromising future generations' ability to meet theirs is part of the development definition itself.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unsustainable development destroys the resource base that future development depends on.",
            commonErrors: ["Treating the environment as unrelated to economic and social development."],
          },
        },
        {
          id: "cieids-u1-what-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of the HDI as the main way of ranking countries by development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "HDI evaluation",
                statement:
                  "HDI is a better single measure than GDP but remains incomplete.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: combines income, education and health into one comparable figure — broader than GDP alone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: captures wellbeing dimensions that pure economic measures miss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: ignores inequality within countries, environmental sustainability and freedoms.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: a useful headline measure but should be supplemented with other indicators.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "HDI is a better single measure than GDP but incomplete — inequality, environment and freedoms are missed.",
            commonErrors: ["One-sided praise or condemnation of the HDI without balance."],
          },
        },
        {
          id: "cieids-u1-what-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Access to clean water and sanitation is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A basic need" },
              { id: "b", text: "A luxury good" },
              { id: "c", text: "An export commodity" },
              { id: "d", text: "A military priority" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Basic needs",
                statement:
                  "Clean water and sanitation are essentials for survival and dignity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Clean water and sanitation are essential for health and dignity — core basic needs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) A basic need.",
            commonErrors: ["Treating water and sanitation as luxuries."],
          },
        },
        {
          id: "cieids-u1-what-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the view that no single indicator can fully measure development.",
          parts: [
            {
              label: "a",
              prompt: "State what development includes beyond income.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the limitations of GDP per capita and the HDI.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Give a justified judgement.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Measuring development",
                statement:
                  "Development is multidimensional — no single index captures it all.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Development includes health, nutrition and education — not just income.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It also includes freedoms, sustainability and equity — dimensions income misses.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "GDP per capita ignores distribution and wellbeing entirely.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The HDI is broader but still ignores within-country inequality, environment and freedoms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "No single measure captures all dimensions — development is inherently multidimensional.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Justified conclusion: a combination of indicators (e.g. HDI plus inequality and environmental measures) is needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Health, education, freedoms, sustainability. (b) GDP ignores distribution; HDI ignores inequality/environment/freedoms. (c) No single index suffices — combine indicators.",
            commonErrors: ["Claiming one index is perfect or that measurement is impossible."],
          },
        },
      ],
    },
  ],
};
