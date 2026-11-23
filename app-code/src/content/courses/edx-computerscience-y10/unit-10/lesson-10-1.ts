import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "ecs10-u10-lesson-10-1",
  code: "10-1",
  title: "Collecting and Sampling Data",
  goal: "I CAN distinguish data types and sources and choose appropriate sampling methods while recognising bias.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data analysis"],
  
  vocabulary: [
    { term: "Data", definition: "Raw facts and figures collected for analysis." },
    { term: "Primary data", definition: "Data collected first-hand for a specific purpose." },
    { term: "Secondary data", definition: "Data collected by someone else, reused for a new purpose." },
    { term: "Qualitative data", definition: "Descriptive data such as opinions or categories." },
    { term: "Quantitative data", definition: "Numeric data that can be measured or counted." },
    { term: "Sample", definition: "A subset of a population used to represent the whole." },
    { term: "Bias", definition: "A systematic tendency in data collection that skews results." },
  ],
  concepts: [
    {
      id: "ecs10-u10-data-sources",
      title: "Data sources and types",
      skill: "Distinguish primary/secondary and qualitative/quantitative data and identify suitable data for a question.",
      lesson: {
        sections: [
          {
            heading: "Where data comes from",
            body: "**Primary data** is collected first-hand — surveys, sensors, experiments, interviews. It is tailored to the exact question but costs time and money. **Secondary data** already exists — census results, published statistics, old surveys. It is cheap and fast but may be outdated, collected differently, or not quite fit for purpose.",
          },
          {
            heading: "Types of data",
            body: "**Qualitative** data describes qualities — colours, opinions, names — and cannot be sensibly averaged. **Quantitative** data is numeric — heights, scores, counts — and can be measured and analysed statistically. Quantitative data is further split into **discrete** (countable, e.g. number of siblings) and **continuous** (measurable on a scale, e.g. height or time).",
          },
        ],
        keyFormulas: [
          { name: "Primary data", statement: "collected first-hand for the purpose" },
          { name: "Secondary data", statement: "reused data collected by others" },
          { name: "Qualitative", statement: "descriptive categories/opinions" },
          { name: "Quantitative", statement: "numeric — discrete or continuous" },
        ],
        workedExample: {
          problem: "A school wants to know students' favourite sports. Identify a primary and a secondary data source.",
          solution: "Primary: run a survey asking students directly. Secondary: reuse last year's survey or national sports-participation statistics.",
        },
      },
      questions: [
        {
          id: "ecs10-u10-data-sources-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is primary data?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Data collected by someone else"
                    },
                    {
                              "id": "b",
                              "text": "Data collected first-hand for a specific purpose"
                    },
                    {
                              "id": "c",
                              "text": "Data stored in a database"
                    },
                    {
                              "id": "d",
                              "text": "Data that cannot be measured"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary data",
                              "statement": "Collected first-hand for the purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary data is gathered directly for the question being investigated.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Collected first-hand",
          "commonErrors": [
                    "Confusing primary with secondary (reused) data."
          ]
},
        },
        {
          id: "ecs10-u10-data-sources-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give one example of qualitative data and one example of quantitative data.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Data types",
                              "statement": "Qualitative = descriptive; quantitative = numeric."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Qualitative example: favourite colour, opinion rating, name — any descriptive category.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Quantitative example: height in cm, exam score, number of pets — any numeric measure.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Both examples must clearly match their type.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Qualitative e.g. favourite sport; quantitative e.g. height or score.",
          "commonErrors": [
                    "Giving a numeric category code (e.g. 'team number 3') as qualitative — codes can be ordered, so borderline; prefer clear examples."
          ]
},
        },
        {
          id: "ecs10-u10-data-sources-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between discrete and continuous quantitative data, giving an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Discrete vs continuous",
                              "statement": "Countable values vs measurable scale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Discrete data takes only countable whole-number values.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: number of siblings or goals scored — cannot be 2.5 siblings.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Continuous data can take any value within a range.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: height or temperature — can be 1.73 m or 36.6 °C.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Discrete = countable (siblings); continuous = measurable (height).",
          "commonErrors": [
                    "Confusing continuous with qualitative — continuous data is still numeric."
          ]
},
        },
        {
          id: "ecs10-u10-data-sources-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A charity wants to find out why donations have fallen this year.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define primary and secondary data.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Classify each of these as primary or secondary for this question: last year's donation records; a new donor survey; national charity statistics.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary vs secondary",
                              "statement": "First-hand vs reused data."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Primary: collected first-hand specifically for this purpose.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Secondary: data collected earlier by someone else, reused now.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both definitions stated accurately.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Last year's records: secondary (collected earlier for another purpose).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "New donor survey: primary (collected first-hand now).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "National statistics: secondary (published by an external body).",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) primary=first-hand, secondary=reused (b) records=secondary, survey=primary, national stats=secondary.",
          "commonErrors": [
                    "Calling last year's own records 'primary' — they were collected for a different purpose."
          ]
},
        },
        {
          id: "ecs10-u10-data-sources-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A researcher is planning a study on students' sleep patterns.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the difference between structured and unstructured data, with an example of each.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why choosing the right type of data matters for answering the research question.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Structured vs unstructured",
                              "statement": "Organised fields vs free-form content."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Structured data fits a fixed format — tables, CSV, records with defined fields.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Example: a table of bedtime, wake time, hours slept.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Unstructured data has no fixed format — text, images, audio.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The question needs numeric sleep durations → quantitative data enables calculation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Qualitative diary comments alone cannot produce averages or comparisons.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Wrong data type wastes collection effort and cannot answer the question.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Right type (e.g. continuous hours slept) allows statistical analysis and evidence-based conclusions.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) structured=formatted table, unstructured=free text/images (b) right type enables the needed analysis.",
          "commonErrors": [
                    "Collecting rich qualitative data when the question demands numeric measures."
          ]
},
        },
        {
          id: "ecs10-u10-data-sources-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A town council wants to know whether residents support building a new cycle lane.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define primary data, secondary data, qualitative data and quantitative data.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Identify one piece of primary and one piece of secondary data that could help answer this question.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the usefulness of each source you identified.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Data taxonomy",
                              "statement": "Source (primary/secondary) × type (qual/quant)."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Primary: collected first-hand for this purpose.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Secondary: reused data collected by others earlier.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Qualitative: descriptive opinions/categories.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Quantitative: numeric measures.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Primary: a residents' survey asking support level (qualitative opinions + counts).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Secondary: previous transport survey or petition signature counts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both examples relevant to cycle-lane support.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Primary survey: directly answers the question but costs time and may suffer low response.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Secondary data: cheap and quick but may be old or measure a different question.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Best approach: combine both — secondary for context, primary survey for current opinion.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) four definitions (b) survey=primary, past data=secondary (c) combine for reliable answer.",
          "commonErrors": [
                    "Relying only on secondary data that may not reflect current opinion."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u10-sampling",
      title: "Sampling methods and bias",
      skill: "Choose appropriate sampling methods and identify sources of bias in data collection.",
      lesson: {
        sections: [
          {
            heading: "Why sample?",
            body: "The **population** is everyone the question is about; a **census** surveys all of them — accurate but often impractical (imagine asking every person in a country). A **sample** surveys a subset. Good sampling saves time and money while still representing the population — provided the sample is chosen fairly.",
          },
          {
            heading: "Sampling methods and bias",
            body: "**Random sampling** gives every member an equal chance — most representative but needs a complete list. **Systematic sampling** takes every nth member — simple and fairly unbiased. **Opportunity/volunteer sampling** uses whoever is available — quick but badly biased (e.g. only asking friends). **Stratified sampling** selects proportionally from subgroups — most accurate for varied populations. **Bias** creeps in through leading questions, self-selection, or unrepresentative samples, skewing results away from the truth.",
          },
        ],
        keyFormulas: [
          { name: "Census", statement: "survey the entire population" },
          { name: "Random sample", statement: "every member has equal chance" },
          { name: "Stratified sample", statement: "proportional subgroups — most representative" },
          { name: "Bias", statement: "systematic skew making results unrepresentative" },
        ],
        workedExample: {
          problem: "A school of 1200 students wants opinions on a new uniform. Suggest a fair sampling method.",
          solution: "Randomly select 100 students from the full register — every student has an equal chance, giving a representative sample.",
        },
      },
      questions: [
        {
          id: "ecs10-u10-sampling-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In random sampling, how is the sample chosen?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "By asking whoever is convenient"
                    },
                    {
                              "id": "b",
                              "text": "Every member of the population has an equal chance of selection"
                    },
                    {
                              "id": "c",
                              "text": "Only volunteers respond"
                    },
                    {
                              "id": "d",
                              "text": "The researcher picks favourite members"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Random sampling",
                              "statement": "Equal chance for every member."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Random sampling gives every population member an equal probability of being chosen.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Equal chance for every member",
          "commonErrors": [
                    "Confusing random with opportunity sampling — convenience is biased."
          ]
},
        },
        {
          id: "ecs10-u10-sampling-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two reasons why a researcher might survey a sample instead of the whole population.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Sampling rationale",
                              "statement": "Time, cost, practicality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Time — surveying thousands takes far longer than a few hundred.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cost — fewer surveys means less money spent on printing, staff, incentives.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Practicality — the whole population may be unreachable or too large to list.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Saves time, money and effort; population may be too large or inaccessible.",
          "commonErrors": [
                    "Claiming samples are always less accurate — a good sample can represent well."
          ]
},
        },
        {
          id: "ecs10-u10-sampling-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what bias is in data collection and describe one way it can occur.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bias",
                              "statement": "Systematic skew away from the truth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bias is a systematic tendency that makes results unrepresentative of the population.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It can occur through an unrepresentative sample — e.g. only asking friends.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Or through leading questions — 'Don't you agree the new menu is great?'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Self-selection also biases: only people with strong opinions bother to respond.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Systematic skew; e.g. unrepresentative sample, leading questions or self-selection.",
          "commonErrors": [
                    "Confusing bias with random error — bias is systematic, not accidental."
          ]
},
        },
        {
          id: "ecs10-u10-sampling-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A company wants to survey its 5000 employees about remote working but only has time to ask 200.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the difference between a population and a sample in this context.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe two sampling methods the company could use.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Population vs sample",
                              "statement": "Everyone studied vs the subset surveyed."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Population = all 5000 employees the question is about.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sample = the 200 actually surveyed.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The sample should represent the whole population's views.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Random: pick 200 names at random from the staff list — equal chance.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Systematic: select every 25th name on the alphabetical list.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Stratified: sample proportionally from departments/levels.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) population=5000 employees, sample=200 surveyed (b) random/systematic/stratified.",
          "commonErrors": [
                    "Surveying only volunteers — self-selection bias skews results."
          ]
},
        },
        {
          id: "ecs10-u10-sampling-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A researcher asks shoppers at a single supermarket on a Saturday morning whether they support a new park.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two sources of bias in this data collection.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest a better sampling method and justify your choice.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Bias identification",
                              "statement": "Location/time bias + self-selection."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Location bias: only shoppers at one supermarket — misses residents who shop elsewhere or don't shop there.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Time bias: Saturday morning catches a particular group (e.g. weekend shoppers).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Self-selection/volunteer bias: only people willing to stop and answer respond.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use random sampling from the town's electoral roll or address list.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Every resident has an equal chance regardless of shopping habits.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Alternative: stratified sampling across neighbourhoods to cover the whole town.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Justification: removes location/time bias and gives a representative cross-section.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) location/time/self-selection bias (b) random or stratified sampling from resident list.",
          "commonErrors": [
                    "Suggesting 'ask more people' — quantity doesn't fix unrepresentative selection."
          ]
},
        },
        {
          id: "ecs10-u10-sampling-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school of 900 students wants to know if a 4-day week would improve wellbeing. The headteacher can survey at most 150 students.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define census, sample and population for this scenario.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Choose a sampling method and explain how it would be carried out.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate one limitation of using a sample for this decision.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sampling terms",
                              "statement": "Census = all; sample = subset; population = everyone studied."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Census: surveying all 900 students.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sample: the 150 students actually surveyed.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Population: all 900 students whose wellbeing is in question.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "All three terms correctly applied to the scenario.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Method e.g. stratified random: sample proportionally from each year group.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Carry out: list all students, group by year, randomly pick the quota from each.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Or simple random: assign numbers 1-900 and pick 150 at random.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Limitation: 150 may not capture every subgroup's views — e.g. a small year group could be missed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Non-respondents may differ from respondents (self-selection).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sample results are estimates — decisions affect all 900, so uncertainty must be acknowledged.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) census=all 900, sample=150, population=900 (b) stratified/random with procedure (c) sampling uncertainty/self-selection.",
          "commonErrors": [
                    "Only surveying one year group — unrepresentative of the whole school."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u10-sampling-notes",
      title: "Collecting and sampling data — notes",
      summary: "Primary vs secondary; qualitative vs quantitative; sample fairly to avoid bias.",
      sections: [
        { heading: "Data types", body: "Source: primary (first-hand) vs secondary (reused). Type: qualitative (descriptive) vs quantitative (numeric; discrete or continuous)." },
        { heading: "Sampling", body: "Census = everyone; sample = subset. Random = equal chance; systematic = every nth; stratified = proportional groups; opportunity/volunteer = biased." },
        { heading: "Bias", body: "Skews results: unrepresentative samples, leading questions, self-selection, wrong time/place." },
      ],
    },
  ],
};
