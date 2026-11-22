import type { Lesson } from "../../../types.ts";

export const lesson542: Lesson = {
  id: "ciealgeo-u4-lesson-4-2",
  code: "4-2",
  title: "Fieldwork Skills and Data Analysis",
  goal: "I CAN conduct fieldwork and analyse geographical data.",
  standards: ["Cambridge A Level Geography 9696", "Paper 3: fieldwork"],

  vocabulary: [
    { term: "Fieldwork", definition: "Data collection outside classroom." },
    { term: "Primary data", definition: "Data collected first-hand." },
    { term: "Secondary data", definition: "Data from existing sources." },
    { term: "Sampling", definition: "Selecting subset for study." },
    { term: "Reliability", definition: "Consistency of results." },
    { term: "Validity", definition: "Measuring what intended." },
  ],
  concepts: [
    {
      id: "ciealgeo-u4-s2-field",
      title: "Fieldwork",
      skill: "Conduct and evaluate fieldwork.",
      lesson: {
        sections: [
          {
            heading: "Data types",
            body: "Primary: surveys, observations, measurements. Secondary: census, maps, reports. Triangulation: combining methods for reliability.",
          },
          {
            heading: "Sampling",
            body: "Random: unbiased but may miss areas. Systematic: regular intervals. Stratified: proportional to groups. Opportunity: convenient but biased.",
          },
          {
            heading: "Evaluation",
            body: "Reliability: consistent results. Validity: measuring intended. Ethics: permission, safety, confidentiality.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "first-hand" },
          { name: "Secondary", statement: "existing" },
          { name: "Sampling", statement: "subset selection" },
        ],
        workedExample: {
          problem: "How would you measure pedestrian flows in a city centre?",
          solution:
            "Primary data: count pedestrians at locations/times. Secondary: transport data. Stratified sampling across areas/times. Ensure reliability with repeat counts.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u4-fld-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is primary data?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Data from existing sources",
              },
              {
                id: "b",
                text: "A type of map",
              },
              {
                id: "c",
                text: "Data collected first-hand",
              },
              {
                id: "d",
                text: "A statistical test",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary",
                statement: "First-hand.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = collected first-hand.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "First-hand data",
          },
        },
        {
          id: "ciealgeo-u4-fld-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between reliability and validity?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability vs validity",
                statement: "Consistency vs accuracy.",
              },
            ],
            steps: [
              {
                reasoning: "Reliability: consistent results.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Validity: measuring intended.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Consistency vs accuracy",
          },
        },
        {
          id: "ciealgeo-u4-fld-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the main sampling methods?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sampling",
                statement: "Methods.",
              },
            ],
            steps: [
              {
                reasoning: "Random, systematic, stratified, opportunity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each has advantages/disadvantages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Choice affects representativeness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sampling methods",
          },
        },
        {
          id: "ciealgeo-u4-fld-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define fieldwork, primary data, secondary data, sampling, reliability, validity. (b) What is primary data? (c) What is secondary? (d) What is reliability vs validity? (e) What are sampling methods? (f) What is triangulation? (g) What are ethics in fieldwork? (h) Evaluate importance of reliable fieldwork data.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fieldwork",
                statement: "Skills.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) First-hand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Existing sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Consistency vs accuracy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Random, systematic, stratified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Combining methods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Permission, safety, confidentiality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Reliable data essential for conclusions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fieldwork skills.",
          },
        },
        {
          id: "ciealgeo-u4-fld-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of secondary data?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "National census population statistics",
              },
              {
                id: "b",
                text: "Measuring river velocity with a flow meter",
              },
              {
                id: "c",
                text: "Interviewing shoppers about their journeys",
              },
              {
                id: "d",
                text: "Counting pedestrians outside a shopping centre",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary data",
                statement: "Existing sources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Secondary data comes from existing sources such as census statistics.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Census statistics",
          },
        },
        {
          id: "ciealgeo-u4-fld-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A researcher selects a sample of 40 households from a population of 200 households. Calculate the sampling percentage.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 20,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sampling percentage",
                statement: "(sample / population) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Percentage = (40 / 200) x 100 = 0.2 x 100.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Result = 20%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20%",
          },
        },
        {
          id: "ciealgeo-u4-fld-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is triangulation in fieldwork, and why is it used?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triangulation",
                statement: "Combining methods for reliability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Triangulation = combining two or more data collection methods to study the same phenomenon.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Used to improve reliability and validity by cross-checking findings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Combining methods to cross-check findings",
          },
        },
        {
          id: "ciealgeo-u4-fld-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In systematic sampling, how is the sample selected?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Purely by chance using random numbers",
              },
              {
                id: "b",
                text: "Only items chosen by the researcher",
              },
              {
                id: "c",
                text: "Every nth item from an ordered list",
              },
              {
                id: "d",
                text: "Whichever items are easiest to reach",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Systematic sampling",
                statement: "Regular intervals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Systematic sampling selects every nth item from an ordered list.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Every nth item",
          },
        },
        {
          id: "ciealgeo-u4-fld-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Four counts of shoppers per minute were recorded as 12, 15, 9 and 18. Calculate the mean count.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 13.5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean",
                statement: "sum of values / number of values.",
              },
            ],
            steps: [
              {
                reasoning: "Sum = 12 + 15 + 9 + 18 = 54.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mean = 54 / 4 = 13.5 shoppers per minute.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "13.5",
          },
        },
        {
          id: "ciealgeo-u4-fld-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of collecting primary data rather than relying only on secondary data.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Primary vs secondary",
                statement: "Data collection trade-offs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary data can be tailored exactly to the research question and local conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is collected first-hand so the researcher controls methods, timing and accuracy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It avoids relying on data that may be outdated or collected for other purposes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tailored, controlled, up-to-date data",
          },
        },
        {
          id: "ciealgeo-u4-fld-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which action would most improve the reliability of pedestrian flow counts?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Using a smaller, unrepresentative sample",
              },
              {
                id: "b",
                text: "Estimating numbers without counting",
              },
              {
                id: "c",
                text: "Counting only once at a single time",
              },
              {
                id: "d",
                text: "Repeating counts at different times and locations",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reliability",
                statement: "Consistency of results.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Repeat counts at different times and locations check consistency and reduce error.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Repeat counts",
          },
        },
        {
          id: "ciealgeo-u4-fld-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A town has a population of 1200, of which 60% live in urban areas and 40% in rural areas. A stratified sample of 100 people is taken in proportion to these groups. How many urban residents should be sampled?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 60,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Stratified sampling",
                statement: "Sample proportional to strata sizes.",
              },
            ],
            steps: [
              {
                reasoning: "Urban share = 60% of 100 = 0.6 x 100.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Urban sample = 60 residents.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "60",
          },
        },
        {
          id: "ciealgeo-u4-fld-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student plans to measure river velocity at five points along a 2 km stretch, taking one measurement at each point on a single morning. Evaluate this sampling strategy.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fieldwork evaluation",
                statement: "Sampling strategy critique.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: five points along the stretch cover spatial variation in velocity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: a single morning cannot capture temporal variation such as discharge changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "One measurement per point is unreliable; repeats would improve reliability.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Improvement: sample at more times and repeat measurements (triangulation).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Covers space but not time; needs repeats",
          },
        },
        {
          id: "ciealgeo-u4-fld-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In which situation is stratified sampling the most appropriate method?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "When only a few items are needed quickly",
              },
              {
                id: "b",
                text: "When every item has an equal chance and no groups exist",
              },
              {
                id: "c",
                text: "When the population contains distinct groups that must be represented proportionally",
              },
              {
                id: "d",
                text: "When the population list is unavailable",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stratified sampling",
                statement: "Proportional to groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stratified sampling ensures distinct sub-groups are represented proportionally.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Distinct groups need proportional representation",
          },
        },
        {
          id: "ciealgeo-u4-fld-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A systematic sample is taken by selecting every 4th household from a street list of 320 households. How many households are included in the sample?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 80,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Systematic interval",
                statement: "population / interval = sample size.",
              },
            ],
            steps: [
              {
                reasoning: "Sample size = 320 / 4 = 80 households.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer = 80.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "80",
          },
        },
        {
          id: "ciealgeo-u4-fld-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is opportunity sampling likely to produce biased results?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It guarantees every group is represented",
              },
              {
                id: "b",
                text: "It uses random numbers to select respondents",
              },
              {
                id: "c",
                text: "It always produces a larger sample than needed",
              },
              {
                id: "d",
                text: "It only includes whoever is convenient, which may not represent the population",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opportunity sampling",
                statement: "Convenient but biased.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convenience-based selection over-represents accessible groups, introducing bias.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Convenience causes unrepresentative bias",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u4-fld-notes",
      title: "Fieldwork — notes",
      summary:
        "Primary=first-hand, secondary=existing. Sampling methods affect representativeness.",
      sections: [
        {
          heading: "Key idea",
          body: "Good fieldwork requires reliable, valid, ethical data collection.",
        },
        {
          heading: "Evaluation",
          body: "Reliability (consistent) and validity (accurate) both essential.",
        },
      ],
    },
  ],
};
