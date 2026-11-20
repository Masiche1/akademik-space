import type { Lesson } from "../../../types.ts";

export const lesson283: Lesson = {
  id: "cieiec-u2-lesson-2-3",
  code: "2-3",
  title: "Market Failure and Government Intervention",
  goal: "I CAN explain market failure and evaluate government intervention.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 4: market failure"],
  
  vocabulary: [
    { term: "Market failure", definition: "Free market fails to allocate resources efficiently." },
    { term: "Externality", definition: "Third-party effect of production/consumption." },
    { term: "Public good", definition: "Non-excludable, non-rivalrous good." },
    { term: "Merit good", definition: "Good under-consumed due to information asymmetry." },
    { term: "Government intervention", definition: "Government action to correct market failure." },
    { term: "Subsidy", definition: "Government payment to producers/consumers." },
  ],
  concepts: [
    {
      id: "cieiec-u2-s3-mf",
      title: "Market failure",
      skill: "Understand market failure and government responses.",
      lesson: {
        sections: [
          {
            heading: "Market failure types",
            body: "Externalities: pollution (negative), education (positive). Public goods: national defence, street lighting — non-excludable, underprovided by market. Merit goods: healthcare, education — under-consumed due to information gaps. Inequality: market may produce unequal outcomes.",
          },
          {
            heading: "Government intervention",
            body: "Taxes on negative externalities; subsidies for positive externalities/merit goods; provision of public goods; regulation; information provision.",
          },
        ],
        keyFormulas: [
          { name: "Market failure", statement: "inefficient allocation" },
          { name: "Externality", statement: "third-party effect" },
          { name: "Public good", statement: "non-excludable, non-rivalrous" },
        ],
        workedExample: {
          problem: "Why does the market underprovide national defence?",
          solution: "Public good — non-excludable, non-rivalrous. Free riders benefit without paying. Market can't charge → underprovided.",
        },
      },
      questions: [
        {
          id: "cieiec-u2-mf-q1",
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
                              "text": "Market is too efficient"
                    },
                    {
                              "id": "c",
                              "text": "Government failure"
                    },
                    {
                              "id": "d",
                              "text": "Perfect competition"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Market failure",
                              "statement": "Inefficient allocation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Market failure = inefficient resource allocation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Inefficient allocation"
},
        },
        {
          id: "cieiec-u2-mf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an externality?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Externality",
                              "statement": "Third-party effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Third-party effect of production/consumption.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. pollution (negative), education (positive).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Third-party effect"
},
        },
        {
          id: "cieiec-u2-mf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a public good? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Public good",
                              "statement": "Non-excludable, non-rivalrous."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Non-excludable, non-rivalrous good.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: national defence, street lighting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Market underprovides due to free riders.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Non-excludable, non-rivalrous"
},
        },
        {
          id: "cieiec-u2-mf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define market failure, externality, public good, merit good, government intervention, subsidy. (b) What is market failure? (c) What is an externality? (d) What is a public good? Give an example. (e) What is a merit good? (f) How does government correct negative externalities? (g) How does government correct public goods? (h) Evaluate government intervention vs free markets.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Market failure",
                              "statement": "Types, intervention."
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
                              "reasoning": "(c) Third-party effect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Non-excludable; e.g. defence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Under-consumed due to info gaps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Taxes, regulation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Direct provision.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Market failure and intervention."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u2-mf-notes",
      title: "Market failure — notes",
      summary: "Market failure=inefficiency. Causes: externalities, public goods, merit goods, inequality. Government intervenes via taxes, subsidies, provision.",
      sections: [
        { heading: "Key idea", body: "Free markets don't always allocate resources efficiently — government may need to intervene." },
        { heading: "Externalities", body: "Negative=tax; positive=subsidy. Public goods=direct provision." },
      ],
    },
  ],
};
