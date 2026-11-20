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
            { id: "a", text: "High-volume standardised products" }, { id: "b", text: "One-off custom items" }, { id: "c", text: "Small batches" }, { id: "d", text: "Handmade goods" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "It affects customer satisfaction and competitiveness" }, { id: "b", text: "It reduces production costs" }, { id: "c", text: "It increases taxes" }, { id: "d", text: "It slows production" },
          ], correctChoiceId: "a" },
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
