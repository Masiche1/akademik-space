import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cieids-u1-lesson-1-3",
  code: "1-3",
  title: "Population and development",
  goal: "I CAN explain the relationship between population growth and development.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 1: Development and underdevelopment",
  ],
  vocabulary: [
    {
      term: "Population growth rate",
      definition: "The annual percentage increase in a country's population.",
    },
    {
      term: "Dependency ratio",
      definition:
        "The proportion of dependants (young and old) to working-age population.",
    },
    {
      term: "Demographic transition",
      definition:
        "The shift from high birth and death rates to low ones as countries develop.",
    },
    {
      term: "Population pressure",
      definition:
        "When population growth outpaces the economy's ability to provide jobs and services.",
    },
    {
      term: "Urbanisation",
      definition:
        "The movement of people from rural to urban areas, often straining cities.",
    },
    {
      term: "Youth bulge",
      definition:
        "A large proportion of young people in the population — can be an asset or burden.",
    },
  ],
  concepts: [
    {
      id: "cieids-u1-pop",
      title: "Population and its development impact",
      skill:
        "Explain how population growth affects development and evaluate whether it is a 'problem'.",
      lesson: {
        sections: [
          {
            heading: "Population growth and the economy",
            body: "Rapid population growth can **strain resources** — more mouths to feed, more children needing schools, pressure on housing and jobs. A high **dependency ratio** means few workers support many dependants. However, population is also a **resource**: a large young workforce ('demographic dividend') can drive growth if jobs exist — the outcome depends on economic policy, not population alone.",
          },
          {
            heading: "The demographic transition",
            body: "Countries move through stages: **Stage 1** high birth and death rates; **Stage 2** death rates fall (better health) while births stay high — population booms; **Stage 3** birth rates fall (urbanisation, education, contraception); **Stage 4** low birth and death rates — stable population. Most developed countries are at Stage 4; many developing countries are at Stage 2-3.",
          },
          {
            heading: "Population as asset or burden",
            body: "Whether population helps or hurts depends on **context**: with jobs and education, a youth bulge becomes a workforce ('demographic dividend'); without them, it becomes unemployment and poverty. Population also affects **urbanisation** — rural-urban migration concentrates people in cities, straining services but also concentrating economic activity.",
          },
        ],
        keyFormulas: [
          {
            name: "Dependency ratio",
            statement:
              "dependants ÷ working-age population — high ratio = strain",
          },
          {
            name: "Demographic dividend",
            statement: "Large working-age population + jobs = growth boost",
          },
        ],
        workedExample: {
          problem:
            "Two countries have the same population growth rate. Why might one develop faster?",
          solution:
            "If one has jobs, education and infrastructure for its youth (demographic dividend) while the other lacks them, the same growth rate produces different outcomes — context matters more than the rate itself.",
        },
      },
      questions: [
        {
          id: "cieids-u1-pop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The dependency ratio measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of working adults only" },
              {
                id: "b",
                text: "The proportion of dependants to working-age people",
              },
              { id: "c", text: "The birth rate per 1 000 people" },
              { id: "d", text: "The total population of a country" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependency ratio",
                statement:
                  "Dependants (young + old) relative to working-age population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dependency ratio = dependants ÷ working-age — a high ratio means more strain on workers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) The proportion of dependants to working-age people.",
            commonErrors: [
              "Confusing dependency ratio with population growth rate.",
            ],
          },
        },
        {
          id: "cieids-u1-pop-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by the 'demographic dividend'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demographic dividend",
                statement:
                  "Growth boost when a large working-age population is productively employed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When birth rates fall but the young population is still large, the proportion of working-age people rises.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If jobs and education exist, this workforce can drive economic growth faster than dependencies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The 'dividend' is only realised with employment — without it, the youth bulge becomes unemployment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A growth boost when a large working-age population is employed productively.",
            commonErrors: [
              "Saying population growth is always bad — the dividend shows it can help.",
            ],
          },
        },
        {
          id: "cieids-u1-pop-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe stage 2 of the demographic transition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demographic transition",
                statement:
                  "Shift from high birth/death rates to low ones as development occurs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stage 2: death rates fall rapidly (better healthcare, sanitation, nutrition) while birth rates remain high.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Result: rapid population growth — a 'population boom' as more survive to reproduce.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Most developing countries today are in stage 2 or early stage 3.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Death rates fall while births stay high → rapid population growth.",
            commonErrors: [
              "Saying births fall first — deaths fall first in stage 2.",
            ],
          },
        },
        {
          id: "cieids-u1-pop-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the view that population growth is the main barrier to development.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two ways population growth can hinder development.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate whether population growth is the main barrier.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Population debate",
                statement:
                  "Population can strain resources but is not the only barrier — policy and institutions matter.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Strain on resources: more people need food, water, housing and services than the economy provides.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "High dependency ratio: few workers support many dependants, reducing savings and investment.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Pressure on education and health systems reduces per-capita quality.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Population is a factor but not the only one — governance, trade terms, debt and conflict also block development.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Some high-population countries have developed successfully (e.g. parts of Asia) — policy matters.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: population growth is a challenge to manage, not an inevitable barrier — development depends on how it is channelled.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Resource strain + high dependency. (b) Significant but not the sole barrier — institutions and policy matter.",
            commonErrors: [
              "Blaming population alone and ignoring governance, trade and conflict.",
            ],
          },
        },
        {
          id: "cieids-u1-pop-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stage of the demographic transition has falling death rates but still-high birth rates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stage 1" },
              { id: "b", text: "Stage 3" },
              { id: "c", text: "Stage 4" },
              { id: "d", text: "Stage 2" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demographic transition",
                statement: "Stage 2: deaths fall while births remain high, causing rapid growth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Improved health lowers death rates first, while birth rates stay high in stage 2.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Stage 2.",
            commonErrors: ["Confusing stage 2 with stage 3, when birth rates begin to fall."],
          },
        },
        {
          id: "cieids-u1-pop-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The demographic dividend is realised when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A large working-age population is employed productively" },
              { id: "b", text: "Death rates remain high" },
              { id: "c", text: "Birth rates rise rapidly" },
              { id: "d", text: "Most people live in rural areas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demographic dividend",
                statement: "Growth boost from a large employed working-age population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The dividend depends on jobs and skills, not just a large young population.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** A large working-age population is employed productively.",
            commonErrors: ["Thinking population growth automatically creates a dividend."],
          },
        },
        {
          id: "cieids-u1-pop-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rapid urbanisation can strain cities mainly by increasing demand for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fewer schools and clinics" },
              { id: "b", text: "Housing, water, transport and jobs" },
              { id: "c", text: "Agricultural land only" },
              { id: "d", text: "Lower life expectancy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Urbanisation",
                statement: "Rural-urban migration concentrates demand for urban services.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rapid inflows can outpace housing, water, transport and employment provision.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Housing, water, transport and jobs.",
            commonErrors: ["Ignoring that urbanisation can also concentrate economic activity."],
          },
        },
        {
          id: "cieids-u1-pop-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A youth bulge is most likely to become an asset when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Public services are cut" },
              { id: "b", text: "Most young people migrate abroad" },
              { id: "c", text: "Birth rates continue rising" },
              { id: "d", text: "Education and jobs are available" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Youth bulge",
                statement: "A large young population helps only if skills and employment exist.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Education and jobs turn a young population into workers and innovators.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Education and jobs are available.",
            commonErrors: ["Assuming a youth bulge is always beneficial."],
          },
        },
        {
          id: "cieids-u1-pop-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A high dependency ratio tends to reduce development because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It lowers birth rates immediately" },
              { id: "b", text: "Fewer workers support more dependants, reducing savings" },
              { id: "c", text: "It guarantees higher GDP per capita" },
              { id: "d", text: "It increases the working-age population" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependency ratio",
                statement: "Dependants relative to working-age population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When dependants outnumber workers, income is diverted to support them instead of investment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Fewer workers support more dependants, reducing savings.",
            commonErrors: ["Confusing a high dependency ratio with a large workforce."],
          },
        },
        {
          id: "cieids-u1-pop-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Population pressure occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Birth rates fall below death rates" },
              { id: "b", text: "Life expectancy reaches 80 years" },
              { id: "c", text: "Population growth outpaces jobs and services" },
              { id: "d", text: "A country becomes fully urbanised" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Population pressure",
                statement: "Growth exceeds the economy's ability to provide jobs and services.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pressure arises when people grow faster than employment, housing, health and education capacity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Population growth outpaces jobs and services.",
            commonErrors: ["Treating any population growth as automatic pressure."],
          },
        },
        {
          id: "cieids-u1-pop-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country has $180000$ dependants and $420000$ working-age people. Calculate the dependency ratio.",
          response: {
            type: "numeric",
            parts: [{ label: "Dependency ratio", answer: 0.4286, tolerance: 0.001, unit: "ratio" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dependency ratio",
                statement: "Dependants ÷ working-age population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use the formula: dependants divided by working-age population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Calculate: $180000 / 420000 = 0.4286$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.4286",
            commonErrors: ["Dividing working-age population by dependants instead."],
          },
        },
        {
          id: "cieids-u1-pop-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country's population rises from $40$ million to $42$ million in one year. Calculate the annual population growth rate.",
          response: {
            type: "numeric",
            parts: [{ label: "Growth rate", answer: 5, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Population growth rate",
                statement: "Growth rate = population increase ÷ initial population × 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Find the increase first: $42 - 40 = 2$ million.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Calculate the rate: $2 / 40 \\times 100 = 5$%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5%",
            commonErrors: ["Using the final population instead of the initial population as the denominator."],
          },
        },
        {
          id: "cieids-u1-pop-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In one year, a country records $38$ births and $12$ deaths per $1000$ people. Calculate the natural increase per $1000$ people.",
          response: {
            type: "numeric",
            parts: [{ label: "Natural increase", answer: 26, unit: "per 1000" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Natural increase",
                statement: "Birth rate − death rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Natural increase is births minus deaths for the same population base.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Calculate: $38 - 12 = 26$ per $1000$ people.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "26 per 1000",
            commonErrors: ["Adding birth and death rates instead of subtracting."],
          },
        },
        {
          id: "cieids-u1-pop-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A country has a population of $20$ million, of which $30$% live in urban areas. Calculate the urban population.",
          response: {
            type: "numeric",
            parts: [{ label: "Urban population", answer: 6, unit: "million" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Urban population",
                statement: "Urban population = total population × urban share.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert $30$% to a decimal: $0.30$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Calculate: $20 \\times 0.30 = 6$ million.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6 million",
            commonErrors: ["Calculating $30$% of $100$ instead of the given population."],
          },
        },
        {
          id: "cieids-u1-pop-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a country, $35$% of the population is under 15 and $10$% is over 65. If total population is $80$ million, calculate the number of dependants.",
          response: {
            type: "numeric",
            parts: [{ label: "Dependants", answer: 36, unit: "million" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependants",
                statement: "People under 15 or over 65 relative to working-age population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dependants are the under-15 and over-65 groups combined: $35$% + $10$% = $45$%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convert to a decimal and apply to population: $0.45 \\times 80$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Calculate: $0.45 \\times 80 = 36$ million dependants.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "36 million",
            commonErrors: ["Including only children under 15 and forgetting the over-65 group."],
          },
        },
        {
          id: "cieids-u1-pop-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether a youth bulge is an asset or a burden for development.",
          parts: [
            {
              label: "a",
              prompt: "Explain how a youth bulge can support development.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate the conditions under which it becomes a burden.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Population as resource",
                statement:
                  "A large young population helps only when skills, jobs and services are available.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A large working-age population can expand the labour force and raise output.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Education and training can turn young people into skilled workers and innovators.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "If jobs exist, the youth bulge can produce a demographic dividend and faster growth.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Without jobs, the same young population becomes unemployment, poverty and pressure on services.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Weak education and health systems reduce the ability of young people to contribute productively.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: a youth bulge is neither automatically good nor bad — policy determines the outcome.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Labour force, skills and demographic dividend. (b) Unemployment and service strain without jobs and education.",
            commonErrors: ["Giving a one-sided verdict on population growth."],
          },
        },
      ],
    },
  ],
};
