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
            { id: "a", text: "An organisation producing goods/services to satisfy needs" }, { id: "b", text: "Any organisation making money" }, { id: "c", text: "A government department" }, { id: "d", text: "A charity" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Business", statement: "Produces goods/services for needs." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
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
            { id: "a", text: "Its customers" }, { id: "b", text: "The weather" }, { id: "c", text: "A distant planet" }, { id: "d", text: "Nothing else" },
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
            { id: "a", text: "Meeting or exceeding customer expectations" }, { id: "b", text: "Charging the highest prices" }, { id: "c", text: "Reducing staff numbers" }, { id: "d", text: "Avoiding all complaints" },
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
            { id: "a", text: "Making a profit while surviving" }, { id: "b", text: "Maximising market share globally" }, { id: "c", text: "Becoming a public company" }, { id: "d", text: "Minimising tax only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Objectives", statement: "Context-dependent." }], steps: [{ reasoning: "Small businesses focus on profit and survival.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Profit and survival" },
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
            { id: "a", text: "Profit" }, { id: "b", text: "Rent" }, { id: "c", text: "Wages" }, { id: "d", text: "Interest" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Rewards", statement: "Rent, wages, interest, profit." }], steps: [{ reasoning: "Enterprise earns profit.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Profit" },
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
            { id: "a", text: "Survival" }, { id: "b", text: "Profit maximisation" }, { id: "c", text: "Customer satisfaction" }, { id: "d", text: "Eliminating all competitors by law" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Objectives", statement: "Legitimate goals." }], steps: [{ reasoning: "Not a legitimate objective.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Not a typical objective" },
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
            { id: "a", text: "Land, labour, capital, enterprise" }, { id: "b", text: "Money, machines, materials, management" }, { id: "c", text: "Land, labour, money, skills" }, { id: "d", text: "Capital, labour, land, profit" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Factors", statement: "L, L, C, E." }], steps: [{ reasoning: "Correct four.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
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
