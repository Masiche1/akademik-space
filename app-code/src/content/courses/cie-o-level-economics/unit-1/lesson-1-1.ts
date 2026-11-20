import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "olec-u1-lesson-1-1",
  code: "1-1",
  title: "Scarcity and Choice",
  goal: "I CAN explain scarcity, choice and opportunity cost.",
  standards: ["2281 1.1"],
  vocabulary: [
    { term: "Scarcity", definition: "Limited resources relative to unlimited wants." },
    { term: "Choice", definition: "Deciding between alternatives because of scarcity." },
    { term: "Opportunity cost", definition: "The next best alternative forgone." },
    { term: "Needs", definition: "Essential for survival (food, shelter, water)." },
    { term: "Wants", definition: "Desires beyond basic needs." },
    { term: "Economic goods", definition: "Goods that are scarce and have opportunity cost." },
    { term: "Free goods", definition: "Goods abundant enough to have no opportunity cost." },
  ],
  concepts: [
    {
      id: "olec-u1-scarcity",
      title: "Scarcity and choice",
      skill: "Explain scarcity, choice and opportunity cost with examples.",
      lesson: {
        sections: [
          { heading: "Scarcity", body: "Resources (land, labour, capital, enterprise) are limited but wants are unlimited. This forces every society to make choices about what to produce." },
          { heading: "Opportunity cost", body: "The cost of any choice is the next best alternative forgone. E.g. spending $100 on a book means giving up $100 of other goods. Time spent studying could have been spent working." },
          { heading: "Free vs economic goods", body: "Free goods (air, sunlight) are abundant — no opportunity cost. Economic goods are scarce — every use has an opportunity cost." },
        ],
        keyFormulas: [
          { name: "Opportunity cost", statement: "Next best alternative forgone" },
        ],
        workedExample: {
          problem: "You have 2 hours free. You can study economics or play football. You choose to study. What is the opportunity cost?",
          solution: "The opportunity cost is the football you didn't play — the next best alternative.",
        },
      },
      questions: [
        {
          id: "olec-u1-sc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Scarcity means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Limited resources relative to unlimited wants" }, { id: "b", text: "Everything is free" }, { id: "c", text: "Resources are unlimited" }, { id: "d", text: "Wants are limited" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Scarcity", statement: "Limited vs unlimited." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u1-sc-q2", difficulty: "core", totalMarks: 2,
          stem: "Define opportunity cost.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Opportunity cost", statement: "Next best alternative." }], steps: [
            { reasoning: "The next best alternative forgone.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "The next best alternative forgone when making a choice." },
        },
        {
          id: "olec-u1-sc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A student spends $50 on a concert ticket instead of saving it. Explain the opportunity cost.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Forgone alternative." }], steps: [
            { reasoning: "Gives up $50 that could be saved/invested.", marks: 1, markCode: "AO2" },
            { reasoning: "Or spent on another good/service.", marks: 1, markCode: "AO2" },
            { reasoning: "The next best use of $50.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "The $50 could have been saved or spent on the next best alternative." },
        },
        {
          id: "olec-u1-sc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Scarcity review.",
          parts: [
            { label: "a", prompt: "Define scarcity.", marks: 1 },
            { label: "b", prompt: "Define opportunity cost.", marks: 2 },
            { label: "c", prompt: "Free vs economic goods?", marks: 2 },
            { label: "d", prompt: "You choose pizza over burger for lunch. Opportunity cost?", marks: 2 },
            { label: "e", prompt: "Why does scarcity force choice?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Scarcity", statement: "Concepts and application." },
          ], steps: [
            { part: "a", reasoning: "Limited resources, unlimited wants.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Next best alternative forgone.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Free = abundant/no cost; economic = scarce/has cost.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "The burger forgone.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct answer.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Can't have everything; must prioritise.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) scarcity (b) OC def (c) free vs econ (d) burger (e) prioritise" },
        },
        {
          id: "olec-u1-sc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of the following is a free good?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Bottled water" }, { id: "b", text: "Sunlight" }, { id: "c", text: "A cinema ticket" }, { id: "d", text: "A school textbook" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Free goods", statement: "Abundant, no opportunity cost." }], steps: [{ reasoning: "Sunlight is abundant and has no opportunity cost.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u1-sc-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The opportunity cost of making a choice is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The total money spent on the chosen option" }, { id: "b", text: "The next best alternative forgone" }, { id: "c", text: "All the alternatives that were considered" }, { id: "d", text: "The market price of the chosen good" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Opportunity cost", statement: "Next best alternative." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u1-sc-q7", difficulty: "core", totalMarks: 1,
          stem: "A worker earns $10 per hour. He spends 3 hours studying instead of working. What is the monetary opportunity cost of studying?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3" }, { id: "b", text: "$30" }, { id: "c", text: "$13" }, { id: "d", text: "It cannot be measured" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Forgone earnings." }], steps: [{ reasoning: "3 hours x $10 = $30 of wages forgone.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** $30" },
        },
        {
          id: "olec-u1-sc-q8", difficulty: "foundation", totalMarks: 2,
          stem: "A farmer can grow either 100 kg of wheat or 50 kg of rice on his field. (a) What is the opportunity cost of 1 kg of wheat in kg of rice? (b) What is the opportunity cost of 1 kg of rice in kg of wheat?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0.5, unit: "kg rice" },
            { label: "b", answer: 2, unit: "kg wheat" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Next best alternative per unit." }], steps: [
            { part: "a", reasoning: "50/100 = 0.5 kg rice forgone per kg of wheat.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "100/50 = 2 kg wheat forgone per kg of rice.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 0.5 kg rice (b) 2 kg wheat" },
        },
        {
          id: "olec-u1-sc-q9", difficulty: "core", totalMarks: 3,
          stem: "Amara has $150. She can buy a laptop for $120 or save all of it. She buys the laptop and saves the rest. (a) How much does she spend on the laptop? (b) How much does she save? (c) What is the monetary opportunity cost of buying the laptop?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 120, unit: "dollars" },
            { label: "b", answer: 30, unit: "dollars" },
            { label: "c", answer: 120, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Savings forgone." }], steps: [
            { part: "a", reasoning: "Laptop price is $120.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "150 - 120 = $30 saved.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "She gives up $120 of savings — the next best alternative.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) $120 (b) $30 (c) $120" },
        },
        {
          id: "olec-u1-sc-q10", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is an example of an economic good?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Air" }, { id: "b", text: "Sunlight" }, { id: "c", text: "Bottled water" }, { id: "d", text: "Rain" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Economic goods", statement: "Scarce, have opportunity cost." }], steps: [{ reasoning: "Bottled water is scarce and must be produced.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u1-sc-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Kofi can earn $15 per hour. On Tuesday evening he spends 4 hours studying economics instead of working a part-time job. (a) What is his hourly wage? (b) How many hours does he spend studying? (c) What is the monetary opportunity cost of studying?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 15, unit: "dollars per hour" },
            { label: "b", answer: 4, unit: "hours" },
            { label: "c", answer: 60, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Value of next best alternative." }], steps: [
            { part: "a", reasoning: "Wage is $15 per hour.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "4 hours are spent studying.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "4 x 15 = $60 of earnings forgone.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "The next best use of those hours was paid work.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) $15 (b) 4 hours (c) $60" },
        },
        {
          id: "olec-u1-sc-q12", difficulty: "core", totalMarks: 2,
          stem: "Distinguish between needs and wants, giving one example of each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Needs vs wants", statement: "Essential vs desire." }], steps: [
            { reasoning: "Needs are essential for survival; wants are desires beyond needs.", marks: 1, markCode: "AO1" },
            { reasoning: "Example given for each (e.g. food/water vs a concert ticket).", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Needs are essentials for survival; wants are desires beyond basic needs." },
        },
        {
          id: "olec-u1-sc-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A government has limited funds and must choose between building a new hospital and a new sports stadium. Explain the opportunity cost of building the stadium.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Forgone alternative." }], steps: [
            { reasoning: "Limited funds mean only one project can be built.", marks: 1, markCode: "AO2" },
            { reasoning: "The next best alternative — the hospital — is forgone.", marks: 1, markCode: "AO2" },
            { reasoning: "The opportunity cost is the health benefits the hospital would have provided.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation linking choice and forgone benefit.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "The opportunity cost is the hospital that could have been built instead." },
        },
        {
          id: "olec-u1-sc-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which statement about opportunity cost is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is always the cheapest option available" }, { id: "b", text: "It is the next best alternative forgone" }, { id: "c", text: "It only applies to money spent" }, { id: "d", text: "It is the same for every decision maker" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Opportunity cost", statement: "Next best alternative." }], steps: [{ reasoning: "Correct statement.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u1-sc-q15", difficulty: "challenge", totalMarks: 4,
          stem: "An economy can produce either 200 cars or 400 lorries using all its resources. (a) What is the opportunity cost of producing 1 car in terms of lorries? (b) If the economy chooses to produce 150 cars, how many lorries must it give up?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2, unit: "lorries" },
            { label: "b", answer: 300, unit: "lorries" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Trade-off ratio." }], steps: [
            { part: "a", reasoning: "400/200 = 2 lorries forgone per car.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "150 x 2 = 300 lorries forgone.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Resources shifted from lorries to cars.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct calculation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 2 lorries (b) 300 lorries" },
        },
        {
          id: "olec-u1-sc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Scarcity and choice review.",
          parts: [
            { label: "a", prompt: "Define scarcity.", marks: 1 },
            { label: "b", prompt: "Distinguish needs from wants with examples.", marks: 2 },
            { label: "c", prompt: "Give one example of a free good and one of an economic good.", marks: 2 },
            { label: "d", prompt: "A student gives up 5 hours of paid work at $12 per hour to revise. Calculate the monetary opportunity cost.", marks: 2 },
            { label: "e", prompt: "Explain why scarcity forces every society to make choices.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Scarcity", statement: "Definitions and application." },
          ], steps: [
            { part: "a", reasoning: "Limited resources relative to unlimited wants.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Needs = essential; wants = desires.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Examples given for each.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Free good e.g. air; economic good e.g. bread.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct distinction with examples.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "5 x $12 = $60 of earnings forgone.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct answer.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Cannot produce/have everything; must prioritise.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) scarcity (b) needs/wants (c) free vs econ (d) $60 (e) prioritise" },
        },
      ],
    },
    {
      id: "olec-u1-factors",
      title: "Factors of Production",
      skill: "Identify the four factors of production and their rewards.",
      lesson: {
        sections: [
          { heading: "Four factors", body: "- **Land**: natural resources — reward = rent.\n- **Labour**: human effort — reward = wages.\n- **Capital**: man-made resources (machinery, tools) — reward = interest/profit.\n- **Enterprise**: entrepreneurship/risk-taking — reward = profit." },
          { heading: "Productivity", body: "Output per unit of input. Higher productivity = more output for same resources. Improved by training, technology, better management." },
          { heading: "Specialisation", body: "Focusing on specific tasks increases efficiency (division of labour) but may reduce job satisfaction." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A farmer uses a tractor on his field with hired workers. Identify the factors.",
          solution: "Land = field; Labour = workers; Capital = tractor; Enterprise = farmer's management and risk-taking.",
        },
      },
      questions: [
        {
          id: "olec-u1-fp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The four factors of production are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Land, labour, capital, enterprise" }, { id: "b", text: "Money, machines, materials, management" }, { id: "c", text: "Land, labour, money, skills" }, { id: "d", text: "Capital, labour, land, profit" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Factors", statement: "L,L,C,E." }], steps: [{ reasoning: "Correct four.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u1-fp-q2", difficulty: "core", totalMarks: 2,
          stem: "Match each factor to its reward.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Rewards", statement: "Rent, wages, interest, profit." }], steps: [
            { reasoning: "Land→rent, Labour→wages, Capital→interest, Enterprise→profit.", marks: 1, markCode: "AO1" },
            { reasoning: "All matched.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Land=rent, Labour=wages, Capital=interest, Enterprise=profit." },
        },
        {
          id: "olec-u1-fp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between land and capital as factors of production.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Land vs capital", statement: "Natural vs man-made." }], steps: [
            { reasoning: "Land = natural resources (unchanged by humans).", marks: 1, markCode: "AO1" },
            { reasoning: "Capital = man-made resources (tools, machinery).", marks: 1, markCode: "AO1" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Land is natural; capital is man-made." },
        },
        {
          id: "olec-u1-fp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Factors of production review.",
          parts: [
            { label: "a", prompt: "List the four factors.", marks: 2 },
            { label: "b", prompt: "Give each reward.", marks: 2 },
            { label: "c", prompt: "Define capital.", marks: 1 },
            { label: "d", prompt: "Define enterprise.", marks: 1 },
            { label: "e", prompt: "Identify factors in: a bakery using ovens, bakers, flour mill, owner's management.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Factors", statement: "Definitions and application." },
          ], steps: [
            { part: "a", reasoning: "Land, labour, capital, enterprise.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "All four.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Rent, wages, interest, profit.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "All matched.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Man-made resources.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Risk-taking and organisation.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Land=mill site, Labour=bakers, Capital=ovens, Enterprise=management.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "All identified.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Correct mapping.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 4 factors (b) rewards (c) man-made (d) risk (e) all mapped" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u1-1-1-notes", title: "Economic problem — notes", summary: "Scarcity, opportunity cost and factors of production.",
      sections: [
        { heading: "Scarcity", body: "Limited resources vs unlimited wants forces choice; opportunity cost = next best alternative." },
        { heading: "Factors", body: "Land→rent, Labour→wages, Capital→interest, Enterprise→profit." },
      ] },
  ],
};
