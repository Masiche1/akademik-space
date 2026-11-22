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
            { id: "a", text: "Market size" },
            { id: "b", text: "Total sales" },
            { id: "c", text: "Number of competitors" },
            { id: "d", text: "Percentage of total market sales" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Market share", statement: "% of market." }], steps: [{ reasoning: "Share of sales.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
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
        {
          id: "olbus-u6-comp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An oligopoly is a market dominated by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Many tiny firms" },
            { id: "b", text: "One single firm" },
            { id: "c", text: "A few large firms" },
            { id: "d", text: "Only foreign firms" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Oligopoly", statement: "Few firms." }], steps: [{ reasoning: "Oligopoly = few large firms.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u6-comp-q6", difficulty: "foundation", totalMarks: 1,
          stem: "A monopoly exists when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Many small firms compete" },
            { id: "b", text: "One firm dominates the market" },
            { id: "c", text: "Prices are always low" },
            { id: "d", text: "There is perfect competition" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Monopoly", statement: "One dominant firm." }], steps: [{ reasoning: "Monopoly = single dominant seller.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u6-comp-q7", difficulty: "core", totalMarks: 1,
          stem: "Product differentiation means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lowering prices below cost" },
            { id: "b", text: "Producing identical goods" },
            { id: "c", text: "Buying out all competitors" },
            { id: "d", text: "Making a product distinct from rivals' products" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Differentiation", statement: "Distinct product." }], steps: [{ reasoning: "Differentiation makes product unique.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u6-comp-q8", difficulty: "core", totalMarks: 1,
          stem: "Competing on price means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Building brand loyalty" },
            { id: "b", text: "Expanding abroad" },
            { id: "c", text: "Improving product quality" },
            { id: "d", text: "Offering lower prices than competitors" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Price competition", statement: "Cost leadership." }], steps: [{ reasoning: "Price competition = lower prices.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u6-comp-q9", difficulty: "core", totalMarks: 1,
          stem: "Market saturation occurs when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All firms are profitable" },
            { id: "b", text: "Prices fall to zero" },
            { id: "c", text: "A new product launches" },
            { id: "d", text: "The market is fully supplied with little room for growth" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Market saturation", statement: "No growth." }], steps: [{ reasoning: "Saturation = market fully supplied.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u6-comp-q10", difficulty: "core", totalMarks: 2,
          stem: "A firm records sales of $2,000,000 in a market worth $10,000,000. Calculate its market share as a percentage.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: { principles: [{ kind: "principle", name: "Market share", statement: "Firm sales/market x 100." }], steps: [
            { part: "a", reasoning: "Market share = 2000000/10000000 x 100 = 20%.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Market share = 20%.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 20" },
        },
        {
          id: "olbus-u6-comp-q11", difficulty: "challenge", totalMarks: 2,
          stem: "A firm raises its market share from 10% to 15% of a $5,000,000 market. Calculate its current sales.",
          response: { type: "numeric", parts: [{ label: "a", answer: 750000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Market share", statement: "Share x market." }], steps: [
            { part: "a", reasoning: "Sales = 15% of 5000000 = 750000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Sales = 750000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 750000" },
        },
        {
          id: "olbus-u6-comp-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Firm A has sales of $1,200,000 and Firm B has sales of $800,000 in a market worth $4,000,000. Calculate their combined market share.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50 }] },
          markscheme: { principles: [{ kind: "principle", name: "Combined share", statement: "Sum/market." }], steps: [
            { part: "a", reasoning: "Combined = 2000000/4000000 x 100 = 50%.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Combined share = 50%.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 50" },
        },
        {
          id: "olbus-u6-comp-q13", difficulty: "challenge", totalMarks: 2,
          stem: "A business cuts its price from $50 to $40 per unit and still sells 1,000 units. Calculate the new total revenue.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Revenue", statement: "Price x quantity." }], steps: [
            { part: "a", reasoning: "Revenue = 40 x 1000 = 40000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Revenue = 40000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 40000" },
        },
        {
          id: "olbus-u6-comp-q14", difficulty: "core", totalMarks: 2,
          stem: "Explain two ways a business can gain a competitive advantage.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Competitive advantage", statement: "Edge sources." }], steps: [
            { reasoning: "Lower costs, unique product, strong brand, better service — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: cost leadership, differentiation, brand, innovation." },
        },
        {
          id: "olbus-u6-comp-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why competition can be both good and bad for a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Competition effects", statement: "Pros and cons." }], steps: [
            { reasoning: "Good: drives efficiency, innovation, better prices for customers.", marks: 1, markCode: "AO2" },
            { reasoning: "Bad: squeezes margins, may force price cuts below cost.", marks: 1, markCode: "AO2" },
            { reasoning: "Risk of losing market share to rivals.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear balanced explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Competition spurs efficiency but pressures profits." },
        },
        {
          id: "olbus-u6-comp-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Competition review.",
          parts: [
            { label: "a", prompt: "Name the three main types of market competition.", marks: 2 },
            { label: "b", prompt: "Define competitive advantage.", marks: 1 },
            { label: "c", prompt: "Give two examples of competing on non-price factors.", marks: 2 },
            { label: "d", prompt: "How can a business respond to a new competitor entering its market?", marks: 2 },
            { label: "e", prompt: "Why might a business seek a merger with a rival?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Competition", statement: "Types, advantage, strategy." },
          ], steps: [
            { part: "a", reasoning: "Perfect competition, oligopoly, monopoly — any order.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Three named.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "An edge that makes a business more successful than rivals.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Quality, service, brand, innovation — any two.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Differentiate, improve quality, innovate, cut costs, loyalty schemes.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear responses.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Increase market share, reduce competition, gain economies of scale.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reasons.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 3 types (b) def (c) 2 factors (d) responses (e) merger benefits" },
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
            { id: "a", text: "Increasing interconnectedness of world economies" },
            { id: "b", text: "Internet shutdown" },
            { id: "c", text: "One country only" },
            { id: "d", text: "Local trade only" },
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
        {
          id: "olbus-u6-glob-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A multinational company is one that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Is owned by one person" },
            { id: "b", text: "Operates in more than one country" },
            { id: "c", text: "Sells only locally" },
            { id: "d", text: "Never exports" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Multinational", statement: "Multi-country firm." }], steps: [{ reasoning: "Operates across borders.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u6-glob-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Outsourcing means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Contracting work to external providers, often abroad" },
            { id: "b", text: "Selling the business" },
            { id: "c", text: "Buying raw materials" },
            { id: "d", text: "Firing all staff" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Outsourcing", statement: "External provision." }], steps: [{ reasoning: "Outsourcing = external providers.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-glob-q7", difficulty: "core", totalMarks: 1,
          stem: "One major opportunity of globalisation for a business is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Freedom from competition" },
            { id: "b", text: "Access to much larger markets" },
            { id: "c", text: "Lower taxes everywhere" },
            { id: "d", text: "Guaranteed higher prices" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation opportunities", statement: "Market access." }], steps: [{ reasoning: "Global reach = bigger markets.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u6-glob-q8", difficulty: "core", totalMarks: 1,
          stem: "Exchange rate risk affects international businesses because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All currencies are fixed forever" },
            { id: "b", text: "Currency values fluctuate, changing the value of foreign earnings" },
            { id: "c", text: "Only imports are affected" },
            { id: "d", text: "Prices never change" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Exchange rate risk", statement: "Currency fluctuation." }], steps: [{ reasoning: "FX movements change values.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u6-glob-q9", difficulty: "core", totalMarks: 1,
          stem: "Globalisation generally leads to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Elimination of all trade barriers instantly" },
            { id: "b", text: "Less competition worldwide" },
            { id: "c", text: "Only local markets" },
            { id: "d", text: "Increased international competition" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation", statement: "Competition effect." }], steps: [{ reasoning: "Global markets = more rivals.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u6-glob-q10", difficulty: "core", totalMarks: 2,
          stem: "A business earns $500,000 from exports and a currency movement causes a 10% loss in value. Calculate the loss in dollars.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50000 }] },
          markscheme: { principles: [{ kind: "principle", name: "FX risk", statement: "Percentage loss." }], steps: [
            { part: "a", reasoning: "Loss = 10% of 500000 = 50000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Loss = 50000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 50000" },
        },
        {
          id: "olbus-u6-glob-q11", difficulty: "core", totalMarks: 2,
          stem: "A multinational operates factories in 4 countries and plans to open plants in 2 more. How many countries will it operate in?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "principle", name: "Multinational scale", statement: "Simple count." }], steps: [
            { part: "a", reasoning: "Total = 4 + 2 = 6 countries.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "6 countries.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 6" },
        },
        {
          id: "olbus-u6-glob-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Outsourcing saves a business $15 per unit on 20,000 units produced each year. Calculate the annual saving.",
          response: { type: "numeric", parts: [{ label: "a", answer: 300000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Outsourcing saving", statement: "Per unit x volume." }], steps: [
            { part: "a", reasoning: "Saving = 15 x 20000 = 300000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Annual saving = 300000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 300000" },
        },
        {
          id: "olbus-u6-glob-q13", difficulty: "challenge", totalMarks: 2,
          stem: "A 5% import tariff applies to goods worth $400,000. Calculate the tariff cost.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Tariff", statement: "Percentage of value." }], steps: [
            { part: "a", reasoning: "Tariff = 5% of 400000 = 20000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Tariff cost = 20000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 20000" },
        },
        {
          id: "olbus-u6-glob-q14", difficulty: "core", totalMarks: 2,
          stem: "Explain two opportunities that globalisation offers a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation opportunities", statement: "Benefits." }], steps: [
            { reasoning: "Larger markets, cheaper inputs, economies of scale, diversification — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: markets, costs, scale, risk spread." },
        },
        {
          id: "olbus-u6-glob-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two challenges that a small business may face because of globalisation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation challenges", statement: "Difficulties." }], steps: [
            { reasoning: "Intense competition from cheaper foreign producers.", marks: 1, markCode: "AO2" },
            { reasoning: "Lack of resources to compete globally.", marks: 1, markCode: "AO2" },
            { reasoning: "Complex regulations, cultural differences, exchange rate risk.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Competition, resources, regulations, currency risk." },
        },
        {
          id: "olbus-u6-glob-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Globalisation review.",
          parts: [
            { label: "a", prompt: "Define globalisation.", marks: 1 },
            { label: "b", prompt: "Name two opportunities of globalisation.", marks: 2 },
            { label: "c", prompt: "Name two challenges of globalisation.", marks: 2 },
            { label: "d", prompt: "What is a multinational company?", marks: 1 },
            { label: "e", prompt: "Give one advantage and one disadvantage of outsourcing.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Globalisation", statement: "Concepts and impacts." },
          ], steps: [
            { part: "a", reasoning: "Increasing interconnectedness of world economies.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Larger markets, cheaper inputs — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Competition, exchange risk — any two.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Company operating in multiple countries.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Advantage: lower costs. Disadvantage: job losses/quality control.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear evaluation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 2 opps (c) 2 challenges (d) def (e) adv/disadv" },
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
