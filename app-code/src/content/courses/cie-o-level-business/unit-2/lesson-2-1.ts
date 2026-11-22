import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "olbus-u2-lesson-2-1",
  code: "2-1",
  title: "Market Research",
  goal: "I CAN explain the purpose and methods of market research.",
  standards: ["7100 2.1"],
  vocabulary: [
    { term: "Market research", definition: "Gathering and analysing information about markets and customers." },
    { term: "Primary research", definition: "Data collected first-hand by the business." },
    { term: "Secondary research", definition: "Data already collected by others." },
    { term: "Questionnaire", definition: "Written set of questions for customers." },
    { term: "Survey", definition: "Systematic collection of data from a sample." },
    { term: "Sample", definition: "Subset of the target population surveyed." },
    { term: "Target market", definition: "Specific group of customers a business aims to serve." },
  ],
  concepts: [
    {
      id: "olbus-u2-purpose",
      title: "Purpose of market research",
      skill: "Explain why businesses conduct market research.",
      lesson: {
        sections: [
          { heading: "Why research?", body: "Market research reduces uncertainty. It helps businesses understand customer needs, identify market size, assess competition, test new products and make informed decisions about the marketing mix." },
          { heading: "Benefits", body: "- Avoids wasted investment in unwanted products.\n- Identifies opportunities and threats.\n- Improves pricing, product design and promotion decisions.\n- Reduces risk of business failure." },
          { heading: "Target market", body: "Research helps define the target market — the specific group of customers most likely to buy, based on age, income, location or interests." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why would a restaurant conduct market research before opening?",
          solution: "To understand local customer preferences, assess competition, and decide on menu, prices and location.",
        },
      },
      questions: [
        {
          id: "olbus-u2-pu-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Market research is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Selling products" },
            { id: "b", text: "Making products" },
            { id: "c", text: "Managing staff" },
            { id: "d", text: "Gathering information about markets and customers" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Market research", statement: "Info gathering." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u2-pu-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two benefits of market research.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Benefits", statement: "Informed decisions." }], steps: [
            { reasoning: "Understand customer needs; reduce risk / identify opportunities.", marks: 1, markCode: "AO1" },
            { reasoning: "Two listed.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: understand needs, reduce risk, identify opportunities, improve decisions." },
        },
        {
          id: "olbus-u2-pu-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why market research is especially important for a new business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "New business", statement: "Higher uncertainty." }], steps: [
            { reasoning: "New businesses lack experience of the market.", marks: 1, markCode: "AO2" },
            { reasoning: "Research reduces risk of failure.", marks: 1, markCode: "AO2" },
            { reasoning: "Helps secure finance by proving viability.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Research compensates for lack of experience and reduces failure risk." },
        },
        {
          id: "olbus-u2-pu-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Market research purpose review.",
          parts: [
            { label: "a", prompt: "Define market research.", marks: 1 },
            { label: "b", prompt: "Name three benefits.", marks: 2 },
            { label: "c", prompt: "Define target market.", marks: 2 },
            { label: "d", prompt: "Why is research vital for new businesses?", marks: 2 },
            { label: "e", prompt: "Give an example of research informing a decision.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Market research", statement: "Purpose and application." },
          ], steps: [
            { part: "a", reasoning: "Gathering/analyzing market info.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Three benefits.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Specific customer group targeted.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Reduces uncertainty/risk.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Valid example given.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear link to decision.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 3 benefits (c) target def (d) risk reduction (e) example" },
        },
        {
          id: "olbus-u2-pu-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Market research helps a business mainly by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Making informed decisions and reducing risk" },
            { id: "b", text: "Skipping the planning stage" },
            { id: "c", text: "Increasing its taxes" },
            { id: "d", text: "Avoiding all competition" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Purpose of research", statement: "Informed decisions." }], steps: [{ reasoning: "Research reduces uncertainty and improves decisions.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-pu-q6", difficulty: "core", totalMarks: 1,
          stem: "A target market is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The export market only" },
            { id: "b", text: "The specific group of customers a business aims to serve" },
            { id: "c", text: "The cheapest market to enter" },
            { id: "d", text: "The largest possible market" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Target market", statement: "Specific customer group." }], steps: [{ reasoning: "Target market = specific group the business aims to serve.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u2-pu-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Which of the following is a benefit of market research?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Identifying opportunities and threats" },
            { id: "b", text: "Guaranteed sales" },
            { id: "c", text: "More competitors" },
            { id: "d", text: "Higher production costs" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Benefits", statement: "Informed decisions." }], steps: [{ reasoning: "Research identifies opportunities and threats.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-pu-q8", difficulty: "core", totalMarks: 2,
          stem: "A business researches and finds that 30% of its 5,000 local customers prefer online shopping. How many customers is that?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1500, unit: "customers" }] },
          markscheme: { principles: [{ kind: "principle", name: "Market calculation", statement: "% of market." }], steps: [
            { part: "a", reasoning: "30% × 5000 = 1500.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "1,500 customers.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 1,500 customers" },
        },
        {
          id: "olbus-u2-pu-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A company surveys 200 people and 150 say they would buy a new product. (a) How many are willing to buy? (b) What percentage is this?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 150, unit: "people" },
            { label: "b", answer: 75, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Survey results", statement: "Count and percentage." }], steps: [
            { part: "a", reasoning: "150 people willing to buy.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "150 ÷ 200 × 100 = 75%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "75% of respondents.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 150 people; **(b)** 75%" },
        },
        {
          id: "olbus-u2-pu-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain how market research can help a business decide its prices.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Pricing research", statement: "Informed pricing." }], steps: [
            { reasoning: "Research reveals what customers are willing to pay.", marks: 1, markCode: "AO2" },
            { reasoning: "Helps set prices that balance competitiveness and profit.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Research shows customer willingness to pay, enabling optimal pricing." },
        },
        {
          id: "olbus-u2-pu-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why market research reduces the risk of business failure.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Risk reduction", statement: "Informed decisions." }], steps: [
            { reasoning: "Tests whether customers want the product before investment.", marks: 1, markCode: "AO2" },
            { reasoning: "Reveals market size and competition.", marks: 1, markCode: "AO2" },
            { reasoning: "Avoids wasting money on unwanted products.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Research validates demand and competition before committing resources." },
        },
        {
          id: "olbus-u2-pu-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A restaurant wants to know what dishes local customers prefer before opening. The best first step is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hire more chefs" },
            { id: "b", text: "Conduct market research" },
            { id: "c", text: "Buy new kitchen equipment" },
            { id: "d", text: "Lower its prices" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Market research", statement: "Before decisions." }], steps: [{ reasoning: "Research gathers customer preference data first.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Conduct market research" },
        },
        {
          id: "olbus-u2-pu-q13", difficulty: "core", totalMarks: 2,
          stem: "A business spends $5,000 on market research and identifies an opportunity expected to generate $50,000 extra profit. What is the net gain?",
          response: { type: "numeric", parts: [{ label: "a", answer: 45000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Net gain", statement: "Benefit - cost." }], steps: [
            { part: "a", reasoning: "50000 - 5000 = 45000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Net gain = $45,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $45,000" },
        },
        {
          id: "olbus-u2-pu-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Market research mainly aims to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "File tax returns" },
            { id: "b", text: "Increase production" },
            { id: "c", text: "Hire more staff" },
            { id: "d", text: "Reduce uncertainty about markets and customers" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Market research", statement: "Reduce uncertainty." }], steps: [{ reasoning: "Research reduces uncertainty.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u2-pu-q15", difficulty: "core", totalMarks: 2,
          stem: "A survey of 1,000 people finds 400 aged 18-30. If the target market is people aged 18-30, what percentage of the survey is in the target market?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "%" }] },
          markscheme: { principles: [{ kind: "principle", name: "Percentage", statement: "Part / whole × 100." }], steps: [
            { part: "a", reasoning: "400 ÷ 1000 × 100 = 40%.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "40% of the survey.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 40%" },
        },
        {
          id: "olbus-u2-pu-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Market research purpose extended review.",
          parts: [
            { label: "a", prompt: "Define market research.", marks: 1 },
            { label: "b", prompt: "Name two benefits of market research.", marks: 2 },
            { label: "c", prompt: "Define target market.", marks: 1 },
            { label: "d", prompt: "Why is research vital for new businesses?", marks: 2 },
            { label: "e", prompt: "Give an example of research informing a business decision.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Market research", statement: "Purpose and application." },
          ], steps: [
            { part: "a", reasoning: "Gathering/analyzing market info.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two benefits.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Specific customer group targeted.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Reduces uncertainty/risk.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Valid example.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Linked to a decision.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 2 benefits (c) target def (d) risk (e) example" },
        },
      ],
    },
    {
      id: "olbus-u2-methods",
      title: "Primary and Secondary Research",
      skill: "Distinguish between primary and secondary research methods and their uses.",
      lesson: {
        sections: [
          { heading: "Primary research", body: "Collected first-hand by the business: **questionnaires**, **interviews**, **observations**, **experiments**. Advantages: specific to needs, up-to-date. Disadvantages: costly, time-consuming." },
          { heading: "Secondary research", body: "Uses existing data: government statistics, market reports, competitor websites, newspapers, surveys by others. Advantages: cheap, quick. Disadvantages: may be outdated, not specific." },
          { heading: "Choosing", body: "Businesses often combine both — secondary for background, primary for specific questions." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A café wants to know if customers prefer oat or dairy milk. Which research type?",
          solution: "Primary research — a questionnaire or observation of actual customers gives specific, current data.",
        },
      },
      questions: [
        {
          id: "olbus-u2-mr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Primary research is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Data from government reports" },
            { id: "b", text: "Data collected first-hand by the business" },
            { id: "c", text: "Data from the internet" },
            { id: "d", text: "Data from competitors" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Primary research", statement: "First-hand." }], steps: [{ reasoning: "Collected directly.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u2-mr-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two primary research methods.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Primary methods", statement: "Direct collection." }], steps: [
            { reasoning: "Questionnaires, interviews, observations, experiments — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: questionnaires, interviews, observations, experiments." },
        },
        {
          id: "olbus-u2-mr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Compare primary and secondary research — give one advantage of each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Research comparison", statement: "Trade-offs." }], steps: [
            { reasoning: "Primary: specific and up-to-date; Secondary: cheap and quick.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct comparison.", marks: 1, markCode: "AO2" },
            { reasoning: "Both advantages stated.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Primary = specific/current; secondary = cheap/fast." },
        },
        {
          id: "olbus-u2-mr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Research methods review.",
          parts: [
            { label: "a", prompt: "Define primary research.", marks: 1 },
            { label: "b", prompt: "Define secondary research.", marks: 1 },
            { label: "c", prompt: "Name two primary methods.", marks: 2 },
            { label: "d", prompt: "Name two secondary sources.", marks: 2 },
            { label: "e", prompt: "When would a business use each?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Research methods", statement: "Types, examples, use cases." },
          ], steps: [
            { part: "a", reasoning: "First-hand collection.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Existing data.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two methods.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Government stats, market reports, newspapers, competitor data — any two.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Primary for specific/current needs.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Secondary for background/general info.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear application.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) first-hand (b) existing (c) 2 methods (d) 2 sources (e) use cases" },
        },
        {
          id: "olbus-u2-mr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Secondary research uses…",
          response: { type: "mcq", choices: [
            { id: "a", text: "New product experiments" },
            { id: "b", text: "Only staff interviews" },
            { id: "c", text: "First-hand customer surveys" },
            { id: "d", text: "Data already collected by others" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Secondary research", statement: "Existing data." }], steps: [{ reasoning: "Secondary = data collected by others.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u2-mr-q6", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is a primary research method?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A newspaper article" },
            { id: "b", text: "Questionnaire" },
            { id: "c", text: "Government census data" },
            { id: "d", text: "A competitor's annual report" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Primary methods", statement: "First-hand." }], steps: [{ reasoning: "Questionnaires are collected first-hand.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Questionnaire" },
        },
        {
          id: "olbus-u2-mr-q7", difficulty: "foundation", totalMarks: 1,
          stem: "An advantage of secondary research is that it is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cheap and quick to obtain" },
            { id: "b", text: "Always up-to-date" },
            { id: "c", text: "Expensive but very reliable" },
            { id: "d", text: "Specific to your business" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Secondary research", statement: "Cheap and quick." }], steps: [{ reasoning: "Secondary data is cheap and fast but may be outdated.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-mr-q8", difficulty: "core", totalMarks: 2,
          stem: "A business conducts 60 interviews and 240 questionnaires. What is the total number of primary research responses?",
          response: { type: "numeric", parts: [{ label: "a", answer: 300, unit: "responses" }] },
          markscheme: { principles: [{ kind: "principle", name: "Research total", statement: "Sum of responses." }], steps: [
            { part: "a", reasoning: "60 + 240 = 300.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "300 responses.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 300 responses" },
        },
        {
          id: "olbus-u2-mr-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A business spends $500 on a secondary market report and $2,500 on a primary customer survey. (a) What is the total research cost? (b) How much more did the primary research cost than the secondary research?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 3000, unit: "$" },
            { label: "b", answer: 2000, unit: "$" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Research costs", statement: "Total and difference." }], steps: [
            { part: "a", reasoning: "500 + 2500 = 3000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "2500 - 500 = 2000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Primary cost $2,000 more.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $3,000; **(b)** $2,000" },
        },
        {
          id: "olbus-u2-mr-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain one advantage and one disadvantage of primary research.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Primary research", statement: "Trade-offs." }], steps: [
            { reasoning: "Advantage: specific to the business's needs and up-to-date.", marks: 1, markCode: "AO1" },
            { reasoning: "Disadvantage: costly and time-consuming.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "Specific/current but costly and slow." },
        },
        {
          id: "olbus-u2-mr-q11", difficulty: "challenge", totalMarks: 4,
          stem: "A small business has a very limited budget. Explain why it might choose secondary research first.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Secondary research", statement: "Budget choice." }], steps: [
            { reasoning: "Secondary data is cheap or free.", marks: 1, markCode: "AO2" },
            { reasoning: "Quick to obtain — saves time.", marks: 1, markCode: "AO2" },
            { reasoning: "Provides background before spending on primary research.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Secondary research is cheap, quick and gives background information first." },
        },
        {
          id: "olbus-u2-mr-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is an example of secondary research?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reading government statistics" },
            { id: "b", text: "Observing shoppers in store" },
            { id: "c", text: "Interviewing customers" },
            { id: "d", text: "Running a product experiment" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Secondary sources", statement: "Existing data." }], steps: [{ reasoning: "Government statistics are collected by others.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-mr-q13", difficulty: "core", totalMarks: 2,
          stem: "A business samples 5% of its 20,000 customers for a survey. How many customers are surveyed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1000, unit: "customers" }] },
          markscheme: { principles: [{ kind: "principle", name: "Sample size", statement: "% of population." }], steps: [
            { part: "a", reasoning: "5% × 20000 = 1000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "1,000 customers.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 1,000 customers" },
        },
        {
          id: "olbus-u2-mr-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Primary research is collected…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only by the government" },
            { id: "b", text: "Only from libraries" },
            { id: "c", text: "First-hand by the business itself" },
            { id: "d", text: "Only from competitors' websites" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Primary research", statement: "First-hand." }], steps: [{ reasoning: "Primary = collected directly by the business.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u2-mr-q15", difficulty: "core", totalMarks: 2,
          stem: "A researcher interviews 8 customers per day for 5 days. How many interviews are conducted in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "interviews" }] },
          markscheme: { principles: [{ kind: "principle", name: "Total interviews", statement: "Rate × time." }], steps: [
            { part: "a", reasoning: "8 × 5 = 40.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "40 interviews.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 40 interviews" },
        },
        {
          id: "olbus-u2-mr-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Research methods extended review.",
          parts: [
            { label: "a", prompt: "Define primary research.", marks: 1 },
            { label: "b", prompt: "Define secondary research.", marks: 1 },
            { label: "c", prompt: "Name two primary research methods.", marks: 2 },
            { label: "d", prompt: "Name two secondary research sources.", marks: 2 },
            { label: "e", prompt: "Explain when a business would use each type of research.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Research methods", statement: "Types, examples, use cases." },
          ], steps: [
            { part: "a", reasoning: "First-hand collection.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Existing data.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two methods.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Two sources.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Primary for specific/current needs.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Secondary for background/general info.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear application.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) first-hand (b) existing (c) 2 methods (d) 2 sources (e) use cases" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u2-2-1-notes", title: "Market research — notes", summary: "Purpose and methods of market research.",
      sections: [
        { heading: "Purpose", body: "Reduce uncertainty, understand customers, identify opportunities, improve decisions." },
        { heading: "Methods", body: "Primary: questionnaires, interviews, observations (specific but costly). Secondary: existing data (cheap but may be outdated)." },
      ] },
  ],
};
