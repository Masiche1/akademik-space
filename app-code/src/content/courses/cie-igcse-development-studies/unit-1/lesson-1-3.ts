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
              { id: "a", text: "The total population of a country" },
              {
                id: "b",
                text: "The proportion of dependants to working-age people",
              },
              { id: "c", text: "The birth rate per 1 000 people" },
              { id: "d", text: "The number of working adults only" },
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
      ],
    },
  ],
};
