import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "esc11-u4-lesson-4-2",
  code: "4-2",
  title: "Error Analysis and Uncertainty",
  goal: "I CAN quantify uncertainty and propagate errors in calculations.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Investigative Skills (Y11)"],
  vocabulary: [
    { term: "Absolute uncertainty", definition: "± value in same units as measurement." },
    { term: "Percentage uncertainty", definition: "Uncertainty as % of measurement — used in calculations." },
    { term: "Error propagation", definition: "Combining uncertainties through calculations." },
    { term: "Significant figures", definition: "Digits carrying meaning — match precision to uncertainty." },
  ],
  concepts: [
    {
      id: "esc11-u4-uncertainty",
      title: "Uncertainty and Error Propagation",
      skill: "Calculate and combine uncertainties in multi-step calculations.",
      lesson: {
        sections: [
          { heading: "Quantifying uncertainty", body: "**Instrument uncertainty**: half smallest division (ruler ±0.5mm, thermometer ±0.5°C, balance ±0.01g). **Repeated readings**: uncertainty = half range of repeats. **Percentage uncertainty** = absolute ÷ value × 100%.\n\n**Reporting**: result to same decimal places as uncertainty — 2.50 ± 0.05 cm (not 2.5 ± 0.05). Significant figures: uncertainty determines sig figs — ±0.05 → 2 decimal places." },
          { heading: "Propagating uncertainty", body: "**Addition/subtraction**: add absolute uncertainties. **Multiplication/division**: add percentage uncertainties. **Powers**: multiply percentage uncertainty by power.\n\n**Example**: density = mass/volume. Mass = 50.0±0.1g (0.2%), volume = 20.0±0.5cm³ (2.5%) → density uncertainty = 0.2+2.5 = 2.7%. Density = 2.50 g/cm³ → 2.50 ± 0.07 g/cm³.\n\n**Interpretation**: if two results' uncertainty ranges overlap → not significantly different; if not → significant difference." },
        ],
        keyFormulas: [
          { name: "Uncertainty rules", statement: "Add/subtract: absolute; multiply/divide: percentage; power: ×power." },
          { name: "Reporting", statement: "Result decimals match uncertainty decimals." },
        ],
        workedExample: { problem: "Area = 10.0±0.1 × 5.0±0.1 cm. Find area and uncertainty.", solution: "Area = 50.0 cm²; %unc = 1%+2% = 3% → ±1.5 → 50±2 cm²." },
      },
      questions: [
        {
          id: "esc11-u4-uncertainty-q1", difficulty: "foundation", totalMarks: 2,
          stem: "A ruler measures to nearest mm. What is the uncertainty of one reading?",
          response: { type: "numeric", parts: [{ label: "Uncertainty (mm)", answer: 0.5 }] },
          markscheme: { principles: [{ kind: "definition", name: "Instrument uncertainty", statement: "Half smallest division = 0.5 mm." }],
            steps: [{ reasoning: "0.5 mm.", marks: 2, markCode: "M" }],
            finalAnswer: "±0.5 mm", commonErrors: ["1 mm assumed."] },
        },
        {
          id: "esc11-u4-uncertainty-q2", difficulty: "core", totalMarks: 3,
          stem: "Calculate percentage uncertainty: 25.0 ± 0.5 cm.",
          response: { type: "numeric", parts: [{ label: "Percentage uncertainty (%)", answer: 2 }] },
          markscheme: { principles: [{ kind: "formula", name: "% uncertainty", statement: "0.5/25.0 × 100 = 2%." }],
            steps: [{ reasoning: "2%.", marks: 3, markCode: "M" }],
            finalAnswer: "2%", commonErrors: ["Wrong division."] },
        },
        {
          id: "esc11-u4-uncertainty-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Density = mass/volume. Mass = 100.0±0.5g, volume = 50.0±1.0cm³. Calculate density and its uncertainty.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Uncertainty propagation", statement: "% uncertainties add for division." }],
            steps: [
              { reasoning: "Density = 100/50 = 2.00 g/cm³.", marks: 1, markCode: "M" },
              { reasoning: "% unc: mass 0.5%, volume 2% → total 2.5%.", marks: 1, markCode: "M" },
              { reasoning: "Absolute unc = 2.00 × 0.025 = 0.05.", marks: 1, markCode: "M" },
              { reasoning: "Result: 2.00 ± 0.05 g/cm³.", marks: 1, markCode: "A" }],
            finalAnswer: "2.00 ± 0.05 g/cm³", commonErrors: ["Absolute not % used.", "Not added."] },
        },
        {
          id: "esc11-u4-uncertainty-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Two groups measure reaction rate: Group A = 5.0±0.2 s, Group B = 5.5±0.3 s.",
          parts: [
            { label: "a", prompt: "Do the results differ significantly? Justify.", marks: 4 },
            { label: "b", prompt: "What does this mean practically?", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Significance", statement: "Overlap in uncertainty ranges → not significant." }],
            steps: [
              { reasoning: "(a) A range: 4.8-5.2; B range: 5.2-5.8.", marks: 2, markCode: "M", part: "a" },
              { reasoning: "(a) Ranges just touch at 5.2 — borderline.", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(a) Means differ by 0.5 — within combined uncertainty.", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(b) Difference not significant — could be random variation.", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(b) Need more repeats or larger effect size.", marks: 2, markCode: "AO3", part: "b" }],
            finalAnswer: "(a) borderline — ranges touch at 5.2 (b) not significant — within uncertainty, need more data", commonErrors: ["Any difference = significant.", "No uncertainty used."] },
        },
      ],
    },
    {
      id: "esc11-u4-critical",
      title: "Critical Evaluation of Scientific Claims",
      skill: "Evaluate scientific claims, peer review and identify limitations.",
      lesson: {
        sections: [
          { heading: "Evaluating claims", body: "**Evidence hierarchy**: systematic reviews > RCTs > cohort studies > case-control > case reports > expert opinion. **Sample size**: small samples unreliable — statistical power matters. **Bias**: selection, publication, confirmation, observer.\n\n**Peer review**: experts check methodology before publication — imperfect but filters errors. **Replication**: independent repetition confirms results — gold standard for validity. **Funding/conflicts**: industry-funded research may have bias — check declarations." },
          { heading: "Limitations and improvements", body: "**Common limitations**: small sample, short duration, uncontrolled variables, laboratory vs real-world, ethical constraints. **Improvements**: larger samples, longer studies, better controls, real-world validation, meta-analysis (combining studies).\n\n**Scientific method**: observation → hypothesis → prediction → experiment → analysis → conclusion → peer review → replication. Science is provisional — conclusions can be revised with new evidence." },
        ],
        keyFormulas: [
          { name: "Evidence hierarchy", statement: "RCTs and systematic reviews strongest; case reports weakest." },
          { name: "Replication", statement: "Independent repetition confirms — strongest validity check." },
        ],
        workedExample: { problem: "A headline claims 'Coffee cures cancer' based on one small study. Critique.", solution: "Small sample, possible confounders, no replication — insufficient evidence; need RCTs and meta-analysis." },
      },
      questions: [
        {
          id: "esc11-u4-critical-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What is peer review?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Expert evaluation before publication" },
            { id: "b", text: "Public voting on research" },
            { id: "c", text: "Self-assessment" },
            { id: "d", text: "Government approval" }
], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Peer review", statement: "Experts evaluate research before publication." }],
            steps: [{ reasoning: "Expert evaluation before publication.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(a)** Expert evaluation", commonErrors: ["Public vote assumed."] },
        },
        {
          id: "esc11-u4-critical-q2", difficulty: "core", totalMarks: 3,
          stem: "Why is replication important in science?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Replication", statement: "Independent repetition confirms results — strongest validity check." }],
            steps: [
              { reasoning: "Independent teams repeat experiment.", marks: 1, markCode: "AO2" },
              { reasoning: "Same results = confidence in validity.", marks: 1, markCode: "AO2" },
              { reasoning: "Different results = identify errors/flaws.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Independent repetition confirms results — if replicated, high confidence; if not, reveals flaws.", commonErrors: ["Same team repeats.", "No validity link."] },
        },
        {
          id: "esc11-u4-critical-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A study of 20 patients shows drug works. Critique this evidence.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sample size", statement: "Small samples unreliable — need statistical power." }],
            steps: [
              { reasoning: "Only 20 patients — too small.", marks: 1, markCode: "AO2" },
              { reasoning: "May not represent wider population.", marks: 1, markCode: "AO2" },
              { reasoning: "Could be chance — need larger trial.", marks: 1, markCode: "AO2" },
              { reasoning: "Suggest RCT with hundreds + controls.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Sample too small — may not generalise or be statistically significant; need larger RCT.", commonErrors: ["Any evidence accepted.", "No improvement."] },
        },
        {
          id: "esc11-u4-critical-q4", difficulty: "challenge", totalMarks: 8,
          stem: "A news article claims 'New superfood prevents cancer' citing one study.",
          parts: [
            { label: "a", prompt: "List three questions to ask about the evidence.", marks: 3 },
            { label: "b", prompt: "Explain what would constitute strong evidence.", marks: 3 },
            { label: "c", prompt: "Suggest why media might exaggerate findings.", marks: 2 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Evidence evaluation", statement: "Question methodology, sample, replication before believing claims." }],
            steps: [
              { reasoning: "(a) Sample size? Control group? Replicated?", marks: 2, markCode: "AO3", part: "a" },
              { reasoning: "(a) Peer reviewed? Conflicts of interest?", marks: 1, markCode: "AO3", part: "a" },
              { reasoning: "(b) RCTs + meta-analysis + independent replication.", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(b) Large samples, long-term follow-up.", marks: 1, markCode: "AO2", part: "b" },
              { reasoning: "(c) Headlines attract clicks — simplification for impact.", marks: 2, markCode: "AO3", part: "c" }],
            finalAnswer: "(a) sample/control/replication (b) RCTs+meta-analysis (c) media sensationalism", commonErrors: ["Accept headline.", "No evidence criteria."] },
        },
      ],
    },
  ],
};
