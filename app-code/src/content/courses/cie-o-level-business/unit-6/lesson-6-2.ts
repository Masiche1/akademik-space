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
            { id: "a", text: "Buying and selling online" }, { id: "b", text: "Traditional retail" }, { id: "c", text: "Factory production" }, { id: "d", text: "Banking only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "E-commerce", statement: "Online trade." }], steps: [{ reasoning: "Online buying/selling.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
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
            { id: "a", text: "Paying workers at least the legal minimum" }, { id: "b", text: "Free housing" }, { id: "c", text: "Unlimited holidays" }, { id: "d", text: "No working hours limit" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Minimum wage", statement: "Legal pay floor." }], steps: [{ reasoning: "Minimum pay required.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
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
