import type { Lesson } from "../../../types.ts";

export const lesson444: Lesson = {
  id: "ciealecon-u4-lesson-4-4",
  code: "4-4",
  title: "Sustainable Development",
  goal: "I CAN explain sustainable development and environmental challenges.",
  standards: ["Cambridge A Level Economics 9708", "Paper 4: sustainability"],
  
  vocabulary: [
    { term: "Sustainable development", definition: "Meeting present needs without compromising future." },
    { term: "Tragedy of the commons", definition: "Overuse of shared resources." },
    { term: "Externality", definition: "Cost/benefit affecting third parties." },
    { term: "Carbon footprint", definition: "Total greenhouse gas emissions." },
    { term: "Renewable resources", definition: "Resources that regenerate." },
    { term: "Non-renewable resources", definition: "Finite resources (fossil fuels)." },
  ],
  concepts: [
    {
      id: "ciealecon-u4-s4-sus",
      title: "Sustainable development",
      skill: "Analyse environmental economics.",
      lesson: {
        sections: [
          {
            heading: "Environmental problems",
            body: "Climate change, deforestation, pollution, resource depletion. Often externalities — costs not borne by producers.",
          },
          {
            heading: "Tragedy of commons",
            body: "Shared resources overused because individual benefits exceed individual costs. Fisheries, forests, atmosphere.",
          },
          {
            heading: "Solutions",
            body: "Carbon taxes, emissions trading, subsidies for renewables, regulation, international agreements (Paris).",
          },
        ],
        keyFormulas: [
          { name: "Sustainable", statement: "future preserved" },
          { name: "Tragedy of commons", statement: "overuse" },
          { name: "Carbon tax", statement: "emissions price" },
        ],
        workedExample: {
          problem: "Why is climate change a market failure?",
          solution: "Negative externality — greenhouse gas emissions harm third parties. Producers don't bear full social cost → overproduction of polluting goods.",
        },
      },
      questions: [
        {
          id: "ciealecon-u4-sus-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is sustainable development?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Meeting present needs without compromising future"
                    },
                    {
                              "id": "b",
                              "text": "Maximum growth"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
                    },
                    {
                              "id": "d",
                              "text": "A trade agreement"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sustainable",
                              "statement": "Future preserved."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sustainable = present needs without future compromise.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Future preserved"
},
        },
        {
          id: "ciealecon-u4-sus-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the tragedy of the commons?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tragedy",
                              "statement": "Overuse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Overuse of shared resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Individual benefits exceed individual costs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Shared resource overuse"
},
        },
        {
          id: "ciealecon-u4-sus-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is climate change a market failure?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Climate",
                              "statement": "Externality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negative externality — emissions harm third parties.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Producers don't bear full social cost.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Overproduction of polluting goods.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Negative externality"
},
        },
        {
          id: "ciealecon-u4-sus-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define sustainable development, tragedy of commons, externality, carbon footprint, renewable, non-renewable. (b) What is sustainable development? (c) What is tragedy of commons? (d) Why is climate change market failure? (e) What are environmental problems? (f) What are solutions? (g) What is carbon tax? (h) Evaluate whether economic growth and environmental protection can coexist.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sustainability",
                              "statement": "Environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Future preserved.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Overuse shared resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Negative externality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Climate, deforestation, pollution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Carbon tax, renewables, regulation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Emissions price.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sustainable development."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u4-sus-notes",
      title: "Sustainability — notes",
      summary: "Tragedy of commons→resource depletion. Carbon tax/renewables address externalities.",
      sections: [
        { heading: "Key idea", body: "Environmental problems are market failures requiring intervention." },
        { heading: "Solutions", body: "Carbon pricing, renewable subsidies, international agreements." },
      ],
    },
  ],
};
