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
              { id: "b", text: "Rich countries exploit poor ones" },
              { id: "c", text: "Development is impossible" },
              { id: "d", text: "All countries are equal" },
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
