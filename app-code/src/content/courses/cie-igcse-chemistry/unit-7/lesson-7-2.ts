import type { Lesson } from "../../../types.ts";

export const lesson172: Lesson = {
  id: "ciecy-u7-lesson-7-2",
  code: "7-2",
  title: "Titration and Indicators",
  goal: "I CAN describe titration procedure, indicators and pH curves.",
  standards: ["0654 7.2"],
  vocabulary: [
    { term: "Titration", definition: "Accurate method to find concentration of unknown solution." },
    { term: "Burette", definition: "Graduated tube delivering measured volumes of solution." },
    { term: "Pipette", definition: "Delivers fixed volume (usually 25 cm³) of solution." },
    { term: "Conical flask", definition: "Container for titration — swirling without splashing." },
    { term: "Endpoint", definition: "Point where indicator changes — reaction complete." },
    { term: "Indicator", definition: "Substance changing colour near neutral point (litmus, methyl orange, phenolphthalein)." },
    { term: "Titration curve", definition: "Graph of pH vs volume added showing equivalence point." },
    { term: "Equivalence point", definition: "Point where moles acid = moles alkali." },
  ],
  concepts: [
    {
      id: "ciecy-u7-titration",
      title: "Titration procedure",
      skill: "Describe acid–alkali titration and choose appropriate indicators.",
      lesson: {
        sections: [
          {
            heading: "Procedure",
            body: "1. Rinse burette with solution, fill with known concentration\n2. Pipette fixed volume (25 cm³) of unknown into conical flask\n3. Add 2-3 drops indicator\n4. Titrate: add solution, swirl, until colour just changes\n5. Record volume; repeat for concordant titres (±0.1 cm³)\n6. Calculate concentration",
          },
          {
            heading: "Indicators",
            body: "| Indicator | Acid | Neutral | Alkali | Use for |\n|---|---|---|---|---|\n| Litmus | red | purple | blue | rough only |\n| Methyl orange | red | orange | yellow | strong acid-strong base |\n| Phenolphthalein | colourless | colourless | pink | strong base titrations |",
          },
          {
            heading: "Calculations",
            body: "At endpoint: n(acid) = n(alkali) for 1:1 reaction.\nc₁V₁ = c₂V₂ (when ratio 1:1).\n\nUse moles: n = c×V for each, apply mole ratio.",
          },
        ],
        keyFormulas: [
          { name: "Titration", statement: "$n_{acid} = n_{base}\\ \\text{at endpoint (1:1)}$" },
        ],
        workedExample: {
          problem: "25 cm³ of 0.1 mol/dm³ NaOH needs 20 cm³ HCl. Find HCl concentration.",
          solution: "n(NaOH) = 0.1 × 0.025 = 0.0025 mol. HCl 1:1 → n(HCl) = 0.0025 mol. c = 0.0025/0.020 = 0.125 mol/dm³.",
        },
      },
      questions: [
        {
          id: "ciecy-u7-titration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the endpoint in a titration?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Start of experiment" }, { id: "b", text: "Indicator colour change" }, { id: "c", text: "Maximum volume" }, { id: "d", text: "Equivalence point of pH 7" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Endpoint", statement: "Indicator colour change = reaction complete." }],
            steps: [{ reasoning: "Recall.", working: "\\text{colour change}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Indicator colour change",
            commonErrors: ["Endpoint vs equivalence — endpoint is observed colour change."],
          },
        },
        {
          id: "ciecy-u7-titration-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is phenolphthalein suitable for titrating strong acid with strong base?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Indicator choice", statement: "Colour change near pH 7-10." }],
            steps: [
              { reasoning: "Changes colour in alkaline range.", marks: 1, markCode: "M" },
              { reasoning: "Matches equivalence point region.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Phenolphthalein changes colour around pH 8-10, which coincides with the steep part of the titration curve near the equivalence point for strong acid–strong base.",
            commonErrors: ["Saying litmus is better — it changes over wide range."],
          },
        },
        {
          id: "ciecy-u7-titration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "25 cm³ of NaOH solution needs 18.5 cm³ of 0.2 mol/dm³ HCl. Calculate NaOH concentration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Titration", statement: "n acid = n base (1:1)." }],
            steps: [
              { reasoning: "n(HCl) = 0.2 × 0.0185 = 0.0037 mol.", marks: 1, markCode: "M" },
              { reasoning: "n(NaOH) = 0.0037 mol.", marks: 1, markCode: "M" },
              { reasoning: "c(NaOH) = 0.0037/0.025.", marks: 1, markCode: "M" },
              { reasoning: "= 0.148 mol/dm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.148 mol/dm³",
            commonErrors: ["Using cm³ directly — convert to dm³."],
          },
        },
        {
          id: "ciecy-u7-titration-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe an acid–alkali titration to find the concentration of an unknown alkali.",
          parts: [
            { label: "a", prompt: "Describe the apparatus setup.", marks: 3 },
            { label: "b", prompt: "Describe the procedure.", marks: 4 },
            { label: "c", prompt: "State how concentration is calculated.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Titration", statement: "Burette+pipette+flask+indicator." }],
            steps: [
              { part: "a", reasoning: "Burette with known acid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Pipette 25 cm³ unknown + indicator.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conical flask under burette.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Titrate to colour change.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Record volume; repeat.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Concordant titres ±0.1.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use mean titre.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "n=cV for both; ratio 1:1.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for unknown c.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) burette+pipette+flask (b) titrate→repeat→mean (c) n=cV",
            commonErrors: ["In (b) not repeating for concordant results."],
          },
        },
      ],
    },
    {
      id: "ciecy-u7-ph-curves",
      title: "pH curves",
      skill: "Interpret titration curves for different acid–base combinations.",
      lesson: {
        sections: [
          {
            heading: "Types of curves",
            body: "| Combination | Equivalence pH | Curve shape |\n|---|---|---|\n| Strong acid + strong base | 7 | steep drop |\n| Strong acid + weak base | <7 | less steep |\n| Weak acid + strong base | >7 | less steep |\n| Weak acid + weak base | ~7 | very gradual |",
          },
          {
            heading: "Reading the curve",
            body: "- Equivalence point = steepest part\n- pH at equivalence depends on strengths\n- Buffer regions: gradual pH change near weak acid pKa",
          },
          {
            heading: "Indicator selection",
            body: "Choose indicator that changes colour within the steep portion of the curve — so endpoint ≈ equivalence point.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does weak acid + strong base give equivalence pH > 7?",
          solution: "At equivalence, solution contains only salt of weak acid + strong base — the anion hydrolyses to give alkaline solution.",
        },
      },
      questions: [
        {
          id: "ciecy-u7-ph-curves-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the equivalence point on a titration curve?",
          response: { type: "mcq", choices: [
            { id: "a", text: "pH = 7 always" }, { id: "b", text: "Steepest part of curve" }, { id: "c", text: "Start of titration" }, { id: "d", text: "End of curve" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Equivalence point", statement: "Steepest point where moles equal." }],
            steps: [{ reasoning: "Recall.", working: "\\text{steepest}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Steepest part of curve",
            commonErrors: ["Assuming always pH 7."],
          },
        },
        {
          id: "ciecy-u7-ph-curves-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the equivalence point pH above 7 for weak acid + strong base?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Salt hydrolysis", statement: "Weak acid anion gives alkaline solution." }],
            steps: [
              { reasoning: "Salt of weak acid + strong base.", marks: 1, markCode: "M" },
              { reasoning: "Anion hydrolyses → OH⁻ → pH>7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At equivalence the solution contains the salt of a weak acid and strong base; the anion hydrolyses producing OH⁻ ions, making the solution alkaline (pH > 7).",
            commonErrors: ["Saying 'acid is stronger' — it's about salt hydrolysis."],
          },
        },
        {
          id: "ciecy-u7-ph-curves-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare titration curves for strong acid–strong base vs weak acid–strong base.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Curves", statement: "Weak acid: less steep, equivalence pH>7." }],
            steps: [
              { reasoning: "Strong: steep, pH 7.", marks: 1, markCode: "M" },
              { reasoning: "Weak: gradual start, less steep.", marks: 1, markCode: "M" },
              { reasoning: "Equivalence pH >7 for weak.", marks: 1, markCode: "M" },
              { reasoning: "Conclude comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong acid–strong base: steep curve, equivalence at pH 7. Weak acid–strong base: less steep (buffer region), equivalence above pH 7.",
            commonErrors: ["Saying weak curve is 'flatter overall'."],
          },
        },
        {
          id: "ciecy-u7-ph-curves-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe and interpret titration curves.",
          parts: [
            { label: "a", prompt: "Describe strong acid–strong base curve.", marks: 3 },
            { label: "b", prompt: "Describe weak acid–strong base curve.", marks: 3 },
            { label: "c", prompt: "Explain indicator selection.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Titration curves", statement: "Shape depends on acid/base strength." }],
            steps: [
              { part: "a", reasoning: "Steep, pH 7 eq.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Full range ~1-13.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Less steep, buffer region.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Eq pH >7.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Indicator must change near eq.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Within steep portion.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ensures accurate endpoint.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) steep pH7 (b) less steep pH>7 (c) change near eq",
            commonErrors: ["In (c) choosing indicator by colour preference."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u7-titration-notes",
      title: "Titration and pH curves — revision notes",
      summary: "Titration procedure, indicators, curve interpretation.",
      sections: [
        {
          heading: "Key facts",
          body: "Endpoint = indicator change. Equivalence = steepest point. Strong+strong → pH7 steep. Weak+strong → pH>7 less steep. Phenolphthalein for strong base, methyl orange for strong acid.",
        },
        {
          heading: "Exam technique",
          body: "- Repeat for concordant titres (±0.1 cm³).\n- Indicator chosen by curve steep region.\n- Salt hydrolysis explains eq pH.",
        },
      ],
    },
  ],
};
