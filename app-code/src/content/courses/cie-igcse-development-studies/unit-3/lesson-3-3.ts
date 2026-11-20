import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cieids-u3-lesson-3-3",
  code: "3-3",
  title: "Population, food and agriculture",
  goal: "I CAN explain population dynamics, food insecurity and agricultural development strategies.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 3: Population and food",
  ],
  vocabulary: [
    {
      term: "Population growth",
      definition: "Increase in population size over time.",
    },
    {
      term: "Birth rate",
      definition: "Number of live births per 1000 population per year.",
    },
    {
      term: "Death rate",
      definition: "Number of deaths per 1000 population per year.",
    },
    {
      term: "Fertility rate",
      definition: "Average number of children a woman is expected to have.",
    },
    {
      term: "Demographic transition",
      definition: "Shift from high birth/death rates to low birth/death rates.",
    },
    {
      term: "Dependency ratio",
      definition:
        "Proportion of dependents (young/old) to working-age population.",
    },
    {
      term: "Food security",
      definition: "Reliable access to sufficient, safe, nutritious food.",
    },
    {
      term: "Subsistence farming",
      definition: "Farming to feed the farmer's family — little surplus.",
    },
    {
      term: "Cash crops",
      definition: "Crops grown for sale rather than consumption.",
    },
    {
      term: "Green Revolution",
      definition:
        "Introduction of high-yield seeds and fertilisers in 1960s-70s.",
    },
    {
      term: "Food aid",
      definition: "Food donated by other countries or organisations.",
    },
    {
      term: "Urbanisation",
      definition: "Increasing proportion of population living in cities.",
    },
  ],
  concepts: [
    {
      id: "cieids-u3-population",
      title: "Population dynamics",
      skill:
        "Explain population growth, demographic transition and its development implications.",
      lesson: {
        sections: [
          {
            heading: "Measuring population",
            body: "**Birth rate** = births per 1000 per year; **death rate** = deaths per 1000. **Fertility rate** = average children per woman. **Population growth rate** = birth rate - death rate (+ migration). **Dependency ratio** = dependents (children + elderly) to working-age population — high ratios strain resources.",
          },
          {
            heading: "Demographic transition",
            body: "Stage 1: high birth and death rates (pre-industrial). Stage 2: death rates fall (improved sanitation/medicine) while birth rates remain high → rapid population growth. Stage 3: birth rates fall (urbanisation, education, contraception) → slower growth. Stage 4: low birth and death rates (developed countries). Most developing countries are in Stage 2-3.",
          },
          {
            heading: "Population and development",
            body: "Rapid population growth can outpace economic development — more people to feed, educate, employ. But population can also be an asset — **demographic dividend** when working-age population exceeds dependents. Key factors affecting fertility: education (especially female), urbanisation, income, access to contraception, cultural/religious factors.",
          },
        ],
        keyFormulas: [
          {
            name: "Growth rate",
            statement: "Birth rate - death rate (+ migration)",
          },
          {
            name: "Dependency ratio",
            statement: "Dependents / working-age population",
          },
          {
            name: "Demographic dividend",
            statement: "Working-age > dependents = economic opportunity",
          },
        ],
        workedExample: {
          problem:
            "A country has birth rate 35, death rate 10 per 1000. What is population growth?",
          solution:
            "Growth rate = 35 - 10 = 25 per 1000 = 2.5% annual growth — very rapid.",
        },
      },
      questions: [
        {
          id: "cieids-u3-pop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Birth rate is measured as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Births per 1000 population per year" },
              { id: "b", text: "Total births" },
              { id: "c", text: "Births per family" },
              { id: "d", text: "Births per woman" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Birth rate",
                statement: "Births per 1000 per year.",
              },
            ],
            steps: [
              {
                reasoning: "Birth rate = births/1000/year.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Births per 1000 per year.",
          },
        },
        {
          id: "cieids-u3-pop-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Death rate is measured as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deaths per 1000 population per year" },
              { id: "b", text: "Total deaths" },
              { id: "c", text: "Deaths per family" },
              { id: "d", text: "Deaths per year" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Death rate",
                statement: "Deaths per 1000 per year.",
              },
            ],
            steps: [
              {
                reasoning: "Death rate = deaths/1000/year.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Deaths per 1000 per year.",
          },
        },
        {
          id: "cieids-u3-pop-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Fertility rate refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Average number of children a woman is expected to have",
              },
              { id: "b", text: "Birth rate" },
              { id: "c", text: "Total births" },
              { id: "d", text: "Population growth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fertility rate",
                statement: "Average children per woman.",
              },
            ],
            steps: [
              {
                reasoning: "Fertility = children per woman.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Average children per woman.",
          },
        },
        {
          id: "cieids-u3-pop-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Population growth rate is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Birth rate minus death rate (+ migration)" },
              { id: "b", text: "Birth rate plus death rate" },
              { id: "c", text: "Birth rate only" },
              { id: "d", text: "Death rate only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Growth rate",
                statement: "Birth - death (+ migration).",
              },
            ],
            steps: [
              {
                reasoning: "Growth = birth - death (+ migration).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Birth - death (+ migration).",
          },
        },
        {
          id: "cieids-u3-pop-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "The dependency ratio measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dependents to working-age population" },
              { id: "b", text: "Births to deaths" },
              { id: "c", text: "Population size" },
              { id: "d", text: "Employment rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependency ratio",
                statement: "Dependents/working-age population.",
              },
            ],
            steps: [
              {
                reasoning: "Dependency = dependents/working-age.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Dependents to working-age.",
          },
        },
        {
          id: "cieids-u3-pop-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Demographic transition stage 2 is characterised by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Falling death rates, high birth rates — rapid growth",
              },
              { id: "b", text: "Low birth and death rates" },
              { id: "c", text: "High birth and death rates" },
              { id: "d", text: "No population" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stage 2",
                statement: "Death rates fall, birth rates high.",
              },
            ],
            steps: [
              {
                reasoning: "Stage 2 = rapid growth.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Falling death, high birth — rapid growth.",
          },
        },
        {
          id: "cieids-u3-pop-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The demographic dividend occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Working-age population exceeds dependents" },
              { id: "b", text: "Birth rate is high" },
              { id: "c", text: "Death rate is high" },
              { id: "d", text: "Population is declining" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demographic dividend",
                statement: "Working-age > dependents.",
              },
            ],
            steps: [
              {
                reasoning: "Dividend = more workers than dependents.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Working-age exceeds dependents.",
          },
        },
        {
          id: "cieids-u3-pop-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A factor that reduces fertility rate is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Female education" },
              { id: "b", text: "Poverty" },
              { id: "c", text: "Rural living" },
              { id: "d", text: "Early marriage" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fertility factors",
                statement: "Female education reduces fertility.",
              },
            ],
            steps: [
              {
                reasoning: "Female education reduces fertility.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Female education.",
          },
        },
        {
          id: "cieids-u3-pop-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Rapid population growth can hinder development by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Outpacing resources and services" },
              { id: "b", text: "Increasing GDP" },
              { id: "c", text: "Improving education" },
              { id: "d", text: "Reducing poverty" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Population growth effect",
                statement: "Outpaces resources/services.",
              },
            ],
            steps: [
              {
                reasoning: "Rapid growth strains resources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Outpacing resources and services.",
          },
        },
        {
          id: "cieids-u3-pop-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between birth rate and fertility rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Birth vs fertility",
                statement: "Population-level vs individual-level.",
              },
            ],
            steps: [
              {
                reasoning: "Birth rate: births per 1000 population per year.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fertility rate: average children per woman.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Birth rate = population-level; fertility = per woman.",
          },
        },
        {
          id: "cieids-u3-pop-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the demographic transition model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demographic transition",
                statement: "High rates → low rates over time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stage 1: high birth/death rates; Stage 2: death falls → growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stage 3: birth falls; Stage 4: low birth/death rates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shift from high to low birth/death rates through stages.",
          },
        },
        {
          id: "cieids-u3-pop-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how rapid population growth can hinder development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Population growth effect",
                statement: "Strains resources and services.",
              },
            ],
            steps: [
              {
                reasoning: "More people to feed, educate, employ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strains resources — food, water, housing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Overwhelms services — education, healthcare.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Strains resources and services — outpaces development.",
          },
        },
        {
          id: "cieids-u3-pop-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A country has birth rate 40, death rate 8 per 1000. Calculate growth rate and explain development implications.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Calculation + implication",
                statement: "Growth rate = birth - death.",
              },
            ],
            steps: [
              {
                reasoning: "Growth = 40 - 8 = 32 per 1000 = 3.2%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Very rapid growth — population doubling ~22 years.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strains resources and services severely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hard to provide education/healthcare for all.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "3.2% growth — very rapid; strains resources/services.",
          },
        },
        {
          id: "cieids-u3-pop-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Demographic transition stage 4 is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Low birth and death rates" },
              { id: "b", text: "High birth rates" },
              { id: "c", text: "Rapid growth" },
              { id: "d", text: "High death rates" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stage 4",
                statement: "Low birth and death rates.",
              },
            ],
            steps: [
              {
                reasoning: "Stage 4 = low rates.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Low birth and death rates.",
          },
        },
        {
          id: "cieids-u3-pop-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the demographic dividend?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demographic dividend",
                statement: "Economic benefit of large working-age population.",
              },
            ],
            steps: [
              {
                reasoning: "When working-age population exceeds dependents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More workers = more production, less dependency burden.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Economic benefit when working-age > dependents.",
          },
        },
        {
          id: "cieids-u3-pop-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which factor does NOT reduce fertility rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poverty" },
              { id: "b", text: "Female education" },
              { id: "c", text: "Urbanisation" },
              { id: "d", text: "Access to contraception" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fertility factors",
                statement:
                  "Education, urbanisation, contraception reduce; poverty increases.",
              },
            ],
            steps: [
              {
                reasoning: "Poverty doesn't reduce fertility.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Poverty.",
          },
        },
        {
          id: "cieids-u3-pop-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does urbanisation affect fertility?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urbanisation and fertility",
                statement: "Urban living reduces fertility.",
              },
            ],
            steps: [
              {
                reasoning: "Urban living → smaller families, later marriage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Higher costs of living in cities reduce children.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Urbanisation reduces fertility — smaller families, higher costs.",
          },
        },
        {
          id: "cieids-u3-pop-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why high dependency ratio strains resources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dependency ratio strain",
                statement: "Many dependents per worker.",
              },
            ],
            steps: [
              {
                reasoning: "Dependents (children + elderly) need support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fewer workers to support them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strains education, healthcare, social services.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Many dependents per worker strains services.",
          },
        },
        {
          id: "cieids-u3-pop-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether rapid population growth is always bad for development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Population growth evaluation",
                statement: "Usually harmful but can be asset.",
              },
            ],
            steps: [
              {
                reasoning: "Rapid growth strains resources and services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can outpace economic development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But demographic dividend possible with right policies.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Population can be asset if managed well.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Usually harmful but demographic dividend possible with right policies.",
          },
        },
        {
          id: "cieids-u3-pop-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Demographic transition describes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift from high to low birth/death rates" },
              { id: "b", text: "Population decline" },
              { id: "c", text: "Migration" },
              { id: "d", text: "Urbanisation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demographic transition",
                statement: "High → low birth/death rates.",
              },
            ],
            steps: [
              {
                reasoning: "Transition = high to low rates.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) High to low rates.",
          },
        },
        {
          id: "cieids-u3-pop-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'natural increase'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural increase",
                statement: "Birth rate minus death rate.",
              },
            ],
            steps: [
              {
                reasoning: "Birth rate minus death rate = natural increase.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Doesn't include migration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Birth - death = natural increase (no migration).",
          },
        },
        {
          id: "cieids-u3-pop-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how female education reduces population growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Female education and fertility",
                statement: "Education → later marriage, fewer children.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Educated women marry later and have fewer children.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Better access to contraception.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More economic opportunities reduce desire for large families.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Later marriage, contraception access, economic opportunities.",
          },
        },
        {
          id: "cieids-u3-pop-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a population policy for a country in demographic transition stage 2.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Population policy",
                statement: "Reduce fertility, manage growth.",
              },
            ],
            steps: [
              {
                reasoning: "Family planning programs — contraception access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Female education — reduce fertility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Economic development — urbanisation reduces fertility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Healthcare investment — reduce death rates further.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Family planning + female education + development + healthcare.",
          },
        },
        {
          id: "cieids-u3-pop-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A high dependency ratio means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many dependents per working-age person" },
              { id: "b", text: "Many workers" },
              { id: "c", text: "Low population" },
              { id: "d", text: "High GDP" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "High dependency",
                statement: "Many dependents per worker.",
              },
            ],
            steps: [
              {
                reasoning: "High dependency = many dependents.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Many dependents per worker.",
          },
        },
        {
          id: "cieids-u3-pop-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'migration' in population terms?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Migration",
                statement: "Movement of people between areas.",
              },
            ],
            steps: [
              {
                reasoning: "Movement of people between countries or regions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Affects population growth beyond birth/death rates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Movement of people — affects population beyond birth/death.",
          },
        },
        {
          id: "cieids-u3-pop-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how contraception access affects population growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contraception effect",
                statement: "Reduces fertility rate.",
              },
            ],
            steps: [
              {
                reasoning: "Contraception allows family planning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces fertility rate → slower population growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Also improves women's health and education.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reduces fertility → slower growth; improves women's health.",
          },
        },
        {
          id: "cieids-u3-pop-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stage has the highest population growth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stage 2" },
              { id: "b", text: "Stage 1" },
              { id: "c", text: "Stage 4" },
              { id: "d", text: "Stage 3" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Highest growth stage",
                statement: "Stage 2 — death rates fall, birth rates high.",
              },
            ],
            steps: [
              {
                reasoning: "Stage 2 = fastest growth.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Stage 2.",
          },
        },
        {
          id: "cieids-u3-pop-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might population be an asset rather than a burden?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Population as asset",
                statement: "Demographic dividend, larger market.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Demographic dividend — more workers than dependents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Larger population = larger market for goods/services.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Demographic dividend and larger market.",
          },
        },
        {
          id: "cieids-u3-pop-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the demographic transition model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DTM evaluation",
                statement: "Useful framework but may not apply universally.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: explains population patterns over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: links development to demographic change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: may not apply to all countries equally.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: assumes linear progression — reality more complex.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Useful framework but may not apply universally — reality more complex.",
          },
        },
        {
          id: "cieids-u3-pop-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does population growth rate matter for development planning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth rate importance",
                statement: "Determines resource needs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Determines how many schools, hospitals, jobs needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rapid growth requires faster service provision.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Determines resource/service needs for planning.",
          },
        },
      ],
    },
    {
      id: "cieids-u3-food",
      title: "Food security and agriculture",
      skill:
        "Explain food insecurity causes and evaluate agricultural development strategies.",
      lesson: {
        sections: [
          {
            heading: "Food security and insecurity",
            body: "**Food security** = reliable access to sufficient, safe, nutritious food. **Food insecurity** causes: poverty (can't afford food), conflict (disrupts supply), climate change (droughts/floods), poor infrastructure (can't distribute), population growth (outpaces production). **Famine** = extreme food shortage causing mass death — often worsened by conflict and poor governance.",
          },
          {
            heading: "Agricultural systems",
            body: "**Subsistence farming**: produces enough for family — low productivity, vulnerable to shocks. **Cash crops**: grown for sale — higher income but food insecurity if prices fall. **Green Revolution**: 1960s-70s introduction of high-yield seeds, fertilisers, pesticides — increased yields dramatically but raised costs and environmental concerns. **Commercial farming**: large-scale, mechanised, export-oriented.",
          },
          {
            heading: "Improving food security",
            body: "Strategies: **food aid** (emergency relief), **agricultural development** (irrigation, seeds, training), **land reform** (redistribute land to small farmers), **cash crops diversification** (reduce dependence on single crop), **sustainable agriculture** (environmentally friendly methods), **microfinance** (loans for farmers). Long-term food security requires improving productivity AND distribution.",
          },
        ],
        keyFormulas: [
          {
            name: "Food security",
            statement: "Reliable access to sufficient safe nutritious food",
          },
          {
            name: "Subsistence vs cash crops",
            statement: "Family consumption vs sale",
          },
          {
            name: "Green Revolution",
            statement: "High-yield seeds + fertilisers → increased yields",
          },
        ],
        workedExample: {
          problem: "Why might a country with plenty of food still have hunger?",
          solution:
            "Distribution problem — food exists but poor can't afford it; inequality and lack of access cause hunger despite availability.",
        },
      },
      questions: [
        {
          id: "cieids-u3-food-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Food security refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Reliable access to sufficient, safe, nutritious food",
              },
              { id: "b", text: "Growing food" },
              { id: "c", text: "Food exports" },
              { id: "d", text: "Food prices" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food security",
                statement: "Reliable access to sufficient food.",
              },
            ],
            steps: [
              {
                reasoning: "Food security = reliable access.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Reliable access to sufficient food.",
          },
        },
        {
          id: "cieids-u3-food-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Subsistence farming is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Farming to feed the farmer's family" },
              { id: "b", text: "Growing for export" },
              { id: "c", text: "Large-scale farming" },
              { id: "d", text: "Commercial farming" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subsistence farming",
                statement: "Farming for family consumption.",
              },
            ],
            steps: [
              {
                reasoning: "Subsistence = family consumption.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Farming for family.",
          },
        },
        {
          id: "cieids-u3-food-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cash crops are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crops grown for sale rather than consumption" },
              { id: "b", text: "Subsistence crops" },
              { id: "c", text: "Free crops" },
              { id: "d", text: "Food crops" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash crops",
                statement: "Crops grown for sale.",
              },
            ],
            steps: [
              {
                reasoning: "Cash crops = for sale.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Crops for sale.",
          },
        },
        {
          id: "cieids-u3-food-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Green Revolution introduced:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High-yield seeds and fertilisers" },
              { id: "b", text: "Organic farming" },
              { id: "c", text: "Subsistence farming" },
              { id: "d", text: "Food aid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Green Revolution",
                statement: "High-yield seeds + fertilisers.",
              },
            ],
            steps: [
              {
                reasoning: "Green Revolution = high-yield technology.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) High-yield seeds and fertilisers.",
          },
        },
        {
          id: "cieids-u3-food-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Food aid refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Food donated by other countries or organisations",
              },
              { id: "b", text: "Food grown locally" },
              { id: "c", text: "Food imports" },
              { id: "d", text: "Food exports" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food aid",
                statement: "Food donated externally.",
              },
            ],
            steps: [
              {
                reasoning: "Food aid = donated food.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Food donated externally.",
          },
        },
        {
          id: "cieids-u3-food-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cause of food insecurity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poverty" },
              { id: "b", text: "Abundant food" },
              { id: "c", text: "Good infrastructure" },
              { id: "d", text: "Peace" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food insecurity causes",
                statement: "Poverty, conflict, climate, poor infrastructure.",
              },
            ],
            steps: [
              {
                reasoning: "Poverty causes food insecurity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Poverty.",
          },
        },
        {
          id: "cieids-u3-food-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Subsistence farming is vulnerable to shocks because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It produces little surplus" },
              { id: "b", text: "It's very productive" },
              { id: "c", text: "It uses modern technology" },
              { id: "d", text: "It's highly mechanised" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subsistence vulnerability",
                statement: "Little surplus — vulnerable to shocks.",
              },
            ],
            steps: [
              {
                reasoning: "Subsistence = little surplus.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Little surplus.",
          },
        },
        {
          id: "cieids-u3-food-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cash crops can cause food insecurity because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Farmers grow crops for sale instead of food" },
              { id: "b", text: "They increase food supply" },
              { id: "c", text: "They reduce prices" },
              { id: "d", text: "They improve nutrition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash crop risk",
                statement: "Food production sacrificed for cash.",
              },
            ],
            steps: [
              {
                reasoning: "Cash crops reduce food production.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Grow for sale instead of food.",
          },
        },
        {
          id: "cieids-u3-food-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Famine is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extreme food shortage causing mass death" },
              { id: "b", text: "Food aid" },
              { id: "c", text: "High food prices" },
              { id: "d", text: "Food exports" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Famine",
                statement: "Extreme food shortage → mass death.",
              },
            ],
            steps: [
              {
                reasoning: "Famine = extreme shortage.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Extreme food shortage.",
          },
        },
        {
          id: "cieids-u3-food-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between subsistence and cash crop farming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Farming types",
                statement: "Family consumption vs sale.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subsistence: grown for family consumption — little surplus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cash crops: grown for sale — higher income but food insecurity risk.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Subsistence = family food; cash crops = for sale.",
          },
        },
        {
          id: "cieids-u3-food-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two causes of food insecurity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food insecurity causes",
                statement: "Poverty, conflict, climate, infrastructure.",
              },
            ],
            steps: [
              {
                reasoning: "Poverty — can't afford food.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Conflict, climate change, poor infrastructure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Poverty, conflict, climate, poor infrastructure.",
          },
        },
        {
          id: "cieids-u3-food-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the Green Revolution increased food production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Green Revolution",
                statement: "High-yield technology increased production.",
              },
            ],
            steps: [
              {
                reasoning: "Introduced high-yield seed varieties.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Used fertilisers and pesticides for higher yields.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Dramatically increased food production in Asia/Latin America.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High-yield seeds + fertilisers → dramatically increased production.",
          },
        },
        {
          id: "cieids-u3-food-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A country has food but widespread hunger. Explain this paradox.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Food paradox",
                statement: "Availability ≠ access.",
              },
            ],
            steps: [
              {
                reasoning: "Food exists but poor can't afford it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inequality — food concentrated among wealthy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Distribution problem — can't reach hungry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Need income/redistribution, not just more food.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Availability ≠ access — inequality prevents food reaching poor.",
          },
        },
        {
          id: "cieids-u3-food-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Land reform aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Redistribute land to small farmers" },
              { id: "b", text: "Increase land prices" },
              { id: "c", text: "Reduce farming" },
              { id: "d", text: "Increase exports" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Land reform",
                statement: "Redistribute land to small farmers.",
              },
            ],
            steps: [
              {
                reasoning: "Land reform = redistribution.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Redistribute land to small farmers.",
          },
        },
        {
          id: "cieids-u3-food-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is sustainable agriculture?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainable agriculture",
                statement: "Environmentally friendly farming.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Farming methods that protect environment for future.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Avoids soil depletion, pollution, overuse.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Environmentally friendly farming for future generations.",
          },
        },
        {
          id: "cieids-u3-food-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Commercial farming is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large-scale, mechanised, export-oriented" },
              { id: "b", text: "Subsistence" },
              { id: "c", text: "Small-scale" },
              { id: "d", text: "Family farming" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Commercial farming",
                statement: "Large-scale, mechanised, export-oriented.",
              },
            ],
            steps: [
              {
                reasoning: "Commercial = large-scale/export.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Large-scale, mechanised, export-oriented.",
          },
        },
        {
          id: "cieids-u3-food-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does conflict cause food insecurity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conflict and food",
                statement: "Disrupts production and distribution.",
              },
            ],
            steps: [
              {
                reasoning: "Destroys farmland and infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Disrupts markets and distribution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Destroys production, disrupts distribution.",
          },
        },
        {
          id: "cieids-u3-food-q18",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate food aid as a solution to food insecurity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food aid evaluation",
                statement: "Emergency relief but not long-term solution.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: saves lives in emergencies/famine.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: immediate relief when food unavailable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: doesn't address causes — dependency risk.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: can disrupt local markets.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Saves lives in emergencies but doesn't address causes; can create dependency.",
          },
        },
        {
          id: "cieids-u3-food-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a strategy to improve food security in a developing country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Food security strategy",
                statement: "Production + access + sustainability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Improve agricultural productivity — seeds, irrigation, training.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Improve distribution — roads, markets, storage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Support small farmers — microfinance, land reform.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sustainable methods — protect environment for future.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Productivity + distribution + small farmer support + sustainability.",
          },
        },
        {
          id: "cieids-u3-food-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a cause of food insecurity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Abundant food supply" },
              { id: "b", text: "Poverty" },
              { id: "c", text: "Conflict" },
              { id: "d", text: "Climate change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food insecurity causes",
                statement: "Poverty, conflict, climate — not abundance.",
              },
            ],
            steps: [
              {
                reasoning: "Abundance not a cause.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Abundant food supply.",
          },
        },
        {
          id: "cieids-u3-food-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does climate change affect food security?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate and food",
                statement: "Droughts/floods reduce production.",
              },
            ],
            steps: [
              {
                reasoning: "Droughts and floods destroy crops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Changing patterns make farming unpredictable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Droughts/floods reduce production; unpredictable patterns.",
          },
        },
        {
          id: "cieids-u3-food-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why subsistence farming persists in developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subsistence persistence",
                statement: "Lack of capital, markets, technology.",
              },
            ],
            steps: [
              {
                reasoning: "Lack of capital for modern technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Limited market access for cash crops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cultural traditions and risk aversion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lack capital/markets/technology; cultural factors.",
          },
        },
        {
          id: "cieids-u3-food-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the Green Revolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Green Revolution evaluation",
                statement: "Increased yields but environmental costs.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: dramatically increased food production.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: prevented famine in many countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: environmental damage — soil depletion, pollution.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: increased costs — farmers need fertilisers/seeds.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Increased production but environmental costs and higher input costs.",
          },
        },
        {
          id: "cieids-u3-food-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Green Revolution occurred mainly in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Asia and Latin America" },
              { id: "b", text: "Europe" },
              { id: "c", text: "Africa only" },
              { id: "d", text: "North America" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Green Revolution location",
                statement: "Asia and Latin America.",
              },
            ],
            steps: [
              {
                reasoning: "Green Revolution = Asia/Latin America.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Asia and Latin America.",
          },
        },
        {
          id: "cieids-u3-food-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'food sovereignty'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food sovereignty",
                statement: "Right to define own food systems.",
              },
            ],
            steps: [
              {
                reasoning: "Right of people to control their food systems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Emphasises local control over food production.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Right to control own food systems — local production.",
          },
        },
        {
          id: "cieids-u3-food-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how poor infrastructure causes food insecurity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Infrastructure and food",
                statement: "Can't distribute food efficiently.",
              },
            ],
            steps: [
              {
                reasoning: "Poor roads → can't transport food to markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No storage → food spoils before reaching consumers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can't get inputs (seeds, fertiliser) to farmers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Can't transport/store/distribute food efficiently.",
          },
        },
        {
          id: "cieids-u3-food-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a type of farming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Digital farming" },
              { id: "b", text: "Subsistence farming" },
              { id: "c", text: "Cash crop farming" },
              { id: "d", text: "Commercial farming" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Farming types",
                statement: "Subsistence, cash crop, commercial.",
              },
            ],
            steps: [
              {
                reasoning: "Digital farming not standard type.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Digital farming.",
          },
        },
        {
          id: "cieids-u3-food-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does microfinance help farmers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Microfinance for farmers",
                statement: "Loans for seeds, tools, inputs.",
              },
            ],
            steps: [
              {
                reasoning: "Provides loans for seeds, tools, fertiliser.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enables investment in productivity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Loans for inputs → increased productivity.",
          },
        },
        {
          id: "cieids-u3-food-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate cash crop farming for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash crop evaluation",
                statement: "Income vs food security risk.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: provides income for development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: earns foreign exchange.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: food insecurity if prices fall or food neglected.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: dependence on single crop risky.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Provides income but risks food insecurity and dependence.",
          },
        },
        {
          id: "cieids-u3-food-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is food distribution as important as food production?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Distribution importance",
                statement: "Food must reach those who need it.",
              },
            ],
            steps: [
              {
                reasoning: "Food can exist but not reach hungry people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inequality and poor infrastructure prevent access.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Food must reach those who need it — availability ≠ access.",
          },
        },
      ],
    },
  ],
};
