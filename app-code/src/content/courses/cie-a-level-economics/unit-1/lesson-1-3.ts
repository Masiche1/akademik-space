import type { Lesson } from "../../../types.ts";

export const lesson413: Lesson = {
  id: "ciealecon-u1-lesson-1-3",
  code: "1-3",
  title: "Market Failure",
  goal: "I CAN explain externalities, public goods, information asymmetry and market failure.",
  standards: ["Cambridge A Level Economics 9708", "Paper 1: market failure"],
  
  vocabulary: [
    { term: "Market failure", definition: "Free market fails to allocate resources efficiently." },
    { term: "Externality", definition: "Cost/benefit affecting third parties." },
    { term: "Negative externality", definition: "Harmful spillover (pollution)." },
    { term: "Positive externality", definition: "Beneficial spillover (vaccination)." },
    { term: "Public good", definition: "Non-rival, non-excludable good." },
    { term: "Information asymmetry", definition: "Unequal information between parties." },
  ],
  concepts: [
    {
      id: "ciealecon-u1-s3-mf",
      title: "Market failure",
      skill: "Analyse sources of market failure.",
      lesson: {
        sections: [
          {
            heading: "Externalities",
            body: "Negative: MSC > MPC → overproduction (pollution). Positive: MSB > MPB → underproduction (education). Social optimum where MSC=MSB.",
          },
          {
            heading: "Public goods",
            body: "Non-rival (one person's use doesn't reduce others') and non-excludable (can't prevent use). Free rider problem → underprovided by market. Examples: defence, street lighting.",
          },
          {
            heading: "Information asymmetry",
            body: "Adverse selection (hidden info before contract) and moral hazard (hidden action after contract). Can lead to market collapse (lemons problem).",
          },
        ],
        keyFormulas: [
          { name: "Externality", statement: "third-party effects" },
          { name: "Public good", statement: "non-rival, non-excludable" },
          { name: "Market failure", statement: "inefficient allocation" },
        ],
        workedExample: {
          problem: "Why does the market underprovide vaccination?",
          solution: "Positive externality — benefits others (herd immunity) not captured by individual. MSB > MPB → underproduction.",
        },
      },
      questions: [
        {
          id: "ciealecon-u1-mf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is market failure?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Free market fails to allocate resources efficiently"
                    },
                    {
                              "id": "b",
                              "text": "Market always works perfectly"
                    },
                    {
                              "id": "c",
                              "text": "Government failure"
                    },
                    {
                              "id": "d",
                              "text": "A type of monopoly"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Market failure",
                              "statement": "Inefficiency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Market failure = inefficient allocation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Inefficient allocation"
},
        },
        {
          id: "ciealecon-u1-mf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a negative externality? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative externality",
                              "statement": "Harmful spillover."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cost affecting third parties.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: pollution from production.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Harmful spillover example"
},
        },
        {
          id: "ciealecon-u1-mf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are public goods underprovided by markets?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Public good",
                              "statement": "Non-rival/excludable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Non-excludable → free rider problem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Non-rival → marginal cost zero.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "No incentive for private provision.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Free rider problem"
},
        },
        {
          id: "ciealecon-u1-mf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define market failure, externality, negative externality, positive externality, public good, information asymmetry. (b) What is market failure? (c) What is a negative externality? (d) What is a positive externality? (e) Why are public goods underprovided? (f) What is information asymmetry? (g) How does externality cause over/underproduction? (h) Evaluate government intervention to correct market failure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Market failure",
                              "statement": "Sources, solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Inefficient allocation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Harmful spillover.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Beneficial spillover.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Free rider problem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Unequal information.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) MSC/MSB divergence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Taxes/subsidies can help but imperfect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Market failure analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u1-mf-notes",
      title: "Market failure — notes",
      summary: "Externalities, public goods, information asymmetry → market inefficiency.",
      sections: [
        { heading: "Key idea", body: "Free markets can fail to allocate resources efficiently." },
        { heading: "Solutions", body: "Taxes (negative ext), subsidies (positive ext), provision (public goods), regulation (information)." },
      ],
    },
  ],
};
