module.exports = [
  {
    file: "lesson-8-1.ts", exportName: "lesson81",
    lesson: {
      id: "ecn11-u8-lesson-8-1", code: "8-1",
      title: "Marketing",
      goal: "I CAN explain market research and the elements of the marketing mix.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
      vocabulary: [
        { term: "Marketing", definition: "The process of identifying customer needs and satisfying them profitably." },
        { term: "Market research", definition: "Gathering and analysing information about customers, markets and competitors." },
        { term: "Primary research", definition: "New data collected first-hand, e.g. surveys, interviews, observation." },
        { term: "Secondary research", definition: "Using existing data, e.g. government statistics, reports, the internet." },
        { term: "Marketing mix", definition: "The four Ps: product, price, place and promotion." },
        { term: "Promotion", definition: "Communicating the product to customers through advertising, sales promotion, PR and personal selling." },
        { term: "Niche market", definition: "A small, specialised segment of the market." },
      ],
      concepts: [
        {
          id: "ecn11-u8-research", title: "Market Research",
          skill: "Distinguish primary and secondary research and explain why businesses do market research.",
          sections: [
            { heading: "Why market research", body: "**Market research** reduces uncertainty before launching a product or entering a market. It helps firms understand **customer needs**, estimate **demand**, identify **competitors**, test prices and reduce the risk of failure. Without research, businesses guess — and guesses are often wrong." },
            { heading: "Primary vs secondary", body: "**Primary research** collects new data first-hand: **questionnaires/surveys**, **interviews**, **observation**, **focus groups**. It is up-to-date and specific but costly and time-consuming. **Secondary research** uses existing information: government statistics, market reports, competitor websites, social media. It is cheap and fast but may be outdated, biased or not specific to the firm's needs. Most firms use a **combination** — secondary first to frame questions, then primary to fill gaps." },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A firm wants to launch a new energy drink. It reads industry reports (secondary), then runs a survey of 500 students (primary). Explain why both were used.",
            solution: "Secondary research gave a cheap overview of market size and competitors; the primary survey tested the specific product idea with the target customers, giving up-to-date, tailored data.",
          },
          questions: [
            {
              id: "ecn11-u8-research-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which of the following is an example of primary market research?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Reading government statistics" },
                { id: "b", text: "Using a competitor's website" },
                { id: "c", text: "Conducting a customer survey" },
                { id: "d", text: "Reading an old market report" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Primary research", statement: "New data collected first-hand." }],
                steps: [{ reasoning: "A customer survey collects new first-hand data — primary research.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(c)** Customer survey",
                commonErrors: ["Confusing primary with secondary."],
              },
            },
            {
              id: "ecn11-u8-research-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three reasons why a business might carry out market research.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Purpose of market research", statement: "Reduce uncertainty; understand customers, demand and competitors." }],
                steps: [
                  { reasoning: "Understand customer needs and preferences.", marks: 1, markCode: "AO1" },
                  { reasoning: "Estimate demand and test prices before launching.", marks: 1, markCode: "AO1" },
                  { reasoning: "Identify competitors and reduce the risk of failure.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Customer needs, demand/price testing, competitor analysis, lower risk.",
                commonErrors: ["Only one reason.", "Vague answers."],
              },
            },
            {
              id: "ecn11-u8-research-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two disadvantages of using secondary research.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Secondary research limits", statement: "Existing data may be outdated, biased or irrelevant." }],
                steps: [
                  { reasoning: "Data may be outdated — collected for another purpose or time.", marks: 1, markCode: "AO2" },
                  { reasoning: "May be biased — the original collector may have had different aims.", marks: 1, markCode: "AO2" },
                  { reasoning: "May not be specific to the firm's market or product.", marks: 1, markCode: "AO2" },
                  { reasoning: "Free/cheap data can be low quality or incomplete.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Outdated, biased, not specific, possibly low quality.",
                commonErrors: ["Only advantages listed."],
              },
            },
            {
              id: "ecn11-u8-research-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A café is thinking of opening a second branch but is unsure about the best location.",
              parts: [
                { label: "a", prompt: "Suggest two primary research methods the café could use.", marks: 2 },
                { label: "b", prompt: "Explain one advantage of each method you suggested.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Choosing research methods", statement: "Match method to the information needed." }],
                steps: [
                  { reasoning: "(a) Any two: customer questionnaire, footfall observation, interviews with local residents.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Questionnaires reach many people cheaply and give quantitative data.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Observation shows real behaviour — e.g. actual footfall at different times.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Interviews give detailed reasons behind preferences.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Two suitable methods. (b) Each with a matching advantage.",
                commonErrors: ["Methods not suited to location question.", "Advantages unrelated to method."],
              },
            },
            {
              id: "ecn11-u8-research-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A smartphone firm has a limited research budget before launching a new model.",
              parts: [
                { label: "a", prompt: "Explain why the firm should use secondary research first.", marks: 3 },
                { label: "b", prompt: "Suggest one primary research method to use afterwards and explain why.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Research sequence", statement: "Cheap secondary data frames targeted primary research." }],
                steps: [
                  { reasoning: "(a) Secondary data is cheap and fast — industry reports, sales data.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) It identifies the market size, competitors and gaps to investigate.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Saves budget for targeted primary research on real questions.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) e.g. focus groups with target customers to test design/pricing.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Gives specific feedback on the actual product idea.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Cheap overview first. (b) Targeted primary method for specific feedback.",
                commonErrors: ["Skipping secondary despite budget limit.", "Primary method too vague."],
              },
            },
            {
              id: "ecn11-u8-research-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A new gym wants to check whether there is enough demand for its services in a town of 50,000 people.",
              parts: [
                { label: "a", prompt: "Define the term market research.", marks: 2 },
                { label: "b", prompt: "Distinguish between primary and secondary research.", marks: 3 },
                { label: "c", prompt: "Suggest two secondary sources the gym could use and what each might show.", marks: 2 },
                { label: "d", prompt: "Evaluate whether the gym needs primary research at all, given its budget is tight.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Market research", statement: "Gather data to reduce uncertainty; primary is specific but costly." }],
                steps: [
                  { reasoning: "(a) Gathering and analysing information about customers, markets and competitors.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Primary = new first-hand data; secondary = existing data.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Primary is specific/up-to-date but costly; secondary is cheap but may be outdated/biased.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) e.g. council demographics (age/income) and competitor gym membership data.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Some primary research is valuable — e.g. a cheap questionnaire tests real willingness to pay; but it can be limited due to budget.", marks: 3, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) definition; (b) primary vs secondary; (c) two sources; (d) balanced judgement.",
                commonErrors: ["One-sided evaluation in (d).", "Secondary sources unrelated to demand."],
              },
            },
          ],
        },
        {
          id: "ecn11-u8-mix", title: "The Marketing Mix",
          skill: "Explain the four Ps of the marketing mix and how they are combined.",
          sections: [
            { heading: "The four Ps", body: "The **marketing mix** combines four decisions: **Product** — what is sold: design, quality, features, branding, after-sales service. **Price** — how much is charged: must cover costs and reflect demand, competition and image. **Place** — how the product reaches customers: distribution channels, location, online vs physical. **Promotion** — how customers learn about it: advertising, sales promotion, public relations, personal selling." },
            { heading: "Combining the mix", body: "The Ps must work together — a luxury product needs a high price, selective place and prestige promotion; a budget product needs low price, wide availability and value promotion. Changing one P affects the others: a price cut may need more promotion to be noticed, and may change the product's image." },
          ],
          keyFormulas: [
            { name: "Revenue", statement: "price × quantity sold" },
          ],
          workedExample: {
            problem: "A firm launches an eco-friendly cleaning spray. Suggest a marketing mix for it.",
            solution: "Product: concentrated, recyclable packaging. Price: premium to reflect quality. Place: sold online and in green stores. Promotion: emphasise environmental benefits via social media and eco-certification.",
          },
          questions: [
            {
              id: "ecn11-u8-mix-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which of the following is NOT one of the four Ps of the marketing mix?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Product" },
                { id: "b", text: "Price" },
                { id: "c", text: "Profit" },
                { id: "d", text: "Promotion" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Marketing mix", statement: "Product, price, place, promotion." }],
                steps: [{ reasoning: "The four Ps are product, price, place and promotion — profit is not one.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(c)** Profit",
                commonErrors: ["Confusing profit with promotion."],
              },
            },
            {
              id: "ecn11-u8-mix-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Name the four Ps of the marketing mix and state what each one covers.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Marketing mix", statement: "Product, price, place, promotion." }],
                steps: [
                  { reasoning: "Product — design, quality, features, branding.", marks: 1, markCode: "AO1" },
                  { reasoning: "Price — how much is charged.", marks: 1, markCode: "AO1" },
                  { reasoning: "Place — distribution channels and location; Promotion — advertising and communication.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Product, price, place, promotion with correct coverage.",
                commonErrors: ["Missing one P.", "No description of each."],
              },
            },
            {
              id: "ecn11-u8-mix-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why the four Ps of the marketing mix must be consistent with each other.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Marketing mix consistency", statement: "The Ps must reinforce a single positioning." }],
                steps: [
                  { reasoning: "A premium product needs premium price and promotion — mixed signals confuse customers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Place must match image — luxury goods in exclusive outlets.", marks: 1, markCode: "AO2" },
                  { reasoning: "Changing one P affects others — a price cut may need extra promotion.", marks: 1, markCode: "AO2" },
                  { reasoning: "Consistency builds a clear brand image and avoids wasting money.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Inconsistent Ps confuse customers and weaken the brand.",
                commonErrors: ["No example given."],
              },
            },
            {
              id: "ecn11-u8-mix-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A bakery wants to sell a new range of vegan cakes.",
              parts: [
                { label: "a", prompt: "Suggest one decision under each of the four Ps for this product.", marks: 4 },
                { label: "b", prompt: "Explain how these decisions work together.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Applying the marketing mix", statement: "Each P should support the same product positioning." }],
                steps: [
                  { reasoning: "(a) Product: attractive design, clear vegan labelling. Price: premium for quality ingredients. Place: sold in health-food shops and online. Promotion: social media, vegan food events.", marks: 4, markCode: "AO2", part: "a" },
                  { reasoning: "(b) All four support the same image — quality vegan product at a premium price, promoted to health-conscious buyers.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) One decision per P. (b) Consistent premium vegan positioning.",
                commonErrors: ["Missing a P.", "Decisions inconsistent."],
              },
            },
            {
              id: "ecn11-u8-mix-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A coffee shop currently sells coffee at £3 a cup and is considering cutting the price to £2 to increase sales.",
              parts: [
                { label: "a", prompt: "Calculate the revenue change if sales rise from 200 to 280 cups per day.", marks: 3 },
                { label: "b", prompt: "Explain one other marketing-mix change the shop could make to boost sales instead of a price cut.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Revenue", statement: "price × quantity." }],
                steps: [
                  { reasoning: "(a) Old revenue = 3 × 200 = £600 per day.", marks: 1, markCode: "M", part: "a" },
                  { reasoning: "(a) New revenue = 2 × 280 = £560 per day.", marks: 1, markCode: "M", part: "a" },
                  { reasoning: "(a) Revenue falls by £40 — the price cut loses money despite higher sales.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) e.g. improve promotion (social media, loyalty card) or product (new flavours, better coffee).", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Keeps price and margin while boosting demand.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Revenue falls £600→£560. (b) Promotion or product improvement.",
                commonErrors: ["Wrong multiplication.", "Suggesting another price change."],
              },
            },
            {
              id: "ecn11-u8-mix-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A small online retailer of handmade jewellery is reviewing its marketing mix.",
              parts: [
                { label: "a", prompt: "Define the marketing mix.", marks: 2 },
                { label: "b", prompt: "Name the four elements of the marketing mix.", marks: 2 },
                { label: "c", prompt: "Explain two ways the retailer could use promotion to reach more customers.", marks: 3 },
                { label: "d", prompt: "Evaluate whether a low-price strategy would suit this business.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Marketing mix", statement: "Product, price, place, promotion must fit the product's positioning." }],
                steps: [
                  { reasoning: "(a) The combination of product, price, place and promotion used to market a product.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Product, price, place, promotion.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Social media advertising targeted at jewellery buyers; influencer reviews or craft-fair presence.", marks: 3, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Handmade goods have high costs — low price may not cover costs and could damage the quality image; premium pricing may suit better.", marks: 3, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) four-P combination; (b) named; (c) two promotion methods; (d) low price probably unsuitable — costs/image.",
                commonErrors: ["One-sided evaluation in (d).", "Promotion methods too generic."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u8-marketing-notes", title: "Marketing — revision notes",
      summary: "Market research uses primary (surveys, interviews) and secondary (existing data) methods. The marketing mix = product, price, place, promotion — the Ps must be consistent.",
      sections: [
        { heading: "Market research", body: "Primary = first-hand, specific, costly. Secondary = existing data, cheap, may be outdated." },
        { heading: "Marketing mix", body: "Product (design/quality), price (charge), place (distribution), promotion (communication)." },
        { heading: "Evaluation", body: "Mix must match positioning — premium product needs premium price and promotion." },
      ],
    },
  },
  {
    file: "lesson-8-2.ts", exportName: "lesson82",
    lesson: {
      id: "ecn11-u8-lesson-8-2", code: "8-2",
      title: "Production and Operations",
      goal: "I CAN compare methods of production and explain productivity and quality.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
      vocabulary: [
        { term: "Production", definition: "The process of turning factors of production into goods and services." },
        { term: "Job production", definition: "Making one-off or bespoke items, e.g. a tailor-made suit." },
        { term: "Batch production", definition: "Producing a group of identical items together, then switching to another batch." },
        { term: "Flow production", definition: "Continuous production on an assembly line, e.g. cars or bread." },
        { term: "Productivity", definition: "Output per worker or per unit of input over a period of time." },
        { term: "Quality", definition: "How well a product meets customer expectations." },
        { term: "Just-in-time (JIT)", definition: "Receiving materials only when needed in production, reducing storage costs." },
      ],
      concepts: [
        {
          id: "ecn11-u8-methods", title: "Methods of Production",
          skill: "Compare job, batch and flow production and choose the right method.",
          sections: [
            { heading: "Three methods", body: "**Job production** makes one-off or customised items — suits low volume, high variety (e.g. tailoring, furniture making). **Batch production** makes groups of identical products — suits medium volume and variety (e.g. bakery batches, school uniforms). **Flow production** uses an assembly line for continuous, high-volume output — suits standardised goods (e.g. cars, electronics, bread)." },
            { heading: "Choosing a method", body: "The choice depends on **volume**, **variety**, **cost** and **customer demand**. Flow production has low unit costs at high volume but needs big capital investment and is inflexible. Job production is flexible and high quality but expensive per unit. Batch production sits in between." },
          ],
          keyFormulas: [
            { name: "Productivity", statement: "output ÷ number of workers (or inputs)" },
          ],
          workedExample: {
            problem: "A car maker produces 500 identical cars a day on a moving line. Which production method is this and why?",
            solution: "Flow production — continuous, high-volume, standardised output on an assembly line gives low unit costs.",
          },
          questions: [
            {
              id: "ecn11-u8-methods-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which method of production suits making one-off, customised products?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Flow production" },
                { id: "b", text: "Batch production" },
                { id: "c", text: "Job production" },
                { id: "d", text: "Mass production" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Job production", statement: "One-off or bespoke items." }],
                steps: [{ reasoning: "Job production handles customised, low-volume work.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(c)** Job production",
                commonErrors: ["Confusing job with batch."],
              },
            },
            {
              id: "ecn11-u8-methods-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Describe batch production and give an example.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Batch production", statement: "Identical items produced in groups." }],
                steps: [
                  { reasoning: "Products are made in groups of identical items.", marks: 1, markCode: "AO1" },
                  { reasoning: "The line then switches to a different batch/product.", marks: 1, markCode: "AO1" },
                  { reasoning: "Example: school uniforms, bakery batches, tablet computers.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Groups of identical items, then switch — e.g. uniforms or baked goods.",
                commonErrors: ["No example."],
              },
            },
            {
              id: "ecn11-u8-methods-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two advantages of flow production for a high-volume manufacturer.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Flow production benefits", statement: "Low unit cost, speed, consistency at high volume." }],
                steps: [
                  { reasoning: "Low unit costs — automation and specialisation at high volume.", marks: 1, markCode: "AO2" },
                  { reasoning: "Fast, continuous output meets high demand.", marks: 1, markCode: "AO2" },
                  { reasoning: "Consistent quality — standardised processes.", marks: 1, markCode: "AO2" },
                  { reasoning: "Workers can specialise in narrow tasks, raising productivity.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Low cost, speed, consistent quality, specialisation.",
                commonErrors: ["Advantages of job production listed."],
              },
            },
            {
              id: "ecn11-u8-methods-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A furniture maker produces handmade, one-off dining tables and is considering switching to flow production.",
              parts: [
                { label: "a", prompt: "Identify its current method of production and explain why it suits the product.", marks: 2 },
                { label: "b", prompt: "Explain two problems the firm might face if it switched to flow production.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Matching method to product", statement: "Bespoke products suit job production; standardised suits flow." }],
                steps: [
                  { reasoning: "(a) Job production — one-off custom tables need flexible, skilled work.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Flow production needs standardised products — custom designs would be lost.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Huge capital cost of machinery for a small-volume maker.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Job production suits bespoke work. (b) Lost customisation; high capital cost.",
                commonErrors: ["Wrong current method.", "Problems not linked to bespoke product."],
              },
            },
            {
              id: "ecn11-u8-methods-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A bakery currently bakes 500 loaves a day in batches but wants to increase output tenfold.",
              parts: [
                { label: "a", prompt: "Suggest which method of production the bakery should move towards and why.", marks: 3 },
                { label: "b", prompt: "Explain one disadvantage of this method the bakery must accept.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Method choice", statement: "High volume standardised output suits flow production." }],
                steps: [
                  { reasoning: "(a) Flow production — continuous baking gives low unit costs at high volume.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Bread is standardised — suits an assembly line.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Needs large capital investment in machinery; inflexible — hard to switch products.", marks: 3, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Flow production — volume and standardisation. (b) Capital cost, inflexibility.",
                commonErrors: ["Recommending job production for volume.", "Disadvantage unrelated."],
              },
            },
            {
              id: "ecn11-u8-methods-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A clothing company makes T-shirts in three ways: bespoke orders, runs of 200 identical shirts, and continuous production of a standard design.",
              parts: [
                { label: "a", prompt: "Match each situation to job, batch or flow production.", marks: 3 },
                { label: "b", prompt: "State one advantage and one disadvantage of batch production.", marks: 4 },
                { label: "c", prompt: "Explain why flow production lowers unit costs at high volume.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Production methods", statement: "Job = bespoke; batch = groups; flow = continuous standardised." }],
                steps: [
                  { reasoning: "(a) Bespoke = job; runs of 200 = batch; continuous standard = flow.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Advantage: flexible — can switch between product lines; lower cost than job per unit.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Disadvantage: setup costs between batches; less flexible than job production.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Specialisation, automation and continuous running spread fixed costs over more units.", marks: 3, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) job/batch/flow matched. (b) flexibility vs setup costs. (c) specialisation spreads fixed costs.",
                commonErrors: ["Mismatched methods.", "Missing advantage or disadvantage."],
              },
            },
          ],
        },
        {
          id: "ecn11-u8-operations", title: "Productivity, Quality and Efficiency",
          skill: "Explain productivity, quality control and techniques such as just-in-time.",
          sections: [
            { heading: "Productivity and efficiency", body: "**Productivity** = output per worker (or per unit of input). Raising productivity means producing more with the same resources — through training, better machinery, motivation or leaner processes. Higher productivity lowers **average cost** and can lower prices or raise profit. **Efficiency** means using the minimum resources to produce a given output with least waste." },
            { heading: "Quality and lean production", body: "**Quality** means meeting or exceeding customer expectations — poor quality loses customers and creates returns/waste. Firms improve quality through **quality control** (checking output) and **total quality management** (everyone responsible for quality). **Just-in-time (JIT)** delivers materials only when needed, cutting storage costs — but risks stoppages if deliveries fail. **Kaizen** means continuous small improvements." },
          ],
          keyFormulas: [
            { name: "Productivity", statement: "output ÷ number of workers" },
          ],
          workedExample: {
            problem: "A factory produces 4,000 widgets with 20 workers, then 5,000 widgets with the same 20 workers. Calculate productivity before and after.",
            solution: "Before = 4,000 ÷ 20 = 200 widgets per worker. After = 5,000 ÷ 20 = 250 per worker — productivity rose 25%.",
          },
          questions: [
            {
              id: "ecn11-u8-operations-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is productivity?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Total output of a business" },
                { id: "b", text: "Output per worker or per unit of input" },
                { id: "c", text: "Number of machines owned" },
                { id: "d", text: "Total profit earned" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Productivity", statement: "Output per worker or input." }],
                steps: [{ reasoning: "Productivity measures output relative to workers or inputs.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Output per worker/input",
                commonErrors: ["Confusing with total output."],
              },
            },
            {
              id: "ecn11-u8-operations-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three ways a business can improve productivity.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Improving productivity", statement: "Training, technology, motivation, efficient processes." }],
                steps: [
                  { reasoning: "Train workers to work faster and more accurately.", marks: 1, markCode: "AO1" },
                  { reasoning: "Invest in better machinery or automation.", marks: 1, markCode: "AO1" },
                  { reasoning: "Motivate staff or streamline processes to reduce waste.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Training, technology, motivation, process improvement.",
                commonErrors: ["Only one way.", "Vague answers."],
              },
            },
            {
              id: "ecn11-u8-operations-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why quality is important to a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Importance of quality", statement: "Quality builds reputation, reduces waste, retains customers." }],
                steps: [
                  { reasoning: "Poor quality loses customers and damages reputation.", marks: 1, markCode: "AO2" },
                  { reasoning: "Returns and repairs create extra costs and waste.", marks: 1, markCode: "AO2" },
                  { reasoning: "High quality can justify premium prices.", marks: 1, markCode: "AO2" },
                  { reasoning: "Good quality builds customer loyalty and repeat sales.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Reputation, lower waste/costs, premium prices, loyalty.",
                commonErrors: ["Only one point."],
              },
            },
            {
              id: "ecn11-u8-operations-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A furniture workshop produces 300 chairs per month with 15 workers. After training and new machinery it produces 450 chairs with the same 15 workers.",
              parts: [
                { label: "a", prompt: "Calculate productivity before and after the changes.", marks: 3 },
                { label: "b", prompt: "Explain one benefit the firm gains from this higher productivity.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Productivity", statement: "output ÷ workers." }],
                steps: [
                  { reasoning: "(a) Before = 300 ÷ 15 = 20 chairs per worker.", marks: 1, markCode: "M", part: "a" },
                  { reasoning: "(a) After = 450 ÷ 15 = 30 chairs per worker.", marks: 1, markCode: "M", part: "a" },
                  { reasoning: "(a) Productivity rose from 20 to 30 — a 50% increase.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Lower average cost per chair — can cut prices or raise profit; or meet more demand.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) 20 → 30 per worker. (b) Lower unit cost / more output.",
                commonErrors: ["Wrong division.", "Benefit unrelated to productivity."],
              },
            },
            {
              id: "ecn11-u8-operations-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A car manufacturer wants to cut storage costs and reduce waste.",
              parts: [
                { label: "a", prompt: "Explain how just-in-time production could help.", marks: 3 },
                { label: "b", prompt: "Explain one risk the manufacturer faces with just-in-time.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Just-in-time", statement: "Materials arrive only when needed — cuts storage." }],
                steps: [
                  { reasoning: "(a) JIT means parts arrive only as needed — no large warehouses.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Cuts storage costs, insurance and waste from unused stock.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Frees up cash tied up in inventory.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) If a delivery is late the whole production line stops — no buffer stock.", marks: 3, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Less storage, waste, freed cash. (b) Supply failure stops production.",
                commonErrors: ["JIT confused with holding more stock.", "No risk identified."],
              },
            },
            {
              id: "ecn11-u8-operations-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A bakery makes 800 loaves a day with 10 workers and wants to improve efficiency.",
              parts: [
                { label: "a", prompt: "Define productivity.", marks: 2 },
                { label: "b", prompt: "Calculate current productivity.", marks: 2 },
                { label: "c", prompt: "Explain two ways the bakery could raise productivity.", marks: 3 },
                { label: "d", prompt: "Explain why improving quality could also raise productivity or profit.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Productivity and quality", statement: "Output per worker rises through efficiency; quality reduces waste." }],
                steps: [
                  { reasoning: "(a) Output per worker or per unit of input.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) 800 ÷ 10 = 80 loaves per worker per day.", marks: 2, markCode: "M", part: "b" },
                  { reasoning: "(c) Train staff / better ovens / motivate workers / streamline the process.", marks: 3, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Fewer mistakes mean less waste and rework — more saleable output from same inputs.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(d) Better quality builds reputation and repeat sales, raising profit.", marks: 1, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) output/input. (b) 80 loaves/worker. (c) two methods. (d) less waste + loyalty.",
                commonErrors: ["Calculation error.", "No link between quality and profit."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u8-operations-notes", title: "Production and operations — revision notes",
      summary: "Job = bespoke, batch = groups, flow = continuous. Productivity = output per worker. JIT cuts storage but risks stoppages. Quality builds reputation and reduces waste.",
      sections: [
        { heading: "Methods", body: "Job suits custom, batch suits medium variety, flow suits high-volume standardised goods." },
        { heading: "Productivity", body: "Output ÷ workers; rises via training, technology, motivation." },
        { heading: "Quality and JIT", body: "Quality = meeting expectations; JIT = materials when needed, saving storage but risking stoppages." },
      ],
    },
  },
  {
    file: "lesson-8-3.ts", exportName: "lesson83",
    lesson: {
      id: "ecn11-u8-lesson-8-3", code: "8-3",
      title: "People in Business",
      goal: "I CAN explain motivation, recruitment and industrial relations in business.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
      vocabulary: [
        { term: "Motivation", definition: "The factors that drive workers to work hard and achieve business aims." },
        { term: "Financial rewards", definition: "Pay-based motivators: wages, salaries, bonuses, profit-sharing, fringe benefits." },
        { term: "Non-financial rewards", definition: "Non-pay motivators: job satisfaction, recognition, teamwork, responsibility." },
        { term: "Recruitment", definition: "The process of attracting and appointing suitable workers." },
        { term: "Training", definition: "Teaching workers the skills needed for their jobs." },
        { term: "Industrial relations", definition: "The relationship between employers and employees, including unions and disputes." },
        { term: "Trade union", definition: "An organisation representing workers' interests in negotiations with employers." },
      ],
      concepts: [
        {
          id: "ecn11-u8-motivation", title: "Motivating Workers",
          skill: "Explain financial and non-financial methods of motivation.",
          sections: [
            { heading: "Why motivation matters", body: "Motivated workers are more productive, make fewer mistakes, stay longer (reducing recruitment costs) and give better customer service. Demotivated workers are absent more, produce lower quality and may leave." },
            { heading: "Financial and non-financial rewards", body: "**Financial rewards**: wages/salaries, **overtime pay**, **bonuses**, **profit-sharing**, **fringe benefits** (pension, health cover, company car). **Non-financial rewards**: job satisfaction, recognition/appraisal, teamwork, responsibility, training opportunities, good working conditions, flexible hours. Most businesses use a **combination** — money attracts and retains, but non-financial factors often drive effort." },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A call centre wants to cut staff turnover. Suggest two financial and two non-financial motivators.",
            solution: "Financial: performance bonuses and profit-sharing. Non-financial: clearer career progression and flexible working hours.",
          },
          questions: [
            {
              id: "ecn11-u8-motivation-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which of the following is a financial method of motivation?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Job satisfaction" },
                { id: "b", text: "Recognition from managers" },
                { id: "c", text: "Performance bonuses" },
                { id: "d", text: "Teamworking" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Financial rewards", statement: "Pay-based motivators such as bonuses and benefits." }],
                steps: [{ reasoning: "Performance bonuses are a financial reward.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(c)** Performance bonuses",
                commonErrors: ["Confusing financial and non-financial."],
              },
            },
            {
              id: "ecn11-u8-motivation-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three non-financial ways a business can motivate workers.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Non-financial rewards", statement: "Satisfaction, recognition, responsibility, teamwork." }],
                steps: [
                  { reasoning: "Job satisfaction / interesting work.", marks: 1, markCode: "AO1" },
                  { reasoning: "Recognition and appraisal from managers.", marks: 1, markCode: "AO1" },
                  { reasoning: "Responsibility, training opportunities or flexible hours.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Job satisfaction, recognition, responsibility/training/flexibility.",
                commonErrors: ["Listing financial rewards."],
              },
            },
            {
              id: "ecn11-u8-motivation-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why a business might use non-financial methods of motivation as well as pay.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Non-financial motivation", statement: "Satisfies needs pay cannot; cheaper and longer-lasting." }],
                steps: [
                  { reasoning: "Money has limits — workers also want satisfaction and recognition.", marks: 1, markCode: "AO2" },
                  { reasoning: "Non-financial methods cost less than raising pay for all staff.", marks: 1, markCode: "AO2" },
                  { reasoning: "They build loyalty and reduce turnover.", marks: 1, markCode: "AO2" },
                  { reasoning: "Different workers are motivated by different things.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Satisfaction beyond pay; cheaper; loyalty; different needs.",
                commonErrors: ["Saying non-financial replaces pay entirely."],
              },
            },
            {
              id: "ecn11-u8-motivation-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A retail store has high staff turnover and low morale.",
              parts: [
                { label: "a", prompt: "Give two financial and two non-financial motivators the store could introduce.", marks: 4 },
                { label: "b", prompt: "Explain how these might reduce turnover.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Applying motivation", statement: "Match motivators to the problem of low morale and turnover." }],
                steps: [
                  { reasoning: "(a) Financial: staff discount, bonus scheme/profit-sharing. Non-financial: training/career progression, flexible hours or recognition.", marks: 4, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Better rewards and satisfaction make staff stay — fewer resignations.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Two financial + two non-financial. (b) Staff stay when motivated.",
                commonErrors: ["Unbalanced or irrelevant motivators."],
              },
            },
            {
              id: "ecn11-u8-motivation-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Two identical warehouses employ the same number of workers. Warehouse A pays higher wages; Warehouse B offers job rotation, training and team bonuses based on output.",
              parts: [
                { label: "a", prompt: "Explain two ways Warehouse B might achieve higher productivity than Warehouse A.", marks: 3 },
                { label: "b", prompt: "Suggest one disadvantage Warehouse B faces compared with A.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Motivation and productivity", statement: "Non-financial motivators can outperform pay alone." }],
                steps: [
                  { reasoning: "(a) Job rotation reduces boredom; training raises skills.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Team bonuses link pay to output — workers push harder.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) B may struggle to attract/retain staff if rivals pay more; bonuses may cause rushing/quality issues.", marks: 3, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) rotation, training, output-linked pay. (b) may lose staff to higher payers.",
                commonErrors: ["Assuming higher pay always wins.", "No disadvantage given."],
              },
            },
            {
              id: "ecn11-u8-motivation-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A hotel chain wants to improve staff motivation across its hotels.",
              parts: [
                { label: "a", prompt: "Define the term motivation.", marks: 2 },
                { label: "b", prompt: "Distinguish between financial and non-financial rewards.", marks: 3 },
                { label: "c", prompt: "Suggest three motivators the hotel could use, stating whether each is financial or non-financial.", marks: 3 },
                { label: "d", prompt: "Evaluate whether financial rewards are the best way to motivate staff.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Motivation", statement: "Financial + non-financial rewards drive effort; best mix depends on workers." }],
                steps: [
                  { reasoning: "(a) Factors that drive workers to work hard toward business aims.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Financial = pay/benefits; non-financial = satisfaction, recognition, responsibility.", marks: 3, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Any three correctly labelled: bonus (F), training (NF), flexible hours (NF), profit-share (F), recognition (NF).", marks: 3, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Pay is important but limited — non-financial factors often sustain motivation better; a mix is best.", marks: 2, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) definition; (b) F vs NF; (c) three labelled motivators; (d) mix beats pay alone.",
                commonErrors: ["Motivators not labelled.", "One-sided evaluation in (d)."],
              },
            },
          ],
        },
        {
          id: "ecn11-u8-people", title: "Recruitment, Training and Industrial Relations",
          skill: "Explain recruitment and training and describe industrial relations.",
          sections: [
            { heading: "Recruitment and training", body: "**Recruitment** is attracting and appointing the right people: **job analysis**, **advertising**, **selection** (interviews, tests), then **induction**. Getting recruitment wrong is costly — training and turnover expenses are high. **Training** develops workers' skills: **induction** (starting), **on-the-job** (learning while working, cheap but can disrupt), **off-the-job** (courses, colleges — focused but workers are absent). Training raises productivity and motivation but costs money." },
            { heading: "Industrial relations", body: "**Industrial relations** covers the relationship between employers and employees. **Trade unions** represent workers, negotiating pay and conditions through **collective bargaining**. Disputes can lead to **strikes** or **lock-outs**, hurting both sides. Good relations — communication, fair pay, grievance procedures — reduce conflict. The government may also set employment laws (minimum wage, health and safety, anti-discrimination)." },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A factory installs new robots and must retrain 50 workers. Explain the steps and benefits.",
            solution: "Identify skills needed (job analysis), provide off-the-job training on the robots, then supervise on the job. Benefits: workers keep pace with technology, productivity rises, morale improves and fewer redundancies are needed.",
          },
          questions: [
            {
              id: "ecn11-u8-people-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is the main purpose of training in a business?",
              response: { type: "mcq", choices: [
                { id: "a", text: "To reduce the number of workers" },
                { id: "b", text: "To teach workers the skills needed for their jobs" },
                { id: "c", text: "To increase wages" },
                { id: "d", text: "To replace managers" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Training", statement: "Developing workers' skills for their jobs." }],
                steps: [{ reasoning: "Training equips workers with the skills their roles require.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Teach job skills",
                commonErrors: ["Confusing training with recruitment."],
              },
            },
            {
              id: "ecn11-u8-people-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between on-the-job and off-the-job training.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Training types", statement: "Learn while working vs dedicated courses." }],
                steps: [
                  { reasoning: "On-the-job: learn while working — cheap, immediate, but can disrupt work.", marks: 1, markCode: "AO1" },
                  { reasoning: "Off-the-job: courses/colleges — focused and thorough, but workers are absent and it costs more.", marks: 1, markCode: "AO1" },
                  { reasoning: "Businesses often combine both.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "On-the-job = learn while working; off-the-job = dedicated courses.",
                commonErrors: ["Advantages and disadvantages swapped."],
              },
            },
            {
              id: "ecn11-u8-people-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two benefits of effective recruitment for a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Recruitment benefits", statement: "Right people improve performance and reduce costs." }],
                steps: [
                  { reasoning: "Right skills from the start — higher productivity and quality.", marks: 1, markCode: "AO2" },
                  { reasoning: "Lower turnover — good hires stay, saving recruitment/training costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Better team morale and customer service.", marks: 1, markCode: "AO2" },
                  { reasoning: "Avoids costly mistakes of hiring unsuitable staff.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Productivity, lower turnover/costs, morale, fewer hiring mistakes.",
                commonErrors: ["Only one benefit."],
              },
            },
            {
              id: "ecn11-u8-people-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A call centre wants to reduce staff turnover and improve service quality.",
              parts: [
                { label: "a", prompt: "Suggest two recruitment improvements the centre could make.", marks: 2 },
                { label: "b", prompt: "Explain how training could help reduce turnover and improve quality.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Recruitment and training", statement: "Right hiring plus skills development reduce turnover and raise quality." }],
                steps: [
                  { reasoning: "(a) Any two: clearer job descriptions, better selection interviews/tests, realistic job previews.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Training gives confidence and competence — staff feel valued.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Better skills mean better customer service and fewer errors.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Career progression through training gives reasons to stay — less turnover.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Two recruitment fixes. (b) Confidence, service quality, reasons to stay.",
                commonErrors: ["Recruitment suggestions not specific.", "Training linked only to productivity."],
              },
            },
            {
              id: "ecn11-u8-people-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Workers at a factory are threatening to strike over pay.",
              parts: [
                { label: "a", prompt: "Define the term industrial relations.", marks: 2 },
                { label: "b", prompt: "Explain the role of a trade union in this situation.", marks: 2 },
                { label: "c", prompt: "Suggest two ways the dispute could be resolved.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Industrial relations", statement: "Employer-employee relationship, including unions and disputes." }],
                steps: [
                  { reasoning: "(a) The relationship between employers and employees, incl. negotiation and disputes.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) The union represents workers, negotiating pay via collective bargaining.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Negotiation/conciliation; or arbitration by an independent third party.", marks: 2, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) definition; (b) union negotiates for workers; (c) negotiation/arbitration.",
                commonErrors: ["Union role described as management.", "No resolution suggested."],
              },
            },
            {
              id: "ecn11-u8-people-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A growing restaurant chain needs to recruit 30 new staff and improve staff retention.",
              parts: [
                { label: "a", prompt: "List the main stages of the recruitment process.", marks: 3 },
                { label: "b", prompt: "Explain two reasons why good training benefits both the business and workers.", marks: 4 },
                { label: "c", prompt: "Explain what industrial relations means and give one example of a dispute.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "People in business", statement: "Recruit right, train well, manage relations to retain staff." }],
                steps: [
                  { reasoning: "(a) Job analysis, advertising, selection (interviews/tests), induction.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Business: higher productivity and quality; workers: better skills, pay prospects, motivation.", marks: 4, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Industrial relations = employer-employee relationship; example: strike over pay or working conditions.", marks: 3, markCode: "AO1", part: "c" },
                ],
                finalAnswer: "(a) stages of recruitment; (b) mutual benefits; (c) definition + example.",
                commonErrors: ["Recruitment stages incomplete.", "No dispute example."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u8-people-notes", title: "People in business — revision notes",
      summary: "Motivation uses financial (pay, bonuses) and non-financial (satisfaction, recognition) rewards. Recruitment stages: analysis, advertising, selection, induction. Training: on/off-the-job. Industrial relations: unions, bargaining, disputes.",
      sections: [
        { heading: "Motivation", body: "Financial rewards attract; non-financial rewards often drive effort — use a mix." },
        { heading: "Recruitment and training", body: "Analyse job, advertise, select, induct. On-the-job = cheap/flexible; off-the-job = thorough." },
        { heading: "Industrial relations", body: "Unions negotiate via collective bargaining; disputes can cause strikes — good relations prevent them." },
      ],
    },
  },
];
