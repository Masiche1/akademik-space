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
                              "text": "A type of monopoly"
                    },
                    {
                              "id": "b",
                              "text": "Government failure"
                    },
                    {
                              "id": "c",
                              "text": "Market always works perfectly"
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
        {
          id: "ciealecon-u1-mf-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of the following is a pure public good?",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "A private gym membership" },
            { "id": "b", "text": "National defence" },
            { "id": "c", "text": "A cinema ticket" },
            { "id": "d", "text": "Bottled water" }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Public good", "statement": "Non-rival, non-excludable." } ],
          "steps": [ { "reasoning": "National defence is non-rival and non-excludable; the other options are private goods.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(b)** National defence"
},
        },
        {
          id: "ciealecon-u1-mf-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The free rider problem arises because",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "government prices are always too high" },
            { "id": "b", "text": "the good is rival in consumption" },
            { "id": "c", "text": "the good is non-excludable, so people can consume it without paying" },
            { "id": "d", "text": "consumers prefer free goods" }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Free rider problem", "statement": "Non-excludability prevents charging." } ],
          "steps": [ { "reasoning": "Because non-payers cannot be excluded, no one has an incentive to pay, so the market underprovides the good.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(c)** the good is non-excludable, so people can consume it without paying"
},
        },
        {
          id: "ciealecon-u1-mf-q7", difficulty: "core", totalMarks: 1,
          stem: "Where a market generates a negative externality, the free-market output is",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "equal to the social optimum" },
            { "id": "b", "text": "zero" },
            { "id": "c", "text": "less than the social optimum" },
            { "id": "d", "text": "greater than the social optimum" }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Negative externality", "statement": "MSC > MPC leads to overproduction." } ],
          "steps": [ { "reasoning": "Producers only consider private costs, so they produce beyond the point where MSC = MSB — output exceeds the social optimum.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(d)** greater than the social optimum"
},
        },
        {
          id: "ciealecon-u1-mf-q8", difficulty: "core", totalMarks: 1,
          stem: "A subsidy paid to producers of a good generating a positive externality is intended to",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "move output closer to the social optimum" },
            { "id": "b", "text": "create a free rider problem" },
            { "id": "c", "text": "raise the price paid by consumers" },
            { "id": "d", "text": "reduce output to the free-market level" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Positive externality", "statement": "MSB > MPB leads to underproduction; subsidy corrects it." } ],
          "steps": [ { "reasoning": "A subsidy lowers producers' costs, encouraging output to rise from the free-market level towards the social optimum where MSB = MSC.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** move output closer to the social optimum"
},
        },
        {
          id: "ciealecon-u1-mf-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Information asymmetry can cause market failure because",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "all consumers have perfect information about prices" },
            { "id": "b", "text": "one party knows more than the other, so transactions are distorted or may not occur" },
            { "id": "c", "text": "markets are always perfectly competitive" },
            { "id": "d", "text": "prices always equal marginal cost" }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Information asymmetry", "statement": "Hidden information distorts market outcomes." } ],
          "steps": [ { "reasoning": "Adverse selection and moral hazard mean prices and quantities no longer reflect true values — e.g. the 'lemons' problem can collapse a market.", "marks": 1, "markCode": "A" } ],
          "finalAnswer": "**(b)** one party knows more than the other, so transactions are distorted or may not occur"
},
        },
        {
          id: "ciealecon-u1-mf-q10", difficulty: "foundation", totalMarks: 1,
          stem: "MPC is $10 per unit and the marginal external cost is $2 per unit. Calculate the marginal social cost (MSC).",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 12 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "MSC", "statement": "MSC = MPC + MEC." } ],
          "steps": [ { "reasoning": "MSC = 10 + 2 = 12.", "working": "MSC = 10 + 2 = 12", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "MSC = $12"
},
        },
        {
          id: "ciealecon-u1-mf-q11", difficulty: "core", totalMarks: 1,
          stem: "MPB is $15 per unit and the marginal external benefit is $5 per unit. Calculate the marginal social benefit (MSB).",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 20 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "MSB", "statement": "MSB = MPB + MEB." } ],
          "steps": [ { "reasoning": "MSB = 15 + 5 = 20.", "working": "MSB = 15 + 5 = 20", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "MSB = $20"
},
        },
        {
          id: "ciealecon-u1-mf-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Free-market output of a good with a negative externality is 120 units while the social optimum is 90 units. By how many units does the market overproduce?",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 30 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Overproduction", "statement": "Free-market output minus social optimum." } ],
          "steps": [ { "reasoning": "120 - 90 = 30 units above the social optimum.", "working": "120 - 90 = 30", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "30 units"
},
        },
        {
          id: "ciealecon-u1-mf-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Explain why education generates a positive externality.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Positive externality", "statement": "Beneficial spillover to third parties." } ],
          "steps": [
            { "reasoning": "Education raises skills and productivity beyond the individual — e.g. an educated worker benefits employers and society.", "marks": 1, "markCode": "M" },
            { "reasoning": "MSB > MPB so the free market underprovides education relative to the social optimum.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "Education benefits third parties (skills spillovers), so MSB > MPB and the market underprovides it."
},
        },
        {
          id: "ciealecon-u1-mf-q14", difficulty: "core", totalMarks: 3,
          stem: "Distinguish between adverse selection and moral hazard, giving an example of each.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Information asymmetry", "statement": "Adverse selection (hidden info) vs moral hazard (hidden action)." } ],
          "steps": [
            { "reasoning": "Adverse selection is hidden information before a contract — e.g. a seller of a used car knowing it is a 'lemon'.", "marks": 1, "markCode": "M" },
            { "reasoning": "Moral hazard is hidden action after a contract — e.g. an insured driver taking more risks.", "marks": 1, "markCode": "M" },
            { "reasoning": "Both distort incentives and can cause market failure such as the collapse of the used-car market.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Adverse selection = hidden information before contract; moral hazard = hidden action after contract."
},
        },
        {
          id: "ciealecon-u1-mf-q15", difficulty: "core", totalMarks: 6,
          stem: "Answer the following on market failure.",
          parts: [
            { "label": "a", "prompt": "Define a negative externality and give one example.", "marks": 2 },
            { "label": "b", "prompt": "Explain how a per-unit tax can correct a negative externality.", "marks": 2 },
            { "label": "c", "prompt": "Explain why public goods are underprovided by the free market.", "marks": 2 }
          ],
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "Market failure", "statement": "Externalities and public goods." } ],
          "steps": [
            { "reasoning": "A negative externality is a cost imposed on third parties, e.g. pollution from production.", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "A suitable example such as factory emissions harming health.", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "A per-unit tax equal to the marginal external cost raises MPC towards MSC, reducing output towards the social optimum.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "If the tax is set correctly it removes the overproduction and the resulting deadweight loss.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "Public goods are non-excludable and non-rival, so the free rider problem prevents private provision.", "marks": 1, "markCode": "M", "part": "c" },
            { "reasoning": "With no way to charge consumers, private firms have no incentive to supply them — government must provide or fund them.", "marks": 1, "markCode": "A", "part": "c" }
          ],
          "finalAnswer": "Negative externality = third-party cost; tax internalises it; public goods underprovided due to free rider problem."
},
        },
        {
          id: "ciealecon-u1-mf-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the use of government intervention to correct market failure.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "Government intervention", "statement": "Taxes, subsidies, provision — evaluation." } ],
          "steps": [
            { "reasoning": "Taxes on negative externalities and subsidies on positive externalities can move output towards the social optimum, removing deadweight loss.", "marks": 1, "markCode": "M" },
            { "reasoning": "Direct government provision can supply public goods that markets will not.", "marks": 1, "markCode": "M" },
            { "reasoning": "However, government may lack information to set the tax or subsidy at exactly the right level.", "marks": 1, "markCode": "M" },
            { "reasoning": "Intervention can create government failure — unintended consequences, lobbying and regulatory capture.", "marks": 1, "markCode": "M" },
            { "reasoning": "Taxes and subsidies themselves create deadweight losses if set above or below the optimal level.", "marks": 1, "markCode": "M" },
            { "reasoning": "On balance, intervention is justified where market failure is severe, but effectiveness depends on accurate information and design.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Intervention can correct market failure but may fail due to imperfect information and government failure."
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
