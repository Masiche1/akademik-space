import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cieiec-u4-lesson-4-1",
  code: "4-1",
  title: "Data Response and Structured Question Technique",
  goal: "I CAN extract and apply economic data to structured questions at IGCSE standard.",
  standards: [
    "Cambridge IGCSE Economics 0455",
    "Paper technique: data response, structured questions",
  ],
  vocabulary: [
    {
      term: "Data response",
      definition:
        "Questions based on stimulus material — tables, graphs, extracts.",
    },
    { term: "Stimulus", definition: "The case material a question refers to." },
    {
      term: "Extract",
      definition: "Written passage providing context for questions.",
    },
    {
      term: "Application",
      definition: "Using theory to explain the specific stimulus.",
    },
    {
      term: "Evaluation",
      definition: "Weighing evidence to reach a judgement.",
    },
  ],
  concepts: [
    {
      id: "cieiec-u4-s1-data",
      title: "Data response technique",
      skill: "Apply economic theory to stimulus data and extracts.",
      lesson: {
        sections: [
          {
            heading: "Reading the stimulus",
            body: "IGCSE Economics papers give tables, graphs and extracts. Read the stimulus FIRST, identify the economic concept it illustrates, then answer — never answer from memory alone. Quote specific figures or phrases from the stimulus to show application.",
          },
          {
            heading: "Structured answers",
            body: "Most questions chain: define → apply to stimulus → evaluate. A 4-mark 'explain' needs mechanism + application; an 8-mark 'evaluate/discuss' needs balanced argument + judgement. Marks indicate depth — plan points before writing.",
          },
        ],
        keyFormulas: [
          {
            name: "Answer chain",
            statement: "concept + stimulus detail + evaluation",
          },
          {
            name: "Marks = depth",
            statement: "4 marks ≈ 2 explained points; 8+ ≈ balanced argument",
          },
        ],
        workedExample: {
          problem:
            "Stimulus: 'A country removes subsidies on fuel.' Question: Explain one likely effect on the economy.",
          solution:
            "Removing subsidies raises fuel prices → production and transport costs rise → prices increase and demand may fall (inflationary pressure).",
        },
      },
      questions: [
        {
          id: "cieiec-u4-dr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do FIRST when a data-response question gives a table or graph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start writing immediately" },
              { id: "b", text: "Read and interpret the stimulus carefully" },
              { id: "c", text: "Skip to the last question" },
              { id: "d", text: "Memorise definitions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stimulus first",
                statement: "Data guides the answer.",
              },
            ],
            steps: [
              {
                reasoning: "The stimulus defines what the question tests.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Read and interpret the stimulus carefully",
          },
        },
        {
          id: "cieiec-u4-dr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is quoting a specific figure from a data-response stimulus better than writing generically?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Application",
                statement: "Stimulus detail proves application.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It shows the answer is tailored to the case, not memorised theory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examiners award application marks for using the given data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Proves application to the specific case; earns application marks",
          },
        },
        {
          id: "cieiec-u4-dr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Stimulus: 'Unemployment in Country X rose from 5% to 9% in one year.' Explain two possible economic causes using economic theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Theory application",
                statement: "Link concept to stimulus data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Falling aggregate demand — e.g. recession or reduced consumer spending reduces output and jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Structural change — automation or declining industries make workers' skills obsolete.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both link theory to the 5%→9% rise in the stimulus.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Demand fall or structural unemployment — applied to the stimulus figures",
          },
        },
        {
          id: "cieiec-u4-dr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A question asks: 'Evaluate the likely impact of a minimum wage rise.' Outline a four-point answer structure that would score highly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation structure",
                statement: "Benefits → costs → judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P1: benefit — reduces poverty/income inequality for low-wage workers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P2: cost — may reduce employment if firms can't afford higher wages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P3: depends on context — impact varies with market structure and wage level set.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P4: judgement — 'likely beneficial if set moderately; risky if above productivity levels'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Benefits → costs → context-dependence → qualified judgement",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u4-data-notes",
      title: "Data response — revision notes",
      summary: "Stimulus first, application, balanced evaluation.",
      sections: [
        {
          heading: "Key skills",
          body: "Read stimulus before answering; quote figures; chain concept→application→evaluation.",
        },
        {
          heading: "Exam tips",
          body: "Underline key numbers and terms in the stimulus; every point should reference it.",
        },
      ],
    },
  ],
};
