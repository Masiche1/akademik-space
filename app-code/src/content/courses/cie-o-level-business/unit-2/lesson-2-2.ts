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
            { id: "a", text: "Product, price, place, promotion" },
            { id: "b", text: "Product, profit, promotion, people" },
            { id: "c", text: "Price, place, promotion, profit" },
            { id: "d", text: "People, profit, planning, production" },
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
        {
          id: "olbus-u2-mm-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which element of the marketing mix is concerned with how the product reaches customers?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Product" },
            { id: "b", text: "Place" },
            { id: "c", text: "Promotion" },
            { id: "d", text: "Price" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Place", statement: "Distribution." }], steps: [{ reasoning: "Place covers how/where the product is available.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Place" },
        },
        {
          id: "olbus-u2-mm-q6", difficulty: "core", totalMarks: 1,
          stem: "Penetration pricing is a strategy where a business…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gives products away free" },
            { id: "b", text: "Sets the highest possible price" },
            { id: "c", text: "Sets a low price to gain market share quickly" },
            { id: "d", text: "Matches competitor prices exactly" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Penetration pricing", statement: "Low price, market share." }], steps: [{ reasoning: "Penetration = low price to enter/gain share.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u2-mm-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The 'product' element of the marketing mix refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The advertising campaign" },
            { id: "b", text: "The goods or services offered to customers" },
            { id: "c", text: "The sales team" },
            { id: "d", text: "The shop location" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Product", statement: "What is sold." }], steps: [{ reasoning: "Product = goods/services offered.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u2-mm-q8", difficulty: "core", totalMarks: 2,
          stem: "A product costs $40 to make. Using cost-plus pricing with a 25% profit margin on cost, what is the selling price?",
          response: { type: "numeric", parts: [{ label: "a", answer: 50, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Cost-plus pricing", statement: "Cost + margin." }], steps: [
            { part: "a", reasoning: "Selling price = 40 × 1.25.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Selling price = $50.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $50" },
        },
        {
          id: "olbus-u2-mm-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A jacket costs $60 to produce and sells for $75. (a) What is the profit per unit? (b) What is the total profit on 200 units?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 15, unit: "$" },
            { label: "b", answer: 3000, unit: "$" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Profit", statement: "Revenue - cost." }], steps: [
            { part: "a", reasoning: "Profit per unit = 75 - 60 = 15.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Total profit = 15 × 200.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Total profit = $3,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $15; **(b)** $3,000" },
        },
        {
          id: "olbus-u2-mm-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain how the 'price' and 'product' elements of the marketing mix can work together.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Marketing mix", statement: "Interrelation." }], steps: [
            { reasoning: "A higher-quality product can support a higher price.", marks: 1, markCode: "AO2" },
            { reasoning: "Price signals perceived value of the product.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Price must reflect product quality/value for a coherent offer." },
        },
        {
          id: "olbus-u2-mm-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a business must ensure all four elements of the marketing mix are consistent.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Marketing mix", statement: "Consistency." }], steps: [
            { reasoning: "Each P affects the others — e.g. price affects perceived product value.", marks: 1, markCode: "AO2" },
            { reasoning: "An inconsistent mix confuses customers.", marks: 1, markCode: "AO2" },
            { reasoning: "A coordinated mix maximises effectiveness.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "The four Ps interrelate; consistency delivers a coherent offer." },
        },
        {
          id: "olbus-u2-mm-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A shop offers 'buy one get one free' to encourage purchases. Which element of the marketing mix is this?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Product" },
            { id: "b", text: "Price setting only" },
            { id: "c", text: "Promotion" },
            { id: "d", text: "Place" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Promotion", statement: "Sales incentive." }], steps: [{ reasoning: "BOGOF is a sales promotion technique.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Promotion" },
        },
        {
          id: "olbus-u2-mm-q13", difficulty: "core", totalMarks: 2,
          stem: "A retailer buys goods at $30 each and sells them at $45 each. What is the profit per unit?",
          response: { type: "numeric", parts: [{ label: "a", answer: 15, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Profit per unit", statement: "Selling - cost." }], steps: [
            { part: "a", reasoning: "45 - 30 = 15.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Profit = $15 per unit.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $15" },
        },
        {
          id: "olbus-u2-mm-q14", difficulty: "foundation", totalMarks: 1,
          stem: "'Promotion' in the marketing mix means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Communicating with customers to inform and persuade them" },
            { id: "b", text: "Producing the goods" },
            { id: "c", text: "Choosing the location" },
            { id: "d", text: "Setting the price" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Promotion", statement: "Communication." }], steps: [{ reasoning: "Promotion = communication to inform/persuade.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-mm-q15", difficulty: "core", totalMarks: 2,
          stem: "A business spends $10,000 on promotion and achieves sales of $100,000. What percentage of sales is the promotion spend?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "%" }] },
          markscheme: { principles: [{ kind: "principle", name: "Percentage of sales", statement: "Spend / sales × 100." }], steps: [
            { part: "a", reasoning: "10000 ÷ 100000 × 100 = 10%.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "10% of sales.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 10%" },
        },
        {
          id: "olbus-u2-mm-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Marketing mix extended review.",
          parts: [
            { label: "a", prompt: "Name the four elements of the marketing mix.", marks: 2 },
            { label: "b", prompt: "Define price.", marks: 1 },
            { label: "c", prompt: "Define place.", marks: 1 },
            { label: "d", prompt: "Name two pricing strategies.", marks: 2 },
            { label: "e", prompt: "Give an example of each P for a bakery.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Marketing mix", statement: "Elements and application." },
          ], steps: [
            { part: "a", reasoning: "Product, price, place, promotion.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "All four.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Amount customers pay.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "How/where product is available.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two strategies.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
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
            { id: "a", text: "Selling to everyone" },
            { id: "b", text: "Raising prices" },
            { id: "c", text: "Dividing a market into groups with similar needs" },
            { id: "d", text: "Closing part of a market" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Segmentation", statement: "Divide into groups." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
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
        {
          id: "olbus-u2-seg-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Segmenting a market allows a business to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Target its marketing more effectively" },
            { id: "b", text: "Avoid competition entirely" },
            { id: "c", text: "Sell to fewer customers always" },
            { id: "d", text: "Raise all its prices" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Segmentation", statement: "Targeted marketing." }], steps: [{ reasoning: "Segmentation enables targeted marketing.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-seg-q6", difficulty: "core", totalMarks: 1,
          stem: "Segmenting customers by income means dividing them by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Their hobbies" },
            { id: "b", text: "How much money they earn" },
            { id: "c", text: "Their location" },
            { id: "d", text: "Their age" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Income segmentation", statement: "By earnings." }], steps: [{ reasoning: "Income segmentation groups by earnings.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u2-seg-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A benefit of market segmentation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "More efficient use of marketing resources" },
            { id: "b", text: "Guaranteed monopoly" },
            { id: "c", text: "Higher production costs" },
            { id: "d", text: "Less choice for customers" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Segmentation benefits", statement: "Efficiency." }], steps: [{ reasoning: "Segmentation improves marketing efficiency.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-seg-q8", difficulty: "core", totalMarks: 2,
          stem: "A market of 50,000 people is divided into segments and the target segment makes up 20% of the market. What is the size of the target segment?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10000, unit: "people" }] },
          markscheme: { principles: [{ kind: "principle", name: "Segment size", statement: "% of market." }], steps: [
            { part: "a", reasoning: "20% × 50000 = 10000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Segment = 10,000 people.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 10,000 people" },
        },
        {
          id: "olbus-u2-seg-q9", difficulty: "core", totalMarks: 2,
          stem: "A business spends $10,000 on marketing aimed at a segment of 5,000 customers. What is the marketing cost per customer in that segment?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Cost per customer", statement: "Spend / customers." }], steps: [
            { part: "a", reasoning: "10000 ÷ 5000 = 2.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "$2 per customer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $2" },
        },
        {
          id: "olbus-u2-seg-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain one benefit of targeting a specific market segment.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Targeting", statement: "Benefit of segments." }], steps: [
            { reasoning: "Marketing can be tailored to the segment's needs.", marks: 1, markCode: "AO2" },
            { reasoning: "Resources are used more efficiently.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Tailored marketing and efficient resource use." },
        },
        {
          id: "olbus-u2-seg-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a small business might use concentrated targeting rather than trying to serve the whole market.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Concentrated targeting", statement: "One segment." }], steps: [
            { reasoning: "Limited resources cannot reach the whole market effectively.", marks: 1, markCode: "AO2" },
            { reasoning: "Focusing on one segment allows a specialised product.", marks: 1, markCode: "AO2" },
            { reasoning: "Builds strong reputation within that segment.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Small firms lack resources; focusing on one segment allows specialisation and stronger reputation." },
        },
        {
          id: "olbus-u2-seg-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A gym targets 'busy professionals aged 25-40 who want short workouts'. This segmentation is based mainly on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Age and lifestyle" },
            { id: "b", text: "Price only" },
            { id: "c", text: "No clear basis" },
            { id: "d", text: "Location only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Segmentation bases", statement: "Age, lifestyle." }], steps: [{ reasoning: "Age range and busy lifestyle are the bases.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Age and lifestyle" },
        },
        {
          id: "olbus-u2-seg-q13", difficulty: "core", totalMarks: 2,
          stem: "A company identifies three market segments with sizes of 10,000, 30,000 and 60,000 people. What percentage of the total market is the largest segment?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60, unit: "%" }] },
          markscheme: { principles: [{ kind: "principle", name: "Segment percentage", statement: "Segment / total." }], steps: [
            { part: "a", reasoning: "Total = 100000; 60000 ÷ 100000 × 100 = 60%.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Largest segment = 60%.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 60%" },
        },
        {
          id: "olbus-u2-seg-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Market segmentation divides a market into groups based on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Alphabetical order" },
            { id: "b", text: "Price only" },
            { id: "c", text: "Similar needs, characteristics or behaviours" },
            { id: "d", text: "Random choice" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Segmentation", statement: "Groups with similar traits." }], steps: [{ reasoning: "Segments share needs/characteristics/behaviours.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u2-seg-q15", difficulty: "core", totalMarks: 2,
          stem: "A business sells 2,000 units to Segment A and 8,000 units to Segment B. What percentage of total sales goes to Segment B?",
          response: { type: "numeric", parts: [{ label: "a", answer: 80, unit: "%" }] },
          markscheme: { principles: [{ kind: "principle", name: "Sales share", statement: "Segment sales / total." }], steps: [
            { part: "a", reasoning: "Total = 10000; 8000 ÷ 10000 × 100 = 80%.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Segment B = 80% of sales.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 80%" },
        },
        {
          id: "olbus-u2-seg-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Market segmentation extended review.",
          parts: [
            { label: "a", prompt: "Define market segmentation.", marks: 1 },
            { label: "b", prompt: "Name three bases for segmentation.", marks: 2 },
            { label: "c", prompt: "What is targeting?", marks: 2 },
            { label: "d", prompt: "Give two benefits of segmentation.", marks: 2 },
            { label: "e", prompt: "A company makes products aimed at pensioners. Which segmentation base is this mainly?", marks: 2 },
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
