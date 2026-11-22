import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "olbus-u3-lesson-3-1",
  code: "3-1",
  title: "Production Methods",
  goal: "I CAN compare job, batch and flow production methods.",
  standards: ["7100 3.1"],
  vocabulary: [
    { term: "Job production", definition: "Producing one-off customised items." },
    { term: "Batch production", definition: "Producing groups of identical items." },
    { term: "Flow production", definition: "Continuous mass production on an assembly line." },
    { term: "Assembly line", definition: "Production line where parts move between stations." },
    { term: "Economies of scale", definition: "Cost advantages from producing at larger scale." },
    { term: "Customisation", definition: "Tailoring products to individual customer needs." },
  ],
  concepts: [
    {
      id: "olbus-u3-methods",
      title: "Types of production",
      skill: "Compare job, batch and flow production and when each is used.",
      lesson: {
        sections: [
          { heading: "Job production", body: "One-off or small quantity items made to customer specification — e.g. bespoke furniture, tailoring. High skill, flexible, expensive per unit." },
          { heading: "Batch production", body: "Groups of identical items produced together — e.g. bakery loaves, clothing sizes. Balances flexibility and efficiency." },
          { heading: "Flow production", body: "Continuous assembly line producing large volumes of standardised goods — e.g. cars, electronics. Very efficient, low unit cost, but inflexible and high initial investment." },
          { heading: "Choosing", body: "Job for customised/low volume; batch for moderate variety; flow for high volume standardised products." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A car manufacturer produces thousands of identical vehicles on a moving line. Which method?",
          solution: "Flow production — continuous assembly line for high-volume standardised goods.",
        },
      },
      questions: [
        {
          id: "olbus-u3-pm-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Flow production is best for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One-off custom items" },
            { id: "b", text: "Small batches" },
            { id: "c", text: "High-volume standardised products" },
            { id: "d", text: "Handmade goods" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Flow production", statement: "Mass production." }], steps: [{ reasoning: "High volume, standardised.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-pm-q2", difficulty: "core", totalMarks: 2,
          stem: "Name the three production methods.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Production methods", statement: "Three types." }], steps: [
            { reasoning: "Job, batch, flow.", marks: 1, markCode: "AO1" },
            { reasoning: "All three.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Job production, batch production, flow production." },
        },
        {
          id: "olbus-u3-pm-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Compare job and flow production — one advantage of each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Production comparison", statement: "Flexibility vs efficiency." }], steps: [
            { reasoning: "Job: flexible/customised. Flow: efficient/low unit cost.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct comparison.", marks: 1, markCode: "AO2" },
            { reasoning: "Both advantages.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Job = flexible/customised; flow = efficient/mass production." },
        },
        {
          id: "olbus-u3-pm-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Production methods review.",
          parts: [
            { label: "a", prompt: "Define job production.", marks: 1 },
            { label: "b", prompt: "Define batch production.", marks: 1 },
            { label: "c", prompt: "Define flow production.", marks: 1 },
            { label: "d", prompt: "Give an example of each.", marks: 3 },
            { label: "e", prompt: "When would a business choose batch over flow?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Production methods", statement: "Definitions and selection." },
          ], steps: [
            { part: "a", reasoning: "One-off customised items.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Groups of identical items.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Continuous mass production.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Valid examples for each.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Second/third examples.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "All three.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Moderate variety/volume needs.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Balance of flexibility and efficiency.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reasoning.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) one-off (b) batches (c) flow (d) examples (e) moderate variety" },
        },
        {
          id: "olbus-u3-pm-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Job production is used for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Standardised electronics" },
            { id: "b", text: "High-volume bread" },
            { id: "c", text: "One-off customised products" },
            { id: "d", text: "Mass-produced cars" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Job production", statement: "One-off custom." }], steps: [{ reasoning: "Job = one-off customised items.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-pm-q6", difficulty: "core", totalMarks: 1,
          stem: "Batch production involves…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Skipping quality checks" },
            { id: "b", text: "Producing groups of identical items together" },
            { id: "c", text: "Making one custom order at a time" },
            { id: "d", text: "Continuous flow 24 hours a day" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Batch production", statement: "Groups of identical items." }], steps: [{ reasoning: "Batch = groups of identical items.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-pm-q7", difficulty: "foundation", totalMarks: 1,
          stem: "An advantage of flow production is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Low unit cost at high volume" },
            { id: "b", text: "High flexibility" },
            { id: "c", text: "Full customisation" },
            { id: "d", text: "Low initial investment" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Flow production", statement: "Efficiency." }], steps: [{ reasoning: "Flow = efficient mass production, low unit cost.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-pm-q8", difficulty: "core", totalMarks: 2,
          stem: "A factory produces 4,800 units in 8 hours using 12 workers. What is the output per worker-hour?",
          response: { type: "numeric", parts: [{ label: "a", answer: 50, unit: "units" }] },
          markscheme: { principles: [{ kind: "principle", name: "Output per worker-hour", statement: "Output / (workers × hours)." }], steps: [
            { part: "a", reasoning: "4800 ÷ (12 × 8) = 4800 ÷ 96.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "50 units per worker-hour.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 50 units" },
        },
        {
          id: "olbus-u3-pm-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A bakery uses batch production and makes 3 batches of 200 loaves each day. (a) What is its daily output? (b) What is its weekly output if it operates 6 days a week?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 600, unit: "loaves" },
            { label: "b", answer: 3600, unit: "loaves" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Batch output", statement: "Batches × size × days." }], steps: [
            { part: "a", reasoning: "3 × 200 = 600 loaves per day.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "600 × 6 = 3600.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "3,600 loaves per week.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 600; **(b)** 3,600" },
        },
        {
          id: "olbus-u3-pm-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain one disadvantage of flow production.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Flow production", statement: "Drawbacks." }], steps: [
            { reasoning: "Inflexible — hard to change product design.", marks: 1, markCode: "AO2" },
            { reasoning: "High initial investment in machinery.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Inflexible and requires large upfront investment." },
        },
        {
          id: "olbus-u3-pm-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a furniture maker producing bespoke, made-to-order pieces would use job production.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Job production", statement: "Custom work." }], steps: [
            { reasoning: "Each piece is unique to customer specification.", marks: 1, markCode: "AO2" },
            { reasoning: "Low volume — not worth setting up flow/batch lines.", marks: 1, markCode: "AO2" },
            { reasoning: "Skilled workers can customise each item.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Bespoke low-volume work suits flexible job production." },
        },
        {
          id: "olbus-u3-pm-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A car manufacturer uses an assembly line to produce thousands of identical vehicles. This is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Job production" },
            { id: "b", text: "Batch production" },
            { id: "c", text: "Flow production" },
            { id: "d", text: "Hand production" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Flow production", statement: "Assembly line." }], steps: [{ reasoning: "Assembly line mass production = flow.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Flow production" },
        },
        {
          id: "olbus-u3-pm-q13", difficulty: "core", totalMarks: 2,
          stem: "A production line outputs 90 units per hour but its target is 120 units per hour. By how many units per hour is it below target?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30, unit: "units" }] },
          markscheme: { principles: [{ kind: "principle", name: "Output gap", statement: "Target - actual." }], steps: [
            { part: "a", reasoning: "120 - 90 = 30.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "30 units below target.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 30 units" },
        },
        {
          id: "olbus-u3-pm-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Batch production is most suitable when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Producing moderate quantities of similar items" },
            { id: "b", text: "No product variety is needed" },
            { id: "c", text: "Making one custom order" },
            { id: "d", text: "Mass-producing millions of units" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Batch production", statement: "Moderate variety." }], steps: [{ reasoning: "Batch suits moderate quantities of similar items.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-pm-q15", difficulty: "core", totalMarks: 2,
          stem: "A firm switches from job production costing $50 per unit to flow production costing $20 per unit for an order of 1,000 units. What is the total cost saving?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Cost saving", statement: "(Old - new) × quantity." }], steps: [
            { part: "a", reasoning: "(50 - 20) × 1000 = 30 × 1000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Saving = $30,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $30,000" },
        },
        {
          id: "olbus-u3-pm-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Production methods extended review.",
          parts: [
            { label: "a", prompt: "Define job production.", marks: 1 },
            { label: "b", prompt: "Define batch production.", marks: 1 },
            { label: "c", prompt: "Define flow production.", marks: 1 },
            { label: "d", prompt: "Give an example of each method.", marks: 3 },
            { label: "e", prompt: "When would a business choose batch production over flow production?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Production methods", statement: "Definitions and selection." },
          ], steps: [
            { part: "a", reasoning: "One-off customised items.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Groups of identical items.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Continuous mass production.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Valid examples for each.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Second/third examples.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "All three.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Moderate variety/volume needs.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Balance of flexibility and efficiency.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reasoning.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) one-off (b) batches (c) flow (d) examples (e) moderate variety" },
        },
      ],
    },
    {
      id: "olbus-u3-quality",
      title: "Quality Control",
      skill: "Explain the importance of quality and methods of quality control.",
      lesson: {
        sections: [
          { heading: "Why quality matters", body: "Quality affects customer satisfaction, reputation, repeat business and competitiveness. Poor quality leads to returns, refunds and lost customers." },
          { heading: "Quality methods", body: "- **Inspection**: checking finished products.\n- **Quality control (QC)**: monitoring production process.\n- **Total quality management (TQM)**: everyone responsible for quality at all stages." },
          { heading: "ISO standards", body: "International standards (e.g. ISO 9001) certify that a business meets quality management requirements — builds customer trust." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A factory inspects every 100th unit rather than every unit. What method is this?",
          solution: "Sampling inspection — a quality control method checking a representative sample.",
        },
      },
      questions: [
        {
          id: "olbus-u3-qc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Quality control is important because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It reduces production costs" },
            { id: "b", text: "It increases taxes" },
            { id: "c", text: "It slows production" },
            { id: "d", text: "It affects customer satisfaction and competitiveness" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Quality", statement: "Customer satisfaction." }], steps: [{ reasoning: "Quality → satisfaction → competitiveness.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-qc-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two quality control methods.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "QC methods", statement: "Inspection approaches." }], steps: [
            { reasoning: "Inspection, sampling, TQM, ISO standards — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: inspection, sampling, TQM, ISO certification." },
        },
        {
          id: "olbus-u3-qc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a business might seek ISO 9001 certification.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "ISO", statement: "Quality assurance." }], steps: [
            { reasoning: "Demonstrates commitment to quality.", marks: 1, markCode: "AO2" },
            { reasoning: "Builds customer trust and competitiveness.", marks: 1, markCode: "AO2" },
            { reasoning: "May be required for contracts/tenders.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "ISO certification proves quality standards, building trust and winning contracts." },
        },
        {
          id: "olbus-u3-qc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Quality review.",
          parts: [
            { label: "a", prompt: "Why does quality matter?", marks: 2 },
            { label: "b", prompt: "Name two QC methods.", marks: 2 },
            { label: "c", prompt: "What is TQM?", marks: 2 },
            { label: "d", prompt: "What does ISO 9001 certify?", marks: 1 },
            { label: "e", prompt: "Effect of poor quality on a business?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Quality", statement: "Importance and methods." },
          ], steps: [
            { part: "a", reasoning: "Satisfaction, reputation, competitiveness.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Two methods.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Everyone responsible for quality.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Quality management system.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Returns, lost customers, damaged reputation.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Clear effects.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) satisfaction (b) 2 methods (c) TQM def (d) QMS cert (e) returns/lost customers" },
        },
        {
          id: "olbus-u3-qc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Inspection in quality control means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Training production staff" },
            { id: "b", text: "Setting selling prices" },
            { id: "c", text: "Ordering raw materials" },
            { id: "d", text: "Checking finished products for defects" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Inspection", statement: "Checking products." }], steps: [{ reasoning: "Inspection = checking products for defects.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-qc-q6", difficulty: "core", totalMarks: 1,
          stem: "TQM stands for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Technical Quality Module" },
            { id: "b", text: "Total Quantity Measure" },
            { id: "c", text: "Time and Quality Monitoring" },
            { id: "d", text: "Total Quality Management" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "TQM", statement: "Total Quality Management." }], steps: [{ reasoning: "TQM = Total Quality Management.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-qc-q7", difficulty: "foundation", totalMarks: 1,
          stem: "ISO 9001 certification indicates that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Products are guaranteed free of all defects" },
            { id: "b", text: "A business meets international quality management standards" },
            { id: "c", text: "The business is government-owned" },
            { id: "d", text: "The business is the cheapest in its market" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "ISO 9001", statement: "Quality certification." }], steps: [{ reasoning: "ISO 9001 certifies quality management systems.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-qc-q8", difficulty: "core", totalMarks: 2,
          stem: "An inspector checks every 20th unit on a production line making 1,000 units. How many units are inspected?",
          response: { type: "numeric", parts: [{ label: "a", answer: 50, unit: "units" }] },
          markscheme: { principles: [{ kind: "principle", name: "Sampling", statement: "Total / interval." }], steps: [
            { part: "a", reasoning: "1000 ÷ 20 = 50.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "50 units inspected.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 50 units" },
        },
        {
          id: "olbus-u3-qc-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A factory produces 5,000 units and 200 fail inspection. (a) How many units pass? (b) What is the failure rate as a percentage?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 4800, unit: "units" },
            { label: "b", answer: 4, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Quality rate", statement: "Pass count and % fail." }], steps: [
            { part: "a", reasoning: "5000 - 200 = 4800.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "200 ÷ 5000 × 100 = 4%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Failure rate = 4%.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 4,800 units; **(b)** 4%" },
        },
        {
          id: "olbus-u3-qc-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain one benefit of total quality management (TQM).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "TQM", statement: "Everyone responsible." }], steps: [
            { reasoning: "Every employee takes responsibility for quality.", marks: 1, markCode: "AO2" },
            { reasoning: "Quality is built in at every stage, not just inspected at the end.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "TQM spreads quality responsibility across all staff and stages." },
        },
        {
          id: "olbus-u3-qc-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why poor quality can damage a business's reputation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Quality", statement: "Reputation." }], steps: [
            { reasoning: "Customers lose trust after receiving defective products.", marks: 1, markCode: "AO2" },
            { reasoning: "Returns, refunds and complaints increase costs.", marks: 1, markCode: "AO2" },
            { reasoning: "Negative word-of-mouth loses future customers.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Poor quality causes returns, complaints and lost customers through damaged trust." },
        },
        {
          id: "olbus-u3-qc-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Checking a random sample of products rather than every single unit is called…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Market research" },
            { id: "b", text: "Flow production" },
            { id: "c", text: "Sampling inspection" },
            { id: "d", text: "Job production" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Sampling inspection", statement: "Sample checks." }], steps: [{ reasoning: "Checking a sample = sampling inspection.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Sampling inspection" },
        },
        {
          id: "olbus-u3-qc-q13", difficulty: "core", totalMarks: 2,
          stem: "A company recalls 150 defective units out of 6,000 units sold. What percentage of units sold are defective?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.5, unit: "%" }] },
          markscheme: { principles: [{ kind: "principle", name: "Defect rate", statement: "Defects / total × 100." }], steps: [
            { part: "a", reasoning: "150 ÷ 6000 × 100 = 2.5%.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "2.5% defective.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 2.5%" },
        },
        {
          id: "olbus-u3-qc-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Quality control focuses on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Maximising output regardless of quality" },
            { id: "b", text: "Ensuring products meet required standards" },
            { id: "c", text: "Reducing staff numbers" },
            { id: "d", text: "Increasing prices" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Quality control", statement: "Meeting standards." }], steps: [{ reasoning: "QC ensures products meet standards.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-qc-q15", difficulty: "core", totalMarks: 2,
          stem: "A company spends $4,000 on quality control training which reduces defects and saves $10,000. What is the net benefit?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Net benefit", statement: "Saving - cost." }], steps: [
            { part: "a", reasoning: "10000 - 4000 = 6000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Net benefit = $6,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $6,000" },
        },
        {
          id: "olbus-u3-qc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Quality extended review.",
          parts: [
            { label: "a", prompt: "Why does quality matter to a business?", marks: 2 },
            { label: "b", prompt: "Name two quality control methods.", marks: 2 },
            { label: "c", prompt: "What is TQM?", marks: 2 },
            { label: "d", prompt: "What does ISO 9001 certify?", marks: 1 },
            { label: "e", prompt: "What are the effects of poor quality on a business?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Quality", statement: "Importance and methods." },
          ], steps: [
            { part: "a", reasoning: "Satisfaction, reputation, competitiveness.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Two methods.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Everyone responsible for quality.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Quality management system.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Returns, lost customers, damaged reputation.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Clear effects.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) satisfaction (b) 2 methods (c) TQM def (d) QMS cert (e) returns/lost customers" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u3-3-1-notes", title: "Production methods — notes", summary: "Job, batch, flow production and quality control.",
      sections: [
        { heading: "Production", body: "Job = custom one-off; batch = groups; flow = mass production. Choose by volume and variety." },
        { heading: "Quality", body: "Inspection, sampling, TQM, ISO 9001 — quality drives satisfaction and competitiveness." },
      ] },
  ],
};
