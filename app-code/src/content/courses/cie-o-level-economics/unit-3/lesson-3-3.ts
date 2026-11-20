import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "olec-u3-lesson-3-3",
  code: "3-3",
  title: "Market Structures",
  goal: "I CAN compare perfect competition, monopoly and oligopoly.",
  standards: ["2281 3.3"],
  vocabulary: [
    { term: "Perfect competition", definition: "Market with many small firms selling identical products." },
    { term: "Monopoly", definition: "Market dominated by a single firm." },
    { term: "Oligopoly", definition: "Market dominated by a few large firms." },
    { term: "Price taker", definition: "Firm that must accept market price." },
    { term: "Price maker", definition: "Firm that can set its own price." },
    { term: "Barriers to entry", definition: "Obstacles preventing new firms entering a market." },
  ],
  concepts: [
    {
      id: "olec-u3-structures",
      title: "Market structures",
      skill: "Compare perfect competition, monopoly and oligopoly.",
      lesson: {
        sections: [
          { heading: "Perfect competition", body: "Many firms, identical products, free entry/exit, perfect information. Firms are price takers — earn normal profit only. Rare in reality." },
          { heading: "Monopoly", body: "One firm dominates. High barriers to entry (patents, economies of scale, natural monopoly). Price maker — can earn supernormal profit. May reduce output and raise prices." },
          { heading: "Oligopoly", body: "Few large firms dominate (e.g. airlines, petrol). Interdependent — each watches others. May compete on price or non-price factors. Collusion possible." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A market has 3 large firms controlling 90% of sales. Which structure?",
          solution: "Oligopoly — few dominant firms.",
        },
      },
      questions: [
        {
          id: "olec-u3-ms-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Perfect competition features…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Many firms selling identical products" }, { id: "b", text: "One dominant firm" }, { id: "c", text: "Few large firms" }, { id: "d", text: "No competition" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Perfect competition", statement: "Many firms." }], steps: [{ reasoning: "Many small firms.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u3-ms-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two barriers to entry.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Barriers", statement: "Entry obstacles." }], steps: [
            { reasoning: "Patents, economies of scale, high capital, brand loyalty — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: patents, economies of scale, capital requirements, brand loyalty." },
        },
        {
          id: "olec-u3-ms-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a monopoly might reduce output and raise price.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Monopoly", statement: "Market power." }], steps: [
            { reasoning: "Monopoly is price maker — no competition.", marks: 1, markCode: "AO2" },
            { reasoning: "Can restrict supply to raise price.", marks: 1, markCode: "AO2" },
            { reasoning: "Maximises profit at lower output.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Monopoly restricts supply to maximise profit — reduces output, raises price." },
        },
        {
          id: "olec-u3-ms-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Market structures review.",
          parts: [
            { label: "a", prompt: "Define perfect competition.", marks: 1 },
            { label: "b", prompt: "Define monopoly.", marks: 1 },
            { label: "c", prompt: "Define oligopoly.", marks: 1 },
            { label: "d", prompt: "Price taker vs price maker?", marks: 2 },
            { label: "e", prompt: "Two barriers to entry?", marks: 2 },
            { label: "f", prompt: "Which structure is most common?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Market structures", statement: "Types and features." },
          ], steps: [
            { part: "a", reasoning: "Many firms, identical products.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "One dominant firm.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Few dominant firms.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Taker=accepts price; maker=sets price.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Patents, scale, capital, brand — any two.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Oligopoly most common in real markets.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Clear answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) perfect (b) monopoly (c) oligopoly (d) taker/maker (e) barriers (f) oligopoly" },
        },
      ],
    },
    {
      id: "olec-u3-oligopoly",
      title: "Oligopoly and Game Theory",
      skill: "Explain interdependence and collusion in oligopoly markets.",
      lesson: {
        sections: [
          { heading: "Interdependence", body: "Firms in oligopoly must consider rivals' reactions when setting price/output. Price changes trigger responses — prisoner's dilemma-type situations." },
          { heading: "Collusion", body: "Firms may agree to fix prices or share markets — illegal in many countries but tempting. Cartels restrict output to raise prices." },
          { heading: "Non-price competition", body: "Oligopolies often compete on advertising, branding, product differentiation rather than price — avoids destructive price wars." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Two airlines dominate a route. If one cuts prices, the other must match or lose customers. What is this?",
          solution: "Interdependence — each firm's decisions depend on rivals' reactions.",
        },
      },
      questions: [
        {
          id: "olec-u3-og-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Oligopoly firms are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Interdependent — must watch rivals" }, { id: "b", text: "Independent" }, { id: "c", text: "Price takers" }, { id: "d", text: "Always collude" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Oligopoly", statement: "Interdependent." }], steps: [{ reasoning: "Watch each other.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u3-og-q2", difficulty: "core", totalMarks: 2,
          stem: "What is collusion?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Collusion", statement: "Agreement." }], steps: [
            { reasoning: "Firms agree to fix prices or share markets.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Agreement between firms to fix prices or share markets." },
        },
        {
          id: "olec-u3-og-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why oligopolies often compete on non-price factors.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Non-price competition", statement: "Avoid price wars." }], steps: [
            { reasoning: "Price cuts trigger rival responses — price wars.", marks: 1, markCode: "AO2" },
            { reasoning: "Non-price competition avoids destructive competition.", marks: 1, markCode: "AO2" },
            { reasoning: "Builds brand loyalty and differentiation.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Avoids price wars; builds differentiation and brand loyalty." },
        },
        {
          id: "olec-u3-og-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Oligopoly review.",
          parts: [
            { label: "a", prompt: "Define oligopoly.", marks: 1 },
            { label: "b", prompt: "What is interdependence?", marks: 2 },
            { label: "c", prompt: "What is collusion?", marks: 1 },
            { label: "d", prompt: "Two non-price competition methods?", marks: 2 },
            { label: "e", prompt: "Why is collusion problematic?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Oligopoly", statement: "Interdependence and collusion." },
          ], steps: [
            { part: "a", reasoning: "Few dominant firms.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Firms watch rivals' reactions.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Price fixing/market sharing agreement.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Advertising, branding, product differentiation.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Raises prices, reduces output, harms consumers.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Illegal in many places.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear problems.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) interdep (c) collusion (d) 2 methods (e) harms consumers" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u3-3-3-notes", title: "Market structures — notes", summary: "Perfect competition, monopoly, oligopoly.",
      sections: [
        { heading: "Structures", body: "Perfect: many firms/price takers. Monopoly: one firm/price maker. Oligopoly: few firms/interdependent." },
        { heading: "Oligopoly", body: "Collusion (illegal) vs non-price competition; interdependence shapes strategy." },
      ] },
  ],
};
