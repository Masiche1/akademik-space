import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "eiasbiz-u5-lesson-5-2",
  code: "5-2",
  title: "Costs, Revenue and Break-Even",
  goal: "I CAN distinguish cost types and calculate break-even.",
  standards: ["Edexcel IAS Business WBP01 Unit 5 — Finance Management"],
  vocabulary: [
    {
      term: "Fixed costs",
      definition: "Costs that don't change with output — rent, salaries.",
    },
    {
      term: "Variable costs",
      definition: "Costs that change with output — materials, hourly wages.",
    },
    { term: "Total cost", definition: "Fixed costs + variable costs." },
    {
      term: "Contribution",
      definition: "Selling price per unit minus variable cost per unit.",
    },
    {
      term: "Break-even",
      definition: "Output where total revenue = total cost — zero profit.",
    },
    {
      term: "Margin of safety",
      definition: "Difference between actual sales and break-even.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u5-costs",
      title: "Cost and Revenue Analysis",
      skill: "Classify costs and calculate total cost and contribution.",
      lesson: {
        sections: [
          {
            heading: "Cost classification",
            body: "**Fixed costs**: rent, insurance, salaried staff — same regardless of output. **Variable costs**: raw materials, packaging, commission — rise with output. **Semi-variable**: mixed — base + variable element (phone bill).\n\n**Total cost** = Fixed + (Variable × quantity). **Average cost** = Total cost ÷ quantity — falls with scale (economies of scale).",
          },
          {
            heading: "Contribution",
            body: "**Contribution per unit** = Selling price − Variable cost per unit. **Total contribution** = Contribution × quantity — covers fixed costs then profit.\n\n**Break-even formula**: BEP = Fixed costs ÷ Contribution per unit. **Margin of safety** = Actual sales − BEP — buffer against losses.",
          },
        ],
        keyFormulas: [
          {
            name: "Total cost",
            statement: "Fixed costs + (variable cost × quantity).",
          },
          {
            name: "Contribution",
            statement: "Selling price − variable cost per unit.",
          },
          {
            name: "Break-even",
            statement: "Fixed costs ÷ contribution per unit.",
          },
        ],
        workedExample: {
          problem: "Price £10, variable cost £6, fixed £20k. BEP?",
          solution: "Contribution £4; BEP = 20,000 ÷ 4 = 5,000 units.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u5-cost-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a fixed cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Commission" },
              { id: "b", text: "Raw materials" },
              { id: "c", text: "Doesn't change with output — rent, salaries" },
              { id: "d", text: "Changes with output" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fixed cost",
                statement: "Output-independent.",
              },
            ],
            steps: [
              {
                reasoning: "Fixed = same regardless of output.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Output-independent",
            commonErrors: ["Variable confused."],
          },
        },
        {
          id: "eiasbiz-u5-cost-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Price £15, variable cost £9/unit, fixed costs £30k. Contribution per unit?",
          response: {
            type: "numeric",
            parts: [{ label: "contribution", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Contribution",
                statement: "Price − variable cost.",
              },
            ],
            steps: [
              { reasoning: "15 − 9 = £6 per unit.", marks: 2, markCode: "AO2" },
              {
                reasoning: "Contribution covers fixed costs then profit.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "£6",
            commonErrors: ["Subtracted wrong.", "No unit."],
          },
        },
        {
          id: "eiasbiz-u5-cost-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what break-even analysis tells a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Break-even",
                statement: "Minimum output.",
              },
            ],
            steps: [
              {
                reasoning: "Minimum output to cover all costs — zero profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Shows safety margin — how much sales can fall before loss.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tests viability — is break-even achievable?",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Informs pricing — need contribution to cover fixed costs.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Min output for zero profit + viability test.",
            commonErrors: ["Profit point.", "No purpose."],
          },
        },
        {
          id: "eiasbiz-u5-cost-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Fixed costs £50k, price £20, variable cost £12/unit.",
          parts: [
            { label: "a", prompt: "Calculate break-even output.", marks: 4 },
            {
              label: "b",
              prompt: "If sales are 8,000 units, calculate profit.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Break-even + profit",
                statement: "BEP then profit.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Contribution = 20 − 12 = £8.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) BEP = 50,000 ÷ 8 = 6,250 units.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Profit = (8,000 − 6,250) × £8 = £14,000.",
                marks: 4,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 6,250 units (b) £14,000",
            commonErrors: ["Wrong BEP.", "Forgot excess units."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u5-break",
      title: "Break-Even Analysis Applications",
      skill: "Evaluate break-even for decision-making and sensitivity.",
      lesson: {
        sections: [
          {
            heading: "Break-even applications",
            body: "**New product**: test if projected sales exceed BEP — viability check. **Pricing decisions**: lower price → lower contribution → higher BEP. **Cost reduction**: lower fixed costs → lower BEP — more achievable.\n\n**Limitations**: assumes linear costs, constant prices, single product, all output sold — real world more complex.",
          },
          {
            heading: "Margin of safety",
            body: "**MOS** = Actual sales − Break-even. Larger MOS = safer — can withstand sales decline. Small MOS = risky — small drop causes losses.\n\n**Sensitivity**: what if costs rise or prices fall? Recalculate BEP under different scenarios — stress test viability.",
          },
        ],
        keyFormulas: [
          {
            name: "Margin of safety",
            statement: "Actual sales − break-even sales.",
          },
        ],
        workedExample: {
          problem: "BEP 5,000, actual sales 7,000. MOS?",
          solution: "2,000 units — 40% above BEP.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u5-be-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is margin of safety?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum capacity" },
              { id: "b", text: "Safety equipment" },
              { id: "c", text: "Actual sales minus break-even sales" },
              { id: "d", text: "Extra profit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Margin of safety",
                statement: "Buffer above BEP.",
              },
            ],
            steps: [
              {
                reasoning: "MOS = sales above break-even.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Buffer above BEP",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasbiz-u5-be-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two limitations of break-even analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "BE limitations",
                statement: "Simplified assumptions.",
              },
            ],
            steps: [
              {
                reasoning: "Assumes linear costs — step costs ignored.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Assumes all output sold — ignores demand limits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Single product assumption — multi-product complexity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Linear costs, demand limits, single product.",
            commonErrors: ["No limitations.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u5-be-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a price cut affects break-even.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Price and BE",
                statement: "Lower price = higher BEP.",
              },
            ],
            steps: [
              {
                reasoning: "Lower price → lower contribution per unit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower contribution → higher break-even output.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Must sell more units to cover same fixed costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May still be worthwhile if volume gain is large.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Price cut raises BEP — need more volume.",
            commonErrors: ["Lower BEP.", "No mechanism."],
          },
        },
        {
          id: "eiasbiz-u5-be-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A business has BEP of 4,000 units and sells 6,000.",
          parts: [
            { label: "a", prompt: "Calculate margin of safety.", marks: 3 },
            {
              label: "b",
              prompt: "Assess the business's safety position.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MOS assessment",
                statement: "Buffer analysis.",
              },
            ],
            steps: [
              {
                reasoning: "(a) MOS = 6,000 − 4,000 = 2,000 units.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) MOS% = 2,000 ÷ 6,000 = 33%.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) 33% buffer — reasonably safe, can withstand 33% sales drop.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) But still dependent on market conditions — recession could hit.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "(b) Monitor trends — margin of safety shrinks if BEP rises.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 2,000u/33% (b) safe but monitor",
            commonErrors: ["Wrong MOS.", "No assessment."],
          },
        },
      ],
    },
  ],
};
