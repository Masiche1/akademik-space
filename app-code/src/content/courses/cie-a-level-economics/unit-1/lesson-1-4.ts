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
                              "text": "A subsidy"
                    },
                    {
                              "id": "b",
                              "text": "Tax on goods/services"
                    },
                    {
                              "id": "c",
                              "text": "A price control"
                    },
                    {
                              "id": "d",
                              "text": "Tax on income"
                    }
          ],
          "correctChoiceId": "b"
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
        {
          id: "ciealecon-u1-int-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A price floor set above the equilibrium price will cause",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "a shortage of the good" },
            { "id": "b", "text": "a fall in the equilibrium price" },
            { "id": "c", "text": "no change in the market" },
            { "id": "d", "text": "a surplus of the good" }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Price floor", "statement": "Minimum price; above equilibrium creates surplus." } ],
          "steps": [ { "reasoning": "At a price above equilibrium, quantity supplied exceeds quantity demanded, creating a surplus.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(d)** a surplus of the good"
},
        },
        {
          id: "ciealecon-u1-int-q6", difficulty: "foundation", totalMarks: 1,
          stem: "An indirect tax on a good causes the",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "demand curve to shift to the right" },
            { "id": "b", "text": "supply curve to shift to the right/downwards" },
            { "id": "c", "text": "supply curve to shift to the left/upwards" },
            { "id": "d", "text": "demand curve to shift to the left" }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Indirect tax", "statement": "Raises cost of production — supply shifts left." } ],
          "steps": [ { "reasoning": "A per-unit tax raises producers' costs at every price, so supply decreases and the curve shifts left/upwards.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(c)** supply curve to shift to the left/upwards"
},
        },
        {
          id: "ciealecon-u1-int-q7", difficulty: "core", totalMarks: 1,
          stem: "A subsidy granted to producers of a good causes the",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "supply curve to shift to the left/upwards" },
            { "id": "b", "text": "price to rise at every quantity" },
            { "id": "c", "text": "demand curve to shift to the left" },
            { "id": "d", "text": "supply curve to shift to the right/downwards" }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Subsidy", "statement": "Lowers producers' costs — supply shifts right." } ],
          "steps": [ { "reasoning": "A subsidy reduces the effective cost of production, increasing supply at each price.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(d)** supply curve to shift to the right/downwards"
},
        },
        {
          id: "ciealecon-u1-int-q8", difficulty: "challenge", totalMarks: 1,
          stem: "Who bears most of the burden of an indirect tax?",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "Always the consumers" },
            { "id": "b", "text": "Always the government" },
            { "id": "c", "text": "The side of the market that is more price elastic" },
            { "id": "d", "text": "The side of the market that is less price elastic" }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Tax incidence", "statement": "Burden falls on the less elastic side." } ],
          "steps": [ { "reasoning": "The less elastic side cannot adjust quantity easily, so it absorbs most of the tax through price changes.", "marks": 1, "markCode": "A" } ],
          "finalAnswer": "**(d)** The side of the market that is less price elastic"
},
        },
        {
          id: "ciealecon-u1-int-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Deadweight loss refers to",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "the profit earned by producers" },
            { "id": "b", "text": "the cost of government administration" },
            { "id": "c", "text": "the total tax revenue collected by government" },
            { "id": "d", "text": "the loss of economic welfare caused by a market distortion" }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Deadweight loss", "statement": "Welfare loss from distortion." } ],
          "steps": [ { "reasoning": "Taxes and price controls reduce quantity below the efficient level, destroying welfare that neither producers nor consumers capture.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(d)** the loss of economic welfare caused by a market distortion"
},
        },
        {
          id: "ciealecon-u1-int-q10", difficulty: "foundation", totalMarks: 1,
          stem: "A $4 per unit tax raises the market price by $1.50 per unit. How much of the tax is borne by consumers per unit?",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 1.5 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Tax incidence", "statement": "Consumer burden = rise in price paid." } ],
          "steps": [ { "reasoning": "The price rise of $1.50 is the consumer share of the $4 tax.", "working": "1.50", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "$1.50 per unit"
},
        },
        {
          id: "ciealecon-u1-int-q11", difficulty: "core", totalMarks: 1,
          stem: "At equilibrium price $7, quantity demanded is 100 units and quantity supplied is 70 units. A price ceiling is imposed at $5. Calculate the resulting shortage.",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 30 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Shortage", "statement": "Qd - Qs at the controlled price." } ],
          "steps": [ { "reasoning": "Shortage = 100 - 70 = 30 units (assuming the figures describe quantities at the ceiling price).", "working": "100 - 70 = 30", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "30 units"
},
        },
        {
          id: "ciealecon-u1-int-q12", difficulty: "challenge", totalMarks: 1,
          stem: "An indirect tax raises the market price of a good from $10 to $12 per unit. Calculate the percentage increase in price.",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 20 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Percentage change", "statement": "(New - Old) / Old x 100." } ],
          "steps": [ { "reasoning": "(12 - 10) / 10 x 100 = 20%.", "working": "(12 - 10) / 10 x 100 = 20", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "20%"
},
        },
        {
          id: "ciealecon-u1-int-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Explain how an indirect tax creates a deadweight loss.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Deadweight loss", "statement": "Tax reduces quantity below efficient level." } ],
          "steps": [
            { "reasoning": "The tax raises price and reduces quantity traded below the free-market equilibrium.", "marks": 1, "markCode": "M" },
            { "reasoning": "Units no longer traded would have generated benefits exceeding costs, so welfare is lost that goes to neither consumers nor producers.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "Tax raises price, cuts quantity below equilibrium, and destroys welfare on the lost units."
},
        },
        {
          id: "ciealecon-u1-int-q14", difficulty: "core", totalMarks: 3,
          stem: "Distinguish between a price ceiling and a price floor, and state the market problem each creates.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Price controls", "statement": "Ceiling = max price; floor = min price." } ],
          "steps": [
            { "reasoning": "A price ceiling is a maximum price, typically set below equilibrium (e.g. rent control).", "marks": 1, "markCode": "M" },
            { "reasoning": "A price floor is a minimum price, typically set above equilibrium (e.g. minimum wage).", "marks": 1, "markCode": "M" },
            { "reasoning": "A ceiling below equilibrium causes a shortage; a floor above equilibrium causes a surplus.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Ceiling (max) below equilibrium → shortage; floor (min) above equilibrium → surplus."
},
        },
        {
          id: "ciealecon-u1-int-q15", difficulty: "core", totalMarks: 6,
          stem: "Answer the following on government intervention.",
          parts: [
            { "label": "a", "prompt": "Define an indirect tax and a subsidy.", "marks": 2 },
            { "label": "b", "prompt": "Explain how tax incidence depends on PED and PES.", "marks": 2 },
            { "label": "c", "prompt": "Explain what is meant by government failure.", "marks": 2 }
          ],
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "Intervention", "statement": "Taxes, subsidies, incidence, government failure." } ],
          "steps": [
            { "reasoning": "An indirect tax is a tax on goods and services; a subsidy is a government payment to producers (or consumers).", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "Both correct definitions given.", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "The less price-elastic side of the market bears more of the tax because it cannot adjust quantity easily.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "PED and PES together determine how the burden is shared between consumers and producers.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "Government failure is when intervention creates worse outcomes than the market failure it was meant to correct.", "marks": 1, "markCode": "M", "part": "c" },
            { "reasoning": "E.g. information problems, lobbying, unintended consequences such as shortages or black markets.", "marks": 1, "markCode": "A", "part": "c" }
          ],
          "finalAnswer": "Indirect tax = tax on goods; subsidy = producer payment; incidence falls on less elastic side; government failure = harmful intervention."
},
        },
        {
          id: "ciealecon-u1-int-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the use of price controls, such as rent ceilings, to help low-income households.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "Price controls", "statement": "Evaluation of ceilings/floors." } ],
          "steps": [
            { "reasoning": "A rent ceiling below the market rent makes housing cheaper for those who obtain it, helping low-income households.", "marks": 1, "markCode": "M" },
            { "reasoning": "However it creates a shortage — quantity supplied falls and quantity demanded rises — so many households are excluded.", "marks": 1, "markCode": "M" },
            { "reasoning": "Landlords may reduce maintenance and investment, lowering housing quality over time.", "marks": 1, "markCode": "M" },
            { "reasoning": "Black markets and key-money payments may emerge, undermining the policy's intent.", "marks": 1, "markCode": "M" },
            { "reasoning": "Alternative policies such as housing benefit or supply-side measures may be more efficient.", "marks": 1, "markCode": "M" },
            { "reasoning": "On balance, price controls help some households short-term but create inefficiency and may not reach those most in need.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Rent ceilings help some tenants but cause shortages, reduced quality and black markets."
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
