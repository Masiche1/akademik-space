import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "asoc-u5-lesson-5-3",
  code: "5-3",
  title: "Globalisation and Social Change",
  goal: "I CAN evaluate globalisation's impact on development and society.",
  standards: ["9699 P4: Contemporary issues"],
  vocabulary: [
    {
      term: "Modernisation theory",
      definition: "View that development follows Western path.",
    },
    {
      term: "Dependency theory",
      definition: "View that poor countries depend on rich ones.",
    },
    {
      term: "World systems theory",
      definition: "Model of global economic hierarchy.",
    },
    {
      term: "Development",
      definition: "Improvement in living standards and wellbeing.",
    },
    {
      term: "Neoliberalism",
      definition: "Economic policy favouring free markets and deregulation.",
    },
    {
      term: "Global governance",
      definition:
        "International rules and institutions managing global issues.",
    },
  ],
  concepts: [
    {
      id: "asoc-u5-development",
      title: "Globalisation and development",
      skill: "Compare theories of development and globalisation's role.",
      lesson: {
        sections: [
          {
            heading: "Modernisation theory",
            body: "Poor countries develop by adopting Western values/institutions — capitalism, democracy, education. Development is linear progression from 'traditional' to 'modern'. Criticised for assuming Western model is best.",
          },
          {
            heading: "Dependency and world systems",
            body: "Dependency theory: poor countries underdeveloped BY rich countries — exploitation through trade, debt, corporations. World systems theory: core (rich), periphery (poor), semi-periphery (middle) — hierarchy is structural, not just lag.",
          },
          {
            heading: "Globalisation and development",
            body: "Neoliberal policies (IMF/World Bank) promote free markets — mixed results. Some countries benefit (China, India); others remain dependent. Globalisation offers opportunities but also risks for developing nations.",
          },
        ],
        keyFormulas: [
          {
            name: "Development theories",
            statement:
              "Modernisation=Western path; Dependency=exploitation; World systems=hierarchy.",
          },
        ],
        workedExample: {
          problem: "How do dependency and modernisation differ?",
          solution:
            "Modernisation says develop like the West; dependency says rich countries keep poor ones poor.",
        },
      },
      questions: [
        {
          id: "asoc-u5-dv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does modernisation theory claim?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Poor countries develop by adopting Western models",
              },
              { id: "b", text: "All countries are equal" },
              { id: "c", text: "Rich countries exploit poor ones" },
              { id: "d", text: "Development is impossible" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Modernisation",
                statement: "Adopt Western path.",
              },
            ],
            steps: [
              {
                reasoning: "Modernisation = Western model.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Poor countries develop by adopting Western models",
            commonErrors: ["Confusing with dependency."],
          },
        },
        {
          id: "asoc-u5-dv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the three zones in world systems theory?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "World systems",
                statement: "Core, semi-periphery, periphery.",
              },
            ],
            steps: [
              {
                reasoning: "Core=rich, periphery=poor.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Semi-periphery=middle.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Core (rich), semi-periphery (middle), periphery (poor).",
            commonErrors: ["Only naming two."],
          },
        },
        {
          id: "asoc-u5-dv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare modernisation and dependency theories of development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development theories",
                statement: "Western path vs exploitation.",
              },
            ],
            steps: [
              {
                reasoning: "Modernisation: adopt Western model.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Dependency: rich exploit poor.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Different assumptions.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Modernisation=follow the West; dependency=exploited by the West.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "asoc-u5-dv-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Globalisation and development.",
          parts: [
            { label: "a", prompt: "Modernisation theory?", marks: 2 },
            { label: "b", prompt: "Dependency theory?", marks: 2 },
            { label: "c", prompt: "World systems zones?", marks: 2 },
            {
              label: "d",
              prompt: "Globalisation's development effects?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development",
                statement: "Theories+zones+effects.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Adopt Western model.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Linear progression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Rich exploit poor.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Through trade/debt.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Core/semi-periphery/periphery.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Hierarchy structural.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Mixed results.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Some benefit, some don't.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Neoliberal debate.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) modernisation (b) dependency (c) zones (d) effects",
          },
        },
        {
          id: "asoc-u5-dv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Modernisation theory sees development as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Linear progression from traditional to modern" },
              { id: "b", text: "Identical for all countries" },
              { id: "c", text: "A structural hierarchy imposed by the West" },
              { id: "d", text: "Impossible without revolution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Modernisation",
                statement: "Linear path to modernity.",
              },
            ],
            steps: [
              {
                reasoning: "Modernisation = linear progression.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Linear progression from traditional to modern",
            commonErrors: ["Confusing with dependency."],
          },
        },
        {
          id: "asoc-u5-dv-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In world systems theory, which zone contains the richest countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Semi-periphery" },
              { id: "b", text: "Core" },
              { id: "c", text: "Periphery" },
              { id: "d", text: "Peri-core" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Core",
                statement: "Richest zone.",
              },
            ],
            steps: [
              {
                reasoning: "Core = rich centre.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Core",
            commonErrors: ["Confusing core with periphery."],
          },
        },
        {
          id: "asoc-u5-dv-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Neoliberalism favours:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "State ownership of industry" },
              { id: "b", text: "Import substitution" },
              { id: "c", text: "Free markets and deregulation" },
              { id: "d", text: "Central planning" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Neoliberalism",
                statement: "Free markets, deregulation.",
              },
            ],
            steps: [
              {
                reasoning: "Neoliberal = market-led.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Free markets and deregulation",
            commonErrors: ["Confusing with protectionism."],
          },
        },
        {
          id: "asoc-u5-dv-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is a criticism of modernisation theory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It denies that development occurs" },
              { id: "b", text: "It focuses only on poverty" },
              { id: "c", text: "It ignores trade entirely" },
              { id: "d", text: "It assumes the Western model is best" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Critique",
                statement: "Ethnocentric Western assumption.",
              },
            ],
            steps: [
              {
                reasoning: "Modernisation is criticised as ethnocentric.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(d)** It assumes the Western model is best",
            commonErrors: ["Picking an irrelevant critique."],
          },
        },
        {
          id: "asoc-u5-dv-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The IMF and World Bank primarily promote:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "State-run economies" },
              { id: "b", text: "Cultural isolation" },
              { id: "c", text: "Structural adjustment and free-market policies" },
              { id: "d", text: "Protectionist tariffs" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IMF/World Bank",
                statement: "Neoliberal structural adjustment.",
              },
            ],
            steps: [
              {
                reasoning: "IFIs push free-market reforms.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Structural adjustment and free-market policies",
            commonErrors: ["Confusing with protectionism."],
          },
        },
        {
          id: "asoc-u5-dv-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A developing country's GDP grew from $200 billion to $250 billion. What was the percentage increase?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage increase",
                statement: "Change/original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Increase = 250 - 200 = 50.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "50/200 x 100 = 25%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "25",
            commonErrors: ["Dividing by the new value."],
          },
        },
        {
          id: "asoc-u5-dv-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 800 people in developing countries, 30% said they had better access to education than a decade ago. How many people was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 240 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "30% of 800 = 0.3 x 800.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 240.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "240",
            commonErrors: ["Forgetting decimal conversion."],
          },
        },
        {
          id: "asoc-u5-dv-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country's exports fell from $90 billion to $72 billion. What was the percentage decrease?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage decrease",
                statement: "Change/original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Decrease = 90 - 72 = 18.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "18/90 x 100 = 20%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "20",
            commonErrors: ["Dividing by the new value."],
          },
        },
        {
          id: "asoc-u5-dv-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Country X's GDP per capita is $15,000 while Country Y's is $3,000. How many times larger is X's GDP per capita?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio",
                statement: "Larger/smaller.",
              },
            ],
            steps: [
              {
                reasoning: "15000/3000 = 5.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Five times larger.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "5",
            commonErrors: ["Subtracting instead of dividing."],
          },
        },
        {
          id: "asoc-u5-dv-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how dependency theory differs from modernisation theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theories",
                statement: "Western path vs exploitation.",
              },
            ],
            steps: [
              {
                reasoning: "Modernisation: adopt Western model.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Dependency: rich exploit poor.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Clear contrast drawn.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Modernisation says develop like the West; dependency says the West keeps poor countries poor.",
            commonErrors: ["Describing only one theory."],
          },
        },
        {
          id: "asoc-u5-dv-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the role of globalisation in development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development effects",
                statement: "Opportunities vs risks.",
              },
            ],
            steps: [
              {
                reasoning: "Some countries benefit (China, India).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Others remain dependent/poor.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Neoliberal policies have mixed results.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Globalisation offers development opportunities but also risks — effects are uneven.",
            commonErrors: ["One-sided answer."],
          },
        },
        {
          id: "asoc-u5-dv-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Globalisation and development — extended response.",
          parts: [
            {
              label: "a",
              prompt: "What is meant by 'development'?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Outline modernisation theory.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Outline dependency and world systems theories.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Evaluate the impact of globalisation on developing countries.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development",
                statement: "Definition+theories+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Improvement in living standards.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Adopt Western model.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Linear progression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Dependency: exploitation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "World systems: zones.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear presentation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Mixed results acknowledged.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Opportunities and risks explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) definition (b) modernisation (c) theories (d) evaluation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u5-5-3-notes",
      title: "Globalisation and change — notes",
      summary: "Development theories, global governance, social change.",
      sections: [
        {
          heading: "Development",
          body: "Modernisation=Western path; dependency=exploitation; world systems=core/semi-periphery/periphery.",
        },
        {
          heading: "Effects",
          body: "Globalisation offers opportunities but risks for developing nations; global governance shapes rules.",
        },
      ],
    },
  ],
};
