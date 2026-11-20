import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "olbus-u2-lesson-2-2",
  code: "2-2",
  title: "The Marketing Mix",
  goal: "I CAN explain the four elements of the marketing mix and how they interrelate.",
  standards: ["7100 2.2"],
  vocabulary: [
    { term: "Marketing mix", definition: "The four Ps used to market a product: product, price, place, promotion." },
    { term: "Product", definition: "Goods or services offered to customers." },
    { term: "Price", definition: "Amount customers pay for the product." },
    { term: "Place", definition: "How and where the product is made available." },
    { term: "Promotion", definition: "Communication to inform and persuade customers." },
    { term: "Market segmentation", definition: "Dividing a market into groups with similar needs." },
  ],
  concepts: [
    {
      id: "olbus-u2-mix",
      title: "The four Ps",
      skill: "Explain each element of the marketing mix and its role.",
      lesson: {
        sections: [
          { heading: "Product", body: "What is sold — features, quality, design, branding, packaging, after-sales service. Must meet customer needs." },
          { heading: "Price", body: "How much customers pay. Affects perceived value, competitiveness and profit. Pricing strategies: cost-plus, competitive, penetration, skimming." },
          { heading: "Place", body: "Distribution channels — how the product reaches customers: direct, retailers, wholesalers, online. Location of outlets matters." },
          { heading: "Promotion", body: "Advertising, sales promotion, public relations, personal selling, social media. Aims to inform, persuade and remind customers." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A new smartphone launches at a high price with heavy advertising. Which Ps are being used?",
          solution: "Price (premium/skimming), Promotion (advertising), Product (the phone itself), Place (distribution channels).",
        },
      },
      questions: [
        {
          id: "olbus-u2-mm-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The marketing mix consists of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Product, price, place, promotion" }, { id: "b", text: "People, profit, planning, production" }, { id: "c", text: "Product, profit, promotion, people" }, { id: "d", text: "Price, place, promotion, profit" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Marketing mix", statement: "4 Ps." }], steps: [{ reasoning: "Correct four.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-mm-q2", difficulty: "core", totalMarks: 2,
          stem: "Define promotion in the marketing mix.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Promotion", statement: "Communication." }], steps: [
            { reasoning: "Communication to inform/persuade customers about the product.", marks: 1, markCode: "AO1" },
            { reasoning: "Includes advertising, sales promotion, PR.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Promotion = communication (advertising, sales promotion, PR) to inform and persuade customers." },
        },
        {
          id: "olbus-u2-mm-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the four Ps must work together.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Marketing mix", statement: "Integration." }], steps: [
            { reasoning: "Each element affects the others (e.g. price affects perceived product value).", marks: 1, markCode: "AO2" },
            { reasoning: "Inconsistent mix confuses customers.", marks: 1, markCode: "AO2" },
            { reasoning: "Coordinated mix maximises effectiveness.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "The Ps interrelate; a consistent mix delivers a coherent offer to customers." },
        },
        {
          id: "olbus-u2-mm-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Marketing mix review.",
          parts: [
            { label: "a", prompt: "Name the four Ps.", marks: 2 },
            { label: "b", prompt: "Define price.", marks: 1 },
            { label: "c", prompt: "Define place.", marks: 1 },
            { label: "d", prompt: "Name two pricing strategies.", marks: 2 },
            { label: "e", prompt: "Give an example of each P for a coffee shop.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Marketing mix", statement: "Elements and application." },
          ], steps: [
            { part: "a", reasoning: "Product, price, place, promotion.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "All four.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Amount customers pay.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "How/where product is available.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Cost-plus, competitive, penetration, skimming — any two.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Valid examples for each P.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Second/third examples.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "All four covered.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 4Ps (b) price def (c) place def (d) 2 strategies (e) examples" },
        },
      ],
    },
    {
      id: "olbus-u2-segmentation",
      title: "Market Segmentation",
      skill: "Explain market segmentation and its benefits.",
      lesson: {
        sections: [
          { heading: "What is segmentation?", body: "Dividing a broad market into smaller groups with similar needs, characteristics or behaviours. Segments can be based on age, income, gender, location, lifestyle or behaviour." },
          { heading: "Benefits", body: "- Allows targeted marketing (right product to right people).\n- More efficient use of resources.\n- Better customer satisfaction.\n- Competitive advantage." },
          { heading: "Targeting", body: "After segmenting, the business chooses which segment(s) to target — undifferentiated (whole market), differentiated (several segments) or concentrated (one segment)." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A sportswear company segments by age: youth, adults, seniors. Why?",
          solution: "Each group has different needs, preferences and spending power — allowing tailored products and marketing.",
        },
      },
      questions: [
        {
          id: "olbus-u2-seg-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Market segmentation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dividing a market into groups with similar needs" }, { id: "b", text: "Selling to everyone" }, { id: "c", text: "Closing part of a market" }, { id: "d", text: "Raising prices" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Segmentation", statement: "Divide into groups." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-seg-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two bases for market segmentation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Segmentation bases", statement: "Criteria." }], steps: [
            { reasoning: "Age, income, gender, location, lifestyle, behaviour — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: age, income, gender, location, lifestyle, behaviour." },
        },
        {
          id: "olbus-u2-seg-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two benefits of market segmentation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Segmentation benefits", statement: "Targeted marketing." }], steps: [
            { reasoning: "Targeted marketing — right product to right people.", marks: 1, markCode: "AO2" },
            { reasoning: "More efficient resource use / better customer satisfaction.", marks: 1, markCode: "AO2" },
            { reasoning: "Two explained.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Enables targeted marketing and more efficient resource use." },
        },
        {
          id: "olbus-u2-seg-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Market segmentation review.",
          parts: [
            { label: "a", prompt: "Define segmentation.", marks: 1 },
            { label: "b", prompt: "Name three bases.", marks: 2 },
            { label: "c", prompt: "What is targeting?", marks: 2 },
            { label: "d", prompt: "Give two benefits.", marks: 2 },
            { label: "e", prompt: "A toy company targets children aged 5-10. Which base?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Segmentation", statement: "Bases, targeting, benefits." },
          ], steps: [
            { part: "a", reasoning: "Divide market into groups.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Three bases.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Choosing which segment(s) to serve.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Targeted marketing; efficiency.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two benefits.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Age-based segmentation.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Correct identification.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 3 bases (c) targeting def (d) 2 benefits (e) age" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u2-2-2-notes", title: "Marketing mix — notes", summary: "Four Ps and market segmentation.",
      sections: [
        { heading: "4 Ps", body: "Product, price, place, promotion — must work together as a coherent mix." },
        { heading: "Segmentation", body: "Divide market by age/income/etc.; target specific segments for efficient marketing." },
      ] },
  ],
};
