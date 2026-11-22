import type { Lesson } from "../../../types.ts";

export const lesson321: Lesson = {
  id: "cieigeo-u3-lesson-3-1",
  code: "3-1",
  title: "Geographical Skills: Fieldwork and Data Collection",
  goal: "I CAN plan and conduct geographical fieldwork and collect data.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 4: geographical skills"],

  vocabulary: [
    { term: "Fieldwork", definition: "Data collection in the field." },
    {
      term: "Primary data",
      definition: "Data collected directly by researcher.",
    },
    { term: "Secondary data", definition: "Data from existing sources." },
    {
      term: "Sampling",
      definition: "Selecting representative subset of population.",
    },
    {
      term: "Questionnaire",
      definition: "Structured set of questions for data collection.",
    },
    { term: "Observation", definition: "Systematic watching and recording." },
  ],
  concepts: [
    {
      id: "cieigeo-u3-s1-field",
      title: "Fieldwork",
      skill: "Plan and conduct geographical fieldwork.",
      lesson: {
        sections: [
          {
            heading: "Fieldwork methods",
            body: "Primary: questionnaires, interviews, observations, measurements, photography. Secondary: maps, satellite images, census data, reports. Choose method based on research question.",
          },
          {
            heading: "Sampling",
            body: "Random: every member has equal chance. Systematic: every nth item. Stratified: proportional to groups. Opportunity: whoever is available. Sample size affects reliability.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "collected directly" },
          { name: "Secondary", statement: "existing sources" },
          { name: "Sampling", statement: "representative subset" },
        ],
        workedExample: {
          problem:
            "You want to study pedestrian flows in a city centre. What fieldwork method?",
          solution:
            "Observation/counting at different times + questionnaire for pedestrian opinions.",
        },
      },
      questions: [
        {
          id: "cieigeo-u3-fw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is fieldwork?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of map",
              },
              {
                id: "b",
                text: "A weather pattern",
              },
              {
                id: "c",
                text: "Data collection in the field",
              },
              {
                id: "d",
                text: "Desk research",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fieldwork",
                statement: "Field data collection.",
              },
            ],
            steps: [
              {
                reasoning: "Fieldwork = collecting data in field.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Field data collection",
          },
        },
        {
          id: "cieigeo-u3-fw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between primary and secondary data?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary vs secondary",
                statement: "New vs existing data.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = collected directly by researcher.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Secondary = from existing sources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "New vs existing data",
          },
        },
        {
          id: "cieigeo-u3-fw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is random sampling?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Random sampling",
                statement: "Equal chance selection.",
              },
            ],
            steps: [
              {
                reasoning: "Every member has equal chance of selection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces bias.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Most representative method.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Equal chance selection",
          },
        },
        {
          id: "cieigeo-u3-fw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define fieldwork, primary data, secondary data, sampling, questionnaire, observation. (b) What is fieldwork? (c) What is primary data? (d) What is secondary data? (e) What is random sampling? (f) What are fieldwork methods? (g) How do you choose a sampling method? (h) Design a fieldwork plan to study local river pollution.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fieldwork",
                statement: "Methods, sampling.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Field data collection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Directly collected data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Existing data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Equal chance selection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Questionnaires, interviews, observations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Based on research question/population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid fieldwork plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fieldwork planning and methods.",
          },
        },
        {
          id: "cieigeo-u3-fw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Primary data is best described as:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Data collected by another school" },
              { "id": "b", "text": "Data from a newspaper" },
              { "id": "c", "text": "Data collected directly by the researcher" },
              { "id": "d", "text": "Data copied from the internet" }
            ],
            "correctChoiceId": "c"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Primary data", "statement": "Data collected first-hand by the researcher." }
            ],
            "steps": [
              { "reasoning": "Primary data comes from direct fieldwork methods.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Data collected directly by researcher"
          }
        },
        {
          id: "cieigeo-u3-fw-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A class surveys 40 students out of a school population of 200. (a) Calculate the sample as a percentage. (b) How many students would be surveyed if every 5th student were chosen systematically?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "(a) Sample percentage (%)", "answer": 20, "unit": "%" },
              { "label": "(b) Systematic sample size (students)", "answer": 40, "unit": "students" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Sampling", "statement": "Sample % = sample ÷ population x 100; systematic interval = population ÷ interval." }
            ],
            "steps": [
              { "reasoning": "(a) 40 ÷ 200 x 100 = 20%.", "working": "40 / 200 \\times 100 = 20", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) 200 ÷ 5 = 40 students.", "working": "200 / 5 = 40", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "(a) 20% (b) 40"
          }
        },
        {
          id: "cieigeo-u3-fw-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish between a questionnaire and observation as fieldwork methods.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Fieldwork methods", "statement": "Questionnaires ask questions; observation records behaviour." }
            ],
            "steps": [
              { "reasoning": "A questionnaire collects opinions or responses using structured questions.", "marks": 1, "markCode": "M" },
              { "reasoning": "Observation records what people do or what is present without asking.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Questionnaire asks; observation watches"
          }
        },
        {
          id: "cieigeo-u3-fw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Stratified sampling is used when:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Only the first people met are surveyed" },
              { "id": "b", "text": "No sampling is needed" },
              { "id": "c", "text": "Every tenth person is selected" },
              { "id": "d", "text": "The population contains distinct groups that must be represented proportionally" }
            ],
            "correctChoiceId": "d"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Stratified sampling", "statement": "Samples are divided into groups and selected proportionally." }
            ],
            "steps": [
              { "reasoning": "It ensures each subgroup is represented in proportion to the population.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "To represent distinct groups proportionally"
          }
        },
        {
          id: "cieigeo-u3-fw-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A researcher wants a sample of 60 people from a population of 1 200. (a) Calculate the sampling fraction as a percentage. (b) For systematic sampling, what interval should be used?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "(a) Sampling fraction (%)", "answer": 5, "unit": "%" },
              { "label": "(b) Systematic interval", "answer": 20, "unit": "people" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Sampling", "statement": "Fraction = sample ÷ population; interval = population ÷ sample." }
            ],
            "steps": [
              { "reasoning": "(a) 60 ÷ 1 200 x 100 = 5%.", "working": "60 / 1200 \\times 100 = 5", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) 1 200 ÷ 60 = every 20th person.", "working": "1200 / 60 = 20", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "(a) 5% (b) every 20th"
          }
        },
        {
          id: "cieigeo-u3-fw-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a researcher can improve the reliability of fieldwork data.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "method", "name": "Reliability", "statement": "Repeatable methods produce consistent results." }
            ],
            "steps": [
              { "reasoning": "Use a large enough and representative sample.", "marks": 1, "markCode": "M" },
              { "reasoning": "Repeat measurements or surveys at different times and places.", "marks": 1, "markCode": "M" },
              { "reasoning": "Use clear questions, consistent recording and check for anomalies.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Representative samples and repeated consistent methods"
          }
        },
        {
          id: "cieigeo-u3-fw-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Opportunity sampling is likely to be biased because:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "It surveys whoever is available rather than representing the whole population" },
              { "id": "b", "text": "It always uses random selection" },
              { "id": "c", "text": "It cannot collect any data" },
              { "id": "d", "text": "Every member has an equal chance" }
            ],
            "correctChoiceId": "a"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Opportunity sampling", "statement": "Convenience-based selection of available people." }
            ],
            "steps": [
              { "reasoning": "Convenient respondents may not represent the wider population.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "It may not represent the population"
          }
        },
        {
          id: "cieigeo-u3-fw-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fieldwork plan to investigate pedestrian movement in a city centre.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "method", "name": "Fieldwork plan", "statement": "Question, method, sample, timing and recording." }
            ],
            "steps": [
              { "reasoning": "State a clear aim, e.g. where and when pedestrians concentrate.", "marks": 1, "markCode": "M" },
              { "reasoning": "Choose counting/observation at fixed locations and times.", "marks": 1, "markCode": "M" },
              { "reasoning": "Include a questionnaire if opinions or routes are needed.", "marks": 1, "markCode": "M" },
              { "reasoning": "Plan repeat counts, record systematically and consider ethics.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Aim, observation/counting, questionnaire and repeat sampling"
          }
        },
        {
          id: "cieigeo-u3-fw-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pedestrian counts at five locations are 120, 150, 90, 180 and 160. (a) Calculate the mean. (b) Calculate the range.",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "(a) Mean count", "answer": 140, "unit": "people" },
              { "label": "(b) Range", "answer": 90, "unit": "people" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Statistics", "statement": "Mean = sum ÷ count; range = maximum - minimum." }
            ],
            "steps": [
              { "reasoning": "(a) 700 ÷ 5 = 140.", "working": "700 / 5 = 140", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) 180 - 90 = 90.", "working": "180 - 90 = 90", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "(a) 140 (b) 90"
          }
        },
        {
          id: "cieigeo-u3-fw-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of random sampling for a school questionnaire.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "comparison", "name": "Sampling choice", "statement": "Random sampling balances representativeness and practicality." }
            ],
            "steps": [
              { "reasoning": "Benefit: every student has an equal chance, reducing bias.", "marks": 1, "markCode": "M" },
              { "reasoning": "Benefit: results are more likely to represent the whole school.", "marks": 1, "markCode": "M" },
              { "reasoning": "Limitation: may be difficult to contact selected students or need a sampling frame.", "marks": 1, "markCode": "M" },
              { "reasoning": "Conclusion: usually the fairest method if practical.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Random sampling is fair but may be difficult"
          }
        },
        {
          id: "cieigeo-u3-fw-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sampling method gives every member of the population an equal chance of selection?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Convenience sampling" },
              { "id": "b", "text": "Opportunity sampling" },
              { "id": "c", "text": "Random sampling" },
              { "id": "d", "text": "Voluntary sampling" }
            ],
            "correctChoiceId": "c"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Random sampling", "statement": "Equal chance selection." }
            ],
            "steps": [
              { "reasoning": "Random selection removes personal choice by the researcher.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Random sampling"
          }
        },
        {
          id: "cieigeo-u3-fw-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define fieldwork, primary data and secondary data. (b) Give two primary data methods. (c) Give two secondary data sources. (d) Explain random sampling. (e) Explain stratified sampling. (f) Give one advantage and one disadvantage of questionnaires. (g) Give one advantage of observation. (h) Design a simple fieldwork plan for studying local land use.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "technique", "name": "Fieldwork", "statement": "Methods, data and sampling." }
            ],
            "steps": [
              { "reasoning": "(a) Fieldwork = data in field; primary = first-hand; secondary = existing.", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) e.g. questionnaires and observation.", "marks": 1, "markCode": "M" },
              { "reasoning": "(c) e.g. maps and census reports.", "marks": 1, "markCode": "M" },
              { "reasoning": "(d) Every member has an equal chance of selection.", "marks": 1, "markCode": "M" },
              { "reasoning": "(e) Groups are sampled in proportion to the population.", "marks": 1, "markCode": "M" },
              { "reasoning": "(f) Advantage: cheap and quick; disadvantage: responses may be unreliable.", "marks": 1, "markCode": "M" },
              { "reasoning": "(g) Observation records actual behaviour without asking questions.", "marks": 1, "markCode": "M" },
              { "reasoning": "(h) Aim, sampling locations, recording method and repeat visits.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Fieldwork methods and sampling."
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u3-fw-notes",
      title: "Fieldwork — notes",
      summary:
        "Primary=collected directly; secondary=existing. Sampling=random/systematic/stratified. Methods: questionnaires, observations.",
      sections: [
        {
          heading: "Key idea",
          body: "Good fieldwork requires careful planning, appropriate methods, representative sampling.",
        },
        {
          heading: "Sampling",
          body: "Random=simplest; stratified=most representative for groups.",
        },
      ],
    },
  ],
};
