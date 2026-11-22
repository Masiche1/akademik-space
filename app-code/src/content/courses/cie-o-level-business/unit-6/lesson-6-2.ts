import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "olbus-u6-lesson-6-2",
  code: "6-2",
  title: "Technological and Legal Influences",
  goal: "I CAN explain how technology and legislation affect business operations.",
  standards: ["7100 6.2"],
  vocabulary: [
    { term: "Technology", definition: "Tools, machines and methods used to produce goods/services." },
    { term: "Automation", definition: "Using machines/computers to perform tasks without human input." },
    { term: "E-commerce", definition: "Buying and selling goods/services online." },
    { term: "Legislation", definition: "Laws made by government that businesses must follow." },
    { term: "Health and safety", definition: "Laws protecting workers from harm at work." },
    { term: "Consumer protection", definition: "Laws ensuring fair treatment of customers." },
    { term: "Minimum wage", definition: "Legal minimum hourly pay for workers." },
  ],
  concepts: [
    {
      id: "olbus-u6-tech",
      title: "Technological influences",
      skill: "Explain how technology changes business operations and competitiveness.",
      lesson: {
        sections: [
          { heading: "Technology impact", body: "Automation increases efficiency but may reduce jobs. E-commerce opens new markets but requires digital skills. Technology can create competitive advantage or be a threat." },
          { heading: "Opportunities", body: "New products/services, online selling, data analytics, automation of routine tasks, global reach." },
          { heading: "Challenges", body: "Job displacement, need for retraining, cybersecurity risks, keeping up with rapid change." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A retailer moves all sales online. Name one opportunity and one challenge.",
          solution: "Opportunity: reach global customers, lower costs. Challenge: need digital skills, compete with established online sellers.",
        },
      },
      questions: [
        {
          id: "olbus-u6-tech-q1", difficulty: "foundation", totalMarks: 1,
          stem: "E-commerce is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Factory production" },
            { id: "b", text: "Buying and selling online" },
            { id: "c", text: "Banking only" },
            { id: "d", text: "Traditional retail" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "E-commerce", statement: "Online trade." }], steps: [{ reasoning: "Online buying/selling.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u6-tech-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two ways technology affects business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Technology impact", statement: "Effects." }], steps: [
            { reasoning: "Increases efficiency; may reduce jobs / opens new markets.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: efficiency, job changes, new markets, competitive advantage." },
        },
        {
          id: "olbus-u6-tech-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one opportunity and one challenge of automation for a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Automation", statement: "Trade-offs." }], steps: [
            { reasoning: "Opportunity: higher efficiency/lower costs.", marks: 1, markCode: "AO2" },
            { reasoning: "Challenge: job displacement/retraining needs.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct comparison.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Automation improves efficiency but may displace workers." },
        },
        {
          id: "olbus-u6-tech-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Technological influences review.",
          parts: [
            { label: "a", prompt: "Define e-commerce.", marks: 1 },
            { label: "b", prompt: "Two opportunities from technology?", marks: 2 },
            { label: "c", prompt: "Two challenges?", marks: 2 },
            { label: "d", prompt: "How does automation affect employment?", marks: 2 },
            { label: "e", prompt: "Why must businesses keep up with technology?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Technology", statement: "Impact and adaptation." },
          ], steps: [
            { part: "a", reasoning: "Online buying/selling.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Efficiency/new markets/data.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Job loss/retraining/cybersecurity.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Replaces routine tasks; may reduce jobs.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear effect.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Staying competitive/relevant.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) e-comm def (b) 2 opps (c) 2 challenges (d) job impact (e) competitiveness" },
        },
        {
          id: "olbus-u6-tech-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Automation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Using machines to perform tasks without human input" },
            { id: "b", text: "Writing business plans" },
            { id: "c", text: "Hiring more workers" },
            { id: "d", text: "Selling products online" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Automation", statement: "Machine operation." }], steps: [{ reasoning: "Automation = machines doing tasks.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-tech-q6", difficulty: "foundation", totalMarks: 1,
          stem: "A key benefit of e-commerce for a small local retailer is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Removing the need for stock" },
            { id: "b", text: "Guaranteeing higher prices" },
            { id: "c", text: "Reaching customers beyond the local area" },
            { id: "d", text: "Eliminating all competition" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "E-commerce", statement: "Market reach." }], steps: [{ reasoning: "Online selling widens the market.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u6-tech-q7", difficulty: "core", totalMarks: 1,
          stem: "A major challenge of new technology for workers is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lower wages for all staff" },
            { id: "b", text: "Guaranteed job security" },
            { id: "c", text: "No change in skills required" },
            { id: "d", text: "The need for retraining as jobs change" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Technology challenge", statement: "Skills gap." }], steps: [{ reasoning: "Workers must adapt skills.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u6-tech-q8", difficulty: "core", totalMarks: 1,
          stem: "Data analytics helps a business by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Replacing all managers" },
            { id: "b", text: "Improving understanding of customers and decisions" },
            { id: "c", text: "Eliminating costs" },
            { id: "d", text: "Stopping competitors" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Data analytics", statement: "Insight tool." }], steps: [{ reasoning: "Data improves decisions.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u6-tech-q9", difficulty: "core", totalMarks: 1,
          stem: "Successful use of technology can give a business…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No need for marketing" },
            { id: "b", text: "Guaranteed monopoly" },
            { id: "c", text: "A competitive advantage" },
            { id: "d", text: "Freedom from legislation" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Technology advantage", statement: "Competitiveness." }], steps: [{ reasoning: "Tech edge = advantage over rivals.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u6-tech-q10", difficulty: "core", totalMarks: 2,
          stem: "A task previously done by workers took 40 hours per week. A machine now does it in 10 hours. Calculate the weekly hours saved.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: { principles: [{ kind: "principle", name: "Automation saving", statement: "Time saved." }], steps: [
            { part: "a", reasoning: "Hours saved = 40 - 10 = 30.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Saved = 30 hours.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 30" },
        },
        {
          id: "olbus-u6-tech-q11", difficulty: "core", totalMarks: 2,
          stem: "An online shop's sales rose by 25% after going digital, reaching $50,000. Calculate its previous sales.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Growth calc", statement: "Reverse percentage." }], steps: [
            { part: "a", reasoning: "50000 = 1.25 x previous; previous = 40000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Previous sales = 40000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 40000" },
        },
        {
          id: "olbus-u6-tech-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A company invests $20,000 in new software that saves $5,000 per year. Calculate how many years it takes to recoup the investment.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Payback", statement: "Cost/saving." }], steps: [
            { part: "a", reasoning: "Payback = 20000/5000 = 4 years.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Recoup in 4 years.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 4" },
        },
        {
          id: "olbus-u6-tech-q13", difficulty: "challenge", totalMarks: 2,
          stem: "A company has 500 employees and automation makes 20% of roles redundant. How many employees are affected?",
          response: { type: "numeric", parts: [{ label: "a", answer: 100 }] },
          markscheme: { principles: [{ kind: "principle", name: "Job displacement", statement: "Percentage calc." }], steps: [
            { part: "a", reasoning: "20% of 500 = 100.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Affected = 100.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 100" },
        },
        {
          id: "olbus-u6-tech-q14", difficulty: "core", totalMarks: 2,
          stem: "Explain one opportunity that technology offers a small business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Technology opportunities", statement: "Benefits." }], steps: [
            { reasoning: "E.g. online selling, lower costs, new markets, data insights — any one explained.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear link to the business.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Any valid opportunity explained, e.g. e-commerce reach." },
        },
        {
          id: "olbus-u6-tech-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Discuss one benefit and one drawback of automation for a manufacturing business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Automation trade-off", statement: "Pros and cons." }], steps: [
            { reasoning: "Benefit: higher efficiency, lower costs, consistent quality.", marks: 1, markCode: "AO2" },
            { reasoning: "Benefit explained.", marks: 1, markCode: "AO3" },
            { reasoning: "Drawback: job losses, high initial cost, retraining needs.", marks: 1, markCode: "AO2" },
            { reasoning: "Drawback explained.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Efficiency vs job displacement/cost." },
        },
        {
          id: "olbus-u6-tech-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Technological influences review.",
          parts: [
            { label: "a", prompt: "Define automation.", marks: 1 },
            { label: "b", prompt: "Name two opportunities technology creates.", marks: 2 },
            { label: "c", prompt: "Name two challenges technology creates.", marks: 2 },
            { label: "d", prompt: "How can e-commerce change a retailer's customer base?", marks: 2 },
            { label: "e", prompt: "Why is cybersecurity a concern for businesses?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Technology", statement: "Impact and risk." },
          ], steps: [
            { part: "a", reasoning: "Machines performing tasks without human input.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "New markets, efficiency, data, products — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Job displacement, cybersecurity, rapid change — any two.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Reaches beyond local area; online customers.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Online data vulnerable to attacks/theft.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear concern.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 2 opps (c) 2 challenges (d) wider base (e) data risk" },
        },
      ],
    },
    {
      id: "olbus-u6-legal",
      title: "Legal Influences",
      skill: "Explain how legislation affects business operations and employment.",
      lesson: {
        sections: [
          { heading: "Types of legislation", body: "- **Employment**: minimum wage, working hours, anti-discrimination, health & safety.\n- **Consumer protection**: product safety, fair trading, data protection.\n- **Competition**: anti-monopoly, merger rules.\n- **Environmental**: pollution limits, waste disposal." },
          { heading: "Impact", body: "Laws set minimum standards — businesses must comply or face fines/closure. Compliance costs money but builds trust and avoids legal action." },
          { heading: "Benefits of compliance", body: "Protects workers and customers, builds reputation, avoids penalties, ensures fair competition." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A factory must provide safety equipment to workers. Which legislation?",
          solution: "Health and safety legislation — protects workers from harm.",
        },
      },
      questions: [
        {
          id: "olbus-u6-leg-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Minimum wage legislation requires…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Unlimited holidays" },
            { id: "b", text: "Free housing" },
            { id: "c", text: "Paying workers at least the legal minimum" },
            { id: "d", text: "No working hours limit" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Minimum wage", statement: "Legal pay floor." }], steps: [{ reasoning: "Minimum pay required.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u6-leg-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two areas covered by business legislation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Legislation areas", statement: "Coverage." }], steps: [
            { reasoning: "Employment, consumer protection, competition, environment — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: employment, consumer protection, competition, environment." },
        },
        {
          id: "olbus-u6-leg-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why businesses must comply with health and safety laws.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "H&S compliance", statement: "Legal obligation." }], steps: [
            { reasoning: "Legal requirement — fines/closure if ignored.", marks: 1, markCode: "AO2" },
            { reasoning: "Protects workers from harm.", marks: 1, markCode: "AO2" },
            { reasoning: "Builds reputation and morale.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Legal obligation protects workers; non-compliance risks fines and reputation." },
        },
        {
          id: "olbus-u6-leg-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Legal influences review.",
          parts: [
            { label: "a", prompt: "Define legislation.", marks: 1 },
            { label: "b", prompt: "Name three legislation areas.", marks: 2 },
            { label: "c", prompt: "What is consumer protection?", marks: 2 },
            { label: "d", prompt: "Why comply with laws?", marks: 2 },
            { label: "e", prompt: "Cost vs benefit of compliance?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Legal influences", statement: "Laws and compliance." },
          ], steps: [
            { part: "a", reasoning: "Government-made laws.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Employment, consumer, competition, environment — any three.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Three named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Laws ensuring fair treatment of customers.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Avoid fines; protect reputation; ethical.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear reasons.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Costs compliance but avoids penalties and builds trust.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Balanced view.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 3 areas (c) consumer def (d) avoid fines (e) cost vs trust" },
        },
        {
          id: "olbus-u6-leg-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Health and safety legislation requires businesses to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Protect workers from harm at work" },
            { id: "b", text: "Offer free holidays" },
            { id: "c", text: "Hire only managers" },
            { id: "d", text: "Pay above-average wages" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "H&S legislation", statement: "Worker protection." }], steps: [{ reasoning: "Protects workers from harm.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-leg-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Consumer protection legislation mainly covers…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Building design" },
            { id: "b", text: "Company profits" },
            { id: "c", text: "Staff holidays" },
            { id: "d", text: "Product safety and fair trading" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Consumer protection", statement: "Fair treatment." }], steps: [{ reasoning: "Safety and fair trading.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u6-leg-q7", difficulty: "core", totalMarks: 1,
          stem: "A business that seriously fails to comply with legislation may face…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No consequences" },
            { id: "b", text: "A government subsidy" },
            { id: "c", text: "Reduced tax automatically" },
            { id: "d", text: "Fines or even closure" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Non-compliance", statement: "Penalties." }], steps: [{ reasoning: "Fines/closure are penalties.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u6-leg-q8", difficulty: "core", totalMarks: 1,
          stem: "Anti-discrimination legislation requires businesses to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ignore customer complaints" },
            { id: "b", text: "Charge different prices by age" },
            { id: "c", text: "Hire only local staff" },
            { id: "d", text: "Treat all workers and customers fairly and equally" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Anti-discrimination", statement: "Equal treatment." }], steps: [{ reasoning: "Equal treatment required.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u6-leg-q9", difficulty: "core", totalMarks: 1,
          stem: "Minimum wage legislation sets…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mandatory pension rates" },
            { id: "b", text: "The maximum working hours" },
            { id: "c", text: "The highest allowed profit" },
            { id: "d", text: "A legal minimum hourly pay for workers" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Minimum wage", statement: "Pay floor." }], steps: [{ reasoning: "Legal minimum pay.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u6-leg-q10", difficulty: "core", totalMarks: 2,
          stem: "A worker is paid $12 per hour and works 35 hours per week. Calculate the weekly wage bill for this worker.",
          response: { type: "numeric", parts: [{ label: "a", answer: 420 }] },
          markscheme: { principles: [{ kind: "principle", name: "Wage calc", statement: "Rate x hours." }], steps: [
            { part: "a", reasoning: "Weekly wage = 12 x 35 = 420.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Wage = 420.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 420" },
        },
        {
          id: "olbus-u6-leg-q11", difficulty: "challenge", totalMarks: 2,
          stem: "The minimum wage rises from $10 to $12 per hour. A worker on minimum wage works 40 hours per week. Calculate the extra weekly cost to the employer.",
          response: { type: "numeric", parts: [{ label: "a", answer: 80 }] },
          markscheme: { principles: [{ kind: "principle", name: "Wage increase", statement: "Extra cost." }], steps: [
            { part: "a", reasoning: "Extra per hour = 2; extra weekly = 2 x 40 = 80.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Extra cost = 80.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 80" },
        },
        {
          id: "olbus-u6-leg-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A company has 50 employees each earning an average of $10 per hour for 40 hours per week. Calculate the total weekly wage bill.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Wage bill", statement: "Rate x hours x staff." }], steps: [
            { part: "a", reasoning: "Wage bill = 10 x 40 x 50 = 20000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Total = 20000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 20000" },
        },
        {
          id: "olbus-u6-leg-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Compliance with safety laws costs a business $3,000 per year but helps it avoid an average fine of $8,000 per year. Calculate the net annual benefit.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Compliance cost-benefit", statement: "Avoided costs." }], steps: [
            { part: "a", reasoning: "Net benefit = 8000 - 3000 = 5000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Net benefit = 5000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 5000" },
        },
        {
          id: "olbus-u6-leg-q14", difficulty: "core", totalMarks: 2,
          stem: "Explain two benefits to a business of complying with legislation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Compliance benefits", statement: "Trust and avoidance." }], steps: [
            { reasoning: "Avoids fines, legal action and closure.", marks: 1, markCode: "AO2" },
            { reasoning: "Builds reputation and customer/worker trust.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Avoids penalties; builds trust." },
        },
        {
          id: "olbus-u6-leg-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Discuss the costs and benefits of complying with health and safety legislation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "H&S compliance", statement: "Cost vs benefit." }], steps: [
            { reasoning: "Costs: equipment, training, inspections.", marks: 1, markCode: "AO2" },
            { reasoning: "Benefit: fewer accidents, lower compensation claims, less downtime.", marks: 1, markCode: "AO2" },
            { reasoning: "Benefit: legal protection and better reputation/morale.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear balanced discussion.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Upfront costs but legal safety and reputation benefits." },
        },
        {
          id: "olbus-u6-leg-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Legal influences review.",
          parts: [
            { label: "a", prompt: "Define legislation.", marks: 1 },
            { label: "b", prompt: "Name two employment laws businesses must follow.", marks: 2 },
            { label: "c", prompt: "What is data protection legislation concerned with?", marks: 2 },
            { label: "d", prompt: "Why do environmental laws matter to businesses?", marks: 2 },
            { label: "e", prompt: "Explain why compliance can be seen as an investment rather than just a cost.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Legal influences", statement: "Laws and compliance." },
          ], steps: [
            { part: "a", reasoning: "Laws made by government that businesses must follow.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Minimum wage, working hours, anti-discrimination, H&S — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Protects personal data of customers/employees.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Limits pollution/waste; non-compliance risks penalties.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Builds trust, avoids fines, protects reputation.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear evaluation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 2 laws (c) data protection (d) environment (e) investment view" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u6-6-2-notes", title: "Technology and legal — notes", summary: "How tech and legislation affect business.",
      sections: [
        { heading: "Technology", body: "Automation, e-commerce, data — opportunities and challenges; must adapt to stay competitive." },
        { heading: "Legal", body: "Employment, consumer, competition, environment laws — compliance costs but builds trust and avoids penalties." },
      ] },
  ],
};
