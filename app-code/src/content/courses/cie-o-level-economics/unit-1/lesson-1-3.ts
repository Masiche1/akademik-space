import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "olec-u1-lesson-1-3",
  code: "1-3",
  title: "Economic Systems",
  goal: "I CAN compare free market, planned and mixed economic systems.",
  standards: ["2281 1.3"],
  vocabulary: [
    { term: "Free market economy", definition: "Economy where decisions are made by individuals and firms." },
    { term: "Planned economy", definition: "Economy where government controls all production decisions." },
    { term: "Mixed economy", definition: "Economy combining market forces and government intervention." },
    { term: "Price mechanism", definition: "System where prices coordinate production and consumption." },
    { term: "Command economy", definition: "Another name for planned economy." },
    { term: "Invisible hand", definition: "Adam Smith's idea that self-interest leads to social benefit." },
  ],
  concepts: [
    {
      id: "olec-u1-systems",
      title: "Types of economic systems",
      skill: "Compare free market, planned and mixed economies.",
      lesson: {
        sections: [
          { heading: "Free market", body: "Decisions made by consumers and producers through prices. Advantages: efficiency, innovation, choice. Disadvantages: inequality, market failure, no public goods." },
          { heading: "Planned economy", body: "Government controls what/how to produce and for whom. Advantages: equality, no unemployment, public goods provided. Disadvantages: inefficiency, lack of choice, no incentives." },
          { heading: "Mixed economy", body: "Most real economies combine both — market forces with government intervention for equity and market failures. Most countries are mixed." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A country has private businesses but also public healthcare and education. What system?",
          solution: "Mixed economy — combines market forces with government provision.",
        },
      },
      questions: [
        {
          id: "olec-u1-es-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A free market economy is characterised by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Decisions made by individuals and firms" }, { id: "b", text: "Government control" }, { id: "c", text: "No prices" }, { id: "d", text: "No choice" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Free market", statement: "Individual decisions." }], steps: [{ reasoning: "Decentralised decisions.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u1-es-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two advantages of a free market economy.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Free market", statement: "Benefits." }], steps: [
            { reasoning: "Efficiency, innovation, consumer choice.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: efficiency, innovation, choice, competition." },
        },
        {
          id: "olec-u1-es-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why most countries have mixed economies rather than pure systems.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Mixed economy", statement: "Combination." }], steps: [
            { reasoning: "Pure markets create inequality and market failures.", marks: 1, markCode: "AO2" },
            { reasoning: "Pure planning creates inefficiency and lack of choice.", marks: 1, markCode: "AO2" },
            { reasoning: "Mixed combines benefits of both.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Mixed economies balance market efficiency with government correction of failures." },
        },
        {
          id: "olec-u1-es-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Economic systems review.",
          parts: [
            { label: "a", prompt: "Define free market.", marks: 1 },
            { label: "b", prompt: "Define planned economy.", marks: 1 },
            { label: "c", prompt: "Define mixed economy.", marks: 1 },
            { label: "d", prompt: "Two advantages of free market?", marks: 2 },
            { label: "e", prompt: "Two disadvantages of planned economy?", marks: 2 },
            { label: "f", prompt: "Why are most countries mixed?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Economic systems", statement: "Types and evaluation." },
          ], steps: [
            { part: "a", reasoning: "Individual/firms decide.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Government controls.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Combination of both.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Efficiency, innovation, choice.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Inefficiency, no choice/incentives.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Combines efficiency with equity.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) free (b) planned (c) mixed (d) 2 adv (e) 2 dis (f) balanced" },
        },
      ],
    },
    {
      id: "olec-u1-price",
      title: "The Price Mechanism",
      skill: "Explain how prices coordinate economic activity.",
      lesson: {
        sections: [
          { heading: "How prices work", body: "Prices signal scarcity and abundance. High prices indicate high demand/low supply — encourage more production. Low prices indicate surplus — discourage production." },
          { heading: "Functions", body: "- **Rationing**: prices limit demand for scarce goods.\n- **Incentive**: high prices encourage producers to supply more.\n- **Signalling**: prices communicate information about scarcity." },
          { heading: "Limitations", body: "Prices may not reflect social costs (pollution), may exclude poor consumers, and may not provide public goods." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "The price of housing rises sharply in a city. What does this signal?",
          solution: "High demand relative to supply — signals scarcity and encourages more building.",
        },
      },
      questions: [
        {
          id: "olec-u1-pm-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The price mechanism functions as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rationing, incentive and signalling device" }, { id: "b", text: "Only a tax" }, { id: "c", text: "Government control" }, { id: "d", text: "Random allocation" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Price mechanism", statement: "Three functions." }], steps: [{ reasoning: "Rationing/incentive/signalling.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u1-pm-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two functions of the price mechanism.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Price functions", statement: "Roles." }], steps: [
            { reasoning: "Rationing, incentive, signalling — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: rationing, incentive, signalling." },
        },
        {
          id: "olec-u1-pm-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one limitation of relying on prices to allocate resources.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Price limitations", statement: "Market failure." }], steps: [
            { reasoning: "Prices may exclude poor consumers.", marks: 1, markCode: "AO2" },
            { reasoning: "May not reflect social costs (pollution).", marks: 1, markCode: "AO2" },
            { reasoning: "May not provide public goods.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Prices don't account for equity or externalities — market failure." },
        },
        {
          id: "olec-u1-pm-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Price mechanism review.",
          parts: [
            { label: "a", prompt: "Define price mechanism.", marks: 1 },
            { label: "b", prompt: "Name three functions.", marks: 2 },
            { label: "c", prompt: "How does price signal scarcity?", marks: 2 },
            { label: "d", prompt: "Two limitations?", marks: 2 },
            { label: "e", prompt: "Why is price mechanism called 'invisible hand'?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Price mechanism", statement: "Functions and limits." },
          ], steps: [
            { part: "a", reasoning: "Prices coordinate economic activity.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Rationing, incentive, signalling.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "All three.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "High price = scarce; low = abundant.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear signal.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Equity/externalities/public goods.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Self-interest leads to social benefit without central direction.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 3 functions (c) signal (d) 2 limits (e) invisible hand" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u1-1-3-notes", title: "Economic systems — notes", summary: "Free market, planned, mixed economies and price mechanism.",
      sections: [
        { heading: "Systems", body: "Free market = individual decisions; planned = government; mixed = combination (most common)." },
        { heading: "Price mechanism", body: "Prices ration, incentivise and signal — but may fail on equity and externalities." },
      ] },
  ],
};
