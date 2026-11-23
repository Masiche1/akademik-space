module.exports = [
  {
    file: "lesson-7-1.ts",
    exportName: "lesson71",
    lesson: {
      id: "ecn10-u7-lesson-7-1",
      code: "7-1",
      title: "Production and Costs",
      goal: "I CAN explain production methods, productivity and the main types of business cost.",
      standards: ["Edexcel IGCSE Economics 4EC1/01 — Business Economics: production and costs"],
      vocabulary: [
        { term: "Production", definition: "Using factors of production to make goods or provide services." },
        { term: "Productivity", definition: "Output produced per unit of input, usually per worker or hour." },
        { term: "Job production", definition: "One-off or small-batch production of customised products." },
        { term: "Batch production", definition: "Producing a set quantity of identical items in stages." },
        { term: "Flow production", definition: "Continuous production of identical items on an assembly line." },
        { term: "Fixed cost", definition: "A cost that does not change with output in the short run." },
        { term: "Variable cost", definition: "A cost that changes directly with output." },
      ],
      concepts: [
        {
          id: "ecn10-u7-production",
          title: "Production Methods and Productivity",
          skill: "Compare methods of production and explain how productivity is measured and improved.",
          sections: [
            {
              heading: "Methods of production",
              body: "Businesses choose how to organise production. **Job production** makes one-off or customised items, such as handmade furniture. **Batch production** makes a set number of similar products, such as school uniforms. **Flow production** uses assembly lines for continuous output, such as cars or bottling.\n\nJob production is flexible but costly per unit. Flow production has high initial capital costs but low unit costs at high output. Batch production lies between the two.",
            },
            {
              heading: "Productivity and efficiency",
              body: "**Labour productivity** is output per worker or per hour worked: $\\text{labour productivity}=\\frac{\\text{output}}{\\text{workers}}$. Higher productivity means more output from the same inputs, lowering average cost.\n\nProductivity rises through better training, motivation, technology, efficient machines and specialisation. Firms must also avoid waste, downtime and poor quality.",
            },
          ],
          keyFormulas: [
            { name: "Labour productivity", statement: "Output divided by number of workers or hours worked." },
            { name: "Average cost", statement: "Total cost divided by output." },
            { name: "Marginal cost", statement: "Change in total cost divided by change in output." },
          ],
          workedExample: {
            problem: "A bakery employs 8 workers and produces 1,600 loaves per week. Calculate labour productivity.",
            solution: "Labour productivity = 1,600 ÷ 8 = 200 loaves per worker per week.",
          },
          questions: [
            {
              id: "ecn10-u7-production-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which production method is most likely to be used for custom-built wedding cakes?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Flow production" },
                  { id: "b", text: "Batch production" },
                  { id: "c", text: "Job production" },
                  { id: "d", text: "Mass production" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Job production", statement: "One-off or customised production." }],
                steps: [{ reasoning: "Custom products need flexible one-off methods.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Job production",
                commonErrors: ["Choosing flow because output is high volume."],
              },
            },
            {
              id: "ecn10-u7-production-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "A factory produces 4,800 units using 12 workers. Calculate labour productivity per worker.",
              response: { type: "numeric", parts: [{ label: "Productivity", answer: 400, unit: "units per worker" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Labour productivity", statement: "Output ÷ workers." }],
                steps: [
                  { reasoning: "Use output divided by workers.", marks: 1, markCode: "AO1" },
                  { reasoning: "4,800 ÷ 12 = 400 units per worker.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "400 units per worker",
              },
            },
            {
              id: "ecn10-u7-production-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain two advantages of flow production for a car manufacturer.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Flow production", statement: "Continuous assembly-line production lowers unit costs." }],
                steps: [
                  { reasoning: "High output and specialisation can reduce average cost.", marks: 1, markCode: "AO2" },
                  { reasoning: "Assembly lines allow continuous, consistent production.", marks: 1, markCode: "AO2" },
                  { reasoning: "Both points linked to large-scale manufacturing.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Low unit costs through continuous output and efficient specialisation.",
                commonErrors: ["Listing advantages without explaining."],
              },
            },
            {
              id: "ecn10-u7-production-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A clothing firm currently makes uniforms in batches but is considering flow production.",
              parts: [
                { label: "a", prompt: "Compare batch and flow production for this firm.", marks: 3 },
                { label: "b", prompt: "Explain one risk of moving to flow production.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Batch vs flow", statement: "Flexibility and set batches versus continuous low-cost output." }],
                steps: [
                  { reasoning: "(a) Batch suits variety and moderate volumes; flow suits standardised high volume.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Flow may need large investment and reduce flexibility.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Risk: machinery breakdown or demand changes can cause costly downtime/inflexibility.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) batch flexible, flow low-cost/high-volume (b) inflexibility or breakdown risk",
                commonErrors: ["No comparison.", "No risk."],
              },
            },
            {
              id: "ecn10-u7-production-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Productivity in a call centre rises after staff training and new software are introduced.",
              parts: [
                { label: "a", prompt: "Define labour productivity.", marks: 2 },
                { label: "b", prompt: "Explain how training can raise productivity.", marks: 2 },
                { label: "c", prompt: "Explain one possible limitation of measuring productivity only by output per worker.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Labour productivity", statement: "Output per worker or per hour." }],
                steps: [
                  { reasoning: "(a) Output produced per worker or per hour worked.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Training improves skills and reduces errors or time per call.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Ignores quality, wellbeing and wider costs, so output may rise while service falls.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) output per worker (b) better skills/fewer errors (c) quality may be ignored",
              },
            },
            {
              id: "ecn10-u7-production-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A furniture maker must choose between job, batch and flow production.",
              parts: [
                { label: "a", prompt: "Define each production method.", marks: 3 },
                { label: "b", prompt: "Explain which method suits bespoke furniture and why.", marks: 3 },
                { label: "c", prompt: "Evaluate whether a mass-produced chair maker should use flow production.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Choosing production method", statement: "Match method to customisation, volume and cost." }],
                steps: [
                  { reasoning: "(a) Job=custom one-offs; batch=set quantity; flow=continuous assembly line.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Bespoke furniture needs job production because products differ and flexibility matters.", marks: 3, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Flow suits standard chairs at high volume, but requires capital and demand stability.", marks: 3, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) definitions (b) job for bespoke (c) flow likely for mass chairs, evaluated",
                commonErrors: ["No evaluation.", "Ignoring capital cost."],
              },
            },
          ],
        },
        {
          id: "ecn10-u7-costs",
          title: "Costs of Production",
          skill: "Calculate and interpret fixed, variable, total, average and marginal costs.",
          sections: [
            {
              heading: "Main cost concepts",
              body: "**Fixed costs** do not change with output in the short run, such as rent or insurance. **Variable costs** change with output, such as raw materials and hourly wages. **Total cost** is fixed plus variable cost.\n\n**Average cost** is total cost per unit: $\\text{AC}=\\frac{TC}{Q}$. **Marginal cost** is the extra cost of one more unit: $\\text{MC}=\\frac{\\Delta TC}{\\Delta Q}$.",
            },
            {
              heading: "Using cost data",
              body: "Average total cost usually falls at first as fixed costs are spread over more units, then may rise if variable costs increase. Marginal cost matters when deciding whether to produce another unit. A firm compares price or marginal revenue with marginal cost.",
            },
          ],
          keyFormulas: [
            { name: "Total cost", statement: "Fixed cost plus variable cost." },
            { name: "Average cost", statement: "Total cost ÷ output." },
            { name: "Marginal cost", statement: "Change in total cost ÷ change in output." },
          ],
          workedExample: {
            problem: "Fixed cost is £500 and variable cost is £2 per unit. Find total and average cost at 100 units.",
            solution: "TC = 500 + (2 × 100) = £700. AC = 700 ÷ 100 = £7 per unit.",
          },
          questions: [
            {
              id: "ecn10-u7-costs-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which cost is most likely to be fixed in the short run?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Raw materials" },
                  { id: "b", text: "Factory rent" },
                  { id: "c", text: "Hourly wages for production staff" },
                  { id: "d", text: "Packaging per item" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Fixed cost", statement: "Cost that does not vary with output in the short run." }],
                steps: [{ reasoning: "Rent is payable even if output falls.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Factory rent",
              },
            },
            {
              id: "ecn10-u7-costs-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Fixed cost is £800 and variable cost is £4 per unit. Calculate total cost at 150 units.",
              response: { type: "numeric", parts: [{ label: "Total cost", answer: 1400, unit: "£" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Total cost", statement: "Fixed cost + variable cost." }],
                steps: [
                  { reasoning: "Variable cost = £4 × 150 = £600.", marks: 1, markCode: "AO1" },
                  { reasoning: "Total cost = £800 + £600.", marks: 1, markCode: "AO2" },
                  { reasoning: "Total cost = £1,400.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "£1,400",
              },
            },
            {
              id: "ecn10-u7-costs-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Output rises from 100 to 120 units and total cost rises from £1,000 to £1,160. Calculate marginal cost.",
              response: { type: "numeric", parts: [{ label: "Marginal cost", answer: 8, unit: "£ per unit" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Marginal cost", statement: "Change in total cost ÷ change in output." }],
                steps: [
                  { reasoning: "Change in total cost = £160; change in output = 20 units.", marks: 1, markCode: "AO1" },
                  { reasoning: "MC = 160 ÷ 20.", marks: 1, markCode: "AO2" },
                  { reasoning: "Marginal cost = £8 per unit.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "£8 per unit",
              },
            },
            {
              id: "ecn10-u7-costs-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A café has fixed costs of £1,200 per month and variable costs of £3 per customer.",
              parts: [
                { label: "a", prompt: "Calculate total cost and average cost at 600 customers.", marks: 3 },
                { label: "b", prompt: "Explain why average cost falls as customer numbers rise from 200 to 600.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Cost calculations", statement: "TC = FC + VC; AC = TC ÷ Q." }],
                steps: [
                  { reasoning: "(a) VC = £3 × 600 = £1,800; TC = £1,200 + £1,800 = £3,000.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) AC = £3,000 ÷ 600 = £5.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Fixed costs are spread over more customers, so average fixed cost falls.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) TC £3,000, AC £5 (b) fixed costs spread over more output",
              },
            },
            {
              id: "ecn10-u7-costs-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A firm produces 50 units at total cost £900 and 70 units at total cost £1,120.",
              parts: [
                { label: "a", prompt: "Calculate average cost at 50 and 70 units.", marks: 3 },
                { label: "b", prompt: "Calculate marginal cost between 50 and 70 units.", marks: 1 },
                { label: "c", prompt: "Explain why marginal cost is useful for output decisions.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Cost measures", statement: "AC = TC ÷ Q; MC = ΔTC ÷ ΔQ." }],
                steps: [
                  { reasoning: "(a) AC at 50 = £900 ÷ 50 = £18.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) AC at 70 = £1,120 ÷ 70 = £16.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Both averages stated correctly.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) MC = (1,120 − 900) ÷ (70 − 50) = £11 per unit.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) It shows the cost of the next unit, helping decide whether extra output adds profit.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) £18 and £16 (b) £11 (c) next-unit cost guides output",
              },
            },
            {
              id: "ecn10-u7-costs-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A manufacturer has fixed costs of £10,000, variable cost of £25 per unit and sells 500 units.",
              parts: [
                { label: "a", prompt: "Calculate total cost and average cost.", marks: 3 },
                { label: "b", prompt: "If output rises by 20 units and total cost rises by £600, calculate marginal cost.", marks: 2 },
                { label: "c", prompt: "Explain why a firm might produce more when price is above marginal cost.", marks: 2 },
                { label: "d", prompt: "Evaluate whether falling average cost always means rising profit.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Cost and output decisions", statement: "Costs guide output; profit depends on revenue too." }],
                steps: [
                  { reasoning: "(a) VC = £25 × 500 = £12,500; TC = £10,000 + £12,500 = £22,500.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) AC = £22,500 ÷ 500 = £45.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) MC = £600 ÷ 20 = £30 per unit.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) If price exceeds MC, each extra unit adds more revenue than cost, raising profit.", marks: 2, markCode: "AO3", part: "c" },
                  { reasoning: "(d) Not necessarily: revenue may fall, demand may be limited, and fixed costs still matter.", marks: 3, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) TC £22,500, AC £45 (b) £30 (c) price>MC adds profit (d) revenue and demand also matter",
                commonErrors: ["Forgetting fixed costs.", "Treating lower AC as automatic profit."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u7-production-costs-notes",
      title: "Production and costs — notes",
      summary: "Match production method to output needs; productivity rises with efficiency; costs determine unit profitability.",
      sections: [
        { heading: "Production methods", body: "Job = customised one-offs; batch = set quantities; flow = continuous assembly-line output." },
        { heading: "Productivity", body: "Output per worker or hour rises through training, technology and efficient organisation." },
        { heading: "Costs", body: "TC = fixed + variable; AC = TC ÷ output; MC = change in TC ÷ change in output." },
      ],
    },
  },
  {
    file: "lesson-7-2.ts",
    exportName: "lesson72",
    lesson: {
      id: "ecn10-u7-lesson-7-2",
      code: "7-2",
      title: "Revenue, Profit and Competition",
      goal: "I CAN calculate revenue and profit and compare business competition and market structures.",
      standards: ["Edexcel IGCSE Economics 4EC1/01 — Business Economics: revenue, profit and competition"],
      vocabulary: [
        { term: "Total revenue", definition: "Price multiplied by quantity sold." },
        { term: "Average revenue", definition: "Revenue per unit sold." },
        { term: "Marginal revenue", definition: "Extra revenue from selling one more unit." },
        { term: "Profit", definition: "Total revenue minus total cost." },
        { term: "Break-even", definition: "Output where total revenue equals total cost." },
        { term: "Monopoly", definition: "A single seller dominating a market." },
        { term: "Oligopoly", definition: "A market dominated by a few large firms." },
      ],
      concepts: [
        {
          id: "ecn10-u7-revenue-profit",
          title: "Revenue and Profit",
          skill: "Calculate total, average and marginal revenue and explain profit and break-even.",
          sections: [
            {
              heading: "Revenue measures",
              body: "**Total revenue** is price × quantity sold: $\\text{TR}=P\\times Q$. **Average revenue** is revenue per unit: $\\text{AR}=\\frac{TR}{Q}=P$. **Marginal revenue** is the change in total revenue from one extra unit: $\\text{MR}=\\frac{\\Delta TR}{\\Delta Q}$.",
            },
            {
              heading: "Profit and break-even",
              body: "**Profit** = total revenue − total cost. Normal profit is the minimum reward needed to keep resources in their current use; supernormal profit is above this. **Break-even** occurs where total revenue equals total cost, so the firm covers all costs but makes no supernormal profit.",
            },
          ],
          keyFormulas: [
            { name: "Total revenue", statement: "Price × quantity sold." },
            { name: "Profit", statement: "Total revenue − total cost." },
            { name: "Break-even", statement: "Total revenue = total cost." },
            { name: "Marginal revenue", statement: "Change in total revenue ÷ change in quantity." },
          ],
          workedExample: {
            problem: "A firm sells 200 units at £15 each and has total cost £2,400. Calculate profit.",
            solution: "TR = 15 × 200 = £3,000. Profit = £3,000 − £2,400 = £600.",
          },
          questions: [
            {
              id: "ecn10-u7-revenue-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "A firm sells 80 units at £12 each. What is total revenue?",
              response: { type: "numeric", parts: [{ label: "Total revenue", answer: 960, unit: "£" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Total revenue", statement: "Price × quantity." }],
                steps: [
                  { reasoning: "TR = price × quantity.", marks: 1, markCode: "AO1" },
                  { reasoning: "TR = £12 × 80 = £960.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "£960",
              },
            },
            {
              id: "ecn10-u7-revenue-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Total revenue is £5,000 and total cost is £4,200. What is profit?",
              response: { type: "numeric", parts: [{ label: "Profit", answer: 800, unit: "£" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Profit", statement: "Total revenue − total cost." }],
                steps: [
                  { reasoning: "Profit = revenue − cost.", marks: 1, markCode: "AO1" },
                  { reasoning: "Profit = £5,000 − £4,200 = £800.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "£800",
              },
            },
            {
              id: "ecn10-u7-revenue-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "A firm sells 300 units at £20 each. Total cost is £5,400.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Revenue and profit", statement: "TR = P × Q; profit = TR − TC." }],
                steps: [
                  { reasoning: "TR = £20 × 300 = £6,000.", marks: 1, markCode: "AO2" },
                  { reasoning: "Profit = £6,000 − £5,400 = £600.", marks: 1, markCode: "AO2" },
                  { reasoning: "Average revenue equals price = £20.", marks: 1, markCode: "AO2" },
                  { reasoning: "Positive profit means revenue exceeds cost.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "TR £6,000; profit £600; AR £20",
              },
            },
            {
              id: "ecn10-u7-revenue-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A firm has fixed costs of £2,000 and variable cost of £10 per unit.",
              parts: [
                { label: "a", prompt: "Calculate total cost at 400 units.", marks: 2 },
                { label: "b", prompt: "If price is £20, calculate profit at 400 units.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Cost and profit", statement: "TC = FC + VC; profit = TR − TC." }],
                steps: [
                  { reasoning: "(a) TC = £2,000 + (£10 × 400) = £6,000.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) TR = £20 × 400 = £8,000.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Profit = £8,000 − £6,000 = £2,000.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) £6,000 (b) profit £2,000",
              },
            },
            {
              id: "ecn10-u7-revenue-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A café sells 500 coffees at £4 each. Costs are £1,200 fixed plus £1.50 variable per coffee.",
              parts: [
                { label: "a", prompt: "Calculate total revenue and total cost.", marks: 3 },
                { label: "b", prompt: "Calculate profit and state whether the café is above break-even.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Revenue, cost and profit", statement: "TR = P × Q; TC = FC + VC; profit = TR − TC." }],
                steps: [
                  { reasoning: "(a) TR = £4 × 500 = £2,000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) VC = £1.50 × 500 = £750; TC = £1,200 + £750 = £1,950.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Profit = £2,000 − £1,950 = £50, above break-even.", marks: 3, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) TR £2,000, TC £1,950 (b) profit £50, above break-even",
              },
            },
            {
              id: "ecn10-u7-revenue-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A phone maker considers cutting price from £200 to £180, increasing sales from 1,000 to 1,300 units. Variable cost is £90 per phone and fixed cost is £40,000.",
              parts: [
                { label: "a", prompt: "Calculate total revenue and profit at the original price.", marks: 3 },
                { label: "b", prompt: "Calculate total revenue and profit at the lower price.", marks: 3 },
                { label: "c", prompt: "Explain whether the price cut raises profit.", marks: 2 },
                { label: "d", prompt: "Evaluate one limitation of using only current figures to decide price.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Price and profit", statement: "Lower price can raise revenue but must cover higher variable costs." }],
                steps: [
                  { reasoning: "(a) TR = £200 × 1,000 = £200,000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) TC = £40,000 + (£90 × 1,000) = £130,000; profit = £70,000.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) TR = £180 × 1,300 = £234,000.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) TC = £40,000 + (£90 × 1,300) = £157,000; profit = £77,000.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Profit rises from £70,000 to £77,000 because extra revenue outweighs extra variable cost.", marks: 2, markCode: "AO3", part: "c" },
                  { reasoning: "(d) Future demand, competitor response and capacity may change, so current figures are limited.", marks: 2, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) profit £70,000 (b) profit £77,000 (c) yes, higher profit (d) demand/competition may change",
                commonErrors: ["Forgetting fixed cost.", "Comparing revenue only, not profit."],
              },
            },
          ],
        },
        {
          id: "ecn10-u7-competition",
          title: "Market Structures and Competition",
          skill: "Compare perfect competition, monopolistic competition, oligopoly and monopoly.",
          sections: [
            {
              heading: "Market structures",
              body: "**Perfect competition** has many small firms, identical products and free entry, so firms are price takers. **Monopolistic competition** has many firms selling differentiated products and some price-setting power. **Oligopoly** has a few dominant firms, often with barriers to entry and interdependence. **Monopoly** has one dominant seller with strong barriers to entry.",
            },
            {
              heading: "Competition and efficiency",
              body: "More competition usually pushes firms toward lower prices and efficient output. Monopoly can restrict output and charge higher prices, but may also fund research if profitable. Governments may regulate monopolies or break them up where competition is harmed.",
            },
          ],
          keyFormulas: [
            { name: "Price taker", statement: "Firm accepts the market price." },
            { name: "Price maker", statement: "Firm can influence its price." },
            { name: "Barriers to entry", statement: "Obstacles preventing new firms entering a market." },
          ],
          workedExample: {
            problem: "A market has four large firms selling similar smartphones and high start-up costs. Which structure is most likely?",
            solution: "Oligopoly — few dominant firms and barriers to entry.",
          },
          questions: [
            {
              id: "ecn10-u7-competition-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which market structure has many firms selling identical products with free entry?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Perfect competition" },
                  { id: "b", text: "Monopoly" },
                  { id: "c", text: "Oligopoly" },
                  { id: "d", text: "Monopolistic competition" },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Perfect competition", statement: "Many firms, identical products, free entry." }],
                steps: [{ reasoning: "All features match perfect competition.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Perfect competition",
              },
            },
            {
              id: "ecn10-u7-competition-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Define barriers to entry and give two examples.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Barriers to entry", statement: "Obstacles that prevent new firms entering a market." }],
                steps: [
                  { reasoning: "Definition given correctly.", marks: 1, markCode: "AO1" },
                  { reasoning: "Example: high capital costs or patents.", marks: 1, markCode: "AO1" },
                  { reasoning: "Example: brand loyalty or government licences.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Obstacles to entry, e.g. capital costs, patents, brand loyalty, licences.",
              },
            },
            {
              id: "ecn10-u7-competition-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Compare perfect competition and monopoly in terms of number of firms and price-setting power.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Perfect competition vs monopoly", statement: "Many price takers vs one price maker." }],
                steps: [
                  { reasoning: "Perfect competition has many firms; monopoly has one dominant seller.", marks: 1, markCode: "AO1" },
                  { reasoning: "Perfect competition firms are price takers.", marks: 1, markCode: "AO1" },
                  { reasoning: "Monopoly has strong barriers and can act as a price maker.", marks: 1, markCode: "AO1" },
                  { reasoning: "Comparison is explicit and accurate.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Many price takers vs one price maker with barriers.",
              },
            },
            {
              id: "ecn10-u7-competition-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A smartphone market is dominated by three large firms with high research costs.",
              parts: [
                { label: "a", prompt: "Identify the market structure.", marks: 2 },
                { label: "b", prompt: "Explain why firms in this market may watch each other's prices.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Oligopoly", statement: "Few dominant firms with interdependence." }],
                steps: [
                  { reasoning: "(a) Oligopoly — few large firms dominate.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Firms are interdependent: one price change can trigger reactions from rivals.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) High barriers reduce threat of new entrants.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) oligopoly (b) interdependence and barriers to entry",
              },
            },
            {
              id: "ecn10-u7-competition-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A town has many small restaurants selling differentiated meals and few barriers to entry.",
              parts: [
                { label: "a", prompt: "Identify the market structure.", marks: 2 },
                { label: "b", prompt: "Explain how competition affects prices and quality.", marks: 2 },
                { label: "c", prompt: "Give one reason a restaurant may still have some price-setting power.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Monopolistic competition", statement: "Many firms with differentiated products." }],
                steps: [
                  { reasoning: "(a) Monopolistic competition.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Competition pressures firms to keep prices reasonable and improve quality/service.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Differentiation, branding or location can give limited price-making power.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) monopolistic competition (b) lower prices/better quality (c) differentiation gives some power",
              },
            },
            {
              id: "ecn10-u7-competition-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A government must decide whether to break up a dominant electricity supplier.",
              parts: [
                { label: "a", prompt: "Define monopoly and give two possible barriers to entry.", marks: 3 },
                { label: "b", prompt: "Explain two ways monopoly power may harm consumers.", marks: 3 },
                { label: "c", prompt: "Explain one possible benefit of a monopoly.", marks: 2 },
                { label: "d", prompt: "Evaluate whether the government should break up the supplier.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Monopoly policy", statement: "Weigh consumer harm against possible efficiency gains." }],
                steps: [
                  { reasoning: "(a) Monopoly = one dominant seller; barriers e.g. economies of scale, patents, licences.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Higher prices and restricted output can reduce consumer welfare.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Less competitive pressure may allow inefficiency and poor service.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Large scale may fund infrastructure and research, lowering long-run costs.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Break-up may increase competition but raise costs if scale economies are lost; regulation may be better.", marks: 2, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) monopoly/barriers (b) higher prices/restricted output (c) scale/innovation (d) evaluate competition vs scale",
                commonErrors: ["One-sided argument.", "No policy evaluation."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u7-revenue-competition-notes",
      title: "Revenue, profit and competition — notes",
      summary: "Revenue minus cost gives profit; market structure affects pricing power and efficiency.",
      sections: [
        { heading: "Revenue and profit", body: "TR = price × quantity; profit = TR − total cost; break-even means TR = TC." },
        { heading: "Market structures", body: "Perfect competition = many price takers; monopoly = one price maker; oligopoly = few interdependent firms." },
        { heading: "Evaluation", body: "Competition can lower prices, but scale economies and innovation may justify large firms." },
      ],
    },
  },
  {
    file: "lesson-7-3.ts",
    exportName: "lesson73",
    lesson: {
      id: "ecn10-u7-lesson-7-3",
      code: "7-3",
      title: "Business Growth and Enterprise",
      goal: "I CAN explain internal and external growth, economies of scale and support for enterprise.",
      standards: ["Edexcel IGCSE Economics 4EC1/01 — Business Economics: growth and enterprise"],
      vocabulary: [
        { term: "Internal growth", definition: "Growth achieved by expanding within the existing firm." },
        { term: "External growth", definition: "Growth through merger or takeover." },
        { term: "Merger", definition: "Two firms combining to form one larger firm." },
        { term: "Takeover", definition: "One firm gaining control of another." },
        { term: "Economies of scale", definition: "Cost advantages from producing on a larger scale." },
        { term: "Diseconomies of scale", definition: "Cost disadvantages when a firm becomes too large." },
        { term: "Entrepreneur", definition: "A person who organises factors of production and takes risk." },
      ],
      concepts: [
        {
          id: "ecn10-u7-growth",
          title: "Business Growth and Economies of Scale",
          skill: "Distinguish internal and external growth and analyse economies and diseconomies of scale.",
          sections: [
            {
              heading: "Internal and external growth",
              body: "**Internal growth** expands output, workers, machinery or new products within the firm. **External growth** combines firms through a **merger** (agreement to form one firm) or **takeover** (one firm gains control of another).\n\nGrowth can bring economies of scale but may reduce competition or create diseconomies if the firm becomes too large.",
            },
            {
              heading: "Economies and diseconomies",
              body: "Economies include **purchasing** (bulk-buying discounts), **technical** (specialised machinery), **marketing** (advertising across brands), **financial** (cheaper borrowing) and **managerial** (division of labour). Diseconomies include communication problems, coordination costs and slow decisions.",
            },
          ],
          keyFormulas: [
            { name: "Internal growth", statement: "Expansion within the existing firm." },
            { name: "External growth", statement: "Merger or takeover with another firm." },
            { name: "Economies of scale", statement: "Lower average cost as output rises." },
          ],
          workedExample: {
            problem: "A bakery buys flour in larger quantities after opening a second branch. Which economy of scale applies?",
            solution: "Purchasing economy — bulk buying lowers input costs.",
          },
          questions: [
            {
              id: "ecn10-u7-growth-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is the difference between a merger and a takeover?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A merger is agreed combination; a takeover is gaining control" },
                  { id: "b", text: "They are identical" },
                  { id: "c", text: "A merger always fails" },
                  { id: "d", text: "A takeover is internal growth only" },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Merger and takeover", statement: "Agreement to combine versus gaining control." }],
                steps: [{ reasoning: "Merger = agreed combination; takeover = control gained.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Merger agreed, takeover control",
              },
            },
            {
              id: "ecn10-u7-growth-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "A firm opens three new shops using its own profits. Is this internal or external growth?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "External growth" },
                  { id: "b", text: "Internal growth" },
                  { id: "c", text: "No growth" },
                  { id: "d", text: "Merger" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Internal growth", statement: "Expansion within the existing firm." }],
                steps: [{ reasoning: "Expanding own shops is internal growth.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Internal growth",
              },
            },
            {
              id: "ecn10-u7-growth-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Give two examples of economies of scale.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Economies of scale", statement: "Cost advantages from larger scale." }],
                steps: [
                  { reasoning: "Purchasing economies — bulk-buy discounts.", marks: 1, markCode: "AO1" },
                  { reasoning: "Technical economies — specialised machinery.", marks: 1, markCode: "AO1" },
                  { reasoning: "Marketing or financial economies also acceptable.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Purchasing, technical, marketing, financial or managerial economies.",
              },
            },
            {
              id: "ecn10-u7-growth-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Two supermarkets merge to form one national chain.",
              parts: [
                { label: "a", prompt: "Define external growth.", marks: 2 },
                { label: "b", prompt: "Explain two possible economies of scale from the merger.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "External growth", statement: "Growth through merger or takeover." }],
                steps: [
                  { reasoning: "(a) External growth is combining with another firm through merger or takeover.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Larger buying power can reduce input costs.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Shared distribution and advertising can lower costs per unit.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) merger/takeover growth (b) purchasing and marketing economies",
              },
            },
            {
              id: "ecn10-u7-growth-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A rapidly expanding multinational finds average cost rising despite higher output.",
              parts: [
                { label: "a", prompt: "Define diseconomies of scale.", marks: 2 },
                { label: "b", prompt: "Explain two causes of diseconomies.", marks: 2 },
                { label: "c", prompt: "Suggest one way the firm could reduce diseconomies.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Diseconomies of scale", statement: "Rising average cost as firm becomes too large." }],
                steps: [
                  { reasoning: "(a) Diseconomies occur when size causes average cost to rise.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Causes: poor communication or coordination across many departments.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Causes: slower decisions or worker motivation falling in a large bureaucracy.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Solution: decentralise decisions or improve communication and management.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) rising AC from size (b) communication/coordination (c) decentralise or improve management",
              },
            },
            {
              id: "ecn10-u7-growth-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A successful small software firm must decide between internal growth and a takeover.",
              parts: [
                { label: "a", prompt: "Distinguish internal and external growth.", marks: 3 },
                { label: "b", prompt: "Explain two benefits of internal growth.", marks: 3 },
                { label: "c", prompt: "Explain two risks of a takeover.", marks: 2 },
                { label: "d", prompt: "Evaluate which growth route is likely better for this firm.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Internal vs external growth", statement: "Control and organic expansion versus combination risks." }],
                steps: [
                  { reasoning: "(a) Internal growth expands within the firm; external growth is merger or takeover.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Internal growth preserves control and allows gradual skills/culture development.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) It may avoid integration problems and excessive debt.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Takeover risks: culture clash, debt and loss of control.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Internal growth is safer but slower; takeover gives instant scale if risks are managed.", marks: 2, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) definitions (b) control/gradual growth (c) debt/clash/loss control (d) balanced evaluation",
                commonErrors: ["No distinction.", "No evaluation."],
              },
            },
          ],
        },
        {
          id: "ecn10-u7-enterprise",
          title: "Entrepreneurship and Business Support",
          skill: "Explain the role of entrepreneurs and evaluate government support for enterprise.",
          sections: [
            {
              heading: "Entrepreneurship",
              body: "An **entrepreneur** combines land, labour and capital, takes risk and seeks profit through innovation or new markets. Entrepreneurship can create jobs, new products and competition. Risks include failure, uncertainty and financial loss.",
            },
            {
              heading: "Government support",
              body: "Governments may support enterprise through **grants**, subsidised loans, tax relief, business-rate reductions, training and export advice. Support can encourage start-ups and investment, but may cost taxpayers and sometimes support firms that would have succeeded anyway.",
            },
          ],
          keyFormulas: [
            { name: "Entrepreneur", statement: "Organises factors and takes risk for profit." },
            { name: "Grant", statement: "Government payment that does not have to be repaid." },
            { name: "Subsidy", statement: "Government payment lowering costs for a firm or consumer." },
          ],
          workedExample: {
            problem: "A government gives a start-up £5,000 that does not need repayment and reduces its business rates. Identify the two support measures.",
            solution: "The £5,000 is a grant; the lower rates are a subsidy/tax relief measure.",
          },
          questions: [
            {
              id: "ecn10-u7-enterprise-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Who is the factor of production that takes risk and organises the others?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Land" },
                  { id: "b", text: "Labour" },
                  { id: "c", text: "Capital" },
                  { id: "d", text: "Enterprise" },
                ],
                correctChoiceId: "d",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Enterprise", statement: "Entrepreneurial factor taking risk." }],
                steps: [{ reasoning: "Enterprise is the entrepreneurial factor.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Enterprise",
              },
            },
            {
              id: "ecn10-u7-enterprise-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Define entrepreneur and state one benefit of entrepreneurship to the economy.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Entrepreneur", statement: "Person who organises factors and takes risk." }],
                steps: [
                  { reasoning: "Definition correct.", marks: 1, markCode: "AO1" },
                  { reasoning: "Benefit: creates jobs, innovation or competition.", marks: 1, markCode: "AO1" },
                  { reasoning: "Benefit linked to economic activity.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Risk-taking organiser; benefits include jobs, innovation or competition.",
              },
            },
            {
              id: "ecn10-u7-enterprise-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two ways government can support small businesses.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Business support", statement: "Grants, loans, tax relief and advice lower barriers." }],
                steps: [
                  { reasoning: "Grants or subsidised loans reduce start-up costs.", marks: 1, markCode: "AO1" },
                  { reasoning: "Tax relief or business-rate reductions lower ongoing costs.", marks: 1, markCode: "AO1" },
                  { reasoning: "Training or export advice improves skills and market access.", marks: 1, markCode: "AO1" },
                  { reasoning: "Both methods explained as support for enterprise.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Grants/loans, tax relief, advice and training support small firms.",
              },
            },
            {
              id: "ecn10-u7-enterprise-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A government offers tax relief to new businesses in a deprived area.",
              parts: [
                { label: "a", prompt: "Explain one benefit of the policy.", marks: 2 },
                { label: "b", prompt: "Explain one cost or drawback.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Enterprise policy", statement: "Support can encourage start-ups but has opportunity costs." }],
                steps: [
                  { reasoning: "(a) Lower taxes raise profits and may encourage new firms and jobs.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Government loses tax revenue that could fund services.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Some firms may relocate only for the relief or would have started anyway.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Opportunity cost means less spending elsewhere.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) more start-ups/jobs (b) lost revenue/opportunity cost or relocation",
              },
            },
            {
              id: "ecn10-u7-enterprise-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A start-up founder risks savings to launch an app.",
              parts: [
                { label: "a", prompt: "Define enterprise as a factor of production.", marks: 2 },
                { label: "b", prompt: "Explain why entrepreneurship can benefit consumers.", marks: 2 },
                { label: "c", prompt: "Explain one risk borne by the entrepreneur.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Enterprise", statement: "Risk-taking organisation of factors." }],
                steps: [
                  { reasoning: "(a) Enterprise is the entrepreneurial factor combining land, labour and capital.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) New products, competition and jobs can improve choice and welfare.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Risk: savings or business may fail and financial loss occurs.", marks: 2, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) risk-taking factor (b) innovation/competition/jobs (c) financial failure risk",
              },
            },
            {
              id: "ecn10-u7-enterprise-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A government must decide whether to expand support for small businesses.",
              parts: [
                { label: "a", prompt: "Define entrepreneurship and give one economic benefit.", marks: 3 },
                { label: "b", prompt: "Explain two ways government support can help enterprise.", marks: 3 },
                { label: "c", prompt: "Explain two drawbacks of generous support.", marks: 2 },
                { label: "d", prompt: "Evaluate whether support should be expanded.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Enterprise support evaluation", statement: "Weigh jobs and innovation against fiscal cost and inefficiency." }],
                steps: [
                  { reasoning: "(a) Entrepreneurship = risk-taking organisation; benefit = jobs, innovation or competition.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Grants/loans reduce start-up costs; tax relief lowers ongoing costs.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Training/advice improves skills and survival rates.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Drawbacks: lost tax revenue and support may go to firms that would succeed anyway.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Expand if targeted at viable start-ups; limit if costs outweigh benefits.", marks: 2, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) definition/benefit (b) finance+advice (c) cost/inefficiency (d) conditional evaluation",
                commonErrors: ["No drawbacks.", "No judgement."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u7-growth-enterprise-notes",
      title: "Business growth and enterprise — notes",
      summary: "Firms grow internally or externally; scale can lower or raise costs; enterprise needs risk and support.",
      sections: [
        { heading: "Growth", body: "Internal = expand own firm; external = merger or takeover." },
        { heading: "Scale", body: "Economies lower average cost; diseconomies raise it through coordination problems." },
        { heading: "Enterprise", body: "Entrepreneurs take risk; government support can help but has opportunity costs." },
      ],
    },
  },
];
