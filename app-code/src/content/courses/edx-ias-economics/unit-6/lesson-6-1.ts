import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "eias-econ-u6-lesson-6-1",
  code: "6-1",
  title: "Business Objectives and Costs",
  goal: "I CAN explain business objectives and cost/revenue analysis.",
  standards: [
    "Edexcel IAS Economics 9EC01 Unit 6 — Business Economics and Quantitative Methods",
  ],
  vocabulary: [
    {
      term: "Profit maximisation",
      definition: "Producing where marginal revenue = marginal cost.",
    },
    {
      term: "Revenue maximisation",
      definition: "Producing where marginal revenue = 0.",
    },
    {
      term: "Sales maximisation",
      definition: "Maximising total revenue regardless of profit.",
    },
    { term: "Fixed costs", definition: "Costs that don't change with output." },
    { term: "Variable costs", definition: "Costs that change with output." },
    { term: "Marginal cost", definition: "Cost of producing one extra unit." },
  ],
  concepts: [
    {
      id: "eias-econ-u6-objectives",
      title: "Business Objectives",
      skill: "Compare profit, revenue and sales maximisation.",
      lesson: {
        sections: [
          {
            heading: "Objective types",
            body: "**Profit maximisation**: produce where MR=MC — optimal output. **Revenue maximisation**: produce where MR=0 — highest total revenue but lower profit. **Sales maximisation**: maximise volume regardless of profit — may sacrifice profitability.\n\n**Other objectives**: growth, market share, survival, satisficing (adequate profit). **Stakeholder conflicts**: shareholders want profit, managers may prefer growth/revenue, employees want jobs.",
          },
          {
            heading: "Cost and revenue curves",
            body: "**Total revenue**: price × quantity. **Marginal revenue**: change in TR from extra unit. **Average revenue**: price per unit. **Marginal cost**: change in TC from extra unit.\n\n**Profit max**: MR=MC. **Revenue max**: MR=0. **Loss min**: produce where MR=MC even if below cost.",
          },
        ],
        keyFormulas: [
          { name: "Profit max", statement: "Produce where MR = MC." },
          { name: "Revenue max", statement: "Produce where MR = 0." },
        ],
        workedExample: {
          problem: "MR=£5, MC=£3 at current output. Should firm produce more?",
          solution: "Yes — MR>MC, extra unit adds profit.",
        },
      },
      questions: [
        {
          id: "eias-econ-u6-obj-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "At what output does a firm maximise profit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "AR = AC" },
              { id: "b", text: "MR = 0" },
              { id: "c", text: "TR = TC" },
              { id: "d", text: "MR = MC" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit max", statement: "MR = MC." },
            ],
            steps: [
              {
                reasoning: "Profit max where MR=MC.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** MR = MC",
            commonErrors: ["Revenue max confused."],
          },
        },
        {
          id: "eias-econ-u6-obj-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons a firm might not maximise profit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-profit objectives",
                statement: "Stakeholder conflicts.",
              },
            ],
            steps: [
              {
                reasoning: "Managers may prefer growth/revenue over profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Stakeholder pressures — employees want job security.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Satisficing — adequate profit sufficient.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Manager goals, stakeholders, satisficing.",
            commonErrors: ["Always profit.", "Only one."],
          },
        },
        {
          id: "eias-econ-u6-obj-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between revenue and profit maximisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Objectives",
                statement: "MR=0 vs MR=MC.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revenue max: MR=0 — produce until extra unit adds no revenue.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Profit max: MR=MC — produce until extra unit adds no profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Revenue max produces more output but lower profit margin.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Profit max is economically optimal; revenue max may sacrifice profit.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Revenue max=MR0; profit max=MRMC.",
            commonErrors: ["Same thing.", "No difference."],
          },
        },
        {
          id: "eias-econ-u6-obj-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A firm must choose between profit and market share maximisation.",
          parts: [
            { label: "a", prompt: "Explain each objective.", marks: 4 },
            { label: "b", prompt: "Suggest a balanced approach.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Objective choice",
                statement: "Short vs long term.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Profit max: MR=MC — optimal output for profit.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Market share: lower prices, higher volume — sacrifice profit.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Short-term profit, long-term market share — build position first.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Or niche strategy — high margin, focused segment.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) profit vs share (b) balance or niche",
            commonErrors: ["One only.", "No balance."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u6-costs",
      title: "Costs, Revenue and Break-Even",
      skill: "Calculate and interpret cost/revenue relationships.",
      lesson: {
        sections: [
          {
            heading: "Cost structures",
            body: "**Fixed costs**: rent, salaries — same regardless of output. **Variable costs**: materials, hourly wages — change with output. **Total cost** = FC + VC. **Average cost** = TC ÷ Q — falls with scale. **Marginal cost** = ΔTC ÷ ΔQ — cost of extra unit.\n\n**Economies of scale**: average cost falls as output rises — specialisation, bulk buying, technology.",
          },
          {
            heading: "Break-even analysis",
            body: "**Break-even**: output where TR = TC — zero profit. **BEP** = Fixed costs ÷ (Price − Variable cost). **Margin of safety** = Actual sales − BEP — buffer against losses.\n\n**Example**: FC £10k, price £10, VC £6 → BEP = 10,000 ÷ 4 = 2,500 units.",
          },
        ],
        keyFormulas: [
          {
            name: "Break-even",
            statement: "Fixed costs ÷ contribution per unit.",
          },
          { name: "Contribution", statement: "Price − variable cost." },
        ],
        workedExample: {
          problem: "FC £20k, price £15, VC £9. BEP?",
          solution: "20,000 ÷ 6 = 3,333 units.",
        },
      },
      questions: [
        {
          id: "eias-econ-u6-costs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is marginal cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cost of producing one extra unit" },
              { id: "b", text: "Total cost" },
              { id: "c", text: "Fixed cost" },
              { id: "d", text: "Average cost" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marginal cost",
                statement: "Extra unit cost.",
              },
            ],
            steps: [
              {
                reasoning: "MC = cost of one more unit.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Extra unit",
            commonErrors: ["Average confused."],
          },
        },
        {
          id: "eias-econ-u6-costs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "FC £30k, VC £5/unit, price £12. BEP?",
          response: {
            type: "numeric",
            parts: [{ label: "BEP", answer: 4286 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "BEP", statement: "FC ÷ contribution." },
            ],
            steps: [
              {
                reasoning: "Contribution = 12 − 5 = £7.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "BEP = 30,000 ÷ 7 ≈ 4,286 units.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "~4,286 units",
            commonErrors: ["Wrong formula.", "No rounding."],
          },
        },
        {
          id: "eias-econ-u6-costs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain economies of scale.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Economies of scale",
                statement: "AC falls with Q.",
              },
            ],
            steps: [
              {
                reasoning: "Average cost falls as output increases.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Causes: specialisation, bulk buying, technology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Large firms have cost advantage — barriers to entry.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Limits: diseconomies of scale at very high output.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "AC falls with scale — cost advantage.",
            commonErrors: ["Always falls.", "No cause."],
          },
        },
        {
          id: "eias-econ-u6-costs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Firm sells at £20, VC £12, FC £40k, sells 5,000 units.",
          parts: [
            { label: "a", prompt: "Calculate profit.", marks: 4 },
            {
              label: "b",
              prompt: "Calculate BEP and margin of safety.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit + BEP", statement: "TR − TC." },
            ],
            steps: [
              {
                reasoning: "(a) TR = 5,000 × 20 = £100k.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) TC = 40k + (5,000 × 12) = £100k → profit £0.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) BEP = 40,000 ÷ 8 = 5,000 units.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) MOS = 5,000 − 5,000 = 0 — at break-even.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £0 (b) 5,000u, MOS 0",
            commonErrors: ["Wrong TC.", "Profit wrong."],
          },
        },
      ],
    },
  ],
};
