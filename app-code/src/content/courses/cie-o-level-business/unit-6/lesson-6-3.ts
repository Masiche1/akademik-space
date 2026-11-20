import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "olbus-u6-lesson-6-3",
  code: "6-3",
  title: "Competition and Globalisation",
  goal: "I CAN explain competitive forces and the impact of globalisation on business.",
  standards: ["7100 6.3"],
  vocabulary: [
    { term: "Competition", definition: "Rivalry between businesses for customers." },
    { term: "Market share", definition: "Percentage of total market sales a business holds." },
    { term: "Competitive advantage", definition: "Edge that makes a business more successful than rivals." },
    { term: "Globalisation", definition: "Increasing interconnectedness of world economies." },
    { term: "Multinational", definition: "Company operating in multiple countries." },
    { term: "Outsourcing", definition: "Contracting work to external providers, often abroad." },
    { term: "Market saturation", definition: "When a market is fully supplied with no growth." },
  ],
  concepts: [
    {
      id: "olbus-u6-competition",
      title: "Competition",
      skill: "Explain how competition affects business strategy and performance.",
      lesson: {
        sections: [
          { heading: "Types of competition", body: "Perfect competition (many small firms), oligopoly (few large firms), monopoly (one dominant firm). More competition = more pressure on prices and quality." },
          { heading: "Competitive advantage", body: "Businesses compete on price, quality, service, innovation, brand. Sustainable advantage = hard for rivals to copy." },
          { heading: "Responding", body: "Businesses respond by differentiating products, improving efficiency, investing in marketing, or merging with rivals." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A new coffee shop opens next door to an established one. How might the established shop respond?",
          solution: "Improve quality/service, differentiate (unique menu), loyalty programs, or reduce prices selectively.",
        },
      },
      questions: [
        {
          id: "olbus-u6-comp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Market share is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Percentage of total market sales" }, { id: "b", text: "Total sales" }, { id: "c", text: "Number of competitors" }, { id: "d", text: "Market size" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Market share", statement: "% of market." }], steps: [{ reasoning: "Share of sales.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-comp-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two ways businesses compete.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Competition", statement: "Competitive factors." }], steps: [
            { reasoning: "Price, quality, service, innovation, brand — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: price, quality, service, innovation, brand." },
        },
        {
          id: "olbus-u6-comp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why intense competition can be good for consumers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Competition benefits", statement: "Consumer impact." }], steps: [
            { reasoning: "Drives prices down.", marks: 1, markCode: "AO2" },
            { reasoning: "Improves quality and choice.", marks: 1, markCode: "AO2" },
            { reasoning: "Encourages innovation.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Competition lowers prices, improves quality and drives innovation." },
        },
        {
          id: "olbus-u6-comp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Competition review.",
          parts: [
            { label: "a", prompt: "Define market share.", marks: 1 },
            { label: "b", prompt: "Name two competitive factors.", marks: 2 },
            { label: "c", prompt: "What is competitive advantage?", marks: 2 },
            { label: "d", prompt: "How can businesses respond to new competitors?", marks: 2 },
            { label: "e", prompt: "Monopoly vs perfect competition?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Competition", statement: "Concepts and strategy." },
          ], steps: [
            { part: "a", reasoning: "% of market sales.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Price, quality, service, innovation, brand — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Edge over rivals.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Differentiate, improve, innovate, merge.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear responses.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Monopoly=one firm; perfect=many small firms.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 2 factors (c) edge (d) responses (e) monopoly vs perfect" },
        },
      ],
    },
    {
      id: "olbus-u6-global",
      title: "Globalisation",
      skill: "Explain the opportunities and challenges of globalisation for business.",
      lesson: {
        sections: [
          { heading: "What is globalisation?", body: "Increased interconnectedness — businesses operate across borders, trade internationally, and face global competition." },
          { heading: "Opportunities", body: "Access to larger markets, cheaper labour/materials, economies of scale, diversification of risk." },
          { heading: "Challenges", body: "Intense competition, cultural differences, exchange rate risk, complex regulations, outsourcing controversies." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A clothing brand manufactures in Vietnam and sells worldwide. Name one opportunity and one challenge.",
          solution: "Opportunity: lower production costs. Challenge: exchange rate risk and complex logistics.",
        },
      },
      questions: [
        {
          id: "olbus-u6-glob-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Globalisation refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increasing interconnectedness of world economies" }, { id: "b", text: "One country only" }, { id: "c", text: "Local trade only" }, { id: "d", text: "Internet shutdown" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Globalisation", statement: "World interconnectedness." }], steps: [{ reasoning: "Global economic integration.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-glob-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two opportunities of globalisation for business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation opportunities", statement: "Benefits." }], steps: [
            { reasoning: "Larger markets, cheaper inputs, economies of scale, diversification — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: larger markets, cheaper inputs, scale economies, risk diversification." },
        },
        {
          id: "olbus-u6-glob-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two challenges businesses face from globalisation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation challenges", statement: "Difficulties." }], steps: [
            { reasoning: "Intense international competition.", marks: 1, markCode: "AO2" },
            { reasoning: "Exchange rate risk / cultural differences / regulations.", marks: 1, markCode: "AO2" },
            { reasoning: "Two explained.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Competition, exchange rate risk, cultural/regulatory complexity." },
        },
        {
          id: "olbus-u6-glob-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Globalisation review.",
          parts: [
            { label: "a", prompt: "Define globalisation.", marks: 1 },
            { label: "b", prompt: "Two opportunities?", marks: 2 },
            { label: "c", prompt: "Two challenges?", marks: 2 },
            { label: "d", prompt: "What is outsourcing?", marks: 2 },
            { label: "e", prompt: "Advantage and disadvantage of outsourcing?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Globalisation", statement: "Concepts and impacts." },
          ], steps: [
            { part: "a", reasoning: "World economic interconnectedness.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Larger markets, cheaper inputs — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Competition, exchange risk — any two.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Contracting work to external providers.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Adv: lower costs. Disadv: job losses/quality control.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) def (b) 2 opps (c) 2 challenges (d) outsourcing def (e) adv/disadv" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u6-6-3-notes", title: "Competition and globalisation — notes", summary: "Competitive forces and global business impacts.",
      sections: [
        { heading: "Competition", body: "Compete on price, quality, service, innovation; market share tracks position." },
        { heading: "Globalisation", body: "Opportunities: markets, costs, scale. Challenges: competition, exchange rates, regulations." },
      ] },
  ],
};
