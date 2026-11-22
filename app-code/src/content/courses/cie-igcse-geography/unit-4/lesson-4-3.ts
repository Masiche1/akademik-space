import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cieigeo-u4-lesson-4-3",
  code: "4-3",
  title: "Geography Exam Technique and Fieldwork Synthesis",
  goal: "I CAN structure geography exam answers and integrate fieldwork into responses at IGCSE standard.",
  standards: ["Cambridge IGCSE Geography 0460", "Exam technique, fieldwork"],
  vocabulary: [
    {
      term: "Command word",
      definition: "Instruction word — describe, explain, assess, evaluate.",
    },
    {
      term: "Case study",
      definition: "Detailed real-world example used as evidence.",
    },
    {
      term: "Fieldwork",
      definition: "Primary data collection outside the classroom.",
    },
    {
      term: "Annotated diagram",
      definition: "Sketch with labels explaining processes.",
    },
    {
      term: "Balanced argument",
      definition: "Answer covering multiple perspectives before judging.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u4-s3-exam",
      title: "Exam technique and fieldwork",
      skill:
        "Structure answers, use case studies and integrate fieldwork evidence.",
      lesson: {
        sections: [
          {
            heading: "Answer structure",
            body: "IGCSE Geography rewards: definition/mechanism → application to case study → evaluation where asked. 'Explain' needs causes; 'Assess/Evaluate' needs a judgement. Use named places as evidence — 'the River Severn flooded in 2007' beats 'rivers flood'.",
          },
          {
            heading: "Fieldwork integration",
            body: "Primary data (your own measurements) strengthens answers when it is specific: 'our survey of 50 shoppers found 68% walked to the centre'. Always state sample size and method briefly — it shows reliability awareness.",
          },
        ],
        keyFormulas: [
          {
            name: "Answer chain",
            statement: "concept + named case + evaluation",
          },
          { name: "Fieldwork", statement: "method + sample + finding" },
        ],
        workedExample: {
          problem: "Use fieldwork in an answer about pedestrianisation.",
          solution:
            "'Our pedestrian count showed footfall rose 40% after the scheme, supporting the claim that pedestrianisation increases retail activity.'",
        },
      },
      questions: [
        {
          id: "cieigeo-u4-ex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the command word 'assess' require in a geography answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weigh evidence and reach a judgement" },
              { id: "b", text: "List facts" },
              { id: "c", text: "Define the term" },
              { id: "d", text: "Draw a diagram" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Command words",
                statement: "Assess = weigh + judge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Assess requires balanced weighing ending in judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Weigh evidence and reach a judgement",
          },
        },
        {
          id: "cieigeo-u4-ex-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are named case studies more effective than generic examples in IGCSE Geography answers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Case studies",
                statement: "Specific evidence shows application.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Named cases prove the concept applies to real places, not just theory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Details (dates, figures) make answers credible and memorable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Proves real-world application; details add credibility",
          },
        },
        {
          id: "cieigeo-u4-ex-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student writes 'people like pedestrianisation because it is nice'. Rewrite this to meet IGCSE standards, using the fieldwork method + sample + finding approach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fieldwork evidence",
                statement: "Method + sample + finding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add method and sample: 'In our questionnaire of 60 shoppers...'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add specific finding: '72% said the pedestrianised street felt safer'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Link to concept: supports the claim that pedestrianisation improves perceived safety.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Method + sample + finding linked to the concept",
          },
        },
        {
          id: "cieigeo-u4-ex-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Outline a four-part structure for a 8-mark 'assess' question on river management strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Assess structure",
                statement: "Weigh both sides + judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P1: define the strategies being assessed (hard vs soft engineering).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P2: strengths of each with a named case example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P3: weaknesses/costs of each — balanced view.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P4: judgement — which suits which context (e.g. hard for urban, soft for rural).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Define → strengths+cases → weaknesses → contextual judgement",
          },
        },
        {
          id: "cieigeo-u4-ex-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the command word 'describe' require in a geography answer?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Explain the causes of a process",
              },
              { id: "b", text: "Compare two places" },
              { id: "c", text: "Weigh evidence and judge" },
              {
                id: "d",
                text: "Give accurate factual detail",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Command words",
                statement: "Describe = factual detail.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Describe asks for what can be observed or measured.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Give accurate factual detail",
          },
        },
        {
          id: "cieigeo-u4-ex-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the most reliable way to measure pedestrian numbers for fieldwork?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Systematic observation and counting at set times and places",
              },
              { id: "b", text: "Counting only on rainy days" },
              { id: "c", text: "Asking one friend for an estimate" },
              { id: "d", text: "Guessing from a distance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fieldwork method",
                statement:
                  "Reliable data needs systematic, repeatable methods.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fixed times and places make counts comparable and repeatable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Systematic observation and counting at set times and places",
          },
        },
        {
          id: "cieigeo-u4-ex-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 60 shoppers, 42 walked to the town centre. Calculate (a) the percentage who walked and (b) the percentage who did not.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Percentage who walked (%)",
                answer: 70,
                unit: "%",
              },
              {
                label: "(b) Percentage who did not (%)",
                answer: 30,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Survey percentages",
                statement: "Group % = group ÷ total × 100; parts sum to 100%.",
              },
            ],
            steps: [
              {
                reasoning: "42 ÷ 60 × 100 = 70% walked.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "18 ÷ 60 × 100 = 30% did not walk.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "70%; 30%",
          },
        },
        {
          id: "cieigeo-u4-ex-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should a fieldwork report state the sample size?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It proves the hypothesis is correct",
              },
              {
                id: "b",
                text: "It shows how representative and reliable the data is",
              },
              {
                id: "c",
                text: "Exam boards require it randomly",
              },
              {
                id: "d",
                text: "It makes the answer look longer",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fieldwork reliability",
                statement:
                  "Sample size affects how far results can be generalised.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Larger, stated samples let readers judge reliability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "It shows how representative and reliable the data is",
          },
        },
        {
          id: "cieigeo-u4-ex-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Footfall past a shop rose from 200 people per hour to 280 after pedestrianisation. Calculate (a) the increase in numbers and (b) the percentage increase.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Increase (people per hour)",
                answer: 80,
                unit: "people/hour",
              },
              {
                label: "(b) Percentage increase (%)",
                answer: 40,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Percentage change",
                statement: "Increase = new − old; % = increase ÷ old × 100.",
              },
            ],
            steps: [
              {
                reasoning: "280 − 200 = 80 people per hour increase.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "80 ÷ 200 × 100 = 40% increase.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "80; 40%",
          },
        },
        {
          id: "cieigeo-u4-ex-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "The command word 'compare' requires an answer that...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Defines the key terms" },
              { id: "b", text: "Ends with a personal judgement" },
              {
                id: "c",
                text: "Gives both similarities and differences",
              },
              { id: "d", text: "Only lists differences" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Command words",
                statement: "Compare = similarities and differences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A full comparison covers where things are alike and different.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gives both similarities and differences",
          },
        },
        {
          id: "cieigeo-u4-ex-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the weakest approach in an IGCSE Geography answer?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Linking a concept to a real example",
              },
              {
                id: "b",
                text: "Using a named case study with figures",
              },
              {
                id: "c",
                text: "Presenting a balanced argument before judging",
              },
              {
                id: "d",
                text: "Making vague generalisations with no place or data",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Answer quality",
                statement: "Specific evidence beats vague claims.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vague answers cannot demonstrate application or knowledge.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Making vague generalisations with no place or data",
          },
        },
        {
          id: "cieigeo-u4-ex-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A questionnaire was handed to 120 residents and 90 completed it. Calculate (a) the response rate as a percentage and (b) the number who did not respond.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Response rate (%)",
                answer: 75,
                unit: "%",
              },
              {
                label: "(b) Non-respondents",
                answer: 30,
                unit: "people",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Response rate",
                statement: "Rate = completed ÷ distributed × 100.",
              },
            ],
            steps: [
              {
                reasoning: "90 ÷ 120 × 100 = 75% response rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "120 − 90 = 30 people did not respond.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "75%; 30",
          },
        },
        {
          id: "cieigeo-u4-ex-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the strongest way to use fieldwork in an exam answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignore fieldwork entirely" },
              {
                id: "b",
                text: "State only personal opinions about the topic",
              },
              {
                id: "c",
                text: "Mention that fieldwork was done, with no detail",
              },
              {
                id: "d",
                text: "Give the method, sample, finding and link it to the concept",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fieldwork evidence",
                statement: "Method + sample + finding linked to concept.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Specific, linked evidence shows application of the concept.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Give the method, sample, finding and link it to the concept",
          },
        },
        {
          id: "cieigeo-u4-ex-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "River widths measured at five sites were 12 m, 15 m, 18 m, 9 m and 16 m. Calculate (a) the mean width and (b) the range.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Mean width (m)",
                answer: 14,
                unit: "m",
              },
              {
                label: "(b) Range (m)",
                answer: 9,
                unit: "m",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Mean and range",
                statement: "Mean = total ÷ count; range = max − min.",
              },
            ],
            steps: [
              {
                reasoning: "(12 + 15 + 18 + 9 + 16) ÷ 5 = 70 ÷ 5 = 14 m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "18 − 9 = 9 m range.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "14 m; 9 m",
          },
        },
        {
          id: "cieigeo-u4-ex-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Outline a four-part structure for a 6-mark 'evaluate' question on urban transport schemes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluate structure",
                statement: "Weigh both sides + judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P1: identify the schemes being evaluated (e.g. cycle lanes, congestion charging).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P2: benefits — congestion reduction, pollution cut, with named example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P3: drawbacks — cost, displacement of traffic, equity issues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P4: judgement conditioned on context — works best where public transport is good.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Identify schemes → benefits+cases → drawbacks → contextual judgement",
          },
        },
        {
          id: "cieigeo-u4-ex-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A survey of 240 residents found 65% support a new cycle lane. Calculate (a) the number supporting it and (b) the number opposing it.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Residents supporting",
                answer: 156,
                unit: "people",
              },
              {
                label: "(b) Residents opposing",
                answer: 84,
                unit: "people",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Survey percentages",
                statement:
                  "Group count = % × total; opposing = total − supporting.",
              },
            ],
            steps: [
              {
                reasoning: "240 × 0.65 = 156 residents support it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "240 − 156 = 84 residents oppose it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "156; 84",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u4-exam-notes",
      title: "Exam technique — revision notes",
      summary: "Command words, case studies, fieldwork integration.",
      sections: [
        {
          heading: "Key skills",
          body: "Concept + named case + evaluation; fieldwork needs method, sample size and finding.",
        },
        {
          heading: "Exam tips",
          body: "Prepare two case studies per topic with figures — 'the 2007 floods' beats 'floods happen'.",
        },
      ],
    },
  ],
};
