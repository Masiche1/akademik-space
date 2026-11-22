import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cieiec-u4-lesson-4-2",
  code: "4-2",
  title: "Essay and Extended Response Technique",
  goal: "I CAN structure extended economics answers and evaluations at IGCSE standard.",
  standards: [
    "Cambridge IGCSE Economics 0455",
    "Paper technique: essays, evaluation",
  ],
  vocabulary: [
    {
      term: "Essay question",
      definition: "Extended question requiring structured argument.",
    },
    { term: "Thesis", definition: "The main argument or position taken." },
    {
      term: "Counter-argument",
      definition: "The opposing view addressed in the essay.",
    },
    {
      term: "Judgement",
      definition: "Final position reached after weighing evidence.",
    },
    {
      term: "Chain of reasoning",
      definition: "Logical sequence linking cause to effect.",
    },
  ],
  concepts: [
    {
      id: "cieiec-u4-s2-essay",
      title: "Essay technique",
      skill:
        "Structure extended answers with argument, counter-argument and judgement.",
      lesson: {
        sections: [
          {
            heading: "Essay structure",
            body: "IGCSE Economics extended answers reward: clear thesis → developed points with economic reasoning → counter-argument → judgement. Each point needs a chain: policy/market change → effect on actors → outcome. Avoid description-only answers — always explain WHY.",
          },
          {
            heading: "Evaluation",
            body: "'Discuss' and 'evaluate' demand balance: present the strongest case for AND against, then judge. 'To what extent' asks for a qualified position — 'largely yes, except when...'. A one-sided essay caps at mid-band regardless of knowledge.",
          },
        ],
        keyFormulas: [
          {
            name: "Essay chain",
            statement: "thesis → points + reasoning → counter → judgement",
          },
          {
            name: "Evaluation",
            statement: "both sides + qualified conclusion",
          },
        ],
        workedExample: {
          problem: "Evaluate 'Free trade benefits all countries'.",
          solution:
            "Benefits: specialisation gains, lower prices, efficiency. Costs: job losses in uncompetitive industries, dependency. Judgement: benefits are real but unevenly distributed — gains depend on adjustment policies.",
        },
      },
      questions: [
        {
          id: "cieiec-u4-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'chain of reasoning' in economics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of definitions" },
              { id: "b", text: "A government policy" },
              { id: "c", text: "A type of graph" },
              { id: "d", text: "Logical sequence linking cause to effect" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chain of reasoning",
                statement: "Cause→effect logic.",
              },
            ],
            steps: [
              {
                reasoning: "Chains link economic changes step by step.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Logical sequence linking cause to effect",
          },
        },
        {
          id: "cieiec-u4-es-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a purely descriptive economics answer loses marks on an 'evaluate' question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Command word",
                statement: "Evaluate demands judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Description states facts without weighing them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluation requires pros/cons and a supported conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "No weighing or judgement — misses the command word's requirement",
          },
        },
        {
          id: "cieiec-u4-es-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this economics point: 'Inflation is bad.' Make it a proper evaluated point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Developed point",
                statement: "Mechanism + consequence + nuance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add mechanism: rising prices erode purchasing power, especially for fixed-income groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add consequence: can trigger wage-price spiral if expectations rise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add nuance: moderate inflation can signal a growing economy — context matters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mechanism + consequence + nuance — evaluated, not just claimed",
          },
        },
        {
          id: "cieiec-u4-es-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a 10-mark essay answer to 'To what extent do subsidies help farmers?'. Give the paragraph structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay plan",
                statement: "Thesis + developed points + counter + judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intro: thesis — subsidies support farm incomes but create distortions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P1-P2: benefits — income stability, food security, rural employment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P3-P4: costs — government spending, overproduction, trade distortion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: 'largely helpful for food security but costly and distortionary — depends on design'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Thesis → benefits → costs → qualified judgement",
          },
        },
        {
          id: "cieiec-u4-es-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an economics essay, the 'thesis' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The examiner's mark scheme" },
              { id: "b", text: "A type of diagram" },
              { id: "c", text: "The main argument or position taken" },
              { id: "d", text: "A list of definitions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thesis",
                statement: "The main argument or position.",
              },
            ],
            steps: [
              {
                reasoning: "The thesis states the essay's central position.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The main argument or position taken",
          },
        },
        {
          id: "cieiec-u4-es-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'counter-argument' in an essay is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The conclusion paragraph" },
              { id: "b", text: "The opposing view that must be addressed" },
              { id: "c", text: "An example with no reasoning" },
              { id: "d", text: "A second definition of the same term" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counter-argument",
                statement: "The opposing view addressed.",
              },
            ],
            steps: [
              {
                reasoning: "Counter-argument presents the other side before judging.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The opposing view that must be addressed",
          },
        },
        {
          id: "cieiec-u4-es-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The strongest possible conclusion to an 'evaluate' question is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A qualified judgement weighing both sides" },
              { id: "b", text: "A restatement of the question" },
              { id: "c", text: "No conclusion at all" },
              { id: "d", text: "A list of more definitions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Both sides + qualified conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluate demands a supported judgement, not just description.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A qualified judgement weighing both sides",
          },
        },
        {
          id: "cieiec-u4-es-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which paragraph structure scores highest for a 10-mark 'evaluate' essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Definition → example → definition → example" },
              { id: "b", text: "All the arguments for, ignoring arguments against" },
              { id: "c", text: "A long list of statistics with no explanation" },
              { id: "d", text: "Thesis → developed points with reasoning → counter-argument → judgement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay structure",
                statement: "Thesis → points → counter → judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Balanced structure with judgement earns top marks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Thesis → points → counter → judgement",
          },
        },
        {
          id: "cieiec-u4-es-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'judgement' in an economics essay, and why does it matter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Judgement",
                statement: "Final position after weighing evidence.",
              },
            ],
            steps: [
              { reasoning: "Judgement = final supported position.", marks: 1, markCode: "M" },
              {
                reasoning: "It answers 'to what extent' and caps the mark band without it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The final position reached after weighing evidence — required for top marks",
          },
        },
        {
          id: "cieiec-u4-es-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between the command words 'describe', 'explain' and 'evaluate' in economics questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Command words",
                statement: "Each demands a different depth.",
              },
            ],
            steps: [
              {
                reasoning: "Describe = state facts/features without reasoning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explain = show how/why with a chain of reasoning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate = weigh both sides and reach a judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Facts → reasoning → weighed judgement",
          },
        },
        {
          id: "cieiec-u4-es-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this weak point into a developed economics point: 'Minimum wage causes unemployment.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Developed point",
                statement: "Mechanism + consequence + nuance.",
              },
            ],
            steps: [
              {
                reasoning: "Add mechanism: a wage floor above equilibrium reduces labour demand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add consequence: firms hire fewer low-skilled workers -> unemployment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add nuance: effect depends on level of minimum wage and labour market conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mechanism + consequence + nuance — evaluated, not just claimed",
          },
        },
        {
          id: "cieiec-u4-es-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a 10-mark essay answer to 'To what extent does competition policy benefit consumers?'. Give the paragraph structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay plan",
                statement: "Thesis + developed points + counter + judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Intro: thesis — competition policy helps consumers but has limits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P1-P2: benefits — lower prices, more choice, prevents monopoly exploitation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P3-P4: limits/counter — enforcement costs, may stifle efficiency, imperfect information.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Conclusion: 'largely beneficial where markets are concentrated — depends on design'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Thesis → benefits → limits → qualified judgement",
          },
        },
        {
          id: "cieiec-u4-es-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim: 'Essay technique matters more than economic knowledge in IGCSE Economics exams.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay technique",
                statement: "Knowledge vs technique balance.",
              },
            ],
            steps: [
              {
                reasoning: "Technique: structure, chains of reasoning and judgement unlock marks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "But technique without knowledge produces empty argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Knowledge without technique caps marks at mid-band.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both are necessary; technique amplifies knowledge.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Judgement: claim is too strong — both matter.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Both are essential — technique amplifies knowledge",
          },
        },
        {
          id: "cieiec-u4-es-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a 'chain of reasoning' earns more marks than a list of facts in an economics answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chain of reasoning",
                statement: "Cause→effect logic.",
              },
            ],
            steps: [
              {
                reasoning: "Chains show how economic changes lead to outcomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Marks reward application/analysis, not just recall of facts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Facts alone demonstrate only description (AO1-level).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Chains show analysis; facts only recall",
          },
        },
        {
          id: "cieiec-u4-es-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should the introduction of an economics essay contain?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay structure",
                statement: "Thesis-led introduction.",
              },
            ],
            steps: [
              {
                reasoning: "A clear thesis stating the main position.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Brief outline of the points to be developed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Thesis plus outline of points",
          },
        },
        {
          id: "cieiec-u4-es-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a model paragraph that evaluates one benefit and one drawback of congestion charging in a city centre, showing developed economic reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluated paragraph",
                statement: "Mechanism + consequence + balance.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit: charge raises cost of driving -> fewer cars -> less congestion and pollution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mechanism developed: higher price reduces quantity demanded (PED).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Drawback: regressive — hits low-income drivers; may just shift congestion elsewhere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Revenue can fund public transport — a mitigating benefit.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weighs both sides before any judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mechanism for benefit, mechanism for drawback, weighed judgement",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u4-essay-notes",
      title: "Essay technique — revision notes",
      summary:
        "Thesis, chains of reasoning, counter-arguments, qualified judgements.",
      sections: [
        {
          heading: "Key skills",
          body: "Every point needs mechanism + consequence; always address the counter-case before judging.",
        },
        {
          heading: "Exam tips",
          body: "Spend 5 minutes planning an essay outline — structure marks outweigh extra content.",
        },
      ],
    },
  ],
};
