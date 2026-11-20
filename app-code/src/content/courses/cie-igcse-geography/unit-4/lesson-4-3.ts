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
              { id: "a", text: "Define the term" },
              { id: "b", text: "Weigh evidence and reach a judgement" },
              { id: "c", text: "Draw a diagram" },
              { id: "d", text: "List facts" },
            ],
            correctChoiceId: "b",
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
