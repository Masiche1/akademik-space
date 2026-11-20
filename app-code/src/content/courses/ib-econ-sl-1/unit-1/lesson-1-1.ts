import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "econ-u1-lesson-1-1",
  code: "1-1",
  title: "Scarcity, Choice and Opportunity Cost",
  goal: "I CAN explain scarcity and the economic problem, identify the basic economic questions, and calculate opportunity cost.",
  standards: ["Paper 1", "Paper 2", "Topic 1"],
  vocabulary: [
    { term: "Scarcity", definition: "The condition that wants are unlimited while resources are finite." },
    { term: "Opportunity cost", definition: "The next best alternative forgone when a choice is made." },
    { term: "Factors of production", definition: "The resources used to produce goods and services: land, labour, capital and entrepreneurship." },
    { term: "Utility", definition: "The satisfaction or benefit a consumer derives from consuming a good or service." },
    { term: "Needs", definition: "Essential for survival or wellbeing (food, water, shelter)." },
    { term: "Wants", definition: "Desires that go beyond basic needs and cannot all be satisfied." },
  ],
  concepts: [
    {
      id: "econ-u1-scarcity-economic-problem",
      title: "Scarcity and the economic problem",
      skill: "Explain why scarcity forces choices and identify how societies answer the three basic economic questions.",
      lesson: {
        sections: [
          {
            heading: "Scarcity and wants",
            body: "**Scarcity** arises because human **wants** are unlimited but **resources** (land, labour, capital, enterprise) are finite. Even rich countries face scarcity. Because we cannot have everything, every choice involves a sacrifice. **Needs** (food, shelter, healthcare) differ from **wants** (a new phone, a holiday) — scarcity applies to both.",
          },
          {
            heading: "The basic economic questions",
            body: "Every society must answer three questions: **What to produce?** (which goods and services, in what quantities), **How to produce?** (which methods and resources to use), and **For whom to produce?** (how output is distributed). Different systems answer differently: **market economies** use prices and profit motives; **command (planned) economies** use central government decisions; most real economies are **mixed**.",
          },
          {
            heading: "Economic agents",
            body: "Three groups make choices. **Consumers** allocate income to maximise **utility** (satisfaction). **Producers (firms)** combine factors of production to maximise profit. **Governments** intervene to provide public services, redistribute income and correct market failures. All face the same problem: unlimited wants, limited resources.",
          },
        ],
        keyFormulas: [
          { name: "Scarcity", statement: "Wants are unlimited; resources are finite → choices must be made" },
          { name: "Basic economic questions", statement: "What to produce? How to produce? For whom to produce?" },
          { name: "Economic systems", statement: "Market, command, mixed" },
        ],
        workedExample: {
          problem: "A government has $10 billion to spend on either hospitals or roads. Explain the economic problem it faces.",
          solution: "Resources are scarce: spending on hospitals means less is available for roads. The government must choose (what to produce), decide the method of provision (how), and decide who benefits (for whom).",
        },
      },
      questions: [
        {
          id: "econ-u1-l11c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement best describes scarcity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resources are abundant but wants are limited" },
              { id: "b", text: "Wants are unlimited but resources are finite" },
              { id: "c", text: "Only poor countries face scarcity" },
              { id: "d", text: "Governments can eliminate scarcity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scarcity", statement: "Wants are unlimited while resources are finite, forcing choices." },
            ],
            steps: [
              { reasoning: "Scarcity means unlimited wants versus finite resources.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Wants are unlimited but resources are finite",
            commonErrors: ["Confusing scarcity with poverty — scarcity affects all economies."],
          },
        },
        {
          id: "econ-u1-l11c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State the three basic economic questions every society must answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Basic economic questions", statement: "What to produce? How to produce? For whom to produce?" },
            ],
            steps: [
              { reasoning: "What to produce: which goods and services, in what quantities.", marks: 1, markCode: "M" },
              { reasoning: "How to produce: which methods and combination of resources to use.", marks: 1, markCode: "M" },
              { reasoning: "For whom to produce: how output is distributed among the population.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "What to produce? How to produce? For whom to produce?",
            commonErrors: ["Adding extra questions such as 'when to produce' — only the three are required."],
          },
        },
        {
          id: "econ-u1-l11c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Distinguish between a market economy and a command economy in answering the basic economic questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Allocation mechanisms", statement: "Market economies use prices and incentives; command economies use central planning." },
            ],
            steps: [
              { reasoning: "Market economy: prices signal scarcity; firms respond to profit incentives and consumer choices determine 'what' and 'for whom'.", marks: 1, markCode: "M" },
              { reasoning: "Market economy: 'how' is decided by cost-minimising methods chosen by firms.", marks: 1, markCode: "M" },
              { reasoning: "Command economy: a central authority plans output, methods and distribution directly.", marks: 1, markCode: "R" },
              { reasoning: "Command economies can direct resources to merit goods but often suffer shortages and inefficiency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Market = prices/incentives; command = central planning.",
            commonErrors: ["Describing mixed economies only, or claiming one system is always better."],
          },
        },
        {
          id: "econ-u1-l11c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the consequences of scarcity for consumers, producers and governments.",
          parts: [
            { label: "a", prompt: "Define scarcity and explain why it is unavoidable.", marks: 2 },
            { label: "b", prompt: "Explain how scarcity affects consumers and producers.", marks: 3 },
            { label: "c", prompt: "Evaluate the role of government in responding to scarcity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scarcity", statement: "Unlimited wants, finite resources." },
              { kind: "principle", name: "Responses to scarcity", statement: "Choices, opportunity costs, prioritisation, government intervention." },
            ],
            steps: [
              { part: "a", reasoning: "Scarcity = unlimited wants but finite resources.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Unavoidable because wants grow with income and resources cannot be created freely.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Consumers must choose and sacrifice alternatives; income limits purchases.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Producers face limited inputs and must decide what/how much to produce.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both use opportunity cost to guide decisions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Government can prioritise spending, provide merit goods and redistribute.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "But government cannot remove scarcity — it must also choose.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: intervention can improve allocation but not eliminate scarcity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Unlimited wants, finite resources. (b) Both must choose and bear opportunity costs. (c) Government reprioritises but cannot eliminate scarcity.",
            commonErrors: ["Claiming scarcity can be 'solved' by more money — wants also rise."],
          },
        },
        {
          id: "econ-u1-l11c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is best classified as a need rather than a want?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A new smartphone" },
              { id: "b", text: "Shelter" },
              { id: "c", text: "A summer holiday abroad" },
              { id: "d", text: "Designer trainers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Needs and wants", statement: "Needs are essential for survival or basic wellbeing; wants go beyond needs." },
            ],
            steps: [
              { reasoning: "A need is essential for survival or wellbeing — shelter qualifies.", marks: 1, markCode: "M" },
              { reasoning: "The other options are wants — desirable but not essential.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shelter",
            commonErrors: ["Classifying any desirable good as a need."],
          },
        },
        {
          id: "econ-u1-l11c1q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a market economy, the question 'what to produce?' is mainly decided by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Central government planners issuing production orders" },
              { id: "b", text: "Consumer spending and producers' profit incentives, coordinated by prices" },
              { id: "c", text: "A national lottery allocating goods to households" },
              { id: "d", text: "Historical custom with no role for prices" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Market allocation", statement: "In a market economy prices signal scarcity and consumer demand decides what is produced." },
            ],
            steps: [
              { reasoning: "Prices convey information about consumer wants; firms produce what is profitable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Consumer spending and profit incentives coordinated by prices",
            commonErrors: ["Confusing market economies with command economies."],
          },
        },
        {
          id: "econ-u1-l11c1q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Define scarcity and give one example of a choice it forces a government to make.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scarcity", statement: "Unlimited wants but finite resources, so choices must be made." },
            ],
            steps: [
              { reasoning: "Scarcity means human wants are unlimited while resources are finite.", marks: 1, markCode: "M" },
              { reasoning: "Because resources are limited, every use involves a sacrifice.", marks: 1, markCode: "M" },
              { reasoning: "Valid example, e.g. choosing between spending on hospitals or defence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scarcity = unlimited wants, finite resources; e.g. government choosing between health and defence spending.",
            commonErrors: ["Defining scarcity only as 'poverty' — it applies to all economies."],
          },
        },
        {
          id: "econ-u1-l11c1q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how a mixed economy answers the three basic economic questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mixed economy", statement: "Combines market mechanisms with government intervention." },
            ],
            steps: [
              { reasoning: "What to produce: largely decided by consumer demand and prices, with government providing some goods directly.", marks: 1, markCode: "M" },
              { reasoning: "How to produce: firms choose cost-minimising methods driven by profit, guided by prices and regulation.", marks: 1, markCode: "M" },
              { reasoning: "For whom to produce: income from factor payments plus government redistribution (taxes and transfers).", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: markets do most allocating while government corrects failures and provides public goods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Markets answer 'what' and 'how' via prices; 'for whom' via income plus government redistribution.",
            commonErrors: ["Describing a pure market or pure command economy instead of a mixed one."],
          },
        },
        {
          id: "econ-u1-l11c1q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A government has limited funds and must choose between expanding free school meals or building rural roads. Using the basic economic questions, analyse this decision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Basic economic questions", statement: "What to produce? How to produce? For whom to produce?" },
            ],
            steps: [
              { reasoning: "What to produce: the choice is between nutrition/education support and transport infrastructure.", marks: 1, markCode: "M" },
              { reasoning: "How to produce: the government must decide the method — direct provision, contracts or subsidies.", marks: 1, markCode: "M" },
              { reasoning: "For whom to produce: school meals target children in poverty; roads benefit all road users in rural areas.", marks: 1, markCode: "M" },
              { reasoning: "Scarcity means choosing one implies sacrificing the other — opportunity cost is unavoidable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The decision is an application of all three questions plus the opportunity cost of forgone alternatives.",
            commonErrors: ["Failing to link the scenario to the three questions."],
          },
        },
        {
          id: "econ-u1-l11c1q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the consequences of scarcity for the allocation of resources in an economy.",
          parts: [
            { label: "a", prompt: "Define scarcity and the economic problem.", marks: 2 },
            { label: "b", prompt: "Explain how scarcity leads to opportunity cost in government and firm decisions.", marks: 3 },
            { label: "c", prompt: "Evaluate whether economic growth can reduce the problem of scarcity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scarcity", statement: "Unlimited wants but finite resources." },
              { kind: "principle", name: "Opportunity cost", statement: "The next best alternative forgone by any choice." },
            ],
            steps: [
              { part: "a", reasoning: "Scarcity = unlimited wants, finite resources.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The economic problem is deciding what, how and for whom to produce given scarcity.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Government must prioritise spending — defence vs health, etc.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Firms must choose output and inputs; each choice has an opportunity cost.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consumers also ration income across wants, facing opportunity costs.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Growth raises productive capacity, allowing more of some goods.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But wants also grow with income, so scarcity persists even in rich economies.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: growth eases but cannot eliminate scarcity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Unlimited wants, finite resources. (b) All agents face opportunity costs. (c) Growth helps but wants expand too.",
            commonErrors: ["Claiming growth eliminates scarcity entirely."],
          },
        },
        {
          id: "econ-u1-l11c1q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which group of economic agents aims to maximise utility?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Governments" },
              { id: "b", text: "Consumers" },
              { id: "c", text: "Firms" },
              { id: "d", text: "Central banks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Utility", statement: "The satisfaction or benefit a consumer derives from consuming a good or service." },
            ],
            steps: [
              { reasoning: "Consumers allocate income to maximise utility — their satisfaction.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Consumers",
            commonErrors: ["Confusing consumers' utility maximisation with firms' profit maximisation."],
          },
        },
        {
          id: "econ-u1-l11c1q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a want rather than a need?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clean drinking water" },
              { id: "b", text: "A second television for the living room" },
              { id: "c", text: "Basic medical treatment" },
              { id: "d", text: "Nutritious food" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Wants", statement: "Desires that go beyond basic needs and cannot all be satisfied." },
            ],
            steps: [
              { reasoning: "A want goes beyond essential survival or wellbeing.", marks: 1, markCode: "M" },
              { reasoning: "A second television is a desire, not essential — choice (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A second television for the living room",
            commonErrors: ["Treating any purchased good as a need."],
          },
        },
        {
          id: "econ-u1-l11c1q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A government has a budget of $40 billion for public spending. It allocates $25 billion to health and the remainder to transport. Calculate: (a) the amount allocated to transport, and (b) the percentage of the total budget spent on health.",
          response: {
            type: "numeric",
            parts: [
              { label: "Transport allocation ($ billion)", answer: 15 },
              { label: "Health share of budget (%)", answer: 62.5, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Budget remainder and share", statement: "Remainder = total - allocated; share = allocated / total x 100" },
            ],
            steps: [
              { reasoning: "Transport gets the remainder of the budget.", working: "40 - 25 = 15", marks: 1, markCode: "M" },
              { reasoning: "$15 billion allocated to transport.", marks: 1, markCode: "A" },
              { reasoning: "Health's share is its allocation as a percentage of the total.", working: "25/40 \\times 100 = 62.5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15 billion to transport; 62.5% of the budget on health.",
            commonErrors: ["Forgetting to convert the fraction to a percentage."],
          },
        },
        {
          id: "econ-u1-l11c1q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how consumers, producers and governments each face the economic problem of scarcity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Economic agents", statement: "Consumers maximise utility, firms maximise profit, governments allocate public resources." },
            ],
            steps: [
              { reasoning: "Consumers have limited income and must choose which wants to satisfy.", marks: 1, markCode: "M" },
              { reasoning: "Producers face limited factors of production and must decide what and how much to produce.", marks: 1, markCode: "M" },
              { reasoning: "Governments have limited tax revenue and must prioritise public spending.", marks: 1, markCode: "M" },
              { reasoning: "All three therefore make choices involving opportunity costs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "All agents face unlimited wants with limited resources and must choose, bearing opportunity costs.",
            commonErrors: ["Covering only one or two of the three agents."],
          },
        },
        {
          id: "econ-u1-l11c1q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A developing country must decide whether to spend limited funds on primary healthcare or on building a new international airport.",
          parts: [
            { label: "a", prompt: "Define scarcity and opportunity cost in this context.", marks: 2 },
            { label: "b", prompt: "Apply the three basic economic questions to the decision.", marks: 3 },
            { label: "c", prompt: "Suggest one criterion the government could use to choose between the two options.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scarcity", statement: "Unlimited wants but finite resources." },
              { kind: "definition", name: "Opportunity cost", statement: "The next best alternative forgone." },
            ],
            steps: [
              { part: "a", reasoning: "Scarcity: limited funds cannot satisfy all wants.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The opportunity cost of healthcare is the airport (or vice versa).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "What: choosing between health services and transport infrastructure.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "How: deciding between direct government provision or private contracts.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "For whom: who benefits — the poor via health, or travellers/businesses via the airport.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Valid criterion, e.g. compare marginal benefit per dollar or weigh equity vs growth.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Justified choice with reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Limited funds force a choice; OC is the forgone project. (b) What/how/for-whom applied. (c) Marginal benefit or equity criterion.",
            commonErrors: ["Listing options without applying the economic questions."],
          },
        },
        {
          id: "econ-u1-l11c1q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 'economic problem' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How to eliminate all poverty" },
              { id: "b", text: "How to produce unlimited goods with unlimited resources" },
              { id: "c", text: "The fact that unlimited wants exceed finite resources, forcing choices" },
              { id: "d", text: "The instability of financial markets" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Economic problem", statement: "Unlimited wants but limited resources require choices about what, how and for whom to produce." },
            ],
            steps: [
              { reasoning: "The economic problem stems directly from scarcity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Unlimited wants exceed finite resources, forcing choices",
            commonErrors: ["Confusing the economic problem with market failure."],
          },
        },
      ],
    },
    {
      id: "econ-u1-opportunity-cost",
      title: "Opportunity Cost and Decision-Making",
      skill: "Calculate opportunity cost from production data and apply marginal analysis to economic decisions.",
      lesson: {
        sections: [
          {
            heading: "Opportunity cost",
            body: "**Opportunity cost** is the next best alternative forgone. If you spend $20 on a book instead of a cinema ticket, the opportunity cost is the cinema ticket — not the $20. Opportunity cost includes only the *next best* alternative, not all alternatives. It applies to governments (spending on defence vs hospitals), firms (building a factory vs research) and individuals.",
          },
          {
            heading: "Marginal analysis",
            body: "Rational decisions compare **marginal benefit** (the extra benefit from one more unit) with **marginal cost** (the extra cost). An action is worth doing if marginal benefit exceeds marginal cost. For example, a firm produces an extra unit while $MR > MC$. The optimal choice is where marginal benefit equals marginal cost.",
          },
          {
            heading: "Sunk costs",
            body: "**Sunk costs** are costs already incurred that cannot be recovered (a non-refundable ticket, money spent on a failed project). Rational decisions ignore sunk costs — only future costs and benefits matter. Spending more on a failing project because 'we've already spent so much' is the **sunk cost fallacy**.",
          },
        ],
        keyFormulas: [
          { name: "Opportunity cost", statement: "OC = value of next best alternative forgone" },
          { name: "Marginal decision rule", statement: "Do it if marginal benefit > marginal cost" },
          { name: "Sunk costs", statement: "Already incurred and irrecoverable — irrelevant to future decisions" },
        ],
        workedExample: {
          problem: "A farmer can grow either 100 kg of wheat or 50 kg of rice on a field. What is the opportunity cost of 1 kg of wheat?",
          solution: "Growing 1 kg of wheat means giving up 50/100 = 0.5 kg of rice. Opportunity cost of 1 kg wheat = 0.5 kg rice.",
        },
      },
      questions: [
        {
          id: "econ-u1-l11c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The opportunity cost of a choice is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The total money spent on the choice" },
              { id: "b", text: "All the alternatives that were possible" },
              { id: "c", text: "The next best alternative forgone" },
              { id: "d", text: "The cost that cannot be recovered" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opportunity cost", statement: "The next best alternative forgone when a choice is made." },
            ],
            steps: [
              { reasoning: "Opportunity cost refers to the single next best alternative sacrificed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The next best alternative forgone",
            commonErrors: ["Listing all alternatives instead of only the next best one."],
          },
        },
        {
          id: "econ-u1-l11c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the difference between opportunity cost and a sunk cost.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sunk cost", statement: "A cost already incurred that cannot be recovered." },
            ],
            steps: [
              { reasoning: "Opportunity cost is a future sacrifice: the next best alternative forgone by a current choice.", marks: 1, markCode: "M" },
              { reasoning: "A sunk cost is in the past and irrecoverable — it cannot be changed.", marks: 1, markCode: "M" },
              { reasoning: "Rational decisions consider opportunity cost but ignore sunk costs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Opportunity cost = next best alternative forgone; sunk cost = past irrecoverable cost ignored in decisions.",
            commonErrors: ["Confusing sunk cost with opportunity cost."],
          },
        },
        {
          id: "econ-u1-l11c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A student has 4 hours of free time. They could either revise for an exam (expected gain: pass with grade B) or work a part-time job (earn $80). The exam revision has a non-refundable textbook cost of $15 already paid. Calculate the opportunity cost of choosing to revise, and explain whether the $15 textbook cost should affect the decision.",
          response: {
            type: "numeric",
            parts: [
              { label: "Opportunity cost ($)", answer: 80 },
              { label: "Should sunk cost affect decision? (1 = yes, 0 = no)", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opportunity cost", statement: "Next best alternative forgone: $80 from the part-time job." },
              { kind: "principle", name: "Sunk costs", statement: "Past irrecoverable costs are irrelevant to current decisions." },
            ],
            steps: [
              { reasoning: "The next best alternative to revising is working, earning $80.", working: "OC = 80", marks: 1, markCode: "M" },
              { reasoning: "The $15 textbook cost is already paid and cannot be recovered.", marks: 1, markCode: "M" },
              { reasoning: "Sunk costs should not affect the decision — only future benefits and costs matter.", marks: 1, markCode: "R" },
              { reasoning: "Decision: revise if expected benefit of grade B exceeds $80 plus any future revision costs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Opportunity cost = $80; the $15 sunk cost should not affect the decision.",
            commonErrors: ["Adding the $15 textbook cost to the opportunity cost.", "Treating sunk cost as relevant."],
          },
        },
        {
          id: "econ-u1-l11c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A government must choose between building a new hospital or a new motorway. Examine how opportunity cost and marginal analysis guide this decision.",
          parts: [
            { label: "a", prompt: "Define opportunity cost in the context of this decision.", marks: 2 },
            { label: "b", prompt: "Explain how marginal benefit and marginal cost could be applied.", marks: 3 },
            { label: "c", prompt: "Evaluate the difficulties of making this choice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opportunity cost", statement: "The next best alternative forgone — here, the motorway if the hospital is built." },
              { kind: "principle", name: "Marginal analysis", statement: "Compare extra benefit with extra cost of each unit of spending." },
            ],
            steps: [
              { part: "a", reasoning: "Opportunity cost of the hospital is the motorway (the next best alternative).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conversely, the opportunity cost of the motorway is the hospital.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Marginal benefit: extra health outcomes or extra time savings per dollar spent.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Marginal cost: the forgone benefits of the alternative project.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Choose the project where marginal benefit exceeds marginal cost — possibly split funding.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Benefits are uncertain and hard to measure (health vs time saved).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Distribution matters: who gains and who loses may differ from efficiency.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: marginal analysis helps but cannot resolve all value conflicts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) OC = the alternative project forgone. (b) Compare MB and MC of each project. (c) Measurement and equity difficulties limit the analysis.",
            commonErrors: ["Ignoring distributional effects or treating all benefits as equal."],
          },
        },
        {
          id: "econ-u1-l11c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A person spends $10 on lunch instead of saving the money. The opportunity cost of this choice is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The $10 spent on lunch" },
              { id: "b", text: "Whatever else the $10 could have bought — the next best alternative" },
              { id: "c", text: "The enjoyment received from the lunch" },
              { id: "d", text: "Zero, because lunch was necessary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opportunity cost", statement: "The next best alternative forgone — what the money/time could otherwise have been used for." },
            ],
            steps: [
              { reasoning: "Opportunity cost is the forgone alternative use of the resources, not the money itself.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Whatever else the $10 could have bought — the next best alternative",
            commonErrors: ["Equating opportunity cost with the money price paid."],
          },
        },
        {
          id: "econ-u1-l11c2q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A rational decision-maker should undertake an action when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Marginal benefit is less than marginal cost" },
              { id: "b", text: "Marginal benefit exceeds marginal cost" },
              { id: "c", text: "All costs have already been paid" },
              { id: "d", text: "Total revenue equals total cost" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Marginal decision rule", statement: "Act if marginal benefit > marginal cost; stop when MB = MC." },
            ],
            steps: [
              { reasoning: "The decision rule compares the extra benefit with the extra cost.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Marginal benefit exceeds marginal cost",
            commonErrors: ["Using total rather than marginal benefit and cost."],
          },
        },
        {
          id: "econ-u1-l11c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A sunk cost is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A cost that will be incurred in the future" },
              { id: "b", text: "A cost already incurred that cannot be recovered" },
              { id: "c", text: "The next best alternative forgone" },
              { id: "d", text: "The extra cost of producing one more unit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sunk cost", statement: "A cost already incurred that cannot be recovered." },
            ],
            steps: [
              { reasoning: "Sunk costs are past and irrecoverable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A cost already incurred that cannot be recovered",
            commonErrors: ["Confusing sunk cost with opportunity cost or marginal cost."],
          },
        },
        {
          id: "econ-u1-l11c2q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A farmer can grow either 60 kg of wheat or 30 kg of rice on a field. The farmer chooses to produce 20 kg of wheat. Assuming a linear trade-off, calculate: (a) the opportunity cost of 1 kg of wheat, and (b) the total rice forgone.",
          response: {
            type: "numeric",
            parts: [
              { label: "Opportunity cost of 1 kg wheat (kg rice)", answer: 0.5 },
              { label: "Total rice forgone (kg)", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Opportunity cost", statement: "OC per unit = quantity of alternative forgone / quantity produced" },
            ],
            steps: [
              { reasoning: "Giving up all rice (30 kg) to grow all wheat (60 kg) means each kg of wheat costs half a kg of rice.", working: "30/60 = 0.5", marks: 1, markCode: "M" },
              { reasoning: "Opportunity cost of 1 kg wheat = 0.5 kg rice.", marks: 1, markCode: "A" },
              { reasoning: "20 kg of wheat therefore forgoes 20 x 0.5 = 10 kg of rice.", working: "20 \\times 0.5 = 10", marks: 1, markCode: "M" },
              { reasoning: "Total rice forgone = 10 kg.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5 kg rice per kg wheat; 10 kg rice forgone.",
            commonErrors: ["Using 60/30 instead of 30/60 for the exchange rate."],
          },
        },
        {
          id: "econ-u1-l11c2q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain marginal analysis and state the decision rule rational agents use when choosing between options.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Marginal analysis", statement: "Compare marginal benefit with marginal cost of one more unit." },
            ],
            steps: [
              { reasoning: "Marginal benefit is the extra benefit from one more unit; marginal cost is the extra cost.", marks: 1, markCode: "M" },
              { reasoning: "An action is worthwhile while marginal benefit exceeds marginal cost.", marks: 1, markCode: "M" },
              { reasoning: "The optimal level is where marginal benefit equals marginal cost.", marks: 1, markCode: "M" },
              { reasoning: "Example: produce or consume one more unit only if its extra benefit justifies its extra cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Do more while MB > MC; optimum where MB = MC.",
            commonErrors: ["Comparing totals instead of marginals."],
          },
        },
        {
          id: "econ-u1-l11c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A firm spends $5,000 on market research for a new product. The research shows demand is weak, and the $5,000 cannot be recovered. The firm is considering launching the product anyway because 'we have already spent so much'. Explain the economic error in this reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sunk cost fallacy", statement: "Irrationally continuing a course of action because of past irrecoverable costs." },
            ],
            steps: [
              { reasoning: "The $5,000 research cost is sunk — already incurred and irrecoverable.", marks: 1, markCode: "M" },
              { reasoning: "Sunk costs should not influence the launch decision; only future costs and benefits matter.", marks: 1, markCode: "M" },
              { reasoning: "The decision should compare the future marginal benefit of launching with future marginal costs.", marks: 1, markCode: "R" },
              { reasoning: "Continuing because of past spending is the sunk cost fallacy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The $5,000 is a sunk cost and irrelevant; decide on future MB vs MC only.",
            commonErrors: ["Treating the research spend as a reason to continue."],
          },
        },
        {
          id: "econ-u1-l11c2q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A firm has funds for only one investment: either new automated machinery or an expanded workforce. Examine how opportunity cost and marginal analysis guide this choice.",
          parts: [
            { label: "a", prompt: "Define the opportunity cost of choosing machinery.", marks: 2 },
            { label: "b", prompt: "Explain how marginal benefit and marginal cost could be applied to each option.", marks: 3 },
            { label: "c", prompt: "Evaluate the difficulties of making this investment decision.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opportunity cost", statement: "The next best alternative forgone — here, the expanded workforce." },
              { kind: "principle", name: "Marginal analysis", statement: "Compare extra benefit with extra cost." },
            ],
            steps: [
              { part: "a", reasoning: "Opportunity cost of machinery is the expanded workforce — the next best alternative.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conversely, the opportunity cost of the workforce is the machinery.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "MB of machinery: extra output per dollar; MC includes forgone labour benefits.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "MB of workforce: extra output from more workers; MC includes forgone capital benefits.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Choose the option where MB exceeds MC — possibly a mix of both.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Benefits are uncertain and hard to measure; demand may change.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Sunk costs and past investments may bias the decision.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: marginal analysis guides but cannot eliminate uncertainty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) OC = forgone alternative investment. (b) Compare MB and MC of each option. (c) Uncertainty and sunk costs complicate the choice.",
            commonErrors: ["Ignoring that the two options' opportunity costs are each other."],
          },
        },
        {
          id: "econ-u1-l11c2q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A worker earns $15 per hour. They must choose between working 4 hours of overtime (earning extra income) or using those 4 hours to study for an exam. Calculate the opportunity cost of studying in terms of (a) forgone income and (b) time.",
          response: {
            type: "numeric",
            parts: [
              { label: "Forgone income ($)", answer: 60 },
              { label: "Time forgone (hours)", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Opportunity cost", statement: "OC = value of next best alternative forgone" },
            ],
            steps: [
              { reasoning: "The next best alternative to studying is overtime work.", marks: 1, markCode: "M" },
              { reasoning: "Forgone income = 4 hours x $15 = $60.", working: "4 \\times 15 = 60", marks: 1, markCode: "A" },
              { reasoning: "Time cost = the 4 hours themselves; income cost = $60.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60 and 4 hours.",
            commonErrors: ["Multiplying by the wrong hourly rate or forgetting units."],
          },
        },
        {
          id: "econ-u1-l11c2q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A student can attend either a concert (ticket $40) or a football match (ticket $25) on the same evening; they cannot attend both. What is the opportunity cost of choosing the concert?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$40" },
              { id: "b", text: "$25 — the next best alternative forgone" },
              { id: "c", text: "$65" },
              { id: "d", text: "The enjoyment of the concert" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opportunity cost", statement: "The next best alternative forgone — here the football match." },
            ],
            steps: [
              { reasoning: "The next best alternative to the concert is the football match, worth $25.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $25 — the next best alternative forgone",
            commonErrors: ["Using the price of the chosen option instead of the forgone one."],
          },
        },
        {
          id: "econ-u1-l11c2q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of a sunk cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A non-refundable concert ticket already purchased" },
              { id: "b", text: "Next month's rent payment" },
              { id: "c", text: "The expected salary from a future job" },
              { id: "d", text: "The cost of raw materials for tomorrow's production" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sunk cost", statement: "A cost already incurred that cannot be recovered." },
            ],
            steps: [
              { reasoning: "The non-refundable ticket is paid and cannot be recovered.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A non-refundable concert ticket already purchased",
            commonErrors: ["Listing future or avoidable costs as sunk."],
          },
        },
        {
          id: "econ-u1-l11c2q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A city council debates spending $1 billion either on a new sports stadium or on upgrading its hospitals.",
          parts: [
            { label: "a", prompt: "Define opportunity cost in this context.", marks: 2 },
            { label: "b", prompt: "Explain how marginal analysis could guide the decision.", marks: 3 },
            { label: "c", prompt: "Evaluate one difficulty in applying marginal analysis to this choice.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opportunity cost", statement: "The next best alternative forgone." },
              { kind: "principle", name: "Marginal analysis", statement: "Compare extra benefit with extra cost of each option." },
            ],
            steps: [
              { part: "a", reasoning: "The opportunity cost of the stadium is the hospital upgrade (or vice versa).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Only the next best alternative counts, not all forgone uses.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Compare the marginal benefit per dollar of stadium vs hospital spending.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Marginal cost of each option is the forgone benefits of the other.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A mixed allocation may be optimal where MB = MC across uses.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Valid difficulty, e.g. benefits are hard to measure or distributional effects differ.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation of that difficulty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) OC = forgone project. (b) Compare MB and MC per dollar across options. (c) Measurement/distribution difficulties.",
            commonErrors: ["Treating the $1 billion as the opportunity cost — it is the resource, not the forgone alternative."],
          },
        },
        {
          id: "econ-u1-l11c2q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain why rational decision-makers should ignore sunk costs, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sunk costs", statement: "Past irrecoverable costs cannot be changed and are irrelevant to future decisions." },
            ],
            steps: [
              { reasoning: "Sunk costs are already incurred and cannot be recovered, so they cannot be altered.", marks: 1, markCode: "M" },
              { reasoning: "Only future costs and benefits should guide the decision.", marks: 1, markCode: "M" },
              { reasoning: "Example: continuing to watch a boring film because the ticket was expensive is irrational — the ticket cost is sunk.", marks: 1, markCode: "M" },
              { reasoning: "The rational choice weighs only the remaining enjoyment against alternatives.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sunk costs are unchangeable; decisions should rest on future MB vs MC only.",
            commonErrors: ["Letting past spending justify continuing a bad course of action."],
          },
        },
      ],
    },
  ],
};
