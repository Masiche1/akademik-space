import type { Lesson } from "../../../types.ts";

export const lesson414: Lesson = {
  id: "ciealecon-u1-lesson-1-4",
  code: "1-4",
  title: "Government Intervention",
  goal: "I CAN evaluate taxes, subsidies, price controls and other interventions.",
  standards: ["Cambridge A Level Economics 9708", "Paper 1: intervention"],
  
  vocabulary: [
    { term: "Indirect tax", definition: "Tax on goods/services (VAT, excise)." },
    { term: "Subsidy", definition: "Government payment to producers/consumers." },
    { term: "Price ceiling", definition: "Maximum price set by government." },
    { term: "Price floor", definition: "Minimum price set by government." },
    { term: "Deadweight loss", definition: "Loss of economic welfare from market distortion." },
    { term: "Incidence", definition: "Who bears the burden of tax/subsidy." },
  ],
  concepts: [
    {
      id: "ciealecon-u1-s4-int",
      title: "Government intervention",
      skill: "Evaluate intervention effects.",
      lesson: {
        sections: [
          {
            heading: "Taxes and subsidies",
            body: "Indirect tax raises price, reduces quantity → deadweight loss. Subsidy lowers price, increases quantity → also creates deadweight loss but may correct externality.",
          },
          {
            heading: "Price controls",
            body: "Ceiling (max price): below equilibrium → shortage. Floor (min price): above equilibrium → surplus. Both create inefficiency.",
          },
          {
            heading: "Evaluation",
            body: "Intervention can correct market failure but creates government failure — unintended consequences, inefficiency, lobbying.",
          },
        ],
        keyFormulas: [
          { name: "Indirect tax", statement: "tax on goods" },
          { name: "Subsidy", statement: "producer support" },
          { name: "Deadweight loss", statement: "welfare loss" },
        ],
        workedExample: {
          problem: "A £2 tax is placed on cigarettes. Who bears the burden?",
          solution: "Depends on PED/PES. Inelastic demand → consumers bear most. Elastic demand → producers bear more.",
        },
      },
      questions: [
        {
          id: "ciealecon-u1-int-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an indirect tax?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tax on goods/services"
                    },
                    {
                              "id": "b",
                              "text": "Tax on income"
                    },
                    {
                              "id": "c",
                              "text": "A subsidy"
                    },
                    {
                              "id": "d",
                              "text": "A price control"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Indirect tax",
                              "statement": "Goods tax."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Indirect tax = tax on goods/services.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Goods/services tax"
},
        },
        {
          id: "ciealecon-u1-int-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a price ceiling? What problem does it cause?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Price ceiling",
                              "statement": "Max price."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Maximum price set by government.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Below equilibrium → shortage.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Max price causes shortage"
},
        },
        {
          id: "ciealecon-u1-int-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What determines who bears the burden of a tax?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Tax incidence",
                              "statement": "Burden distribution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PED and PES determine incidence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Less elastic side bears more.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consumers vs producers split depends on elasticities.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Elasticity determines incidence"
},
        },
        {
          id: "ciealecon-u1-int-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define indirect tax, subsidy, price ceiling, price floor, deadweight loss, incidence. (b) What is indirect tax? (c) What is a subsidy? (d) What is price ceiling? (e) What is deadweight loss? (f) How does tax incidence work? (g) Why might government intervention fail? (h) Evaluate whether government should intervene in markets.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Intervention",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Goods/services tax.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Producer support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Max price.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Welfare loss.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Elasticity determines burden.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Government failure, unintended consequences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Government intervention analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u1-int-notes",
      title: "Intervention — notes",
      summary: "Taxes/subsidies/price controls distort markets. Incidence depends on elasticity.",
      sections: [
        { heading: "Key idea", body: "Intervention can correct market failure but creates inefficiency." },
        { heading: "Government failure", body: "Intervention may create worse problems than it solves." },
      ],
    },
  ],
};
