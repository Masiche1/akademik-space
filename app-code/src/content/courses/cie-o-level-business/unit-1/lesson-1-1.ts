import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "olbus-u1-lesson-1-1",
  code: "1-1",
  title: "What is Business?",
  goal: "I CAN define business, explain the purpose of business activity and identify stakeholders.",
  standards: ["7100 1.1"],
  vocabulary: [
    { term: "Business", definition: "An organisation that produces goods or services to satisfy customer needs." },
    { term: "Enterprise", definition: "The activity of creating and running a business, taking risks for profit." },
    { term: "Stakeholder", definition: "Anyone affected by or with an interest in a business." },
    { term: "Producer", definition: "Entity that creates goods or provides services." },
    { term: "Consumer", definition: "Person who buys and uses goods/services." },
    { term: "Value added", definition: "Increase in value from transforming inputs into outputs." },
  ],
  concepts: [
    {
      id: "olbus-u1-what",
      title: "Purpose of business",
      skill: "Explain why businesses exist and what they aim to achieve.",
      lesson: {
        sections: [
          { heading: "Definition", body: "A business organises resources (people, money, materials) to produce goods or services that satisfy customer needs, aiming to make a profit. Businesses can be sole traders, partnerships, companies or cooperatives." },
          { heading: "Objectives", body: "Common objectives: **survival**, **profit maximisation**, **market share growth**, **customer satisfaction**, **social responsibility**. Objectives vary by business size and stage." },
          { heading: "Stakeholders", body: "Owners, employees, customers, suppliers, government and the local community all have interests in the business — decisions must consider their needs." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A bakery buys flour and makes bread. Identify producer, consumer and value added.",
          solution: "Bakery = producer; customer = consumer; value added = bread price minus cost of flour and other inputs.",
        },
      },
      questions: [
        {
          id: "olbus-u1-wh-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A business is best defined as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A government department" },
            { id: "b", text: "A charity" },
            { id: "c", text: "Any organisation making money" },
            { id: "d", text: "An organisation producing goods/services to satisfy needs" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Business", statement: "Produces goods/services for needs." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u1-wh-q2", difficulty: "core", totalMarks: 2,
          stem: "Name three possible business objectives.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Objectives", statement: "Business goals." }], steps: [
            { reasoning: "Survival, profit, market share, customer satisfaction, social responsibility.", marks: 1, markCode: "AO1" },
            { reasoning: "Three listed.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any three: survival, profit maximisation, market share, customer satisfaction, social responsibility." },
        },
        {
          id: "olbus-u1-wh-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a new business might prioritise survival over profit maximisation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Objectives", statement: "Context-dependent goals." }], steps: [
            { reasoning: "New businesses face high failure risk and limited cash.", marks: 1, markCode: "AO2" },
            { reasoning: "Survival ensures the business continues operating.", marks: 1, markCode: "AO2" },
            { reasoning: "Profit may be sacrificed to build customer base/reputation.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Survival secures existence; profit can follow once established." },
        },
        {
          id: "olbus-u1-wh-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Business activity review.",
          parts: [
            { label: "a", prompt: "Define business.", marks: 2 },
            { label: "b", prompt: "Name three stakeholders.", marks: 2 },
            { label: "c", prompt: "List three business objectives.", marks: 2 },
            { label: "d", prompt: "Why might objectives conflict?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Business", statement: "Definition, stakeholders, objectives." },
          ], steps: [
            { part: "a", reasoning: "Organisation producing goods/services for needs.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Owners, employees, customers, suppliers, government, community — any three.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Three named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Three objectives named.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "E.g. profit vs employee welfare; growth vs quality.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains tension.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) definition (b) 3 stakeholders (c) 3 objectives (d) conflicting goals" },
        },
        {
          id: "olbus-u1-wh-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of the following is a stakeholder in a business?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Its customers" },
            { id: "b", text: "Nothing else" },
            { id: "c", text: "A distant planet" },
            { id: "d", text: "The weather" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Stakeholder", statement: "Anyone with an interest." }], steps: [{ reasoning: "Customers have an interest in the business.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Customers are stakeholders" },
        },
        {
          id: "olbus-u1-wh-q6", difficulty: "core", totalMarks: 2,
          stem: "Name two ways a business might measure its success.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Success measures", statement: "Indicators of performance." }], steps: [
            { reasoning: "Profit, market share, customer satisfaction, sales growth — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: profit, market share, customer satisfaction, sales growth." },
        },
        {
          id: "olbus-u1-wh-q7", difficulty: "core", totalMarks: 2,
          stem: "Define 'value added' in business activity.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Value added", statement: "Increase in value." }], steps: [
            { reasoning: "The increase in value from transforming inputs into outputs.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Value added = output value minus input costs — the value created by production." },
        },
        {
          id: "olbus-u1-wh-q8", difficulty: "core", totalMarks: 1,
          stem: "A business objective of 'customer satisfaction' means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Meeting or exceeding customer expectations" },
            { id: "b", text: "Reducing staff numbers" },
            { id: "c", text: "Avoiding all complaints" },
            { id: "d", text: "Charging the highest prices" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Customer satisfaction", statement: "Meeting needs." }], steps: [{ reasoning: "Satisfying customer needs/expectations.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u1-wh-q9", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how the interests of different stakeholders might conflict in a business decision.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Stakeholder conflict", statement: "Competing interests." }], steps: [
            { reasoning: "Owners want profit; employees want higher pay or better conditions.", marks: 1, markCode: "AO2" },
            { reasoning: "Customers want low prices; suppliers want higher prices.", marks: 1, markCode: "AO2" },
            { reasoning: "Government wants tax and jobs; community wants environmental care.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of tension.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Different stakeholders want different outcomes — decisions involve trade-offs." },
        },
        {
          id: "olbus-u1-wh-q10", difficulty: "core", totalMarks: 1,
          stem: "A sole trader's most common objective is usually…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Maximising market share globally" },
            { id: "b", text: "Making a profit while surviving" },
            { id: "c", text: "Becoming a public company" },
            { id: "d", text: "Minimising tax only" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Objectives", statement: "Context-dependent." }], steps: [{ reasoning: "Small businesses focus on profit and survival.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Profit and survival" },
        },
        {
          id: "olbus-u1-wh-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Discuss whether profit maximisation should always be a business's main objective.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Objectives", statement: "Profit vs other goals." }], steps: [
            { reasoning: "Profit rewards owners and funds growth.", marks: 1, markCode: "AO2" },
            { reasoning: "But other objectives (survival, satisfaction, responsibility) may matter more.", marks: 1, markCode: "AO2" },
            { reasoning: "Depends on business size, stage and stakeholder pressures.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced discussion.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Profit matters but is not always the only or main objective." },
        },
        {
          id: "olbus-u1-wh-q12", difficulty: "core", totalMarks: 2,
          stem: "Give one example of a business pursuing social responsibility.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Social responsibility", statement: "Beyond profit." }], steps: [
            { reasoning: "E.g. fair-trade sourcing, reducing emissions, community investment.", marks: 1, markCode: "AO1" },
            { reasoning: "Valid example.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any valid example: fair trade, environmental care, community support." },
        },
        {
          id: "olbus-u1-wh-q13", difficulty: "foundation", totalMarks: 1,
          stem: "The reward for the enterprise factor of production is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rent" },
            { id: "b", text: "Profit" },
            { id: "c", text: "Interest" },
            { id: "d", text: "Wages" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Rewards", statement: "Rent, wages, interest, profit." }], steps: [{ reasoning: "Enterprise earns profit.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Profit" },
        },
        {
          id: "olbus-u1-wh-q14", difficulty: "core", totalMarks: 2,
          stem: "Why do businesses need to understand their stakeholders?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Stakeholders", statement: "Why they matter." }], steps: [
            { reasoning: "Decisions affect stakeholders; ignoring them risks conflict and failure.", marks: 1, markCode: "AO2" },
            { reasoning: "Helps balance competing interests.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Stakeholders affect and are affected by the business — understanding them improves decisions." },
        },
        {
          id: "olbus-u1-wh-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A company cuts prices to gain market share. Identify two stakeholders affected and explain how each is affected.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Stakeholder impact", statement: "Effects of decisions." }], steps: [
            { reasoning: "Customers benefit from lower prices.", marks: 1, markCode: "AO2" },
            { reasoning: "Owners may see lower profit margins in the short term.", marks: 1, markCode: "AO2" },
            { reasoning: "Competitors may be forced to respond; suppliers may face pressure.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear link to decision.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "E.g. customers gain, owners lose margin, competitors respond." },
        },
        {
          id: "olbus-u1-wh-q16", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is NOT a typical business objective?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Profit maximisation" },
            { id: "b", text: "Customer satisfaction" },
            { id: "c", text: "Eliminating all competitors by law" },
            { id: "d", text: "Survival" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Objectives", statement: "Legitimate goals." }], steps: [{ reasoning: "Not a legitimate objective.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Not a typical objective" },
        },
      ],
    },
    {
      id: "olbus-u1-factors",
      title: "Factors of Production",
      skill: "Identify and explain the four factors of production and their rewards.",
      lesson: {
        sections: [
          { heading: "The four factors", body: "- **Land**: natural resources — reward = rent.\n- **Labour**: human effort — reward = wages.\n- **Capital**: man-made tools/machinery — reward = interest/profit.\n- **Enterprise**: risk-taking and organisation — reward = profit." },
          { heading: "Combination", body: "Businesses combine factors to produce goods/services. The entrepreneur coordinates the other three factors and bears risk." },
          { heading: "Example", body: "A farm uses land (field), labour (workers), capital (tractor) and enterprise (farmer's management) to grow crops." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A car manufacturer uses robots on an assembly line. Identify the factors of production.",
          solution: "Land = factory site; Labour = workers/engineers; Capital = robots/machinery; Enterprise = management's organisation and risk-taking.",
        },
      },
      questions: [
        {
          id: "olbus-u1-ff-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The four factors of production are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Land, labour, money, skills" },
            { id: "b", text: "Land, labour, capital, enterprise" },
            { id: "c", text: "Capital, labour, land, profit" },
            { id: "d", text: "Money, machines, materials, management" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Factors", statement: "L, L, C, E." }], steps: [{ reasoning: "Correct four.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u1-ff-q2", difficulty: "core", totalMarks: 2,
          stem: "Match each factor to its reward.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Rewards", statement: "Rent, wages, interest, profit." }], steps: [
            { reasoning: "Land→rent, Labour→wages, Capital→interest, Enterprise→profit.", marks: 1, markCode: "AO1" },
            { reasoning: "All matched.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Land=rent, Labour=wages, Capital=interest, Enterprise=profit." },
        },
        {
          id: "olbus-u1-ff-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the role of enterprise in a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Enterprise", statement: "Risk + organisation." }], steps: [
            { reasoning: "Entrepreneur organises other factors.", marks: 1, markCode: "AO2" },
            { reasoning: "Bears risk of failure.", marks: 1, markCode: "AO2" },
            { reasoning: "Makes decisions and innovates.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Enterprise coordinates factors, takes risk, and earns profit as reward." },
        },
        {
          id: "olbus-u1-ff-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Factors of production review.",
          parts: [
            { label: "a", prompt: "List the four factors.", marks: 2 },
            { label: "b", prompt: "Give each factor's reward.", marks: 2 },
            { label: "c", prompt: "Define capital.", marks: 1 },
            { label: "d", prompt: "Define enterprise.", marks: 1 },
            { label: "e", prompt: "Identify factors in: a restaurant using a building, cooks, ovens, owner's management.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Factors", statement: "Definitions and application." },
          ], steps: [
            { part: "a", reasoning: "Land, labour, capital, enterprise.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "All four.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Rent, wages, interest, profit.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "All matched.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Man-made resources for production.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Risk-taking and organisation.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Land=building, Labour=cooks, Capital=ovens, Enterprise=management.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "All identified.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Correct mapping.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 4 factors (b) rewards (c) man-made (d) risk (e) all mapped" },
        },
        {
          id: "olbus-u1-ff-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which factor of production refers to natural resources such as land and raw materials?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Labour" },
            { id: "b", text: "Capital" },
            { id: "c", text: "Enterprise" },
            { id: "d", text: "Land" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Land", statement: "Natural resources." }], steps: [{ reasoning: "Land = natural resources.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Land" },
        },
        {
          id: "olbus-u1-ff-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The reward for the labour factor of production is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Interest" },
            { id: "b", text: "Rent" },
            { id: "c", text: "Wages" },
            { id: "d", text: "Profit" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Rewards", statement: "Rent, wages, interest, profit." }], steps: [{ reasoning: "Labour earns wages.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Wages" },
        },
        {
          id: "olbus-u1-ff-q7", difficulty: "core", totalMarks: 2,
          stem: "A farmer sells crops for 9000 and spends 6000 on seeds, fuel and wages. Calculate the profit — the reward earned by the enterprise factor.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Profit", statement: "Revenue minus costs." }], steps: [
            { part: "a", reasoning: "Profit = revenue − costs = 9000 − 6000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Profit = 3000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 3000" },
        },
        {
          id: "olbus-u1-ff-q8", difficulty: "core", totalMarks: 2,
          stem: "Give one example of capital used by a school and state which reward capital earns.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Capital", statement: "Man-made resources." }], steps: [
            { reasoning: "E.g. computers, desks, buildings, buses — man-made resources.", marks: 1, markCode: "AO1" },
            { reasoning: "Capital earns interest (or profit).", marks: 1, markCode: "AO2" },
          ], finalAnswer: "E.g. computers — capital earns interest/profit." },
        },
        {
          id: "olbus-u1-ff-q9", difficulty: "core", totalMarks: 1,
          stem: "An entrepreneur who organises land, labour and capital and bears the risk of failure represents which factor of production?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Enterprise" },
            { id: "b", text: "Labour" },
            { id: "c", text: "Land" },
            { id: "d", text: "Capital" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Enterprise", statement: "Risk and organisation." }], steps: [{ reasoning: "Organisation + risk-taking = enterprise.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Enterprise" },
        },
        {
          id: "olbus-u1-ff-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain why capital is called a 'man-made' factor of production.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Capital", statement: "Man-made resources." }], steps: [
            { reasoning: "Capital is produced by humans (tools, machines, buildings).", marks: 1, markCode: "AO1" },
            { reasoning: "Unlike land it does not exist naturally.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Capital is created by people through production, unlike natural land." },
        },
        {
          id: "olbus-u1-ff-q11", difficulty: "challenge", totalMarks: 4,
          stem: "A furniture workshop uses a workshop building, carpenters, machinery and the owner's management. Identify the factor of production represented by each item and state the reward earned by enterprise.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Factors", statement: "Identification and rewards." }], steps: [
            { reasoning: "Building = land; carpenters = labour; machinery = capital; management = enterprise.", marks: 1, markCode: "AO2" },
            { reasoning: "All four correctly identified.", marks: 1, markCode: "AO2" },
            { reasoning: "Enterprise earns profit.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear mapping.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Land=building, labour=carpenters, capital=machinery, enterprise=management; enterprise earns profit." },
        },
        {
          id: "olbus-u1-ff-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Discuss the difference between capital and enterprise as factors of production.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Capital vs enterprise", statement: "Distinct roles." }], steps: [
            { reasoning: "Capital = man-made resources (tools, machines) used in production.", marks: 1, markCode: "AO1" },
            { reasoning: "Enterprise = the entrepreneur's organisation and risk-taking.", marks: 1, markCode: "AO1" },
            { reasoning: "Capital is passive; enterprise actively coordinates and decides.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear contrast.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Capital is the physical tools; enterprise is the risk-taking organisation of all factors." },
        },
        {
          id: "olbus-u1-ff-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Which reward does the capital factor of production earn?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Wages" },
            { id: "b", text: "Interest" },
            { id: "c", text: "Rent" },
            { id: "d", text: "Profit" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Rewards", statement: "Rent, wages, interest, profit." }], steps: [{ reasoning: "Capital earns interest (and profit).", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Interest" },
        },
        {
          id: "olbus-u1-ff-q14", difficulty: "core", totalMarks: 2,
          stem: "Name two of the rewards earned by the factors of production.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Rewards", statement: "Factor payments." }], steps: [
            { reasoning: "Rent, wages, interest, profit — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: rent, wages, interest, profit." },
        },
        {
          id: "olbus-u1-ff-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A business fails and the owner loses personal savings while workers are still paid their wages. Explain which factor bore the risk and why this happens.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Enterprise", statement: "Bears risk." }], steps: [
            { reasoning: "Enterprise/entrepreneur bears the risk of failure.", marks: 1, markCode: "AO2" },
            { reasoning: "Workers (labour) are paid wages regardless of profit.", marks: 1, markCode: "AO2" },
            { reasoning: "Owner's reward is profit, which can be zero or negative.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "The entrepreneur bears risk — profit is uncertain while wages are fixed payments." },
        },
        {
          id: "olbus-u1-ff-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a business combines the four factors of production, using a bakery as an example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Combination", statement: "Factors together." }], steps: [
            { reasoning: "Land: bakery premises; Labour: bakers; Capital: ovens; Enterprise: owner-entrepreneur.", marks: 1, markCode: "AO2" },
            { reasoning: "Factors are combined to produce bread.", marks: 1, markCode: "AO2" },
            { reasoning: "Each factor receives its reward (rent, wages, interest, profit).", marks: 1, markCode: "AO2" },
            { reasoning: "Coherent example.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "A bakery combines land (premises), labour (bakers), capital (ovens) and enterprise (owner) to produce bread." },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u1-1-1-notes", title: "Business basics — notes", summary: "Purpose, objectives, stakeholders and factors of production.",
      sections: [
        { heading: "Business", body: "Organises resources to produce goods/services for profit; objectives vary (survival, profit, growth)." },
        { heading: "Factors", body: "Land→rent, Labour→wages, Capital→interest, Enterprise→profit." },
      ] },
  ],
};
