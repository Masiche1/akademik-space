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
            { id: "a", text: "Number of competitors" },
            { id: "b", text: "Accessibility to customers and transport" },
            { id: "c", text: "Weather" },
            { id: "d", text: "Building colour" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Location factors", statement: "Accessibility." }], steps: [{ reasoning: "Key factor.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
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
        {
          id: "olbus-u3-loc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Accessibility in location decisions refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The number of floors" },
            { id: "b", text: "How easily customers and suppliers can reach the site" },
            { id: "c", text: "The colour of the building" },
            { id: "d", text: "Parking charges only" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Accessibility", statement: "Ease of reaching." }], steps: [{ reasoning: "Accessibility = ease of reaching customers/suppliers.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u3-loc-q6", difficulty: "core", totalMarks: 1,
          stem: "Economies of agglomeration occur when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All firms locate far apart" },
            { id: "b", text: "Transport links disappear" },
            { id: "c", text: "Businesses benefit from locating near related firms" },
            { id: "d", text: "Costs always rise" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Agglomeration", statement: "Clustering benefits." }], steps: [{ reasoning: "Agglomeration = benefits of clustering.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u3-loc-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A key labour factor in location decisions is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Office decor" },
            { id: "b", text: "Availability and cost of workers" },
            { id: "c", text: "Product range" },
            { id: "d", text: "Company logo" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Labour market", statement: "Workers." }], steps: [{ reasoning: "Labour = availability/cost of workers.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u3-loc-q8", difficulty: "core", totalMarks: 2,
          stem: "Site A costs $5,000 per month in rent while Site B costs $3,500 per month. What is the annual saving if the business chooses Site B?",
          response: { type: "numeric", parts: [{ label: "a", answer: 18000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Cost saving", statement: "Monthly diff × 12." }], steps: [
            { part: "a", reasoning: "(5000 - 3500) × 12 = 1500 × 12.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Annual saving = $18,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $18,000" },
        },
        {
          id: "olbus-u3-loc-q9", difficulty: "challenge", totalMarks: 3,
          stem: "Site A has rent of $4,000 and transport costs of $2,000 per month. Site B has rent of $3,000 and transport costs of $3,500 per month. (a) What is the total monthly cost at Site A? (b) What is the total monthly cost at Site B?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 6000, unit: "$" },
            { label: "b", answer: 6500, unit: "$" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Location cost", statement: "Rent + transport." }], steps: [
            { part: "a", reasoning: "4000 + 2000 = 6000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "3000 + 3500 = 6500.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Site B = $6,500.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $6,000; **(b)** $6,500" },
        },
        {
          id: "olbus-u3-loc-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain why government incentives can influence a business's location decision.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Incentives", statement: "Government support." }], steps: [
            { reasoning: "Grants and tax breaks reduce setup/operating costs.", marks: 1, markCode: "AO2" },
            { reasoning: "May make an otherwise unattractive area viable.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Incentives cut costs and can sway the location choice." },
        },
        {
          id: "olbus-u3-loc-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a retailer and a factory might choose very different locations.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Location", statement: "Industry differences." }], steps: [
            { reasoning: "Retail needs customer footfall — busy shopping areas.", marks: 1, markCode: "AO2" },
            { reasoning: "Factories need transport links and space — often out-of-town sites.", marks: 1, markCode: "AO2" },
            { reasoning: "Different cost and access priorities.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Retail prioritises footfall; factories prioritise transport access and space." },
        },
        {
          id: "olbus-u3-loc-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A business relocates to a region with lower wages and cheaper rent. It is mainly motivated by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "More competitors" },
            { id: "b", text: "Government regulations" },
            { id: "c", text: "Better weather" },
            { id: "d", text: "Lower operating costs" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Relocation", statement: "Cost motives." }], steps: [{ reasoning: "Lower wages/rent = lower operating costs.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Lower operating costs" },
        },
        {
          id: "olbus-u3-loc-q13", difficulty: "core", totalMarks: 2,
          stem: "A delivery firm estimates transport costs of $12 per unit from Site A and $9 per unit from Site B for an output of 5,000 units. What is the total transport cost saving from choosing Site B?",
          response: { type: "numeric", parts: [{ label: "a", answer: 15000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Transport saving", statement: "Diff × units." }], steps: [
            { part: "a", reasoning: "(12 - 9) × 5000 = 3 × 5000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Saving = $15,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $15,000" },
        },
        {
          id: "olbus-u3-loc-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Infrastructure relevant to location decisions includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Product packaging" },
            { id: "b", text: "Staff uniforms" },
            { id: "c", text: "Roads, power and internet" },
            { id: "d", text: "The advertising budget" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Infrastructure", statement: "Transport, utilities." }], steps: [{ reasoning: "Infrastructure = roads, power, utilities, internet.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u3-loc-q15", difficulty: "core", totalMarks: 2,
          stem: "Two sites are compared for an order of 20,000 units. Site A costs $50,000 setup plus $8 per unit; Site B costs $80,000 setup plus $5 per unit. By how much is Site B cheaper in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Total cost comparison", statement: "Setup + unit × qty." }], steps: [
            { part: "a", reasoning: "A = 50000 + 160000 = 210000; B = 80000 + 100000 = 180000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Site B cheaper by $30,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $30,000" },
        },
        {
          id: "olbus-u3-loc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Location decisions extended review.",
          parts: [
            { label: "a", prompt: "Name four factors affecting business location.", marks: 2 },
            { label: "b", prompt: "What is agglomeration?", marks: 1 },
            { label: "c", prompt: "Why do tech firms often cluster in hubs?", marks: 2 },
            { label: "d", prompt: "Why might a retailer choose a shopping centre location?", marks: 2 },
            { label: "e", prompt: "Give two reasons why a business might relocate.", marks: 2 },
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
            { id: "a", text: "Maximise inventory" },
            { id: "b", text: "Increase prices" },
            { id: "c", text: "Reduce staff" },
            { id: "d", text: "Eliminate waste while maintaining quality" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Lean", statement: "Waste elimination." }], steps: [{ reasoning: "Eliminate waste.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
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
        {
          id: "olbus-u3-lean-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In lean production, 'waste' means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only paperwork" },
            { id: "b", text: "Only excess staff" },
            { id: "c", text: "Any activity that does not add value for the customer" },
            { id: "d", text: "Only physical rubbish" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Waste", statement: "Non-value-adding." }], steps: [{ reasoning: "Waste = any non-value-adding activity.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u3-lean-q6", difficulty: "core", totalMarks: 1,
          stem: "Kaizen refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of machine" },
            { id: "b", text: "Continuous improvement of processes" },
            { id: "c", text: "A marketing method" },
            { id: "d", text: "A tax system" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Kaizen", statement: "Continuous improvement." }], steps: [{ reasoning: "Kaizen = continuous improvement.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u3-lean-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Value stream mapping is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Set product prices" },
            { id: "b", text: "Identify and remove waste in processes" },
            { id: "c", text: "Recruit new staff" },
            { id: "d", text: "Design company logos" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Value stream mapping", statement: "Waste identification." }], steps: [{ reasoning: "VSM maps processes to find waste.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u3-lean-q8", difficulty: "core", totalMarks: 2,
          stem: "A lean improvement project cuts waste costs from $50,000 to $32,000. What is the saving?",
          response: { type: "numeric", parts: [{ label: "a", answer: 18000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Waste saving", statement: "Old - new." }], steps: [
            { part: "a", reasoning: "50000 - 32000 = 18000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Saving = $18,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $18,000" },
        },
        {
          id: "olbus-u3-lean-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A lean project reduces machine setup time from 120 to 45 minutes and cuts weekly changeover waste costs from $600 to $150. (a) How many minutes of setup time are saved? (b) How much is saved in weekly waste costs?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 75, unit: "minutes" },
            { label: "b", answer: 450, unit: "$" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Lean savings", statement: "Time and cost reductions." }], steps: [
            { part: "a", reasoning: "120 - 45 = 75 minutes.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "600 - 150 = 450.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$450 saved per week.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 75 minutes; **(b)** $450" },
        },
        {
          id: "olbus-u3-lean-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain how just-in-time (JIT) supports lean production.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "JIT and lean", statement: "Waste elimination." }], steps: [
            { reasoning: "JIT eliminates inventory waste by delivering materials when needed.", marks: 1, markCode: "AO2" },
            { reasoning: "JIT is a core lean principle.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "JIT removes the waste of excess stock, a key lean aim." },
        },
        {
          id: "olbus-u3-lean-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why lean production can improve customer satisfaction.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Lean benefits", statement: "Customer focus." }], steps: [
            { reasoning: "Higher quality reduces defects reaching customers.", marks: 1, markCode: "AO2" },
            { reasoning: "Faster delivery meets customer expectations.", marks: 1, markCode: "AO2" },
            { reasoning: "Lower costs can enable competitive pricing.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Lean gives higher quality, faster delivery and better prices." },
        },
        {
          id: "olbus-u3-lean-q12", difficulty: "challenge", totalMarks: 1,
          stem: "The main goal of lean production is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Eliminate waste while maintaining quality" },
            { id: "b", text: "Reduce the workforce only" },
            { id: "c", text: "Maximise stock levels" },
            { id: "d", text: "Increase defects" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Lean", statement: "Waste elimination." }], steps: [{ reasoning: "Lean = eliminate waste, keep quality.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-lean-q13", difficulty: "core", totalMarks: 2,
          stem: "A production process takes 10 hours and lean improvements remove 2.5 hours of waste. What is the new process time?",
          response: { type: "numeric", parts: [{ label: "a", answer: 7.5, unit: "hours" }] },
          markscheme: { principles: [{ kind: "principle", name: "Process time", statement: "Old - waste." }], steps: [
            { part: "a", reasoning: "10 - 2.5 = 7.5.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "New time = 7.5 hours.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 7.5 hours" },
        },
        {
          id: "olbus-u3-lean-q14", difficulty: "foundation", totalMarks: 1,
          stem: "A benefit of lean production is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lower costs and faster delivery" },
            { id: "b", text: "More defects" },
            { id: "c", text: "Higher inventory" },
            { id: "d", text: "Slower output" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Lean benefits", statement: "Efficiency." }], steps: [{ reasoning: "Lean lowers costs and speeds delivery.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-lean-q15", difficulty: "core", totalMarks: 2,
          stem: "Lean methods raise productivity from 40 units per hour to 50 units per hour. By how much does productivity increase?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "units" }] },
          markscheme: { principles: [{ kind: "principle", name: "Productivity change", statement: "New - old." }], steps: [
            { part: "a", reasoning: "50 - 40 = 10.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Increase = 10 units per hour.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 10 units" },
        },
        {
          id: "olbus-u3-lean-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Lean production extended review.",
          parts: [
            { label: "a", prompt: "Define lean production.", marks: 1 },
            { label: "b", prompt: "What is 'waste' in lean terms?", marks: 1 },
            { label: "c", prompt: "Name three lean production principles.", marks: 2 },
            { label: "d", prompt: "Give two benefits of lean production.", marks: 2 },
            { label: "e", prompt: "How does just-in-time relate to lean production?", marks: 3 },
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
