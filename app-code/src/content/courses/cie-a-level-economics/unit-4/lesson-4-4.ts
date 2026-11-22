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
                              "text": "Maximum growth"
                    },
                    {
                              "id": "b",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
                    },
                    {
                              "id": "d",
                              "text": "Meeting present needs without compromising future"
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "ciealecon-u4-sus-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An externality occurs when",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "production or consumption imposes costs or benefits on third parties not reflected in market prices" },
              { id: "b", text: "a government runs a budget deficit" },
              { id: "c", text: "demand for a good exceeds supply" },
              { id: "d", text: "a firm earns supernormal profit" }
            ],
            correctChoiceId: "a"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "Externality", statement: "Cost/benefit affecting third parties." } ],
            steps: [ { reasoning: "Externalities are spillover effects on third parties — e.g. pollution costs — that are not included in the market price, causing market failure.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** costs/benefits on third parties"
          }
        },
        {
          id: "ciealecon-u4-sus-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A classic example of the tragedy of the commons is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "overfishing of open-access seas" },
              { id: "b", text: "a patented pharmaceutical drug" },
              { id: "c", text: "a monopolist restricting output" },
              { id: "d", text: "a privately owned fish farm" }
            ],
            correctChoiceId: "a"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "Tragedy of the commons", statement: "Overuse of shared resources." } ],
            steps: [ { reasoning: "Open-access fisheries are shared resources: each fisher gains the full benefit of an extra catch but bears only part of the cost of stock depletion, so overfishing results.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** overfishing of open-access seas"
          }
        },
        {
          id: "ciealecon-u4-sus-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A carbon tax is designed to",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cap the total population of a country" },
              { id: "b", text: "directly subsidise renewable energy production" },
              { id: "c", text: "raise government revenue with no environmental aim" },
              { id: "d", text: "raise the price of polluting activities and thereby reduce emissions" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "Carbon tax", statement: "Emissions price." } ],
            steps: [ { reasoning: "A carbon tax internalises the external cost of emissions by raising the price of polluting goods, encouraging firms and consumers to switch to cleaner alternatives.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(d)** price polluting activities to cut emissions"
          }
        },
        {
          id: "ciealecon-u4-sus-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Climate change is a market failure mainly because",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "markets are unable to price any good at all" },
              { id: "b", text: "fossil fuels are renewable resources" },
              { id: "c", text: "the social cost of emissions exceeds the private cost borne by producers" },
              { id: "d", text: "governments ban all forms of energy use" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [ { kind: "skill", name: "Market failure", statement: "Externality causes overproduction." } ],
            steps: [ { reasoning: "Greenhouse gas emissions impose costs on society (climate damage) that producers do not pay, so the market price understates the true social cost and polluting output is excessive.", marks: 1, markCode: "A" } ],
            finalAnswer: "**(c)** social cost exceeds private cost"
          }
        },
        {
          id: "ciealecon-u4-sus-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A carbon tax of $25 per tonne is applied to emissions of 10 tonnes. Calculate the total tax paid.",
          response: { type: "numeric", parts: [ { label: "a", answer: 250, unit: "dollars" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "Carbon tax", statement: "Tax per tonne x tonnes emitted." } ],
            steps: [ { reasoning: "Total tax = $25 x 10 = $250.", working: "25 x 10 = 250", marks: 1, markCode: "M" } ],
            finalAnswer: "Total tax = $250"
          }
        },
        {
          id: "ciealecon-u4-sus-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country generates 40 TWh of electricity from renewable sources out of a total of 200 TWh. Calculate the renewable share as a percentage.",
          response: { type: "numeric", parts: [ { label: "a", answer: 20, unit: "%" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "Renewable share", statement: "Renewable output / total output x 100." } ],
            steps: [ { reasoning: "Renewable share = 40 / 200 x 100 = 20% of total electricity generation.", working: "40 / 200 x 100 = 20", marks: 1, markCode: "M" } ],
            finalAnswer: "Renewable share = 20%"
          }
        },
        {
          id: "ciealecon-u4-sus-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A forest of 1.2 million hectares loses 3% of its area each year to deforestation. Calculate the annual loss in hectares.",
          response: { type: "numeric", parts: [ { label: "a", answer: 36000, unit: "hectares" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "Deforestation rate", statement: "Forest area x loss rate." } ],
            steps: [ { reasoning: "Annual loss = 1,200,000 x 0.03 = 36,000 hectares.", working: "1.2e6 x 0.03 = 36000", marks: 1, markCode: "M" } ],
            finalAnswer: "Annual loss = 36,000 hectares"
          }
        },
        {
          id: "ciealecon-u4-sus-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Producing one unit of a good imposes a social cost of $12 while the private cost borne by the producer is $8. If 1 million units are produced, calculate the total external cost.",
          response: { type: "numeric", parts: [ { label: "a", answer: 4000000, unit: "dollars" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "External cost", statement: "(Social cost - private cost) x output." } ],
            steps: [ { reasoning: "External cost per unit = $12 - $8 = $4; total external cost = $4 x 1,000,000 = $4,000,000.", working: "(12 - 8) x 1e6 = 4000000", marks: 1, markCode: "M" } ],
            finalAnswer: "Total external cost = $4,000,000"
          }
        },
        {
          id: "ciealecon-u4-sus-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Under an emissions trading scheme, permits cost $20 each. Firm A must buy 50 additional permits to cover its emissions, while a carbon tax of $25 per tonne would apply to the same 50 tonnes emitted.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1000, unit: "dollars" },
              { label: "b", answer: 1250, unit: "dollars" }
            ]
          },
          markscheme: {
            principles: [ { kind: "formula", name: "Emissions pricing", statement: "Permit price x permits; tax x tonnes." } ],
            steps: [
              { reasoning: "Cost under cap-and-trade = 50 permits x $20 = $1,000.", working: "50 x 20 = 1000", marks: 1, markCode: "M" },
              { reasoning: "Cost under carbon tax = 50 tonnes x $25 = $1,250.", working: "50 x 25 = 1250", marks: 1, markCode: "M" }
            ],
            finalAnswer: "Trading = $1,000; tax = $1,250"
          }
        },
        {
          id: "ciealecon-u4-sus-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain, with reference to fisheries, why the tragedy of the commons leads to resource depletion.",
          response: { type: "open" },
          markscheme: {
            principles: [ { kind: "skill", name: "Tragedy of the commons", statement: "Overuse of shared resources." } ],
            steps: [
              { reasoning: "Open-access fish stocks are shared: each fisher gains the full benefit of catching one more fish but bears only a fraction of the cost of stock depletion.", marks: 1, markCode: "M" },
              { reasoning: "This incentive leads every fisher to overfish, so the stock falls below the level needed for sustainable reproduction.", marks: 1, markCode: "M" },
              { reasoning: "Solutions include catch quotas, marine protected areas or assigning property rights so that the resource user internalises the depletion cost.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Open access → overfishing → stock collapse"
          }
        },
        {
          id: "ciealecon-u4-sus-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which policy is most likely to prevent the tragedy of the commons in fisheries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removing all regulation of the fishery" },
              { id: "b", text: "Subsidising the construction of more fishing boats" },
              { id: "c", text: "Lowering the market price of fish" },
              { id: "d", text: "Setting catch quotas or assigning individual property rights" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [ { kind: "technique", name: "Policy solutions", statement: "Quotas and property rights." } ],
            steps: [ { reasoning: "Quotas and property rights restrict total catch and align the fisher's private incentive with sustainable harvesting, internalising the external cost of depletion.", marks: 1, markCode: "A" } ],
            finalAnswer: "**(d)** quotas or property rights"
          }
        },
        {
          id: "ciealecon-u4-sus-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "The main purpose of the Paris Agreement is to",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "coordinate international action to limit global warming" },
              { id: "b", text: "fund primary education in developing countries" },
              { id: "c", text: "regulate international stock markets" },
              { id: "d", text: "set world tariffs on manufactured goods" }
            ],
            correctChoiceId: "a"
          },
          markscheme: {
            principles: [ { kind: "context", name: "Paris Agreement", statement: "International climate cooperation." } ],
            steps: [ { reasoning: "The Paris Agreement (2015) commits countries to nationally determined emissions targets aimed at keeping global warming well below 2°C above pre-industrial levels.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** coordinate action to limit warming"
          }
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
