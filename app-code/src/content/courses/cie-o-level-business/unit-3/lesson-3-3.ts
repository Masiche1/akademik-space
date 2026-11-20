import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "olbus-u3-lesson-3-3",
  code: "3-3",
  title: "Location Decisions",
  goal: "I CAN explain factors influencing business location decisions.",
  standards: ["7100 3.3"],
  vocabulary: [
    { term: "Location decision", definition: "Choosing where to locate a business." },
    { term: "Accessibility", definition: "How easy it is for customers/suppliers to reach the location." },
    { term: "Labour market", definition: "Availability of workers in an area." },
    { term: "Infrastructure", definition: "Transport, utilities and services supporting business." },
    { term: "Economies of agglomeration", definition: "Cost advantages from locating near related businesses." },
    { term: "Relocation", definition: "Moving a business to a new location." },
  ],
  concepts: [
    {
      id: "olbus-u3-location",
      title: "Factors affecting location",
      skill: "Identify and evaluate factors influencing where a business locates.",
      lesson: {
        sections: [
          { heading: "Key factors", body: "- **Accessibility**: proximity to customers, suppliers, transport links.\n- **Labour**: availability and cost of workers.\n- **Cost**: rent, rates, wages, utilities.\n- **Infrastructure**: roads, power, internet.\n- **Government incentives**: grants, tax breaks for locating in certain areas.\n- **Agglomeration**: benefits of clustering with related industries." },
          { heading: "Industry-specific", body: "Retail needs footfall; manufacturing needs transport links; service businesses need proximity to customers; tech firms may cluster in hubs." },
          { heading: "Evaluation", body: "No single 'best' location — depends on business type, objectives and constraints." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A delivery company needs a central depot. Which location factors matter most?",
          solution: "Accessibility to transport routes, proximity to customers, and low rent/operating costs.",
        },
      },
      questions: [
        {
          id: "olbus-u3-loc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A key factor in location decisions is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Accessibility to customers and transport" }, { id: "b", text: "Number of competitors" }, { id: "c", text: "Weather" }, { id: "d", text: "Building colour" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Location factors", statement: "Accessibility." }], steps: [{ reasoning: "Key factor.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-loc-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two factors affecting business location.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Location factors", statement: "Considerations." }], steps: [
            { reasoning: "Accessibility, labour, cost, infrastructure, incentives, agglomeration — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: accessibility, labour availability, cost, infrastructure, incentives." },
        },
        {
          id: "olbus-u3-loc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a factory might locate near a motorway junction.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Location", statement: "Transport access." }], steps: [
            { reasoning: "Easy distribution of products to customers.", marks: 1, markCode: "AO2" },
            { reasoning: "Reliable supply of raw materials.", marks: 1, markCode: "AO2" },
            { reasoning: "Reduces transport costs and times.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Motorway access improves distribution, supply and reduces costs." },
        },
        {
          id: "olbus-u3-loc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Location decisions review.",
          parts: [
            { label: "a", prompt: "Name four location factors.", marks: 2 },
            { label: "b", prompt: "What is agglomeration?", marks: 1 },
            { label: "c", prompt: "Why do tech firms cluster in hubs?", marks: 2 },
            { label: "d", prompt: "A retailer chooses a shopping centre location. Why?", marks: 2 },
            { label: "e", prompt: "Why might a business relocate?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Location", statement: "Factors and applications." },
          ], steps: [
            { part: "a", reasoning: "Any four factors.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Clustering benefits.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Access to talent, suppliers, knowledge sharing.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Footfall, accessibility, complementary shops.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear reasoning.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Lower costs, better access, growth, incentives.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Clear reasons.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 4 factors (b) clustering (c) talent+suppliers (d) footfall (e) costs/access/growth" },
        },
      ],
    },
    {
      id: "olbus-u3-lean",
      title: "Lean Production",
      skill: "Explain lean production principles and their benefits.",
      lesson: {
        sections: [
          { heading: "What is lean?", body: "Lean production focuses on eliminating waste while maintaining quality. Waste = any activity that doesn't add value for the customer." },
          { heading: "Key principles", body: "- **Just-in-time**: materials when needed.\n- **Kaizen**: continuous improvement.\n- **Total quality management**: quality at every stage.\n- **Value stream mapping**: identify and remove waste." },
          { heading: "Benefits", body: "Lower costs, higher quality, faster delivery, more flexibility, better customer satisfaction." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A company reduces inventory, retrains staff and improves processes. Which approach?",
          solution: "Lean production — eliminating waste and continuous improvement.",
        },
      },
      questions: [
        {
          id: "olbus-u3-lean-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Lean production aims to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Eliminate waste while maintaining quality" }, { id: "b", text: "Maximise inventory" }, { id: "c", text: "Increase prices" }, { id: "d", text: "Reduce staff" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Lean", statement: "Waste elimination." }], steps: [{ reasoning: "Eliminate waste.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-lean-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two lean production principles.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Lean principles", statement: "Methods." }], steps: [
            { reasoning: "JIT, kaizen, TQM, value stream — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: JIT, kaizen, TQM, value stream mapping." },
        },
        {
          id: "olbus-u3-lean-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two benefits of lean production.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Lean benefits", statement: "Efficiency gains." }], steps: [
            { reasoning: "Lower costs (less waste).", marks: 1, markCode: "AO2" },
            { reasoning: "Higher quality/faster delivery.", marks: 1, markCode: "AO2" },
            { reasoning: "Two explained.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Lower costs and higher quality/delivery speed." },
        },
        {
          id: "olbus-u3-lean-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Lean production review.",
          parts: [
            { label: "a", prompt: "Define lean production.", marks: 1 },
            { label: "b", prompt: "What is waste in lean terms?", marks: 1 },
            { label: "c", prompt: "Name three principles.", marks: 2 },
            { label: "d", prompt: "Give two benefits.", marks: 2 },
            { label: "e", prompt: "How does JIT relate to lean?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Lean", statement: "Principles and benefits." },
          ], steps: [
            { part: "a", reasoning: "Eliminate waste, maintain quality.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Non-value-adding activity.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Three principles.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Lower cost; higher quality/speed.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two benefits.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "JIT eliminates inventory waste.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Core lean principle.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) non-value (c) 3 principles (d) 2 benefits (e) JIT=lean" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u3-3-3-notes", title: "Location and lean — notes", summary: "Location factors and lean production principles.",
      sections: [
        { heading: "Location", body: "Accessibility, labour, cost, infrastructure, incentives, agglomeration — varies by industry." },
        { heading: "Lean", body: "Eliminate waste; JIT, kaizen, TQM; benefits = lower cost, higher quality, faster delivery." },
      ] },
  ],
};
