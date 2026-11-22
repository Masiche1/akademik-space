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
                              "text": "Market is too efficient"
                    },
                    {
                              "id": "b",
                              "text": "Perfect competition"
                    },
                    {
                              "id": "c",
                              "text": "Government failure"
                    },
                    {
                              "id": "d",
                              "text": "Free market fails to allocate resources efficiently"
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "cieiec-u2-mf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A negative externality is best described as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A benefit received by the producer"
                    },
                    {
                              "id": "b",
                              "text": "A government tax"
                    },
                    {
                              "id": "c",
                              "text": "A cost imposed on third parties not involved in the transaction"
                    },
                    {
                              "id": "d",
                              "text": "A type of subsidy"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative externality",
                              "statement": "Third-party cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negative externality = cost on third parties.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Cost on third parties"
},
        },
        {
          id: "cieiec-u2-mf-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A public good is characterised by being:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only produced by government"
                    },
                    {
                              "id": "b",
                              "text": "Non-excludable and non-rivalrous"
                    },
                    {
                              "id": "c",
                              "text": "Always free of charge"
                    },
                    {
                              "id": "d",
                              "text": "Excludable and rivalrous"
                    }
          ],
          "correctChoiceId": "b"
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
                              "reasoning": "Public goods are non-excludable and non-rivalrous.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Non-excludable and non-rivalrous"
},
        },
        {
          id: "cieiec-u2-mf-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Free riders' are a particular problem for which type of good?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Normal goods"
                    },
                    {
                              "id": "b",
                              "text": "Merit goods only"
                    },
                    {
                              "id": "c",
                              "text": "Public goods"
                    },
                    {
                              "id": "d",
                              "text": "Private goods"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Free rider problem",
                              "statement": "Consumers benefit without paying."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Non-excludability lets people consume without paying.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Public goods"
},
        },
        {
          id: "cieiec-u2-mf-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which government policy is most appropriate for correcting a negative production externality?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A price ceiling"
                    },
                    {
                              "id": "b",
                              "text": "A tax on the producer"
                    },
                    {
                              "id": "c",
                              "text": "Removing all regulation"
                    },
                    {
                              "id": "d",
                              "text": "A subsidy to the producer"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Externality policy",
                              "statement": "Negative externality -> tax."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tax raises private cost to match social cost.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "A tax on the producer"
},
        },
        {
          id: "cieiec-u2-mf-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A government imposes a carbon tax of $4 per unit on 5,000 units of output. What is the total tax revenue collected?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 20000,
                              "unit": "$"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Externality policy",
                              "statement": "Tax corrects negative externality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Revenue = 4 x 5000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Total revenue = $20,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$20,000"
},
        },
        {
          id: "cieiec-u2-mf-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A subsidy of $2 per unit raises output from 1,000 to 1,500 units. What is the total cost of the subsidy to the government?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 3000,
                              "unit": "$"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Subsidy",
                              "statement": "Payment per unit to producers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cost = 2 x 1500 = 3000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Total subsidy cost = $3,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3,000"
},
        },
        {
          id: "cieiec-u2-mf-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Consumers buy 80 units of a merit good but the socially optimal quantity is 100 units. By how many units is the good under-consumed?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 20,
                              "unit": "units"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Merit good",
                              "statement": "Under-consumed due to information gaps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "100 - 80 = 20 units.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Under-consumption = 20 units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "20 units"
},
        },
        {
          id: "cieiec-u2-mf-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define a merit good and give one example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Merit good",
                              "statement": "Under-consumed due to info asymmetry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Good that is under-consumed because consumers underestimate benefits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: education or healthcare.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Under-consumed good; e.g. education"
},
        },
        {
          id: "cieiec-u2-mf-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the free market tends to underprovide public goods.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Public goods",
                              "statement": "Underprovision."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Non-excludability means firms cannot stop free riders.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Firms cannot charge consumers, so no profit incentive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Result: market provides too little or none; government must supply.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Free riders -> no profit -> underprovision"
},
        },
        {
          id: "cieiec-u2-mf-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a subsidy can be used to correct a positive externality.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Subsidy",
                              "statement": "Corrects positive externality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subsidy lowers producers' costs / raises revenue.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Output rises toward the social optimum.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Brings private benefit closer to social benefit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Subsidy raises output to social optimum"
},
        },
        {
          id: "cieiec-u2-mf-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between a negative externality and a positive externality, giving an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Externalities",
                              "statement": "Third-party effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negative: cost on third parties, e.g. pollution from a factory.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Positive: benefit on third parties, e.g. vaccination reducing disease.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both cause market failure because market ignores third parties.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Negative=cost; positive=benefit"
},
        },
        {
          id: "cieiec-u2-mf-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate government intervention as a solution to market failure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Market failure",
                              "statement": "Intervention evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefits: taxes/subsidies internalise externalities; provision fixes public goods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Benefits: regulation and information can improve outcomes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Costs: government failure, costs of intervention, imperfect information.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Intervention may create new distortions.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: often necessary but must be well-designed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Often necessary but can fail"
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
